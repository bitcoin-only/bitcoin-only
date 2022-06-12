<template>
	<div class="about-page">

		<h1 class="page-title">About</h1>

		<p class="about-me">
			Ventuno è un sito open source creato per raccogliere le migliori risorse Bitcoin in italiano.
			<br> 
			È costruito e gestito da volontari. 
			<br>
			Nato come fork di www.bitcoin-only.com 
 		</p>
		<h3> Open Source </h3>	
			Il termine open source si riferisce a qualcosa che le persone possono modificare e condividere perché il suo progetto è pubblicamente accessibile.
			<br>
			Il termine è nato nel contesto dello sviluppo di software, per indicare un approccio specifico alla creazione di programmi informatici. 
			<br>
			Oggi, tuttavia, "open source" designa un insieme più ampio di valori, quello che noi chiamiamo "il modo open source". 
			<br>
			I progetti, i prodotti o le iniziative open source abbracciano e celebrano i principi di scambio aperto, partecipazione collaborativa, prototipazione rapida, trasparenza, meritocrazia e sviluppo orientato alla comunità.
		
		<div class="quote-wrapper">
			<div class="inner">
				<div class="quote">"Sono solo uno strumento nella vostra ricerca di conoscenza. Il mio scopo è quello di aiutarvi, ma vi chiedo di fare le vostre ricerche."</div>
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
