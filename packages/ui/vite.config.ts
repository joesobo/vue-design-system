import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [vue({ customElement: true })],
	build: {
		lib: {
			entry: './src/index.ts',
			formats: ['es', 'cjs'],
			fileName: (format: string) => `index.${format}.js`,
		},
		cssCodeSplit: true,
		emptyOutDir: true,
		rollupOptions: {
			external: ['**/*.spec.ts', '**/*.stories.ts'],
		},
	},
	resolve: {
		dedupe: ['vue'],
	},
})
