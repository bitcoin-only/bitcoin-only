<template>
	<div id="books-page">

		<h1 class="page-title">Books</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<ul>
				<li>For a non-technical intro read 'The Bitcoin Standard' by Saifedean Ammous (<a href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861" target="_blank">Amazon</a>)</li>
				<li>For a technical intro read 'Grokking Bitcoin' by Kalle Rosenbaum (<a href="https://www.manning.com/books/grokking-bitcoin" target="_blank">Manning Books</a> | <a href="https://github.com/kallerosenbaum/grokkingbitcoin" target="_blank">GitHub</a>)</li>
				<li>For further technical info read 'Programming Bitcoin' by Jimmy Song (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Amazon</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)</li>
			</ul>

		</div>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Synopsis</div>
					<div class="tbl-title">Author</div>
					<div class="tbl-title">Purchase Links</div>
				</div>
				<div v-for="(book, index) in books" :key="index" class="tbl-row">
					<div>{{ book.title }}</div>
					<div>{{ book.synopsis }}</div>
					<div>
						<template v-for="(author, authorIndex) in book.authors">
							<a :key="authorIndex" :href="author.link" target="_blank">{{ author.name }}</a><span v-if="authorIndex + 1 < book.authors.length">, </span>
						</template>
					</div>
					<div>
						<template v-for="(purchaseLink, purchaseLinkIndex) in book.purchaseLinks">
							<a :key="purchaseLinkIndex" :href="purchaseLink.link" target="_blank">{{ purchaseLink.title }}</a><span v-if="purchaseLinkIndex + 1 < book.purchaseLinks.length"> , </span>
						</template>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

.tbl-wrapper {
	max-width: none;
}
</style>

<script>
export default {

	name: 'BooksPage',

	head: {
		title: 'Books - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of books about Bitcoin.' }
		]
	},

	data() {
		return {

			books: [
				{
					title: '21 Lessons',
					synopsis: 'Superb Bitcoin lessons',
					authors: [
						{
							name: 'Gigi',
							link: 'https://twitter.com/dergigi'
						}
					],
					purchaseLinks: [
						{
							title: 'Direct',
							link: 'https://21lessons.com/'
						}
					]
				},
				{
					title: 'Bitcoin Money',
					synopsis: 'Bitcoin story book for kids',
					authors: [
						{
							name: 'Michael Caras',
							link: 'https://twitter.com/thebitcoinrabbi'
						}
					],
					purchaseLinks: [
						{
							title: 'Direct',
							link: 'http://bitcoinmoneybook.com/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/dp/0578490676/ref=cm_sw_r_cp_api_i_BKLPCbRGJA5B9'
						}
					]
				},
				{
					title: 'Grokking Bitcoin',
					synopsis: 'Illustrated Bitcoin Explainer',
					authors: [
						{
							name: 'Kalle Rosenbaum',
							link: 'https://twitter.com/kallerosenbaum/'
						}
					],
					purchaseLinks: [
						{
							title: 'Manning Books',
							link: 'https://www.manning.com/books/grokking-bitcoin'
						}
					]
				},
				{
					title: 'Inventing Bitcoin',
					synopsis: 'Beginner\'s intro to bitcoin.',
					authors: [
						{
							name: 'Yan Pritzker',
							link: 'https://twitter.com/skwp'
						}
					],
					purchaseLinks: [
						{
							title: 'Kindle',
							link: 'https://www.amazon.com/dp/B07MWXRWNB'
						},
						{
							title: 'PDF',
							link: 'https://www.dropbox.com/s/d22rhv7p2s9wl1b/Inventing-Bitcoin-Print.pdf?dl=0'
						}
					]
				},
				{
					title: 'Q/A About Bitcoin',
					synopsis: 'Common questions and answers',
					authors: [
						{
							name: 'David Coen',
							link: 'https://twitter.com/thedavidcoen'
						}
					],
					purchaseLinks: [
						{
							title: 'Direct',
							link: 'https://qabitcoin.davidcoen.it/product/q-a-about-bitcoin-pay-in-btc/'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/dp/1697134785'
						},
					]
				},
				{
					title: 'Sovereignty Through Mathematics',
					synopsis: 'Properties of Bitcoin',
					authors: [
						{
							name: 'Knut Svanholm',
							link: 'https://twitter.com/knutsvanholm'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/Bitcoin-Sovereignty-mathematics-Knut-Svanholm/dp/1090109911'
						}
					]
				},
				{
					title: 'The Bitcoin Standard',
					synopsis: 'Essential reading',
					authors: [
						{
							name: 'Saifedean Ammous',
							link: 'https://twitter.com/saifedean'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861'
						}
					]
				},
				{
					title: 'The Little Bitcoin Book',
					synopsis: 'Intro to Bitcoin',
					authors: [
						{
							name: 'Alex Gladstein',
							link: 'https://twitter.com/gladstein'
						},
						{
							name: 'Jimmy Song',
							link: 'https://twitter.com/jimmysong'
						},
					],
					purchaseLinks: [
						{
							title: 'Direct',
							link: 'https://www.notion.so/The-Little-Bitcoin-Book-86861255b9b84128b2633efbb73bbd36'
						},
						{
							title: 'Amazon',
							link: 'https://www.amazon.com/dp/1641990503'
						},
					]
				},
				{
					title: 'Why Buy Bitcoin: Investing Today in the Money of Tomorrow',
					synopsis: 'Bitcoin and economics',
					authors: [
						{
							name: 'Andy Edstrom',
							link: 'https://twitter.com/edstromandrew'
						}
					],
					purchaseLinks: [
						{
							title: 'Amazon',
							link: 'https://www.amazon.com//dp/1733219609'
						}
					]
				}
			]

		}
	}

}
</script>
