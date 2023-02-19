<template>
	<button type="button" :label="label" :class="classes" @click="onClick">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { cva } from 'cva'
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

const classes = computed(() => {
	return cva(
		[
			'bg-white',
			'text-white',
			'focus:ring-4',
			'font-medium',
			'rounded-lg',
			'text-sm',
			'px-5',
			'py-2.5',
			'mr-2',
			'mb-2',
			'focus:outline-none',
		],
		{
			variants: {
				size: {
					small: 'text-xs px-4 py-2',
					medium: 'text-sm px-5 py-2.5',
					large: 'text-base px-6 py-3',
				},
				primary: {
					true: 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
					false:
						'focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
				},
			},
		}
	)({
		primary: props.primary,
		size: props.size,
	})
})

const onClick = () => {
	console.log('clicked')
}
</script>
