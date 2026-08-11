export function useMobileSideNav() {
	const showMobileSideNav = useState('showMobileSideNav', () => false)

	const toggle = (value) => {
		showMobileSideNav.value = value
	}

	return { showMobileSideNav, toggle }
}
