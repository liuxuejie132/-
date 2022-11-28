<template>
    <fieldset>
        <legend>other组件</legend>
        <h2>{{ reverseName }}</h2>
        <h2>{{ newArr }}</h2>
    </fieldset>
</template>
<script setup>
import { useUser } from "../store/user";
import { storeToRefs } from "pinia";
let userStore = useUser();
let { reverseName, newArr } = storeToRefs(userStore);

// 调用actions中的方法
userStore.fetch_data(1, 2); // {data: Array(3)}
</script>
