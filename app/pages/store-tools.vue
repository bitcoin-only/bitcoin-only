<template>
	<div id="store-tools-page">
		<h1 class="page-title">Store Tools</h1>

		<p class="explainer">These tools help you accept Bitcoin only.</p>

		<TableData :headers="['Name', 'Description']" :rows="rows" />

		<div class="footnote">
			* Opennode is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control
			of your funds. You can (and should) set reoccurring withdrawals to send any Bitcoin you receive to your own
			wallet. You are now also required to submit KYC Documentation to be an Opennode merchant.
		</div>
	</div>
</template>

<script>
import { storeTools } from '@/data/store-tools'

export default {
	name: 'StoreToolsPage',

	setup() {
		usePageMeta({
			title: 'Store Tools - Bitcoin Only',
			description: 'A collection of tools that help you accept Bitcoin.',
			schema: schemaItemList('Bitcoin Store Tools', storeTools),
		})
	},

	data() {
		return {
			rows: storeTools.map((tool) => [{ text: tool.title, href: tool.link }, { html: tool.description }]),
		}
	},
}
</script>
