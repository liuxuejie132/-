<template>
    <fieldset>
        <legend>购物车模块</legend>
        <ul>
            <li v-for="item in shopping" :key="item.id">
                <b>商品：{{ item.title }}</b>
                ---
                <b>价格：{{ item.price }}</b>
                ---
                <b>数量：{{ item.count }}</b>
                ---
                <button @click="del(item)">删除</button>
            </li>
            <li>
                <b>总价：{{ totalPrices }}</b>
            </li>
        </ul>
    </fieldset>
</template>

<script setup>
import { useShop } from "../../store/products/shop";
import { useProduct } from "../../store/products/product";
import { storeToRefs } from "pinia";
let shopStore = useShop();
let productStore = useProduct();
let { shopping, totalPrices } = storeToRefs(shopStore);

console.log(totalPrices);

// 删除购物车数据
let del = (current) => {
    // 减少商品数量
    shopStore.decrease_shopping(current);
    // 增加库存
    productStore.add_inventory(current);
};
</script>

<style scoped>
li {
    margin-bottom: 6px;
}
</style>
