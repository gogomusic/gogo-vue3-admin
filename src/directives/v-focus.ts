import type { App, Directive, Plugin } from 'vue';

export type VFocusType = Directive<HTMLElement>;

const VFocusPlugin: Plugin = {
	install(app: App<Element>) {
		const directive: VFocusType = {
			mounted(el: HTMLElement) {
				el.focus();
			},
		};
		app.directive('focus', directive);
	},
};

export default VFocusPlugin;
