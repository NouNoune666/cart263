/** THREE JS IMPORTS */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { Avatar } from './Avatar.js';

let audio = new Audio('audio/cas_music_sims.wav')
let soundStarted = false;
// console.log(audio)

const scene = new THREE.Scene()
const raycaster = new THREE.Raycaster() // for avatar interaction

// for mouse events
let mouseWasClicked = false
let mouseIsOver = true
// nou noune
// let currentModel = null
// let firstNounoune = true;
let currentIntersectedObj = null;
// storm noune
let currentStormModel = null

/** CAMERA */
const sizes = {
    width: 600,
    height: 600
}
const fov = 75
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height)
camera.position.z = 2.3
camera.position.y = 1
camera.position.x = 2
scene.add(camera)

/** AXES HELPER */
// Shows colored axes: X = red, Y = green, Z = blue
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

// /** MUSIC */
// const listener = new THREE.AudioListener();
// camera.add(listener);
// const sound = new THREE.Audio(listener);
// const audioLoader = new THREE.AudioLoader();
// audioLoader.load('audio/cas_music_sims.wav', function (buffer) {
//     sound.setBuffer(buffer);
//     sound.setLoop(true);
//     sound.setVolume(0.2);
// });
// sound.play();

/** RENDERING */
const canvas = document.querySelector('canvas')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/** CONTROLS */
// const controls = new OrbitControls(camera, canvas)
// controls with keys
window.addEventListener("keydown", function (e) {
    // Position
    if (camera.position.z > 0.8 && e.key === "ArrowUp") {
        camera.position.z += -0.1
    }
    if (camera.position.z < 2.3 && e.key === "ArrowDown") {
        camera.position.z += 0.1
    }
    if (camera.position.x <= 4.2 && camera.position.x >= 0.10 && e.key === "ArrowLeft") {
        camera.position.x += -0.1
    }
    if (camera.position.x >= -0.10 && camera.position.x < 4 && e.key === "ArrowRight") {
        camera.position.x += 0.1
    }
    // Rotation
    if (camera.rotation.x < 0.2 && e.key === "Shift") {
        camera.rotation.x += 0.1
    }
    if (camera.rotation.x > -0.4 && e.key === "Control") {
        camera.rotation.x += -0.1
    }
})

/** 3D MODELS */
// loading
const gltfLoader = new GLTFLoader();
// Nou Noune
let nounoune1 = new Avatar("3dModels/nounoune/nounoune1.gltf", "3dModels/nounoune/nounoune2.gltf", scene, .6, new THREE.Vector3(0, .1, 0), true);
// gltfNounoune1 = await gltfLoader.loadAsync("3dModels/nounoune/nounoune1.gltf")
// let gltfNounoune2 = null;
// gltfNounoune2 = await gltfLoader.loadAsync("3dModels/nounoune/nounoune2.gltf")
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
let gltfInstagram = null;
gltfInstagram = await gltfLoader.loadAsync("3dModels/instagram/instagram.gltf")
// google forms
let gltfgoogleForms = null;
gltfgoogleForms = await gltfLoader.loadAsync("3dModels/googleForms/googleForms.gltf")
// trans flag
let gltfTransFlag = null;
gltfTransFlag = await gltfLoader.loadAsync("3dModels/transFlag/transFlag.gltf")
// desk
let gltfDesk = null;
gltfDesk = await gltfLoader.loadAsync("3dModels/desk/desk.gltf")
// desk
let gltfComputer = null;
gltfComputer = await gltfLoader.loadAsync("3dModels/computer/computer.gltf")
// lamp
let gltfLamp = null;
gltfLamp = await gltfLoader.loadAsync("3dModels/lamp/lamp.gltf")
// door
let gltfDoor = null;
gltfDoor = await gltfLoader.loadAsync("3dModels/door/door.gltf")
let gltfPoster = null;
gltfPoster = await gltfLoader.loadAsync("3dModels/poster/poster.gltf")

// adding 3d models to scene
let objs = []
objs.push(null)
objs.push(null)
objs.push(gltfStormNoune1)
objs.push(gltfStormNoune2)
objs.push(gltfStormNoune3)
objs.push(gltfStormNoune4)
objs.push(gltfStormNoune5)
objs.push(gltfDudeNoune)
objs.push(gltfInstagram)
objs.push(gltfgoogleForms)
objs.push(gltfTransFlag)
objs.push(gltfDesk)
objs.push(gltfComputer)
objs.push(gltfLamp)
objs.push(gltfDoor)
objs.push(gltfPoster)

addAndRun(objs)
async function addAndRun(loadedObjsArray) {
    // nou noune
    // currentModel = SkeletonUtils.clone(loadedObjsArray[0].scene.children[0])
    // scene.add(currentModel)
    //phantom nou noune for cursor changes, just a simple 3d rectangle
    const phantomMaterial = new THREE.MeshBasicMaterial({ color: 0x800080 })
    const phantomGeometry = new THREE.BoxGeometry()
    const phantomMesh = new THREE.Mesh(phantomGeometry, phantomMaterial)
    scene.add(phantomMesh)
    phantomMesh.position.set(0, 0.55, 0)
    phantomMesh.scale.set(0.25, 1.2, 0.22)
    phantomMesh.material.transparent = true //enables opacity
    phantomMesh.material.opacity = .3
    // console.log(currentModel)
    // dude noune
    let dudeNouneModel = loadedObjsArray[7].scene.children[0]
    scene.add(dudeNouneModel)
    dudeNouneModel.scale.set(.6, .6, .6)
    dudeNouneModel.position.set(4, .1, -.1)

    // storm noune
    currentStormModel = SkeletonUtils.clone(loadedObjsArray[2].scene.children[0])
    // let stormNoune1Model = loadedObjsArray[2].scene.children[0]
    scene.add(currentStormModel)
    currentStormModel.scale.set(0.6, 0.6, 0.6)
    currentStormModel.position.set(2, 0.1, 0)

    // instagram
    let instagramModel = loadedObjsArray[8].scene.children[0]
    scene.add(instagramModel)
    instagramModel.scale.set(0.035, 0.09, 0.035)
    instagramModel.position.set(1, 1, 0)
    instagramModel.rotation.set(Math.PI / 2, 0, 0)
    instagramModel.material.transparent = true //enables opacity

    // google forms
    let googleFormsModel = loadedObjsArray[9].scene.children[0]
    scene.add(googleFormsModel)
    googleFormsModel.scale.set(0.25, 0.25, 0.25)
    googleFormsModel.position.set(3, 1, 0)
    googleFormsModel.rotation.set(0, - Math.PI / 2, 0)
    googleFormsModel.material.transparent = true //enables opacity

    // trans flag
    let transFlagModel = loadedObjsArray[10].scene.children[0]
    scene.add(transFlagModel)
    transFlagModel.position.set(2, 1.2, -1)
    transFlagModel.scale.set(.7, .7, .7)

    // desk
    let deskModel = loadedObjsArray[11].scene.children[0]
    scene.add(deskModel)
    deskModel.position.set(4, 0, -.7)
    deskModel.scale.set(0.7, 0.7, 0.7)

    // computer
    let computerModel = loadedObjsArray[12].scene.children[0]
    scene.add(computerModel)
    computerModel.position.set(4, 0.56, -.7)
    computerModel.scale.set(0.7, 0.7, 0.7)

    // lamp
    let lampModel = loadedObjsArray[13].scene.children[0]
    scene.add(lampModel)
    lampModel.position.set(-0.7, 0, -0.5)
    lampModel.rotation.set(0, Math.PI / 4, 0)
    lampModel.scale.set(0.7, 0.7, 0.7)

    // door
    let doorModel = loadedObjsArray[14].scene.children[0]
    let doorModelTwo = SkeletonUtils.clone(loadedObjsArray[14].scene.children[0])
    scene.add(doorModel, doorModelTwo)
    doorModel.position.set(0, 0, -1)
    doorModel.scale.set(0.7, 0.7, 0.7)
    doorModelTwo.position.set(5, 0, 0.5)
    doorModelTwo.rotation.set(0, -Math.PI / 2, 0)
    doorModelTwo.scale.set(0.7, 0.7, 0.7)

    // poster
    let posterModel = loadedObjsArray[15].scene.children[0]
    scene.add(posterModel)
    posterModel.position.set(-1, 0.8, 0.4)
    posterModel.scale.set(0.8, 0.8, 0.8)
    posterModel.rotation.set(0, Math.PI / 2, 0)

    //mixers
    // let mixer = new THREE.AnimationMixer(currentModel)
    let mixerTwo = new THREE.AnimationMixer(dudeNouneModel)

    // animation nou noune
    // let clip = loadedObjsArray[0].animations[2];
    // let anim_action = mixer.clipAction(clip);
    // anim_action.play()
    // animation dude noune
    let clipTwo = loadedObjsArray[7].animations[0];
    let anim_action_two = mixerTwo.clipAction(clipTwo);
    anim_action_two.play()


    // for timer
    let elapsedTime = 0;
    let index = 2;
    let previousTime = 0;

    /** ANIMATION */
    window.requestAnimationFrame(animate);
    function animate(timer) {
        // time stuff for clicking event
        let deltaTime = (timer - elapsedTime) / 1000; // convert ms to seconds
        elapsedTime = timer;

        // Storm Noune changing poses
        let myTimer = Math.ceil((timer / 1000))
        // console.log(myTimer)
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
            currentStormModel.scale.set(0.6, 0.6, 0.6)
            currentStormModel.position.set(2, .1, 0)
        }
        previousTime = myTimer

        // hovering events
        if (mouseIsOver) {
            raycaster.setFromCamera(mouse, camera);
            const intersectsInstagram = raycaster.intersectObject(instagramModel)
            const intersectsGoogleForms = raycaster.intersectObject(googleFormsModel)
            const intersectsPhantomNounoune = raycaster.intersectObject(phantomMesh)
            const intersectsFlag = raycaster.intersectObject(transFlagModel)
            const intersectsComputer = raycaster.intersectObject(computerModel)
            const intersectsPoster = raycaster.intersectObject(posterModel)

            // cursor changes
            if (intersectsPhantomNounoune[0] || intersectsInstagram[0] || intersectsGoogleForms[0] || intersectsFlag[0] || intersectsComputer[0] || intersectsPoster[0]
            ) { document.body.style.cursor = "pointer" }
            else { document.body.style.cursor = "auto" }

            // instagram
            if (intersectsInstagram[0]) {
                instagramModel.scale.set(0.038, 0.093, 0.038)
            }
            else {
                rotatingModel()
                instagramModel.scale.set(0.035, 0.09, 0.035)
            }
            // google forms
            if (intersectsGoogleForms[0]) {
                // console.log('over instagram')
                googleFormsModel.scale.set(0.23, 0.23, 0.23)
                // googleFormsModel.position.set(3, 1, 0)
                // googleFormsModel.rotation.set(0, - Math.PI / 2, 0)
            }
            else {
                rotatingModel()
                googleFormsModel.scale.set(0.2, 0.2, 0.2)
            }
            // phantom nounoune
            if (intersectsPhantomNounoune[0]) {
                nounoune1.currentModel.scale.set(0.6, 0.6, 0.6)
            }
            else {
                nounoune1.currentModel.rotation.z += 0.01
                nounoune1.currentModel.scale.set(0.6, 0.6, 0.6)
            }
            // flag
            if (intersectsFlag[0]) {
                transFlagModel.scale.set(0.73, 0.73, 0.73)
            }
            else {
                transFlagModel.scale.set(0.70, 0.70, 0.70)
            }
            // computer
            if (intersectsComputer[0]) {
                computerModel.scale.set(0.73, 0.73, 0.73)
            }
            else {
                computerModel.scale.set(0.70, 0.70, 0.70)
            }
            //poster
            if (intersectsPoster[0]) {
                posterModel.scale.set(0.83, 0.83, 0.83)
            }
            else {
                posterModel.scale.set(0.8, 0.8, 0.8)
            }
        }

        function rotatingModel() {
            instagramModel.rotation.z += 0.01
            googleFormsModel.rotation.y += 0.01
        }

        // clicking events
        if (mouseWasClicked) {
            if (soundStarted === false) {
                audio.play();
                soundStarted = true
            }
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(nounoune1.currentModel)
            const intersectsInstagram = raycaster.intersectObject(instagramModel)
            const intersectsGoogleForms = raycaster.intersectObject(googleFormsModel)
            const intersectsTransFlag = raycaster.intersectObject(transFlagModel)
            const intersectsComputer = raycaster.intersectObject(computerModel)
            const intersectsPoster = raycaster.intersectObject(posterModel)

            // opens websites
            if (intersectsInstagram[0]) {
                // console.log('instagram clicked')
                window.open('https://www.instagram.com/simulatorxr/');
            }
            if (intersectsTransFlag[0]) {
                window.open('https://aideauxtrans.com/fr');
            }
            if (intersectsGoogleForms[0]) {
                // console.log('google forms clicked')
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSfmegoERabwSOiWI4SYLfRCDdK-O-TT5tOWlZzADOjb8JYFaw/viewform?usp=sharing&ouid=108949411424619377579');
            }
            if (intersectsComputer[0]) {
                // console.log('google forms clicked')
                window.open('https://pmc.ncbi.nlm.nih.gov/articles/PMC7699515/');
            }
            if (intersectsPoster[0]) {
                // console.log('google forms clicked')
                window.open('https://www.gendergp.com/wp-content/uploads/HRT-Timeline-Infographic-Female-to-Male-Testosterone-1920x1600.webp');
            }

            // nou noune avatar clicking logic
            console.log(intersects[0])
            if (intersects[0] !== undefined) {
                currentIntersectedObj = intersects[0]
                // console.log(currentIntersectedObj)
            }
            if (currentIntersectedObj !== null) {
                // console.log(currentIntersectedObj)
                // if (firstNounoune) {
                //     scene.remove(currentModel)
                //     currentModel = SkeletonUtils.clone(loadedObjsArray[1].scene.children[0])
                //     scene.add(currentModel)
                //     currentModel.scale.set(0.6, 0.6, 0.6)
                //     currentModel.position.set(0, .1, 0)
                //     firstNounoune = false
                //     mixer.stopAllAction()
                //     mixer = new THREE.AnimationMixer(currentModel)
                //     clip = loadedObjsArray[0].animations[2];
                //     anim_action = mixer.clipAction(clip);
                //     anim_action.play()
                // }
                // else {
                //     scene.remove(currentModel)
                //     currentModel = SkeletonUtils.clone(loadedObjsArray[0].scene.children[0])
                //     scene.add(currentModel)
                //     currentModel.scale.set(0.6, 0.6, 0.6)
                //     currentModel.position.set(0, .1, 0)
                //     firstNounoune = true
                //     mixer.stopAllAction()
                //     mixer = new THREE.AnimationMixer(currentModel)
                //     clip = loadedObjsArray[0].animations[2];
                //     anim_action = mixer.clipAction(clip);
                //     anim_action.play()
                // }
                nounoune1.switchModel(scene)
            }
            mouseWasClicked = false;
            currentIntersectedObj = null;
        }
        if (nounoune1.mixer) {
            nounoune1.mixer.update(deltaTime); // advance the animation by the time since last frame
        }
        if (mixerTwo) {
            mixerTwo.update(deltaTime); // advance the animation by the time since last frame
        }
        renderer.render(scene, camera);
        window.requestAnimationFrame(animate);
    }
    // nou noune
    // currentModel.scale.set(0.6, 0.6, 0.6)
    // currentModel.position.set(0, .1, 0)

    /** MESHES */
    const loader = new THREE.TextureLoader();
    //  geometry
    const wallGeometry = new THREE.PlaneGeometry(2, 2)
    const floorGeometry = new THREE.PlaneGeometry(2, 3)
    const sideWallGeometry = new THREE.PlaneGeometry(3, 2)
    const ceilingGeometry = new THREE.PlaneGeometry(3, 6)

    // ceiling 
    const ceiling_texture = await loader.loadAsync('textures/ceiling.png')
    ceiling_texture.colorSpace = THREE.SRGBColorSpace;
    const ceilingMaterial = new THREE.MeshBasicMaterial({ map: ceiling_texture, side: THREE.DoubleSide })
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial)
    scene.add(ceiling)
    ceiling.rotation.set(Math.PI / 2, 0, Math.PI / 2)
    ceiling.position.set(2, 2, 0.5)
    // room one
    const walls1_texture = await loader.loadAsync('textures/walls1.png')
    walls1_texture.colorSpace = THREE.SRGBColorSpace;
    const floor1_texture = await loader.loadAsync('textures/floor.png')
    floor1_texture.colorSpace = THREE.SRGBColorSpace;
    const floor1Material = new THREE.MeshBasicMaterial({ map: floor1_texture, side: THREE.DoubleSide })
    const walls1Material = new THREE.MeshBasicMaterial({ map: walls1_texture, side: THREE.DoubleSide })
    const floor = new THREE.Mesh(floorGeometry, floor1Material)
    const wall1 = new THREE.Mesh(wallGeometry, walls1Material)
    const wall2 = new THREE.Mesh(sideWallGeometry, walls1Material)
    scene.add(floor, wall1, wall2)
    floor.rotation.x = -Math.PI * 0.5
    floor.position.z = 0.5
    wall1.position.z = -1
    wall1.position.y = 1
    wall2.rotation.y = -Math.PI * 0.5
    wall2.position.x = -1
    wall2.position.y = 1
    wall2.position.z = 0.5
    // room two
    const walls2_texture = await loader.loadAsync('textures/walls2.png')
    walls2_texture.colorSpace = THREE.SRGBColorSpace;
    const floor2_texture = await loader.loadAsync('textures/floor2.png')
    floor2_texture.colorSpace = THREE.SRGBColorSpace;
    const floor2Material = new THREE.MeshBasicMaterial({ map: floor2_texture, side: THREE.DoubleSide })
    const walls2Material = new THREE.MeshBasicMaterial({ map: walls2_texture, side: THREE.DoubleSide })
    const floor2 = new THREE.Mesh(floorGeometry, floor2Material)
    const wall3 = new THREE.Mesh(wallGeometry, walls2Material)
    scene.add(floor2, wall3)
    floor2.rotation.x = -Math.PI * 0.5
    floor2.position.x = 2
    floor2.position.z = 0.5
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
    const floor3 = new THREE.Mesh(floorGeometry, floor3Material)
    const wall4 = new THREE.Mesh(wallGeometry, walls3Material)
    const wall5 = new THREE.Mesh(sideWallGeometry, walls3Material)
    scene.add(floor3, wall4, wall5)
    floor3.rotation.x = -Math.PI * 0.5
    floor3.position.x = 4
    floor3.position.z = 0.5
    wall4.position.z = -1
    wall4.position.y = 1
    wall4.position.x = 4
    wall5.rotation.y = -Math.PI * 0.5
    wall5.position.x = 5
    wall5.position.y = 1
    wall5.position.z = 0.5
    // podium
    const podiumGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 32);
    const podium_texture = await loader.loadAsync('textures/podium.png')
    podium_texture.colorSpace = THREE.SRGBColorSpace;
    const podiumMaterial = new THREE.MeshBasicMaterial({ map: podium_texture, side: THREE.DoubleSide });
    const podium = new THREE.Mesh(podiumGeometry, podiumMaterial);
    const podium2 = new THREE.Mesh(podiumGeometry, podiumMaterial);
    const podium3 = new THREE.Mesh(podiumGeometry, podiumMaterial);
    scene.add(podium, podium2, podium3);
    podium.position.y = 0.05
    podium2.position.y = 0.05
    podium2.position.x = 2
    podium3.position.y = 0.05
    podium3.position.x = 4

    // LIGHTING
    const spotLight = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.15, 0.25, 1);
    spotLight.position.set(0, 2, 1)
    scene.add(spotLight)
    spotLight.target = phantomMesh
    // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(spotLightHelper);

    const spotLight2 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.15, 0.25, 1);
    spotLight2.position.set(2, 2, 1)
    scene.add(spotLight2)
    spotLight2.target = currentStormModel
    // const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
    // scene.add(spotLightHelper2);

    const spotLight3 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.15, 0.25, 1);
    spotLight3.position.set(4, 2, 1)
    scene.add(spotLight3)
    spotLight3.target = dudeNouneModel
    // const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3);
    // scene.add(spotLightHelper3);

    const spotLight4 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.06, 0.25, 1);
    spotLight4.position.set(1, 2, 2)
    scene.add(spotLight4)
    spotLight4.target = instagramModel
    // const spotLightHelper4 = new THREE.SpotLightHelper(spotLight4);
    // scene.add(spotLightHelper4);

    const spotLight5 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.09, 0.25, 1);
    spotLight5.position.set(3, 2, 2)
    scene.add(spotLight5)
    spotLight5.target = googleFormsModel
    // const spotLightHelper5 = new THREE.SpotLightHelper(spotLight5);
    // scene.add(spotLightHelper5);

    const spotLight6 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.09, 0.25, 1);
    spotLight6.position.set(2, 2, 1)
    scene.add(spotLight6)
    spotLight6.target = transFlagModel
    // const spotLightHelper6 = new THREE.SpotLightHelper(spotLight6);
    // scene.add(spotLightHelper6);

    const spotLight7 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.09, 0.25, 1);
    spotLight7.position.set(-.7, 2, -.2)
    scene.add(spotLight7)
    spotLight7.target = lampModel
    // const spotLightHelper7 = new THREE.SpotLightHelper(spotLight7);
    // scene.add(spotLightHelper7);

    const spotLight8 = new THREE.SpotLight(0xffffff, 4, 3, Math.PI * 0.09, 0.25, 1);
    spotLight8.position.set(0.2, 2.1, 1)
    scene.add(spotLight8)
    spotLight8.target = posterModel
    // const spotLightHelper8 = new THREE.SpotLightHelper(spotLight8);
    // scene.add(spotLightHelper8);

    const HemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(HemisphereLight);
    const HemisphereLightHelper = new THREE.HemisphereLightHelper(HemisphereLight, 5);
    // scene.add(HemisphereLightHelper);
}

/** Mouse tracking */
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", function (event) {
    const rect = canvas.getBoundingClientRect()
    mouse.x = ((event.clientX - rect.left) / sizes.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / sizes.height) * 2 + 1;
});

/** Event listeners */
window.addEventListener("click", function (event) {
    // console.log("click")
    mouseWasClicked = true
})
window.addEventListener("mouseover", function (event) {
    // console.log("hey i am a mouse")
    mouseIsOver = true
})
