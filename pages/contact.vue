<template>
	<div class="contact-page">

		<h1 class="page-title">Contact</h1>

		<p>Have any questions? Need some help? Please get in touch and we will do our best to help.</p>

		<ul class="contact-methods">
			<li>Twitter - <a href="https://twitter.com/bitcoinonly_" target="_blank">@bitcoinonly_</a></li>
			<li>GitHub Issue - <a href="https://github.com/bitcoin-only/bitcoin-only/issues/new/choose" target="_blank">Raise an issue on GitHub</a></li>
			<li></li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	//margin-bottom: 20px;
}
.contact-methods {
	margin-top: 20px;

	li {
		margin-bottom: 10px;
	}
}
</style>

<script>
export default {

	name: 'ContactPage',

	head: {
		title: 'Contact - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Have any questions? Need some help? Contact me and I\'ll do my best to help'  }
		]
	}

}
</script>
