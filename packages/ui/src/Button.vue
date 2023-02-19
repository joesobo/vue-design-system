<template>
	<button type="button" :class="classes" @click="onClick">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type ButtonProps = {
	label: string
	primary?: boolean
	size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<ButtonProps>(), {
	primary: false,
	size: 'medium',
})

const classes = computed(() => ({
	'storybook-button': true,
	'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800':
		props.primary,
	'py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700':
		!props.primary,
	[`storybook-button--${props.size || 'medium'}`]: true,
}))

const onClick = () => {
	console.log('clicked')
}
</script>
