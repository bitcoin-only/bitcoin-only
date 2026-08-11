<template>
	<div id="podcasts-page">
		<h1 class="page-title">Podcasts</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>
				First listen to '<a href="https://stephanlivera.com/episode/71/" target="_blank"
					>SLP71: Intro to Bitcoin Austrian Thought</a
				>' by Stephan Livera
			</p>
		</div>

		<p>The podcasts listed on this page cover Bitcoin only.</p>

		<h3>Bemba</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="bembaPodcastsRows" max-width="900px" />

		<h3>English</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="englishPodcastsRows" max-width="900px" />

		<h3>Dutch</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="dutchPodcastsRows" max-width="900px" />

		<h3>German</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="germanPodcastsRows" max-width="900px" />

		<h3>Persian</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="persianPodcastsRows" max-width="900px" />

		<h3>Portuguese</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="portuguesePodcastsRows" max-width="900px" />

		<h3>Spanish</h3>

		<TableData :headers="['Podcast', 'Description']" :rows="spanishPodcastsRows" max-width="900px" />
	</div>
</template>

<script>
import {
	englishPodcasts,
	dutchPodcasts,
	germanPodcasts,
	spanishPodcasts,
	persianPodcasts,
	portuguesePodcasts,
	bembaPodcasts,
} from '@/data/podcasts'

const rows = (pods) => pods.map((pod) => [{ text: pod.title, href: pod.link }, { html: pod.description }])

export default {
	name: 'PodcastsPage',

	setup() {
		usePageMeta({
			title: 'Podcasts - Bitcoin Only',
			description: 'A collection of Bitcoin only podcasts.',
			schema: schemaItemList('Bitcoin Podcasts', [
				...englishPodcasts,
				...dutchPodcasts,
				...germanPodcasts,
				...spanishPodcasts,
				...persianPodcasts,
				...portuguesePodcasts,
				...bembaPodcasts,
			]),
		})
	},

	data() {
		return {
			englishPodcastsRows: rows(englishPodcasts),
			dutchPodcastsRows: rows(dutchPodcasts),
			germanPodcastsRows: rows(germanPodcasts),
			spanishPodcastsRows: rows(spanishPodcasts),
			persianPodcastsRows: rows(persianPodcasts),
			portuguesePodcastsRows: rows(portuguesePodcasts),
			bembaPodcastsRows: rows(bembaPodcasts),
		}
	},
}
</script>
