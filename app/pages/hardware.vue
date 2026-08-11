<template>
	<div id="hardware-page">
		<h1 class="page-title">Hardware</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<ul>
				<li>Blue Wallet users: Buy an <a href="https://umbrel.com/" target="_blank">Umbrel</a></li>
			</ul>
		</div>

		<h3>Node: Buy (Plug & Play)</h3>

		<TableData :headers="['Project', 'Description']" :rows="nodeBuyPlugPlayRows" />

		<h3>Node: DIY</h3>

		<TableData :headers="['Project', 'Description']" :rows="nodeDiyRows" />

		<h3>Other Hardware</h3>

		<TableData :headers="['Project', 'Description']" :rows="otherHardwareRows" />
	</div>
</template>

<script>
import { nodeBuyPlugPlay, nodeDiy, otherHardware } from '@/data/hardware'

const rows = (projects) =>
	projects.map((project) => [{ text: project.title, href: project.link }, { text: project.description }])

export default {
	name: 'HardwarePage',

	setup() {
		usePageMeta({
			title: 'Hardware - Bitcoin Only',
			description: 'A collection of Bitcoin hardware.',
			schema: schemaItemList('Bitcoin Hardware', [...nodeBuyPlugPlay, ...nodeDiy, ...otherHardware]),
		})
	},

	data() {
		return {
			nodeBuyPlugPlayRows: rows(nodeBuyPlugPlay),
			nodeDiyRows: rows(nodeDiy),
			otherHardwareRows: rows(otherHardware),
		}
	},
}
</script>
