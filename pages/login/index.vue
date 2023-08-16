<template>
    <div class="login-form">
      <el-form :model="loginForm" ref="loginForm" label-position="top">
        <el-form-item label="Email or Username">
          <el-input v-model="loginForm.identifier" placeholder="Email or Username"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="loginForm.password" type="password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.remember">Remember me</el-checkbox>
          <a href="#" @click="handleForgotPassword">Forgot Password?</a>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script setup>
  const router = useRouter();
  
  definePageMeta({
    layout: 'no-header-footer',
    index: 1,
  });
  </script>