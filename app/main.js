




// // src/main.js
// import * as Three from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Umg from "./images/three.jpeg"
// // Create a scene
// const scene = new Three.Scene();

// // Create a camera
// const camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 5);

// // Create a renderer
// const renderer = new Three.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const texture = new Three.TextureLoader().load(Umg);
// texture.repeat.set(1, 1);
// texture.wrapS = Three.RepeatWrapping;
// texture.wrapT = Three.RepeatWrapping;
// texture.magFilter = Three.NearestFilter;
// texture.minFilter = Three.NearestFilter;
// texture.generateMipmaps = false;
// texture.needsUpdate = true;


// // Create a cube geometry
// const geometry = new Three.BoxGeometry();
// const material = new Three.MeshBasicMaterial({ 
//     map: texture,
// });
// const cube = new Three.Mesh(geometry, material);
// scene.add(cube);

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true; // Smoothly animates the camera movement
// controls.dampingFactor = 0.25; // Controls the damping factor (the lower the value, the slower the damping)
// controls.rotateSpeed = 0.5; // Controls the speed of rotation

// // Add ambient light
// scene.add(new Three.AmbientLight(
    

    
    
//     ));

// // Add directional light
// const directionalLight = new Three.DirectionalLight(0.5);
// directionalLight.position.set(0, 10, 0);
// scene.add(directionalLight);

// // Resize handling
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update(); // Update controls in each frame
//     renderer.render(scene, camera);
// }

// animate();


// import * as Three from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // Create a scene
// const scene = new Three.Scene();

// // Create a camera
// const camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 5);

// // Create a renderer
// const renderer = new Three.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Load image texture
// const textureLoader = new Three.TextureLoader();
// const texture = textureLoader.load('./images/three.png');
// console.log(texture);
// // Create a cube geometry
// const geometry = new Three.BoxGeometry();
// const material = new Three.MeshBasicMaterial({ map: texture }); // Apply the texture to the material
// const cube = new Three.Mesh(geometry, material);
// scene.add(cube);

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.rotateSpeed = 0.5;

// // Add ambient light
// scene.add(new Three.AmbientLight(0xffffff, 0.5));

// // Add directional light
// const directionalLight = new Three.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(0, 10, 0);
// scene.add(directionalLight);

// // Resize handling
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();














// import * as Three from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Umg from "./images/three.jpeg";

// // Create a scene
// const scene = new Three.Scene();

// // Create a camera
// const camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 5);

// // Create a renderer
// const renderer = new Three.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Load image texture
// const texture = new Three.TextureLoader().load(Umg);
// texture.repeat.set(1, 1);
// texture.wrapS = Three.RepeatWrapping;
// texture.wrapT = Three.RepeatWrapping;
// texture.magFilter = Three.NearestFilter;
// texture.minFilter = Three.NearestFilter;
// texture.generateMipmaps = false;
// texture.needsUpdate = true;

// // Create a cube geometry
// const geometry = new Three.BoxGeometry();
// const material = new Three.MeshBasicMaterial({ map: texture });
// const cube = new Three.Mesh(geometry, material);
// scene.add(cube);

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.rotateSpeed = 0.5;

// // Add ambient light
// scene.add(new Three.AmbientLight(0xffffff, 0.5));

// // Add directional light
// const directionalLight = new Three.DirectionalLight(0xffffff, 0.5);
// directionalLight.position.set(0, 10, 0);
// scene.add(directionalLight);

// // Resize handling
// window.addEventListener('resize', () => {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
    
//     // Automatic scrolling
//     camera.position.z -= 0.01; // Move the camera along the z-axis
//     camera.lookAt(scene.position); // Look at the center of the scene
    
//     controls.update(); // Update controls in each frame
//     renderer.render(scene, camera);
// }

// animate();



import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Umg from "./images/three.jpeg";

// Create a scene
const scene = new Three.Scene();

// Create a camera
const camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5);

// Create a renderer
const renderer = new Three.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load image texture
const texture = new Three.TextureLoader().load(Umg);
texture.repeat.set(1, 1);
texture.wrapS = Three.RepeatWrapping;
texture.wrapT = Three.RepeatWrapping;
texture.magFilter = Three.NearestFilter;
texture.minFilter = Three.NearestFilter;
texture.generateMipmaps = false;
texture.needsUpdate = true;

// Create a cube geometry
const geometry = new Three.BoxGeometry();
const material = new Three.MeshBasicMaterial({ map: texture });
const cube = new Three.Mesh(geometry, material);
scene.add(cube);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.rotateSpeed = 0.5;

// Add ambient light
scene.add(new Three.AmbientLight(0xffffff, 0.5));

// Add directional light
const directionalLight = new Three.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

// Resize handling
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotation animation
    cube.rotation.x += 0.01; // Rotate the cube around the x-axis
    cube.rotation.y += 0.01; // Rotate the cube around the y-axis
    
    controls.update(); // Update controls in each frame
    renderer.render(scene, camera);
}

animate();
