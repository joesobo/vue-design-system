module.exports = {
  stories: [
    "../**/src/**/*.stories.mdx",
    "../**/src/**/*.stories.@(js|ts)"
  ],
  addons: [
		"storybook-dark-mode",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    "storyStoreV7": true
  },
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.css$/i,
			use: [
				{
					loader: "postcss-loader",
					options: { implementation: require.resolve("postcss") },
				},
			],
			include: path.resolve(__dirname, "../"),
		});
		// Return the altered config
		return config;
	},
}
