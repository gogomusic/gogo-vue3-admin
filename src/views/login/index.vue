<template>
	<div
		class="sm:min-h-[100vh] sm:p-5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:bg-no-repeat sm:bg-[url('https://dummyimage.com/1920x1080/fff')] sm:bg-[length:100%_100%] p-6 block bg-white dark:bg-black dark:bg-none"
	>
		<I18nIcon
			class="!absolute sm:right-[30px] sm:top-[30px] right-[40px] top-[40px]"
		></I18nIcon>
		<ElCard
			shadow="always"
			class="sm:w-[920px] sm:max-w-full sm:overflow-hidden w-full bg-none shadow-none rounded-none login-card p-5 sm:p-0"
		>
			<div
				class="sm:flex-1 sm:py-9 sm:px-2 sm:bg-[url('https://dummyimage.com/520x462/1681fd/fff.png')] sm:bg-no-repeat sm:bg-bottom sm:bg-cover sm:text-center pt-6 px-3 pb-10 md:pb-[100px] login-body"
			>
				<h1
					class="sm:text-white sm:text-[26px] text-3xl mb-[6px] font-normal tracking-[1.2px] text-center"
				>
					{{ PROJECT_NAME }}
				</h1>
				<h4 class="sm:text-white text-[16px] m-0 font-normal text-center">
					{{ t('layout.project-desc') }}
				</h4>
			</div>
			<div class="sm:w-[400px] sm:shrink-0 sm:pt-8 sm:px-12 w-full">
				<div style="font-size: 24px; margin-bottom: 18px">
					{{ t('login.title') }}
				</div>
				<ElForm
					ref="formRef"
					size="large"
					:model="form"
					:rules="rules"
					@keyup.enter="submit"
				>
					<ElFormItem prop="username">
						<ElInput
							clearable
							v-model="form.username"
							:placeholder="t('login.username')"
							:prefix-icon="User"
						/>
					</ElFormItem>
					<ElFormItem prop="password">
						<ElInput
							show-password
							v-model="form.password"
							:placeholder="t('login.password')"
							:prefix-icon="Lock"
						/>
					</ElFormItem>
					<ElFormItem prop="code">
						<div class="w-full flex items-center login-captcha-group">
							<ElInput
								clearable
								v-model="form.code"
								:placeholder="t('login.code')"
								:prefix-icon="ProtectIcon"
							/>
							<div
								class="w-[108px] h-10 ml-2 rounded border border-[hsla(0, 0%, 60%, 0.46)] transition-[border] delay-[2s] bg-white overflow-hidden cursor-pointer"
								@click="refreshCaptcha"
							>
								<img
									v-if="captcha"
									:src="captcha"
									class="w-full h-full object-contain block hover:border-[hsla(0, 0%, 60%, 0.8)]"
								/>
								<div class="h-full" v-else v-loading="true"></div>
							</div>
						</div>
					</ElFormItem>
					<ElFormItem>
						<ElCheckbox v-model="form.remember">
							{{ t('login.remember') }}
						</ElCheckbox>
					</ElFormItem>
					<ElFormItem>
						<ElButton
							size="large"
							type="primary"
							:loading="loading"
							style="width: 100%"
							@click="submit"
						>
							{{ t('login.login') }}
						</ElButton>
					</ElFormItem>
				</ElForm>
			</div>
		</ElCard>
	</div>
</template>

<script lang="ts" setup>
// import LoginApi from '@/api/login';
import ProtectIcon from '@/components/icons/ProtectIcon.vue';
import { PROJECT_NAME } from '@/config/setting';
// import { usePageTab } from '@/hooks/usePageTab';
import UserApi from '@/api/user';
import I18nIcon from '@/layout/components/I18nIcon.vue';
// import { getToken, removeToken, setToken } from '@/utils/token';
import { Lock, User } from '@element-plus/icons-vue';
import {
	ElButton,
	ElCard,
	ElCheckbox,
	ElForm,
	ElFormItem,
	ElInput,
	type FormInstance,
	type FormRules,
} from 'element-plus';
import { computed, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { useRouter } from 'vue-router';

const { t } = useI18n();
// const { currentRoute } = useRouter();
const loading = ref(false);
const formRef = ref<FormInstance>();
const captcha = ref('');
const form = reactive({
	username: 'admin',
	password: '123456',
	code: '0000',
	remember: true,
});

const rules = computed<FormRules>(() => {
	return {
		username: [
			{
				required: true,
				message: t('login.username'),
				type: 'string',
				trigger: 'blur',
			},
		],
		password: [
			{
				required: true,
				message: t('login.password'),
				type: 'string',
				trigger: 'blur',
			},
		],
		code: [
			{
				required: true,
				message: t('login.code'),
				type: 'string',
				trigger: 'blur',
			},
		],
	};
});

/* 提交 */
const submit = () => {
	// formRef.value?.validate?.(async valid => {
	// 	if (!valid) {
	// 		return false;
	// 	}
	// 	loading.value = true;
	// 	const { code, message, data } = await LoginApi.login(form);
	// 	loading.value = false;
	// 	if (code === 200) {
	// 		if (data?.access_token) setToken(data.access_token);
	// 		else removeToken();
	// 		ElMessage.success(message);
	// 		goHome();
	// 	} else {
	// 		refreshCaptcha();
	// 	}
	// });
};

/* 获取验证码 */
const refreshCaptcha = async () => {
	const {
		data: { code, data },
	} = await UserApi.getCaptcha();
	if (code === 200) {
		captcha.value = data || '';
	}
};

onMounted(() => {
	refreshCaptcha();
	// if (getToken()) {
	// 	goHomeRoute();
	// }
});

/* 跳转到首页 */
// const goHome = () => {
// 	// const { query } = unref(currentRoute);
// 	// goHomeRoute(query.from as string);
// };
</script>

<style lang="scss" scoped>
.login-card {
	:deep(.el-card__body) {
		display: flex;
		padding: 0;
		height: 462px;
	}
}
.login-body {
	:deep(.el-checkbox) {
		height: auto;
		.el-checkbox__label {
			color: inherit;
		}
	}
	:deep(.el-input__prefix-inner > .el-icon) {
		margin-right: 12px;
		transform: scale(1.26) translateY(-1px);
	}
}

// 验证码
.login-captcha-group {
	:deep(.el-input) {
		flex: 1;
	}
	:deep(.el-input__prefix-inner > .el-icon) {
		transform: scale(1.16);
	}
}

// 移动端适配
@media screen and (max-width: 640px) {
	.login-card {
		:deep(.el-card__body) {
			display: block;
			height: auto;
		}
	}
}
</style>
