<template>
	<div id="get-bitcoin-page">

		<h1 class="page-title">Get Bitcoin</h1>

		<p>There are many ways you can get Bitcoin. You can buy a fraction of a Bitcoin, so don't let a high price per bitcoin put you off. Many people are <a href="https://twitter.com/search?q=%23stackingsats" target="_blank">#stackingsats</a> (regularly spending a fixed $ amount on buying bitcoin, also known as dollar cost averaging), you can see that this method has historically been a good way of accumulating Bitcoin by looking at <a href="https://hodl.camp/" target="_blank">hodl.camp</a>.</p>

		<h3>Buy (suggested)</h3>

		<p class="explainer">Buy Bitcoin as you would buy anything else (without having to prove your identity). You may be able to buy Bitcoin at your <nuxt-link to="/meetups">local meetup</nuxt-link> or a nearby Bitcoin ATM.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Location</div>
				</div>
				<div v-for="(service, index) in buySuggested" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
					<div>{{ service.location }}</div>
				</div>
			</div>
		</div>

		<h3>Buy (other)</h3>

		<p class="explainer">If you want to use KYC on-ramps (despite the <a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">risks</a>) there are the following Bitcoin-only options.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Location</div>
					<div class="tbl-title">Auto DCA</div>
				</div>
				<div v-for="(service, index) in buyOther" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
					<div>{{ service.location }}</div>
					<div>{{ service.autoDca }}</div>
				</div>
			</div>
		</div>

		<h3>Mine</h3>

		<p class="explainer">Long gone are the days that you could mine Bitcoin using common hardware. Bitcoin mining is now dominated by specialist hardware powered by low cost electricity. This <a href="https://youtu.be/GmOzih6I1zs" target="_blank">video</a> gives a simple overview. Read Diverterbtc's <a href="https://diverter.hostyourown.tools/mining-for-the-streets/" target="_blank">Mining for the Streets</a> and Econoalchemist's <a href="https://www.econoalchemist.com/post/home-mining-for-non-kyc-bitcoin" target="_blank">Home mining guide</a>.</p>

		<h3>Earn</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(service, index) in earnBitcoin" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
				</div>
			</div>
		</div>

		<div class="footnote">* Tallycoin & jfgi could at any time swap out your donation address for their own.</div>

		<h3>Win</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(service, index) in winBitcoin" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
				</div>
			</div>
		</div>

		<h3>Cashback Rewards</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(service, index) in cashbackRewards" :key="index" class="tbl-row">
					<div>
						<a :href="service.link" target="_blank">{{ service.title }}</a>
					</div>
					<div>{{ service.description }}</div>
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
.explainer {
	margin-bottom: 30px;
	margin-top: -15px;
}
.tbl-wrapper {
	max-width: 900px;
}
.footnote {
	max-width: 900px;
	text-align: center;
	font-style: italic;
	color: rgba(255, 255, 255, 0.45);
	margin-top: 20px;
}
</style>

<script>
export default {

	name: 'GetBitcoinPage',

	head: {
		title: 'Get Bitcoin - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'List of methods of acquiring Bitcoin.' }
		]
	},

	data() {
		return {

			buySuggested: [
				{
					title: 'Azte.co',
					link: 'https://azte.co/',
					description: 'Buy',
					location: 'Global'
				},
				{
					title: 'SBB Railway Station',
					link: 'https://www.sbb.ch/en/station-services/at-the-station/services-from-the-ticket-machine/bitcoin.html',
					description: 'Buy',
					location: 'Switzerland'
				}
			],

			buyOther: [
				{
					title: 'Amber',
					link: 'https://amber.app/',
					description: 'Buy & Sell',
					location: 'Australia & USA',
					autoDca: 'Yes'
				},
				{
					title: 'Bitaroo',
					link: 'https://trade.bitaroo.com.au/',
					description: 'Buy & Sell',
					location: 'Australia',
					autoDca: 'Yes'
				},
				{
					title: 'Bitcoin Reserve',
					link: 'https://bitcoinreserve.com/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'No'
				},
				{
					title: 'Bitkipi',
					link: 'https://bitkipi.com/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'Bitonic',
					link: 'https://bitonic.nl/',
					description: 'Buy & Sell',
					location: 'Netherlands',
					autoDca: '?'
				},
				{
					title: 'Bittr',
					link: 'https://getbittr.com/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'BullBitcoin',
					link: 'https://bullbitcoin.com/',
					description: 'Buy & Sell',
					location: 'Canada',
					autoDca: 'Yes'
				},
				{
					title: 'Cash App',
					link: 'https://cash.app/',
					description: 'Buy & Sell',
					location: 'USA',
					autoDca: 'Yes'
				},
				{
					title: 'Coinfloor',
					link: 'https://coinfloor.co.uk/',
					description: 'Buy & Sell',
					location: 'UK',
					autoDca: 'Yes'
				},
				{
					title: 'Flitz',
					link: 'https://flitz.be/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'FastBitcoins',
					link: 'https://fastbitcoins.com/',
					description: 'Buy & Sell',
					location: 'Canada & UK',
					autoDca: 'Yes'
				},
				{
					title: 'GiveBitcoin',
					link: 'https://givebitcoin.io/',
					description: 'Buy',
					location: 'USA',
					autoDca: 'No'
				},
				{
					title: 'HardBlock',
					link: 'https://www.hardblock.com.au/',
					description: 'Buy & Sell',
					location: 'Australia',
					autoDca: 'Yes'
				},
				{
					title: 'Pocket Bitcoin',
					link: 'https://pocketbitcoin.com/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'Relai',
					link: 'https://relai.ch/',
					description: 'Buy & Sell',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'River Financial',
					link: 'https://river.com/',
					description: 'Buy & Sell',
					location: 'USA',
					autoDca: 'Yes'
				},
				{
					title: 'Stackinsat',
					link: 'https://www.stackinsat.com/',
					description: 'Buy',
					location: 'EU',
					autoDca: 'Yes'
				},
				{
					title: 'Strike',
					link: 'https://beta.strike.me/',
					description: 'Buy & Sell',
					location: 'USA',
					autoDca: 'No'
				},
				{
					title: 'Swan',
					link: 'https://www.swanbitcoin.com/',
					description: 'Buy',
					location: 'USA',
					autoDca: 'Yes'
				},
				{
					title: 'Unchained Capital',
					link: 'https://unchained.com/buy-bitcoin/',
					description: 'Buy',
					location: 'USA',
					autoDca: 'No'
				},
				{
					title: 'VBTC',
					link: 'https://vbtc.exchange/',
					description: 'Buy & Sell',
					location: 'Vietnam',
					autoDca: 'No'
				}
			],

			earnBitcoin: [
				{
					title: 'Bitcoiner Jobs',
					link: 'https://bitcoinerjobs.co/',
					description: 'Jobs in Bitcoin'
				},
				{
					title: 'jfgi',
					link: 'https://www.jfgi.cc/',
					description: 'Bitcoin fundraising *'
				},
				{
					title: 'MicroLancer',
					link: 'https://microlancer.io/',
					description: 'Micro-freelancing'
				},
				{
					title: 'Paywall Link',
					link: 'https://paywall.link/',
					description: 'Easily paywall content'
				},
				{
					title: 'Squeaknode',
					link: 'https://squeaknode.org/',
					description: 'P2P lightning status feed'
				},
				{
					title: 'TallyCoin',
					link: 'https://tallyco.in/',
					description: 'Bitcoin Fundraising *'
				}
			],

			winBitcoin: [
				{
					title: 'Hangar Six Gaming',
					link: 'https://www.hangarsixgaming.com/',
					description: 'Lightning gaming'
				},
				{
					title: 'THNDR Games',
					link: 'https://thndr.games',
					description: 'Lightning games'
				}
			],

			cashbackRewards: [
				{
					title: 'Fold App',
					link: 'https://foldapp.com/',
					description: 'Bitcoin cashback rewards'
				},
				{
					title: 'Lolli',
					link: 'https://www.lolli.com/',
					description: 'Bitcoin cashback rewards'
				},
				{
					title: 'Satsback.com',
					link: 'https://satsback.com/',
					description: 'Bitcoin (Lightning) cashback rewards'
				}
			]

		}
	}

}
</script>
