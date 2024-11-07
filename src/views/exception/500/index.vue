<template>
	<div class="pt-10">
		<el-result title="500">
			<template #icon>
				<div class="w-64 h-72 mb-2.5">
					<IconSvg />
				</div>
			</template>
			<template #sub-title>
				<el-text type="info">抱歉, 服务器出错了</el-text>
			</template>
			<template #extra>
				<router-link to="/" class="inline-flex no-underline">
					<el-button type="primary">返回首页</el-button>
				</router-link>
			</template>
		</el-result>
	</div>
</template>

<script lang="ts" setup>
import { ElButton, ElResult, ElText } from 'element-plus';
import { RouterLink } from 'vue-router';
import IconSvg from './components/IconSvg.vue';
defineOptions({
	name: 'Exception500',
});
</script>
