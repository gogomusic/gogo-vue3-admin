declare module 'element-plus/dist/locale/zh-cn.mjs';
declare module 'element-plus/dist/locale/zh-tw.mjs';
declare module 'element-plus/dist/locale/en.mjs';

declare type Lang = 'en' | 'zh-CN' | 'zh-TW';

declare namespace Api {
	interface Response<T = any> {
		code: 200 | 401 | 403 | 404;
		data?: T;
		msg: string;
	}
}
