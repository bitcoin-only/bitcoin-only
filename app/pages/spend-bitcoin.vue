<template>
	<div id="spend-bitcoin-page">
		<h1 class="page-title">Spend Bitcoin</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>
				Bitcoin enables anyone to tap into a truly global marketplace. Consider the impact on your privacy if you buy
				goods which link to your identity or require physical delivery. It's best to avoid getting things delivered to
				your home address for this reason.
			</p>
		</div>

		<h3>Donate</h3>

		<TableData :headers="['Name', 'Description']" :rows="donateRows" />

		<h3>Services</h3>

		<TableData :headers="['Name', 'Description']" :rows="servicesRows" />

		<h3>Tools</h3>

		<TableData :headers="['Name', 'Description']" :rows="toolsRows" />

		<h3>Fun & Play</h3>

		<TableData :headers="['Name', 'Description']" :rows="funAndPlayRows" />

		<h3>Stores</h3>

		<TableData :headers="['Name', 'Description']" :rows="storesRows" />
	</div>
</template>

<script>
import { donate, services, tools, funAndPlay, stores } from '@/data/spend-bitcoin'

const rows = (items) => items.map((item) => [{ text: item.title, href: item.link }, { html: item.description }])

export default {
	name: 'SpendBitcoinPage',

	setup() {
		usePageMeta({
			title: 'Spend Bitcoin - Bitcoin Only',
			description: 'List of places where you can spend your Bitcoin.',
			schema: schemaItemList('Places to Spend Bitcoin', [...donate, ...services, ...tools, ...funAndPlay, ...stores]),
		})
	},

	data() {
		return {
			donateRows: rows(donate),
			servicesRows: rows(services),
			toolsRows: rows(tools),
			funAndPlayRows: rows(funAndPlay),
			storesRows: rows(stores),
		}
	},
}
</script>
