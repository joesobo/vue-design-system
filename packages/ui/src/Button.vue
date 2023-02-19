<template>
	<button type="button" :class="classes" :style="style" @click="onClick">
		{ { label }}
	</button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	primary: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String,
		validator: (value: string) => {
			return ['small', 'medium', 'large'].indexOf(value) !== -1
		},
		default: 'medium',
	},
	backgroundColor: {
		type: String,
		default: '#fff',
	},
})

const classes = computed(() => ({
	'storybook-button': true,
	'storybook-button--primary': props.primary,
	'storybook-button--secondary': !props.primary,
	[`storybook-button--${props.size || 'medium'}`]: true,
}))

const style = computed(() => ({
	backgroundColor: props.backgroundColor,
}))

const onClick = () => {
	console.log('clicked')
}
</script>
