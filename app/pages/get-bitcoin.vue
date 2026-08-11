<template>
	<div id="get-bitcoin-page">
		<h1 class="page-title">Get Bitcoin</h1>

		<p>
			There are many ways you can get Bitcoin. You can buy a fraction of a Bitcoin, so don't let a high price per
			bitcoin put you off. Many people are
			<a href="https://twitter.com/search?q=%23stackingsats" target="_blank">#stackingsats</a> (regularly spending a
			fixed $ amount on buying bitcoin, also known as dollar cost averaging), you can see that this method has
			historically been a good way of accumulating Bitcoin by looking at
			<a href="https://hodl.camp/" target="_blank">hodl.camp</a>.
		</p>

		<h3>Buy (suggested)</h3>

		<p class="explainer">
			Buy Bitcoin as you would buy anything else (without having to prove your identity). You may be able to buy Bitcoin
			at your <nuxt-link to="/meetups">local meetup</nuxt-link> or a nearby Bitcoin ATM.
		</p>

		<TableData :headers="['Name', 'Description', 'Location']" :rows="buySuggestedRows" max-width="900px" />

		<h3>Buy (other)</h3>

		<p class="explainer">
			If you want to use KYC on-ramps (despite the
			<a href="https://bitcoinqna.github.io/noKYConly1/" target="_blank">risks</a>) there are the following Bitcoin-only
			options which enforce taking self custody.
		</p>

		<TableData :headers="['Name', 'Description', 'Location', 'Auto DCA']" :rows="buyOtherRows" max-width="900px" />

		<h3>Mine</h3>

		<p class="explainer">
			Long gone are the days that you could mine Bitcoin using common hardware. Bitcoin mining is now dominated by
			specialist hardware powered by low cost electricity. This
			<a href="https://youtu.be/GmOzih6I1zs" target="_blank">video</a> gives a simple overview.
		</p>

		<h3>Earn</h3>

		<TableData :headers="['Name', 'Description']" :rows="earnBitcoinRows" />

		<div class="footnote">* Tallycoin & jfgi could at any time swap out your donation address for their own.</div>

		<h3>Win</h3>

		<TableData :headers="['Name', 'Description']" :rows="winBitcoinRows" />

		<h3>Cashback Rewards</h3>

		<TableData :headers="['Name', 'Description']" :rows="cashbackRewardsRows" />
	</div>
</template>

<style lang="scss" scoped>
.explainer {
	margin-top: -15px;
}
.footnote {
	max-width: 900px;
}
</style>

<script>
import { buySuggested, buyOther, earnBitcoin, winBitcoin, cashbackRewards } from '@/data/get-bitcoin'

const row = (service) => [{ text: service.title, href: service.link }, { html: service.description }]

export default {
	name: 'GetBitcoinPage',

	setup() {
		usePageMeta({
			title: 'Get Bitcoin - Bitcoin Only',
			description: 'List of methods of acquiring Bitcoin.',
			schema: schemaItemList('Ways to Get Bitcoin', [
				...buySuggested,
				...buyOther,
				...earnBitcoin,
				...winBitcoin,
				...cashbackRewards,
			]),
		})
	},

	data() {
		return {
			buySuggestedRows: buySuggested.map((service) => [
				{ text: service.title, href: service.link },
				{ text: service.description },
				{ text: service.location },
			]),
			buyOtherRows: buyOther.map((service) => [
				{ text: service.title, href: service.link },
				{ text: service.description },
				{ text: service.location },
				{ text: service.autoDca },
			]),
			earnBitcoinRows: earnBitcoin.map(row),
			winBitcoinRows: winBitcoin.map(row),
			cashbackRewardsRows: cashbackRewards.map(row),
		}
	},
}
</script>
