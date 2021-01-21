<template>
	<div id="promote-page">

		<h1 class="page-title">Promote</h1>

		<h3 class="first">On Your Podcast / Website</h3>

		<p>We are proud to have been mentioned on a number of podcasts & websites.</p>
		<p>Please let us know if you mention bitcoin-only.com on your podcast / website!</p>

		<h3>In Meatspace</h3>

		<p>Want to help promote bitcoin-only.com? The poster below was designed by Phneep.</p>

		<ul class="poster-instructions">
			<li><span>1)</span>Print it out</li>
			<li><span>2)</span>Put it up somewhere public</li>
			<li><span>3)</span>Take a photo of the poster and tag <a href="https://twitter.com/bitcoinonly_" target="_blank">@bitcoinonly_</a> on twitter</li>
		</ul>

		<img class="bitcoin-only-poster" src="/bitcoin-only-poster.jpg" alt="Bitcoin Only Poster">

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3.first {
	margin-top: 20px;
}
h3 {
	margin-top: 30px;
	margin-bottom: 20px;
}
.poster-instructions {
	span {
		color: #f2ad4f;
		width: 22px;
		display: inline-block;
	}
}
.bitcoin-only-poster {
	width: 100%;
	max-width: 600px;
	margin-top: 40px;
	border-radius: 10px;
}
</style>

<script>
export default {

	name: 'PromotePage',

	head: {
		title: 'Promote - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'How to promote Bitcoin Only.' }
		]
	}

}
</script>
