<template>
       <ClientOnly fallback-tag="span" fallback="Loading comments...">

    <header class="flex justify-center items-center fixed w-full z-10 ">
          <div class="flex justify-between items-center 2xl:container md:mx-auto  py-3">
             <div class="cl-logo w-[60px] h-[40px] text-slate-950 mr-2 font-bold rounded-xl shadow-xl py-2 px-5 flex justify-center items-center dark:text-slate-50 bg-slate-50 dark:bg-slate-700 bg-no-repeat bg-cover bg-center" :style="{ backgroundImage: 'url(' + webConfig.website.pc_logo + ')'}">

             </div>
             <!-- <nav class="md:flex md:items-center  md:mx-2 md:rounded-xl md:shadow-xl dark:text-slate-50 dark:bg-slate-700 min-h-[100vh] md:min-h-0  md:z-auto md:static absolute bg-slate-50 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100  -z-10  top-[65px] transition-all ease-in duration-500" :class="{'block': isShowNavbar}" > -->
             <nav class="md:flex md:items-center mr-2 z-[-1] md:z-auto md:static rounded-xl shadow-xl dark:text-slate-50 dark:bg-slate-700 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500" ref="navRef" >
                 <div class="nav-links duration-500 md:min-h-fit  left-0 top-[-100%] md:w-auto flex items-center px-5 md:py-2">
                     <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                         <li v-for="(item, index) in menuList" :key="index" class="cursor-pointer">
                             <NuxtLink class="text-black dark:text-white dark:hover:text-gray-500 hover:text-gray-500" :to="item.path">{{item.name}}</NuxtLink>
                         </li>
                     </ul>
                 </div>
             </nav>
             <div class="flex items-center gap-3 md:gap-5">
                 <div class="flex justify-center items-center rounded-xl shadow-xl px-5 p-1 dark:text-slate-50 bg-slate-50 dark:bg-slate-700"> 
                     <!-- <a  class="mr-2 p-1">Sign in</a> -->

                     <div class="w-8 h-8 md:w-8 flex justify-center items-center bg-gray-500 rounded-full overflow-hidden" v-if="store.token">
                         <img :src="store.userinfo.avatar" class="w-[32px] h-[32px] cursor-pointer" />
                     </div>
                     <div class="w-8 h-8 md:w-8 flex justify-center items-center" v-else>
                        <NuxtLink class="" to="/login">登录</NuxtLink>
                     </div>
                 </div>
           
                 <div class="flex justify-center items-center rounded-xl shadow-xl p-1 dark:text-slate-50 bg-slate-50 dark:bg-slate-700">
                     <!-- sun icon -->
                     <svg v-if="isDark" @click="toggleIcon"  class="fill-current w-8 text-sky-900 dark:text-white cursor-pointer transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                     <!-- moon icon -->
                     <svg v-else @click="toggleIcon" class="fill-current w-8 text-sky-900 dark:text-white cursor-pointer transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                 </div>
                 <div class="flex justify-center items-center rounded-xl shadow-xl p-2 bg-slate-50 dark:text-slate-50 dark:bg-slate-700 md:hidden" @click="Menu(this)" name="menu">
                    <font-awesome-icon v-if="isShowNavbar" :icon="['far', 'circle-xmark']" class="text-2xl cursor-pointer  text-sky-900 dark:text-white"></font-awesome-icon>
                    <font-awesome-icon v-else :icon="['fas', 'bars']" class="text-2xl cursor-pointer  text-sky-900 dark:text-white"></font-awesome-icon>
                 </div>
             </div>
          </div>
      </header>
    </ClientOnly>
 </template>
 
 <script setup>
//  import { useDark } from '@vueuse/core'
 import { ref } from "vue"
 import { useUserStore } from '~~/stores/useUserStore'
 const navRef = ref()
 const online = useOnline()
 const isDark = useDark()
 const store = useUserStore();
 // const { x, y } = useMouse()
 const isShowNavbar = ref(false)
 const { appApi } = useApi()
 const webConfig = ref('')

 const toggleIcon = () => {
     isDark.value = !isDark.value;
     console.log("online", online.value)
     console.log("isDark", isDark.value)
 }
 
 const menuList = ref([
    {name: "首页", 'path':"/"},
    {name: "随心说", path:"/poster"},
    {name: "文章", path:"/article"},
    {name: "相册", path:"/album"},
    {name: "项目", path:"/project"},
    {name: "留言", path:"/message-board"},
    {name: "实验室", path:"/laboratory"}
 ])

 const Menu = (e) => {
    let list = navRef.value;
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') ,isShowNavbar.value = true, list.classList.add('opacity-100')) :( e.name = "menu" ,isShowNavbar.value = false,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
 }
 const config = await appApi.config()
    //  console.log("config", config)
 onMounted( async ()=>{
    webConfig.value = config.data
    // console.log("config" ,config)
 })
 </script>