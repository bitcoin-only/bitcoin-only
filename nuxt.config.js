const siteUrl = 'https://bitcoin-only.com'

export default defineNuxtConfig({
	// Pin Nuxt behavior for this compatibility date
	compatibilityDate: '2026-08-06',

	// Public directory (moved under app/ for Nuxt 4)
	dir: {
		public: 'app/public',
	},

	// Global page headers
	app: {
		head: {
			title: 'Bitcoin Only',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.',
				},
				{ name: 'og:site_name', content: 'Bitcoin Only' },
				{
					property: 'og:description',
					content: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.',
				},
				{
					name: 'twitter:description',
					content: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.',
				},
				{ property: 'og:title', content: 'Bitcoin Only' },
				{ property: 'og:url', content: siteUrl },
				{ property: 'og:image', content: `${siteUrl}/og-image.png` },
				{ property: 'og:image:width', content: '800' },
				{ property: 'og:image:height', content: '418' },
				{ property: 'og:type', content: 'website' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'Bitcoin Only' },
				{ name: 'twitter:image', content: `${siteUrl}/og-image.png` },
			],
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600&display=swap' },
			],
		},
	},

	// Modules
	modules: ['@nuxtjs/sitemap'],

	// Site URL for the sitemap module
	site: {
		url: siteUrl,
	},

	// Static site with no dynamic routes: prerender sitemaps at build time
	sitemap: {
		zeroRuntime: true,
	},
})
