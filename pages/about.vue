<template>
	<div class="about-page">

		<h1 class="page-title">About</h1>

		<p class="about-me">My name is <a href="https://twitter.com/6102bitcoin" target="_blank">@6102bitcoin</a> and I created this website to showcase the highest quality Bitcoin resources. I'm a pseudonymous Bitcoin user and educator doing what I can to accelerate Bitcoin understanding.</p>

		<div class="quote-wrapper">
			<div class="inner">
				<div class="quote">"I'm merely a tool in your own quest for knowledge. My aim is to help you but I demand you do your own due diligence."</div>
				<div class="author">- Matt Odell -</div>
			</div>
		</div>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	//margin-bottom: 20px;
}
.about-me {
	max-width: 800px;
}
.quote-wrapper {
	margin-top: 40px;
	max-width: 600px;
	text-align: center;
	background: #181c25;
	padding: 20px 30px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 5px;

	.quote {
		font-size: 18px;
		font-style: italic;
		margin-bottom: 15px;
	}
	.author {
		color: rgba(255,255,255,0.55);
	}
}
</style>

<script>
export default {

	name: 'AboutPage',

	head: {
		title: 'About - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'About Bitcoin Only' }
		]
	}

}
</script>
