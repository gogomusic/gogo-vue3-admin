<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
setInterval(() => count.value++, 100);
</script>

<template>
	<div class="h-40">
		<Transition
			enter-active-class="animate__animated animate__fadeInUp"
			leave-active-class="animate__animated animate__fadeOutUp"
		>
			<div :key="count" class="text-4xl">{{ count }}</div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped></style>
