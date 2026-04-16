/** THREE JS IMPORTS */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

const scene = new THREE.Scene()
// nou noune interaction
const raycaster = new THREE.Raycaster()
let mouseWasClicked = false
// noun noune
let currentModel = null
let firstNounoune = true;
let currentIntersectedObj = null;
// storm noune
let currentStormModel = null

/** CAMERA */
const sizes = {
    width: 800,
    height: 800
}
const fov = 75
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height)
camera.position.z = 3
camera.position.y = 1
camera.position.x = 3
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
// Nou Noune
let gltfNounoune1 = null;
gltfNounoune1 = await gltfLoader.loadAsync("3dModels/nounoune/nounoune1.gltf")
let gltfNounoune2 = null;
console.log(gltfNounoune1)
gltfNounoune2 = await gltfLoader.loadAsync("3dModels/nounoune/nounoune2.gltf")
console.log(gltfNounoune2)
//Storm Noune
let gltfStormNoune1 = null;
gltfStormNoune1 = await gltfLoader.loadAsync("3dModels/stormNoune/stormNoune1.gltf")
let gltfStormNoune2 = null;
gltfStormNoune2 = await gltfLoader.loadAsync("3dModels/stormNoune/stormNoune2.gltf")
let gltfStormNoune3 = null;
gltfStormNoune3 = await gltfLoader.loadAsync("3dModels/stormNoune/stormNoune3.gltf")
let gltfStormNoune4 = null;
gltfStormNoune4 = await gltfLoader.loadAsync("3dModels/stormNoune/stormNoune4.gltf")
let gltfStormNoune5 = null;
gltfStormNoune5 = await gltfLoader.loadAsync("3dModels/stormNoune/stormNoune5.gltf")
//Dude Noune
let gltfDudeNoune = null;
gltfDudeNoune = await gltfLoader.loadAsync("3dModels/dudeNoune/dudeNoune.gltf")
// phone
let gltfPhone = null;
gltfPhone = await gltfLoader.loadAsync("3dModels/phone/phone.gltf")



// adding 3d models to scene
let objs = []
objs.push(gltfNounoune1)
objs.push(gltfNounoune2)
objs.push(gltfStormNoune1)
objs.push(gltfStormNoune2)
objs.push(gltfStormNoune3)
objs.push(gltfStormNoune4)
objs.push(gltfStormNoune5)
objs.push(gltfDudeNoune)
objs.push(gltfPhone)
console.log(objs[2])

addAndRun(objs)
async function addAndRun(loadedObjsArray) {
    // nou noune
    currentModel = SkeletonUtils.clone(loadedObjsArray[0].scene.children[0])
    console.log(currentModel)
    scene.add(currentModel)

    // dude noune
    let dudeNouneModel = loadedObjsArray[7].scene.children[0]
    scene.add(dudeNouneModel)
    dudeNouneModel.scale.set(.5, .5, .5)
    dudeNouneModel.position.set(4, 0, 0)

    // storm noune
    currentStormModel = SkeletonUtils.clone(loadedObjsArray[2].scene.children[0])
    // let stormNoune1Model = loadedObjsArray[2].scene.children[0]
    scene.add(currentStormModel)
    currentStormModel.scale.set(0.55, 0.55, 0.55)
    currentStormModel.position.set(2, 0, 0)

    //mixers
    let mixer = new THREE.AnimationMixer(currentModel)
    let mixerTwo = new THREE.AnimationMixer(dudeNouneModel)

    // animation nou noune
    let clip = loadedObjsArray[0].animations[2];
    let anim_action = mixer.clipAction(clip);
    anim_action.play()
    // animation nou noune
    let clipTwo = loadedObjsArray[7].animations[0];
    let anim_action_two = mixerTwo.clipAction(clipTwo);
    anim_action_two.play()

    let elapsedTime = 0;
    let index = 2;
    let previousTime = 0;
    window.requestAnimationFrame(animate);
    function animate(timer) {
        // time stuff for clicking event
        let deltaTime = (timer - elapsedTime) / 1000; // convert ms to seconds
        elapsedTime = timer;
        // controls stuff
        controls.update();

        // Storm Noune changing poses
        let myTimer = Math.ceil((timer / 1000))
        console.log(myTimer)
        if (myTimer % 3 === 0 && previousTime !== myTimer) {
            if (index === 6) {
                index = 2
            }
            else {
                index++
            }
            scene.remove(currentStormModel)
            currentStormModel = SkeletonUtils.clone(loadedObjsArray[index].scene.children[0])
            scene.add(currentStormModel)
            currentStormModel.scale.set(.55, .55, .55)
            currentStormModel.position.set(2, 0, 0)
        }
        previousTime = myTimer

        // Nou Noune clicking event
        if (mouseWasClicked) {
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(currentModel)
            if (intersects[0] !== undefined) {
                currentIntersectedObj = intersects[0]
            }
            if (currentIntersectedObj !== null) {
                console.log(currentIntersectedObj)
                if (firstNounoune) {
                    scene.remove(currentModel)
                    currentModel = SkeletonUtils.clone(loadedObjsArray[1].scene.children[0])
                    scene.add(currentModel)
                    currentModel.scale.set(.55, .55, .55)
                    firstNounoune = false
                    mixer.stopAllAction()
                    mixer = new THREE.AnimationMixer(currentModel)
                    clip = loadedObjsArray[1].animations[2];
                    anim_action = mixer.clipAction(clip);
                    anim_action.play()
                    console.log(anim_action)
                    console.log(clip)
                }
                else {
                    scene.remove(currentModel)
                    currentModel = SkeletonUtils.clone(loadedObjsArray[0].scene.children[0])
                    scene.add(currentModel)
                    currentModel.scale.set(.55, .55, .55)
                    firstNounoune = true
                    mixer.stopAllAction()
                    mixer = new THREE.AnimationMixer(currentModel)
                    clip = loadedObjsArray[0].animations[2];
                    anim_action = mixer.clipAction(clip);
                    anim_action.play()
                    console.log(anim_action)
                    console.log(clip)
                }
            }
            mouseWasClicked = false;
            currentIntersectedObj = null;
        }
        if (mixer) {
            mixer.update(deltaTime); // advance the animation by the time since last frame
        }
        if (mixerTwo) {
            mixerTwo.update(deltaTime); // advance the animation by the time since last frame
        }
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }
    // nou noune
    currentModel.scale.set(.55, .55, .55)

    /** MESHES */
    const loader = new THREE.TextureLoader();
    const planeGeometry = new THREE.PlaneGeometry(2, 2)
    // room one
    const walls1_texture = await loader.loadAsync('textures/walls1.png')
    walls1_texture.colorSpace = THREE.SRGBColorSpace;
    const floor1_texture = await loader.loadAsync('textures/floor.png')
    floor1_texture.colorSpace = THREE.SRGBColorSpace;
    const floor1Material = new THREE.MeshBasicMaterial({ map: floor1_texture, side: THREE.DoubleSide })
    const walls1Material = new THREE.MeshBasicMaterial({ map: walls1_texture, side: THREE.DoubleSide })
    const floor = new THREE.Mesh(planeGeometry, floor1Material)
    const wall1 = new THREE.Mesh(planeGeometry, walls1Material)
    const wall2 = new THREE.Mesh(planeGeometry, walls1Material)
    scene.add(floor, wall1, wall2)
    floor.rotation.x = -Math.PI * 0.5
    wall1.position.z = -1
    wall1.position.y = 1
    wall2.rotation.y = -Math.PI * 0.5
    wall2.position.x = -1
    wall2.position.y = 1
    // room two
    const walls2_texture = await loader.loadAsync('textures/walls2.png')
    walls2_texture.colorSpace = THREE.SRGBColorSpace;
    const floor2_texture = await loader.loadAsync('textures/floor2.png')
    floor2_texture.colorSpace = THREE.SRGBColorSpace;
    const floor2Material = new THREE.MeshBasicMaterial({ map: floor2_texture, side: THREE.DoubleSide })
    const walls2Material = new THREE.MeshBasicMaterial({ map: walls2_texture, side: THREE.DoubleSide })
    const floor2 = new THREE.Mesh(planeGeometry, floor2Material)
    const wall3 = new THREE.Mesh(planeGeometry, walls2Material)
    scene.add(floor2, wall3)
    floor2.rotation.x = -Math.PI * 0.5
    floor2.position.x = 2
    wall3.position.z = -1
    wall3.position.y = 1
    wall3.position.x = 2
    // room three
    const walls3_texture = await loader.loadAsync('textures/walls3.png')
    walls3_texture.colorSpace = THREE.SRGBColorSpace;
    const floor3_texture = await loader.loadAsync('textures/floor3.png')
    floor3_texture.colorSpace = THREE.SRGBColorSpace;
    const floor3Material = new THREE.MeshBasicMaterial({ map: floor3_texture, side: THREE.DoubleSide })
    const walls3Material = new THREE.MeshBasicMaterial({ map: walls3_texture, side: THREE.DoubleSide })
    const floor3 = new THREE.Mesh(planeGeometry, floor3Material)
    const wall4 = new THREE.Mesh(planeGeometry, walls3Material)
    const wall5 = new THREE.Mesh(planeGeometry, walls3Material)
    scene.add(floor3, wall4, wall5)
    floor3.rotation.x = -Math.PI * 0.5
    floor3.position.x = 4
    wall4.position.z = -1
    wall4.position.y = 1
    wall4.position.x = 4
    wall5.rotation.y = -Math.PI * 0.5
    wall5.position.x = 5
    wall5.position.y = 1

    // LIGHTING
    const spotLight = new THREE.SpotLight(0xffffff, 10, 3, Math.PI * 0.15, 0.25, 1);
    spotLight.position.set(0, 2, 1)
    scene.add(spotLight)
    spotLight.target = floor
    const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);

    const spotLight2 = new THREE.SpotLight(0xffffff, 10, 3, Math.PI * 0.15, 0.25, 1);
    spotLight2.position.set(2, 2, 1)
    scene.add(spotLight2)
    spotLight2.target = floor2
    const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
    scene.add(spotLightHelper2);

    const spotLight3 = new THREE.SpotLight(0xffffff, 10, 3, Math.PI * 0.15, 0.25, 1);
    spotLight3.position.set(4, 2, 1)
    scene.add(spotLight3)
    spotLight3.target = floor3
    const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3);
    scene.add(spotLightHelper3);
}

const mouse = new THREE.Vector2();
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1; //map to between -1,1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1; //map to between -1,1
});

window.addEventListener("click", function (event) {
    console.log("click")
    mouseWasClicked = true
})
