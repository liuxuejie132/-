import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    {
        path: "/",
        component: () => import("../page/HomePage/index.vue"),
        name: "/",
        // 5. 添加路由元信息
        meta: {
            name: "首页",
        },
        children: [
            {
                path: "friend",
                name: "friend",
                component: () => import("../page/HomePage/friend/index.vue"),
                meta: {
                    name: "朋友",
                },
            },
            {
                path: "music",
                name: "misic",
                component: () => import("../page/HomePage/music/index.vue"),
                meta: {
                    name: "音乐",
                },
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        meta: {
            name: "登录",
        },
        component: () => import("../page/login/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
