<template>
	<div class="flex items-center">
		<input
			:id="id ?? `default-checkbox-${label}`"
			v-model="model"
			type="checkbox"
			:aria-label="aria ?? label"
			class="h-5 w-5 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
		/>
	</div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

export type CheckboxInputProps = {
	label: string
	id?: string
	aria?: string
	modelValue?: boolean
}

const props = withDefaults(defineProps<CheckboxInputProps>(), {
	id: undefined,
	aria: undefined,
	modelValue: false,
})
const model = useVModel(props, 'modelValue')
</script>
