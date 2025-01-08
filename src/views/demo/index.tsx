import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
	name: 'Demo',
	setup() {
		const num = ref(0);
		const add = () => void num.value++;
		watch(num, newVal => {
			console.log(newVal);
		});
		return { num, add };
	},
	render() {
		return (
			<div>
				<h1>测试</h1>
				<button onClick={this.add}>+1</button>
				<p>{this.num}</p>
			</div>
		);
	},
});
