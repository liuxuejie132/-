<template>
    <fieldset>
        <legend>主页</legend>
        <h1>我的</h1>
        <router-link to="friend">朋友</router-link>
        |
        <router-link to="music">音乐</router-link>
        <router-view></router-view>
    </fieldset>
</template>
