<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="titleBar">
            <img class="logo" src="../assets/logo.png" />
            <div class="title">德答答</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <!-- {{ loginUserStore.loginUser }} -->
    <a-col flex="100px">
      <a-dropdown trigger="click">
        <a-avatar :size="32" :style="{ marginRight: '8px', cursor: 'pointer' }">
          <img
            alt="avatar"
            :src="
              loginUserStore.loginUser.userAvatar ||
              require('@/assets/defaultAvatar.png')
            "
          />
        </a-avatar>
        <template #content>
          <a-doption>
            <!-- <a-space @click="switchRoles"> -->
            <a-space>
              <icon-tag />
              <span>
                <!-- {{ $t("messageBox.switchRoles") }} -->
                我的应用
              </span>
            </a-space>
          </a-doption>
        </template>
      </a-dropdown>
      <div v-if="loginUserStore.loginUser.id">
        {{ loginUserStore.loginUser.userName ?? "无名" }}
      </div>
      <div v-else>
        <a-button type="primary" href="/user/login">登录/注册</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useLoginUserStore } from "@/store/userStore";
import checkAccess from "@/access/checkAccess";

const loginUserStore = useLoginUserStore();

const router = useRouter();
// 当前选中的菜单项
const selectedKeys = ref(["/"]);
// 路由跳转时，自动更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

// 展示在菜单栏的路由数组
const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    // 根据权限过滤菜单
    if (!checkAccess(loginUserStore.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});

// 点击菜单跳转到对应页面
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
#globalHeader {
}

.titleBar {
  display: flex;
  align-items: center;
}

.title {
  margin-left: 16px;
  color: black;
}

.logo {
  height: 48px;
}
</style>
