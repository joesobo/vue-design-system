import './storybook.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
	darkMode: {
    stylePreview: false,
  },
	options: {
    storySort: {
      method: 'alphabetical',
      locales: 'en-US',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
