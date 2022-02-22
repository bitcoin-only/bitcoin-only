<template>
	<div id="hardware-page">

		<h1 class="page-title">Hardware</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<ul>
				<li> Samourai Wallet users: Buy a <a href="https://shop.nodl.it/en/home/38-nodl-samourai-edition.html" target="_blank">Nodl Samourai Edition</a>
				<li> Blue Wallet users: Buy a <a href="http://mynodebtc.com/products/one" target="_blank">MyNode</a>
				<li> Secure your bitcoin: Buy a <a href="https://coldcardwallet.com/" target="_blank">Coldcard</a> hardware wallet</li>
			</ul>

		</div>

		<h3>Node: Buy (Plug & Play)</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(project, index) in nodeBuyPlugPlay" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<div>{{ project.description }}</div>
				</div>
			</div>
		</div>

		<h3>Node: DIY</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(project, index) in nodeDiy" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<div>{{ project.description }}</div>
				</div>
			</div>
		</div>

		<h3>Other Hardware</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(project, index) in otherHardware" :key="index" class="tbl-row">
					<div>
						<a :href="project.link" target="_blank">{{ project.title }}</a>
					</div>
					<div>{{ project.description }}</div>
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

	name: 'HardwarePage',

	head: {
		title: 'Hardware - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin hardware.' }
		]
	},

	data() {
		return {

			nodeBuyPlugPlay: [
				{
					title: 'MyNode',
					link: 'http://mynodebtc.com/products/one',
					description: 'Full stack - low cost'
				},
				{
					title: 'Nodl',
					link: 'https://www.nodl.it/',
					description: 'Full stack - feature rich'
				},
				{
					title: 'Nodl Samourai',
					link: 'https://shop.nodl.it/en/home/38-nodl-samourai-edition.html',
					description: 'Full stack - RAID backups'
				},
				{
					title: 'Raspiblitz',
					link: 'https://raspiblitz.com/',
					description: 'Full stack'
				},
				{
					title: 'Start 9 Labs Embassy',
					link: 'https://start9labs.com/',
					description: 'Full stack'
				}
			],

			nodeDiy: [
				{
					title: 'Bitcoin Core',
					link: 'https://bitcoin.org/',
					description: 'Install Bitcoin Core on your computer'
				},
				{
					title: 'MyNode',
					link: 'http://mynodebtc.com/',
					description: 'Full stack (Rock64 / Pi3 / Pi4)'
				},
				{
					title: 'Node Launcher',
					link: 'https://github.com/PierreRochard/node-launcher',
					description: 'UI to install full stack on Windows, macOS, & Linux'
				},
				{
					title: 'Samourai DOJO',
					link: 'https://bitcoin-on-raspberry-pi-4.gitbook.io/',
					description: 'Full node with API (PC / Pi4)'
				},
				{
					title: 'Raspibolt',
					link: 'https://raspibolt.org/',
					description: 'Bitcoin & Lightning node, manual installation guide for Debian-based OS'
				},
				{
					title: 'RoninDojo',
					link: 'https://wiki.ronindojo.io/',
					description: 'Full Stack (Rockpro 64 / Pi4 / Odroid N2)'
				},
				{
					title: 'Start9 Embassy',
					link: 'https://docs.start9labs.com/getting-started/diy.html',
					description: 'Full Stack (Pi4)'
				},
				{
					title: 'The Bitcoin Machines',
					link: 'https://thebitcoinmachines.com/',
					description: 'Custom made enclosure, heatsink, & SATA expansion'
				},
				{
					title: 'Thundroid',
					link: 'https://magazine.odroid.com/article/thundroid-perfect-bitcoin-lightning-node/',
					description: 'Lightning Node (Odroid HC2)\n'
				},
				{
					title: 'Umbrel',
					link: 'https://getumbrel.com/',
					description: 'Full Stack (Pi4)'
				},
				{
					title: 'Citadel',
					link: 'https://runcitadel.space/',
					description: 'Full Stack (Pi4)'
				},
				{
					title: 'Other DIY Bitcoin Hardware',
					link: 'https://diybitcoinhardware.com/',
					description: 'Other DIY hardware projects'
				}
			],

			otherHardware: [
				{
					title: 'Bitpiggys',
					link: 'https://www.bitpiggys.com/',
					description: 'Piggybank + Opendime'
				},
				{
					title: 'Blockclock',
					link: 'https://getblockclock.com/',
					description: 'Electromechanical Bitcoin interface'
				},
				{
					title: 'Blockclock Mini',
					link: 'https://blockclockmini.com/',
					description: 'Digital Bitcoin interface'
				},
				{
					title: 'Coldbit',
					link: 'https://coldbit.com/',
					description: 'Bitcoin mnemonic seed backup'
				},
				{
					title: 'Coldcard',
					link: 'https://coldcardwallet.com/',
					description: 'Cold storage hardware wallet'
				},
				{
					title: 'Hodlinox',
					link: 'https://hodlinox.com/',
					description: 'Bitcoin mnemonic seed backup'
				},
				{
					title: 'Opendime',
					link: 'https://opendime.com/',
					description: 'Bitcoin bearer bond'
				},
				{
					title: 'Passport',
					link: 'https://foundationdevices.com/',
					description: 'Cold storage hardware wallet'
				},
				{
					title: 'Revealer',
					link: 'https://revealer.cc/',
					description: 'Optical seed encryption tool'
				},
				{
					title: 'Seed Signer',
					link: 'https://github.com/SeedSigner/seedsigner',
					description: 'Offline, airgapped Bitcoin signing device'
				},
				{
					title: 'Specter DIY',
					link: 'https://github.com/cryptoadvance/specter-diy',
					description: 'DIY cold storage hardware wallet'
				}
			]

		}
	}

}
</script>
