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
		logoHref: 'https://acme.com',
		favicon: './public/favicon.ico',
	},
})
