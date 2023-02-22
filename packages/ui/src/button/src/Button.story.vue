<template>
	<Story auto-props-disabled>
		<Variant title="Playground" :init-state="initState">
			<template #default="{ state }">
				<Button
					:label="state.label"
					:color="state.color"
					:gradient="state.gradient"
					:size="state.size"
					:disabled="state.disabled"
					:pill="state.pill"
					:outline="state.outline"
					:icon="state.icon"
					:iconPosition="state.iconPosition"
					@click="logEvent('Click', $event)"
				/>
			</template>

			<template #controls="{ state }">
				<HstText v-model="state.label" title="Label" />

				<HstSelect
					v-model="state.color"
					title="Color"
					:options="[...colors, 'undefined']"
				/>
				<HstSelect
					v-model="state.gradient"
					title="Gradient"
					:options="[...gradients, 'undefined']"
				/>
				<HstSelect v-model="state.size" title="Size" :options="sizes" />

				<HstCheckbox
					v-model="state.disabled"
					title="Disabled"
					@update:modelValue="state.disabled = $event"
				/>

				<HstCheckbox
					v-model="state.pill"
					title="Pill"
					@update:modelValue="state.pill = $event"
				/>

				<HstCheckbox
					v-model="state.outline"
					title="Outline"
					@update:modelValue="state.outline = $event"
				/>

				<HstText v-model="state.icon" title="Icon" />
				<HstSelect
					v-model="state.iconPosition"
					title="Icon Position"
					:options="['left', 'right']"
				/>
			</template>
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
type Sizes = Exclude<ButtonProps['size'], undefined>

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

const sizes: Sizes[] = ['xs', 'sm', 'md', 'lg', 'xl']

const initState = () => {
	return {
		label: 'Click Me!',
		color: 'default',
		gradient: undefined,
		disabled: false,
		pill: false,
		outline: false,
	}
}
</script>

<docs lang="md">
    # Button

    This is a totally cool button, that looks pretty.
</docs>
