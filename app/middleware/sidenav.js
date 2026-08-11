export default defineNuxtRouteMiddleware(() => {
	const { toggle } = useMobileSideNav()

	toggle(false)
})
