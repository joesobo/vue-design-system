import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				setupTests: path.resolve(__dirname, 'src/setupTests.ts'),
				'vitest-preset': 'src/vitest-preset.ts',
			},
			output: {
				entryFileNames: '[name].js',
				format: 'cjs',
				dir: 'preset',
			},
		},
		cssCodeSplit: true,
		emptyOutDir: true,
	},
})
