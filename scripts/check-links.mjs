#!/usr/bin/env node
// Zero-dependency dead-link checker for the bitcoin-only site.
//
// Usage:
//   node scripts/check-links.mjs                # check all links (cached results)
//   node scripts/check-links.mjs --fresh        # ignore cache, re-check everything
//   node scripts/check-links.mjs --limit 50     # only check the first 50 links (quick smoke test)
//   node scripts/check-links.mjs --verbose      # print report of every URL
//
// Collects URLs from app/data/*.js (string values in the exported data) and a
// line scan of every file under app/ (pages, components, layouts, config…),
// then verifies each external URL with HTTP HEAD/GET and each internal URL
// against the built .output/public/ folder. Results are cached in
// .cache/link-cache.json (7 day TTL) and a full report written to
// .cache/link-report.json. Exits with code 1 if any dead link is found.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs'
import { join, extname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const CACHE_DIR = join(ROOT, '.cache')
const CACHE_FILE = join(CACHE_DIR, 'link-cache.json')
const REPORT_FILE = join(CACHE_DIR, 'link-report.json')
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000
const SKIP_SCHEMES = new Set(['mailto:', 'tel:', 'bitcoin:', 'lightning:', 'ftp:'])
const PLACEHOLDER_HOSTS = /(localhost|127\.0\.0\.1|example\.com|example\.org|yourdomain|tbd|placeholder)/i

const args = process.argv.slice(2)
const FRESH = args.includes('--fresh')
const VERBOSE = args.includes('--verbose')
const LIMIT = parseArgNum(args, '--limit')
const CONCURRENCY = parseArgNum(args, '--concurrency') ?? 16
const TIMEOUT_MS = parseArgNum(args, '--timeout') ?? 25000

const URL_RE = /https?:\/\/[^\s"'<>`\\[\]{}]+/g

function parseArgNum(args, name) {
	const i = args.indexOf(name)
	if (i === -1) return undefined
	const v = Number(args[i + 1])
	return Number.isFinite(v) ? v : undefined
}

function log(...a) {
	console.log(...a)
}
function warn(...a) {
	console.error('WARN:', ...a)
}

// ---------- URL collection ----------

function collectFromFile(file, srcLabel, found) {
	const raw = readFileSync(file, 'utf8')
	const lines = raw.split('\n')
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i]
		for (const match of line.matchAll(URL_RE)) {
			addUrl(match[0], `${srcLabel}:${i + 1}`, found)
		}
		for (const match of line.matchAll(RELATIVE_PATH_RE)) {
			addRelativeLink(match[1], `${srcLabel}:${i + 1}`, found)
		}
	}
}

async function collectFromDataModules(found) {
	const dir = join(ROOT, 'app', 'data')
	for (const file of readdirSync(dir).filter((f) => f.endsWith('.js'))) {
		const url = pathToFileURL(join(dir, file)).href
		let mod
		try {
			mod = await import(url)
		} catch (err) {
			warn(`could not import ${file}: ${err.message}`)
			continue
		}
		const blob = JSON.stringify(Object.fromEntries(Object.entries(mod).filter(([, v]) => typeof v !== 'function')))
		for (const match of blob.matchAll(URL_RE)) {
			addUrl(match[0], `app/data/${file}`, found)
		}
	}
}

function addUrl(raw, source, found) {
	let url = raw.trim()
	url = url.replace(/[.,;:!?]+$/g, (m) => (m.length > 1 && url.endsWith('...') ? m : m.slice(0, -1)))
	url = url.replace(/["']+$/g, '')
	url = stripBalanced(url)
	if (url.includes('${')) return
	let parsed
	try {
		parsed = new URL(url)
	} catch {
		return
	}
	if (parsed.hostname && PLACEHOLDER_HOSTS.test(parsed.hostname)) return

	const href = parsed.href
	const entry = found.get(href)
	if (entry) {
		entry.sources.push(source)
		return
	}
	const isInternal =
		parsed.protocol === 'http:' || parsed.protocol === 'https:'
			? parsed.hostname === 'www.bitcoin-only.com' || parsed.hostname === 'bitcoin-only.com'
			: false
	found.set(href, {
		url: href,
		withoutHash: href.split('#')[0],
		hash: href.includes('#') ? href.slice(href.indexOf('#')) : '',
		internal: isInternal,
		skipped: SKIP_SCHEMES.has(parsed.protocol),
		sources: [source],
	})
}

// Removes trailing ")" only when it closes an opening "(", e.g. markdown (url)
// or Wikipedia-style (disambiguation), without mangling genuine trailing parens.
function stripBalanced(url) {
	let out = url
	while (out.endsWith(')')) {
		const opens = (out.match(/\(/g) || []).length
		const closes = (out.match(/\)/g) || []).length
		if (closes > opens) out = out.slice(0, -1)
		else break
	}
	out = out.replace(/[\]}>'"`]+$/g, '')
	return out
}

const RELATIVE_PATH_RE = /(?:href|src)\s*=\s*["'](\/[^"'?]+(?:\?[^"'#]*)?(?:#[^"']*)?)["']/g

function addRelativeLink(rel, source, found) {
	if (rel.startsWith('#')) return
	const base = new URL(rel, 'https://bitcoin-only.com').href
	const entry = found.get(base)
	if (entry) {
		entry.sources.push(source)
		return
	}
	found.set(base, {
		url: base,
		withoutHash: base.split('#')[0],
		hash: base.includes('#') ? base.slice(base.indexOf('#')) : '',
		internal: true,
		skipped: false,
		sources: [source],
	})
}

function collectInternalLinksFromDist(found) {
	const dist = join(ROOT, '.output', 'public')
	if (!exists(dist)) return
	const internal = [...found.values()].filter((e) => e.internal && !e.skipped)
	for (const entry of internal) {
		const pathname = decodeURIComponent(new URL(entry.withoutHash).pathname)
		const candidates = [join(dist, pathname), join(dist, pathname, 'index.html'), join(dist, pathname + '.html')]
		entry.exists = candidates.some((c) => exists(c))
	}
}

function exists(p) {
	try {
		return statSync(p).isFile()
	} catch {
		return false
	}
}

// ---------- HTTP checking ----------

function readCache() {
	if (FRESH) return new Map()
	try {
		return new Map(Object.entries(JSON.parse(readFileSync(CACHE_FILE, 'utf8'))))
	} catch {
		return new Map()
	}
}

function writeCache(map) {
	mkdirSync(CACHE_DIR, { recursive: true })
	writeFileSync(CACHE_FILE, JSON.stringify(Object.fromEntries(map), null, 2))
}

function cachedEntry(cache, url) {
	const entry = cache.get(url)
	if (!entry) return null
	const checkedAt = entry.checkedAt ?? 0
	if (Date.now() - checkedAt > CACHE_TTL_MS) return null
	return entry
}

async function request(url, opts = {}) {
	const controller = new AbortController()
	const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
	try {
		const res = await fetch(url, { redirect: 'follow', signal: controller.signal, ...opts })
		return { status: res.status, ok: res.ok }
	} finally {
		clearTimeout(timer)
	}
}

async function checkUrl(url) {
	// Prefer HEAD; some servers refuse it, so fall back to GET.
	const head = await request(url, { method: 'HEAD' })
	if (head.status && ![405, 403, 501].includes(head.status)) return head
	const get = await request(url)
	return get.status ? get : head
}

function isIgnorableFailure(entry) {
	// Root path of preconnect hosts returns 404 but the host itself is fine.
	try {
		const u = new URL(entry.withoutHash)
		if (['fonts.gstatic.com', 'fonts.googleapis.com'].includes(u.hostname) && u.pathname === '/') return true
	} catch {
		/* keep */
	}
	return false
}

// ---------- main ----------

async function main() {
	const found = new Map()
	await collectFromDataModules(found)
	const appDir = join(ROOT, 'app')
	for (const entry of walkFiles(appDir)) {
		const rel = entry.slice(appDir.length + 1)
		if (rel.startsWith('public')) continue
		if (!TEXT_EXTENSIONS.has(extname(entry).toLowerCase())) continue
		collectFromFile(entry, `app/${rel}`, found)
	}
	for (const file of ['nuxt.config.js', 'README.md']) {
		const p = join(ROOT, file)
		if (exists(p)) collectFromFile(p, file, found)
	}

	const all = [...found.values()]
	const skipped = all.filter((e) => e.skipped)
	const toCheck = all.filter((e) => !e.skipped)
	collectInternalLinksFromDist(found)

	log(
		`Found ${all.length} unique URLs (${skipped.length} skipped by scheme: ${[...SKIP_SCHEMES].map((s) => s.replace(':', '')).join(', ')}).`,
	)

	const cache = readCache()
	const tasks = toCheck
	let toRun = tasks.filter((e) => !e.internal && !cachedEntry(cache, e.url))
	if (LIMIT && toRun.length > LIMIT) toRun = toRun.slice(0, LIMIT)
	log(`Checking ${toRun.length} external URL(s) for liveness…`)

	const results = new Map()
	let next = 0
	async function worker() {
		while (next < toRun.length) {
			const entry = toRun[next++]
			const url = entry.url
			let status
			try {
				status = (await checkUrl(url)).status
			} catch {
				status = 0 // network failure (DNS, timeout, ssl…)
			}
			cache.set(url, { status, checkedAt: Date.now() })
			results.set(url, status)
			const word = status >= 200 && status < 400 ? 'ok' : status === 0 ? 'error' : 'DEAD'
			if (VERBOSE) log(`  [${status || 'ERR'}] ${url}`)
			else if (word !== 'ok') log(`  [${status || 'ERR'}] ${url}`)
		}
	}
	await Promise.all(Array.from({ length: CONCURRENCY }, worker))
	writeCache(cache)

	// Merge cached + fresh statuses into a report.
	for (const entry of tasks) {
		if (entry.status === undefined && !entry.internal) {
			const c = cachedEntry(cache, entry.url)
			if (c) entry.status = c.status
		}
	}

	const dead = tasks.filter(
		(e) => e.status !== undefined && !isIgnorableFailure(e) && (e.status === 0 || e.status >= 400),
	)
	const missingInternal = tasks.filter((e) => e.internal && e.exists === false)
	const ok = tasks.filter((e) => !e.internal && e.status !== undefined && e.status < 400)

	mkdirSync(CACHE_DIR, { recursive: true })
	writeFileSync(REPORT_FILE, JSON.stringify({ generatedAt: new Date().toISOString(), dead, missingInternal }, null, 2))

	log('\n─── Summary ───')
	log(`  OK:             ${ok.length}`)
	log(`  Dead / errors:  ${dead.length}`)
	log(`  Internal 404s:  ${missingInternal.length}`)
	log(`  Skipped:        ${all.length - toCheck.length}`)
	if (dead.length) {
		log('\n─── Dead links ───')
		for (const entry of dead) {
			log(`  [${entry.status || 'ERR'}] ${entry.url}`)
			log(`      used in: ${[...new Set(entry.sources)].join('  ')}`)
		}
	}
	if (missingInternal.length) {
		log('\n─── Internal links missing from .output/public/ ───')
		for (const entry of missingInternal) {
			log(`  ${entry.url}  (${entry.sources.join(', ')})`)
		}
	}
	log(`\nFull report: ${REPORT_FILE}`)
	if (dead.length || missingInternal.length) process.exitCode = 1
}

function* walkFiles(dir) {
	for (const ent of readdirSync(dir, { withFileTypes: true })) {
		const full = join(dir, ent.name)
		if (ent.isDirectory()) yield* walkFiles(full)
		else yield full
	}
}

const TEXT_EXTENSIONS = new Set(['.vue', '.js', '.mjs', '.ts', '.md', '.txt', '.json', '.css', '.scss', '.html'])

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
