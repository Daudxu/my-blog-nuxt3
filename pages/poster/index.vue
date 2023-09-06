<template>
    <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        <div class= "space-y-3 infinite-scroll" ref="scrollContainer" >
            <div v-for="(item, index) in lists" :key="index" class="p-4 rounded shadow mb-4">
                <div class="flex items-center space-x-4">
                <img :src="avatar" alt="User Avatar" class="w-12 h-12 rounded-full">
                <div>
                    <p class="font-semibold">{{ item.user.nickname }}</p>
                    <p class="text-gray-500 text-sm">{{ item.updated_at }}</p>
                </div>
                </div>
                <p class="mt-2 flex" v-html="replaceFace(item.content)"></p>
                <div class="flex space-x-2" v-if="item.image.length > 0" >
                  <el-image
                    v-for="(row, idx) in item.image" 
                    class="mt-4 rounded w-20 h-20"
                    :key = "idx"
                    :src="row"
                    :zoom-rate="1.2"
                    :preview-src-list="item.image"
                    :initial-index="4"
                    fit="cover"
                  />
                </div>
                <div class="flex mt-3" v-if="item.video" >
                    <video class="w-[30%]" muted loop autoplay :src="item.video" :controls="true" />               
                </div>
                <div class="flex py-3">

                  <div class="flex justify-center items-center space-x-1">
                    <svg class="fill-current text-gray-500  dark:fill-current dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/></svg>
                    <span>{{item.click_actual}}</span>
                  </div>

                  <div class="flex justify-center items-center px-3 space-x-1 cursor-pointer" @click="handleClickDetail(item.id)">
                    <svg class="fill-current text-gray-500  dark:fill-current dark:text-gray-100" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
                    <span>{{item.comments_count}}</span>
                  </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~~/stores/useUserStore'
import { replaceFace } from '@/utils/tools'
const store = useUserStore();
const router = useRouter()

const avatar = computed(() => store.userinfo.avatar)
const { posterApi } = useApi()

const isClient = process.client; // 检查是否在客户端环境
const isServer = process.server; // 检查是否在服务器端环境

const scrollContainer = ref(null);
const currentPage = ref(1)
const pageSize = 10
const lists = ref([])
const loading = ref(false)
const totalPages = ref(0)

const loadData = async () => {
  if(process.client) {
      loading.value = true
      const arr = {
        "page_no": currentPage.value,
        "page_size": pageSize
      }
      const response = await posterApi.lists(arr)
      totalPages.value = Math.ceil(response.data.count / pageSize)
      lists.value = [...lists.value, ...response.data.lists]
      currentPage.value++
      loading.value = false
    }
} 
 
  const handleScroll = () => {
        if( currentPage.value <= totalPages.value) {
          const container = scrollContainer.value
          // const { scrollTop, scrollHeight, clientHeight } = container
          // if (scrollTop + clientHeight >= scrollHeight && !loading.value) {
          //   loadData()
          // }
          if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;
            const scrollBottom = scrollHeight - (scrollTop + clientHeight);
            if (scrollBottom <= 50 && !loading.value) {
              loadData();
            }
          }
        }
  }

  const handleClickDetail = (id)=> {
      router.push({ path: "/poster/"+id
      })
  }

  onMounted(async ()=>{
      if(isClient) {
          await nextTick();
          await loadData()
          window.addEventListener('scroll', handleScroll)  
      }
  })

  onUnmounted(() => {
    if(isClient) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

</script>