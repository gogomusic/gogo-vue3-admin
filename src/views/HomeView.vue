<script lang="ts" setup>
import I18nIcon from '@/layout/components/I18nIcon.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<main>
		{{ t('layout.home') }}
		<br />
		<I18nIcon></I18nIcon>
	</main>
</template>

<style lang="scss" scoped></style>
