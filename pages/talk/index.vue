<template>
    <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        <div class= "space-y-3">
            <div v-for="(post, index) in posts" :key="index" class="p-4 rounded shadow mb-4 cursor-pointer">
                <div class="flex items-center space-x-4">
                <img :src="post.avatar" alt="User Avatar" class="w-12 h-12 rounded-full">
                <div>
                    <p class="font-semibold">{{ post.username }}</p>
                    <p class="text-gray-500 text-sm">{{ post.timestamp }}</p>
                </div>
                </div>
                <p class="mt-2">{{ post.content }}</p>
                <div class="flex space-x-2">
                    <img v-if="post.image" :src="post.image" alt="Post Image" class="mt-4 rounded">
                    <img v-if="post.image" :src="post.image" alt="Post Image" class="mt-4 rounded">
                </div>
               
            </div>
        </div>
    </div>
</template>

<script setup>
let posts =  [
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
          timestamp: '2 hours ago',
          content: 'Having a great day!',
          image: 'https://via.placeholder.com/100x100',
        },
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
          timestamp: '2 hours ago',
          content: 'Having a great day!',
          image: 'https://via.placeholder.com/100x100',
        },
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
          timestamp: '2 hours ago',
          content: 'Having a great day!',
          image: 'https://via.placeholder.com/100x100',
        },
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
          timestamp: '2 hours ago',
          content: 'Having a great day!',
          image: 'https://via.placeholder.com/100x100',
        },
        {
          username: 'John Doe',
          avatar: 'https://via.placeholder.com/48',
          timestamp: '2 hours ago',
          content: 'Having a great day!',
          image: 'https://via.placeholder.com/100x100',
        }
      ]
</script>