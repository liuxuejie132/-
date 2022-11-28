import { defineStore } from "pinia";
import * as api from "../../api/products/index";

export const useProduct = defineStore("product", {
    state() {
        return {
            products: [], // 接收数据
        };
    },

    actions: {
        // 获取商品列表数据
        async get_productData() {
            try {
                let res = await api.fetchData();
                // console.log(res.data.data);

                // 获取到数据,传递到state
                this.products = res.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        // 减少库存
        decrease_inventory(current) {
            let target = this.products.find((item) => item.id === current.id);

            // 让库存减少
            target.inventory--;
        },
        // 增加库存
        add_inventory(current) {
            // 查找该条数据，让其库存增加
            let target = this.products.find((item) => item.id === current.id);

            target.inventory++;
        },
    },
});
