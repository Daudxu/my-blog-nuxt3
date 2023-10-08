<template>
    <div class="w-[1024px]  mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
          
        <div class="flex justify-center">
            <div class="sm:min-w-[380px]">
                <div class="mb-4 flex">
                    <input v-model="searchKey" class="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-500" type="text" placeholder="">{{  }}
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-3"  @click="handleClickSearch()">搜索</button>
                </div>
                <div class="mb-4 flex">
                    <div class="font-sans text-sm flex-shrink-0">热门搜索: </div>
                    <div class="ml-3 flex flex-wrap  md:flex-row">
                        <span @click="handleClickSearch(item.name)" v-for="(item, index) in hotLists" :key="index" class="bg-blue-100 cursor-pointer mb-2 md:mb-0 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{item.name}}</span>
                     </div>
                </div>
            </div>
        </div>

        <!-- start -->
        <div class="flex">
             <div class="mr-3 flex-shrink-0">
                <ul>
                    <li @click="handleClickCate('')" class="p-3 mb-1 bg-white flex rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95 cursor-pointer">全部</li>
                    <li  @click="handleClickCate(item.id)" v-for="(item, index) in resCate.data" :key="index" class="p-3 mb-1  bg-white flex rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-95 cursor-pointer">{{item.name}}</li>
                </ul>
             </div>

            <div class="w-full">
                <div  v-if="lists.length > 0"> 
                    <div class="grid grid-cols-1  gap-4">
                        <div   @click="handleClickDetail(item.id)" v-for="(item, index) in lists" :key="index"  class="bg-white flex  h-[100px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-95">
                            <img :src="item.image" :alt="item.title" class="w-[100px] h-[100px] object-cover">
                            <div class="p-4">
                            <h2 class="text-lg font-sans ">{{ item.title }}</h2>
                            <p class="text-gray-600">{{ item.desc }}</p>
                            </div>
                        </div>

                    </div>
                    <div class="flex justify-center items-center my-3" v-if="totalPages > 1">
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
                <el-empty v-else description="暂无数据" />
            </div>
        </div>
        <!-- end -->

    </div>
</template> 

<script setup>
 const { articleApi } = useApi()
 const route = useRoute()
 const router = useRouter()

 const searchKey = ref('')
 const lists = ref([])
 const hotLists = ref([])
 const totalPages = ref(0)
 const currentPage = ref('')
 const countPage = ref(0)
 const pageSize = 10
 const loading = ref(false)
 
const resCate = await articleApi.cate()

const loadData = async () => {
    loading.value = true 
    searchKey.value = route.query.title
    const response = await articleApi.lists( {
        "keyword": route.query.title,
        "page_no": Number(route.query.page_no) ? Number(route.query.page_no) : 1,
        "page_size": pageSize,
        "cid": route.query.cid ? route.query.cid : ""
    })
    totalPages.value = Math.ceil(response.data.count / pageSize)
    countPage.value = response.data.count
    lists.value = response.data.lists
    updateCurrentPage(Number(route.query.page_no))
    loading.value = false
    searchKey.value = route.query.title
} 

const loadHotData = async () => {
    const response = await articleApi.hotLists()
    hotLists.value = response.data.data
}

loadData()
loadHotData()

const handleClickSearch = (key = '') => {
    const searchKeyArr = { title: searchKey.value }
    if(key){
        searchKeyArr['title'] = key
        searchKey.value = key
    }
    routeTo(searchKeyArr)
    setTimeout(() => {
        loadData()
    }, 500)
}

const handleCurrentChange = (page_no) => {
    const currentPageArr = {
        page_no
    }
    // currentPage.value = page_no
    console.log("page_no", page_no)
    routeTo(currentPageArr)
    setTimeout(() => {
        loadData()
    }, 500)
}

const handleClickCate = (cid) => {
    const cateArr = {
        cid
    }
    routeTo(cateArr)
    setTimeout(() => {
        loadData()
    }, 500)
}

const routeTo = (paramsArr) => {
    const params ={
        ...route.query,
        ...paramsArr
    }
    const routeTo = (
        {
            path: '?', 
            query: removeEmptyProperties(params),
        }
    );
    router.push(routeTo);
}

const removeEmptyProperties = (obj) =>{
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && (obj[key] === null || obj[key] === "")) {
      delete obj[key];
    }
  }
  return obj
}

const updateCurrentPage = (e) => {
    currentPage.value = e;
};

const handleClickDetail = (id)=> {
    router.push({ name: 'article-id', params: { id } });
  }


</script>