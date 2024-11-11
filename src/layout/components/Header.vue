<template>
	<div>
		<div v-if="$slots.logo" @click="onLogoClick" class="w-12">
			<slot name="logo"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
	(e: 'logoClick'): void;
}>();

const onLogoClick = () => {
	emit('logoClick');
};
</script>
<style lang="scss" scoped></style>
