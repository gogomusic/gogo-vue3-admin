<script setup lang="ts">
import { useLocale } from '@/i18n/useLocale';
import Layout from '@/layout/index.vue';
import { ElConfigProvider } from 'element-plus';
import { RouterView } from 'vue-router';

const { localeLanguage } = useLocale();
</script>

<template>
	<ElConfigProvider :locale="localeLanguage">
		<Layout><RouterView /></Layout>
	</ElConfigProvider>
</template>

<style scoped lang="scss"></style>
