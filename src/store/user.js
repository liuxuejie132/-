// 引入pinia
import { defineStore } from "pinia";
// 1. 引入cart模块
import { useCart } from "./cart";

export const useUser = defineStore("users", {
    state() {
        return {
            name: "野猪佩奇",
            count: 18,
            arr: ["睡觉", "听音乐", "emo"],
            data: [],
        };
    },
    getters: {
        // 翻转字符串
        reverseName(state) {
            return state.name.split("").reverse().join("");
        },

        newArr(state) {
            // 将翻转后的名字，push到这个状态中
            state.arr.push(this.reverseName);
            return state.arr;
        },
        // 给getters传递参数
        newCount(state) {
            // 从计算属性的内部返回一个函数，来支持参数的传递

            let newCount = 40;

            // 这么写会失去缓存效果
            return (c) => {
                newCount = state.count + c;
                return newCount;
            };
        },
    },
    actions: {
        async fetch_data(a, b) {
            // 2. 拿取cart模块中的store
            let cartStore = useCart();
            console.log(cartStore.cart);

            try {
                let res = await fetch("/api/data/index.json").then((body) => body.json());

                // 直接修改状态
                this.data = res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
});
