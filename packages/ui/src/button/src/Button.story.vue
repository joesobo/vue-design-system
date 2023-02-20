<template>
	<Story>
		<Variant title="Default">
			<Button label="Click Me" @click="logEvent('Click', $event)" />
		</Variant>

		<Variant title="Disabled">
			<Button label="Click Me" disabled @click="logEvent('Click', $event)" />
		</Variant>

		<Variant title="Pill">
			<Button label="Click Me" pill @click="logEvent('Click', $event)" />
		</Variant>

		<Variant title="Outline">
			<Button label="Click Me" outline @click="logEvent('Click', $event)" />
		</Variant>

		<Variant title="Colors">
			<div class="grid grid-cols-4 gap-2">
				<Button
					v-for="color in colors"
					:key="color"
					:label="color"
					:color="color"
					@click="logEvent('Click', $event)"
				/>
			</div>
		</Variant>

		<Variant title="Gradients">
			<div class="grid grid-cols-4 gap-2">
				<Button
					v-for="gradient in gradients"
					:key="gradient"
					:label="gradient"
					:gradient="gradient"
					@click="logEvent('Click', $event)"
				/>
			</div>
		</Variant>
	</Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'

import Button from './Button.vue'
import type { ButtonProps } from './Button.vue'

type Gradients = Exclude<ButtonProps['gradient'], undefined>
type Colors = Exclude<ButtonProps['color'], undefined>

const gradients: Gradients[] = [
	'blue',
	'green',
	'cyan',
	'teal',
	'lime',
	'red',
	'pink',
	'purple',
	'purple-blue',
	'cyan-blue',
	'green-blue',
	'purple-pink',
	'pink-orange',
	'teal-lime',
	'red-yellow',
]

const colors: Colors[] = [
	'default',
	'alternative',
	'dark',
	'light',
	'green',
	'red',
	'yellow',
]
</script>

<docs lang="md">
    # Button

    This is a totally cool button
</docs>
