<template>
	<div id="spend-bitcoin-page">

		<h1 class="page-title">Spend Bitcoin</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Bitcoin enables anyone to tap into a truly global marketplace. Consider the impact on your privacy if you buy goods which link to your identity or require physical delivery. It's best to avoid getting things delivered to your home address for this reason.</p>

		</div>

		<h3>Donate</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in donate" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Services</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in services" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in tools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Fun & Play</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in funAndPlay" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Stores</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in stores" :key="index" class="tbl-row">
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
//.tbl-wrapper {
//	max-width: 800px;
//}
</style>

<script>
export default {

	name: 'SpendBitcoinPage',

	head: {
		title: 'Spend Bitcoin - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'List of places where you can spend your Bitcoin.' }
		]
	},

	data() {
		return {

			donate: [
				{
					title: 'Bitcoin Dev List',
					link: 'https://bitcoindevlist.com/',
					description: 'Donate to various Bitcoin developers'
				}
			],
			services: [
				{
					title: 'Art Design by SF',
					link: 'https://artdesignbysf.com/',
					description: 'Custom art & graphic design'
				},
				{
					title: 'Bitcoin Support',
					link: 'https://www.bitcoinsupport.com/',
					description: 'One-on-one Bitcoin phone support'
				}
			],
			tools: [
				{
					title: 'Bitscribble',
					link: 'https://bitscribble.com/',
					description: 'Write 40 bytes of data to the blockchain'
				},
				{
					title: 'BTCmessage',
					link: 'https://btcmessage.com/',
					description: 'Write data into the blockchain with vanity addrs'
				},
				{
					title: 'BullBitcoin',
					link: 'https://bullbitcoin.com/',
					description: 'Non-custodial Bitcoin services'
				},
				{
					title: 'Bylls',
					link: 'https://bylls.com/',
					description: 'Pay bills (Canada)'
				},
				{
					title: 'Fold App',
					link: 'https://foldapp.com/',
					description: 'Buy vouchers with Bitcoin cashback'
				},
				{
					title: 'Host4Coins',
					link: 'https://host4coins.net/',
					description: 'VPS Hosting'
				},
				{
					title: 'LNsms',
					link: 'https://lnsms.world/',
					description: 'Send texts worldwide and pay with Lightning'
				},
				{
					title: 'paybtc',
					link: 'https://paybtc.com.au/',
					description: 'Pay any Australian bank account or BPAY bill with Bitcoin'
				},
				{
					title: 'Spacebit',
					link: 'https://spacebit.live/',
					description: 'Send messages via satellite'
				},
				{
					title: 'Woleet',
					link: 'https://www.woleet.io/',
					description: 'Timestamping service'
				},
				{
					title: 'Voltage',
					link: 'https://getvoltage.io/',
					description: 'Cloud Lightning node hosting'
				}
			],
			funAndPlay: [
				{
					title: 'Fair Poker',
					link: 'https://fair.poker/',
					description: 'Provably fair Bitcoin poker'
				},
				{
					title: 'Hello Dime',
					link: 'https://www.hellodime.com/',
					description: 'Bitcoin inspired card game'
				},
				{
					title: 'Moneni',
					link: 'https://moneni.com/',
					description: 'Lightning games'
				},
				{
					title: 'Lightning Puzzle',
					link: 'https://www.lightningpuzzle.com/info',
					description: 'Set / solve puzzles'
				},
				{
					title: 'LNgames.net',
					link: 'https://lngames.net/',
					description: 'Lightning games'
				},
				{
					title: 'Pollo Feed',
					link: 'https://pollofeed.com/',
					description: 'Feed chickens'
				},
				{
					title: 'Satoshis Game Of Life',
					link: 'https://satoshisgameof.life/',
					description: 'Conway\'s Game of Life'
				},
				{
					title: 'Satoshis Games',
					link: 'https://satoshis.games/',
					description: 'Original Lightning games'
				},
				{
					title: 'Satoshis Place',
					link: 'https://satoshis.place/',
					description: 'Lightning canvas'
				}
			],
			stores: [
				{
					title: '1.21 Jigawatts',
					link: 'https://www.jigawatt.co/',
					description: 'Stamps, stickers, & more'
				},
				{
					title: '21 million',
					link: 'https://21million.co/',
					description: 'Bitcoin Apparel'
				},
				{
					title: '21X',
					link: 'https://www.21x.io/',
					description: 'Bitcoin art, designs, & merchandise'
				},
				{
					title: 'Arnhem Bitcoin City',
					link: 'https://www.arnhembitcoinstad.nl/',
					description: 'A Bitcoin friendly city'
				},
				{
					title: 'Bitcoin Shirt',
					link: 'https://bitcoinshirt.co/',
					description: 'Bitcoin merchandise'
				},
				{
					title: 'Bitcoin Tunnels',
					link: 'https://www.bitcointunnels.com/',
					description: 'Clothing, mugs, & more'
				},
				{
					title: 'Bitcoin Gear',
					link: 'https://www.bitcoin-gear.com/',
					description: 'Bitcoin merchandise'
				},
				{
					title: 'Bitko Yinowsky',
					link: 'https://bitko.cc/',
					description: 'Bitcoin art'
				},
				{
					title: 'BTC Pins',
					link: 'https://www.btcpins.com/',
					description: 'Bitcoin lapel pins & stickers'
				},
				{
					title: 'CryptoCloaks',
					link: 'https://www.cryptocloaks.com/',
					description: '3D printed cases & custom nodes'
				},
				{
					title: 'DIYnodes',
					link: 'https://diynodes.com/',
					description: 'Bitcoin nodes & more'
				},
				{
					title: 'HODL.Rodeo',
					link: 'https://HODL.Rodeo',
					description: 'Bitcoin-Only Merchandise Shop, playlist + podcast curation, 5-Day Bitcoin 101 Email Course'
				},
				{
					title: 'Konsensus Network',
					link: 'https://konsensus.network/shop',
					description: 'The Bitcoin publishing house'
				},
				{
					title: 'Orange Coin Goods',
					link: 'https://orangecoingoods.com/',
					description: 'Bitcoin apparel & more'
				},
				{
					title: 'Liberty Mugs',
					link: 'https://www.libertymugs.com/',
					description: 'Mugs, t-shirts, & more'
				},
				{
					title: 'Lightning Hood',
					link: 'https://lightninghood.com/shop/',
					description: 'Consultation, t-shirts, & more'
				},
				{
					title: 'Lightning Hosted',
					link: 'https://lightninghosted.com/',
					description: 'Simple image hosting'
				},
				{
					title: 'Mt. Socks',
					link: 'https://www.mtsocks.com/',
					description: 'Socks'
				},
				{
					title: 'Original Satoshi',
					link: 'https://www.originalsatoshi.com/',
					description: 'Stickers & more'
				},
				{
					title: 'PirateHash',
					link: 'https://piratehash.com/',
					description: 'Bitcoin curiosities & educational materials'
				},
				{
					title: 'Quinsolo',
					link: 'https://quinsolo.com/',
					description: 'Coasters, magnets, & more'
				},
				{
					title: 'Sats Ledger',
					link: 'https://www.satsledger.com/',
					description: 'Bitcoin savings book for kids'
				},
				{
					title: 'SHAmory',
					link: 'https://shamory.com/',
					description: 'Card game that teaches kids how Bitcoin mining works'
				},
				{
					title: 'Lightning Store',
					link: 'http://lightning.store',
					description: 'Bitcoin culture on T-shirts & stickers'
				},
				{
					title: 'Start 2 Bitcoin',
					link: 'https://www.start2bitcoin.com/',
					description: 'Fun Bitcoin info pack'
				},
				{
					title: 'Von Bitcoin',
					link: 'https://www.vonbitcoin.com/',
					description: 'T-Shirts, prints, & more'
				},
				{
					title: 'Wears My Liberty',
					link: 'https://wearsmyliberty.com/',
					description: 'Liberty shirts, hats, hoodies, & more'
				}
			]

		}
	}

}
</script>
