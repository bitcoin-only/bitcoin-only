<template>
	<div class="layout">
		<side-nav class="mobile-side-nav" :class="{ 'side-nav-open': sideNavOpen }" mobile @close="closeSideNav"></side-nav>
		<div class="side-nav-backdrop" :class="{ open: sideNavOpen }" @click="closeSideNav"></div>
		<div class="sidebar-bg"></div>
		<div class="layout-wrapper">
			<mobile-top-nav></mobile-top-nav>
			<side-nav></side-nav>
			<div class="main-content">
				<slot />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use 'assets/css/layout.scss';
@use 'assets/css/pages.scss';
</style>

<script>
import SideNav from '~/components/side-nav'
import MobileTopNav from '~/components/mobile-top-nav'

export default {
	components: {
		SideNav,
		MobileTopNav,
	},

	computed: {
		sideNavOpen: {
			get: function () {
				return useMobileSideNav().showMobileSideNav.value
			},
		},
	},

	watch: {
		sideNavOpen(open) {
			if (typeof window !== 'undefined') {
				document.body.style.overflow = open ? 'hidden' : ''
			}
		},
	},

	mounted() {
		window.addEventListener('keyup', this.onKeyup)
	},

	beforeUnmount() {
		window.removeEventListener('keyup', this.onKeyup)
		if (typeof window !== 'undefined') {
			document.body.style.overflow = ''
		}
	},

	methods: {
		closeSideNav() {
			useMobileSideNav().toggle(false)
		},
		onKeyup(event) {
			if (event.key === 'Escape' && this.sideNavOpen) {
				this.closeSideNav()
			}
		},
	},
}
</script>
