<template>
       <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="image in images" :key="image.id" class="bg-gray-200 p-4 rounded-lg">
            <img :src="image.url" :alt="image.alt" class="w-full h-auto">
        </div>
    </div>

    </div>
</template>

<script setup>
const images =  [
        { id: 1, url: 'https://via.placeholder.com/100x100', alt: 'Image 1' },
        { id: 2, url: 'https://via.placeholder.com/100x100', alt: 'Image 2' },
        { id: 3, url: 'https://via.placeholder.com/100x100', alt: 'Image 3' },
        { id: 1, url: 'https://via.placeholder.com/100x100', alt: 'Image 1' },
        { id: 2, url: 'https://via.placeholder.com/100x100', alt: 'Image 2' },
        { id: 3, url: 'https://via.placeholder.com/100x100', alt: 'Image 3' },
        { id: 1, url: 'https://via.placeholder.com/100x100', alt: 'Image 1' },
        { id: 2, url: 'https://via.placeholder.com/100x100', alt: 'Image 2' },
        { id: 3, url: 'https://via.placeholder.com/100x100', alt: 'Image 3' }
      ]
</script>