import type { Meta, Story } from '@storybook/vue3'

import Button from './Button.vue'
import type { ButtonProps } from './Button.vue'

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		onClick: {},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
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

export const Primary = Template.bind({})
Primary.args = {
	primary: true,
	label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Button',
}
