import { defineStore } from "pinia";
import { ref } from "vue";
import { getLoginUserUsingGet } from "@/api/userController";
import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 登录用户信息全局状态
 */
export const useLoginUserStore = defineStore(
  "loginUser",
  () => {
    const loginUser = ref<API.LoginUserVO>({
      userName: "zwf",
    });
    const token = ref<string>("");

    function setToken(newToken: string) {
      token.value = newToken;
    }

    function setLoginUser(newLoginUser: API.LoginUserVO) {
      loginUser.value = newLoginUser;
    }

    async function fetchLoginUser() {
      try {
        const res = await getLoginUserUsingGet();
        if (res.data.code === 0 && res.data.data) {
          loginUser.value = res.data.data;
        } else {
          loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN };
        }
      } catch (error) {
        loginUser.value = { userRole: ACCESS_ENUM.NOT_LOGIN };
      }
    }

    return { loginUser, token, setToken, setLoginUser, fetchLoginUser };
  },
  {
    persist: {
      key: "qa-token",
      pick: ["token"],
    },
  }
);
