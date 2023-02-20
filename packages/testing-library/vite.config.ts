import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: './src/index.ts',
			formats: ['es', 'cjs'],
			fileName: (format: string) => `index.${format}.js`,
		},
		cssCodeSplit: true,
		emptyOutDir: true,
	},
})
