<template>
	<div id="wallets-page">

		<h1 class="page-title">Wallets</h1>

		<div class="getting-started-section">

			<h3>Getting Started</h3>

			<ul>
				<li>Desktop: <a href="https://www.sparrowwallet.com/" target="_blank">Sparrow Wallet</a> connected to <a href="https://bitcoincore.org/" target="_blank">Bitcoin Core</a></li>
				<li>iOS: <a href="https://bluewallet.io/" target="_blank">Blue Wallet</a></li>
				<li>Android: <a href="https://samouraiwallet.com/" target="_blank">Samourai Wallet</a></li>
				<li>Lightning: <a href="https://muun.com/" target="_blank">Muun Wallet</a></li>
			</ul>

		</div>

		<p>It is very important that you learn how to backup your mnemonic seed & that if you use a passphrase you back that up too. Read <a href="https://bitcoin-intro.com/en/backup" target="_blank">this document</a> to learn more about backing up your wallet and check out the <nuxt-link to="/privacy">privacy page</nuxt-link>.</p>
		<p> See <a href="https://veriphi.io/en/blog/software-wallet-analysis" target="_blank">this report</a> for a comparison of the features of many of the wallets listed below.</p>

		<h3>Recommended Wallets</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Desktop</div>
					<div class="tbl-title">iOS</div>
					<div class="tbl-title">Android</div>
					<div class="tbl-title">CoinControl</div>
					<div class="tbl-title">CoinJoin</div>
					<div class="tbl-title">OnChain</div>
					<div class="tbl-title">Lightning</div>
					<div class="tbl-title">Multisig</div>
				</div>
				<div v-for="(wallet, index) in recommendedWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>

					<!-- desktop -->
					<div v-if="wallet.desktop"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- ios -->
					<div v-if="wallet.ios"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- android -->
					<div v-if="wallet.android"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- coincontrol -->
					<div v-if="wallet.coincontrol"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- coinjoin -->
					<div v-if="wallet.coinjoin"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- onchain -->
					<div v-if="wallet.onchain"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- lightning -->
					<div v-if="wallet.lightning == 'custodial'"><b-icon icon="alert-circle-outline" size="is-medium"> </b-icon></div>
					<div v-else-if="wallet.lightning"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
					<!-- multisig -->
					<div v-if="wallet.multisig"><b-icon icon="check-circle" size="is-medium"> </b-icon></div>
					<div v-else><b-icon icon="panorama-fisheye" size="is-medium"> </b-icon></div>
				</div>
			</div>
		</div>
		
		<p><b-icon icon="alert-circle-outline" size="is-small"> </b-icon> Blue Wallet's Lightning is custodial by default but users can opt to connect their app to their own Lightning node using LNDhub.</p>

		<h3>On-Chain Wallets</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Platform</div>
				</div>
				<div v-for="(wallet, index) in onChainWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div v-html="wallet.description"></div>
					<div>{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Lightning Wallets</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Platform</div>
				</div>
				<div v-for="(wallet, index) in lightningWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div v-html="wallet.description"></div>
					<div>{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Closed Sourced Wallets</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Platform</div>
				</div>
				<div v-for="(wallet, index) in closedSourceWallets" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div v-html="wallet.description"></div>
					<div>{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Custodial Accounts</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Description</div>
					<div class="tbl-title">Platform</div>
				</div>
				<div v-for="(wallet, index) in custodialAccounts" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div v-html="wallet.description"></div>
					<div>{{ wallet.platform }}</div>
				</div>
			</div>
		</div>

		<h3>Advanced Storage Methods</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Project</div>
					<div class="tbl-title">Dev</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(wallet, index) in advancedStorageMethods" :key="index" class="tbl-row">
					<div>
						<a :href="wallet.link" target="_blank">{{ wallet.title }}</a>
					</div>
					<div>
						<template v-for="(dev, devIndex) in wallet.devs">
							<a :key="devIndex" :href="dev.link" target="_blank">{{ dev.name }}</a><span v-if="devIndex + 1 < wallet.devs.length">, </span>
						</template>
					</div>
					<div v-html="wallet.description"></div>
				</div>
			</div>
		</div>

		<div class="footnotes">
			<p><sup>[0]</sup>Google Drive backups allow those companies to access your email address, name, & Google profile picture. It's strongly recommended to use a separate Google account to use these apps.</p>
			<p><sup>[1]</sup>Blue Wallet's Lightning is custodial by default but users can opt to connect their app to their own Lightning node using LNDhub. The on-chain functionality is non-custodial.</p>
			<p><sup>[2]</sup>Bottle.li is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[3]</sup>Opennode is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control of your funds. You can (and should) set reoccurring withdrawals to send any bitcoin you receive to your own wallet.</p>
			<p><sup>[4]</sup>Tippin.me is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[5]</sup>Wallet of Satoshi is fully custodial meaning you do not have your private keys, thus you are not guaranteed full control of your funds.</p>
			<p><sup>[6]</sup>As the wallet is closed source we recommend using 3/5 and only with hardware devices that you source independently.</p>
		</div>

	</div>
</template>

<style lang="scss">

#wallets-page sup {
	color: #f2ad4f;
	margin-left: 5px;
	font-size: 12px;
	top: 2px;
	position: relative;
}

</style>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
}
.tbl-wrapper {
	max-width: 1000px;
}
#wallets-page .footnotes {
	margin-top: 40px;

	sup {
		margin-left: 0;
		margin-right: 6px;
		top: 4px;
		font-size: 14px;
	}
}
</style>

<script>
export default {

	name: 'WalletsPage',

	head: {
		title: 'Wallets - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection Bitcoin only wallets.' }
		]
	},

	data() {
		return {
			recommendedWallets: [
				{
					title: 'Sparrow Wallet',
					link: 'https://www.sparrowwallet.com/',
					desktop: true,
					ios: false,
					android: false,
					coincontrol: true,
					coinjoin: true,
					onchain: true,
					lightning: false,
					multisig: true,
				},
				{
					title: 'Samourai Wallet',
					link: 'https://samouraiwallet.com/',
					desktop: false,
					ios: false,
					android: true,
					coincontrol: true,
					coinjoin: true,
					onchain: true,
					lightning: false,
					multisig: false,
				},
				{
					title: 'Muun Wallet',
					link: 'https://muun.com/',
					desktop: false,
					ios: true,
					android: true,
					coincontrol: false,
					coinjoin: false,
					onchain: false,
					lightning: true,
					multisig: false,
				},
				{
					title: 'Blue Wallet',
					link: 'https://bluewallet.io/',
					desktop: false,
					ios: true,
					android: true,
					coincontrol: true,
					coinjoin: false,
					onchain: true,
					lightning: "custodial",
					multisig: true,
				},
			],

			onChainWallets: [
				{
					title: 'ABCore',
					link: 'http://abco.re/en/releases/',
					description: 'Bitcoin Core full node for Android',
					platform: 'Android'
				},
				{
					title: 'Armory',
					link: 'https://www.btcarmory.com/',
					description: 'Cold storage & multi-sig',
					platform: 'Desktop'
				},
				{
					title: 'Bitcoin Core',
					link: 'https://bitcoincore.org/',
					description: 'Full node & Bitcoin wallet',
					platform: 'Desktop'
				},
				{
					title: 'Blue Wallet',
					link: 'https://bluewallet.io/',
					description: 'Feature rich Bitcoin wallet<sup>[1]</sup>',
					platform: 'iOS, Android, MacOS'
				},
				{
					title: 'Caravan',
					link: 'https://unchained-capital.github.io/caravan/#/',
					description: 'Stateless multi-sig coordinator',
					platform: 'Desktop'
				},
				{
					title: 'Electrum',
					link: 'https://electrum.org/#home',
					description: 'The most feature rich bitcoin desktop wallet available today',
					platform: 'Desktop, Android'
				},
				{
					title: 'Fully Noded',
					link: 'https://fonta1n3.github.io/FullyNoded/',
					description: 'Bitcoin Core GUI for iOS',
					platform: 'iOS'
				},
				{
					title: 'GreenAddress',
					link: 'https://github.com/greenaddress/WalletElectron/releases/tag/v0.1.04',
					description: 'Desktop companion to Blockstream Green mobile wallet',
					platform: 'Desktop'
				},
				{
					title: 'Hexa Wallet',
					link: 'https://hexawallet.io/',
					description: 'Relatively new Shamir Secret Sharing based recovery wallet',
					platform: 'iOS & Android'
				},
				{
					title: 'Hodl Wallet',
					link: 'https://hodlwallet.co/',
					description: 'Relatively new wallet with simple UI',
					platform: 'iOS & Android'
				},
				{
					title: 'Lily Wallet',
					link: 'https://lily.kevinmulcrone.com/',
					description: 'Relatively new multi-sig wallet with simple UI',
					platform: 'Desktop'
				},
				{
					title: 'Muun Wallet',
					link: 'https://muun.com/',
					description: 'Relatively new wallet with novel multi-sig 2-of-2 spending.',
					platform: 'iOS & Android'
				},
				{
					title: 'Samourai Wallet',
					link: 'https://samouraiwallet.com/',
					description: 'The most feature rich and advanced Bitcoin wallet available on Android today',
					platform: 'Android'
				},
				{
					title: 'Sparrow Wallet',
					link: 'https://www.sparrowwallet.com/',
					description: 'Relatively new desktop wallet for single sig and multi-sig',
					platform: 'Desktop'
				},
				{
					title: 'Specter',
					link: 'https://github.com/cryptoadvance/specter-desktop',
					description: 'Relatively new desktop GUI for Bitcoin Core optimised to work with hardware wallets',
					platform: 'Desktop'
				},
				{
					title: 'Wasabi Wallet',
					link: 'https://wasabiwallet.io/',
					description: 'Privacy focused Bitcoin wallet, that implements trustless coin shuffling',
					platform: 'Desktop'
				}
			],

			lightningWallets: [
				{
					title: 'BLW',
					link: 'https://lightning-wallet.com/',
					description: 'A standalone SPV Bitcoin node with a fully functional built-in Lightning node',
					platform: 'Android'
				},
				{
					title: 'Breez',
					link: 'https://breez.technology/',
					description: 'Mobile non-custodial wallet<sup>[0]</sup>',
					platform: 'iOS & Android (Beta)'
				},
				{
					title: 'Eclair',
					link: 'https://github.com/ACINQ/eclair',
					description: 'Lightning node software',
					platform: 'Desktop'
				},
				{
					title: 'Eclair Mobile',
					link: 'https://github.com/ACINQ/eclair-mobile',
					description: 'Lightning-ready Bitcoin wallet',
					platform: 'Android'
				},
				{
					title: 'Electrum',
					link: 'https://electrum.org/#home',
					description: 'The most feature rich bitcoin desktop wallet available today',
					platform: 'Desktop'
				},
				{
					title: 'Muun Wallet',
					link: 'https://muun.com/',
					description: 'Relatively new lightning wallet',
					platform: 'iOS & Android'
				},
				{
					title: 'Phoenix',
					link: 'https://phoenix.acinq.co/',
					description: 'Lightning-only Bitcoin wallet',
					platform: 'Android'
				},
				{
					title: 'Ride The Lightning',
					link: 'https://github.com/Ride-The-Lightning/RTL',
					description: 'Web user interface to manage lightning node operations',
					platform: 'Web'
				},
				{
					title: 'Sats App',
					link: 'https://satsapp.com/',
					description: 'Mobile non-custodial wallet connected to Casa node',
					platform: 'iOS & Android (Beta)'
				},
				{
					title: 'Thunderhub',
					link: 'https://thunderhub.io',
					description: 'Web user interface to manage lightning node operations',
					platform: 'Web'
				},
				{
					title: 'Zap',
					link: 'https://zap.jackmallers.com/',
					description: 'Desktop Lightning wallet. Mobile LND interface',
					platform: 'Desktop, iOS, Android'
				},
				{
					title: 'Zeus',
					link: 'https://zeusln.app/',
					description: 'Mobile app for LND users',
					platform: 'iOS, Android'
				}
			],

			closedSourceWallets: [
				{
					title: 'Casa Keymaster',
					link: 'https://keys.casa/keymaster/',
					description: 'Multi-sig Bitcoin<sup>[0]</sup>',
					platform: 'iOS, Android'
				},
				{
					title: 'Nunchuk',
					link: 'https://nunchuk.io/',
					description: 'Multi-sig Bitcoin [New] (frontend is closed source)',
					platform: 'Desktop'
				}
			],

			custodialAccounts: [
				{
					title: 'Blue Wallet',
					link: 'https://bluewallet.io/',
					description: 'Bitcoin & Lightning wallet<sup>[1]</sup>',
					platform: 'Desktop, iOS, Android'
				},
				{
					title: 'Bottlepay',
					link: 'https://bottlepay.com/',
					description: 'Lightning Social Tipping<sup>[2]</sup>',
					platform: 'Web'
				},
				{
					title: 'Opennode',
					link: 'https://opennode.co/',
					description: 'Accept Bitcoin & Lightning payments<sup>[3]</sup>',
					platform: 'Web'
				},
				{
					title: 'Tippin.me',
					link: 'https://tippin.me/',
					description: 'Lightning Social Tipping<sup>[4]</sup>',
					platform: 'Web'
				},
				{
					title: 'Wallet of Satoshi',
					link: 'https://www.walletofsatoshi.com/',
					description: 'Lightning only wallet<sup>[5]</sup>',
					platform: 'iOS, Android'
				}
			],

			advancedStorageMethods: [
				{
					title: '10x Security Bitcoin Guide',
					link: 'https://btcguide.github.io/',
					description: 'Store bitcoin without a single point of failure.',
					devs: [
						{
							name: 'Michael Flaxman',
							link: 'https://twitter.com/mflaxman/'
						}
					]
				},
				{
					title: 'Casa Wealth Security Protocol',
					link: 'https://github.com/Casa/wealth-security-protocol',
					description: 'Casa approach to designing their service <sup>[6]</sup>',
					devs: [
						{
							name: 'Casa Team',
							link: 'https://twitter.com/CasaHODL'
						}
					]
				},
				{
					title: 'Gentle Introduction to Cold Storage',
					link: 'https://bitzuma.com/posts/a-gentle-introduction-to-bitcoin-cold-storage/',
					description: 'Short explanation of hot wallet risk',
					devs: [
						{
							name: 'Rich Apodaca',
							link: 'https://twitter.com/bitzuma'
						}
					]
				},
				{
					title: 'Glacier Protocol',
					link: 'https://glacierprotocol.org/',
					description: '[OLD] Cold storage protocol',
					devs: [
						{
							name: 'Glacier Protocol',
							link: 'https://twitter.com/glacierprotocol'
						}
					]
				},
				{
					title: 'Hodl Guides',
					link: 'https://github.com/DriftwoodPalace/guides',
					description: '[OLD] Multiple guides to cold storage.',
					devs: [
						{
							name: 'Driftwood Palace',
							link: 'https://twitter.com/DriftwoodPalace'
						}
					]
				},
				{
					title: 'Rusty\'s Bitcoin Storage Guide',
					link: 'https://github.com/rustyrussell/bitcoin-storage-guide',
					description: '[OLD] Cold storage guide.',
					devs: [
						{
							name: 'Rusty Russell',
							link: 'https://mobile.twitter.com/rusty_twit/status/644559490646278144'
						}
					]
				},
				{
					title: 'Smart Custody',
					link: 'https://github.com/BlockchainCommons/SmartCustodyWhitePapers/blob/master/%23SmartCustody-_Simple_Self-Custody_Cold_Storage_Scenario.md',
					description: '[OLD] Best Practices for Cold Storage',
					devs: [
						{
							name: 'C. Allen',
							link: 'https://twitter.com/christophera'
						},
						{
							name: 'S. Appelcline',
							link: 'https://twitter.com/Appelcline'
						},
					]
				}
			],

		}
	}

}
</script>
