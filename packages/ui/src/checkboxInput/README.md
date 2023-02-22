# @poleski/checkboxInput

This is an individual package that contains a few different components for building out a specific piece of UI. If you want this specific packages without the added bloat of the entire UI package suite, install this package. If you just want the entire UI suite install the `@poleski/ui` package.

## Installation

```bash
pnpm i @poleski/checkboxInput
```

## Usage

```vue
<template>
	<Checkbox :modelValue="isChecked" label="Just a simple checkbox" />

	// Alternative

	<Checkbox v-modal="isChecked" label="Just a simple checkbox" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxInput } from '@poleski/checkboxInput'

const isChecked = ref(false)
</script>
```
