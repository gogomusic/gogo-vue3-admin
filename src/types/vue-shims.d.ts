import { VFocusType } from '@/directives/v-focus';
import { VLoadingType } from '@/directives/v-loading';

declare module 'vue' {
	export interface ComponentCustomProperties {
		/** 自动聚焦 */
		vFocus: VFocusType;
		/** Loading 效果。示例：`v-loading:加载中="true"`*/
		vLoading: VLoadingType;
	}
}
export {};
