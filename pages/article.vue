<template>
    <div id="scene-container" class="w-[1024px]  mt-20 bg-slate-50 dark:bg-slate-700 rounded-lg md:rounded-xl mx-3 lg:mx-0 shadow-lg md:shadow-xl p-3 xs:p-6 md:p-9">
          
      

    </div>
</template> 

<script setup>
 import { onMounted } from 'vue';
 import * as THREE from 'three';
 
 let scene, camera, renderer

 onMounted(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);
 })
</script>