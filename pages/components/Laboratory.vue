<template>
    <div class="w-full h-full relative">
        <canvas ref="canvas" class="absolute z-[-1]"></canvas>
        <div class="w-full text-slate-50">abc</div>
    </div>
</template>

<script setup>
import * as THREE from 'three';
const canvas = ref(null);





onMounted(() => {
    
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 创建立方体并添加到场景
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    // 添加动画循环
    const animate = () => {
        requestAnimationFrame(animate);

        // 旋转立方体
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };
    animate();
})

</script>