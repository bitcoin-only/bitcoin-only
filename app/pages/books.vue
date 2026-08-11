<template>
	<div id="books-page">
		<h1 class="page-title">Books</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<ul>
				<li>
					For a non-technical intro read 'The Bitcoin Standard' by Saifedean Ammous (<a
						href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861"
						target="_blank"
						>Amazon</a
					>)
				</li>
				<li>
					For a technical intro read 'Grokking Bitcoin' by Kalle Rosenbaum (<a
						href="https://www.manning.com/books/grokking-bitcoin"
						target="_blank"
						>Manning Books</a
					>
					| <a href="https://github.com/kallerosenbaum/grokkingbitcoin" target="_blank">GitHub</a>)
				</li>
				<li>
					For further technical info read 'Programming Bitcoin' by Jimmy Song (<a
						href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496"
						target="_blank"
						>Amazon</a
					>
					| <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)
				</li>
			</ul>
		</div>

		<TableData :headers="['Title', 'Synopsis', 'Author', 'Purchase Links']" :rows="rows" max-width="none" />
	</div>
</template>

<script>
import { books } from '@/data/books'

export default {
	name: 'BooksPage',

	setup() {
		usePageMeta({
			title: 'Books - Bitcoin Only',
			description: 'A collection of books about Bitcoin.',
			schema: schemaItemList('Bitcoin Books', books),
		})
	},

	data() {
		return {
			rows: books.map((book) => [
				book.title,
				book.synopsis,
				{ links: book.authors.map((author) => ({ text: author.name, href: author.link })) },
				{ links: book.purchaseLinks.map((purchaseLink) => ({ text: purchaseLink.title, href: purchaseLink.link })) },
			]),
		}
	},
}
</script>
