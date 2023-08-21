<template>
    <div class="flex justify-center items-center h-screen w-screen">
    
        <div class="w-full max-w-sm p-4 mx-3 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white text-center">登录</h5>
                <div>
                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">邮箱/用户名</label>
                    <!-- <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="请输入邮箱或用户名" required> -->
                    <input type="text" name="username" v-model="username" @input="validateUsername" id="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="请输入邮箱或用户名" required>
                    <p v-if="errors.username" class="text-red-500 mt-2">{{ errors.username }}</p>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">密码</label>
                    <input type="password" name="password" id="password" placeholder="请输入密码" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" required>
                    <p v-if="errors.password" class="text-red-500 mt-2">{{ errors.password }}</p>
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">记住密码</label>
                    </div>
                    <NuxtLink href="/forget" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">找回密码?</NuxtLink>
                </div>
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">确认</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    没有账号? 前往 <NuxtLink to="/register" class="text-blue-700 hover:underline dark:text-blue-500">注册</NuxtLink>
                </div>
            </form>
        </div>

    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';

    definePageMeta({
        layout: 'no-header-footer',
        index: 1,
    });

    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const errors = ref({});
    const isSubmitting = ref(false);
    

    const clearError = (field) => {
        errors.value[field] = '';
    };

   
    const login = () => {
        isSubmitting.value = true;
        
        // Simulate login process
        setTimeout(() => {
            if (username.value === 'user' && password.value === 'password') {
            // Successful login
            // Redirect or perform other actions
            } else {
            // Failed login
            errors.value.username = 'Invalid credentials';
            errors.value.password = 'Invalid credentials';
            isSubmitting.value = false;
            }
        }, 1000);
    };

  </script>