<template>
	<div id="learning-resources-page">
		<h1 class="page-title">Learning Resources</h1>

		<h3>Articles</h3>

		<TableData :headers="['Title', 'Description']" :rows="articleRows" />

		<h3>Periodicals</h3>

		<TableData :headers="['Title', 'Description']" :rows="periodicalRows" />

		<h3>Classes</h3>

		<TableData :headers="['Title', 'Description']" :rows="classRows" />

		<h3>Websites</h3>

		<TableData :headers="['Title', 'Description']" :rows="websiteRows" />

		<h3>Advanced Reading</h3>

		<TableData :headers="['Title', 'Description']" :rows="advancedReadingRows" />

		<h3>Research</h3>

		<TableData :headers="['Title', 'Description']" :rows="researchRows" />
	</div>
</template>

<script>
import { articles, periodicals, classes, websites, advancedReading, research } from '@/data/learning-resources'

const rows = (items) => items.map((item) => [{ text: item.title, href: item.link }, { text: item.description }])

export default {
	name: 'LearningResourcesPage',

	setup() {
		usePageMeta({
			title: 'Learning Resources - Bitcoin Only',
			description: 'A collection of educational resources to learn more about Bitcoin.',
			schema: schemaItemList('Bitcoin Learning Resources', [
				...articles,
				...periodicals,
				...classes,
				...websites,
				...advancedReading,
				...research,
			]),
		})
	},

	data() {
		return {
			articleRows: rows(articles),
			periodicalRows: rows(periodicals),
			classRows: rows(classes),
			websiteRows: rows(websites),
			advancedReadingRows: rows(advancedReading),
			researchRows: rows(research),
		}
	},
}
</script>
