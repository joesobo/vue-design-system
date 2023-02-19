import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const packageFilePath = path.resolve(process.cwd(), 'package.json')
const packageFile = require(packageFilePath)

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
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(packageFile.dependencies || {}),
        ...Object.keys(packageFile.peerDependencies || {}),
        '**/*.spec.ts',
      ],
    },
  },
  resolve: {
    dedupe: ['vue'],
  },
})
