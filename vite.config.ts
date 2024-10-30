import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import ElementPlus from 'unplugin-element-plus/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		vueDevTools(),
		ElementPlus({}),
		VueI18nPlugin({
			include: path.resolve(__dirname, './src/i18n/lang/**'),
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了。
				additionalData: `@use "@/styles/variables.scss" as *;`,
				api: 'modern-compiler',
			},
		},
	},
});
