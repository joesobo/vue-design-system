module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:vuejs-accessibility/recommended',
		'plugin:storybook/recommended',
		'plugin:prettier/recommended',
		'plugin:tailwindcss/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	plugins: ['vue', '@typescript-eslint', 'vuejs-accessibility', 'tailwindcss'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		'vue/multi-word-component-names': 'off',
		'vue/attribute-hyphenation': 'off',
		'vue/v-on-event-hyphenation': 'off',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				useTabs: true,
				trailingComma: 'es5',
			},
		],
	},
}
