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
					title: 'Bitcoin Day Sacramento',
					link: 'https://www.bitcoinday.io/sacramento22',
					location: 'Roseville, CA / USA',
					dates: '2022 / Feb / 19th'
				},
				{
					title: 'Advancing Bitcoin',
					link: 'https://www.advancingbitcoin.com/',
					location: 'London / UK',
					dates: '2022 / Mar / 3rd-4th'
				},
				{
					title: 'Unconfiscatable',
					link: 'https://unconfiscatable.com/',
					location: 'Las Vegas, NV / USA',
					dates: '2022 / Mar / 3rd-6th'
				},
				{
					title: 'Empower: Energizing Bitcoin',
					link: 'https://www.digitalwildcatters.com/empower-energizing-bitcoin/',
					location: 'Houston, TX / USA',
					dates: '2022 / Mar / 30th-31st'
				},
				{
					title: 'Bitcoin 2022',
					link: 'https://b.tc/conference',
					location: 'Miami, FL / USA',
					dates: '2022 / Apr / 6th-9th'
				},
				{
					title: 'Bit Block Boom!',
					link: 'https://bitblockboom.com/',
					location: 'Austin, TX / USA',
					dates: '2022 / Aug / 25th-28th'
				},
				
			],
			lookingBack: [
				{
					title: 'Adopting Bitcoin',
					link: 'https://adoptingbitcoin.org/',
					pastContent: '<a href="https://adoptingbitcoin.org/" target="_blank">2021</a>'
				},
				{
					title: 'Bear Arms N\' Bitcoin',
					link: 'https://gunsnbitcoin.com/',
					pastContent: '<a href="https://www.youtube.com/watch?v=ZRA9sEIQOOY&list=PLRws1CvWNKlu5MV872y7S_jEfNDBMX0NI"  target="_blank">2020</a>'
				},
				{
					title: 'Bit Block Boom!',
					link: 'https://bitblockboom.com/',
					pastContent: '<a href="https://www.youtube.com/watch?v=ch4IFBkNxsM" target="_blank">2021</a> | 2020: <a href="https://www.youtube.com/watch?v=Robc43rQoVQ" target="_blank">1</a> | <a href="https://www.youtube.com/watch?v=HLALE9X2JkA" target="_blank">2</a> | <a href="https://www.youtube.com/watch?v=bLKlsYYnoXM" target="_blank">3</a>'
				},
				{
					title: 'Bitcoin Only India',
					link: 'http://blr.bitcoinmeetup.info/',
					pastContent: '<a href="http://blr.bitcoinmeetup.info/" target="_blank">2020</a>'
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
					pastContent: '<a href="https://youtu.be/16T5CUNGX2Q" target="_blank">2019</a>'
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
