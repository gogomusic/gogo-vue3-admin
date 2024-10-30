<script lang="ts" setup>
import I18nIcon from '@/layout/components/I18nIcon.vue';
import { ElCalendar } from 'element-plus';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<main>
		{{ t('layout.home') }}
		<br />
		<I18nIcon></I18nIcon>
		<ElCalendar></ElCalendar>
	</main>
</template>

<style lang="scss" scoped></style>
