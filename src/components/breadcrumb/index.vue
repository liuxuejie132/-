<template>
    <router-link :to="item.path" v-for="item in pathData" :key="item.path">
        {{ item.meta.name }}
        <span>/</span>
    </router-link>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted, watchEffect } from "vue";

let pathData = ref(null);

// 8. 订阅事件
onMounted(() => {
    // 8.1 获取全局实例
    let instance = getCurrentInstance();
    // 8.2  获取app全局添加的属性
    let $bus = instance.appContext.config.globalProperties.$bus;
    // 8.3 获取传递过来的数据
    $bus.$on("breadChange", (input) => {
        pathData.value = input;
    });
});

watchEffect(() => {
    console.log(pathData.value);
});
</script>

<style scoped></style>
