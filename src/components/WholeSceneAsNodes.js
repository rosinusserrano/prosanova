import { useLoader, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SceneNode from './SceneNode'
import { AxesHelper } from 'three'

export default function WholeSceneAsNodes() {
    const gltf = useLoader(GLTFLoader, "./PN-0202.glb")

    console.log(gltf)

    const sceneNodes = Object.keys(gltf.nodes).map((key, index, arr) => {
        return (
            <SceneNode {...gltf.nodes[key]}>
            </SceneNode>)
    })

    const axesHelper = new AxesHelper(50)

    useThree(({camera}) => {
        camera.position.set(3.5, 0, -.043)
        camera.rotation.set(0, Math.PI/2, 0)
        camera.fov = 25
    })

    return (
        <>
            <pointLight position={[-3, -3, 10]}></pointLight>
            <pointLight position={[3, 3, 10]}></pointLight>
            <Suspense>
                <SceneNode {...gltf.nodes["Fridge_low004"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["P"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["R"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["O"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["S"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["A001"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["N"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["O001"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["V"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["A"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["2"]} customDrag={true}></SceneNode>
                <SceneNode {...gltf.nodes["3"]} customDrag={true}></SceneNode>
            </Suspense>
            <axesHelper></axesHelper>
        </>
    )
}
