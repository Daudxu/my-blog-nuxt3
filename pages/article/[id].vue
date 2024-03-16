<template>
    <div class="w-[1024px] mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
        <div class= "space-y-3">
              <div class="my-3">
                <div class="flex"> 
                    <div>
                        <p class="text-gray-800 font-semibold text-center">{{detail.title}}</p>
                        <p class="text-gray-800 py-3 text-base font-sans" v-if="isClient"  v-html="detail.content"></p>
                        <p class="text-gray-500 text-sm">{{detail.create_time}}  <span class="text-black cursor-pointer ml-3" @click="showDialog(1, detail.id)">评论</span></p> 
                         <div v-if="detail.comments.length > 0"> 
                            <div v-for="(item, index) in detail.comments" :key="index">
                                <div class="py-3 flex">
                                    <div class="flex-shrink-0 mr-2">
                                      <img :src="detail.user.avatar" class="w-[38px] h-[38px]" />
                                    </div> 
                                    <div class="m-0">
                                        <p class="text-gray-800 font-semibold">{{ item.user.nickname }}</p>
                                        <p class="flex" v-html="replaceFace(item.content)"></p> 
                                        <p class="text-gray-500 text-sm">{{ item.created_at }}  <span class="text-black px-1 cursor-pointer" @click="showDialog(2, item.id)"></span></p> 
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4 border-t"> 
                         </div>
                    </div>
                </div> 
              </div>
        </div>
    </div>
    <el-dialog v-model="dialogVisible" title="回复" style="min-width: 38%;" draggable>
        <reply @inputChanged="handleInputChanged" ref="childrenOne" />
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="showChildInputValue"> Confirm </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { replaceFace } from '@/utils/tools'
import Reply from '@/components/Reply.vue'

const route = useRoute()
const router = useRouter()

const childrenOne = ref(null)
const dialogVisible = ref(false)
const message = ref('')

const { articleApi } = useApi()

const isClient = process.client; // 检查是否在客户端环境
// const isServer = process.server; // 检查是否在服务器端环境

const detail = ref(null)

const { data, pending, error, refresh } = await useAsyncData(
    () => articleApi.detail({id:route.params.id})
)
detail.value = data.value.data

const loadData = async () => {
  if(isClient) {
    await refresh()
    detail.value = data.value.data
  }
}
 
const replyData = reactive({
    type: null,
    message_id: null,
    comment_id: null,
    parent_reply_id: null
})

const handleInputChanged = (value) => {
    if (value) {
        message.value = value
    }
}

const showChildInputValue = async () => {
    if (message.value.length > 0) {
        if (replyData.type === 1) {
            const newData = {
                article_id: replyData.message_id,
                content: message.value
            }
            const res = await articleApi.addComments(newData)
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
                content: message.value,
                parent_reply_id: replyData.parent_reply_id
            }
            const res =  await articleApi.addReplies(newData)
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
        feedback.msgWarning('输入框不能为空！')
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