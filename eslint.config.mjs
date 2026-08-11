import eslint from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
	{
		ignores: ['.nuxt/**', '.output/**', 'dist/**', 'node_modules/**'],
	},
	eslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser,
				useHead: 'readonly',
				usePageMeta: 'readonly',
				schemaItemList: 'readonly',
				schemaWebSite: 'readonly',
				useState: 'readonly',
				useRoute: 'readonly',
				defineNuxtRouteMiddleware: 'readonly',
				useMobileSideNav: 'readonly',
				defineNuxtConfig: 'readonly',
			},
		},
	},
	{
		files: ['scripts/**/*.mjs'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
	{
		files: ['layouts/**/*.vue', 'app/layouts/**/*.vue'],
		rules: {
			'vue/multi-word-component-names': 'off',
		},
	},
]
