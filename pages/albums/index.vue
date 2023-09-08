<template>
    <div class="w-[1024px] md:min-h-[750px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
          <div  v-if="lists.length > 0">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div v-for="(album, index) in lists" :key="index" class="rounded-lg overflow-hidden shadow-md cursor-pointer" @click="handleClickDetail(album.id)">
                          <div class="aspect-w-16 aspect-h-9 bg-slate-200">
                              <div class="flex items-center justify-center h-full">
                              <div class="w-48 h-32">
                                  <img :src="album.image" :alt="album.title" class="object-contain w-full h-full" />
                              </div>
                              </div>
                          </div>
                          <div class="p-4 bg-white">
                              <h2 class="text-xl font-semibold">{{ album.title }}</h2>
                              <p class="text-gray-500">{{ album.description }}</p>
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
</template>     

<script setup>
const { albumsApi } = useApi()
const lists = ref([])

const currentPage = ref('')
const countPage = ref('')
const totalPages = ref('')
const pageSize = 9

const router = useRouter()

const loadData = async (page_no) => {
  const params = {
    "page_no": Number(page_no) ? Number(page_no) : 1,
    "page_size": pageSize,
  }
  const { data } =  await albumsApi.lists(params)
  lists.value = data.lists
  countPage.value = data.count
  currentPage.value = data.page_no
}

loadData(1)

const handleClickDetail = (id)=> {
    router.push({ name: 'albums-id', params: { id } });
}

const handleCurrentChange = (id)=> {
  loadData(id)
}


</script>