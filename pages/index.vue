<template>
	<div class="w-full h-full">
    <!-- about start -->
		<section class="h-screen w-full flex justify-center items-center flex-col overflow-hidden">
             <!-- 引入about子组件 -->
            <about-section :homeData="homeData"></about-section>
		</section>
    <!-- about end -->
    <!-- skills start -->
		<section class="h-screen w-full flex justify-center items-center flex-col relative bg-02">
        <div class="container mx-auto p-4">
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4">
                  <img src="~/assets/images/page2.gif" class="rounded-2xl" />
                </div>
                <div class="flex items-center justify-center"> 
                  <div class="space-y-3">
                      <h1 class="text-2xl font-sans font-bold">🛠 技术栈 | Tech Stack </h1>
                      <ul class="space-y-3 w-full">
                        <li class="flex items-center flex-row flex-wrap" v-for="(item, index) in homeData.group_skills" :key="index"> 
                          <div class="md:text-2xl">{{ item.icon }}</div>
                          <img v-for="(row, idx) in item.skills" :src="row.badge"  :key="idx" class="m-2 rounded-lg hover:shadow-xl h-5 md:h-7" />
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
       </div>
		</section>
    <!-- skills end -->
    <!-- projects start -->
		<section class="h-screen w-full flex justify-center items-center flex-col bg-03">
      <h1 class="py-7 text-2xl font-sans font-bold">项目展示</h1>
      <div>
        <div class="block text-center" >
          <!-- <ClientOnly> -->
            <el-carousel :interval="4000" type="card" class="w-[365px] sm:w-[500px] md:w-[800px] ">
              <el-carousel-item v-for="item in homeData.projects" :key="item" class="w-full rounded-2xl shadow-xl group" :style="{ backgroundImage: `url('${item.image}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
                <div class="bg-slate-800/70 font-sans text-slate-50 h-full w-full hidden  group-hover:block" >
                    <h3 class="h-full w-full flex items-center justify-center"> {{ item.title }} </h3> 
                </div>
              </el-carousel-item>
            </el-carousel>
          <!-- </ClientOnly> -->
        </div>
      </div>
		</section>
    <!-- projects end -->
	</div>
  </template>
  
  <script setup>  
  // 引入AboutSection 子组件
  import AboutSection from '~~/pages/components/AboutSection'
  // 加载布局配置
  definePageMeta({
    layout: 'no-footer',
  });
  // 引入接口
  const { appApi } = useApi()
 //  初始化一个响应式首页数据对象,默认为空
  const homeData = ref('')

  // 设置SEO关键词
  useHead({
    title: 'Dan blog ',
    meta: [
      { name: 'keywords', content: "dan的博客 dan blog php Python Golang Vve React" },
      { name: 'description', content: '探索最新的技术趋势和行业动态。我们提供深入的技术分析、实用的开发教程和最佳实践，助您掌握编程技能、了解最新的软件工程方法，并在快速发展的科技领域中保持竞争力。立即加入，开启您的技术之旅！' }
    ]
  })

  // 调用接口获取首页数据
  const { data, pending, error, refresh } = await useAsyncData( () => appApi.getHomeData())
  // 将获取到的数据赋值给
  homeData.value = data.value.data

  </script>
  
  <style scoped>

  
  .bg-02 {
    background: url('../assets/images/page2.jpg') no-repeat;
    background-size: cover;
  }
  .bg-03 {
    background: url('../assets/images/page3.jpg') no-repeat;
    background-size: cover;
  }

  </style>