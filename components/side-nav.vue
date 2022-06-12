<template>
	<div id="side-navigation">

		<div class="logo">
			<nuxt-link to="/">
				<img src="/ventuno-alpha-v2.png" alt="Bitcoin Only">
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
					title: 'Cos\'è Bitcoin',
					icon: '',
					to: '/what-is-bitcoin'
				},
				{
					title: 'Risorse Didattiche',
					icon: '',
					to: '/learning-resources'
				},
				{
					title: 'Meetups',
					icon: '',
					to: '/meetups'
				},
				{
					title: 'Libri',
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
					title: 'Ottieni Bitcoin',
					icon: '',
					to: '/get-bitcoin'
				},
				{
					title: 'Spendi Bitcoin',
					icon: '',
					to: '/spend-bitcoin'
				},
				{
					title: 'Fatti pagare in Bitcoin',
					icon: '',
					to: '/store-tools'
				},
				{
					title: 'Explorers & Dashboards',
					icon: '',
					to: '/explorers-dashboards'
				},
				{
					title: 'Sviluppo',
					icon: '',
					to: '/dev-tools'
				},
				{
					title: 'Conferenze',
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
					title: 'Lavora con Bitcoin',
					icon: 'jobs',
					to: '/jobs'
				},
				{
					title: 'Peers',
					icon: '',
					to: '/peers'
				},
				{
					title: 'Promuovi',
					icon: '',
					to: '/promote'
				},
				{
					title: 'About',
					icon: '',
					to: '/about'
				},
				{
					title: 'Contatti',
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
