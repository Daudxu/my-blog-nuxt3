<template>
    <div class="w-[1024px] h-min-screen mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-6 xs:p-6 md:p-9">
        
        <div class="w-full" v-if="lists.length > 0">

            <div class="pb-6" v-for="(item, index) in lists" :key="index+item.id"> 
                123123
            </div>

        </div>

    </div>
</template>    
<style scoped>

</style>
<script setup>
const { messageBoardApi } = useApi()
const lists = ref([])

// console.log('server', lists.value.length)
if(lists.value.length === 0){
    // const params = {
    //     "page_no": Number(page_no) ? Number(page_no) : 1,
    //     "page_size": pageSize,
    // }
    // const { data } = await useAsyncData("lists", async () => await messageBoardApi.lists(params))
   
    // const { data, pending, error, refresh } = await useAsyncData( () => messageBoardApi.lists())
    // lists.value = data.value.data.lists
    // console.log('server', data.value.data.lists)
}

// const { data, pending, error, refresh } = await useAsyncData( () => messageBoardApi.lists())
//     lists.value = data.value.data.lists
//     console.log('server', data.value.data.lists)
// if (lists.value.length === 0) {
//     console.log('server')
//     const params = {
//         "page_no": Number(page_no) ? Number(page_no) : 1,
//         "page_size": pageSize,
//     }
//     const { data } = await useAsyncData("lists", () => messageBoardApi.lists(params))
//     if (data.value) {
//         // lists.value = data.value.data
//         console.log(data.value);
//     }
// }


// ======================


// const currentPage = ref('')
// const countPage = ref('')
// const totalPages = ref('')
const pageSize = 9

const params = {
            "page_no": Number(1) ? Number(1) : 1,
            "page_size": pageSize,
        }
        const { data } =  await messageBoardApi.lists(params)
        lists.value = data.lists

// const router = useRouter()

// const loadData = async (page_no) => {

//         const params = {
//             "page_no": Number(page_no) ? Number(page_no) : 1,
//             "page_size": pageSize,
//         }
//         const { data } =  await messageBoardApi.lists(params)
//         lists.value = data.lists
//         // countPage.value = data.count
//         // currentPage.value = data.page_no
    
// }

// loadData(1)

// ======================


</script>