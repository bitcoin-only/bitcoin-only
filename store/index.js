export const state = () => ({
	showMobileSideNav: false
})

export const mutations = {
	toggleMobileSideNav (state, newValue) {
		state.showMobileSideNav = newValue
	}
}
