import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), vueDevTools()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// 引入 variables.scss 这样就可以在全局中使用 variables.scss中预定义的变量了。使用@use避免了使用@import导致的重复引入问题，
				additionalData: `@use "@/styles/variables.scss" as *;`,
				api: 'modern-compiler',
			},
		},
	},
});
