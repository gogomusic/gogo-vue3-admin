import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import HomeView from '../views/HomeView.vue';
import Login from '../views/login/index.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: Layout,
			redirect: '/home',
			children: [
				{
					path: 'home',
					name: 'Home',
					component: HomeView,
					meta: {
						title: '首页',
					},
				},
			],
		},
		{
			path: '/login',
			name: 'Login',
			component: Login,
			meta: {
				title: '登录',
			},
		},
		{
			path: '/demo',
			name: 'Demo',
			component: () => import('@/views/demo/index'),
		},
		{
			path: '/404',
			name: '404',
			component: () => import('@/views/error/404/index.vue'),
		},
		{
			path: '/403',
			name: '403',
			component: () => import('@/views/error/403/index.vue'),
		},
		{
			path: '/500',
			name: '500',
			component: () => import('@/views/error/500/index.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/error/404/index.vue'),
		},
	],
});

export default router;
