import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/test',
			name: 'test',
			component: () => import('@/views/test/index.vue'),
		},
		{
			path: '/animate',
			name: 'animate',
			component: () => import('@/views/animate/index.vue'),
		},
		{
			path: '/404',
			name: '404',
			component: () => import('@/views/exception/404/index.vue'),
		},
		{
			path: '/403',
			name: '403',
			component: () => import('@/views/exception/403/index.vue'),
		},
		{
			path: '/500',
			name: '500',
			component: () => import('@/views/exception/500/index.vue'),
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			component: () => import('@/views/exception/404/index.vue'),
		},
	],
});

export default router;
