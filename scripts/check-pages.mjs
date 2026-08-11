#!/usr/bin/env node
// Zero-dependency build smoke test for the bitcoin-only site.
//
// Usage:
//   node scripts/check-pages.mjs            # verify .output/public after generate
//
// Verifies, against the generated static build in .output/public:
//   1. Every route declared by app/pages/*.vue renders to an index.html file.
//   2. Each page <title> matches the route's expected title fragment.
//   3. Each page contains its own <h1> heading.
//   4. Data-driven pages contain real content from their app/data module
//      (first title of each exported section — derived at runtime, so the
//      assertion never goes stale when entries are added or removed).
//   5. sitemap.xml lists every route.
//   6. 200.html and 404.html exist.
// Exits with code 1 if any check fails.

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..')
const PUBLIC_DIR = join(ROOT, '.output', 'public')
const PAGES_DIR = join(ROOT, 'app', 'pages')
const DATA_DIR = join(ROOT, 'app', 'data')

// route -> <title> fragment (must appear in the generated page title)
const TITLE_FRAGMENTS = {
	'': 'Bitcoin Only',
	about: 'About',
	books: 'Books',
	conferences: 'Conferences',
	contact: 'Contact',
	'dev-tools': 'Dev Tools',
	'explorers-dashboards': 'Explorers',
	'get-bitcoin': 'Get Bitcoin',
	hardware: 'Hardware',
	jobs: 'Jobs',
	'learning-resources': 'Learning Resources',
	'listing-requirements': 'Listing Requirements',
	meetups: 'Meetups',
	peers: 'Peers',
	podcasts: 'Podcasts',
	privacy: 'Privacy',
	promote: 'Promote',
	'spend-bitcoin': 'Spend Bitcoin',
	'store-tools': 'Store Tools',
	videos: 'Videos',
	wallets: 'Wallets',
	'what-is-bitcoin': 'What is Bitcoin',
}

// page route -> data module basename whose content must appear in the page
const PAGE_DATA = {
	books: 'books',
	conferences: 'conferences',
	'dev-tools': 'dev-tools',
	'explorers-dashboards': 'explorers-dashboards',
	'get-bitcoin': 'get-bitcoin',
	hardware: 'hardware',
	'learning-resources': 'learning-resources',
	meetups: 'meetups',
	peers: 'peers',
	podcasts: 'podcasts',
	privacy: 'privacy',
	'spend-bitcoin': 'spend-bitcoin',
	'store-tools': 'store-tools',
	videos: 'videos',
	wallets: 'wallets',
}

const failures = []
let checks = 0

function check(ok, label) {
	checks++
	if (!ok) failures.push(label)
}

function htmlPath(route) {
	return route === '' ? join(PUBLIC_DIR, 'index.html') : join(PUBLIC_DIR, route, 'index.html')
}

function readHtml(route) {
	const p = htmlPath(route)
	if (!isFile(p)) return null
	return readFileSync(p, 'utf8')
}

function isFile(p) {
	try {
		return statSync(p).isFile()
	} catch {
		return false
	}
}

function firstString(value) {
	if (typeof value === 'string' && value.length > 3) return value
	if (Array.isArray(value)) {
		for (const item of value) {
			const found = firstString(item)
			if (found) return found
		}
	}
	if (value && typeof value === 'object') {
		for (const key of ['title', 'name', 'link', 'description', 'organizer', 'city', 'country']) {
			const found = firstString(value[key])
			if (found) return found
		}
		for (const v of Object.values(value)) {
			const found = firstString(v)
			if (found) return found
		}
	}
	return null
}

function firstTitles(blob) {
	const titles = []
	for (const [name, value] of Object.entries(blob)) {
		if (typeof value === 'function') continue
		const s = firstString(value)
		if (s) titles.push({ section: name, sample: s })
	}
	return titles
}

function collectRoutes() {
	return readdirSync(PAGES_DIR)
		.filter((f) => f.endsWith('.vue'))
		.map((f) => (f === 'index.vue' ? '' : f.replace(/\.vue$/, '')))
		.sort()
}

async function collectDataSamples(route) {
	const basename = PAGE_DATA[route]
	if (!basename) return []
	const url = pathToFileURL(join(DATA_DIR, `${basename}.js`)).href
	let mod
	try {
		mod = await import(url)
	} catch (err) {
		check(false, `${route}: could not import app/data/${basename}.js (${err.message})`)
		return []
	}
	return firstTitles(mod)
}

async function main() {
	const routes = collectRoutes()
	for (const route of routes) {
		const html = readHtml(route)
		if (html === null) {
			check(false, `${route || '/'}: missing ${route ? `${route}/index.html` : 'index.html'}`)
			continue
		}
		if (html.length < 1024) check(false, `${route || '/'}: page is suspiciously small (${html.length} bytes)`)

		const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? ''
		check(
			title.includes(TITLE_FRAGMENTS[route] ?? route),
			`${route || '/'}: <title> "${title}" does not contain "${TITLE_FRAGMENTS[route] ?? route}"`,
		)

		const heading = html.match(/<h1[^>]*>.*?<\/h1>/)?.[0] ?? ''
		check(heading.length > 0, `${route || '/'}: no <h1> heading found`)

		for (const { section, sample } of await collectDataSamples(route)) {
			const unescaped = sample.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			check(
				html.includes(unescaped) || html.includes(sample),
				`${route || '/'}: data section "${section}" content "${sample}" not found in page`,
			)
		}
	}

	// Every declared route must be in the sitemap.
	const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml')
	const sitemap = isFile(sitemapPath) ? readFileSync(sitemapPath, 'utf8') : ''
	check(sitemap.length > 0, 'sitemap.xml missing from build')
	for (const route of routes) {
		const loc = `https://bitcoin-only.com/${route}`
		check(sitemap.includes(loc), `sitemap.xml missing route /${route}`)
	}
	const sitemapLocs = (sitemap.match(/<loc>[^<]+<\/loc>/g) ?? []).map((s) => s.replace(/<\/?loc>/g, ''))
	check(sitemapLocs.length === routes.length, `sitemap.xml has ${sitemapLocs.length} URLs, expected ${routes.length}`)

	// Error pages must exist.
	check(isFile(join(PUBLIC_DIR, '200.html')), '200.html missing')
	check(isFile(join(PUBLIC_DIR, '404.html')), '404.html missing')

	console.log(`check-pages: ${checks} checks, ${failures.length} failure(s), ${routes.length} routes`)
	for (const f of failures) console.log(`  FAIL: ${f}`)
	if (failures.length) process.exitCode = 1
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
