<template>
    <div>
      <Header />
      <main class="flex justify-center">
         <!-- 插入页面内容 -->
        <slot />
      </main>
    </div>
  </template>
<script setup>
  import Header from "../components/Header.vue"
</script>