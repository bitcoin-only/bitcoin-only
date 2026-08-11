<template>
	<div id="dev-tools-page">
		<h1 class="page-title">Dev Tools</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>
				Read 'Programming Bitcoin' by Jimmy Song (<a
					href="https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496"
					target="_blank"
					>Hardcopy</a
				>
				| <a href="https://github.com/jimmysong/programmingbitcoin" target="_blank">GitHub</a>).
			</p>
		</div>

		<h3>Backend Tools</h3>

		<TableData :headers="['Project', 'Description']" :rows="backendToolsRows" />

		<h3>Learning Resources</h3>

		<TableData :headers="['Project', 'Description']" :rows="learningResourcesRows" />

		<h3>Services</h3>

		<TableData :headers="['Project', 'Description']" :rows="servicesRows" />
	</div>
</template>

<script>
import { backendTools, learningResources, services } from '@/data/dev-tools'

const toolRows = (tools) => tools.map((tool) => [{ text: tool.title, href: tool.link }, { html: tool.description }])

export default {
	name: 'DevToolsPage',

	setup() {
		usePageMeta({
			title: 'Dev Tools - Bitcoin Only',
			description: 'A collection Bitcoin developer tools.',
			schema: schemaItemList('Bitcoin Developer Tools', [...backendTools, ...learningResources, ...services]),
		})
	},

	data() {
		return {
			backendToolsRows: toolRows(backendTools),
			learningResourcesRows: toolRows(learningResources),
			servicesRows: toolRows(services),
		}
	},
}
</script>
