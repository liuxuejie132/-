import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
    state() {
        return {
            shopping: [], // 购物车数据
        };
    },
    getters: {
        totalPrices(state) {
            let res = state.shopping.reduce((total, item) => {
                return (total += item.price * item.count);
            }, 0);

            return res.toFixed(2);
        },
    },
    actions: {
        // 添加商品
        add_products(current) {
            // 需要先判断当前的数组中有没有该条数据
            let target = this.shopping.find((item) => item.id === current.id);

            if (!target) {
                // 如果没有就添加一个新的进去
                let obj = {
                    id: current.id,
                    title: current.title,
                    price: current.price,
                    count: 1,
                };
                this.shopping.push(obj);
            } else {
                // 有的话商品数量+1
                target.count++;
            }
        },
        // 点击购物车删除数量减少
        decrease_shopping(current) {
            // 查找该条数据，让其数量减少
            let target = this.shopping.find((item) => item.id === current.id);

            target.count--;

            // 当数量为零的时候，移除该条数据
            this.shopping = this.shopping.filter((item) => item.count !== 0);
        },
    },
});
