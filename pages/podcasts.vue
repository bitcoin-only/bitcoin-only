<template>
	<div id="podcasts-page">

		<h1 class="page-title">Podcasts</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>First listen to '<a href="https://stephanlivera.com/episode/71/" target="_blank">SLP71: Intro to Bitcoin Austrian Thought</a>' by Stephan Livera</p>

		</div>

		<p>The podcasts listed on this page cover Bitcoin only.</p>

		<h3>English</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Podcast</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(pod, index) in englishPodcasts" :key="index" class="tbl-row">
					<div>
						<a :href="pod.link" target="_blank">{{ pod.title }}</a>
					</div>
					<div v-html="pod.description"></div>
				</div>
			</div>
		</div>

		<h3>Dutch</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Podcast</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(pod, index) in dutchPodcasts" :key="index" class="tbl-row">
					<div>
						<a :href="pod.link" target="_blank">{{ pod.title }}</a>
					</div>
					<div v-html="pod.description"></div>
				</div>
			</div>
		</div>

		<h3>German</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Podcast</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(pod, index) in germanPodcasts" :key="index" class="tbl-row">
					<div>
						<a :href="pod.link" target="_blank">{{ pod.title }}</a>
					</div>
					<div v-html="pod.description"></div>
				</div>
			</div>
		</div>

		<h3>Portuguese</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Podcast</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(pod, index) in portuguesePodcasts" :key="index" class="tbl-row">
					<div>
						<a :href="pod.link" target="_blank">{{ pod.title }}</a>
					</div>
					<div v-html="pod.description"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
#podcasts-page .tbl-row > div a {
	color: #fff;

	&:hover {
		color: #f2ad4f;
	}
}
</style>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
.tbl-wrapper {
	max-width: 900px;
}
</style>

<script>
export default {

	name: 'PodcastsPage',

	head: {
		title: 'Podcasts - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only podcasts.' }
		]
	},

	data() {
		return {

			englishPodcasts: [
				{
					title: 'Bitcoin Audible',
					link: 'https://cryptoconomy.life/home/',
					description: 'Narrations of the best Bitcoin articles'
				},
				{
					title: 'Bitcoin And ...',
					link: 'https://podcasts.apple.com/us/podcast/bitcoin-and/id1438789088',
					description: 'Bitcoin news & more'
				},
				{
					title: 'Bit Buy Bit',
					link: 'https://www.bit-buy-bit.com/',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Bitcoin Echo Chamber',
					link: 'https://bitcoinechochamber.com/',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Bitcoin Fixes This',
					link: 'https://anchor.fm/jimmysong/',
					description: '<a href="https://twitter.com/jimmysong" target="_blank">@JimmySong</a> interviewing Bitcoiners'
				},
				{
					title: 'Bitcoin Kindergarten Live Q&A',
					link: 'https://anchor.fm/bitcoin-kindergarten',
					description: 'Q&A with <a href="https://twitter.com/Nikcantmine" target="_blank">@Nikcantmine</a> & <a href="https://twitter.com/My_Livin_Truth" target="_blank">@My_Livin_Truth</a>'
				},
				{
					title: 'Bitcoin Matters',
					link: 'https://www.youtube.com/playlist?list=PLXebE1eEMGOTe6ipH9n2AmUE3uLaKEfXE',
					description: 'Conversations with <a href="https://twitter.com/Beautyon_" target="_blank">@Beautyon_</a>'
				},
				{
					title: 'Bitcoin Rapid Fire',
					link: 'https://anchor.fm/john-vallis',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Bitcoin Rehab',
					link: 'https://anchor.fm/bitcoinrehab',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Blockdigest',
					link: 'https://www.youtube.com/channel/UCb53lXz2IzEFT5JNHSbdvPg/videos',
					description: 'Casual Bitcoin news podcast'
				},
				{
					title: 'Bottomshelf Bitcoin',
					link: 'https://bottomshelfbitcoin.com/',
					description: 'Putting Bitcoin within everyone\'s reach'
				},
				{
					title: 'Citizen Bitcoin',
					link: 'https://citizenbitcoin.world/',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Fun With Bitcoin',
					link: 'https://anchor.fm/funwithbitcoin',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Noded',
					link: 'https://noded.org/podcast/',
					description: 'Michael Goldstein and Pierre Rochard'
				},
				{
					title: 'Once BITten!',
					link: 'https://anchor.fm/daniel-prince6',
					description: 'Daniel Prince'
				},
				{
					title: 'Reckless Review',
					link: 'http://www.recklessreview.horse/',
					description: 'Lawrence Nahum & Udi Wertheimer'
				},
				{
					title: 'Stephan Livera',
					link: 'https://stephanlivera.com/',
					description: 'Bitcoin and Austrian Economics'
				},
				{
					title: 'Swan Signal',
					link: 'https://swansignalpodcast.com/',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Tales From The Crypt',
					link: 'https://tftc.io/',
					description: 'Podcast about Bitcoin. Home of the weekly Rabbit Hole Recap with <a href="https://twitter.com/MartyBent" target="_blank">@MartyBent</a> and <a href="https://twitter.com/matt_odell" target="_blank">@matt_odell</a>'
				},
				{
					title: 'The Bitcoin Basics Podcast',
					link: 'http://bitcoinbasicspodcast.com/',
					description: 'Bitcoin for beginners'
				},
				{
					title: 'The Bitcoin Standard Podcast',
					link: 'https://saifedean.com/podcast/',
					description: 'Weekly Bitcoin & economics seminars with <a href="https://twitter.com/saifedean" target="_blank">Saifedean Ammous</a>'
				},
				{
					title: 'The Chaincode Podcast',
					link: 'https://podcast.chaincode.com/',
					description: 'Interviews with Bitcoin engineers'
				},
				{
					title: 'The Total Connector',
					link: 'https://anchor.fm/keyvandavani/',
					description: 'Interviews with Bitcoiners'
				},
				{
					title: 'Unhashed Podcast',
					link: 'https://www.unhashedpodcast.com/',
					description: 'Weekly Bitcoin news & explanations'
				},
				{
					title: 'Wake Up Podcast',
					link: 'https://anchor.fm/wakeuppod',
					description: 'Interviews with Bitcoiners with <a href="https://twitter.com/AleksSvetski" target="_blank">Aleks Svetski</a>'
				},
				{
					title: 'BTC Sessions',
					link: 'https://www.youtube.com/channel/UChzLnWVsl3puKQwc5PoO6Zg',
					description: 'Informative Bitcoin News, Anaysis, Tutorials, and Discussions'
				}
			],
			dutchPodcasts: [
				{
					title: 'De Bitcoin Show',
					link: 'https://www.debitcoinshow.nl/',
					description: 'Weekly Bitcoin news'
				},
				{
					title: 'Beginnen met Bitcoin',
					link: 'https://beginnenmetbitcoin.com/',
					description: 'Explaining all of Bitcoin'
				}
			],
			germanPodcasts: [
				{
					title: 'Einundzwanzig - Der Bitcoin Podcast',
					link: 'https://anchor.fm/einundzwanzig',
					description: 'German weekly Bitcoin podcast'
				}
			],
			portuguesePodcasts: [
				{
					title: 'Bitcoinheiros',
					link: 'https://bitcoinheiros.com/',
					description: 'Brazilian Portuguese Podcast'
				}
			]

		}
	}

}
</script>
