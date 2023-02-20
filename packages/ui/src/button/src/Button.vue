<template>
	<button type="button" :label="label" :class="classes" :disabled="disabled">
		<Icon
			v-if="iconPosition === 'left' && icon"
			:icon="icon"
			:class="iconClasses"
		/>

		<p>
			{{ label }}
		</p>

		<Icon
			v-if="iconPosition === 'right' && icon"
			:icon="icon"
			:class="iconClasses"
		/>
	</button>
</template>

<script setup lang="ts">
import { cva } from 'cva'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

export type ButtonProps = {
	label: string
	color?:
		| 'default'
		| 'alternative'
		| 'dark'
		| 'light'
		| 'green'
		| 'red'
		| 'yellow'
	gradient?:
		| 'blue'
		| 'green'
		| 'cyan'
		| 'teal'
		| 'lime'
		| 'red'
		| 'pink'
		| 'purple'
		| 'purple-blue'
		| 'cyan-blue'
		| 'green-blue'
		| 'purple-pink'
		| 'pink-orange'
		| 'teal-lime'
		| 'red-yellow'
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	shadow?:
		| 'blue'
		| 'green'
		| 'cyan'
		| 'teal'
		| 'lime'
		| 'red'
		| 'pink'
		| 'purple'
	pill?: boolean
	outline?: boolean
	disabled?: boolean
	// any icon from https://icon-sets.iconify.design
	icon?: string
	iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<ButtonProps>(), {
	color: 'default',
	gradient: undefined,
	size: 'md',
	shadow: undefined,
	pill: false,
	outline: false,
	disabled: false,
	icon: undefined,
	iconPosition: 'left',
})

const classes = computed(() => {
	return cva(
		[
			'bg-red-500',
			'focus:ring-4',
			'font-medium',
			'px-5',
			'py-2.5',
			'mr-2',
			'mb-2',
			'focus:outline-none',
			'flex',
			'justify-center',
			'items-center',
			'text-center',
		],
		{
			variants: {
				color: {
					default:
						'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
					alternative:
						'focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
					dark: 'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700',
					light:
						'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700',
					green:
						'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800',
					red: 'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
					yellow:
						'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900',
				},
				gradient: {
					blue: 'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
					green:
						'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800',
					cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
					teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800',
					lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800',
					red: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800',
					pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800',
					purple:
						'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800',
					'red-yellow':
						'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400',
					'teal-lime':
						'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700',
					'pink-orange':
						'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800',
					'purple-pink':
						'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800',
					'green-blue':
						'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800',
					'cyan-blue':
						'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800',
					'purple-blue':
						'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800',
				},
				size: {
					xs: 'text-xs px-4 py-2',
					sm: 'text-xs px-4 py-2',
					md: 'text-sm px-5 py-2.5',
					lg: 'text-base px-6 py-3',
					xl: 'text-base px-6 py-3',
				},
				shadow: {
					blue: 'shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80',
					green:
						'shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80',
					cyan: 'shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80',
					teal: 'shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80',
					lime: 'shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80',
					red: 'shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80',
					pink: 'shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80',
					purple:
						'shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80',
				},
				pill: {
					true: 'rounded-full',
					false: 'rounded-lg',
				},
				outline: {
					true: 'border-2 border-transparent',
					false: 'border-2 border-transparent',
				},
				disabled: {
					true: 'opacity-50 cursor-not-allowed',
					false: 'opacity-100 cursor-pointer',
				},
			},
		}
	)({
		...props,
	})
})

const iconClasses = computed(() => {
	return cva([], {
		variants: {
			size: {
				xs: 'w-4 h-4',
				sm: 'w-4 h-4',
				md: 'w-5 h-5',
				lg: 'w-6 h-6',
				xl: 'w-6 h-6',
			},
			iconPosition: {
				left: 'mr-2',
				right: 'ml-2',
			},
		},
	})({
		...props,
	})
})
</script>
