<script setup lang="ts">
import { useLocale } from '@/i18n/useLocale';
import { ElConfigProvider } from 'element-plus';
import { RouterView } from 'vue-router';

const { localeLanguage } = useLocale();
</script>

<template>
	<ElConfigProvider :locale="localeLanguage">
		<RouterView />
	</ElConfigProvider>
</template>

<style scoped lang="scss"></style>
