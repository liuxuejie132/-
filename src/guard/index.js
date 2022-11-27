import router from "../router";
import $bus from "../tool/eventBus/index";

// 全局前置路由
router.beforeEach((to, from) => {
    // 5. 获取存储的token，用于判断用户是否登录成功
    let isLock = sessionStorage.getItem("userToken");
    // console.log(to);

    // 6. 如果没有token
    if (!isLock) {
        // 6.1 那就不让它进入到其它页面
        if (to.path !== "/login") {
            return {
                path: "/login",
            };
        }
    }
});

// 全局后置钩子
router.afterEach((to, from) => {
    // console.log(to);
    // 6. 获取到to.matched数据，并传递到面包屑组件，接下来需要利用eventBus，传递数据
    // 9. 上面的6只是说明一下，接下来发布订阅
    $bus.$emit("breadChange", to.matched);
});
