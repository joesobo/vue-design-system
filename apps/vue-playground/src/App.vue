<template>
	<header>
		<Button label="Hello World!" gradient="cyan-blue" />
		<UIButton label="Hello World!" gradient="cyan-blue" />
	</header>

	<RouterView />
</template>

<script setup lang="ts">
import { Button } from 'button'
import { Button as UIButton } from 'ui'
</script>
