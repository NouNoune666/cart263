
import * as THREE from 'three';

const scene = new THREE.Scene()

// // A: the geometry -- a cube, 1 unit x 1 unit x 1 unit
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// // B: the material -- solid purple color
// const material = new THREE.MeshBasicMaterial({ color: 0x800080 })
// // C: combine them into a Mesh

// // MESH ONE
// const mesh = new THREE.Mesh(geometry, material)
// // D: add to the scene -- nothing shows up until you do this!
// scene.add(mesh)
// mesh.position.x = 0
// mesh.position.y = 0
// mesh.position.z = -1
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25
// // mesh.rotation.z = Math.PI * 0.25

// // MESH TWO
// const mesh_2 = new THREE.Mesh(geometry, material)
// mesh_2.position.x = 1.5
// mesh_2.position.y = 1.25
// mesh_2.position.z = -1
// scene.add(mesh_2)

// MESHES
// material
// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color('rgb(219, 129, 217)')
// textures
// Step 1: create a TextureLoader instance
// const loader = new THREE.TextureLoader();
// // Step 2: load the image (put it in a /textures folder in your project)
// const water_texture = await loader.loadAsync('textures/Ice002_1K-JPG_Color.jpg');
// // Step 3: set the color space -- this ensures colors are encoded correctly
// water_texture.colorSpace = THREE.SRGBColorSpace;
// // Step 4: apply it to the material using the 'map' property
// const material = new THREE.MeshBasicMaterial({
//     map: water_texture
// })
// material.color = new THREE.Color('#f1b6fb')
// water_texture.colorSpace = THREE.SRGBColorSpace;
// // shapes
// const sphereGeometry = new THREE.SphereGeometry(0.5, 16, 16);
// const sphere = new THREE.Mesh(sphereGeometry, material)
// sphere.position.x = -1.5
// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(1, 1),
//     material
// )
// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.5, 0.3, 16, 32),
//     material
// )
// torus.position.x = 1.5
// // You can add multiple objects at once!
// scene.add(sphere, plane, torus)

// GROUP MESHES
// Create a group and add it to the scene
// const group = new THREE.Group()
// scene.add(group)
// // Create objects and add them to the GROUP instead of the scene
// const cube1 = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// )
// cube1.position.x = 1.5
// group.add(cube1)
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(.75, 32, 16),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
// )
// sphere.position.y = 1.5
// sphere.position.x = 3
// group.add(sphere)
// group.position.x = -1
// group.rotation.x = Math.PI * .25
// group.scale.set(.5, .5, .5)

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
const mesh_2 = new THREE.Mesh(geometry, material)
scene.add(mesh_2)
mesh_2.position.x = -2

// ANIMATION
// window.requestAnimationFrame(animate)
// // function animate() {
// //     mesh.rotation.y += 0.01
// //     renderer.render(scene, camera)  // re-render every frame
// //     window.requestAnimationFrame(animate)
// // }
// let elapsedTime = 0
// function animate(timer) {
//     // How many ms since the last frame?
//     let deltaTime = timer - elapsedTime
//     // Update elapsedTime for next frame
//     elapsedTime = timer
//     // Multiply by deltaTime so speed is consistent regardless of frame rate
//     mesh.rotation.y += 0.01 * deltaTime
//     // mesh_2 moves in a circle over time
//     mesh_2.position.x = Math.cos(elapsedTime / 1000)
//     mesh_2.position.y = Math.sin(elapsedTime / 1000)

//     renderer.render(scene, camera)
//     window.requestAnimationFrame(animate)
// }

// CAMERA
const sizes = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// window.requestAnimationFrame(animate)
// function animate(timer) {
//     camera.position.x = Math.cos(timer / 1000)
//     camera.position.y = Math.sin(timer / 1000)
//     renderer.render(scene, camera)  // re-render every frame
//     window.requestAnimationFrame(animate)
// }
// camera.lookAt(group.position)
// camera.lookAt(new THREE.Vector3(0, -1, 0))
// or point it directly at another object:
// camera.lookAt(sphere.position)

// // WIREFRAME
// material.wireframe = true

// // OPACITY AND TRANSPARENCY
// // You MUST set transparent to true first, otherwise opacity does nothing
// material.transparent = true
// material.opacity = 0.3

// RENDERING
const canvas = document.querySelector('canvas#three-ex')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// Shows colored axes: X = red, Y = green, Z = blue
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)
axesHelper.position.x = -1;
axesHelper.position.y = -1;

// this stays at the very end, after everything has been added to the scene
renderer.render(scene, camera)

