<template>
	<div class="listing-requirements-page">

		<h1 class="page-title">Listing Requirements</h1>

		<h3>New Project Requirements</h3>

		<p>For a new project to be listed on bitcoin-only it must simply meet the following two requirements:</p>

		<ul class="requirements-list">
			<li><span>1)</span>Support Bitcoin</li>
			<li><span>2)</span>Not support altcoins</li>
		</ul>

		<h3>We've Changed, We Are Now Bitcoin-Only!</h3>

		<p>People make mistakes (such as supporting / promoting altcoins) and my belief is that if a project is now genuinely Bitcoin only it is welcome. That said, if a company previously supported altcoins and then switches to be Bitcoin only how do we know that they won't switch back? It's for this reason that to be listed, companies that switch to being Bitcoin only must also meet the following additional requirement:</p>

		<ul class="requirements-list additional-requirement">
			<li><span>3)</span>Publicly explain why they became Bitcoin only and remove/update any old public information in which altcoins are promoted</li>
		</ul>

		<p>These requirements are a good way to filter out those companies who are actually committed to being Bitcoin only vs. those jumping on the bandwagon. It also serves a secondary purpose - to help educating those users who are not (yet) Bitcoin only and begin to counteract the damage caused by previously supporting altcoins.</p>
		<p>Note: This is a prerequisite for being evaluated for addition and meeting these requirements does not guarantee you will be added.</p>

		<h3>How Do I Get My Project Added?</h3>

		<p>Simply make an issue on the GitHub repo by <a href="https://github.com/bitcoin-only/bitcoin-only/issues/new/choose" target="_blank">following this link</a> and clicking the "Content Suggestion - Get Started" button (see below image):</p>

		<img src="/content-suggestion.png" alt="Suggest new content on Bitcoin-only">

		<p>Replace the words in CAPITAL LETTERS and click "Sumbit New Issue"</p>

		<img src="/content-suggestion-example.png" alt="Suggest new content example on Bitcoin-only">

	</div>
</template>

<style lang="scss" scoped>
@import 'assets/css/pages.scss';

h3 {
	margin-top: 30px;
	margin-bottom: 20px;
}
img {
	width: 100%;
	max-width: 800px;
	margin: 20px 0;
}
.requirements-list {
	margin-top: 25px;

	span {
		color: #f2ad4f;
		width: 22px;
		display: inline-block;
	}
}
.additional-requirement {
	margin-bottom: 25px;
}
</style>

<script>
export default {

	name: 'ListingRequirementsPage',

	head: {
		title: 'Listing Requirements - Bitcoin Only',
		meta: [
			{ hid: 'description', name: 'description', content: 'Listing requirement for Bitcoin Only.' }
		]
	},
}
</script>
