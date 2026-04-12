/** THREE JS IMPORTS */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const scene = new THREE.Scene()

/** CAMERA */
const sizes = {
    width: 800,
    height: 800
}
const fov = 75
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height)
// move it backwards to   see
camera.position.z = 3
scene.add(camera)

/** AXES HELPER */
// Shows colored axes: X = red, Y = green, Z = blue
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

/** RENDERING */
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/** CONTROLS */
const controls = new OrbitControls(camera, canvas)


/** 3D MODELS */
// loading
const gltfLoader = new GLTFLoader();
let gltfNounoune1 = null;
gltfNounoune1 = await gltfLoader.loadAsync("3dModels/nounoune1/nounoune1.gltf")


let objs = []
objs.push(gltfNounoune1)
addAndRun(objs)

function addAndRun(loadedObjsArray) {
    let nounoune1Model = loadedObjsArray[0].scene.children[0]
    const mixer = new THREE.AnimationMixer(nounoune1Model)
    // console.log(loadedObjsArray)
    scene.add(nounoune1Model)
    const clip = loadedObjsArray[0].animations[0];
    const anim_action = mixer.clipAction(clip);
    console.log(clip)
    anim_action.play()

    let elapsedTime = 0;
    window.requestAnimationFrame(animate);

    function animate(timer) {
        let deltaTime = (timer - elapsedTime) / 1000; // convert ms to seconds
        elapsedTime = timer;

        controls.update();

        if (mixer) {
            console.log("hey")
            mixer.update(deltaTime); // advance the animation by the time since last frame
        }

        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }

    nounoune1Model.scale.x -= .005
    nounoune1Model.scale.y -= .005
    nounoune1Model.scale.z -= .005
}



/** MESHES */
// PLANE
const loader = new THREE.TextureLoader();
const flesh_texture = await loader.loadAsync('textures/flesh_and_stone.png')
flesh_texture.colorSpace = THREE.SRGBColorSpace;
const planeMaterial = new THREE.MeshBasicMaterial({ map: flesh_texture, side: THREE.DoubleSide })
const planeGeometry = new THREE.PlaneGeometry(2, 2)
const floor = new THREE.Mesh(planeGeometry, planeMaterial)
const wall1 = new THREE.Mesh(planeGeometry, planeMaterial)
const wall2 = new THREE.Mesh(planeGeometry, planeMaterial)

scene.add(floor, wall1, wall2)
floor.rotation.x = -Math.PI * 0.5
wall1.position.z = -1
wall1.position.y = 1
wall2.rotation.y = -Math.PI * 0.5
wall2.position.x = -1
wall2.position.y = 1

// LIGHTING
const spotLight = new THREE.SpotLight(0xffffff, 20, 3, Math.PI * 0.15, 0.25, 1);
spotLight.position.set(0, 2, 1)
scene.add(spotLight)
// spotLight.target = nounoune1Model
const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);




