<template>
    <!-- <canvas ref="canvas" class="absolute z-[-1]"></canvas> -->
    <NuxtLayout>
      <NuxtLoadingIndicator color="blue"/>
      <NuxtPage />
    </NuxtLayout>
</template>
<!-- 
<script setup>
import * as THREE from 'three';

const canvas = ref(null);

onMounted(()=>{
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
    camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 1000)
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

//     window.addEventListener('scroll', function() {
//         sizes.width = window.innerWidth
//         sizes.height = document.body.offsetHeight
//         // Update camera
//         camera.aspect = sizes.width / sizes.height
//         camera.updateProjectionMatrix()

//         // Update renderer
//         renderer.setSize(sizes.width, sizes.height)
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   });

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
        // resize()
        // Call tick again on the next frame
        window.requestAnimationFrame(animate)
    }
    animate()
})



</script> -->