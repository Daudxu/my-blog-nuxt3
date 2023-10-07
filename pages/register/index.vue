<template>
  <div class="flex justify-center items-center h-screen w-screen">
  
      <div class="w-full max-w-sm p-4 mx-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form class="space-y-6" action="#">
              <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">注册</h5>
              <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">用户名</label>
                  <input type="text" name="username" id="username" v-model="formData.username" @input="validateUsername" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="请输入你的用户名" required>
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱</label>
                  <input type="email" name="email" id="email" v-model="formData.email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="请输你的邮箱" required>
              </div>
              <div class="mb-4">
                <label for="code" class="block text-sm font-medium text-gray-700">验证码</label>
                <div class="flex justify-between items-center mt-2">
                  <input
                    id="code"
                    type="text"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-[65%]"
                    placeholder="请输入验证码"
                  />
                  <button @click="startCountdown" :disabled="countdownData.isCounting" class="text-white px-3 py-3 w-[30%] rounded-md text-xs  transition duration-150" :class="{ 'cursor-not-allowed bg-blue-300' : countdownData.isCounting, 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700': !countdownData.isCounting }" type="button"> {{ countdownData.isCounting ? `${countdownData.countdown}秒后重发` : '获取验证码' }}</button>
                </div>
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
                  <input type="password" name="password" id="password" v-model="formData.password" @input="validatePassword" placeholder="请输入你的密码" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" required>
              </div>
              <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">确认密码</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" v-model="formData.confirmPassword" @input="validateConfirmPassword" placeholder="请输入你的确认密码" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" required>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                      <input id="isAgree" type="checkbox" v-model="isAgree" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                  </div>
                  <label for="isAgree" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        我已阅读并同意
                        <NuxtLink to="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">服务条款</NuxtLink>、
                        <NuxtLink to="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">隐私政策</NuxtLink>
                  </label>
              </div>
              <button type="button" @click="register" class="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">确认</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  已有账号? 前往 <NuxtLink to="/login" class="text-blue-700 hover:underline dark:text-blue-500">登录</NuxtLink>
              </div>
          </form>
      </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
// import { useUserStore } from '~~/stores/useUserStore'

// const store = useUserStore();
const isAgree = ref(false)
const { userApi } = useApi()
const time = 60;

definePageMeta({
  layout: 'no-header-footer',
  index: 1,
});

const formData = reactive({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
})

const errors = reactive({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    isAgree:''
})

const validateUsername = () => {
  
}
const validatePassword = () => {

}
const validateConfirmPassword = () => {

}

const warning = (message) => {
    ElNotification({
        title: 'Warning',
        message: message,
        type: 'warning',
    })
}

const register = async () => {
  if(!formData.username){
      warning("请输入用户名")
      return false
  }

  if(!formData.email){
      warning("请先输入邮箱")
      return false
  }

  if(!formData.password){
      warning("请输入密码")
      return false
  }

  if(!formData.confirmPassword){
      warning("请输入确认密码")
      return false
  }
  
  if(!isAgree.value){
    warning("请阅读并同意服务条款，隐私政策")
    return false
  }

  const arr = {
      account: formData.username,
      password: formData.password,
      password_confirm: formData.confirmPassword,
  }

  const res =  await userApi.register(arr)
  console.log("res", res)
}

const countdownData = reactive({
  isCounting: false,
  countdown: time
});

const startCountdown = async () => {
  if(formData.email){
    const res =  await userApi.sendCode({"email" : formData.email})
    if(res.code === 1) {
        if (!countdownData.isCounting) {
          countdownData.isCounting = true;
          let timer = setInterval(() => {
            countdownData.countdown--;
            if (countdownData.countdown <= 0) {
              clearInterval(timer);
              countdownData.isCounting = false;
              countdownData.countdown = time; 
            }
          }, 1000);
        }
    }else{
      ElNotification({
        title: 'Warning',
        message: '请1分钟后再次尝试！',
        type: 'warning',
      })
    }
  }else{
    ElNotification({
      title: 'Warning',
      message: '请先输入邮箱',
      type: 'warning',
    })
  }

};

</script>