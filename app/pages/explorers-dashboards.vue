<template>
	<div id="explorers-dashboards-page">
		<h1 class="page-title">Explorers & Dashboards</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>Check transactions & the mempool with <a href="https://mempool.space/" target="_blank">Mempool.space</a></p>
		</div>

		<h3>Explorers</h3>

		<TableData :headers="['Name', 'Description']" :rows="explorerRows" />

		<h3>Fees / Mempool</h3>

		<TableData :headers="['Name', 'Description']" :rows="feesMempoolRows" />

		<h3>Metrics</h3>

		<TableData :headers="['Name', 'Description']" :rows="metricRows" />

		<h3>Offline Bitcoin</h3>

		<TableData :headers="['Name', 'Description']" :rows="offlineBitcoinRows" />
	</div>
</template>

<script>
import { explorers, feesMempool, metrics, offlineBitcoin } from '@/data/explorers-dashboards'

const rows = (items) => items.map((item) => [{ text: item.title, href: item.link }, { html: item.description }])

export default {
	name: 'ExplorersDashboardsPage',

	setup() {
		usePageMeta({
			title: 'Explorers & Dashboards - Bitcoin Only',
			description: 'A collection of Bitcoin only explorers, dashboards, and other analysis tools.',
			schema: schemaItemList('Bitcoin Explorers & Dashboards', [
				...explorers,
				...feesMempool,
				...metrics,
				...offlineBitcoin,
			]),
		})
	},

	data() {
		return {
			explorerRows: rows(explorers),
			feesMempoolRows: rows(feesMempool),
			metricRows: rows(metrics),
			offlineBitcoinRows: rows(offlineBitcoin),
		}
	},
}
</script>
