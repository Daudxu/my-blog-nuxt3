<template>
    <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        <div class= "space-y-3 infinite-scroll" ref="scrollContainer" >
          <div @click="refresh">
                    123123123
          </div>
         <div v-if="pending"> {{ data.data.data.content }}</div>
          {{ $route.params.id }}
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '~~/stores/useUserStore'
import { replaceFace } from '@/utils/tools'
const store = useUserStore();
const route = useRoute()
// const router = useRouter()

const avatar = computed(() => store.userinfo.avatar)
const { posterApi } = useApi()

const isClient = process.client; // 检查是否在客户端环境
const isServer = process.server; // 检查是否在服务器端环境

const scrollContainer = ref(null);

const appConfig = useAppConfig()

if(isServer){

  const { data, pending, error, refresh } = await useAsyncData(
  'mountains',
  () => posterApi.detail({id:route.params.id})
  
  )
  console.log("===============start================")
  console.log("data", data.value.data)
  console.log("===============end==================")
}




const loadData = async () => {
  if(isServer) {
    // asyncData({ params }) {
    //   const id = params.id; // 获取名为 "id" 的动态参数值
    // }
      // console.log("===============start================")
      // // const arr = {
      // //   "id": 1
      // // }



      // useSeoMeta({
      //   title: 'My Amazing Site',
      //   ogTitle: 'My Amazing Site',
      //   description: 'This is my amazing site, let me tell you all about it.',
      //   ogDescription: 'This is my amazing site, let me tell you all about it.',
      //   ogImage: 'https://example.com/image.png',
      //   twitterCard: 'summary_large_image',
      // })
      // // console.log("context.params", context.params)
      // // const response = await posterApi.detail(arr)
      
      // console.log("===============end==================")
    }
} 

loadData()
 
//  async asyncData({ params }) {
//     // 从 params 对象中获取动态参数
//     const userId = params.id;

    // 在这里可以使用 userId 进行数据加载或其他服务器端操作
    // // 例如，根据 userId 获取用户信息
    // const user = await getUserById(userId);

    // // 将用户数据返回给页面组件
    // return { user };
  // },/


</script>