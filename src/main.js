import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./router/index";
// 引入全局路由
import "./guard/index.js";

let app = createApp(App);

app.use(router);

app.mount("#app");
