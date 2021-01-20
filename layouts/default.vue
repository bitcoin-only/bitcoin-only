<template>
	<div class="layout">
		<side-nav class="mobile-side-nav" :class="{ 'side-nav-open': sideNavOpen }"></side-nav>
		<div class="sidebar-bg"></div>
		<div class="layout-wrapper">
			<mobile-top-nav></mobile-top-nav>
			<side-nav></side-nav>
			<div class="main-content">
				<nuxt/>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import 'assets/css/layout.scss';
</style>

<script>
import SideNav from '~/components/side-nav'
import MobileTopNav from '~/components/mobile-top-nav'

export default {

	components: {
		SideNav,
		MobileTopNav
	},

	computed: {

		sideNavOpen: {
			get: function () {
				return this.$store.state.showMobileSideNav
			}
		}

	}
}
</script>
