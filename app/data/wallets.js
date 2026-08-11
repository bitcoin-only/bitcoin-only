export const recommendedWallets = [
	{
		title: 'Sparrow Wallet',
		link: 'https://www.sparrowwallet.com/',
		desktop: true,
		ios: false,
		android: false,
		coincontrol: true,
		onchain: true,
		lightning: false,
		multisig: true,
		tor: true,
	},
	{
		title: 'Blue Wallet',
		link: 'https://bluewallet.io/',
		desktop: false,
		ios: true,
		android: true,
		coincontrol: true,
		onchain: true,
		lightning: false,
		multisig: true,
		tor: false,
	},
	{
		title: 'Phoenix Wallet',
		link: 'https://phoenix.acinq.co/',
		desktop: false,
		ios: true,
		android: true,
		coincontrol: false,
		onchain: true,
		lightning: true,
		multisig: false,
		tor: false,
	},
]

export const onChainWallets = [
	{
		title: 'Bitcoin Core',
		link: 'https://bitcoincore.org/',
		description: 'Full node & Bitcoin wallet',
		platform: 'Desktop',
	},
	{
		title: 'Blockstream Green',
		link: 'https://blockstream.com/green/',
		description: 'Bitcoin Wallet with option for 2FA & HW',
		platform: 'iOS, Android & Desktop',
	},
	{
		title: 'Blue Wallet',
		link: 'https://bluewallet.io/',
		description: 'Feature rich Bitcoin wallet<sup>[1]</sup>,<sup>[7]</sup>',
		platform: 'iOS, Android, MacOS',
	},
	{
		title: 'Bitcoin Safe',
		link: 'https://bitcoin-safe.org/',
		description: 'Single & multisig cold storage wallet powered by BDK',
		platform: 'Desktop',
	},
	{
		title: 'Caravan',
		link: 'https://unchained-capital.github.io/caravan/#/',
		description: 'Stateless multi-sig coordinator',
		platform: 'Desktop',
	},
	{
		title: 'Electrum',
		link: 'https://electrum.org/#home',
		description: 'The most feature rich bitcoin desktop wallet available today',
		platform: 'Desktop, Android',
	},
	{
		title: 'Fully Noded',
		link: 'https://fonta1n3.github.io/FullyNoded/',
		description: 'Advanced iOS wallet that connects to Bitcoin Core',
		platform: 'iOS',
	},
	{
		title: 'Hexa Wallet',
		link: 'https://hexawallet.io/',
		description: 'Relatively new Shamir Secret Sharing based recovery wallet <sup>[7]</sup>',
		platform: 'iOS & Android',
	},
	{
		title: 'Muun Wallet',
		link: 'https://muun.com/',
		description: 'Relatively new wallet with novel multi-sig 2-of-2 spending.',
		platform: 'iOS & Android',
	},
	{
		title: 'Sparrow Wallet',
		link: 'https://www.sparrowwallet.com/',
		description: 'Standards based desktop wallet',
		platform: 'Desktop',
	},
	{
		title: 'Specter',
		link: 'https://github.com/cryptoadvance/specter-desktop',
		description: 'Desktop GUI for Bitcoin Core optimised to work with hardware wallets & multisig <sup>[7]</sup>',
		platform: 'Desktop',
	},
]

export const lightningWallets = [
	{
		title: 'Alby',
		link: 'https://getalby.com/',
		description: 'Bitcoin Lightning Payments and Identity Browser Extension<sup>[8]</sup>',
		platform: 'Web',
	},
	{
		title: 'Blixt Wallet',
		link: 'https://blixtwallet.github.io/',
		description: 'Non-custodial Bitcoin Lightning Wallet',
		platform: 'iOS & Android (Beta)',
	},
	{
		title: 'Breez',
		link: 'https://breez.technology/',
		description: 'Mobile non-custodial wallet<sup>[0]</sup>',
		platform: 'iOS & Android (Beta)',
	},
	{
		title: 'Eclair',
		link: 'https://github.com/ACINQ/eclair',
		description: 'Lightning node software',
		platform: 'Desktop',
	},
	{
		title: 'Eclair Mobile',
		link: 'https://github.com/ACINQ/eclair-mobile',
		description: 'Lightning-ready Bitcoin wallet',
		platform: 'Android',
	},
	{
		title: 'Electrum',
		link: 'https://electrum.org/#home',
		description: 'The most feature rich bitcoin desktop wallet available today',
		platform: 'Desktop',
	},
	{
		title: 'Bitkit',
		link: 'https://bitkit.to/',
		description: 'Self-custodial Bitcoin & Lightning wallet',
		platform: 'iOS & Android',
	},
	{
		title: 'Muun Wallet',
		link: 'https://muun.com/',
		description: 'Relatively new lightning wallet',
		platform: 'iOS & Android',
	},
	{
		title: 'Phoenix',
		link: 'https://phoenix.acinq.co/',
		description: 'Lightning-only Bitcoin wallet',
		platform: 'iOS & Android',
	},
	{
		title: 'Ride The Lightning',
		link: 'https://github.com/Ride-The-Lightning/RTL',
		description: 'Web user interface to manage lightning node operations',
		platform: 'Web',
	},
	{
		title: 'Thunderhub',
		link: 'https://thunderhub.io',
		description: 'Web user interface to manage lightning node operations',
		platform: 'Web',
	},
	{
		title: 'Zeus',
		link: 'https://zeusln.app/',
		description: 'Mobile interface for LND, Core Lightning, and Eclair',
		platform: 'iOS, Android',
	},
]

export const closedSourceWallets = [
	{
		title: 'Nunchuk',
		link: 'https://nunchuk.io/',
		description: 'Multi-sig Bitcoin [New] (frontend is closed source)',
		platform: 'Desktop',
	},
	{
		title: 'Unchained vault',
		link: 'https://unchained.com/personal/',
		description: 'Multi-sig Bitcoin',
		platform: 'Desktop',
	},
]

export const custodialAccounts = [
	{
		title: 'Bottlepay',
		link: 'https://bottlepay.com/',
		description: 'Lightning Social Tipping<sup>[2]</sup>',
		platform: 'Web',
	},
	{
		title: 'Coinos',
		link: 'https://coinos.io/',
		description: 'Web wallet & payment platform<sup>[9]</sup>',
		platform: 'Web',
	},
	{
		title: 'Opennode',
		link: 'https://opennode.co/',
		description: 'Accept Bitcoin & Lightning payments<sup>[3]</sup>',
		platform: 'Web',
	},
	{
		title: 'Tippin.me',
		link: 'https://tippin.me/',
		description: 'Lightning Social Tipping<sup>[4]</sup>',
		platform: 'Web',
	},
	{
		title: 'Wallet of Satoshi',
		link: 'https://www.walletofsatoshi.com/',
		description: 'Lightning only wallet<sup>[5]</sup>',
		platform: 'iOS, Android',
	},
]

export const advancedStorageMethods = [
	{
		title: '10x Security Bitcoin Guide',
		link: 'https://btcguide.github.io/',
		description: 'Store bitcoin without a single point of failure.',
		devs: [
			{
				name: 'Michael Flaxman',
				link: 'https://twitter.com/mflaxman/',
			},
		],
	},
	{
		title: 'Gentle Introduction to Cold Storage',
		link: 'https://bitzuma.com/posts/a-gentle-introduction-to-bitcoin-cold-storage/',
		description: 'Short explanation of hot wallet risk',
		devs: [
			{
				name: 'Rich Apodaca',
				link: 'https://twitter.com/bitzuma',
			},
		],
	},
	{
		title: 'Glacier Protocol',
		link: 'https://glacierprotocol.org/',
		description: '[OLD] Cold storage protocol',
		devs: [
			{
				name: 'Glacier Protocol',
				link: 'https://twitter.com/glacierprotocol',
			},
		],
	},
	{
		title: 'Hodl Guides',
		link: 'https://github.com/DriftwoodPalace/guides',
		description: '[OLD] Multiple guides to cold storage.',
		devs: [
			{
				name: 'Driftwood Palace',
				link: 'https://twitter.com/DriftwoodPalace',
			},
		],
	},
	{
		title: "Rusty's Bitcoin Storage Guide",
		link: 'https://github.com/rustyrussell/bitcoin-storage-guide',
		description: '[OLD] Cold storage guide.',
		devs: [
			{
				name: 'Rusty Russell',
				link: 'https://mobile.twitter.com/rusty_twit/status/644559490646278144',
			},
		],
	},
	{
		title: 'Smart Custody',
		link: 'https://github.com/BlockchainCommons/SmartCustodyWhitePapers/blob/master/%23SmartCustody-_Simple_Self-Custody_Cold_Storage_Scenario.md',
		description: '[OLD] Best Practices for Cold Storage',
		devs: [
			{
				name: 'C. Allen',
				link: 'https://twitter.com/christophera',
			},
			{
				name: 'S. Appelcline',
				link: 'https://twitter.com/Appelcline',
			},
		],
	},
]

export const depreciatedWallets = [
	{
		title: 'ABCore',
		link: 'https://github.com/greenaddress/abcore',
		description: 'Bitcoin Core full node for Android',
		platform: 'Android',
	},
	{
		title: 'GreenAddress',
		link: 'https://github.com/greenaddress/WalletElectron/releases/tag/v0.1.04',
		description: 'Desktop companion to Blockstream Green mobile wallet',
		platform: 'Desktop',
	},
	{
		title: 'Hodl Wallet',
		link: 'https://hodlwallet.com/',
		description: 'Relatively new wallet with simple UI',
		platform: 'iOS & Android',
	},
	{
		title: 'Bitcoin Lightning Wallet (BLW)',
		link: 'https://lightning-wallet.com/posts/blw-is-deprecated/',
		description: 'A standalone SPV Bitcoin node with a fully functional built-in Lightning node',
		platform: 'Android',
	},
]
