<template>
    <div class="flex-auto">
        <div class="w-full space-y-3">
            <el-input
                v-model="content"
                placeholder=""
                type="textarea"
                ref="textareaRef"
                :autosize="{ minRows: 3, maxRows: 6 }"
                :maxlength="200"
                show-word-limit
                clearable
                @input="inputChanged"
            />
            <svg
                class="fill-[#666666] cursor-pointer"
                @click="handleclickEmjoi"
                width="25"
                height="25"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    data-v-122e5658=""
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00002 0.666504C12.0501 0.666504 15.3334 3.94975 15.3334 7.99984C15.3334 12.0499 12.0501 15.3332 8.00002 15.3332C3.94993 15.3332 0.666687 12.0499 0.666687 7.99984C0.666687 3.94975 3.94993 0.666504 8.00002 0.666504ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.6667 5.66667V7.66667H9.33333V5.66667H10.6667ZM6.66667 5.66667V7.66667H5.33333V5.66667H6.66667ZM10.0767 9.33333H11.0495C11.1804 9.33333 11.2866 9.43951 11.2866 9.57048C11.2866 9.60754 11.2779 9.64409 11.2612 9.67718L11.244 9.71053C10.6294 10.8739 9.40726 11.6667 7.99998 11.6667C6.61523 11.6667 5.40977 10.8991 4.7859 9.76612L4.73786 9.67593C4.67845 9.56052 4.72385 9.4188 4.83926 9.35939C4.87253 9.34226 4.90941 9.33333 4.94683 9.33333H5.92347C6.02396 9.33332 6.11908 9.37865 6.18238 9.4567C6.26207 9.55496 6.32833 9.62955 6.38117 9.68046C6.80074 10.0847 7.37133 10.3333 7.99998 10.3333C8.63289 10.3333 9.20694 10.0814 9.62728 9.67224C9.67791 9.62296 9.74135 9.55121 9.8176 9.45698C9.88089 9.37877 9.97611 9.33333 10.0767 9.33333Z"
                ></path>
            </svg>
            <div class="relative">
                <transition name="showbox">
                    <div
                        v-show="isShowEmjoi"
                        class="absolute top-1 left-0 z-20 bg-[#dcdfe6] rounded-lg shadow-lg"
                    >
                        <el-tabs type="border-card">
                            <el-tab-pane label="动态表情">
                                <ul class="flex flex-wrap p-1">
                                    <li
                                        class="h-7 cursor-pointer"
                                        v-bind:key="index"
                                        v-for="(item, index) in emojis"
                                    >
                                        <img
                                            :src="
                                                'http://servers.365coding.cn/resource/image/emojis/' +
                                                item.file
                                            "
                                            :data="item.code"
                                            @click="insertEmoji(item.code)"
                                        />
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="字符表情">
                                <EmojiPicker :native="true" @select="onSelectEmoji" />
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script setup>
import { emojis } from '@/utils/tools'
import EmojiPicker from 'vue3-emoji-picker'


const content = ref('')
const isShowEmjoi = ref(false)
const textareaRef = ref(null)

const emits = defineEmits(['inputChanged'])

const insertEmoji = (emoji) => {
    const startPosition = textareaRef.value.textarea?.selectionStart
    const endPosition = textareaRef.value.textarea?.selectionEnd
    const newValue = content.value.substring(0, startPosition) + emoji + content.value.substring(endPosition)
    content.value = newValue
    isShowEmjoi.value = false
    textareaRef.value.textarea.focus()
    inputChanged()
}

const onSelectEmoji = (emoji) => {
    insertEmoji(emoji.i)
}

const handleclickEmjoi = () => {
    isShowEmjoi.value = !isShowEmjoi.value
}

const inputChanged = () => {
    emits('inputChanged', content.value)
}

const handleClickClearMessage = () => {
    content.value = ''
    inputChanged()
}

defineExpose({
    handleClickClearMessage
})
</script>
