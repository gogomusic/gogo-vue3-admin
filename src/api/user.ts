import request from '@/utils/request';

const UserApi = {
	/** 获取验证码 */
	getCaptcha: async () =>
		await request.get<Api.Response<string>>(
			'/user/captcha?apifoxToken=MQwTcqCFuBQxXhbwpHEFf'
		),
};

export default UserApi;
