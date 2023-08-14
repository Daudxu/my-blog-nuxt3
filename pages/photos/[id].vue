<template>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="image in images" :key="image.id" class="bg-gray-200 p-4 rounded-lg">
            <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
    </div>
</template>

<script setup>
const images =  [
        { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
        { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
        { id: 3, url: 'https://example.com/image3.jpg', alt: 'Image 3' }
      ]
</script>