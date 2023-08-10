<template>
    <div>
        Home
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
    </div>
</template>
  
<script setup>
const router = useRouter();

definePageMeta({
  layout: 'no-header-footer',
  index: 1,
});
</script>