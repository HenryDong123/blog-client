<template>
  <div id="login">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <!--<p class="error">当前用户名已注册</p>-->
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" @keyup.enter="onRegister" ></el-input>
    <!--<p class="error">当前用户名已注册</p>-->
    <el-button size="medium" @click="onRegister">立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">去登录</router-link></p>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
