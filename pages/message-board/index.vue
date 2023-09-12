<template>
    <div class="w-[1024px] h-min-screen mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-6 xs:p-6 md:p-9">
        
        <div class="w-full ">
            <!-- <div class="bg-green-700 border border-gray-400 rounded-lg p-4 mb-3 text-white">
                <p class="text-xl font-bold text-center">寄语</p>
                <p>点点字迹，就是缕缕关注；条条留言，就是最美的牵挂；因为有你，空间多了一丝暖意；因为有你，人生多了一点感动；因为有你，生活多了一些精彩；认识你真好！</p>
            </div> -->

            <div class="flex flex-col mb-6">
                <textarea v-model="message" ref="textarea" class="w-full h-32 px-4 py-2 bg-gray-100 dark:bg-gray-800 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition resize-none focus:outline-blue-500 dark:focus:outline-blue-800" placeholder="请输入内容..."></textarea>
                <div class="mt-3 flex justify-between items-center w-full relative">
                    <div class="flex justify-center items-center space-x-3"> 
                        <svg class="fill-slate-400 dark:fill-slate-50 cursor-pointer" @click="handleclickEmjoi" ref="showbtuRef" width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path data-v-122e5658="" fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"></path></svg>
                        <svg class="fill-slate-400 dark:fill-slate-50 cursor-pointer text-xl"  @click="handleclickClear"  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                    </div>
                    <button @click="Comment" type="submit" class=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-primary-800"  :class="{ 'opacity-50 pointer-events-none': isLoading }"> 
                      <svg v-if="isLoading" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                      </svg>
                      {{ isLoading ? 'Loading...' : '提交' }}
                      </button>
                    <transition name="showbox">
                        <div v-show="isShowEmjoi" ref="modal" class="absolute top-10 left-0 max-w-[280px] min-h-[170px] z-10 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg">
                            <ul class="flex flex-wrap p-2">
                                <li class="h-7 cursor-pointer" v-bind:key= index v-for="(item, index) in emojis">
                                    <img :src="'emojis/'+item.file" :data="item.code" @click="insertEmoji(item.code)">
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>
            </div>
     
            <div class="space-y-4">
                <div class="pb-1" v-for="(item, index) in lists"  :key="index+item.id"> 
                    <div class="my-3">
                        <div class="flex space-x-4 "> 
                            <div class="flex-shrink-0 mr-2">
                                <img :src="item.user.avatar" class="w-[38px] h-[38px]" />
                            </div> 
                            <div class="flex flex-col">
                                <p class="text-gray-800 text-xs font-sans max-w-xs overflow-hidden">{{item.user.nickname}}</p>
                                <p class="text-gray-800 py-3 flex" v-html="replaceFace(item.content)"></p>
                                <p class="text-gray-500 text-sm">2 小时前  <span class="text-black cursor-pointer ml-3" @click="showDialog(1, item.id)">回复</span></p> 
                            </div>
                        </div>
                        <div class="py-3">
                           
                                <!-- ================================ -->
                                <div v-if="item.comments.length > 0">
                                    <div class="text-xs">评论</div>
                                    <div class="py-3 flex" v-for="(row, idx) in item.comments" :key="idx">
                                        <div class="flex-shrink-0 mr-2">
                                            <img :src="row.user.avatar" class="w-[38px] h-[38px]" />
                                        </div> 
                                        <div class="m-0">
                                            <p class="text-gray-800 text-xs font-sans max-w-xs overflow-hidden">{{row.user.nickname}}</p>
                                            <p class="text-gray-800 py-3 flex" v-html="replaceFace(row.content)"></p> 
                                            <!-- ===================== -->
                                            <p class="text-gray-500 text-sm">{{ row.created_at }}  <span class="text-black px-1 cursor-pointer" @click="showDialog(2, row.id)">回复</span></p> 
                                            <div v-if="row.replies.length > 0"> 
                                                <div v-for="(vo, i) in row.replies" :key="i"> 
                                                    <div class="py-3 flex" v-if="vo.parent_reply_id">
                                                            <div class="flex-shrink-0 mr-2">
                                                            <img :src="vo.user.avatar" class="w-[38px] h-[38px]" />
                                                            </div> 
                                                            <div class="m-0">
                                                                <p class="text-gray-800 text-xs font-sans max-w-xs overflow-hidden">{{ vo.user.nickname }} 回复了 {{ vo.parentReply.user.nickname }}</p>
                                                                <p class="flex" v-html="replaceFace(vo.content)"></p> 
                                                                <p class="text-gray-500 text-sm">{{ vo.created_at }}  <span class="text-black px-1 cursor-pointer"  @click="showDialog(2, row.id, vo.id)">回复</span></p> 
                                                            </div>
                                                        </div> 
                                                    <div class="py-3 flex" v-else>
                                                            <div class="flex-shrink-0 mr-2">
                                                            <img :src="vo.user.avatar" class="w-[38px] h-[38px]" />
                                                            </div> 
                                                            <div class="m-0">
                                                                <p class="text-gray-800 text-xs font-sans max-w-xs overflow-hidden">{{ vo.user.nickname }}</p>
                                                                <p class="flex" v-html="replaceFace(vo.content)"></p> 
                                                                <p class="text-gray-500 text-sm">{{ vo.created_at }}  <span class="text-black px-1 cursor-pointer"  @click="showDialog(2, row.id, vo.id)">回复</span></p> 
                                                            
                                                            </div>
                                                        </div>
                                                </div> 
                                            </div>
                                            <!-- ===================== -->
                                        </div>
                                    </div>
                                </div>
                                 <!-- ================================ -->
                        </div>
                          
                        <hr class="my-2 border-t"> 
                    </div>
                </div>
                <ClientOnly>
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
                </ClientOnly>
            </div>

        </div>
    </div>
    <ClientOnly>
        <el-dialog v-model="dialogVisible" title="回复" custom-class="cl-dialog" draggable>
            <reply @inputChanged="handleInputChanged" ref="childrenOne" />
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="showChildInputValue"> Confirm </el-button>
                </span>
            </template>
        </el-dialog>
        
    </ClientOnly>
</template>
<script setup>
import { emojis, replaceFace} from '@/utils/tools'
import Reply from '@/components/Reply.vue'
const isClient = process.client
const dialogVisible = ref(false)
const childrenOne = ref(null)

// ======================
const { messageBoardApi } = useApi()
const lists = ref([])
const modal = ref(null)
const showbtuRef = ref(null)

const currentPage = ref(0)
const countPage = ref(0)
const totalPages = ref(0)
const pageSize = 9

const router = useRouter()

const loadData = async (page_no) => {
    const params = {
        "page_no": Number(page_no) ? Number(page_no) : 1,
        "page_size": pageSize,
    }
    const { data } =  await messageBoardApi.lists(params)
    lists.value = data.lists
    totalPages.value = Math.ceil(data.count / pageSize)
    countPage.value = data.count
    currentPage.value = data.page_no
}


if(lists.value.length === 0){   
    const { data, pending, error, refresh } = await useAsyncData( () => messageBoardApi.lists( {
        "page_no":  1,
        "page_size": pageSize,
    }))
    lists.value = data.value.data.lists
    // console.log('server', data.value.data.lists)
}
// loadData(1)

const handleCurrentChange = (id)=> {
  loadData(id)
}
// ======================

const isLoading = ref(false)
const isShowEmjoi = ref(false)
const message = ref('')
const repliesMessage = ref('')
const textarea = ref(null);

const insertEmoji = (emoji) => {
  const startPosition = textarea.value.selectionStart;
  const endPosition = textarea.value.selectionEnd;
  const newValue = message.value.substring(0, startPosition) + emoji + message.value.substring(endPosition);
  message.value = newValue;
  isShowEmjoi.value = false;
  textarea.value.focus();
};

const Comment = async ( ) => {

    if(message.value) {
        isLoading.value = true;
        const params = {
           "content":message.value
        }  
        const  resAdd =  await messageBoardApi.addMessage(params)
        if(resAdd.code === 1){
            loadData(1)
            message.value = ""
        }
        isLoading.value = false;
    }else{
        ElMessage({
            showClose: true,
            message: '请输入内容',
            type: 'warning',
        })
    }

}

const handleclickEmjoi = () => {
     isShowEmjoi.value = !isShowEmjoi.value
      if (isShowEmjoi.value) {
        // 添加点击事件监听器
        window.addEventListener('click', handleClickOutside);
      } else {
        // 移除点击事件监听器
        window.removeEventListener('click', handleClickOutside);
      }
}

const handleClickOutside = (event) => {
      // 如果点击事件发生在弹出层之外，则关闭弹出层
      const e = modal.value
      const showbtu = showbtuRef.value
      if (e && !e.contains(event.target) && !showbtu.contains(event.target)) {
        isShowEmjoi.value = false;
        window.removeEventListener('click', handleClickOutside);
      }
}
// 清空内容
const handleclickClear = () => {
   message.value = ''
}

const replyData = reactive({
    type: null,
    message_id: null,
    comment_id: null,
    parent_reply_id: null
})

const handleInputChanged = (value) => {
    if (value) {
        repliesMessage.value = value
    }
}

const showChildInputValue = async () => {
    if (repliesMessage.value.length > 0) {
        if (replyData.type === 1) {
            const newData = {
                message_board_id: replyData.message_id,
                content: repliesMessage.value
            }
            const res = await messageBoardApi.addComments(newData)
            if(res.code === 1) {
              dialogVisible.value = false
              loadData()
            }else{
              notificationWarning(res.msg)
              setTimeout(() => {
                router.push("/login")
              }, 2000);
            }
   
        } else {
            const newData = {
                comment_id: replyData.comment_id,
                content: repliesMessage.value,
                parent_reply_id: replyData.parent_reply_id
            }
            const res =  await messageBoardApi.addReplies(newData)
            if(res.code === 1) {
              dialogVisible.value = false
              loadData()
            }else{
              notificationWarning(res.msg)
              setTimeout(() => {
                router.push("/login")
              }, 2000);
            }
        }
        handleClickClearMessage() 
    } else {
        ElMessage({
            showClose: true,
            message: '请输入内容',
            type: 'warning',
        })
    }
}

const showDialog = (type, message_id, parent_reply_id = null) => {
    replyData.type = type
    if (type === 1) {
        replyData.message_id = message_id
    } else {
        replyData.comment_id = message_id
        replyData.parent_reply_id = parent_reply_id
    }
    dialogVisible.value = true
}

const handleClickClearMessage = () => {
    childrenOne.value.handleClickClearMessage()
}

const notificationWarning = (msg) => {
  ElNotification({
    title: 'Warning',
    message: msg,
    type: 'warning',
  })
}
</script>

<style>
.sa{
    width: 90%
}

@media screen and (max-width: 768px) {
    .cl-dialog{
        width: 90%
    }
}

@media screen and (min-width: 1200px) {
    .cl-dialog{
        width: 30%
    }
}
</style>
