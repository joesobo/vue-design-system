<template>
	<Story>
		<Variant title="Playground" :init-state="initState">
			<template #default="{ state }">
				<div class="flex">
					<CheckboxInput
						v-model="checkboxState"
						:label="state.label"
						@update="logEvent('Click', $event)"
					/>
					<p class="ml-2 dark:text-white">
						{{ checkboxState }}
					</p>
				</div>
			</template>

			<template #controls="{ state }">
				<HstText v-model="state.label" title="Label" />
			</template>
		</Variant>
	</Story>
</template>

<script setup lang="ts">
import { logEvent } from 'histoire/client'
import { ref } from 'vue'

import CheckboxInput from './CheckboxInput.vue'

const checkboxState = ref(false)

const initState = () => {
	return {
		label: 'Click Me!',
	}
}
</script>

<docs lang="md">
    # Checkbox Input

    This is a simple and easy to use checkbox input field that looks good.
</docs>
