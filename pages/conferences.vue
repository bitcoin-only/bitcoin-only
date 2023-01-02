<template>
	<div id="conferences-page">

		<h1 class="page-title">Conferences</h1>

		<p>These conferences are Bitcoin only.</p>

		<h3>Upcoming</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conferences</div>
					<div class="tbl-title">Location</div>
					<div class="tbl-title">Dates</div>
				</div>
				<div v-for="(lineItem, index) in upcomingConferences" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.location"></div>
					<div v-html="lineItem.dates"></div>
				</div>
			</div>
		</div>

		<h3>Looking Back</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Conference</div>
					<div class="tbl-title">Past Content</div>
				</div>
				<div v-for="(lineItem, index) in lookingBack" :key="index" class="tbl-row">
					<div>
						<a :href="lineItem.link" target="_blank">{{ lineItem.title }}</a>
					</div>
					<div v-html="lineItem.pastContent"></div>
				</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss">
#conferences-page .tbl-row > div a {
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

	name: 'ConferencesPage',

	head: {
		title: 'Conferences - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'A collection of Bitcoin only conferences.' }
		]
	},

	data() {
		return {

			upcomingConferences: [
				{
					title: 'Advancing Bitcoin',
					link: 'https://www.advancingbitcoin.com/',
					location: 'London / UK',
					dates: '2023 / March / 2nd-3rd'
				},
				{
					title: 'Empower, Energizing Bitcoin',
					link: 'https://digitalwildcatters.com/empower-2023/',
					location: 'Houston, TX / USA',
					dates: '2023 / March / 7th-9th'
				},
				{
					title: 'Nigeria Bitcoin Conference',
					link: 'https://nigeriabitcoinconference.com/',
					location: 'Lagos, Nigeria',
					dates: '2023 / March / 24th-25th'
				},
				{
					title: 'BTC++',
					link: 'https://twitter.com/niftynei/status/1602499013286174722',
					location: 'Austin, USA',
					dates: '2023 / April / 28th-30th'
				},
				{
					title: 'Satoshis Bleibe',
					link: 'https://einundzwanzig.space/events/satoshis-bleibe-2022/',
					location: 'Bernkastel-Wehlen, DE',
					dates: '2023 / May / 12th-14th'
				},
				{
					title: 'Bitcoin 2023',
					link: 'https://b.tc/conference/',
					location: 'Miami Beach, USA',
					dates: '2023 / May / 18-20th'
				},
				{
					title: 'Braiins Mining Conference',
					link: 'https://braiins.com/bitcoin-mining-conference-2023',
					location: 'Prague, Czech Republic',
					dates: '2023 / June / 7th'
				},
				{
					title: 'BTC Prague',
					link: 'https://www.btcprague.com/',
					location: 'Prague, Czech Republic',
					dates: '2023 / June / 8th-10th'
				},
				{
					title: 'Bit Block Boom',
					link: 'https://bitblockboom.com/',
					location: 'Austin, Texas, USA',
					dates: '2023 / June / 24th-27th'
				},
			],
			lookingBack: [
				{
					title: 'Adopting Bitcoin',
					link: 'https://adoptingbitcoin.org/',
					pastContent: '<a href="https://adoptingbitcoin.org/" target="_blank">2021</a>'
				},
				{
					title: 'Bconf',
					link: 'https://bconf.de/',
					pastContent: '<a href="https://www.youtube.com/watch?v=-342g6OLYQA&list=PLWcOaHDdBoii_ymVGLNCD5X13lb6T1WL4"  target="_blank">2022</a>'
				},
				{
					title: 'Bear Arms N\' Bitcoin',
					link: 'https://gunsnbitcoin.com/',
					pastContent: '<a href="https://www.youtube.com/watch?v=ZRA9sEIQOOY&list=PLRws1CvWNKlu5MV872y7S_jEfNDBMX0NI"  target="_blank">2020</a>'
				},
				{
					title: 'Bit Block Boom!',
					link: 'https://bitblockboom.com/',
					pastContent: '<a href="https://www.youtube.com/watch?v=Hf74fd9HEuk&list=PLoLI_Hx40HR_o76jlGmSDnrrjztZayeh7" target="_blank">2022</a> | <a href="https://www.youtube.com/watch?v=ch4IFBkNxsM" target="_blank">2021</a> | 2020: <a href="https://www.youtube.com/watch?v=Robc43rQoVQ" target="_blank">1</a> | <a href="https://www.youtube.com/watch?v=HLALE9X2JkA" target="_blank">2</a> | <a href="https://www.youtube.com/watch?v=bLKlsYYnoXM" target="_blank">3</a>'
				},
				{
					title: 'Bitcoin 2022',
					link: 'https://b.tc/conference',
					pastContent: '<a href="https://www.youtube.com/playlist?list=PLe0djdakvnFZ2C7DMjQfiuqCtbxk0ZTsz/" target="_blank">2022</a>'
				},
				{
					title: 'Bitcoin Only India',
					link: 'http://blr.bitcoinmeetup.info/',
					pastContent: '<a href="http://blr.bitcoinmeetup.info/" target="_blank">2020</a>'
				},
				{
					title: 'Braiins Bitcoin Mining Conference',
					link: 'https://braiins.com/bitcoin-mining-conference-2022',
					pastContent: '<a href="unknown-requested" target="_blank">2022</a>'
				},
				{
					title: 'BTC++',
					link: 'https://www.btcplusplus.dev/',
					pastContent: '<a href="unknown-requested" target="_blank">2022</a>'
				},
				{
					title: 'The Lightning Conference',
					link: 'https://www.thelightningconference.com/',
					pastContent: '<a href="https://twitter.com/LNconf" target="_blank">2019</a>'
				},
				{
					title: 'Portland Bitcoin Conf',
					link: 'https://portlandbitcoinconference.com/',
					pastContent: '<a href="https://www.pscp.tv/Brucefitter/1RDGlvOvBozxL" target="_blank">2019</a>'
				},
				{
					title: 'Advancing Bitcoin',
					link: 'https://web.archive.org/web/20190206134928/https://www.advancingbitcoin.com/',
					pastContent: '<a href="https://vimeo.com/user94991385" target="_blank">2019</a>'
				},
				{
					title: 'Baltic Honeybadger',
					link: 'https://bh2019.hodlhodl.com/',
					pastContent: '2019: <a href="https://www.youtube.com/watch?v=2IpZWSWUIVE" target="_blank">Day 1</a> | <a href="https://www.youtube.com/watch?v=ns_I2LpeAbQ" target="_blank">Day 2</a> / <a href="https://bh2018.hodlhodl.com/" target="_blank">2018</a>'
				},
				{
					title: 'Bitcoin Is',
					link: 'https://www.bitcoinis.com/',
					pastContent: '<a href="https://www.pscp.tv/RussellOkung/1BdxYeamWpoxX?t=46m37s" target="_blank">2019</a>'
				},
				{
					title: 'Bolt-a-thon',
					link: 'https://boltathon.com/',
					pastContent: '<a href="https://www.youtube.com/watch?v=lVJXGBZUakA&list=PLC_AgDAr0m6QhwqPDrqMfjX64oHGmwDMk" target="_blank">2019</a>'
				},
				{
					title: 'Breaking Bitcoin',
					link: 'https://breaking-bitcoin.com/',
					pastContent: '2019: <a href="https://www.youtube.com/watch?v=DKOG0BQMmmg" target="_blank">Day 1</a> | <a href="https://youtu.be/DqhxPWsJFZE" target="_blank">Day 2</a>'
				},
				{
					title: 'Lightning Hack Day',
					link: 'https://lightninghackday.fulmo.org/',
					pastContent: '2019: <a href="https://www.youtube.com/watch?v=BcjKejXlLbM" target="_blank">Day 1</a> | <a href="https://www.youtube.com/watch?v=IIxCYrRiP78" target="_blank">Day 2</a>'
				},
				{
					title: 'Pacific Bitcoin Conference',
					link: 'https://paralelnapolis.sk/event/bitcoin-hackathon-paralelna-polis/',
					pastContent: '<a href="https://www.youtube.com/watch?v=h7YAWhvFY9Y&list=PLoB1eZWSVHVaCfQJ_Suq9gBw0fCyUKELP" target="_blank">2022</a>'
				},
				{
					title: 'Paralelna Polis',
					link: 'https://paralelnapolis.sk/event/bitcoin-hackathon-paralelna-polis/',
					pastContent: 'None Found'
				},
				{
					title: 'Scaling Bitcoin',
					link: 'https://telaviv2019.scalingbitcoin.org/',
					pastContent: '2019: <a href="https://telaviv2019.scalingbitcoin.org/live/-gdfxNalDIc" target="_blank">1</a> | <a href="https://telaviv2019.scalingbitcoin.org/live/YxsjdIl0034" target="_blank">2</a> | <a href="https://telaviv2019.scalingbitcoin.org/live/PM95oNcOAlU" target="_blank">3</a> | <a href="https://telaviv2019.scalingbitcoin.org/live/Uh6Ywxrobzw" target="_blank">4</a>'
				},
				{
					title: 'The Atlanta Bitcoin Conference',
					link: 'https://tabconf.com/',
					pastContent: '2021: <a href="https://www.youtube.com/watch?v=reKjNYQSZaQ" target="_blank">Day 1</a> | <a href="https://www.youtube.com/watch?v=mVihRFrbsbc" target="_blank">Day 2</a>',
				},
				{
					title: 'Unconfiscatable',
					link: 'https://tonevays.com/conference/unconfiscatable',
					pastContent: '<a href="https://youtu.be/16T5CUNGX2Q" target="_blank">2019</a> | 2022: <a href="https://youtu.be/8j_Rw-dHrDY" target="_blank">1</a> | <a href="https://youtu.be/Xe3cXSAa75U" target="_blank">2</a>',
				},
				{
					title: 'Understanding BTC',
					link: 'https://tonevays.com/conference/understandingbtc',
					pastContent: '2019: <a href="https://youtu.be/40mdFIAEh4E" target="_blank">Day 1</a> | <a href="https://youtu.be/l2iv2MiGaYI" target="_blank">Day 2</a>'
				},
				{
					title: 'Value of Bitcoin Conf',
					link: 'https://vob-conference.com/',
					pastContent: '<a href="https://www.youtube.com/playlist?list=PLAt38L_ceKIrCZSd8OUES5OzQMgCKIvfs" target="_blank">2019</a>'
				}
			]

		}
	}

}
</script>
