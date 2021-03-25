<template>
	<div id="store-tools-page">

		<h1 class="page-title">Store Tools</h1>

		<p class="explainer">These tools help you accept Bitcoin only.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in storeTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<div class="footnote">* Opennode is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control of your funds. You can (and should) set reoccurring withdrawals to send any Bitcoin you receive to your own wallet. You are now also required to submit KYC Documentation to be an Opennode merchant.</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

.explainer {
	margin-bottom: 30px;
	//margin-top: -15px;
}
.footnote {
	max-width: 800px;
	text-align: center;
	font-style: italic;
	color: rgba(255, 255, 255, 0.45);
	margin-top: 20px;
}
</style>

<script>
export default {

	name: 'StoreToolsPage',

	head: {
		title: 'Store Tools - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of tools that help you accept Bitcoin.' }
		]
	},

	data() {
		return {

			storeTools: [
				{
					title: 'BullBitcoin',
					link: 'https://bullbitcoin.com/',
					description: 'Non-custodial Bitcoin services'
				},
				{
					title: 'chainside',
					link: 'https://www.chainside.net/en/home/',
					description: 'Payments processor'
				},
				{
					title: 'LNPay',
					link: 'https://lnpay.co/',
					description: 'Lighting Network payments processor'
				},
				{
					title: 'OpenNode',
					link: 'https://www.opennode.co/',
					description: 'Payments Processor *'
				},
				{
					title: 'paid.co',
					link: 'https://paid.co/',
					description: 'Sell things for Bitcoin (uses OpenNode) *'
				},
				{
					title: 'zaprite (BETA)',
					link: 'https://app.zaprite.com/',
					description: 'Bitcoin invoicing and task management'
				}
			]

		}
	}

}
</script>
