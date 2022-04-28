<template>
	<div id="side-navigation">

		<div class="logo">
			<nuxt-link to="/">
				<img src="/bitcoin-only-logo.png" alt="Bitcoin Only">
			</nuxt-link>
		</div>

		<ul class="main-links">
			<li v-for="(navLink, index) in navigationLinks" :key="index">
				<nuxt-link :to="navLink.to" exact>{{ navLink.title }}</nuxt-link>
			</li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/side-nav.scss';
</style>

<script>
export default {

	name: 'SideNavigation',

	data () {
		return {
			navigationLinks: [
				{
					title: 'Home',
					icon: '',
					to: '/'
				},
				{
					title: 'What is Bitcoin?',
					icon: '',
					to: '/what-is-bitcoin'
				},
				{
					title: 'Learning Resources',
					icon: '',
					to: '/learning-resources'
				},
				{
					title: 'Meetups',
					icon: '',
					to: '/meetups'
				},
				{
					title: 'Books',
					icon: '',
					to: '/books'
				},
				{
					title: 'Wallets',
					icon: '',
					to: '/wallets'
				},
				{
					title: 'Hardware',
					icon: '',
					to: '/hardware'
				},
				{
					title: 'Podcasts',
					icon: '',
					to: '/podcasts'
				},
				{
					title: 'Get Bitcoin',
					icon: '',
					to: '/get-bitcoin'
				},
				{
					title: 'Spend Bitcoin',
					icon: '',
					to: '/spend-bitcoin'
				},
				{
					title: 'Store Tools',
					icon: '',
					to: '/store-tools'
				},
				{
					title: 'Explorers & Dashboards',
					icon: '',
					to: '/explorers-dashboards'
				},
				{
					title: 'Dev Tools',
					icon: '',
					to: '/dev-tools'
				},
				{
					title: 'Conferences',
					icon: '',
					to: '/conferences'
				},
				{
					title: 'Videos',
					icon: '',
					to: '/videos'
				},
				{
					title: 'Privacy',
					icon: '',
					to: '/privacy'
				},
				{
					title: 'Jobs',
					icon: 'jobs',
					to: '/jobs'
				},
				{
					title: 'Peers',
					icon: '',
					to: '/peers'
				},
				{
					title: 'Promote',
					icon: '',
					to: '/promote'
				},
				{
					title: 'About',
					icon: '',
					to: '/about'
				},
				{
					title: 'Contact',
					icon: '',
					to: '/contact'
				},
				{
					title: 'Listing Requirements',
					icon: '',
					to: '/listing-requirements'
				}
			]
		}
	}

}
</script>
