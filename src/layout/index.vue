<template>
	<div class="bg-white dark:bg-black w-full h-screen">
		<Header @logoClick="goHome">
			<template #logo>
				<img src="/src/assets/images/logo.png" alt="" />
			</template>
		</Header>
		<div class="flex">
			<Sidebar />
			<slot></slot>
		</div>
		<Footer></Footer>
	</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

defineOptions({
	name: 'Layout',
});

const router = useRouter();
const goHome = () => {
	router.push('/');
};
</script>
<style lang="scss" scoped></style>
