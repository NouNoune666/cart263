
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/*SCENE*/
const scene = new THREE.Scene()
const sizes = { width: 800, height: 600 }
const canvas = document.querySelector('canvas#three-ex')

/*CAMERA*/
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)

/*MESHES*/
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// mesh 1
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
// mesh 2
const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -1.5;
const scale = 1.3;
mesh_2.scale.x = scale
mesh_2.scale.y = scale
mesh_2.scale.z = scale


/*CONTROLS*/
// Controls -- pass it the camera and the canvas
const controls = new OrbitControls(camera, canvas)
// By default the controls look at the center of the scene (0,0,0)
// You can change the target to focus on a specific object:
controls.target = mesh.position

/*ANIMATION*/
window.requestAnimationFrame(animate)
function animate(timer) {
    camera.position.x = Math.cos(timer / 1000)
    camera.position.y = Math.sin(timer / 1000)
    controls.enableDamping = true;
    controls.dampingFactor = 0.9;
    controls.update()
    controls.target.y = -2
    //console.log(camera.position.x)
    renderer.render(scene, camera)
    window.requestAnimationFrame(animate)
}