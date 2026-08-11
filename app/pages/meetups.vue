<template>
	<div id="meetups-page">
		<h1 class="page-title">Meetups</h1>

		<div class="getting-started-section">
			<h3>Getting Started</h3>

			<p>It is impossible to verify the authenticity of all meetups, please:</p>
			<ul>
				<li>Go with a friend for security</li>
				<li>Do your own research before attending</li>
				<li>Do not reveal personal information</li>
				<li>Do not tell anyone how much bitcoin you own</li>
				<li>
					Do
					<a
						href="https://github.com/bitcoin-only/bitcoin-only/issues/new?assignees=&labels=update&template=update-suggestion.md&title=Update+Suggestion%3A+NAME+OF+CONTENT+TO+BE+UPDATED"
						target="_blank"
						>raise an issue</a
					>
					if you have a bad experience
				</li>
			</ul>

			<p>
				To get your meetup added
				<a
					href="https://github.com/bitcoin-only/bitcoin-only/issues/new?assignees=&labels=meetup&template=meetup-suggestion.md&title=Meetup+Suggestion%3A+%2A%2AExample+Bitcoin+Meetup%2A%2A"
					target="_blank"
					>raise an issue</a
				>.
			</p>
		</div>

		<h3>Cyberspace</h3>

		<TableData :headers="['Meetup', 'Description']" :rows="cyberspaceRows" />

		<div class="footnote">* Weekly, accessible without a VR headset</div>

		<h3>Meatspace</h3>

		<p class="explainer">Find a meetup near you:</p>

		<div class="meetup-filters">
			<label class="filter-field">
				<span>Country</span>
				<select v-model="selectedCountry" aria-label="Filter by country">
					<option value="All">All countries</option>
					<option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
				</select>
			</label>
			<label class="filter-field">
				<span>Search</span>
				<input v-model="query" type="search" placeholder="City, region or organizer" aria-label="Search meetups" />
			</label>
		</div>

		<p v-if="!filteredMeatspace.length" class="no-results">No meetups found. Try a different filter.</p>

		<TableData v-else :headers="['Country', 'Region', 'City', 'Organizer']" :rows="meatspaceRows" />
	</div>
</template>

<style lang="scss" scoped>
h3 {
	margin-top: 25px;
}
.meetup-filters {
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	margin-bottom: 25px;
	max-width: 800px;
}
.filter-field {
	display: flex;
	flex-direction: column;
	gap: 5px;

	span {
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		font-weight: 500;
		color: var(--color-muted);
	}
}
.filter-field select,
.filter-field input {
	background: var(--color-sidebar);
	border: 1px solid var(--color-panel-border);
	border-radius: 5px;
	color: var(--color-text);
	font-size: 15px;
	padding: 8px 10px;
	min-width: 220px;

	&:focus-visible {
		outline: 2px solid var(--color-accent);
		outline-offset: 2px;
	}
}
.no-results {
	color: var(--color-muted);
	font-style: italic;
}
</style>

<script>
import { cyberspace, meatspace } from '@/data/meetups'

export default {
	name: 'MeetupsPage',

	setup() {
		usePageMeta({
			title: 'Meetups - Bitcoin Only',
			description: 'A collection of Bitcoin only meetups.',
			schema: schemaItemList('Bitcoin Meetups', [...cyberspace, ...meatspace]),
		})
	},

	data() {
		return {
			cyberspaceRows: cyberspace.map((meetup) => [{ text: meetup.title, href: meetup.link }, meetup.description]),
			meatspace,
			selectedCountry: 'All',
			query: '',
		}
	},

	computed: {
		countries() {
			return [...new Set(this.meatspace.map((meetup) => meetup.country))].sort()
		},
		filteredMeatspace() {
			const query = this.query.trim().toLowerCase()
			const filtered = this.meatspace.filter((meetup) => {
				if (this.selectedCountry !== 'All' && meetup.country !== this.selectedCountry) {
					return false
				}
				if (!query) {
					return true
				}
				return [meetup.country, meetup.region, meetup.city, meetup.organizer]
					.filter(Boolean)
					.some((field) => field.toLowerCase().includes(query))
			})
			return filtered.sort((a, b) => {
				for (const key of ['country', 'region', 'city', 'organizer']) {
					const cmp = (a[key] || '').localeCompare(b[key] || '')
					if (cmp !== 0) {
						return cmp
					}
				}
				return 0
			})
		},
		meatspaceRows() {
			return this.filteredMeatspace.map((meetup) => [
				meetup.country,
				meetup.region || '',
				{ text: meetup.city, href: meetup.link },
				{ text: meetup.organizer, href: meetup.organizerLink },
			])
		},
	},
}
</script>
