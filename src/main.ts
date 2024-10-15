import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import persist from "pinia-plugin-persistedstate";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";

import router from "./router";
import "@/access";

const pinia = createPinia();
pinia.use(persist);

createApp(App)
  .use(ArcoVue)
  .use(ArcoVueIcon)
  .use(pinia)
  .use(router)
  .mount("#app");
