import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
    state() {
        return {
            cart: "cart中的模块",
        };
    },
});
