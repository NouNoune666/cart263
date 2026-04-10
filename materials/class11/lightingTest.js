/** THREE JS AND ORBIT CONTROLS */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/** SCENE */
const scene = new THREE.Scene()

/** CAMERA */
const sizes = { width: 800, height: 600 }
const canvas = document.querySelector('canvas#three-ex')
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;
scene.add(camera)
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)

/** CONTROLS */
const controls = new OrbitControls(camera, canvas)

/** MESHES */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshStandardMaterial({})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)
const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2
const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), material)
scene.add(plane)
plane.rotation.x = -Math.PI * 0.5
plane.position.y = -.5;
plane.position.z = 1;
plane.position.x = -1;

/** LIGHT */
// ambient
// const ambientLight = new THREE.AmbientLight()
// scene.add(ambientLight)
// ambientLight.color = new THREE.Color(0xff0000)
// ambientLight.intensity = .5;
// // directional
// const directionalLight = new THREE.DirectionalLight()
// directionalLight.color = new THREE.Color(0xFFA500)
// scene.add(directionalLight)
// directionalLight.position.set(-5, 5, 0)
// point 
const pointLight = new THREE.PointLight(0xff9000, 1.5)
scene.add(pointLight)
console.log(pointLight.position) // default position is 0,0,0
pointLight.position.set(-2, 1, 0)
pointLight.intensity = 5
pointLight.distance = 0
// pointLight.decay = 1
const spotLight = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1)
spotLight.position.set(0, 2, 3)
scene.add(spotLight)
// Must add target to the scene manually even though it's invisible
scene.add(spotLight.target)
// Now you can set a new target position
spotLight.target.position.x = -2
const helper = new THREE.PointLightHelper(pointLight, 10);
scene.add(helper);

// Shows colored axes: X = red, Y = green, Z = blue
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)


/** ANIMATION and RENDERING (keep at end) */
window.requestAnimationFrame(animate);
function animate() {
    controls.update()
    // let x = directionalLight.position.x
    // x += .02
    // directionalLight.position.set(x, 5, 0)
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

