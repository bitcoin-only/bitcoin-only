<template>
	<div id="privacy-page">

		<h1 class="page-title">Privacy</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Read my FAQ on how to <a href="https://github.com/6102bitcoin/FAQ/blob/master/hodl-privacy.md" target="_blank">hold Bitcoin privately</a>.</p>

		</div>

		<h3>Coinjoin Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Learn More</div>
				</div>
				<div v-for="(lineItem, index) in coinjoinTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
					<div>
						<template v-for="(infoLink, learnMoreIndex) in lineItem.learnMore">
							<a :key="learnMoreIndex" :href="infoLink.link" target="_blank">{{ infoLink.name }}</a><span v-if="learnMoreIndex + 1 < lineItem.learnMore.length"> | </span>
						</template>
					</div>
				</div>
			</div>
		</div>

		<h3>Communication Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Learn More</div>
				</div>
				<div v-for="(lineItem, index) in communicationTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
					<div>
						<template v-for="(infoLink, learnMoreIndex) in lineItem.learnMore">
							<a :key="learnMoreIndex" :href="infoLink.link" target="_blank">{{ infoLink.name }}</a><span v-if="learnMoreIndex + 1 < lineItem.learnMore.length"> | </span>
						</template>
					</div>
				</div>
			</div>
		</div>

		<h3>Other Information</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Name</div>
					<div class="tbl-title">Author</div>
				</div>
				<div v-for="(lineItem, index) in otherInfo" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div>
						<a :href="lineItem.authorLink" target="_blank">{{ lineItem.author }}</a>
					</div>
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

	name: 'PrivacyPage',

	head: {
		title: 'Privacy - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin privacy tools.' }
		]
	},

	data() {
		return {

			coinjoinTools: [
				{
					title: 'Joinmarket',
					link: 'https://github.com/JoinMarket-Org/joinmarket-clientserver',
					description: 'Market based fee structure',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/JoinMarket-Org/joinmarket-clientserver'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/watch?v=l2iv2MiGaYI&feature=youtu.be&t=18890'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/58'
						},
					]
				},
				{
					title: 'Wasabi Wallet',
					link: 'https://wasabiwallet.io/',
					description: 'Strong network level privacy',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/6102bitcoin/FAQ/blob/master/wasabi.md'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/watch?v=zPKpC9cRcZo&list=PLmoQ11MXEmahCG1nkbKK6DiAwVx9giJCi'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/24'
						},
					]
				},
				{
					title: 'Whirlpool',
					link: 'https://github.com/Samourai-Wallet/Whirlpool',
					description: 'Advanced postmix spending',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/6102bitcoin/FAQ/blob/master/whirlpool.md'
						},
						{
							name: 'Video',
							link: 'https://www.youtube.com/playlist?list=PLIBmWVGQhizIWHyDkY-AzYc-Rn_3zGRct'
						},
						{
							name: 'Audio',
							link: 'https://stephanlivera.com/episode/78/'
						},
					]
				}
			],
			communicationTools: [
				{
					title: 'Juggernaut',
					link: 'https://www.getjuggernaut.com/',
					description: 'End-to-end encrypted messaging over the Lightning Network',
					learnMore: [
						{
							name: 'Text',
							link: 'https://github.com/LN-Juggernaut/juggernaut-desktop'
						}
					]
				},
				{
					title: 'Sphinx',
					link: 'https://sphinx.chat/',
					description: 'Group messaging over the Lightning Network',
					learnMore: [
						{
							name: 'Text',
							link: 'https://tftc.io/martys-bent/issue-863-2/'
						}
					]
				}
			],
			otherInfo: [
				{
					title: '10 Tips For Interacting With Bitcoin more Privately',
					link: 'https://www.bitcoinqna.com/post/10-tips-for-interacting-with-bitcoin-more-privately',
					author: 'Bitcoin Q+A',
					authorLink: 'https://twitter.com/BitcoinQ_A'
				},
				{
					title: 'A non-technical Guide to Privacy in Bitcoin',
					link: 'https://bitcoinsnippets.com/protect-your-bitcoin-through-privacy/',
					author: 'Sam Wouters',
					authorLink: 'https://twitter.com/SDWouters'
				},
				{
					title: 'An Incomplete Survey of Bitcoin\'s Privacy Technologies',
					link: 'http://hongchao.me/bitcoin-privacy/',
					author: 'Hong Chao',
					authorLink: 'https://www.twitter.com/hongchao'
				},
				{
					title: 'A Beginners Guide to Bitcoin Privacy',
					link: 'https://bitcoinprivacy.guide/',
					author: 'Bitcoin Q+A',
					authorLink: 'https://twitter.com/BitcoinQ_A'
				},
				{
					title: 'Bitcoin Privacy Wiki',
					link: 'https://en.bitcoin.it/wiki/Privacy',
					author: 'Chris Belcher',
					authorLink: 'https://twitter.com/chris_belcher_/'
				},
				{
					title: 'JoinMarket.me (Bitcoin Privacy Blog)',
					link: 'https://joinmarket.me/blog/',
					author: 'Adam Gibson',
					authorLink: 'https://twitter.com/waxwing__'
				},
				{
					title: 'CoinJoin Overview',
					link: 'https://6102bitcoin.com/coinjoin-overview',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'The CoinJoin Bounty Thread',
					link: 'https://6102bitcoin.com/coinjoin-the-bounty-thread',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'CoinJoin Research Repo',
					link: 'https://github.com/6102bitcoin/CoinJoin-Research/tree/master/CoinJoin_Research',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Hodl Privacy',
					link: 'https://github.com/6102bitcoin/FAQ/blob/master/hodl-privacy.md',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Do exchanges flag CoinJoin UTXO’s?',
					link: 'https://6102bitcoin.com/coinjoin-flagging',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				},
				{
					title: 'Seed FAQ',
					link: 'https://github.com/6102bitcoin/FAQ/blob/master/seed.md',
					author: '6102bitcoin',
					authorLink: 'https://twitter.com/6102bitcoin'
				}
			]

		}
	}

}
</script>
