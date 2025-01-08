import Cookies from 'js-cookie';

export const TokenKey = 'authorized-token';

/** 格式化token（jwt格式）
 * @description 在token前面加上`Bearer `
 */
export const formatToken = (token: string): string => {
	return 'Bearer ' + token;
};

/** 获取`token` */
export function getToken() {
	return Cookies.get(TokenKey);
}

/** 设置`token` */
export function setToken(token: string) {
	Cookies.set(TokenKey, token.replace('Bearer ', ''));
}

/** 移除`token` */
export function removeToken() {
	Cookies.remove(TokenKey);
}
