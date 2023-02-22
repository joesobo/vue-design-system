import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'

import CheckboxInput from './CheckboxInput.vue'

describe('Checkbox Input', () => {
	it('toggles state on click', async () => {
		render(CheckboxInput, {
			props: {
				label: 'increment',
			},
		})

		const checkbox = screen.getByLabelText('increment')

		expect(checkbox).not.toBeChecked()

		await fireEvent.click(checkbox)

		expect(checkbox).toBeChecked()
	})
})
