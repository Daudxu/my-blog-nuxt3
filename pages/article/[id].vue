<template>
        <div id="scene-container" class="w-[1024px]  mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
                  
            <div class="w-full p-4 bg-white shadow-md mt-8 rounded-lg max-w-screen-lg mx-auto">
                <h1 class="text-3xl font-semibold mb-4">文章标题</h1>
                <p class="text-gray-500 text-sm mb-2">发布日期：2023-08-11</p>
                <div class="article-content">
                <p>这里是文章内容...</p>
                <p>更多内容...</p>
                </div>
            </div>
            
            <div class="w-full p-4 bg-white shadow-md mt-4 rounded-lg max-w-screen-lg mx-auto">
                <h2 class="text-2xl font-semibold mb-4">评论</h2>
                <div class="comment">
                <p class="text-gray-600">评论者：John</p>
                <p>这是一条评论...</p>
                <div class="reply">
                    <p class="text-gray-600">回复评论者：Alice</p>
                    <p>回复内容...</p>
                    <div class="reply">
                    <p class="text-gray-600">回复评论者：Bob</p>
                    <p>更多回复...</p>
                    </div>
                </div>
                </div>
                <div class="comment">
                <p class="text-gray-600">评论者：Jane</p>
                <p>另一条评论...</p>
                </div>
                <!-- 循环渲染更多评论 -->
            </div>

        </div>
</template>