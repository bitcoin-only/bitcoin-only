<template>
	<div id="learning-resources-page">
		<h1 class="page-title">Learning Resources</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Work through the steps on <a href="https://bitcoin-intro.com/" target="_blank">bitcoin-intro.com</a>.</p>

		</div>

		<h3>Articles</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(article, index) in articles" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="article.link" target="_blank">{{ article.title }}</a>
					</div>
					<div>{{ article.description }}</div>
				</div>
			</div>
		</div>

		<h3>Periodicals</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(periodical, index) in periodicals" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="periodical.link" target="_blank">{{ periodical.title }}</a>
					</div>
					<div>{{ periodical.description }}</div>
				</div>
			</div>
		</div>

		<h3>Classes</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(classInfo, index) in classes" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="classInfo.link" target="_blank">{{ classInfo.title }}</a>
					</div>
					<div>{{ classInfo.description }}</div>
				</div>
			</div>
		</div>

		<h3>Websites</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(website, index) in websites" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="website.link" target="_blank">{{ website.title }}</a>
					</div>
					<div>{{ website.description }}</div>
				</div>
			</div>
		</div>

		<h3>Advanced Reading</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(advancedRead, index) in advancedReading" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="advancedRead.link" target="_blank">{{ advancedRead.title }}</a>
					</div>
					<div>{{ advancedRead.description }}</div>
				</div>
			</div>
		</div>

		<h3>Research</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Title</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(publication, index) in research" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="publication.link" target="_blank">{{ publication.title }}</a>
					</div>
					<div>{{ publication.description }}</div>
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

	name: 'LearningResourcesPage',

	head: {
		title: 'Learning Resources - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of educational resources to learn more about Bitcoin.' }
		]
	},

	data () {
		return {

			articles: [
				{
					title: 'Gradually Then Suddenly',
					link: 'https://unchained-capital.com/blog/category/gradually-then-suddenly/',
					description: 'Detailed articles exploring bitcoin'
				},
				{
					title: 'Technical Bitcoin Overview',
					link: 'https://medium.com/@pierre_rochard/understanding-the-technical-side-of-bitcoin-2c212dd65c09',
					description: 'Understanding the technical side of bitcoin'
				},
				{
					title: 'Why Bitcoin',
					link: 'https://medium.com/@wiz/why-bitcoin-359ada12629e',
					description: 'Security, privacy, and freedom of your money'
				}
			],

			periodicals: [
				{
					title: 'Citadel 21',
					link: 'https://www.citadel21.com/',
					description: 'Monthly Bitcoin cultural zine'
				},
				{
					title: 'Lightning Hood (Inactive)',
					link: 'https://medium.com/@lightninghood',
					description: 'Weekly summary of Bitcoin and Lightning Network news'
				},
				{
					title: 'Lightning Labs',
					link: 'https://lightninglabs.substack.com/archive',
					description: 'Lightning Network news'
				},
				{
					title: 'Bitcoin Monthly',
					link: 'https://bitcoiner.guide/monthly',
					description: 'Monthly index of Bitcoin and Lightning Network news and developments'
				},
				{
					title: 'The Bitcoin Times',
					link: 'https://bitcointimes.news/',
					description: 'A beautiful, informative and stylish publication released 2-3 times per year'
				}
			],

			classes: [
				{
					title: '21 Lectures (Beginner)',
					link: 'https://www.21lectures.com/beginner-course/',
					description: '2-day course (in development)'
				},
				{
					title: '21 Lectures (Advanced)',
					link: 'https://www.21lectures.com/advanced-course/',
					description: '4-day Course'
				},
				{
					title: 'Bitcoin For Everybody',
					link: 'https://learn.saylor.org/course/view.php?id=468',
					description: 'Free 12 hour course by Stephan Livera'
				},
				{
					title: 'Bitcoin Lessons',
					link: 'https://www.bitcoinlessons.org/',
					description: 'App based lessons'
				},
				{
					title: 'Bitcoin Studio',
					link: 'https://www.bitcoin-studio.com/workshops',
					description: '1-day workshops'
				},
				{
					title: 'Learn Me A Bitcoin',
					link: 'http://learnmeabitcoin.com/workshops/',
					description: '1-day workshop'
				},
				{
					title: 'Smart Custody',
					link: 'https://www.smartcustody.com/',
					description: '1-day workshop'
				},
				{
					title: 'Teach Bitcoin',
					link: 'https://teachbitcoin.io/',
					description: '4-week course (10h/week) online'
				},
				{
					title: 'The Bitcoin Standard Academy',
					link: 'https://saifedean.com/academy/',
					description: '10-week course online'
				},
				{
					title: 'Towards Liberty',
					link: 'http://towardsliberty.com/',
					description: 'Bitcoin mentorship'
				}
			],

			websites: [
				{
					title: '10hoursofbitcoin',
					link: 'https://10hoursofbitcoin.com/',
					description: 'Links to 10h of Bitcoin lessons'
				},
				{
					title: 'BIPs',
					link: 'https://bips.xyz/',
					description: 'Explorer for BIPs. View, search and share easily BIPs'
				},
				{
					title: 'Bitcoin Briefly',
					link: 'https://bitcoinbriefly.com/',
					description: 'Brief Bitcoin Explanations'
				},
				{
					title: 'Bitcoind.me',
					link: 'https://bitcoind.me/',
					description: 'Persian resources - translated books, tutorials and more'
				},
				{
					title: 'Bitcoin Designed',
					link: 'https://www.bitcoindesigned.com/',
					description: 'Striking Bitcoin infographics'
				},
				{
					title: 'Bitcoin Design Guide',
					link: 'https://bitcoin.design/guide/',
					description: 'A bitcoin application design guide'
				},
				{
					title: 'Bitcoin Explained',
					link: 'https://www.bitcoin-explained.com/',
					description: 'Comprehensive intro with curated links'
				},
				{
					title: 'Bitcoin Q & A',
					link: 'https://bitcoiner.guide/qna/',
					description: 'Extensive questions & answers'
				},
				{
					title: 'Bitcoin Rabbit Hole',
					link: 'http://bitcoinrabbithole.org/',
					description: 'Index of Bitcoin content'
				},
				{
					title: 'Bitcoin Resources',
					link: 'https://bitcoin-resources.com/',
					description: 'Comprehensive Bitcoin book/article/podcast list'
				},
				{
					title: 'Bitcoin Slides',
					link: 'https://www.bitcoin-studio.com/resources',
					description: 'Comprehensive slides'
				},
				{
					title: 'Bitcoin Support',
					link: 'https://guides.bitcoinsupport.com/',
					description: 'Self-custody and privacy guides'
				},
				{
					title: 'Bitcoin Translated',
					link: 'https://bitcoin-translated.ru/',
					description: 'Russian translations of articles & books'
				},
				{
					title: 'Bitcoin.org',
					link: 'https://bitcoin.org/',
					description: 'Bitcoin information'
				},
				{
					title: 'Bitcoin-Intro',
					link: 'https://bitcoin-intro.com/',
					description: 'Step by Step bitcoin onboarding guide'
				},
				{
					title: 'BitKnow',
					link: 'https://thebitgeneration.org/',
					description: 'Quality Bitcoin blog'
				},
				{
					title: 'Chaincode Study Groups',
					link: 'https://github.com/chaincodelabs/study-groups',
					description: 'Bitcoin & Lightning study guides'
				},
				{
					title: 'Estudio Bitcoin',
					link: 'https://estudiobitcoin.com/',
					description: 'Resources for Spanish Bitcoiners'
				},
				{
					title: 'exonumia.africa',
					link: 'https://exonumia.africa',
					description: 'Freely available African language translations of literature that explains Bitcoin'
				},
				{
					title: 'Get Coined',
					link: 'https://www.getcoined.io/',
					description: 'Concise introduction for precoiners'
				},
				{
					title: 'Hungry Hodler',
					link: 'https://hungryhodler.com/',
					description: 'Informative Bitcoin evangelizing'
				},
				{
					title: 'L2B Global',
					link: 'https://blog.l2b.global/',
					description: 'Blog from an OTC desk'
				},
				{
					title: 'Learn Me A Bitcoin',
					link: 'http://learnmeabitcoin.com/',
					description: 'Bitcoin Explained'
				},
				{
					title: 'Look Into Bitcoin',
					link: 'https://www.lookintobitcoin.com/',
					description: 'Live valuation charts'
				},
				{
					title: 'Ministry Of Nodes',
					link: 'https://www.ministryofnodes.com.au/',
					description: 'Articles, videos and workshops/webinars'
				},
				{
					title: 'Nakamoto Institute',
					link: 'https://nakamotoinstitute.org/literature/',
					description: 'Everything Satoshi'
				},
				{
					title: 'River Learning Center',
					link: 'https://river.com/learn/',
					description: 'Basics guide & glossary'
				},
				{
					title: "Satoshi Vibes",
					link: "https://www.satoshivibes.com",
					description: "Satoshi Nakamoto Quotes Wiki",
				},
				{
					title: 'Storing Bitcoin',
					link: 'https://storingbitcoin.info/',
					description: 'Interactive guide to storing bitcoin'
				},
				{
					title: 'Veriphi',
					link: 'https://veriphi.io/blog/',
					description: 'Bitcoin tech explained'
				},
				{
					title: 'Why Hold Bitcoin',
					link: 'https://whyholdbitcoin.com/resources/',
					description: 'Reviews, guides & resources'
				},
				{
					title: 'WORDS',
					link: 'https://bitcoinwords.github.io/',
					description: 'A monthly Bitcoin journal'
				}
			],

			advancedReading: [
				{
					title: 'Bitcoin Questions',
					link: 'https://github.com/bokobza/bitcoin-interview-questions',
					description: 'Technical Bitcoin questions'
				},
				{
					title: 'Lightning Summary',
					link: 'https://medium.com/@unofficialbitcoinshow/how-lightning-network-maintains-bitcoins-value-proposition-d127da10077d',
					description: 'Lightning Network deep-dive'
				},
				{
					title: 'Schnorr / MuSig',
					link: 'https://github.com/MaxHillebrand/LightningMultiSig/blob/master/SharedOwnership.asciidoc#schnorr-signatures',
					description: 'Max\'s cliffnotes'
				},
				{
					title: 'Shamir Secret Sharing',
					link: 'https://github.com/MaxHillebrand/LightningMultiSig/blob/master/SharedOwnership.asciidoc#shamir%E2%80%99s-secret-sharing-scheme',
					description: 'Max\'s cliffnotes'
				}
			],

			research: [
				{
					title: 'Coinjoin Research',
					link: 'https://github.com/6102bitcoin/CoinJoin-Research',
					description: 'Coinjoin research by 6102bitcoin'
				},
				{
					title: 'Bitcoin And The Trust Issue: Is Bitcoin Adoption Accelerated By The Abuse Of Trust?',
					link: 'https://karozagorus.keybase.pub/KaroZagorus-2020-Thesis.pdf',
					description: 'Bitcoin research thesis about Bitcoin and social organization'
				},
				{
					title: 'Cryptoasset Consumer Research 2020',
					link: 'https://www.fca.org.uk/publication/research/research-note-cryptoasset-consumer-research-2020.pdf',
					description: 'Research by the UK FCA'
				}
			]

		}
	}

}
</script>
