<template>
    <div class="w-[1024px] h-min-screen mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-6 xs:p-6 md:p-9">
        
        <div class="w-full ">
             <div >

             </div>
            <div class="flex flex-col mb-6">
                <textarea v-model="message" ref="textarea" class="w-full h-32 px-4 py-2 bg-gray-100 dark:bg-gray-800 border rounded focus:border-blue-500 focus:ring focus:ring-blue-200 transition resize-none focus:outline-blue-500 dark:focus:outline-blue-800" placeholder="Enter your text..."></textarea>
                <div class="mt-3 flex justify-between items-center w-full relative">
                    <svg class="fill-slate-400 dark:fill-slate-50 cursor-pointer" @click="handleclickEmjoi" width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path data-v-122e5658="" fill-rule="evenodd" clip-rule="evenodd" d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"></path></svg>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition" type="button" @click="Comment">Comment</button>
                    <transition name="showbox">
                        <div v-show="isShowEmjoi" class="absolute top-10 left-0 max-w-[280px] min-h-[170px] z-10 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg">
                            <ul class="flex flex-wrap p-2">
                                <li class="h-7 cursor-pointer" v-bind:key= index v-for="(item, index) in emojis">
                                    <!-- <img :src="'emoji/'+item.file" :data="item.code" @click="content +=item.code"> -->
                                    <img :src="'emojis/'+item.file" :data="item.code" @click="insertEmoji(item.code)">
                                </li>
                            </ul>
                        </div>
                    </transition>
                </div>
            </div>
     
            <div class="space-y-4">
                <div class="pb-6" v-for="e in 7" > 
                    <div class="my-3">
                        <div class="flex space-x-4 "> 
                            <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                            <div class="flex flex-col">
                                <p class="text-gray-800 font-semibold">John Doe</p>
                                <p class="text-gray-800 py-3">这是留言内容这是留言内容这是留言内容这是留言内容这是留言内容这是留言内容...</p>
                                <p class="text-gray-500 text-sm">2 小时前  <span class="text-black cursor-pointer ml-3">回复</span></p> 
                                 <div class="py-3 flex">
                                    <div class="w-10 h-10 bg-gray-300 rounded-full mr-5"></div> 
                                    <div class="m-0">
                                        <p class="text-gray-800 font-semibold">John Doe</p>
                                        <p>最近没有时间，有时间了会录些视频的</p> 
                                        <p class="text-gray-500 text-sm">2 小时前   <span>回复</span></p> 
                                    </div>
                                 </div>
                                 <div class="py-3 flex">
                                    <div class="w-10 h-10 bg-gray-300 rounded-full mr-5"></div> 
                                    <div class="m-0">
                                        <p class="text-gray-800 font-semibold">alex: 回复了: John Doe</p>
                                        <p>最近没有时间，有时间了会录些视频的</p> 
                                        <p class="text-gray-500 text-sm">2 小时前</p> 
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
</template>    
<style scoped>

</style>
<script setup>
import { ref } from 'vue'
const { messageBoardApi } = useApi()
// import { Message, Search, Star} from "@element-plus/icons-vue";
const isLoading = ref(false)
const isShowEmjoi = ref(false)
const message = ref('')
const textarea = ref(null);

const emojis = ref([
        { file: '100.gif', code: '/::)', title: '微笑',reg:/\/::\)/g },
        { file: '101.gif', code: '/::~', title: '伤心',reg:/\/::~/g },
        { file: '102.gif', code: '/::B', title: '美女',reg:/\/::B/g },
        { file: '103.gif', code: '/::|', title: '发呆',reg:/\/::\|/g },
        { file: '104.gif', code: '/:8-)', title: '墨镜',reg:/\/:8-\)/g },
        { file: '105.gif', code: '/::<', title: '哭',reg:/\/::</g },
        { file: '106.gif', code: '/::$', title: '羞',reg:/\/::\$/g },
        { file: '107.gif', code: '/::X', title: '哑',reg:/\/::X/g },
        { file: '108.gif', code: '/::Z', title: '睡',reg:/\/::Z/g },
        { file: '109.gif', code: '/::\'(', title: '哭',reg:/\/::'\(/g },
        { file: '110.gif', code: '/::-|', title: '囧',reg:/\/::-\|/g },
        { file: '111.gif', code: '/::@', title: '怒',reg:/\/::@/g },
        { file: '112.gif', code: '/::P', title: '调皮',reg:/\/::P/g },
        { file: '113.gif', code: '/::D', title: '笑',reg:/\/::D/g },
        { file: '114.gif', code: '/::O', title: '惊讶',reg:/\/::O/g },
        { file: '115.gif', code: '/::(', title: '难过',reg:/\/::\(/g },
        { file: '116.gif', code: '/::+', title: '酷',reg:/\/::\+/g },
        { file: '117.gif', code: '/:--b', title: '汗',reg:/\/:--b/g },
        { file: '118.gif', code: '/::Q', title: '抓狂',reg:/\/::Q/g },
        { file: '119.gif', code: '/::T', title: '吐',reg:/\/::T/g },
        { file: '120.gif', code: '/:,@P', title: '笑',reg:/\/:,@P/g },
        { file: '121.gif', code: '/:,@-D', title: '快乐',reg:/\/:,@-D/g },
        { file: '122.gif', code: '/::d', title: '奇',reg:/\/::d/g },
        { file: '123.gif', code: '/:,@o', title: '傲' ,reg:/\/:,@o/g},
        { file: '124.gif', code: '/::g', title: '饿',reg:/\/::g/g },
        { file: '125.gif', code: '/:|-)', title: '累' ,reg:/\/:\|-\)/g},
        { file: '126.gif', code: '/::!', title: '吓',reg:/\/::!/g },
        { file: '127.gif', code: '/::L', title: '汗',reg:/\/::L/g },
        { file: '128.gif', code: '/::>', title: '高兴',reg:/\/::>/g },
        { file: '129.gif', code: '/::,@', title: '闲',reg:/\/::,@/g },
        { file: '130.gif', code: '/:,@f', title: '努力',reg:/\/:,@f/g },
        { file: '131.gif', code: '/::-S', title: '骂',reg:/\/::-S/g },
        { file: '133.gif', code: '/:,@x', title: '秘密',reg:/\/:,@x/g },
        { file: '134.gif', code: '/:,@@', title: '乱',reg:/\/:,@@/g },
        { file: '135.gif', code: '/::8', title: '疯',reg:/\/::8/g },
        { file: '136.gif', code: '/:,@!', title: '哀',reg:/\/:,@!/g },
        { file: '137.gif', code: '/:!!!', title: '鬼',reg:/\/:!!!/g },
        { file: '138.gif', code: '/:xx', title: '打击',reg:/\/:xx/g },
        { file: '139.gif', code: '/:bye', title: 'bye',reg:/\/:bye/g },
        { file: '142.gif', code: '/:handclap', title: '鼓掌',reg:/\/:handclap/g },
        { file: '145.gif', code: '/:<@', title: '什么',reg:/\/:<@/g },
        { file: '147.gif', code: '/::-O', title: '累',reg:/\/::-O/g },
        { file: '153.gif', code: '/:@x', title: '吓',reg:/\/:@x/g },
        { file: '155.gif', code: '/:pd', title: '刀',reg:/\/:pd/g },
        { file: '156.gif', code: '/:<W>', title: '水果',reg:/\/:<W>/g },
        { file: '157.gif', code: '/:beer', title: '酒',reg:/\/:beer/g },
        { file: '158.gif', code: '/:basketb', title: '篮球',reg:/\/:basketb/g },
        { file: '159.gif', code: '/:oo', title: '乒乓',reg:/\/:oo/g },
        { file: '160.gif', code: '/:coffee', title: '咖啡',reg:/\/:coffee/g }
])

const handleclickEmjoi = () => {
    isShowEmjoi.value = !isShowEmjoi.value
}

const insertEmoji = (emoji) => {
  const startPosition = textarea.value.selectionStart;
  const endPosition = textarea.value.selectionEnd;
  const newValue = message.value.substring(0, startPosition) + emoji + message.value.substring(endPosition);
  message.value = newValue;
  isShowEmjoi.value = false;
  textarea.value.focus();
};

const replaceFace = (con) => {
    if(con.includes('/:')) {
        var emojisList= emojis.value;
        for(var i=0;i<emojisList.length;i++){
            con = con.replace(emojisList[i].reg, '<img src="/emoji/' + emojisList[i].file +'"  alt="" style="vertical-align: middle; width: 24px; height: 24px" />');
        }   
        return con;
    }
    return con;
}


const Comment = async ( ) => {
    isLoading.value = true;
    console.log("Comment", message.value)
    console.log("message", replaceFace(message.value))
    isLoading.value = false;
  }

</script>