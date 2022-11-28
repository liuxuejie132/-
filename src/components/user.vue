<template>
    <fieldset>
        <legend>user组件</legend>
        <h2>姓名：{{ name }}</h2>
        <h2>数量：{{ count }}</h2>
        <h2>{{ arr }}</h2>
        <!-- <button @click="rest">点击重置</button> -->
        <button @click="update">点🐓修改</button>
    </fieldset>
</template>

<script setup>
import { useUser } from "../store/user";
import { storeToRefs } from "pinia";
let userStore = useUser();

// 解构state，这样解构会丢失响应性，使用storeToRefs来保持响应性
let { name, count, arr } = storeToRefs(userStore);

// 第一种：直接修改state
// setTimeout(() => {
//     // 两秒后修改state中的name
//     name.value = "章鱼哥🐙";
// }, 2000);

// 第二种：使用$patch来修改状态，这种修改方式可以提高性能
let update = () => {
    // 这种写法对于复杂数据类型来说，数据不好处理，因为要添加一个新的数据的时候，需要把原来的数据和新的数据合并，比较麻烦
    // userStore.$patch({
    //     name: "派大星⭐",
    //     count: count.value + 1,
    //     arr: [...arr.value, 1, 2, 3],
    // });

    // $patch优化的使用方式
    userStore.$patch((state) => {
        state.name = "派大星⭐";
        state.count = state.count + 1;
        state.arr.push(state.count);
    });
};

// 重置状态
let rest = () => {
    userStore.$reset();
};

// 订阅状态变化
userStore.$subscribe((mutation, state) => {
    console.log("mutation", mutation);
    console.log("state", state);
});

// console.log(userStore);
</script>
