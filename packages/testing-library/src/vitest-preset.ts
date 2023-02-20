const vue: unknown = require('@vitejs/plugin-vue')

import type { Plugin } from 'vite'
import type { UserConfig } from 'vitest/config'

const baseConfig: UserConfig = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Ignoring `Plugin` from typechecking as vite conflicts with vitest types
	// @ts-expect-error
	plugins: [(vue as () => Plugin)()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['node_modules/testing-library/preset/setupTests.js'],
		includeSource: ['**/*.spec.ts'],
	},
}

export default baseConfig
