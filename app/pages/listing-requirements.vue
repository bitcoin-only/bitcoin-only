<template>
	<div class="listing-requirements-page">
		<h1 class="page-title">Listing Requirements</h1>

		<p class="intro">
			For a new project to be listed on bitcoin-only it must simply meet the following two requirements:
		</p>

		<ul class="panel requirements">
			<li>
				<span class="num">1.</span>
				<span class="title">Support Bitcoin</span>
			</li>
			<li>
				<span class="num">2.</span>
				<span class="title">Not support altcoins</span>
			</li>
		</ul>

		<h3>How Do I Get My Project Added?</h3>

		<ol class="panel steps">
			<li>
				<span class="num">1.</span>
				<a class="btn" href="https://github.com/bitcoin-only/bitcoin-only/issues/new/choose" target="_blank"
					>Open the content suggestion form</a
				>
			</li>
			<li>
				<span class="num">2.</span>
				<div>
					<span class="title">Fill in the three fields</span>
					<p>
						<span class="steps-code">Link to Content</span>, your project's URL, a one-line
						<span class="steps-code">Description</span>, and the <span class="steps-code">Suggested Section</span> your
						project fits into (e.g. Wallets, Learning Resources, Dev Tools, Store Tools, Explorers &amp; Dashboards).
					</p>
				</div>
			</li>
			<li>
				<span class="num">3.</span>
				<div>
					<span class="title">Submit the issue</span>
					<p>All you need is a GitHub account and nothing else.</p>
				</div>
			</li>
			<li>
				<span class="num">4.</span>
				<div>
					<span class="title">We review the submission</span>
					<p>Each suggestion is checked against the two requirements above before being listed.</p>
				</div>
			</li>
		</ol>
	</div>
</template>

<style lang="scss" scoped>
h3 {
	margin-top: 25px;
	margin-bottom: 15px;
	padding-bottom: 6px;
	border-bottom: 1px solid var(--color-link-border);
}
.intro {
	margin-bottom: 12px;
}
.panel {
	background: #181c25;
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 5px;
	list-style: none;
	padding: 2px 20px;
	max-width: 800px;

	li {
		display: flex;
		gap: 12px;
		padding: 12px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);

		&:last-child {
			border-bottom: none;
		}

		> div {
			line-height: 1.5;
		}

		p {
			margin: 2px 0 0;
			color: var(--color-muted);
			font-size: 14px;
		}
	}
}
.num {
	flex-shrink: 0;
	color: var(--color-accent);
	font-weight: 700;
	font-size: 16px;
	line-height: 1.5;
}
.title {
	color: var(--color-text);
	font-size: 16px;
	font-weight: 500;
}
.requirements > li {
	align-items: baseline;
	padding: 6px 0;
}
.requirements .title {
	font-weight: 400;
}
.steps {
	margin: 0;
}
.steps-code {
	font-family: monospace;
	background-color: #101218;
	color: var(--color-accent);
	padding: 1px 6px;
	border-radius: 3px;
	border: 1px solid rgba(255, 255, 255, 0.08);
	white-space: nowrap;
}
.btn {
	display: inline-block;
	padding: 8px 16px;
	background: var(--color-accent);
	color: #101218;
	font-weight: 600;
	font-size: 14px;
	border-radius: 4px;
	text-decoration: none;

	&:hover {
		filter: brightness(1.1);
	}
}
</style>

<script>
export default {
	name: 'ListingRequirementsPage',

	setup() {
		usePageMeta({
			title: 'Listing Requirements - Bitcoin Only',
			description: 'Listing requirement for Bitcoin Only.',
		})
	},
}
</script>
