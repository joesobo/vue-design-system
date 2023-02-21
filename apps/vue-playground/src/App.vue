<template>
	<header>
		<Button label="Hello World!" gradient="cyan-blue" />
		<UIButton label="Hello World!" gradient="cyan-blue" />
	</header>

	<RouterView />
</template>

<script setup lang="ts">
import { Button } from '@poleski/button'
import { Button as UIButton } from '@poleski/ui'
</script>
