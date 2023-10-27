<template>
  <div class="w-[1024px] md:min-h-[750px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
    <div v-if="loading"> 
        <el-skeleton  :loading="loading" animated>
            <template #template>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div v-for="item in 5" :key="item" class="rounded-lg overflow-hidden shadow-md cursor-pointer" @click="handleClickDetail(item.id)">
                          <div class="aspect-w-16 aspect-h-9 bg-slate-200">
                              <div class="flex items-center justify-center h-full">
                              <div class="w-48 h-32">
                                <el-skeleton-item variant="image" style="width: 100%; height: 100%"/>
                              </div>
                              </div>
                          </div>
                          <div class="p-4 bg-white">
                              <h2 class="text-xl font-semibold">
                                <el-skeleton-item variant="h3" style="width: 50%" />
                              </h2>
                              <p class="text-gray-500"> 
                                <el-skeleton-item variant="text" style="margin-right: 16px" />
                              </p>
                          </div>
                      </div>
                  </div>
            </template>
        </el-skeleton>
      </div> 
      <div v-else> 
          <div  v-if="lists.length > 0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div v-for="(item, index) in lists" :key="index" class="rounded-lg overflow-hidden shadow-md cursor-pointer" @click="handleClickDetail(item.id)">
                          <!-- <div class="aspect-w-16 aspect-h-9 bg-cover" :class="'bg-[url('+item.image+')]'" > -->
                          <div class="aspect-w-16 aspect-h-9 bg-cover" :style="{ background: 'url(' + item.image + ') no-repeat', 'background-size': 'cover' }" >
                              <div class="flex items-center justify-center h-full">
                              <div class="w-48 h-32">
                              </div>
                              </div>
                          </div>
                          <div class="p-4 bg-white">
                              <h2 class="text-xl font-semibold max-h-[30px] overflow-hidden">{{ item.title }}</h2>
                              <p class="text-gray-500 max-h-[50px] overflow-hidden">{{ item.description }}</p>
                          </div>
                      </div>
                  </div>
                  
                  <div class="flex justify-center items-center my-3" >
                          <el-pagination 
                              small
                              background
                              v-model:currentPage="currentPage" 
                              :page-size ="pageSize"
                              layout="prev, pager, next"
                              :total="countPage"
                              :page-count="totalPages"
                              @current-change="handleCurrentChange"
                              class="mt-4"
                          />
                  </div>
            </div>
           <el-empty v-else description="no data" />
      </div>
  </div>
</template>     

<script setup>
const { projectsApi } = useApi()
const lists = ref([])
const loading = ref(false)
const currentPage = ref('')
const countPage = ref('')
const totalPages = ref('')
const pageSize = 9

const router = useRouter()

const loadData = async (page_no) => {
    loading.value = true
    const params = {
      "page_no": Number(page_no) ? Number(page_no) : 1,
      "page_size": pageSize,
    }
    const { data } =  await projectsApi.lists(params)
    lists.value = data.lists
    countPage.value = data.count
    currentPage.value = data.page_no
    totalPages.value = Math.ceil(data.count / pageSize)
    loading.value = false
}

loadData(1)

const handleClickDetail = (id)=> {
  router.push({ name: 'projects-id', params: { id } });
}

const handleCurrentChange = (id)=> {
  loadData(id)
}


</script>