<template>
	<div id="mobile-top-navigation" :class="{ 'mobile-side-nav-open': sideNavOpen }">

		<div class="mobile-menu-toggle">
			<input type="checkbox" v-model="sideNavOpen" />
			<span></span>
			<span></span>
			<span></span>
		</div>

		<div class="logo">
			<nuxt-link to="/">
				<img src="/ventuno-alpha.png" alt="Bitcoin Only">
			</nuxt-link>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/mobile-top-nav.scss';
</style>

<script>
export default {

	name: 'MobileTopNavigation',

	computed: {

		sideNavOpen: {
			get: function () {
				return this.$store.state.showMobileSideNav
			},
			set: function (value) {
				this.$store.commit('toggleMobileSideNav', value)
			}
		}

	}

}
</script>
