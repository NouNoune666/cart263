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
// Three red spheres
const object1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object1.position.x = -2
const object2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
object2.position.x = 2
const object3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: '#ff0000' })
)
scene.add(object1, object2, object3)

/** RAYCASTER */
const raycaster = new THREE.Raycaster()
//ray will start somewhere on left of the spheres
const rayOrigin = new THREE.Vector3(- 3, 0, 0)
//right (positive x)
const rayDirection = new THREE.Vector3(10, 0, 0)  //reduce magnitude BUT keep direction
console.log(rayDirection.length())
//set direction only (has length ==1)
rayDirection.normalize()
console.log(rayDirection.length())
raycaster.set(rayOrigin, rayDirection) //raycaster has been oriented
//cast a ray - check intersection with obj1, obj2 and obj 3 
object1.updateMatrixWorld()
object2.updateMatrixWorld()
object3.updateMatrixWorld()
// const intersects = raycaster.intersectObjects([object1, object2, object3])


/** MOUSE EVENTS */
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", function (event) {
    mouse.x = (event.clientX / sizes.width) * 2 - 1;   // maps to -1 to +1
    mouse.y = -(event.clientY / sizes.height) * 2 + 1;  // maps to -1 to +1, flipped
})
let currentIntersectedObj = null
window.addEventListener("click", function (event) {

    console.log("click")
    if (currentIntersectedObj !== null) {
        currentIntersectedObj.object.material.color.set("#ffe600");
    }
})

// Shows colored axes: X = red, Y = green, Z = blue
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)


/** ANIMATION and RENDERING (keep at end) */
window.requestAnimationFrame(animate);
function animate(timer) {
    controls.update();
    object1.position.y = Math.sin(timer / 1000 * .5) * 3
    object2.position.y = Math.sin(timer / 1000 * .4) * 3
    object3.position.y = Math.sin(timer / 1000 * .3) * 3
    // const objectsToTest = [object1, object2, object3]
    // const intersects = raycaster.intersectObjects(objectsToTest)
    // // Reset all to red
    // for (const object of objectsToTest) {
    //     object.material.color.set('#ff0000')
    // }
    // // Turn intersected ones blue
    // for (const intersect of intersects) {
    //     intersect.object.material.color.set('#0000ff')
    // }
    // renderer.render(scene, camera);
    // window.requestAnimationFrame(animate);
    // This automatically orients the ray from the camera toward the mouse
    raycaster.setFromCamera(mouse, camera);

    const objectsToTest = [object1, object2, object3];
    const intersects = raycaster.intersectObjects(objectsToTest);

    // for (const object of objectsToTest) {
    //     object.material.color.set("#ff0000"); // reset to red
    // }
    // for (const intersect of intersects) {
    //     intersect.object.material.color.set("#0000ff"); // highlight blue
    // }

    if (intersects.length > 0) {
        if (currentIntersectedObj === null) {
            // Nothing was active before -- activate the first hit
            currentIntersectedObj = intersects[0];
            console.log("mouse enter");
            currentIntersectedObj.object.material.color.set("#00c3ff");
        } else {
            // Something was active -- check if it's still in the list
            if (intersects.find(findIfCurrentObjIsActive) === undefined) {
                // It's gone -- switch to the new one
                currentIntersectedObj.object.material.color.set("#ff0000");
                currentIntersectedObj = intersects[0];
                currentIntersectedObj.object.material.color.set("#00c3ff");
            }
        }
    } else {
        // Mouse is over nothing -- deactivate
        if (currentIntersectedObj !== null) {
            currentIntersectedObj.object.material.color.set("#ff1900");
            currentIntersectedObj = null;
        }
    }

    // Helper function used by .find() above
    function findIfCurrentObjIsActive(intersect) {
        return intersect.object === currentIntersectedObj.object;
    }


    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

