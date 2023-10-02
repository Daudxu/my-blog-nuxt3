<template >
    <canvas ref="canvas" class="absolute z-[-1]"></canvas>
    <div id="WebGL-output" class="container mx-auto p-4">

        <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-center">
            <div class="space-y-3 md:space-y-6">
            <!-- ---------------------------- -->
                <h1 class="text-xl md:text-2xl font-sans font-bold" ref="typewriterTarget">Hey 👋, I'm Dan</h1>
                <p class="text-lg md:text-xl font-medium">你好！我是Dan，一个对编程充满激情的开发者。我喜欢探索新技术、构建创意项目，并且乐于与开源社区分享我的经验。我的主要兴趣领域包括[您的兴趣领域，例如：Web开发、数据科学等]。我喜欢挑战自己，不断学习，同时也愿意帮助他人解决技术问题。</p>
                <div class="space-y-3" v-html="homeData.about_content"></div>
                <ul class="flex space-x-3">
                    <li class="">
                        <a href="" title="github" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                        </a>
                    </li>
                    <li class="">
                        <a href="" title="github" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                        </a>
                    </li>
                </ul>
            <!-- ---------------------------- -->
        </div>
        </div>
        <div class="p-4">
            <img :src="homeData.about_image" class="rounded-2xl shadow-2xl" />
        </div>
        </div>
    </div>
</template>

<script setup>
import Typewriter from 'typewriter-effect/dist/core';
import * as THREE from 'three';

const props = defineProps({
    homeData: Object,
});

const typewriterTarget = ref(null)
const canvas = ref(null);

onMounted(()=>{

    new Typewriter(typewriterTarget.value, {
        strings: ["Hey 👋, I'm Dan", "Welcome to my website!"],
        autoStart: true,
        loop: true,
    });

    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    let scene, camera, renderer, geometry = null, material = null, points = null;
    const parameters = {}
    parameters.count = 2000
    parameters.randomness = 0.5
    parameters.randomnessPower = 3
    parameters.sizeMin = 1.0
    parameters.sizeMax = 4.0
    parameters.opacityMin = 0.1
    parameters.opacityMax = 0.4
    parameters.gravity = 25.0

    let wind = {
        current: 0,
        force: 0.1,
        target: 0.1,
        min: 0.1,
        max: 0.2,
        easing: 0.005
    }

    // 创建一个场景
    scene = new THREE.Scene();

    // 创建一个相机
    camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
    camera.position.x = -0.25
    camera.position.y = 0
    camera.position.z = 5
    scene.add(camera)

    // 创建一个渲染器
    renderer = new THREE.WebGLRenderer({
        canvas: canvas.value,
        alpha: true,
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 设置背景图片
    const loader = new THREE.TextureLoader();
    loader.load('./images/bg.jpg', (texture) => {
        scene.background = texture;
    });


    // =========================================================



    const generateSnow = () =>
    {
        if(points !== null)
        {
            geometry.dispose()
            material.dispose()
            scene.remove(points)
        }

        /**
         * Geometry
         */
        geometry = new THREE.BufferGeometry()

        const positions = new Float32Array(parameters.count * 3)
        const scales = new Float32Array(parameters.count * 1)
        const randomness = new Float32Array(parameters.count * 3)
        const speeds = new Float32Array(parameters.count * 3)
        const rotations = new Float32Array(parameters.count * 3)
        const opacities = new Float32Array(parameters.count * 1)

        for(let i = 0; i < parameters.count; i++)
        {
            const i3 = i * 3

            // Position
            positions[i3  ] = (Math.random() - 0.5) * 12
            positions[i3 + 1] = (Math.random() - 0.5) * 12
            positions[i3 + 2] = (Math.random() - 0.5) * 12

            // Randomness
            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness
            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness
            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : - 1) * parameters.randomness

            // Random Positioning
            randomness[i3 + 0] = randomX
            randomness[i3 + 1] = randomY
            randomness[i3 + 2] = randomZ

            // Random Positioning
            opacities[i3 + 0] = Math.random() * (parameters.opacityMax - parameters.opacityMin) + parameters.opacityMin

            // Scale
            scales[i] = Math.random() * (parameters.sizeMax - parameters.sizeMin) + parameters.sizeMin

            // Speeds
            speeds[i3 + 0] =  1 + Math.random()
            speeds[i3 + 1] = Math.random() * (0.06 - 0.05) + 0.05
            speeds[i3 + 2] = Math.random() * (0.2 - 0.05) + 0.05

            // Rotations
            rotations[i3 + 0] = Math.random() * 2 * Math.PI
            rotations[i3 + 1] = Math.random() * 20
            rotations[i3 + 2] = Math.random() * 10
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
        geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3))
        geometry.setAttribute('aSpeed', new THREE.BufferAttribute(speeds, 3))
        geometry.setAttribute('aRotation', new THREE.BufferAttribute(rotations, 3))
        geometry.setAttribute('aOpacity', new THREE.BufferAttribute(opacities, 1))

        /**
         * Textures
         */
        const textureLoader = new THREE.TextureLoader()
        const particleTexture = textureLoader.load('./images/snowflake.png')  
        
        /**
         * Material
         */
        material = new THREE.ShaderMaterial({
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            vertexColors: true,
            vertexShader: `
            precision mediump float;

            attribute vec4 aPosition;
            attribute float aOpacity;
            attribute float aScale;
            attribute vec3 aRotation;
            attribute float aSize;
            attribute vec3 aSpeed;

            uniform float uTime;
            uniform float uSize;
            uniform float uGravity;
            uniform vec3 uSpeed;
            uniform vec3 uWorldSize;
            uniform mat4 uProjection;
            uniform float uWind;

            varying float vRotation;
            varying float vOpacity;

            void main() {

                vec4 modelPosition = modelMatrix * vec4(position, 1.5);

                vOpacity = aOpacity;

                vRotation = aRotation.x + uTime * aRotation.y;

                modelPosition.x = mod(modelPosition.x + uTime + uWind * aSpeed.x, uWorldSize.x * 2.0) - uWorldSize.x;

                modelPosition.y = mod(modelPosition.y - uTime * aSpeed.y * uGravity, uWorldSize.y * 2.0) - uWorldSize.y;

                modelPosition.x += (sin(uTime * aSpeed.z) * aRotation.z);
                modelPosition.z += cos(uTime * aSpeed.z) * aRotation.z;

                vec4 viewPosition = viewMatrix * modelPosition;
                vec4 projectedPosition = projectionMatrix * viewPosition;
                gl_Position = projectedPosition;

                gl_PointSize = uSize * aScale;
                gl_PointSize *= ( 1.0 / - viewPosition.z );
            }
            `,
            fragmentShader: `
            precision mediump float;
            varying float vOpacity;
            uniform sampler2D uTexture;

            varying float vRotation;

            void main() {

                vec2 rotated = vec2(
                cos(vRotation) * (gl_PointCoord.x - 0.5) + sin(vRotation) * (gl_PointCoord.y - 0.5) + 0.5,
                cos(vRotation) * (gl_PointCoord.y - 0.5) - sin(vRotation) * (gl_PointCoord.x - 0.5) + 0.5
                );

                vec4 snowflake = texture2D(uTexture, rotated);

                gl_FragColor = vec4(snowflake.rgb, snowflake.a * vOpacity);
            }
            `,
            uniforms: {
            uTime: { value: 0 },
            uSize: { value: 30 * renderer.getPixelRatio() },
            uSpeed: { value: new THREE.Vector3(0.0000001, 0.02, Math.random()) },
            uGravity: { value: parameters.gravity },
            uWorldSize: { value: new THREE.Vector3(6, 6, 6) },
            uTexture: { value: particleTexture },
            uRotation: { value: new THREE.Vector3(1, 1, 1) },
            uWind:{ value: 0 },
            }
        })

        /**
         * Points
         */
        points = new THREE.Points(geometry, material)
        scene.add(points)
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()

        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    /**
     * Generate snow
     */
    generateSnow()


    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const animate = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime
        
        // Wind Calculation
        wind.force += ( wind.target - wind.force ) * wind.easing
        wind.current += wind.force * ( deltaTime * 0.2 )

        // Current Wind Uniform
        material.uniforms.uWind.value = wind.current

        if ( Math.random() > 0.995 ) {
            wind.target = ( wind.min + Math.random() * ( wind.max - wind.min ) ) * ( Math.random() > 0.5 ? -1 : 1 ) * 100
        }
        
        // Elapsed Time Uniform update
        material.uniforms.uTime.value = elapsedTime

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(animate)
    }
    animate()
    // =========================================================
})



</script>