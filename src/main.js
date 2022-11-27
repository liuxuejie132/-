import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./router/index";
// 引入全局路由
import "./guard/index.js";
// 1. 引入面包屑组件
import breadCrumb from "./components/breadcrumb/index.vue";
// 7.1 引入事件总线
import bus from "./tool/eventBus/index";

let app = createApp(App);

// 2. 全局注册面包屑组件,然后在app中展示
app.component("breadCrumb", breadCrumb);

// 7.2 引入之后，挂载到全局中去
app.config.globalProperties.$bus = bus;

app.use(router);

app.mount("#app");
