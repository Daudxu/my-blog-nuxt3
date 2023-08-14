<template>
    <div id="scene-container" class="w-[1024px]  mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
          
        <div class="w-full p-6 bg-white rounded-lg shadow-md">
            <!-- <h1 class="text-2xl font-semibold mb-4">分类与文章列表</h1> -->
            <div class="mb-4 flex items-center">
            <input class="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-500" type="text" placeholder="搜索...">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">搜索</button>
            </div>
            <div class="flex">
            <div class="w-1/4 p-4 bg-white shadow-md rounded-md category-card">
                <!-- <h2 class="text-lg font-semibold mb-2">分类列表</h2> -->
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-sub-menu index="1">
                    <template #title>
                        <span>Navigator One</span>
                    </template>
                    
                      <el-menu-item index="1-1">item one</el-menu-item>
                      <el-menu-item index="1-2">item one</el-menu-item>
                    </el-sub-menu>
                    <el-menu-item index="2">
                   
                    <template #title>Navigator Two</template>
                    </el-menu-item>
                    <el-menu-item index="3" >
                    <template #title>Navigator Three</template>
                    </el-menu-item>
                    <el-menu-item index="4">
                    <template #title>Navigator Four</template>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="w-3/4 p-4 bg-white shadow-md rounded-md ml-4">
                <ul class="space-y-4">
                <li class="bg-white p-4 shadow-md rounded-md article-card">
                    <h2 class="text-lg font-semibold mb-2">文章标题 1</h2>
                    <p class="text-gray-500 text-sm">5 小时前</p>
                </li>
                <li class="bg-white p-4 shadow-md rounded-md article-card">
                    <h2 class="text-lg font-semibold mb-2">文章标题 2</h2>
                    <p class="text-gray-500 text-sm">1 天前</p>
                </li>
                </ul>
            </div>
            </div>
        </div>

    </div>
</template> 

<script setup>
 import { onMounted } from 'vue';
 import * as THREE from 'three';
 import {
    ElMenu, ElMenuItem, ElSubMenu
} from "element-plus";

 onMounted(() => {

 })
</script>