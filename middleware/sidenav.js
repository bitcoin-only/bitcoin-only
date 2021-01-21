export default function ({ store, redirect }) {

	if (store.state.showMobileSideNav) {
		store.commit('toggleMobileSideNav', false)
	}

}
