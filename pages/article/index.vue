<template>
    <div class="w-[1024px]  mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
          
        <div class="flex justify-center">
            <div class="max-w-[380px]">
                <div class="mb-4 flex">
                    <input class="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-500" type="text" placeholder="">
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-3">搜索</button>
                </div>
                <div class="mb-4 flex">
                    <div class="font-sans text-sm flex-shrink-0">热门搜索: </div>
                    <div class="ml-3 flex flex-wrap  md:flex-row">
                        <span class="bg-blue-100 cursor-pointer mb-2 md:mb-0 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                        <span class="bg-gray-100 cursor-pointer mb-2 md:mb-0 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                        <span class="bg-red-100 cursor-pointer mb-2 md:mb-0 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Red</span>
                        <span class="bg-green-100 cursor-pointer mb-2 md:mb-0 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Green</span>
                        <span class="bg-yellow-100 cursor-pointer mb-2 md:mb-0 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Yellow</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ================== -->
        <div class="flex">
             <div class="mr-3 flex-shrink-0">
                <ul>
                    <li @click="handleClickCate('')" class="p-3 mb-1 bg-white flex rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95 cursor-pointer">全部</li>
                    <li  @click="handleClickCate(item.id)" v-for="(item, index) in resCate.data" :key="index" class="p-3 mb-1  bg-white flex rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95 cursor-pointer">{{item.name}}</li>
                </ul>
             </div>

            <div class="w-full">
                    <div class="grid grid-cols-1  gap-4">
                        <!-- 第一篇 -->
                        <div v-for="(item, index) in lists" :key="index"  class="bg-white flex  h-[100px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-95">
                            <img :src="item.image" :alt="item.title" class="w-[100px] h-[100px] object-cover">
                            <div class="p-4">
                            <h2 class="text-lg font-sans ">{{ item.title }}</h2>
                            <p class="text-gray-600">{{ item.desc }}</p>
                            </div>
                        </div>

                    </div>
                    <div class="flex justify-center items-center my-3">
                        <el-pagination
                            small
                            background
                            v-model:currentPage="currentPage" 
                            layout="prev, pager, next"
                            :total="countPage"
                            :page-count="totalPages"
                            @current-change="handleCurrentChange"
                            class="mt-4"
                        />
                    </div>
            </div>
        </div>
        <!-- ================== -->

    </div>
</template> 

<script setup>
 const { articleApi } = useApi()
 const route = useRoute()
 const router = useRouter()
 const title = ref('')
 const lists = ref([])
 const totalPages = ref(0)
 const currentPage = ref(1)
 const countPage = ref(0)
 const cid = ref('')
 const pageSize = 1
 const loading = ref(false)

const resCate = await articleApi.cate()

const loadData = async (ctPage, cateId) => {
      currentPage.value = Number(ctPage)
      cid.value = cateId
      loading.value = true
      const arr = {
        "title": title.value,
        "page_no": currentPage.value,
        "page_size": pageSize,
        "cid": cid.value
      }
      const response = await articleApi.lists(arr)
      totalPages.value = Math.ceil(response.data.count / pageSize)
      countPage.value = response.data.count
      lists.value = response.data.lists
      // 构建要跳转的 URL
      const routeTo = {
        path: '?', // 替换为您要跳转的路径
        query: removeEmptyProperties(arr),
      };
      // 使用 router.push 更新 URL，不会刷新页面
      router.push(routeTo);
      loading.value = false
} 

const removeEmptyProperties = (obj) =>{
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === "")) {
      delete obj[key];
    }
  }
  return obj
}

loadData(1)

const handleCurrentChange = (e) => {
    loadData(e, cid.value)
}

const handleClickCate = (e) => {
    loadData(currentPage.value, e)
}

</script>