import type { Meta, Story } from '@storybook/vue3'

import Button from './Button.vue'
import type { ButtonProps } from './Button.vue'

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [
				undefined,
				'default',
				'alternative',
				'dark',
				'light',
				'green',
				'red',
				'yellow',
			],
		},
		gradient: {
			control: { type: 'select' },
			options: [
				undefined,
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
			],
		},
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
		},
		shadow: {
			control: { type: 'select' },
			options: [
				undefined,
				'blue',
				'green',
				'cyan',
				'teal',
				'lime',
				'red',
				'pink',
				'purple',
			],
		},
		pill: { control: { type: 'boolean' } },
		outline: { control: { type: 'boolean' } },
		disabled: { control: { type: 'boolean' } },
		icon: { control: { type: 'text' } },
		iconPosition: {
			control: { type: 'select' },
			options: [undefined, 'left', 'right'],
		},
	},
} as Meta

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => ({
	components: { Button },
	setup() {
		return { args }
	},
	template: '<Button v-bind="args" />',
})

export const Playground = Template.bind({})
Playground.args = {
	label: 'Button',
}
