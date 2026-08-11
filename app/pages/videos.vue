<template>
	<div id="videos-page">
		<h1 class="page-title">Videos</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>Watch the following videos:</p>

			<ul>
				<li>
					<a href="https://www.youtube-nocookie.com/embed/Zbm772vF-5M" target="_blank">The Bitcoin Standard</a> -
					Saifedean Ammous on hard money
				</li>
				<li>
					<a href="https://www.youtube-nocookie.com/embed/q0XxsabgJEI" target="_blank">Why Bitcoin Matters</a> - Aleks
					Svetski on the future of money
				</li>
				<li>
					<a href="https://www.rt.com/shows/to-the-moon/457141-bitcoin-digital-currencies-revolution/" target="_blank"
						>Bitcoin Genesis</a
					>
					- Max Keiser on the origins of Bitcoin
				</li>
				<li>
					<a href="https://www.youtube-nocookie.com/embed/DRPeExoH5rY" target="_blank">Bitcoin Explained</a> - BJ Dweck
					on what Bitcoin is
				</li>
			</ul>
		</div>

		<p>Find more bitcoin videos at <a href="https://bitcointv.com/" target="_blank">BitcoinTV.com</a></p>

		<h3>Video Podcasts</h3>

		<TableData :headers="['Name', 'Description']" :rows="videoPodcastRows" />

		<h3>Tutorials</h3>

		<TableData :headers="['Name', 'Description']" :rows="tutorialRows" />

		<h3>Other Informative</h3>

		<TableData :headers="['Name', 'Description']" :rows="otherInfoRows" />

		<div class="footnote">* Skip 'The Difficulties in ...' & 'Bitcoin Engineering ...' (poor audio)</div>

		<h3>Companies</h3>

		<TableData :headers="['Project', 'Description']" :rows="companyRows" />
	</div>
</template>

<script>
import { videoPodcasts, tutorials, otherInfo, companies } from '@/data/videos'

const rows = (items) => items.map((item) => [{ text: item.title, href: item.link }, { html: item.description }])

export default {
	name: 'VideosPage',

	setup() {
		usePageMeta({
			title: 'Videos - Bitcoin Only',
			description: 'A collection of videos about Bitcoin.',
			schema: schemaItemList('Bitcoin Videos', [...videoPodcasts, ...tutorials, ...otherInfo, ...companies]),
		})
	},

	data() {
		return {
			videoPodcastRows: rows(videoPodcasts),
			tutorialRows: rows(tutorials),
			otherInfoRows: rows(otherInfo),
			companyRows: rows(companies),
		}
	},
}
</script>
