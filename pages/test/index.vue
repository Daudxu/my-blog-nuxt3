<template>
   <div class="w-full">
           <canvas ref="canvas"></canvas>
   </div>    
</template>

<script setup>
import * as THREE from 'three';
import * as YUKA from 'yuka';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

definePageMeta({
    layout: 'no-header-footer',
    index: 1,
});

const canvas = ref(null)


onMounted(() => {
    let scene, camera, renderer
    // 创建场景
    scene = new THREE.Scene();
    // 设置背景图片
    const loader = new THREE.TextureLoader();
    loader.load('./images/bg.jpg', (texture) => {
        scene.background = texture;
    });

    // 创建相机
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
    renderer.setSize(window.innerWidth, window.innerHeight);


    // scene.add(cube);
    const planeGeometry = new THREE.PlaneGeometry( 2, 2 );
    // 使用TextureLoader加载图片纹理
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./images/bg.jpg'); 
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh( planeGeometry, material );
    scene.add( plane );

    
    // 创建一个变量来保存原始平面的缩放
    const originalScale = plane.scale.clone();

    // 创建一个射线投射器
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // 添加鼠标移动事件监听器
    document.addEventListener('mousemove', (event) => {
    // 将鼠标坐标转换为Three.js坐标系中的坐标
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // 更新射线投射器的位置
    raycaster.setFromCamera(mouse, camera);

    // 检测鼠标与平面的交点
    const intersects = raycaster.intersectObject(plane);

    if (intersects.length > 0) {
        // 鼠标移入时放大平面
        plane.scale.set(originalScale.x * 1.2, originalScale.y * 1.2, 1);
    } else {
        // 鼠标移出时恢复原始缩放
        plane.scale.copy(originalScale);
    }
    });

    // 使平面可接收鼠标事件
    plane.userData.interactive = true;

    // 添加动画循环
    const animate = () => {
        requestAnimationFrame(animate);

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    };
    animate();
})

// const renderer = new THREE.WebGLRenderer({antialias: true});

// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// renderer.setClearColor(0xA3A3A3);

// const camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );

// camera.position.set(0, 10, 15);
// camera.lookAt(scene.position);

// const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
// directionalLight.position.set(0, 10, 10);
// scene.add(directionalLight);

// const vehicle = new YUKA.Vehicle();

// function sync(entity, renderComponent) {
//     renderComponent.matrix.copy(entity.worldMatrix);
// }

// const path = new YUKA.Path();
// path.add( new YUKA.Vector3(-6, 0, 4));
// path.add( new YUKA.Vector3(-12, 0, 0));
// path.add( new YUKA.Vector3(-6, 0, -12));
// path.add( new YUKA.Vector3(0, 0, 0));
// path.add( new YUKA.Vector3(8, 0, -8));
// path.add( new YUKA.Vector3(10, 0, 0));
// path.add( new YUKA.Vector3(4, 0, 4));
// path.add( new YUKA.Vector3(0, 0, 6));

// path.loop = true;

// vehicle.position.copy(path.current());

// vehicle.maxSpeed = 3;

// const followPathBehavior = new YUKA.FollowPathBehavior(path, 3);
// vehicle.steering.add(followPathBehavior);

// const onPathBehavior = new YUKA.OnPathBehavior(path);
// //onPathBehavior.radius = 2;
// vehicle.steering.add(onPathBehavior);

// const entityManager = new YUKA.EntityManager();
// entityManager.add(vehicle);

// const loader = new GLTFLoader();
// loader.load('./assets/SUV.glb', function(glb) {
//     const model = glb.scene;
//     //model.scale.set(0.5, 0.5, 0.5);
//     scene.add(model);
//     model.matrixAutoUpdate = false;
//     vehicle.scale = new YUKA.Vector3(0.5, 0.5, 0.5);
//     vehicle.setRenderComponent(model, sync);
// });

// const position = [];
// for(let i = 0; i < path._waypoints.length; i++) {
//     const waypoint = path._waypoints[i];
//     position.push(waypoint.x, waypoint.y, waypoint.z);
// }

// const lineGeometry = new THREE.BufferGeometry();
// lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));

// const lineMaterial = new THREE.LineBasicMaterial({color: 0xFFFFFF});
// const lines = new THREE.LineLoop(lineGeometry, lineMaterial);
// scene.add(lines);

// const time = new YUKA.Time();

// function animate() {
//     const delta = time.update().getDelta();
//     entityManager.update(delta);
//     renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);

// window.addEventListener('resize', function() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

</script>