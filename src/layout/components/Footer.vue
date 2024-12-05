<template>
	<footer
		class="fixed bottom-0 left-1/2 -translate-x-1/2 z-10 py-1 bg-[#f5f6f9] dark:bg-black w-full text-center shadow-sm text-[#92959b] dark:text-white text-xs"
	>
		{{ t('layout.footer.copyright') }}
	</footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
