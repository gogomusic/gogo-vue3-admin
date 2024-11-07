import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{.js,ts,mts,tsx,vue}'],
	},
	{
		name: 'app/files-to-ignore',
		ignores: [
			'**/dist/**',
			'**/dist-ssr/**',
			'**/coverage/**',
			'*.cjs',
			'*.config.ts',
		],
	},
	...pluginVue.configs['flat/essential'],
	...vueTsEslintConfig(),
	skipFormatting,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'vue/multi-word-component-names': 'off',
			'vue/no-unused-components': 'error',
			'vue/no-undef-components': 'error',
			'no-unused-vars': 'off',
			'no-undef': 'off',
		},
	},
];
