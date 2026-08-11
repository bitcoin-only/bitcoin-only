const siteUrl = 'https://bitcoin-only.com'

export function usePageMeta({ title, description, schema }) {
	const route = useRoute()
	const url = `${siteUrl}${route.path}`

	useHead({
		title,
		meta: [
			{ name: 'description', content: description },
			{ property: 'og:title', content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:url', content: url },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
		],
		link: [{ rel: 'canonical', href: url }],
		script: schema ? [{ type: 'application/ld+json', innerHTML: schema }] : undefined,
	})
}

export function schemaItemList(name, items) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name,
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.title,
			...(item.link ? { url: item.link } : {}),
		})),
	}
}

export function schemaWebSite() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Bitcoin Only',
		alternateName: 'bitcoin-only',
		url: siteUrl,
		description: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.',
	}
}
