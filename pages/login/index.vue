<template>
    <div class="flex justify-center items-center h-screen w-screen">
        <div class="w-full max-w-sm p-4 mx-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">登录</h5>
                <div>
                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱/用户名</label>
                    <input type="text" name="username" v-model="formData.username" @input="validateUsername" id="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="请输入邮箱或用户名" required>
                    <p v-if="errors.username" class="text-red-500 mt-2">{{ errors.username }}</p>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
                    <input type="password" name="password" v-model="formData.password" @input="validatePassword" id="password" placeholder="请输入密码" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" required>
                    <p v-if="errors.password" class="text-red-500 mt-2">{{ errors.password }}</p>
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" v-model="isRememberMeChecked" :checked="isRememberMeChecked" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1">
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">记住密码</label>
                    </div>
                    <NuxtLink href="/forget" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">找回密码?</NuxtLink>
                </div>
                <button type="button" @click="login" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">确认</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    没有账号? 前往 <NuxtLink to="/register" class="text-blue-700 hover:underline dark:text-blue-500">注册</NuxtLink>
                </div>
            </form>
        </div>
    </div>
  </template>
  
  <script  setup>
    import { ref } from 'vue';
    import { encrypt, decrypt } from '@/utils/crypto'; 
    import { useUserStore } from '~~/stores/useUserStore'

    const isRememberMeChecked = ref(false)
    const store = useUserStore();
    // const rememberMe = computed(() => store.rememberMe)
    const { userApi } = useApi()

    definePageMeta({
        layout: 'no-header-footer',
        index: 1,
    });

    const router = useRouter();
    
    const errors = reactive({
        username:'',
        password:''
    });

    const formData = reactive({
        username:'zhagsan123',
        password:'zhagsan123'
    })

    const isSubmitting = ref(false);
    
    const clearError = (field) => {
        errors[field] = '';
    };

    const validateUsername = () =>{
        if(formData.username){
           if(formData.username.length > 3) {
               clearError("username")
           }else{
              errors.username = "请输入用户名"
           }
        }else{
            errors.username = "请输入用户名"
        }
    }

    const validatePassword = () =>{
        if(formData.password){
           if(formData.password.length > 6) {
               clearError("password")
           }else{
              errors.password = "请输入密码"
           }
        }else{
            errors.password = "请输入密码"
        }
    }

    onMounted(()=>{
        isRememberMeChecked.value = store.rememberMe
        if(store.rememberMe) {
            formData.username = store.username;
            formData.password = decrypt(store.password);
        }
     
    })
   
    const login = async () => {
        isSubmitting.value = true;
        if(!formData.username){
            errors.username = "请输入密码"
        }

        if(!formData.password){
            errors.password = "请输入密码"
        }

        if(isRememberMeChecked.value){
            store.username = formData.username
            store.password = encrypt(formData.password) 
            store.rememberMe = true
        }else{
            store.username = ''
            store.password = ''
            store.rememberMe = false
        }

        const arr = {
            account: formData.username,
            password: formData.password
        }

        const res =  await userApi.login(arr)
        if(res.code === 1) {
            store.userinfo = res.data
            store.token = res.data.token
            if(process.client){
                router.push('/')
            }
      
        }else{
            alert("error")
        }
        // const getCommentList = async () => {
        //     let { data } = await useFetch("/dsiab.com/getList", { method: "post", body: { postId: 2123123 } })
        // }

        // let { data } = await useFetch("/dsiab.com/getList", { method: "post", body: { postId: 2123123 } })
        // console.log("res", res.data.token)
        // console.log("res", isRememberMeChecked.value)
    };

  </script>