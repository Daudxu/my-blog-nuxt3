<template>
    <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(album, index) in albums" :key="index" class="rounded-lg overflow-hidden shadow-md">
                <div class="aspect-w-16 aspect-h-9 bg-slate-200">
                    <div class="flex items-center justify-center h-full">
                    <div class="w-48 h-32">
                        <img :src="album.cover" :alt="album.title" class="object-contain w-full h-full" />
                    </div>
                    </div>
                </div>
            <div class="p-4 bg-white">
                <h2 class="text-xl font-semibold">{{ album.title }}</h2>
                <p class="text-gray-500">{{ album.description }}</p>
            </div>
            </div>
        </div>
    </div>
</template>     

<script setup>
const { laboratoryApi } = useApi()
const albums =  [
        {
          title: '相册 1',
          description: '这是相册 1 的描述。',
          cover: 'https://via.placeholder.com/200x300',
        },
        {
          title: '相册 2',
          description: '这是相册 2 的描述。',
          cover: 'https://via.placeholder.com/100x100',
        },
        {
          title: '相册 2',
          description: '这是相册 2 的描述。',
          cover: 'https://via.placeholder.com/100x100',
        },
        {
          title: '相册 2',
          description: '这是相册 2 的描述。',
          cover: 'https://via.placeholder.com/100x100',
        },
        {
          title: '相册 2',
          description: '这是相册 2 的描述。',
          cover: 'https://via.placeholder.com/100x100',
        },
        {
          title: '相册 2',
          description: '这是相册 2 的描述。',
          cover: 'https://via.placeholder.com/100x100',
        },
      ];
</script>