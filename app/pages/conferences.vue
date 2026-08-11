<template>
	<div id="conferences-page">
		<h1 class="page-title">Conferences</h1>

		<p>These conferences are Bitcoin only.</p>

		<h3>Upcoming</h3>

		<TableData :headers="['Conferences', 'Location', 'Dates']" :rows="upcomingRows" />

		<h3>Looking Back</h3>

		<TableData :headers="['Conference', 'Past Content']" :rows="lookingBackRows" />
	</div>
</template>

<script>
import { upcomingConferences, lookingBack } from '@/data/conferences'

export default {
	name: 'ConferencesPage',

	setup() {
		usePageMeta({
			title: 'Conferences - Bitcoin Only',
			description: 'A collection of Bitcoin only conferences.',
			schema: schemaItemList('Bitcoin Conferences', [...upcomingConferences, ...lookingBack]),
		})
	},

	data() {
		return {
			upcomingRows: upcomingConferences.map((conference) => [
				{ text: conference.title, href: conference.link },
				{ html: conference.location },
				{ html: conference.dates },
			]),
			lookingBackRows: lookingBack.map((conference) => [
				{ text: conference.title, href: conference.link },
				{ html: conference.pastContent },
			]),
		}
	},
}
</script>
