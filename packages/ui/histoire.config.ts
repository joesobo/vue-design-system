import { HstVue } from '@histoire/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
	plugins: [HstVue()],
	setupFile: '/histoire-setup.ts',
	theme: {
		title: 'Poleski Design Component System',
		logo: {
			square: './public/favicon.ico',
			light: './public/favicon.ico',
			dark: './public/favicon.ico',
		},
		logoHref: 'https://github.com/joesobo/vue-design-system',
		favicon: './public/favicon.ico',
	},
	defaultStoryProps: {
		autoPropsDisabled: true,
	},
	tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        title: 'Components',
        include: file => !file.title.includes('Serialize'),
      },
      {
        title: 'Others',
        include: file => true,
      },
    ],
  },
})
