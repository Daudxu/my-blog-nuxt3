<template>
	<div class="w-full h-full">
		<div class="sections-menu fixed top-[35%] right-7 transform translate-y-1/2">
			<span class="menu-point w-3 h-3 bg-white block my-4 opacity-60 transition duration-400 ease-in-out cursor-pointer" v-bind:class="{active: activeSection == index}" v-on:click="scrollToSection(index)" v-for="(offset, index) in offsets" v-bind:key="index" >
			</span>
		</div>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-blue-100 dark:bg-blue-900 bg-01">

			<!-- <h1 ref="typewriterTarget" class="text-3xl font-sans font-bold text-lime-600 ">Vue.js Fullpage Scroll </h1>
			<p>by <a href="" target="_blank">webdeasy.de </a></p> -->
      <div class="container mx-auto p-4">
          <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-center justify-center">
       
                <div class="space-y-3">
                <!-- ---------------------------- -->
                <h1 class="text-2xl font-sans font-bold">👨🏻‍💻 About Me </h1>
                <ul class="space-y-3">
                  <li> Hi, I'm Dane👋。</li>
                  <li> 🔭 I’m currently doing a ML Based Project</li>
                  <li> 🌱 I’m currently learning about Neural Networks & Deep Learning</li>
                </ul>
                <ul class="flex space-x-3">
                  <li class="">
                      <a href="" title="github" target="_blank">
                        <img src="https://img.shields.io/badge/gmail-%23D14836.svg?&style=plastic&logo=gmail&logoColor=white" height="25px" alt="Email">
                          <span class="label">github</span>
                      </a>
                  </li>
                  <li class="">
                      <a href="" title="xixi.cn" target="_blank">
                          <i class="social iconfont icon-cnblogs"></i>
                          <span class="label">博客</span>
                      </a>
                  </li>
                  <li class="">
                      <a href="mailto:i@imxixi.cn" title="email">
                          <i class="social iconfont icon-email"></i>
                          <span class="label">email</span>
                      </a>
                  </li>
              </ul>
                <!-- <div> Hi, I'm Dane👋。</div>
                <div>🔭 I’m currently doing a ML Based Project</div>
                <div>🌱 I’m currently learning about Neural Networks & Deep Learning</div>
                <div>👯 I’m looking to collaborate on Projects in Web Development</div>
                <div>👨‍💻 All of my projects are available at parthd06.github.io</div>
                <div>🙌 Active in Communities: Robotics Team of my College</div>
                <div>📫 How to reach me parthdali06@gmail.com</div>
                <div>⚡ Fun fact: I have a good collection of Postal Stamps🖼</div> -->
                <!-- ---------------------------- -->
               </div>
            </div>
            <div class="p-4">
              <img src="http://servers.365coding.cn/resource/image/devel.gif" class="rounded-2xl" />
            </div>
          </div>
      </div>

		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
			<h1>Section 2</h1>
      <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
			<!-- <p>
        <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/html.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/csharp.svg"/>
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/js.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/languages/python.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/frameworks/react.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/frameworks/vue.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/misc/chrome.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/misc/cloud.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/misc/datascience.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/services/aws.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/services/npm.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/services/gcp.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/tools/bash.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/tools/bash.svg" />
       <img src="https://raw.githubusercontent.com/8bithemant/8bithemant/master/svg/dev/tools/visualstudio_code.svg" />
      </p> -->
		</section>
		<!-- <section class="h-screen w-full flex justify-center items-center flex-col bg-red-600 dark:bg-red-900">
			<h1>   ### 🛠 技术栈 | Tech Stack</h1>
			<p>
 

        - 💻 &#160; ![Java](https://img.shields.io/badge/-Java-333333?style=flat&logo=Java&logoColor=007396)
        ![Linux](https://img.shields.io/badge/-Linux-333333?style=flat&logo=Linux&logoColor=FCC624)
        ![聚合支付](https://img.shields.io/badge/-聚合支付-333333?style=flat&logo=payoneer&logoColor=FF4800)
        - 🌐 &#160; ![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
        ![Bootstrap](https://img.shields.io/badge/-Bootstrap-333333?style=flat&logo=bootstrap&logoColor=563D7C)
        ![Node.js](https://img.shields.io/badge/-Node.js-333333?style=flat&logo=node.js)
        ![Vue.js](https://img.shields.io/badge/-VueJS-333333?style=flat&logo=Vue.js)
        - 🛢 &#160; ![MySQL](https://img.shields.io/badge/-MySQL-333333?style=flat&logo=mysql)
        ![MongoDB](https://img.shields.io/badge/-MongoDB-333333?style=flat&logo=mongodb)
        ![Oracle](https://img.shields.io/badge/-Oracle-333333?style=flat&logo=Oracle)
        - 🔧 &#160;![Git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)
        ![GitHub](https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github)
        ![Markdown](https://img.shields.io/badge/-Markdown-333333?style=flat&logo=markdown)
      </p>
		</section> -->
		<section class="h-screen w-full flex justify-center items-center flex-col bg-green-500 dark:bg-green-900">
      <div>
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">123123123</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
			<!-- <h1>Section 4</h1>
			<p>tested in all <span><b>modern browsers</b></span></p> -->
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-cyan-600 dark:bg-cyan-900">
			<h1>Section 5</h1>
			<p>check the tutorial <a href="" target="_blank">here</a></p>
		</section>
	</div>
  </template>
  
  <script setup>
	import Typewriter from 'typewriter-effect/dist/core';
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useAppStore } from '~~/stores/useAppStore'
  import hbg01 from '../assets/images/h-bg.jpg'

  // import { login } from "~~/api/user.ts";

  // const userName = useArticleStore().userName
 const store = useAppStore();

  definePageMeta({
    layout: 'no-footer',
  });

	const typewriterTarget = ref(null)
	const inMove = ref(false)
  const inMoveDelay =  ref(400)
	const activeSection = ref(0)
	const offsets = ref([])
    const touchStartY = ref(0)
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
    // const { data } = await useFetch('/api/hello')

const info = ref()

// const { articleApi } = useApi()
// const sa =  await articleApi.config()
// info.value = sa 
// console.log("info" , info.value)
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
  </style>