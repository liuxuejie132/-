<template>
    <fieldset>
        <legend>商品模块</legend>
        <ul>
            <li v-for="item in products" :key="item.id">
                <b>商品名称：{{ item.title }}</b>
                ---
                <b>价格：{{ item.price }}</b>
                ---
                <b>库存：{{ item.inventory }}</b>
                ---
                <button @click="add(item)" :disabled="item.inventory === 0">添加</button>
            </li>
        </ul>
    </fieldset>
</template>

<script setup>
import { useProduct } from "../../store/products/product";
import { useShop } from "../../store/products/shop";
import { storeToRefs } from "pinia";
let productStore = useProduct();
// 购物车store
let shopStore = useShop();
let { shopping } = storeToRefs(shopStore);

// 商品解构的数据
let { products } = storeToRefs(productStore);

// 调用actions中的获取商品数据方法
productStore.get_productData();

// 点击添加到购物车
let add = (current) => {
    // 调用添加到购物车
    shopStore.add_products(current);
    // 调用减少库存的方法
    productStore.decrease_inventory(current);
};
</script>

<style scoped>
li {
    margin-bottom: 6px;
}
</style>
