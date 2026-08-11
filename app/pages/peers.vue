<template>
	<div id="peers-page">
		<h1 class="page-title">Peers</h1>

		<h3>Site Content</h3>

		<p class="explainer">We are proud to have supported/worked with the following peers on site content:</p>

		<TableData :headers="['Peer', 'We Gave', 'We Received']" :rows="siteContentRows" />

		<h3>Growth</h3>

		<p class="explainer">
			Thanks to all the sites/podcasts that have helped with growth of the site. To accelerate site growth & to support
			great projects some grassroots promotion has been sponsored.
		</p>

		<TableData :headers="['Name', 'Sponsored']" :rows="growthRows" />

		<div class="footnotes">
			<p>
				If I missed your shout out please <a href="https://twitter.com/6102bitcoin" target="_blank">get in touch</a> and
				I'll make amends.
			</p>

			<p>
				A shoutout does not entitle your project to being listed or bump you up the list to be evaluated. Only projects
				listed on bitcoin-only.com will be featured on this list for helping support our growth.
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.explainer {
	margin-top: -15px;
}
</style>

<script>
import { siteContent, growth } from '@/data/peers'

export default {
	name: 'PeersPage',

	setup() {
		usePageMeta({
			title: 'Peers - Bitcoin Only',
			description: 'A collection of people we have worked with in the past.',
		})
	},

	data() {
		return {
			siteContentRows: siteContent.map((item) => [
				{ text: item.peer, href: item.peerLink },
				{ text: item.weGave, href: item.weGaveLink },
				{ text: item.weReceived, href: item.weReceivedLink },
			]),
			growthRows: growth.map((item) => [{ text: item.name, href: item.link }, { html: item.sponsor }]),
		}
	},
}
</script>
