<template>
	<div id="meetups-page">

		<h1 class="page-title">Meetups</h1>

		<!-- TODO: Modificare questa sezione -->
		<!-- <div class="getting-started-section">
			
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
		</div> -->

		<h3>Cyberspazio</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Meetup</div>
					<div class="tbl-title">Descrizione</div>
				</div>
				<div v-for="(meetup, index) in cyberspace" :key="index" class="tbl-row">
					<div class="item-title">
						<a :href="meetup.link" target="_blank">{{ meetup.title }}</a>
					</div>
					<div>{{ meetup.description }}</div>
				</div>
			</div>
		</div>

		<h3>Satoshi Spritz</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Regione</div>
					<div class="tbl-title">Città</div>
					<div class="tbl-title">Gruppo</div>
				</div>
				<div v-for="(meetup, index) in satoshispritz" :key="index" class="tbl-row">
					<div>{{ meetup.region }}</div>
					<div>{{ meetup.city }}</div>
					<div>
						<a :href="meetup.group" target="_blank">{{ meetup.group }}</a>
					</div>
				</div>
			</div>
		</div>

	<h3>Meetup</h3>

		<div class="tbl-scroller">
			<div class="tbl-wrapper">
				<div class="tbl-header">
					<div class="tbl-title">Regione</div>
					<div class="tbl-title">Città</div>
					<div class="tbl-title">Gruppo</div>
				</div>
				<div v-for="(meetup, index) in meetups" :key="index" class="tbl-row">
					<div>{{ meetup.region }}</div>
					<div>{{ meetup.city }}</div>
					<div>
						<a :href="meetup.group" target="_blank">{{ meetup.group }}</a>
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
					title: 'Bitcoin In The Club',
					link: 'https://twitter.com/btcintheclub',
					description: 'Twitter Spaces, dal lunedì al venerdì alle 14.15'
				},
			],

			satoshispritz: [
				{
					region: 'Lombardia',
					city: 'Milano',
					group: 'https://t.me/satoshispritzmilano',
				},
				{
					region: 'Piemonte',
					city: 'Torino',
					group: 'https://t.me/satoshispritztorino',
				},
				{
					region: 'Lombardia',
					city: 'Milano',
					group: 'https://t.me/satoshispritzmilano',
				},
				{
					region: 'Veneto',
					city: '',
					group: 'https://t.me/satoshispritzveneto',
				},
				
				
			],
		meetups: [
				{
					region: 'Lombardia',
					city: 'Milano',
					group: 'https://www.meetup.com/bitcoinmilano/',
				},
				{
					region: 'Emilia Romagna',
					city: 'Reggio Emilia',
					group: 'https://www.meetup.com/it-IT/BitcoinReggioEmilia',
				},
				{
					region: 'Emilia Romagna',
					city: 'Bologna',
					group: 'https://www.meetup.com/it-IT/Bitcoin-Bologna/',
				},
				{
					region: 'Piemonte',
					city: 'Torino',
					group: 'https://www.meetup.com/it-IT/Meetup-Bitcoin-Torino/',
				},
				{
					region: 'Veneto',
					city: 'Venezia',
					group: 'https://www.meetup.com/it-IT/Bitcoin-Venezia/',
				},
				{
					region: 'Veneto',
					city: 'Verona',
					group: 'https://www.meetup.com/it-IT/Bitcoin-Verona/',
				},
				
			]


	    // - Pisa 
        //     - https://www.meetup.com/Pisa-Bitcoin-Meetup/
        // - Roma
        //     - Satoshi Spritz romano: https://t.me/satoshispritzroma
        
        

		}
	}

}
</script>
