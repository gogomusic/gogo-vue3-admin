/// <reference types="vite/client" />

// https://cn.vitejs.dev/guide/env-and-mode.html
// 为环境变量提供类型定义
interface ImportMetaEnv {
	/** 项目标题 */
	readonly VITE_PROJECT_NAME: string;
	/** 是否使用MOCK数据 */
	readonly VITE_MOCK: 'true' | 'false';
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
