<template>
	<svg class="feature-icon" :class="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path :d="iconPath" fill="currentColor"></path>
	</svg>
</template>

<script>
const iconPaths = {
	'check-circle':
		'M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z',
	'panorama-fisheye':
		'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z',
}

export default {
	name: 'FeatureIcon',

	props: {
		icon: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			default: 'is-medium',
		},
	},

	computed: {
		iconPath() {
			return iconPaths[this.icon] || ''
		},
	},
}
</script>

<style scoped>
.feature-icon {
	fill: currentColor;
	flex-shrink: 0;
	vertical-align: middle;
}

.feature-icon.is-small {
	width: 16px;
	height: 16px;
}

.feature-icon.is-medium {
	width: 32px;
	height: 32px;
}

.feature-icon.is-large {
	width: 64px;
	height: 64px;
}
</style>
