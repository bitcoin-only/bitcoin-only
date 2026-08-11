<template>
	<div id="jobs">
		<h1 class="page-title">Jobs</h1>

		<p>Get a job in bitcoin - visit <a href="https://bitcoinerjobs.com/" target="_blank">bitcoinerjobs.com</a></p>
	</div>
</template>

<script>
export default {
	name: 'JobsPage',

	setup() {
		usePageMeta({
			title: 'Jobs',
			description: 'Get a job in bitcoin',
		})
	},
}
</script>
