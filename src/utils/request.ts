import { API_BASE_URL } from '@/config/setting';
import axios from 'axios';
import { formatToken, getToken } from './auth';

/** 创建axios实例 */
const request = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10 * 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});

// 添加请求拦截器
request.interceptors.request.use(
	config => {
		const token = getToken();
		if (token) {
			config.headers.Authorization = formatToken(token);
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// 添加响应拦截器
request.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

export default request;
