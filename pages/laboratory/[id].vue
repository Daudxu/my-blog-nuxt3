<template>
       <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
           <div v-if="detail">
                <h1 class="text-center text-xl font-bold py-3">
                  {{ detail.title }}
                </h1>
                <p class="py-3">
                    <div class="font-bold">项目描述：</div>
                    <div>
                        {{ detail.description  }}
                    </div>
                </p>
                <p class="py-3">
                    <div class="font-bold">项目内容：</div>
                    <div  class="py-3" v-if="isClient" v-html="detail.content"></div>
                </p>
                <p class="py-3">
                    <div class="font-bold">项目地址：</div>
                    <div class="py-3" v-if="isClient" >
                        {{ detail.url  }}
                    </div>
                </p>
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