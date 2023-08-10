<template>
    <div>posts</div>
</template>

<!-- pages/post/[id].vue -->
<script setup>
definePageMeta({
  validate: async (route) => {
    const nuxtApp = useNuxtApp()
    // Check if the id is made up of digits
    console.log(route.params.id)
    // console.log(nuxtApp)
    return /^\d+$/.test(route.params.id)
  }
})
// console.log("validate", validate)
</script>
