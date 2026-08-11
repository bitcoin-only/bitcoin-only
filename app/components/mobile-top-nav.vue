<template>
	<div id="mobile-top-navigation" :class="{ 'mobile-side-nav-open': sideNavOpen }">
		<button
			type="button"
			class="mobile-menu-toggle"
			:aria-expanded="sideNavOpen ? 'true' : 'false'"
			aria-controls="side-navigation-mobile"
			:aria-label="sideNavOpen ? 'Close navigation menu' : 'Open navigation menu'"
			@click="toggleMenu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<div class="logo">
			<nuxt-link to="/">
				<img src="/bitcoin-only-logo.png" alt="Bitcoin Only" />
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use 'assets/css/mobile-top-nav.scss';
</style>

<script>
export default {
	name: 'MobileTopNavigation',

	computed: {
		sideNavOpen: {
			get: function () {
				return useMobileSideNav().showMobileSideNav.value
			},
			set: function (value) {
				useMobileSideNav().toggle(value)
			},
		},
	},

	methods: {
		toggleMenu() {
			this.sideNavOpen = !this.sideNavOpen
		},
	},
}
</script>
