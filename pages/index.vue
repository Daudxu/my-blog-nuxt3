<template>
	<div class="w-full h-full">
		<div class="sections-menu fixed top-[35%] right-7 transform translate-y-1/2">
			<span class="menu-point w-3 h-3 bg-white block my-4 opacity-60 transition duration-400 ease-in-out cursor-pointer" v-bind:class="{active: activeSection == index}" v-on:click="scrollToSection(index)" v-for="(offset, index) in offsets" v-bind:key="index" >
			</span>
		</div>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-blue-100 dark:bg-blue-900 bg-01">

      <div class="container mx-auto p-4">
          <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center justify-center">
       
                <div class="space-y-3">
                <!-- ---------------------------- -->
                <h1 class="text-2xl font-sans font-bold">👨🏻‍💻 About Me </h1>
                <div class="space-y-3" v-html="homeData.about_content"></div>
                <!-- <ul class="flex space-x-3">
                  <li class="">
                      <a href="" title="github" target="_blank">
                        <img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=plastic&logo=gmail&logoColor=white" height="25px" alt="Email">
                          <span class="label">github</span>
                      </a>
                  </li>
                </ul> -->
               </div>
            </div>
            <div class="p-4">
              <img :src="homeData.about_image" class="rounded-2xl" />
            </div>
          </div>
      </div>

		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
        <div class="container mx-auto p-4">
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
              <!-- -------------------------------------- -->
                <div class="p-4">
                  <img :src="homeData.skills_image" class="rounded-2xl" />
                </div>
                <div class="flex items-center justify-center"> 
                  <div class="space-y-3">
                      <h1 class="text-2xl font-sans font-bold">🛠 技术栈 | Tech Stack </h1>
                      <ul class="space-y-3">
                        <li> Hi, I'm Dane👋。 </li>
                        <li class="flex items-center space-x-3 "> 
                          <div>💻</div>
                          <img src="https://camo.githubusercontent.com/e9da2a14c7b3f9cf9792e943d2a39fd0747cf8d940f640b9b1ae5e66868d7011/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782d3333333333333f7374796c653d666c6174266c6f676f3d4c696e7578266c6f676f436f6c6f723d464343363234"/>
                        </li>
                        <li class="flex items-center space-x-3 "> 
                          <div>🌐</div>
                          <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/js.svg" />
                          <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/frameworks/react.svg" />
                          <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/frameworks/vue.svg" />
                          <!-- <img src="https://camo.githubusercontent.com/e9da2a14c7b3f9cf9792e943d2a39fd0747cf8d940f640b9b1ae5e66868d7011/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782d3333333333333f7374796c653d666c6174266c6f676f3d4c696e7578266c6f676f436f6c6f723d464343363234"/>   -->
                        </li>
                        <li class="flex items-center space-x-3 "> 
                          <div>🛢</div>
                          <img src="https://camo.githubusercontent.com/e9da2a14c7b3f9cf9792e943d2a39fd0747cf8d940f640b9b1ae5e66868d7011/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782d3333333333333f7374796c653d666c6174266c6f676f3d4c696e7578266c6f676f436f6c6f723d464343363234"/>  
                        </li>
                        <li class="flex items-center space-x-3 "> 
                          <div>🔧</div>
                          <img src="https://camo.githubusercontent.com/e9da2a14c7b3f9cf9792e943d2a39fd0747cf8d940f640b9b1ae5e66868d7011/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782d3333333333333f7374796c653d666c6174266c6f676f3d4c696e7578266c6f676f436f6c6f723d464343363234"/>  
                        </li>
                      </ul>
                    </div>
                </div>
                 <!-- -------------------------------------- -->
            </div>
       </div>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
      <h1>项目展示</h1>
      <div>
        <div class="block text-center" >
          <!-- <ClientOnly> -->
            <el-carousel :interval="4000" type="card" class="h-[200px] w-[560px] md:h-[300px] md:w-[800px]">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 text="2xl" justify="center">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          <!-- </ClientOnly> -->
        </div>
      </div>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
			<h1>Section 5</h1>
			<p>check the tutorial <a href="" target="_blank">here</a></p>
		</section>
	</div>
  </template>
  
  <script setup>  
	import Typewriter from 'typewriter-effect/dist/core';
  import { useAppStore } from '~~/stores/useAppStore'

  definePageMeta({
    layout: 'no-footer',
  });

  const { appApi } = useApi()
  const store = useAppStore();
	const typewriterTarget = ref(null)
	const inMove = ref(false)
  const inMoveDelay =  ref(400)
	const activeSection = ref(0)
	const offsets = ref([])
  const touchStartY = ref(0)
  const homeData = ref('')

	const calculateSectionOffsets = () => {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        offsets.value.push(sectionOffset);
      }
    }
  
	 const handleMouseWheel = (e) => {
      
      if (e.wheelDelta < 30 && !inMove.value) {
        moveUp();
      } else if (e.wheelDelta > 30 && !inMove.value) {
        moveDown();
      }
        
      e.preventDefault();
      return false;
    }
   
    const handleMouseWheelDOM = (e) => {
      
      if (e.detail > 0 && !inMove.value) {
        moveUp();
      } else if (e.detail < 0 && !inMove.value) {
        moveDown();
      }
      
      return false;
    }
    
	 const moveDown = () => {
      inMove.value = true;
        activeSection.value--;
          
        if(activeSection.value < 0) activeSection.value = offsets.value.length - 1;
          
        scrollToSection(activeSection.value, true);
    }
    
	 const moveUp = () => {
      inMove.value = true;
        activeSection.value++;
          
        if(activeSection.value > offsets.value.length - 1) activeSection.value = 0;
          
        scrollToSection(activeSection.value, true);
    }

	 const scrollToSection = (id, force = false) => {
      if(inMove.value && !force) return false;
      
      activeSection.value = id;
      inMove.value = true;
      
      let section = document.getElementsByTagName('section')[id];
      if(section) {
        document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      }
      
      setTimeout(() => {
        inMove.value = false;
      }, inMoveDelay.value);
      
    }

    const touchStart = (e) => {
      e.preventDefault();
      
      touchStartY.value = e.touches[0].clientY;
    }

    const touchMove = (e) => {
      if(inMove.value) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(touchStartY.value < currentY) {
        moveDown();
      } else {
        moveUp();
      }
      
      touchStartY.value = 0;
      return false;
    }
	onMounted( async () => {
    console.log("useArticleStore", store.someState = 'abc')
		calculateSectionOffsets();
		new Typewriter(typewriterTarget.value, {
			strings: ['Hello, World!', 'Welcome to Vue 3!'],
			autoStart: true,
			loop: true,
		});
		window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);
		window.addEventListener('mousewheel', handleMouseWheel, { passive: false });
		window.addEventListener('touchstart', touchStart, { passive: false });
		window.addEventListener('touchmove', touchMove, { passive: false });
	})

	onBeforeUnmount(() => {
		window.removeEventListener('DOMMouseScroll', handleMouseWheelDOM);
		window.removeEventListener('mousewheel', handleMouseWheel, { passive: false });
		window.removeEventListener('touchstart', touchStart);
		window.removeEventListener('touchmove', touchMove);
	})


  const { data, pending, error, refresh } = await useAsyncData( () => appApi.getHomeData())
  homeData.value = data.value.data

  </script>
  
  <style scoped>
	.sections-menu .menu-point.active {
		opacity: 1;
		transform: scale(1.2);
	}

	.sections-menu .menu-point:hover {
		opacity: 1;
		transform: scale(1.1);
	}

  .bg-01 {
    background: url('../assets/images/h-bg.jpg') no-repeat;
    background-size: cover;
  }

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

/* .el-carousel__indicators--horizontal{
  width: 100%;
} */

.el-carousel__container ul{
  width: 100%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
  </style>