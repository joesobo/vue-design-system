module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	// This tells ESLint to load the config from the package `eslint-config-custom`
	extends: ['custom'],
	settings: {
		next: {
			rootDir: ['apps/*/'],
		},
	},
}
