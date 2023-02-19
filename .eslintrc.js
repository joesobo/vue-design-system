module.exports = {
	env: {
		browser: true,
		node: true,
	},
	// This tells ESLint to load the config from the package `eslint-config-custom`
	extends: ['custom'],
	settings: {
		tailwindcss: {
			config: 'packages/tailwind/index.js',
			cssFiles: [
				'**/*.css',
				'!**/node_modules',
				'!**/.*',
				'!**/dist',
				'!**/build',
			],
		},
	},
}
