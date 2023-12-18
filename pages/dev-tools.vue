<template>
	<div id="explorers-dashboards-page">

		<h1 class="page-title">Dev Tools</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<p>Read 'Programming Bitcoin' by Jimmy Song (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Hardcopy</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>).</p>

		</div>

		<h3>Backend Tools</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in backendTools" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.description"></div>
				</div>
			</div>
		</div>

		<h3>Learning Resources</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(lineItem, index) in learningResources" :key="index" class="tbl-row">
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
					<div class="tbl-title">Project</div>
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

	</div>
</template>

<style lang="scss">
#explorers-dashboards-page .tbl-row > div a {
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
</style>

<script>
export default {

	name: 'DevToolsPage',

	head: {
		title: 'Dev Tools - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection Bitcoin developer tools.' }
		]
	},

	data() {
		return {

			backendTools: [
				{
					title: 'Bitcoin Forge',
					link: 'https://improvein.github.io/bitcoin-forge/',
					description: 'Toolkit for tinkering with scripts, TXs, & addresses'
				},
				{
					title: 'Bitcoin Optec Dashboard',
					link: 'https://dashboard.bitcoinops.org/',
					description: 'Detailed live Bitcoin stats'
				},
				{
					title: 'Bitcoin Playground',
					link: 'https://nioctib.tech/',
					description: 'Explore raw tx data'
				},
				{
					title: 'bitcoin-s',
					link: 'https://github.com/bitcoin-s/bitcoin-s',
					description: 'Scala Bitcoin library'
				},
				{
					title: 'Bitcoin Dev Kit',
					link: 'https://bitcoindevkit.org/',
					description: 'Rust Bitcoin tools and libraries'
				},
				{
					title: 'Bitcoin Spring Boot Starter',
					link: 'https://github.com/theborakompanioni/bitcoin-spring-boot-starter',
					description: 'Spring Boot Starter for Bitcoin [Experimental]'
				},
				{
					title: 'Bolt Card',
					link: 'https://www.boltcard.org/',
					description: 'NFC lightning payment card'
				},
				{
					title: 'Braiins OS',
					link: 'https://braiins-os.org/',
					description: 'Open source mining software'
				},
				{
					title: 'CoinBin',
					link: 'https://coinb.in/',
					description: 'Web wallet to learn'
				},
				{
					title: 'CypherNode',
					link: 'https://cyphernode.io/',
					description: 'API server'
				},
				{
					title: 'Dojo',
					link: 'https://github.com/Samourai-Wallet/samourai-dojo',
					description: 'End-to-end Bitcoin Wallet backing server'
				},
				{
					title: 'Embit',
					link: 'https://embit.rocks/#/',
					description: 'Bitcoin lib for Python3 or MicroPython'
				},
				{
					title: 'Lightning Development Kit',
					link: 'https://lightningdevkit.org/',
					description: 'Lightning Network Implementation as an SDK'
				},
				{
					title: 'LibreTX',
					link: 'https://github.com/coinsurenz/LibreTX',
					description: 'Create Bitcoin tx\'s to learn'
				},
				{
					title: 'LNdash',
					link: 'https://github.com/djmelik/lndash',
					description: 'Simple web dashboard for LND'
				},
				{
					title: 'LNtop',
					link: 'https://github.com/edouardparis/lntop',
					description: 'Lightning Network channel management'
				},
				{
					title: 'Mule Tools',
					link: 'https://github.com/MuleTools/MuleTools',
					description: 'Bitcoin transaction broadcasting'
				},
				{
					title: 'Node Launcher',
					link: 'https://github.com/PierreRochard/node-launcher',
					description: 'Easy Launch Core & LND'
				},
				{
					title: 'Python Bitcoinlib',
					link: 'https://github.com/petertodd/python-bitcoinlib',
					description: 'Python Bitcoin Library'
				},
				{
					title: 'WebLN',
					link: 'https://github.com/wbobeirne/webln',
					description: 'Interract with LN node via browser'
				}
			],
			learningResources: [
				{
					title: 'Bitcoin Dev Network',
					link: 'https://bitcoindev.network/',
					description: 'Tutorials for aspiring Bitcoin devs'
				},
				{
					title: 'BitcoinJS & Core CLI',
					link: 'https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS',
					description: 'Extensive guide to Bitcoin Javascript'
				},
				{
					title: 'Bitcoin Reader',
					link: 'http://srv1.yogh.io/',
					description: 'Learn about Bitcoin Script (<a href="https://github.com/yogh-io/bitcoin-transaction-explorer" target="_blank">GitHub</a>)'
				},
				{
					title: 'Command Line Bitcoin',
					link: 'https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line',
					description: 'Learning Bitcoin from the command line'
				},
				{
					title: 'Lightning Hood',
					link: 'https://lightninghood.com/',
					description: 'Information / Resources'
				},
				{
					title: 'Mastering Bitcoin',
					link: 'https://github.com/bitcoinbook/bitcoinbook',
					description: 'How Bitcoin works - high level (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Hardcopy</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)'
				},
				{
					title: 'Programming Bitcoin',
					link: 'https://github.com/jimmysong/programmingbitcoin',
					description: 'How Bitcoin works - technical level (<a href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496" target="_blank">Hardcopy</a> | <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>)'
				},
				{
					title: 'Programming the Blockchain in C#',
					link: 'https://programmingblockchain.gitbook.io/programmingblockchain/',
					description: 'Guide to Bitcoin in C#'
				},
				{
					title: 'Script Explorer',
					link: 'https://paulkernfeld.com/bse/',
					description: 'Learn about Bitcoin script (<a href="https://github.com/paulkernfeld/bitcoin-script-explorer" target="_blank">GitHub</a>)'
				}
			],
			services: [
				{
					title: 'Blockstream Satellite',
					link: 'https://blockstream.com/satellite/',
					description: 'Blockchain satellite service'
				}
			]

		}
	}

}
</script>
