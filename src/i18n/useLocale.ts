import { PROJECT_NAME } from '@/config/setting';
import { useTitle } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { useRouter, type RouteLocationNormalized } from 'vue-router';

/* Element Plus 国际化 */
import en from 'element-plus/dist/locale/en.mjs';
import zh_CN from 'element-plus/dist/locale/zh-cn.mjs';
import zh_TW from 'element-plus/dist/locale/zh-tw.mjs';
import type { Language } from 'element-plus/es/locale';

/* dayjs 国际化 */
import { LANG_KEY } from '@/config/setting';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import { ref, watch } from 'vue';

const locales = { 'zh-CN': zh_CN, 'zh-TW': zh_TW, en };

/**
 * 获取缓存的语言
 */
export function getCacheLang() {
	return localStorage.getItem(LANG_KEY) || 'zh-CN';
}

/**
 * 设置缓存的语言
 */
export function setCacheLang(lang?: string) {
	if (!lang) {
		localStorage.removeItem(LANG_KEY);
		return;
	}
	localStorage.setItem(LANG_KEY, lang);
}

/**
 * 获取路由对应的标题
 * @param route 路由
 */
export function getRouteTitle(route: RouteLocationNormalized) {
	const lang = (route.meta?.lang ?? {}) as Record<string, any>;
	return lang[getCacheLang()] ?? route.meta?.title;
}

/** 拼接页面标题
 * @param route_title 路由标题
 */
export const getDocumentTitle = (route_title?: string) => {
	const titles: string[] = [];
	if (route_title) {
		titles.push(route_title);
	}
	if (PROJECT_NAME) {
		titles.push(PROJECT_NAME);
	}
	return titles.join(' - ');
};

export function useLocale() {
	const { currentRoute } = useRouter();
	const { locale } = useI18n();
	const localeLanguage = ref<Language>();
	const title = useTitle();
	watch(
		locale,
		() => {
			localeLanguage.value = locales[locale.value as Lang];
			dayjs.locale(locale.value.toLowerCase().replace(/_/g, '-'));
			//设置页面标题
			title.value = getDocumentTitle(getRouteTitle(currentRoute.value));
		},
		{ immediate: true }
	);
	return { localeLanguage };
}
