<template>
	<div id="meetups-page">

		<h1 class="page-title">Meetups</h1>
		
		<div class="getting-started-section">

					<h3>Getting Started</h3>

					<p> It is impossible to verify the authenticity of all meetups, please: </p>
					<ul>
						<li>Go with a friend for security</li>
						<li>Do your own research before attending</li>
						<li>Do not reveal personal information</li>
						<li>Do not tell anyone how much bitcoin you own</li>
						<li>Do <a href="https://github.com/bitcoin-only/bitcoin-only/issues/new?assignees=&labels=update&template=update-suggestion.md&title=Update+Suggestion%3A+NAME+OF+CONTENT+TO+BE+UPDATED" target="_blank">raise an issue</a> if you have a bad experience</li>
					</ul>

					<p> To get your meetup added <a href="https://github.com/bitcoin-only/bitcoin-only/issues/new?assignees=&labels=meetup&template=meetup-suggestion.md&title=Meetup+Suggestion%3A+%2A%2AExample+Bitcoin+Meetup%2A%2A" target="_blank">raise an issue</a>.</p>
		</div>
		
		<h3>Cyberspace</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Meetup</div>
					<div class="tbl-title">Description</div>
				</div>
				<div v-for="(meetup, index) in cyberspace" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="meetup.link" target="_blank">{{ meetup.title }}</a>
					</div>
					<div>{{ meetup.description }}</div>
				</div>
			</div>
		</div>

		<div class="footnote">* Weekly, accessible without a VR headset</div>

		<h3>Meatspace</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Country</div>
					<div class="tbl-title">Region</div>
					<div class="tbl-title">City</div>
					<div class="tbl-title">Organizer</div>
				</div>
				<div v-for="(meetup, index) in meatspace" :key="index" class="tbl-row">
					<div>{{ meetup.country }}</div>
					<div>{{ meetup.region }}</div>
					<div>
						<a :href="meetup.link" target="_blank">{{ meetup.city }}</a>
					</div>
					<div>
						<a :href="meetup.organizerLink" target="_blank">{{ meetup.organizer }}</a>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 25px;
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

	name: 'MeetupsPage',

	head: {
		title: 'Meetups - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only meetups.' }
		]
	},

	data() {
		return {

			cyberspace: [
				{
					title: 'Bitcoin Enemies',
					link: 'https://bitcoinenemies.com/',
					description: '24/7 voice chat'
				},
				{
					title: 'Reckless VR',
					link: 'https://www.recklessvr.com/',
					description: 'VR meetup *'
				},
				{
					title: 'Bitcoin Only VR Downunder',
					link: 'https://t.me/bitcoinvr_aus',
					description: 'VR meetup *'
				},
				{
					title: 'Sovereign Club',
					link: 'https://matrix.to/#/#SovereignClub:matrix.org',
					description: '24/7 voice chat'
				},
			],

			meatspace: [
				{
					country: 'Austria',
					city: 'Vienna',
					link: 'https://t.me/BitcoinOnlyVienna',
					organizer: '@SvenSchnieders',
					organizerLink: 'https://twitter.com/SvenSchnieders/status/1192512100452700161'
				},
				{
					country: 'Austria',
					city: 'Vienna',
					link: 'https://t.me/TotalBitcoinMeetup',
					organizer: '@keyvandavani',
					organizerLink: 'https://twitter.com/keyvandavani/status/1132741100127563777'
				},
				{
					country: 'Australia',
					city: 'Adelaide',
					link: 'https://bitcoinadelaide.net/',
					organizer: '@danWilcz',
					organizerLink: 'https://twitter.com/danWilcz/'
				},
				{
					country: 'Australia',
					city: 'Brisbane',
					link: 'http://meetu.ps/c/3xLDF/53GSl/a',
					organizer: '@AleksSvetski',
					organizerLink: 'https://twitter.com/AleksSvetski/status/1132068910986014720'
				},
				{
					country: 'Australia',
					city: 'Melbourne',
					link: 'https://www.meetup.com/Melbourne-Bitcoin-Only/',
					organizer: '@BitcoinMEL',
					organizerLink: 'https://twitter.com/BitcoinMEL'
				},
				{
					country: 'Australia',
					city: 'Perth',
					link: 'https://t.me/bitcoin_perth',
					organizer: '@_Bosch_',
					organizerLink: 'https://twitter.com/_Bosch_/status/1362077347541704713'
				},
				{
					country: 'Australia',
					city: 'Sydney',
					link: 'https://www.meetup.com/Bitcoin_Sydney/',
					organizer: '@stephanlivera',
					organizerLink: 'https://twitter.com/stephanlivera/status/1160849438069231617'
				},
				{
					country: 'Brazil',
					city: 'São Paulo',
					link: 'https://www.meetup.com/Bitcoin-Assembly/',
					organizer: '@BitcoinAssembly',
					organizerLink: 'https://twitter.com/ldecferreira/status/1231639710151380993'
				},
				{
					country: 'Canada',
					city: 'Calgary',
					link: 'https://www.meetup.com/yycbitcoin/',
					organizer: '@yycbitcoin',
					organizerLink: 'https://twitter.com/yycbitcoin/status/1171544885519761408'
				},
				{
					country: 'Canada',
					city: 'Halifax',
					link: 'http://www.meetup.com/Halifax-Bitcoin-Meetup',
					organizer: '@billy_btc',
					organizerLink: 'https://twitter.com/billy_btc/status/1131945337051078656'
				},
				{
					country: 'Canada',
					city: 'Montreal',
					link: 'https://www.meetup.com/Bitcoin-Montreal/',
					organizer: '@CepnikMaciej',
					organizerLink: 'https://twitter.com/CepnikMaciej/status/1131983702718918658'
				},
				{
					country: 'Canada',
					city: 'Toronto',
					link: 'https://t.me/BFETM',
					organizer: '@nvk',
					organizerLink: 'https://twitter.com/nvk/status/1184122467767504897'
				},
				{
					country: 'Colombia',
					city: 'Villamaría',
					link: 'https://toowheels.bike/?page_id=45',
					organizer: '@Ricardo90850004',
					organizerLink: 'https://twitter.com/Ricardo90850004/status/1185948854564331521'
				},
				{
					country: 'Denmark',
					city: 'Copenhagen',
					link: 'https://meetup.com/Bitcoin-Copenhagen',
					organizer: '@FKrauss',
					organizerLink: 'https://twitter.com/FKrauss/status/1155066307433381888'
				},
				{
					country: 'France',
					city: 'Paris',
					link: 'https://www.meetup.com/Bitcoin-pair-a-pair/',
					organizer: '@Bob_le_chinois',
					organizerLink: 'https://twitter.com/Bob_le_chinois/status/1131931954776039424'
				},
				{
					country: 'Germany',
					city: 'Berlin',
					link: 'https://www.meetup.com/Bitcoin-Lab-Berlin/',
					organizer: '@FulmoLightning',
					organizerLink: 'https://twitter.com/fulmolightning/status/1192493355739025408'
				},
				{
					country: 'Holland',
					city: 'Amsterdam',
					link: 'https://www.meetup.com/nl-NL/Bitcoin-Only-Amsterdam/',
					organizer: '@OnHodliday',
					organizerLink: 'https://twitter.com/OnHodliday/status/1132220583134019584?s=20'
				},
				{
					country: 'Italy',
					city: 'Milan',
					link: 'https://t.me/satoshispritzmilano',
					organizer: '@LarryBitcoin',
					organizerLink: 'https://twitter.com/LarryBitcoin/status/1131931937160028161'
				},
				{
					country: 'Italy',
					city: 'Reggio Emilia',
					link: 'https://www.meetup.com/BitcoinReggioEmilia/',
					organizer: '@tierotiero',
					organizerLink: 'https://twitter.com/tierotiero/status/1176778406568058882?s=19'
				},
				{
					country: 'Japan',
					city: 'Tokyo',
					link: 'https://www.meetup.com/Tokyo-Bitcoin-Hackers/',
					organizer: '@Wiz',
					organizerLink: 'https://twitter.com/wiz/status/1131941056595894277'
				},
				{
					country: 'Malta',
					city: 'Sliema',
					link: 'https://www.meetup.com/Bitcoin-Meetup-Malta/',
					organizer: '@hyperfreeorg',
					organizerLink: 'https://twitter.com/hyperfreeorg/status/1166291021086547969'
				},
				{
					country: 'Mexico',
					city: 'Guadalajara',
					link: 'https://t.me/BitcoinGuadalajara',
					organizer: '@KatieAnanina',
					organizerLink: 'https://twitter.com/KatieAnanina/status/1194495703944499206?s=20'
				},
				{
					country: 'Mexico',
					city: 'Mexico City',
					link: 'https://www.meetup.com/es/Bitcoin-Only-Meetup/events/265658139/',
					organizer: '@lablegal101',
					organizerLink: 'https://twitter.com/lablegal101/status/1183079632024883200'
				},
				{
					country: 'Norway',
					city: 'Oslo',
					link: 'https://www.meetup.com/Oslo-Bitcoin-First-Meetup-Group/',
					organizer: '@sikanderlhote',
					organizerLink: 'https://twitter.com/sikanderlhote/status/1136691796686364675'
				},
				{
					country: 'Netherlands',
					city: 'Amsterdam',
					link: 'https://www.meetup.com/De-Bitcoin-Meetup/',
					organizer: '@JWBurgers',
					organizerLink: 'https://twitter.com/JWBurgers/status/1220690957437456384?s=20'
				},
				{
					country: 'Pakistan',
					city: 'Lahore',
					link: 'https://www.meetup.com/bitcoin-pakistan/',
					organizer: '@FarooqAhmedX',
					organizerLink: 'https://twitter.com/FarooqAhmedX/status/1163958714807783424'
				},
				{
					country: 'Portugal',
					city: 'Lagos',
					link: 'https://www.meetup.com/meetup-group-BwbJQcQn/',
					organizer: '@OnHodliday',
					organizerLink: 'https://twitter.com/OnHodliday/status/1132220583134019584?s=20'
				},
				{
					country: 'Singapore',
					city: 'Singapore',
					link: 'https://www.meetup.com/Bitcoin-Maximalists-Singapore/',
					organizer: '@jamielimjj',
					organizerLink: 'https://twitter.com/jamielimjj/status/1131919235809026048?s=21'
				},
				{
					country: 'South Korea',
					city: 'Seoul',
					link: 'https://www.meetup.com/seoulbitcoin/',
					organizer: '@SeoulBitcoin',
					organizerLink: 'https://twitter.com/SeoulBitcoin/status/1132247446757597184'
				},
				{
					country: 'Sweden',
					city: 'Gothenburg',
					link: 'https://www.meetup.com/Bitcoin-gbg/',
					organizer: '@LindenJohan',
					organizerLink: 'https://twitter.com/LindenJohan/status/1156661412711862279'
				},
				{
					country: 'Switzerland',
					city: 'Bern',
					link: 'https://www.meetup.com/bitcoin-bern/',
					organizer: '@gugol',
					organizerLink: 'https://twitter.com/gugol/status/1161383094986973185'
				},
				{
					country: 'Taiwan',
					city: 'Taipei',
					link: 'https://www.meetup.com/Taiwan-Bitcoin-Only-Meetup/',
					organizer: '@BTCwisdom4bp',
					organizerLink: 'https://twitter.com/BTCwisdom4bp/status/1322065039658950656'
				},
				{
					country: 'Thailand',
					city: 'Bangkok',
					link: 'https://t.me/joinchat/ElZjzBVd6Jc72jiqCIm59A',
					organizer: '@PorterhouseMD',
					organizerLink: 'https://twitter.com/PorterhouseMD/status/1165194246334365696'
				},
				{
					country: 'Thailand',
					city: 'Chiang Mai',
					link: 'https://matrix.to/#/#cnx-kpg-hard-money-fan-club:matrix.org',
					organizer: '@nolim1t',
					organizerLink: 'https://twitter.com/nolim1t/status/1324629315972001793'
				},
				{
					country: 'United Arab Emirates',
					city: 'Dubai',
					link: 'https://www.meetup.com/Bitcoin-Dubai/',
					organizer: '@FarooqAhmedX',
					organizerLink: 'https://twitter.com/FarooqAhmedX/status/1339937329729957889'
				},
				{
					country: 'United Kingdom',
					city: 'London',
					link: 'https://www.meetup.com/BitFriendly/',
					organizer: '@raw_avocado',
					organizerLink: 'https://twitter.com/raw_avocado/status/1247875220305739777'
				},
				{
					country: 'United Kingdom',
					city: 'Sheffield',
					link: 'http://bitcoinsheffield.co.uk/',
					organizer: '@in3rsha',
					organizerLink: 'https://github.com/in3rsha'
				},  
				{
					country: 'USA',
					city: 'Phoenix',
					region: 'Arizona',
					link: 'https://www.meetup.com/azbitcoin/',
					organizer: '@sthenc',
					organizerLink: 'https://twitter.com/sthenc/status/1355291173133320194'
				},
				{
					country: 'USA',
					city: 'Little Rock',
					region: 'Arkansas',
					link: 'https://www.meetup.com/Bitcoin-Little-Block/',
					organizer: '@_joerodgers',
					organizerLink: 'https://twitter.com/_joerodgers/status/1220186941368557575'
				},
				{
					country: 'USA',
					city: 'Anaheim',
					region: 'California',
					link: 'https://www.meetup.com/oc-btc/',
					organizer: '@ocbtcn',
					organizerLink: 'https://twitter.com/ocbtcn'
				},
				{
					country: 'USA',
					city: 'Los Angeles',
					region: 'California',
					link: 'https://www.meetup.com/BitDevsLA/',
					organizer: '@BitDevsLA',
					organizerLink: 'https://twitter.com/BitDevsLA/status/1171919340020518912?s=19'
				},
				{
					country: 'USA',
					city: 'Redding',
					region: 'California',
					link: 'https://www.meetup.com/Redding-Bitcoin-Meetup/',
					organizer: '@dooowta',
					organizerLink: 'https://twitter.com/dooowta'
				},
				{
					country: 'USA',
					city: 'San Diego',
					region: 'California',
					link: 'https://sdbitcoiners.com',
					organizer: '@sdbitcoiners',
					organizerLink: 'https://twitter.com/sdbitcoiners/status/1402331053549711360'
				},
				{
					country: 'USA',
					city: 'San Francisco Bay Area',
					region: 'California',
					link: 'https://www.meetup.com/bay-bitcoin-meetup/',
					organizer: '@thomasbtc',
					organizerLink: 'https://twitter.com/thomasbtc/status/1414659662377459735?s=20'
				},
				{
					country: 'USA',
					city: 'Denver',
					region: 'Colorado',
					link: 'https://www.meetup.com/Bitcoin-and-Beer/',
					organizer: '@beerbitcoin',
					organizerLink: 'https://twitter.com/BeerBitcoin'
				},
				{
					country: 'USA',
					city: 'Miami',
					region: 'Florida',
					link: 'https://www.meetup.com/miamibitcoiners/',
					organizer: '@jonchenot',
					organizerLink: 'https://twitter.com/jonchenot/status/1388988111338807297'
				},
				{
					country: 'USA',
					city: 'St. Augustine',
					region: 'Florida',
					link: 'https://oldcity-bitcoiners.info/introducing-oldcity-bitcoiners/',
					organizer: '@OldCityBitcoin',
					organizerLink: 'https://twitter.com/OldCityBitcoin/status/1374379639632629768'
				},
				{
					country: 'USA',
					city: 'Boise',
					region: 'Idaho',
					link: 'https://www.meetup.com/boise-bitcoiners/',
					organizer: '@boisebitcoiners',
					organizerLink: 'https://twitter.com/boisebitcoiners'
				},
				{
					country: 'USA',
					city: 'Lincoln Land',
					region: 'Illinois',
					link: 'https://t.me/LincolnlandBTCMeetup/',
					organizer: '@BTCLincolnLand',
					organizerLink: 'https://twitter.com/BTCLincolnLand'
				},
				{
					country: 'USA',
					city: 'Annapolis',
					region: 'Maryland',
					link: 'https://www.meetup.com/annapolis-bitcoin-happy-hour/',
					organizer: '@Robbobrobert_',
					organizerLink: 'https://twitter.com/Robbobrobert_/status/1447201529178558465'
				},
				{
					country: 'USA',
					city: 'Benton Harbor / St. Joseph',
					region: 'Michigan',
					link: 'https://www.meetup.com/michigan-bitcoin-meetup/',
					organizer: '@dvhaley',
					organizerLink: 'https://twitter.com/dvhaley/status/1453717187219398660'
				},
				{
					country: 'USA',
					city: 'Detroit',
					region: 'Michigan',
					link: 'detbtc.com',
					organizer: '@detbtc',
					organizerLink: 'https://twitter.com/detbtc'
				},
				{
					country: 'USA',
					city: 'Minneapolis',
					region: 'Minnesota',
					link: 'https://t.me/joinchat/SWd5ZeVCAhGpZIjh',
					organizer: '@Bquittem',
					organizerLink: 'https://twitter.com/Bquittem/status/1415441814933344266'
				},
				{
					country: 'USA',
					city: 'Kansas City',
					region: 'Missouri',
					link: 'https://www.meetup.com/kansas-city-bitcoin-meetup-group/',
					organizer: '@WittyUsername30',
					organizerLink: 'https://twitter.com/WittyUsername30/status/1442907393684168704'
				},
				{
					country: 'USA',
					city: 'NYC',
					region: 'New York',
					link: 'https://www.meetu.ps/c/3Js7d/t1fRT/d',
					organizer: '@TiKawamoto',
					organizerLink: 'https://twitter.com/TiKawamoto/status/1131919021589389312'
				},
				{
					country: 'USA',
					city: 'Charlotte',
					region: 'North Carolina',
					link: 'http://www.meetup.com/BitcoinCharlotte',
					organizer: '@jacobparrish',
					organizerLink: 'https://twitter.com/jacobparrish'
				},
				{
					country: 'USA',
					city: 'Holly Springs',
					region: 'North Carolina',
					link: 'https://www.meetup.com/holly-springs-bitcoin-meetup-group/',
					organizer: '@Dave_Parrish',
					organizerLink: 'https://twitter.com/Dave_Parrish/status/1354810724325810185'
				},
				{
					country: 'USA',
					city: 'Raleigh',
					region: 'North Carolina',
					link: 'https://meetu.ps/c/11CJj/5jYS/d',
					organizer: '@Steve_Jeffress',
					organizerLink: 'https://twitter.com/Steve_Jeffress/status/1354864725675433988'
				},
				{
					country: 'USA',
					city: 'Cincinnati',
					region: 'Ohio',
					link: 'https://t.me/joinchat/Yt-J5-c7QRJiOGEx',
					organizer: '@bitcoinincincy',
					organizerLink: 'https://twitter.com/bitcoinincincy'
				},
				{
					country: 'USA',
					city: 'Cleveland',
					region: 'Ohio',
					link: 'https://t.me/joinchat/GjJEXveMBtpiMzU5',
					organizer: '@BitcoinCLE',
					organizerLink: 'https://twitter.com/BitcoinCLE'
				},
				{
					country: 'USA',
					city: 'Columbus',
					region: 'Ohio',
					link: 'https://t.me/ColumbusBitcoin',
					organizer: '@ColumbusBitcoin',
					organizerLink: 'https://twitter.com/ColumbusBitcoin'
				},
				{
					country: 'USA',
					city: 'Toledo',
					region: 'Ohio',
					link: 'https://toledobitcoin.wordpress.com/',
					organizer: '@MaxwellSikorski',
					organizerLink: 'https://twitter.com/MaxwellSikorski/status/1232133160353370112'
				},
				{
					country: 'USA',
					city: 'Portland',
					region: 'Oregon',
					link: 'https://www.meetup.com/Portland-Bitcoin-Group/',
					organizer: '@Jestopher_BTC',
					organizerLink: 'https://twitter.com/Jestopher_BTC/status/1180280435894620160'
				},
				{
					country: 'USA',
					city: 'Philadelphia',
					region: 'Pennsylvania',
					link: 'https://www.meetup.com/philadelphia-bitcoin-club/events/',
					organizer: '@OffZeroPodcast',
					organizerLink: 'https://twitter.com/OffZeroPodcast/status/1454263924514242563'
				},
				{
					country: 'USA',
					city: 'Chattanooga',
					region: 'Tennessee',
					link: 'https://discord.gg/DwpkFRqcEu',
					organizer: '@geekigai',
					organizerLink: 'https://twitter.com/geekigai/status/1441205765662863367'
				},
				{
					country: 'USA',
					city: 'Nashville',
					region: 'Tennessee',
					link: 'https://www.meetup.com/nashville-bitcoin/',
					organizer: '@nashbitcoiners',
					organizerLink: 'https://twitter.com/bitkite/status/1427327701413728264'
				},
				{
					country: 'USA',
					city: 'Austin',
					region: 'Texas',
					link: 'https://www.meetup.com/Austin-Bitcoin-Developers/',
					organizer: '@_justinmoon_',
					organizerLink: 'https://twitter.com/_justinmoon_'
				},
				{
					country: 'USA',
					city: 'Austin',
					region: 'Texas',
					link: 'https://austinbitcoinclub.com',
					organizer: '@AustinBTCclub',
					organizerLink: 'https://twitter.com/AustinBTCclub'
				},
				{
					country: 'USA',
					city: 'Dallas–Fort Worth',
					region: 'Texas',
					link: 'https://twitter.com/DTXbitcoiners',
					organizer: '@DTXbitcoiners',
					organizerLink: 'https://twitter.com/DTXbitcoiners'
				},
				{
					country: 'USA',
					city: 'Houston',
					region: 'Texas',
					link: 'https://www.meetup.com/houston-bitcoin-meetup-group/',
					organizer: '@lacrosse_al',
					organizerLink: 'https://twitter.com/lacrosse_al/status/1372764115807080457'
				},
				{
					country: 'USA',
					city: 'Georgetown',
					region: 'Washington',
					link: 'https://www.eventbrite.com/e/georgetown-bitcoin-meetup-tickets-84828150281',
					organizer: '@gtown_bitcoin',
					organizerLink: 'https://twitter.com/gtown_bitcoin'
				},
				{
					country: 'USA',
					city: 'Seattle',
					region: 'Washington',
					link: 'http://meetu.ps/c/jmyy/1v9Z5/a',
					organizer: '@bitcoin_meetup',
					organizerLink: 'https://twitter.com/bitcoin_meetup/status/1131925963598585856'
				},
				{
					country: 'Venezuela',
					city: 'Caracas',
					link: 'https://www.meetup.com/Satoshi-en-Venezuela/',
					organizer: '@criptobastardo',
					organizerLink: 'https://twitter.com/criptobastardo/status/1175853189461139456'
				},
				{
					country: 'Vietnam',
					city: 'Saigon',
					link: 'https://bitcoinsaigon.org/',
					organizer: '@BitcoinSaigon',
					organizerLink: 'https://twitter.com/BitcoinSaigon'
				}
			]

		}
	}

}
</script>
