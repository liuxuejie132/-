import { createRouter, createWebHashHistory } from "vue-router";

let routes = [
    {
        path: "/",
        component: () => import("../page/HomePage/index.vue"),
        children: [
            {
                path: "friend",
                name: "friend",
                component: () => import("../page/HomePage/friend/index.vue"),
            },
            {
                path: "music",
                name: "misic",
                component: () => import("../page/HomePage/music/index.vue"),
            },
        ],
    },
    {
        path: "/login",
        component: () => import("../page/login/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
