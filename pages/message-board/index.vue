<template>
    <div class="w-[1024px] h-[700px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        
        <!-- <h1 class="text-2xl font-semibold mb-4">留言板</h1> -->
        <div class="w-full  p-6 bg-white rounded-lg shadow-md">
 
        <form class="mt-4 pb-5">
            <textarea class="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="输入留言"></textarea>
            <button type="submit" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">提交</button>
        </form>
        <div class="space-y-4">
            <div> 
                <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                    <p class="text-gray-800 font-semibold">John Doe</p>
                    <p class="text-gray-500 text-sm">2 小时前</p>
                    </div>
                </div>
                <p class="text-gray-800 py-3">这是留言内容...</p>
                <hr class="my-4 border-t">
            </div>
            <div> 
                <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                    <p class="text-gray-800 font-semibold">John Doe</p>
                    <p class="text-gray-500 text-sm">2 小时前</p>
                    </div>
                </div>
                <p class="text-gray-800 py-3">这是留言内容...</p>
                <hr class="my-4 border-t">
            </div>
        </div>
        
        

  </div>

    </div>
</template>    

<script setup>
import { ref } from 'vue'

const messages = ref([
    {'name':'joe', 'message':'joe'},
    {'name':'joe', 'message':'joe'},
    {'name':'joe', 'message':'joe'}
])
const newMessage = ref(null)

</script>