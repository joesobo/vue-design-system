import type { UserConfig } from 'vitest/config'
import baseConfig from './vitest-preset'
import merge from 'deepmerge'

const defineConfig = (configOverrides: UserConfig = {}): UserConfig => {
	return { ...merge(baseConfig, configOverrides) }
}

export { defineConfig }
