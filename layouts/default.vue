<template>
    <div>
      <Header />
      <main>
        <slot /> <!-- 插入页面内容 -->
      </main>
      <Footer msg="Footer"/>
    </div>
  </template>

<script setup>
  import Header from "../components/Header.vue"
  import Footer from "../components/Footer.vue"
</script>