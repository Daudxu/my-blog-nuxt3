<template>
       <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
           <div v-if="detail">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {{ detail.title }}
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {{ detail.description  }}
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" v-if="isClient" v-html="detail.content">
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {{ detail.url  }}
                </div>
           </div>
        </div>
</template>

<script setup>
const { laboratoryApi } = useApi()
const route = useRoute()
const detail = ref("")
const isClient = process.client

const loadData = async () => {
    const params = {
        "id": Number(route.params.id),
    }
    const { data } =  await laboratoryApi.detail(params)
    detail.value = data
    console.log("data", data)
}

loadData()
</script>