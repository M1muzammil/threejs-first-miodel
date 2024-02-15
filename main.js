import *  as Three from 'three'
const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

})

const texture = new Three.TextureLoader().load('./images/three.jpeg')
texture.repeat.set(1,1);
// texture.wrapS = Three.RepeatWrapping;
const geometry = new Three.BoxGeometry(2,2,2,2);
const material = new Three.MeshBasicMaterial(
    {
        // color: 0x00ff00,
        wireframe: false,
    map:texture

    }
);
const cube = new Three.Mesh(geometry, material);
scene.add(cube)
camera.position.z = 5;
function animation(){
        requestAnimationFrame(animation)
        cube.rotation.x += 0.01,
        cube.rotation.y += 0.01,
        renderer.render(scene, camera)
    
}
animation()
