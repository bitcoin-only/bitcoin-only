<template>
	<div class="tbl-scroller">
		<table class="tbl-wrapper" :style="{ maxWidth }">
			<thead>
				<tr class="tbl-header">
					<th v-for="(header, headerIndex) in headers" :key="headerIndex" class="tbl-title" scope="col">
						{{ header }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="tbl-row">
					<td v-for="(cell, cellIndex) in row" :key="cellIndex">
						<feature-icon
							v-if="typeof cell !== 'string' && cell.icon"
							:icon="cell.icon"
							:size="cell.size || 'is-medium'"
						></feature-icon>
						<span v-else-if="typeof cell !== 'string' && cell.html" v-html="cell.html"></span>
						<template v-else-if="typeof cell !== 'string' && cell.links">
							<template v-for="(link, linkIndex) in cell.links" :key="linkIndex">
								<a v-if="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
								<span v-else>{{ link.text }}</span>
								<span v-if="linkIndex + 1 < cell.links.length" v-html="cell.separator || ', '"></span>
							</template>
						</template>
						<a
							v-else-if="typeof cell !== 'string' && cell.href"
							:href="cell.href"
							target="_blank"
							rel="noopener noreferrer"
							>{{ cell.text }}</a
						>
						<span v-else>{{ typeof cell === 'string' ? cell : cell.text }}</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'TableData',

	props: {
		headers: {
			type: Array,
			required: true,
		},
		rows: {
			type: Array,
			required: true,
		},
		maxWidth: {
			type: String,
			default: '800px',
		},
	},
}
</script>
