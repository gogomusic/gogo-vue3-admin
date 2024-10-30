import { createI18n } from 'vue-i18n';
import { getCacheLang } from './useLocale';

const messages = Object.fromEntries(
	Object.entries(import.meta.glob('./lang/*.y(a)?ml', { eager: true })).map(
		([key, value]) => {
			const locale = key.match(/([A-Za-z0-9-_]+)\./i)?.[1];
			return [locale, (value as any).default];
		}
	)
);

const i18n = createI18n({
	messages,
	legacy: false,
	locale: getCacheLang(),
	fallbackLocale: 'zh-CN',
});
export default i18n;
