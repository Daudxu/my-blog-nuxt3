<template>
	<div class="w-full h-full">
		<div class="sections-menu fixed top-[35%] right-7 transform translate-y-1/2 z-10">
			<span class="menu-point w-3 h-3 bg-white block my-4 opacity-60 transition duration-400 ease-in-out cursor-pointer" v-bind:class="{active: activeSection == index}" v-on:click="scrollToSection(index)" v-for="(offset, index) in offsets" v-bind:key="index" >
			</span>
		</div>
		<section class="h-screen w-full flex justify-center items-center flex-col overflow-hidden">
            <about-section :homeData="homeData"></about-section>
		</section>
		<section class="h-screen w-full flex justify-center items-center flex-col relative bg-02">
        <div class="container mx-auto p-4">
            <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
              <!-- -------------------------------------- -->
                <div class="p-4">
                  <img :src="homeData.skills_image" class="rounded-2xl" />
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
                 <!-- -------------------------------------- -->
            </div>
       </div>
		</section>
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
	</div>
  </template>
  
  <script setup>  
  // import { useAppStore } from '~~/stores/useAppStore';
  import AboutSection from '~~/pages/components/AboutSection'

  definePageMeta({
    layout: 'no-footer',
  });

  const { appApi } = useApi()
  // const store = useAppStore();
 
	const inMove = ref(false)
  const inMoveDelay =  ref(400)
	const activeSection = ref(0)
	const offsets = ref([])
  const touchStartY = ref(0)
  const homeData = ref('')

  useHead({
    title: 'Dan blog ',
    meta: [
      { name: 'keywords', content: "dan的博客 dan blog php Python Golang Vve React" },
      { name: 'description', content: '探索最新的技术趋势和行业动态。我们提供深入的技术分析、实用的开发教程和最佳实践，助您掌握编程技能、了解最新的软件工程方法，并在快速发展的科技领域中保持竞争力。立即加入，开启您的技术之旅！' }
    ]
  })


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
		calculateSectionOffsets();
		window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);
		window.addEventListener('mousewheel', handleMouseWheel, { passive: false });
		window.addEventListener('touchstart', touchStart, { passive: false });
		window.addEventListener('touchmove', touchMove, { passive: false });

    const resHomeData = await appApi.getHomeData()
    homeData.value = resHomeData.data
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
  body {
    overflow-x: hidden;
  }
	.sections-menu .menu-point.active {
		opacity: 1;
		transform: scale(1.2);
	}

	.sections-menu .menu-point:hover {
		opacity: 1;
		transform: scale(1.1);
	}

  /* .bg-01 {
    background: url('../assets/images/h-bg.jpg') no-repeat;
    background-size: cover;
  } */
  .bg-02 {
    background: url('../assets/images/page2.jpg') no-repeat;
    background-size: cover;
  }
  .bg-03 {
    background: url('../assets/images/page3.jpg') no-repeat;
    background-size: cover;
  }

  </style>