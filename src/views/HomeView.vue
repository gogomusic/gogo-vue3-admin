<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<main>
		{{ t('layout.home') }}
	</main>
</template>

<style lang="scss" scoped></style>
