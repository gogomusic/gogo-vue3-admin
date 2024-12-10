// https://juejin.cn/post/7081455607370219556?searchId=20241210094117FB703858E874E1BC3538
import { defineComponent, ref } from 'vue';
import './loading.scss';

export default defineComponent({
	name: 'VLoading',
	setup() {
		const title = ref('');
		const setTitle = (newTitle: string) => {
			title.value = newTitle;
		};

		return { title, setTitle };
	},
	render() {
		return (
			<div class="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(255,255,255,.9)] z-[2000] transition-opacity duration-300">
				<div class="absolute w-full top-1/2 -translate-y-1/2 flex flex-col items-center">
					<div class="lds-hourglass" title="loading..."></div>
					{this.title && (
						<p class="text-sm text-blue-300 mt-1 font-thin text-center">
							{this.title}
						</p>
					)}
				</div>
			</div>
		);
	},
});
