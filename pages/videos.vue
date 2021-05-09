<template>
	<div id="videos-page">

		<h1 class="page-title">Videos</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Watch the following videos:</p>

			<ul>
				<li><a href="https://www.youtube-nocookie.com/embed/Zbm772vF-5M" target="_blank">The Bitcoin Standard</a> - Saifedean Ammous on hard money</li>
				<li><a href="https://www.youtube-nocookie.com/embed/q0XxsabgJEI" target="_blank">Why Bitcoin Matters</a> - Aleks Svetski on the future of money</li>
				<li><a href="https://www.rt.com/shows/to-the-moon/457141-bitcoin-digital-currencies-revolution/" target="_blank">Bitcoin Genesis</a> - Max Keiser on the origins of Bitcoin</li>
				<li><a href="https://www.youtube-nocookie.com/embed/DRPeExoH5rY" target="_blank">Bitcoin Explained</a> - BJ Dweck on what Bitcoin is</li>
			</ul>

		</div>

		<p>Find more bitcoin videos at <a href="https://bitcointv.com/" target="_blank">BitcoinTV.com</a></p>

		<h3>Video Podcasts</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in videoPodcasts" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Tutorials</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in tutorials" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Other Informative</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in otherInfo" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<div class="footnote">* Skip 'The Difficulties in ...' & 'Bitcoin Engineering ...' (poor audio)</div>

		<h3>Companies</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in companies" :key="index" class="tbl-row">
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

	name: 'VideosPage',

	head: {
		title: 'Videos - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of videos about Bitcoin.' }
		]
	},

	data() {
		return {

			videoPodcasts: [
				{
					title: 'Noti Satoshi',
					link: 'https://www.youtube.com/watch?v=ZqGJdIfrJGc&list=PLZsflIub4SmESRXVrl1AkXUcu96ahF5c1',
					description: 'Spanish Bitcoin news recap'
				},
				{
					title: 'Satoshi en Venezuela',
					link: 'https://www.youtube.com/c/SatoshienVenezuela/videos',
					description: 'Spanish Bitcoin news'
				},
				{
					title: 'Simply Bitcoin',
					link: 'https://www.youtube.com/channel/UCB6Q0S1gUHXMe5-Jjx0_laQ/videos',
					description: 'Daily Bitcoin news'
				}
			],
			tutorials: [
				{
					title: '402PaymentRequired',
					link: 'https://www.youtube.com/channel/UC_62FowZPxGB6ysv4mcj20A',
					description: 'Step by step Bitcoin software tutorials'
				},
				{
					title: 'Bitcoinheiros',
					link: 'https://www.youtube.com/bitcoinheiros',
					description: 'Brazilian Portuguese videos and tutorials'
				},
				{
					title: 'KIS Bitcoin',
					link: 'https://www.keepitsimplebitcoin.com/videos/',
					description: 'Keep It Simple - practical guides'
				},
				{
					title: 'Ministry of Nodes',
					link: 'https://www.youtube.com/c/MinistryofNodes',
					description: 'Stephan Livera & Ketan\'s video tutorials and guides'
				},
				{
					title: 'TFTC Guides',
					link: 'https://www.youtube.com/playlist?list=PL92Njil-H2HZ28lgWzKNCGH-vc-7ocKQ9',
					description: 'Tales From The Crypt\'s guides'
				},
				{
					title: 'Wasabi Series',
					link: 'https://www.youtube.com/playlist?list=PLPj3KCksGbSaEmjU0sywoTYDVYYSu8LsS',
					description: 'Max Hillebrand\'s Wasabi Wallet Guide'
				}
			],
			otherInfo: [
				{
					title: 'Advancing Bitcoin',
					link: 'https://vimeo.com/user94991385',
					description: '11 superb presentations *'
				},
				{
					title: 'Bitcoin Explained',
					link: 'https://www.youtube-nocookie.com/embed/DRPeExoH5rY',
					description: 'The definitive introduction to what Bitcoin is by BJ Dweck'
				},
				{
					title: 'Bitcoin In Action',
					link: 'https://www.youtube.com/BitcoinInAction',
					description: 'Italian technical bitcoin explanations '
				},
				{
					title: 'BitKnow',
					link: 'https://www.youtube.com/channel/UCYa3V18xMgDCzs5Ae3qQIMQ',
					description: 'Interviews'
				},
				{
					title: 'Bolt-A-Thon',
					link: 'https://www.youtube.com/playlist?list=PLC_AgDAr0m6QhwqPDrqMfjX64oHGmwDMk',
					description: '9 superb presentations + hackathon'
				},
				{
					title: 'Hard Money Film',
					link: 'https://www.hardmoneyfilm.com/',
					description: 'Excellent short film about money'
				},
				{
					title: 'Hungry Hodler',
					link: 'https://www.youtube.com/channel/UCDTaIonIagoJNLGcyESBm1Q/videos',
					description: 'Engaging & informative Bitcoin videos'
				},
				{
					title: 'Ioni Appelberg',
					link: 'https://www.youtube.com/user/waem',
					description: 'Relatively new informative Bitcoin videos'
				},
				{
					title: 'Justin Moon',
					link: 'https://www.youtube.com/channel/UCLp4OswuHySZZ3zrVBIoDjg',
					description: 'Interviews & presentations'
				},
				{
					title: 'Learn Me A Bitcoin',
					link: 'https://www.youtube.com/channel/UCj9MFr-7a02d_qe4xVnZ1sA/',
					description: '4 superb explainer videos'
				},
				{
					title: 'Saylor Series',
					link: 'https://www.youtube.com/watch?v=4rvTppy1qLI&list=PL2jAZ0x9H0bRvoNt1xNJWYa9_8_an03h0',
					description: 'Build the intellectual foundation necessary to understand Bitcoin'
				}
			],
			companies: [
				{
					title: 'Amber',
					link: 'https://www.youtube.com/channel/UCLu1BZeluW3qt-t2MIk7X5g',
					description: 'Aleks Svetski & Amber Promo'
				},
				{
					title: 'Bull Bitcoin',
					link: 'https://www.youtube.com/channel/UC9acjFaknVIlsMMYwVXtcvQ',
					description: 'Francis Pouliot & Bull Bitcoin Promo'
				},
			]

		}
	}

}
</script>
