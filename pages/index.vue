<template>
	<div id="home-page">
		<h1 class="welcome">Welcome to Bitcoin Only, a collection of the highest quality Bitcoin resources.</h1>
		<div class="subtitle">Click on any of the following categories to learn more.</div>

		<div class="categories">

			<div v-for="(navLink, index) in navigationLinks" :key="index" class="category">
				<nuxt-link class="link-box" :to="navLink.to" exact>
					<img :src="`/icons/${navLink.icon}.svg`" :alt="navLink.title">
					<h3 class="title">{{ navLink.title }}</h3>
				</nuxt-link>
			</div>

		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/home.scss';
</style>

<script>
export default {

	name: 'HomePage',

	head: {
		title: 'Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Bitcoin only resources including meetups, books, wallets, podcasts, conferences, and much more.' }
		]
	},

	data () {
		return {
			navigationLinks: [
				{
					title: 'What is Bitcoin?',
					icon: 'what-is-bitcoin',
					to: '/what-is-bitcoin'
				},
				{
					title: 'Learning Resources',
					icon: 'learning-resources',
					to: '/learning-resources'
				},
				{
					title: 'Meetups',
					icon: 'meetups',
					to: '/meetups'
				},
				{
					title: 'Books',
					icon: 'books',
					to: '/books'
				},
				{
					title: 'Wallets',
					icon: 'wallets',
					to: '/wallets'
				},
				{
					title: 'Hardware',
					icon: 'hardware',
					to: '/hardware'
				},
				{
					title: 'Podcasts',
					icon: 'podcasts',
					to: '/podcasts'
				},
				{
					title: 'Get Bitcoin',
					icon: 'get-bitcoin',
					to: '/get-bitcoin'
				},
				{
					title: 'Spend Bitcoin',
					icon: 'spend-bitcoin',
					to: '/spend-bitcoin'
				},
				{
					title: 'Store Tools',
					icon: 'store-tools',
					to: '/store-tools'
				},
				{
					title: 'Explorers & Dashboards',
					icon: 'explorers-dashboards',
					to: '/explorers-dashboards'
				},
				{
					title: 'Dev Tools',
					icon: 'dev-tools',
					to: '/dev-tools'
				},
				{
					title: 'Conferences',
					icon: 'conferences',
					to: '/conferences'
				},
				{
					title: 'Videos',
					icon: 'videos',
					to: '/videos'
				},
				{
					title: 'Privacy',
					icon: 'privacy',
					to: '/privacy'
				},
				{
					title: 'Jobs',
					icon: 'jobs',
					to: '/jobs'
				},
				{
					title: 'Peers',
					icon: 'peers',
					to: '/peers'
				},
				{
					title: 'Promote',
					icon: 'promote',
					to: '/promote'
				},
				{
					title: 'About',
					icon: 'about',
					to: '/about'
				},
				{
					title: 'Contact',
					icon: 'contact',
					to: '/contact'
				},
				{
					title: 'Listing Requirements',
					icon: 'listing-requirements',
					to: '/listing-requirements'
				}
			]
		}
	}

}
</script>
