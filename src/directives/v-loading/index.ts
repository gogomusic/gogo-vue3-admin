import {
	createApp,
	type App,
	type Directive,
	type DirectiveBinding,
	type Plugin,
} from 'vue';
import Loading from './loading';

const relativeCls = 'v-loading-parent--relative';
type ElType = HTMLElement & { instance: any };
export type VLoadingType = Directive<ElType>;

const VLoadingPlugin: Plugin = {
	install(app: App<Element>) {
		const directive: VLoadingType = {
			mounted(el: ElType, binding: DirectiveBinding) {
				const nweApp = createApp(Loading);
				const instance = nweApp.mount(document.createElement('div'));

				el.instance = instance;
				const title = binding.arg;

				if (typeof title !== 'undefined') {
					(instance as any).setTitle(title);
				}
				if (
					typeof binding.value === 'object' &&
					binding.value !== null &&
					binding.value.text
				) {
					(instance as any).setTitle(binding.value.text);
				}
				if (binding.value) {
					if (typeof binding.value === 'boolean') append(el);
					if (typeof binding.value === 'object' && binding.value !== null) {
						if (binding.value.value) append(el);
					}
				}
			},
			updated(el: ElType, binding: DirectiveBinding) {
				const title = binding.arg;

				if (typeof title !== 'undefined') {
					el.instance.setTitle(title);
				}

				if (binding.value !== binding.oldValue) {
					// bool的情况
					if (typeof binding.value === 'boolean') {
						if (binding.value) append(el);
						else remove(el);
					}
					// object的情况
					if (typeof binding.value === 'object' && binding.value !== null) {
						if (binding.value.value) append(el);
						else remove(el);
					}
				}
			},
		};
		app.directive('loading', directive);
	},
};

function append(el: ElType) {
	const style = getComputedStyle(el);
	if (['absolute', 'fixed', 'relative'].indexOf(style.position) === -1) {
		addClass(el, relativeCls);
	}

	el.appendChild(el.instance.$el);
}

function remove(el: ElType) {
	removeClass(el, relativeCls);
	el.removeChild(el.instance.$el);
}

function addClass(el: ElType, className: string) {
	// 如果当前元素样式列表中没有className
	if (!el.classList.contains(className)) {
		el.classList.add(className);
	}
}

function removeClass(el: ElType, className: string) {
	el.classList.remove(className);
}

export default VLoadingPlugin;
