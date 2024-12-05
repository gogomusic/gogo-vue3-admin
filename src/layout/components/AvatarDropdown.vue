<script setup lang="ts">
import { SwitchButton, UserFilled } from '@element-plus/icons-vue';
import {
	ElAvatar,
	ElButton,
	ElDropdown,
	ElDropdownItem,
	ElDropdownMenu,
	ElIcon,
} from 'element-plus';

defineOptions({
	name: 'AvatarDropdown',
});
</script>

<template>
	<el-dropdown>
		<span class="outline-none">
			<el-avatar :size="24" :icon="UserFilled" />
		</span>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item
					><div class="w-full flex items-center">
						<el-icon> <UserFilled /> </el-icon>基本信息
					</div></el-dropdown-item
				>
				<el-dropdown-item
					><div class="w-full flex items-center">
						<el-icon><SwitchButton /></el-icon>
						退出登录
					</div></el-dropdown-item
				>
				<el-dropdown-item divided
					><el-button type="primary">企业管理后台</el-button></el-dropdown-item
				>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<style lang="scss" scoped></style>
