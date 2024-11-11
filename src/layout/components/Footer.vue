<template>
	<el-text type="info" class="footer py-4 text-center">
		<div class="mt-2">
			{{ t('layout.footer.copyright') }}
		</div>
	</el-text>
</template>

<script lang="ts" setup>
import { ElText } from 'element-plus';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
