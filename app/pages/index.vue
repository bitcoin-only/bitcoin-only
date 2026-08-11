<template>
	<div id="home-page">
		<h1 class="welcome">Welcome to Bitcoin Only, a collection of the highest quality Bitcoin resources.</h1>
		<div class="subtitle">Click on any of the following categories to learn more.</div>

		<div class="categories">
			<div v-for="(navLink, index) in navigationLinks" :key="index" class="category">
				<nuxt-link class="link-box" :to="navLink.to" exact>
					<img :src="`/icons/${navLink.icon}.svg`" :alt="navLink.title" />
					<h3 class="title">{{ navLink.title }}</h3>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use 'assets/css/home.scss';
</style>

<script>
import { navigationLinks } from '@/data/index'

export default {
	name: 'HomePage',

	setup() {
		usePageMeta({
			title: 'Bitcoin Only',
			description: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.',
			schema: schemaWebSite(),
		})
	},

	data() {
		return {
			navigationLinks,
		}
	},
}
</script>
