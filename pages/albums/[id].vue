<template>
       <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">

        <!-- ================================================= -->
        <div v-if="loading">
            <el-skeleton :loading="loading" animated>
                    <template #template>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <el-skeleton-item variant="image" style="height: 240px" v-for="i in  7"  class="rounded-lg shadow-lg cursor-pointer"/>
                        </div>
                    </template>
                </el-skeleton>
        </div>
        <div v-else>
            <div v-if="lists.length > 0">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <el-image
                            v-for="(item, index) in lists" :key="index" :alt="item.title"
                            class="rounded-lg shadow-lg cursor-pointer"
                            :src="item.image" 
                            lazy
                            :zoom-rate="1.2"
                            :preview-src-list="[item.image]"
                            :initial-index="0"
                            fit="cover"
                            />
                    </div>
                    <div class="flex justify-center items-center my-3"  v-if="totalPages > 1">
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
                <el-empty v-else description="还没有数据" />
        </div>
        <!-- ================================================= -->

    </div>
</template>

<script setup>
const { albumsApi } = useApi()
const lists = ref([])

const currentPage = ref('')
const countPage = ref('')
const totalPages = ref(0)
const pageSize = 12
const loading = ref(false)
const router = useRouter()
const route = useRoute()


const loadData = async (page_no) => {
    loading.value = true
    const params = {
        "id": Number(route.params.id),
        "page_no": Number(page_no) ? Number(page_no) : 1,
        "page_size": pageSize,
    }
    const { data } =  await albumsApi.detail(params)
    totalPages.value = Math.ceil(data.count / pageSize)
    lists.value = data.lists
    countPage.value = data.count
    currentPage.value = data.page_no
    loading.value = false
}

loadData(1)

const handleClickDetail = (id)=> {
    router.push({ name: 'albums-id', params: { id } });
}

const handleCurrentChange = (id)=> {
  loadData(id)
}
</script>