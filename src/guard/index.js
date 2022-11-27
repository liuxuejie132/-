import router from "../router";

// 全局前置路由
router.beforeEach((to, from) => {
    // 5. 获取存储的token，用于判断用户是否登录成功
    let isLock = sessionStorage.getItem("userToken");
    console.log(to);

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
