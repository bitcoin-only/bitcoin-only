<template>
	<div id="privacy-page">
		<h1 class="page-title">Privacy</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>Don't reuse addresses, learn to CoinJoin and use your own node.</p>
			<p>
				Read <a href="https://en.bitcoin.it/Privacy" target="_blank">the bitcoin wiki page</a> to learn how to use
				Bitcoin privately.
			</p>
		</div>

		<h3>CoinJoin Tools</h3>

		<TableData :headers="['Name', 'Description', 'Learn More']" :rows="coinjoinRows" />

		<h3>Communication Tools</h3>

		<TableData :headers="['Name', 'Description', 'Learn More']" :rows="communicationRows" />

		<h3>Other Information</h3>

		<TableData :headers="['Name', 'Author']" :rows="otherInfoRows" />
	</div>
</template>

<script>
import { coinjoinTools, communicationTools, otherInfo } from '@/data/privacy'

const toolRows = (tools, separator) =>
	tools.map((tool) => [
		{ text: tool.title, href: tool.link },
		{ html: tool.description },
		{
			links: tool.learnMore.map((link) => ({ text: link.name, href: link.link })),
			separator,
		},
	])

export default {
	name: 'PrivacyPage',

	setup() {
		usePageMeta({
			title: 'Privacy - Bitcoin Only',
			description: 'A collection of Bitcoin privacy tools.',
			schema: schemaItemList('Bitcoin Privacy Tools', [
				...coinjoinTools,
				...communicationTools,
				...otherInfo.map((item) => ({ title: item.title, link: item.link })),
			]),
		})
	},

	data() {
		return {
			coinjoinRows: toolRows(coinjoinTools, '<br />'),
			communicationRows: toolRows(communicationTools, ' | '),
			otherInfoRows: otherInfo.map((item) => [
				{ text: item.title, href: item.link },
				{ text: item.author, href: item.authorLink },
			]),
		}
	},
}
</script>
