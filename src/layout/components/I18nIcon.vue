<template>
	<ElDropdown :placement="placement" class="dropdown" @command="changeLanguage">
		<template #dropdown>
			<ElDropdownMenu>
				<ElDropdownItem
					v-for="item in languageOptions"
					:key="item.lang"
					:command="item.lang"
					:class="[{ selected: locale === item.lang }]"
					>{{ item.title }}</ElDropdownItem
				>
			</ElDropdownMenu>
		</template>
		<div class="h-full flex items-center outline-none">
			<slot>
				<ElIcon size="16">
					<LanguageIcon :style="iconStyle" />
				</ElIcon>
			</slot>
		</div>
	</ElDropdown>
</template>

<script lang="ts" setup>
import { LanguageIcon } from '@/components/icons';
import { setCacheLang } from '@/i18n/useLocale';
import {
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElIcon,
	type ElTooltipProps,
} from 'element-plus';
import type { CSSProperties } from 'vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const languageOptions = [
	{ title: '简体中文', lang: 'zh-CN' },
	{ title: '繁體中文', lang: 'zh-TW' },
	{ title: 'English', lang: 'en' },
];

withDefaults(
	defineProps<{
		placement?: ElTooltipProps['placement'];
		iconStyle?: CSSProperties;
	}>(),
	{
		placement: 'bottom',
	}
);

const changeLanguage = (lang: string) => {
	locale.value = lang;
	setCacheLang(lang);
};
</script>
<style lang="scss" scoped>
:deep(.el-dropdown-menu__item).selected {
	background-color: #d0e4ff;
}
</style>
