<template>
    <fieldset>
        <legend>登录页</legend>
        账号：
        <input type="text" v-model="username" />
        <br />
        密码：
        <input type="password" v-model="password" @keydown.enter="submit" />
        <br />
        <button @click="submit">登录</button>
    </fieldset>
</template>

<script setup>
// 1. 引用请求接口的文件
import { ref } from "vue";
import * as api from "../../api/login/index";
import { useRouter } from "vue-router";
let router = useRouter();

// 2. 绑定v-model，获取账号和密码
let username = ref("");
let password = ref("");

// 3. 给登录按钮绑定点击事件
let submit = async () => {
    // 3.1 把获取到的账号和密码，提交到后台
    let res = await api.getLogin(username.value, password.value);
    // 3.2 获取到数据后判断一下是否登录成功
    if (res.data.state) {
        // 4. 登录成功后
        //  4.1 本地存储用户的token
        sessionStorage.setItem("userToken", res.data.token);

        //  4.2 跳转页面
        router.push("/");
    } else {
        //3.3 没有登录给予提示
        alert(res.data.msg);
    }
};
</script>
