<template>
    <div>
      <Header />
      <main class="h-screen">
         <!-- 插入页面内容 -->
        <slot />
      </main>
      <Footer msg="Footer"/>
    </div>
  </template>

<script setup>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
</script>