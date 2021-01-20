<template>
	<div id="peers-page">

		<h1 class="page-title">Peers</h1>

		<h3>Site Content</h3>

		<p class="explainer">We are proud to have supported/worked with the following peers on site content:</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Peer</div>
					<div class="tbl-title">We Gave</div>
					<div class="tbl-title">We Received</div>
				</div>
				<div v-for="(lineItem, index) in siteContent" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.peerLink" target="_blank">{{ lineItem.peer }}</a>
					</div>
					<div>
						<a v-if="lineItem.weGaveLink" :href="lineItem.weGaveLink" target="_blank">{{ lineItem.weGave }}</a>
						<div v-else>{{ lineItem.weGave }}</div>
					</div>
					<div>
						<a v-if="lineItem.weReceivedLink" :href="lineItem.weReceivedLink" target="_blank">{{ lineItem.weReceived }}</a>
						<div v-else>{{ lineItem.weReceived }}</div>
					</div>
				</div>
			</div>
		</div>

		<h3>Growth</h3>

		<p class="explainer">Thanks to all the sites/podcasts that have helped with growth of the site. To accelerate site growth & to support great projects some grassroots promotion has been sponsored.</p>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Sponsored</div>
				</div>
				<div v-for="(lineItem, index) in growth" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.name }}</a>
					</div>
					<div v-html="lineItem.sponsor"></div>
				</div>
			</div>
		</div>

		<div class="footnotes">
			<p>If I missed your shout out please <a href="https://twitter.com/6102bitcoin" target="_blank">get in touch</a> and I'll make amends.</p>

			<p>A shoutout does not entitle your project to being listed or bump you up the list to be evaluated. Only projects listed on bitcoin-only.com will be featured on this list for helping support our growth.</p>
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
.footnotes {
	margin-top: 40px;
}
</style>

<script>
export default {

	name: 'PeersPage',

	head: {
		title: 'Peers - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of people we have worked with in the past.' }
		]
	},

	data() {
		return {

			siteContent: [
				{
					peer: 'Bitko Yinowsky',
					peerLink: 'https://twitter.com/BitkoYinowsky',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Main Logo & Page Logos',
					weReceivedLink: 'http://bitcoin-only.com/'
				},
				{
					peer: 'Greg Walker',
					peerLink: 'https://twitter.com/in3rsha',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Introduction to Bitcoin',
					weReceivedLink: 'https://github.com/6102bitcoin/bitcoin-only/blob/master/introduction/introduction.md'
				},
				{
					peer: 'Max Hillebrand',
					peerLink: 'https://twitter.com/hillebrandmax',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Video Series',
					weReceivedLink: 'https://www.youtube.com/playlist?list=PLPj3KCksGbSYX2cNoOaV-w-9QuZ62LDk_'
				},
				{
					peer: 'Phneep',
					peerLink: 'https://twitter.com/phneep',
					weGave: 'BTC',
					weGaveLink: '',
					weReceived: 'Commissioned Art',
					weReceivedLink: '/promote'
				},
				{
					peer: 'Ti Kawamoto',
					peerLink: 'https://twitter.com/TiKawamoto',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Old Logo',
					weReceivedLink: ''
				},
				{
					peer: 'Wiz',
					peerLink: 'https://twitter.com/wiz',
					weGave: '-',
					weGaveLink: '',
					weReceived: 'Technical Assistance',
					weReceivedLink: ''
				}
			],

			growth: [
				{
					name: 'Bitcoin Echo Chamber',
					link: 'https://bitcoinechochamber.com/',
					sponsor: 'Yes'
				},
				{
					name: 'Bottom-shelf Bitcoin',
					link: 'https://bottomshelfbitcoin.com/',
					sponsor: 'Yes'
				},
				{
					name: 'Lightning Hosted',
					link: 'https://twitter.com/LightningHosted',
					sponsor: 'Yes'
				},
				{
					name: 'Start Node',
					link: 'https://twitter.com/StartNodeOrg',
					sponsor: 'Yes'
				},
				{
					name: 'Block Digest',
					link: 'https://twitter.com/blockdigest',
					sponsor: 'No'
				},
				{
					name: 'CryptoWords',
					link: 'https://mailchi.mp/2731ce628dba/cryptowordsnewsletter',
					sponsor: 'No'
				},
				{
					name: 'Stephan Livera Podcast',
					link: 'https://stephanlivera.com/episode/74',
					sponsor: 'No'
				},
				{
					name: 'TFTC',
					link: 'https://anchor.fm/tales-from-the-crypt/episodes/Rabbit-Hole-Recap-Week-of-2019-05-06-e3vvq5',
					sponsor: 'No'
				},
				{
					name: 'Why Hold Bitcoin',
					link: 'https://whyholdbitcoin.com/resources/',
					sponsor: 'No'
				}
			]

		}
	}

}
</script>
