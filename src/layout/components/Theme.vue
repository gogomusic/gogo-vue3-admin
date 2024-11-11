<template>
	<el-switch
		v-model="isDark"
		inline-prompt
		:active-action-icon="Moon"
		:inactive-action-icon="Sunny"
		@change="handleChange"
	/>
</template>

<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue';
import { ElSwitch } from 'element-plus';
import { onMounted, ref } from 'vue';

const isDark = ref(false);

onMounted(() => {
	isDark.value = localStorage.getItem('vueuse-color-scheme') === 'dark';
	if (isDark.value) {
		document.documentElement.classList.add('dark');
	}
});

const handleChange = (val?: string | number | boolean) => {
	localStorage.setItem('vueuse-color-scheme', val ? 'dark' : 'light');
	document.startViewTransition(() => {
		document.documentElement.classList.toggle('dark', val as boolean);
	});
};
</script>
<style></style>
