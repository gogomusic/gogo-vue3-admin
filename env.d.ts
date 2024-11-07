/// <reference types="vite/client" />

// https://cn.vitejs.dev/guide/env-and-mode.html
// 为环境变量提供类型定义
interface ImportMetaEnv {
	/** 项目标题 */
	readonly VITE_PROJECT_NAME: string;
	/** 接口地址 */
	readonly VITE_API_BASE_URL: string;
	/** Apifox 云端 Mock 的 Token */
	readonly VITE_API_APIFOX_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
