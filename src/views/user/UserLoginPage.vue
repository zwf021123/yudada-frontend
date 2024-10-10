<template>
  <div id="userLoginPage">
    <h2 style="margin-bottom: 16px">
      用户{{ mode === "login" ? "登录" : "注册" }}
    </h2>
    <a-form
      ref="formRef"
      :model="form"
      :rules="formRule"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
    >
      <a-form-item
        field="userAccount"
        label="账号"
        validate-trigger="blur"
        :hide-asterisk="true"
      >
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item
        field="userPassword"
        tooltip="密码不小于 8 位"
        label="密码"
        validate-trigger="blur"
        :hide-asterisk="true"
      >
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
          @keyup.enter="handleSubmit"
        />
      </a-form-item>
      <a-form-item
        v-if="mode === 'register'"
        field="checkPassword"
        tooltip="确认密码不小于 8 位"
        label="确认密码"
        :hide-asterisk="true"
      >
        <a-input-password
          v-model="form.checkPassword"
          placeholder="请输入确认密码"
          @keyup.enter="handleSubmit"
        />
      </a-form-item>
      <a-form-item>
        <div
          style="
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
          "
        >
          <a-button
            type="primary"
            style="width: 120px"
            @click.prevent="handleSubmit"
          >
            {{ mode === "login" ? "登录" : "注册" }}
          </a-button>
          <a-link @click="toggleMode">{{
            mode === "login" ? "还没有账号？去注册" : "已有账号？去登录"
          }}</a-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from "vue";
import API from "@/api";
import {
  userLoginUsingPost,
  userRegisterUsingPost,
} from "@/api/userController";
import { useLoginUserStore } from "@/store/userStore";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

type modeType = "login" | "register";

const loginUserStore = useLoginUserStore();
const router = useRouter();

const mode: Ref<modeType> = ref("login");

const formRef = ref();
const form = reactive({
  userAccount: "",
  userPassword: "",
  checkPassword: "",
} as API.UserRegisterRequest);

const formRule = {
  userAccount: [
    {
      required: true,
      message: "请输入您的账号",
    },
  ],
  userPassword: [
    {
      required: true,
      message: "请输入您的密码",
    },
    {
      minLength: 8,
      message: "密码最少为8位",
    },
  ],
  checkPassword: [
    {
      required: true,
      message: "请确认您的密码",
    },
    {
      validator: (value: string, cb) => {
        if (value !== form.userPassword) {
          cb("您两次输入的密码不正确");
        } else {
          cb();
        }
      },
    },
  ],
};

const toggleMode = () => {
  formRef.value.resetFields();
  formRef.value.clearValidate();
  mode.value = mode.value === "login" ? "register" : "login";
};

/**
 * 提交
 */
const handleSubmit = async () => {
  const validateValue = await formRef.value.validate();
  if (validateValue) {
    return;
  }
  mode.value === "login" ? loginFn() : registerFn();
};

const loginFn = async () => {
  try {
    const res = await userLoginUsingPost(form);
    if (res.data.code === 0) {
      await loginUserStore.fetchLoginUser();
      message.success("登录成功");
      router.push({
        path: "/",
        replace: true,
      });
    } else {
      message.error("登录失败，" + res.data.message);
    }
  } catch (e) {
    message.error("登录失败，" + e);
  }
};

const registerFn = async () => {
  try {
    const res = await userRegisterUsingPost(form);
    if (res.data.code === 0) {
      message.success("注册成功");
      toggleMode();
    } else {
      message.error("注册失败，" + res.data.message);
    }
  } catch (e) {
    message.error("注册失败，" + e);
  }
};
</script>
