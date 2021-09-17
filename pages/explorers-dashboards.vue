<template>
	<div id="explorers-dashboards-page">

		<h1 class="page-title">Explorers & Dashboards</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Check transactions & the mempool with <a href="https://mempool.space/" target="_blank">Mempool.space</a></p>

		</div>

		<h3>Explorers</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in explorers" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Fees / Mempool</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in feesMempool" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Metrics</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in metrics" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Offline Bitcoin</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in offlineBitcoin" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
</style>

<script>
export default {

	name: 'ExplorersDashboardsPage',

	head: {
		title: 'Explorers & Dashboards - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only explorers, dashboards, and other analysis tools.' }
		]
	},

	data() {
		return {

			explorers: [
				{
					title: 'BTC RPC',
					link: 'https://github.com/janoside/btc-rpc-explorer',
					description: 'Open source Bitcoin explorer'
				},
				{
					title: 'Entropy Rocks',
					link: 'https://entropy.rocks/',
					description: 'Bitcoin explorer & analytics platform'
				},
				{
					title: 'Mempool.space',
					link: 'https://mempool.space/',
					description: 'Open source Bitcoin explorer'
				},
				{
					title: 'OXT',
					link: 'https://oxt.me/',
					description: 'Advanced blockchain explorer'
				},
				{
					title: 'Yogh Explorer',
					link: 'https://yogh.io/',
					description: 'Bitcoin blockchain reader'
				}
			],
			feesMempool: [
				{
					title: 'Bitcoiner Live',
					link: 'https://bitcoiner.live/',
					description: 'Simple fee estimation'
				},
				{
					title: 'Bitcoinrain',
					link: 'http://bitcoinrain.io/',
					description: 'Mempool visualisation'
				},
				{
					title: 'BTC moe',
					link: 'https://btc.moe/',
					description: 'Mempool visualisation'
				},
				{
					title: 'Mempool.observer',
					link: 'https://mempool.observer/',
					description: 'Mempool / block visualisation & fee charts'
				},
				{
					title: 'Mempool.space',
					link: 'https://mempool.space/',
					description: 'Mempool / block visualisation & fee charts'
				},
				{
					title: 'What The Fee',
					link: 'https://whatthefee.io/',
					description: 'Simple fee estimation'
				}
			],
			metrics: [
				{
					title: 'Bitbo',
					link: 'https://bitbo.io/',
					description: 'Bitcoin & LN metrics'
				},
				{
					title: 'BitcoinKPIs',
					link: 'https://bitcoinkpis.com/',
					description: 'Bitcoin & LN graphs'
				},
				{
					title: 'Bitcoin Stimulus',
					link: 'https://www.bitcoinstimulus.net/',
					description: 'Tracking stimulus check buying power'
				},
				{
					title: 'Bitcoin Treasuries',
					link: 'https://bitcointreasuries.net/',
					description: 'Publicly-traded companies holding Bitcoin'
				},
				{
					title: 'Clark Moody Dashboard',
					link: 'https://bitcoin.clarkmoody.com/dashboard/',
					description: 'Bitcoin & LN metrics'
				},
				{
					title: 'Priced In Bitcoin',
					link: 'https://www.pricedinbitcoin21.com/about',
					description: 'Price of assets in BTC'
				}
			],
			offlineBitcoin: [
				{
					title: 'Who needs the Internet anyway?',
					link: 'https://www.youtube.com/watch?v=yiT_l_XbXnM&feature=youtu.be',
					description: 'Presentation by Neil Woodfine'
				},
			]

		}
	}

}
</script>
