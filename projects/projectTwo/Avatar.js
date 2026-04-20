import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';



export class Avatar {
    constructor(path, path2, scene, scaleParameter, positionParameter, isFirstNounoune) {
        this.scaleParamater = scaleParameter
        this.positionParameter = positionParameter
        this.loadModel(path, path2, scene)
        this.firstNounoune = isFirstNounoune
    }
    async loadModel(path, path2, scene) {
        const gltfLoader = new GLTFLoader();
        this.model = await gltfLoader.loadAsync(path)
        this.modelTwo = await gltfLoader.loadAsync(path2)
        this.currentModel = SkeletonUtils.clone(this.model.scene.children[0])
        scene.add(this.currentModel)
        this.animationConfig()
        this.setTransformSettings()
    }
    animationConfig() {
        this.mixer = new THREE.AnimationMixer(this.currentModel)
        this.clip = this.model.animations[2];
        this.anim_action = this.mixer.clipAction(this.clip);
        this.anim_action.play()
    }
    setTransformSettings() {
        this.currentModel.scale.set(this.scaleParameter, this.scaleParameter, this.scaleParameter)
        this.currentModel.position.set(this.positionParameter.x, this.positionParameter.y, this.positionParameter.z)
    }
    switchModel(scene) {
        console.log("inside switchModel")
        if (this.firstNounoune) {
            scene.remove(this.currentModel)
            this.currentModel = SkeletonUtils.clone(this.modelTwo.scene.children[0])
            scene.add(this.currentModel)
            this.currentModel.scale.set(0.6, 0.6, 0.6)
            this.currentModel.position.set(0, .1, 0)
            this.firstNounoune = false
            this.mixer.stopAllAction()
            this.mixer = new THREE.AnimationMixer(this.currentModel)
            this.clip = this.model.animations[2];
            this.anim_action = this.mixer.clipAction(this.clip);
            this.anim_action.play()
        }
        else {
            scene.remove(this.currentModel)
            this.currentModel = SkeletonUtils.clone(this.model.scene.children[0])
            scene.add(this.currentModel)
            this.currentModel.scale.set(0.6, 0.6, 0.6)
            this.currentModel.position.set(0, .1, 0)
            this.firstNounoune = true
            this.mixer.stopAllAction()
            this.mixer = new THREE.AnimationMixer(this.currentModel)
            this.clip = this.model.animations[2];
            this.anim_action = this.mixer.clipAction(this.clip);
            this.anim_action.play()
        }
    }
}