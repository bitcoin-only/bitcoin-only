<template>
	<div id="wallets-page">
		<h1 class="page-title">Wallets</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<ul>
				<li>
					Desktop: <a href="https://www.sparrowwallet.com/" target="_blank">Sparrow Wallet</a> connected to
					<a href="https://bitcoincore.org/" target="_blank">Bitcoin Core</a>
				</li>
				<li>iOS & Android Onchain: <a href="https://bluewallet.io/" target="_blank">Blue Wallet</a></li>
				<li>iOS & Android Lightning: <a href="https://phoenix.acinq.co/" target="_blank">Phoenix</a></li>
			</ul>
		</div>

		<p>
			It is very important that you learn how to back up your mnemonic seed and that if you use a passphrase, you back
			that up too. Check out the <nuxt-link to="/privacy">privacy page</nuxt-link> for backup and security guidance.
		</p>
		<p>
			See <a href="https://veriphi.io/en/blog/software-wallet-analysis" target="_blank">this report</a> for a comparison
			of the features of many of the wallets listed below.
		</p>

		<h3>Recommended Wallets</h3>

		<TableData
			:headers="['Project', 'Desktop', 'iOS', 'Android', 'CoinControl', 'OnChain', 'Lightning', 'Multisig', 'Tor']"
			:rows="recommendedRows"
			max-width="1000px"
		/>

		<h3>On-Chain Wallets</h3>

		<TableData :headers="['Project', 'Description', 'Platform']" :rows="onChainRows" max-width="1000px" />

		<h3>Lightning Wallets</h3>

		<TableData :headers="['Project', 'Description', 'Platform']" :rows="lightningRows" max-width="1000px" />

		<h3>Closed Sourced Wallets</h3>

		<TableData :headers="['Project', 'Description', 'Platform']" :rows="closedSourceRows" max-width="1000px" />

		<h3>Custodial Accounts</h3>

		<TableData :headers="['Project', 'Description', 'Platform']" :rows="custodialRows" max-width="1000px" />

		<h3>Advanced Storage Methods</h3>

		<TableData :headers="['Project', 'Dev', 'Description']" :rows="advancedRows" max-width="1000px" />

		<div class="footnotes">
			<p>
				<sup>[0]</sup>Google Drive backups allow companies to access your email address, name, and Google profile
				picture. It's strongly recommended to use a separate Google account to use these apps.
			</p>
			<p>
				<sup>[1]</sup>Blue Wallet's Lightning is custodial by default, but users can opt to connect their app to their
				own Lightning node using LNDhub. The on-chain functionality is non-custodial.
			</p>
			<p>
				<sup>[2]</sup>Bottle.li is fully custodial, meaning you do not have your private keys, thus you are not
				guaranteed full control of your funds.
			</p>
			<p>
				<sup>[3]</sup>Opennode is fully custodial, meaning you do not have your private keys, thus you are not
				guaranteed full control of your funds. You can (and should) set reoccurring withdrawals to send any bitcoin you
				receive to your own wallet.
			</p>
			<p>
				<sup>[4]</sup>Tippin.me is fully custodial, meaning you do not have your private keys, thus you are not
				guaranteed full control of your funds.
			</p>
			<p>
				<sup>[5]</sup>Wallet of Satoshi is fully custodial, meaning you do not have your private keys, thus you are not
				guaranteed full control of your funds.
			</p>
			<p>
				<sup>[6]</sup>Since the wallet is closed source, we recommend using 3/5 and only with hardware devices that you
				source independently.
			</p>
			<p>
				<sup>[7]</sup>These wallets integrate a KYC exchange to buy bitcoin. We recommend against using KYC exchanges
				due to the <a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">risks</a>.
			</p>
			<p>
				<sup>[8]</sup>Alby's users can opt to connect their browser extension to their Lightning node using LND, LNDhub,
				LNbits or Eclair. Also they can use Alby's custodial Lightning.
			</p>
			<p>
				<sup>[9]</sup>Coinos is custodial by default, but offers a self-custodial option with a 12-word seed phrase.
			</p>
		</div>

		<h3>Depreciated Wallets</h3>

		<TableData :headers="['Project', 'Description', 'Platform']" :rows="depreciatedRows" max-width="1000px" />
	</div>
</template>

<style lang="scss" scoped>
sup {
	color: #f2ad4f;
	margin-left: 5px;
	font-size: 12px;
	top: 2px;
	position: relative;
}
.footnotes {
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
import {
	recommendedWallets,
	onChainWallets,
	lightningWallets,
	closedSourceWallets,
	custodialAccounts,
	advancedStorageMethods,
	depreciatedWallets,
} from '@/data/wallets'

const featureKeys = ['desktop', 'ios', 'android', 'coincontrol', 'onchain', 'lightning', 'multisig', 'tor']

const tableRows = (wallets) =>
	wallets.map((wallet) => [{ text: wallet.title, href: wallet.link }, { html: wallet.description }, wallet.platform])

const advancedRows = (wallets) =>
	wallets.map((wallet) => [
		{ text: wallet.title, href: wallet.link },
		{ links: wallet.devs.map((dev) => ({ text: dev.name, href: dev.link })) },
		{ html: wallet.description },
	])

export default {
	name: 'WalletsPage',

	setup() {
		usePageMeta({
			title: 'Wallets - Bitcoin Only',
			description: 'A collection Bitcoin only wallets.',
			schema: schemaItemList('Bitcoin Wallets', [
				...recommendedWallets,
				...onChainWallets,
				...lightningWallets,
				...closedSourceWallets,
				...custodialAccounts,
				...advancedStorageMethods,
				...depreciatedWallets,
			]),
		})
	},

	data() {
		return {
			recommendedRows: recommendedWallets.map((wallet) => [
				{ text: wallet.title, href: wallet.link },
				...featureKeys.map((key) => ({ icon: wallet[key] ? 'check-circle' : 'panorama-fisheye', size: 'is-medium' })),
			]),
			onChainRows: tableRows(onChainWallets),
			lightningRows: tableRows(lightningWallets),
			closedSourceRows: tableRows(closedSourceWallets),
			custodialRows: tableRows(custodialAccounts),
			advancedRows: advancedRows(advancedStorageMethods),
			depreciatedRows: tableRows(depreciatedWallets),
		}
	},
}
</script>
