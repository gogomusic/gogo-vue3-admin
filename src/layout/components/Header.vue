<script lang="ts" setup>
import { PROJECT_NAME } from '@/config/setting';
import I18nIcon from '@/layout/components/I18nIcon.vue';
import { Grid } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
import AvatarDropdown from './AvatarDropdown.vue';
import Theme from './Theme.vue';

const emit = defineEmits<{
	(e: 'logoClick'): void;
}>();

const onLogoClick = () => {
	emit('logoClick');
};
</script>

<template>
	<div
		class="w-full flex items-center justify-between px-5 py-2 border-b-[#e6e6e6] border-b"
	>
		<ul class="flex items-center space-l cursor-pointer" @click="onLogoClick">
			<li v-if="$slots.logo" class="w-8">
				<slot name="logo"></slot>
			</li>
			<li class="text-sm text-black dark:text-white">{{ PROJECT_NAME }}</li>
			<li
				class="flex items-center justify-center py-[6px] rounded-[18px] w-8 text-center hover:bg-[#e1edff] !ml-0 text-[#344563] dark:text-white hover:text-[#0052cc] dark:hover:text-[#0052cc]"
			>
				<el-icon size="18"><Grid /></el-icon>
			</li>
		</ul>
		<ul class="flex items-center space-r">
			<li class="flex items-center justify-center">
				<I18nIcon class-name="dark:text-white"></I18nIcon>
			</li>
			<li><Theme></Theme></li>
			<li class="flex items-center justify-center"><AvatarDropdown /></li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.space {
	&-l > * {
		@apply mx-1;
	}
	&-r > * {
		@apply mx-2;
	}
}
</style>
