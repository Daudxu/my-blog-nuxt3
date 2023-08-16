<template>
	<div class="w-full h-full">
		<div class="sections-menu fixed top-[35%] right-7 transform translate-y-1/2">
			<span class="menu-point w-3 h-3 bg-white block my-4 opacity-60 transition duration-400 ease-in-out cursor-pointer" v-bind:class="{active: activeSection == index}" v-on:click="scrollToSection(index)" v-for="(offset, index) in offsets" v-bind:key="index" >
			</span>
		</div>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-blue-100 dark:bg-blue-900">

			<h1 ref="typewriterTarget" class="text-3xl font-sans font-bold text-lime-600 ">Vue.js Fullpage Scroll</h1>
			<p>by <a href="" target="_blank">webdeasy.de</a></p>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-gray-100 dark:bg-gray-900">
			<h1>Section 2</h1>
			<p>made with <a href="" target="_blank">Vue.js</a></p>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-red-600 dark:bg-red-900">
			<h1>Section 3</h1>
			<p>works on <span><b>desktop & mobile</b></span> devices</p>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col bg-green-500 dark:bg-green-900">
			<h1>Section 4</h1>
			<p>tested in all <span><b>modern browsers</b></span></p>
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
  // import useArticleStore from '@/stores/useArticleStore'
  // const userName = useArticleStore().userName
 

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

	onMounted(() => {
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
  </style>