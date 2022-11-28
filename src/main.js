import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./router/index";
// 1. 引入pinia
import { createPinia } from "pinia";

let app = createApp(App);

app.use(router);

// 2. 注入到每一个组件中去
app.use(createPinia());

app.mount("#app");
