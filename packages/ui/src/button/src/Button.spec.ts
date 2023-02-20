import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'

import { Button } from '.'

describe('Button', () => {
	it('renders', () => {
		render(Button, {
			props: {
				label: 'Hello World',
			},
		})
		const container: HTMLButtonElement = screen.getByRole('button', {
			name: 'Hello World',
		})

		expect(container.tagName).toBe('BUTTON')
		expect(container.type).toBe('button')
		expect(container).toHaveTextContent('Hello World')
	})
})
