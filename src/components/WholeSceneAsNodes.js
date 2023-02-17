import { useLoader, useThree, Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SceneNode from './SceneNode'
import { AxesHelper } from 'three'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import Plane from "./Plane"
import SceneMeshWithPhysics from './SceneMeshWithPhysics'
import SceneMesh from './SceneMesh'


function Box() {
    const [ref] = useBox(() => ({ mass: 1, position: [1, 0, 0], args: [.1, .1, .1] }), useRef())
    // const ref = useRef()

    return <mesh ref={ref} position={[1, 0, 0]}>
        <boxGeometry args={[.1, .1, .1]}></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
    </mesh>
}

export default function WholeSceneAsNodes() {

    const gltf = useLoader(GLTFLoader, "./PN-1603-7.glb")

    console.log(gltf)

    const axesHelper = new AxesHelper(50)

    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <PerspectiveCamera makeDefault position={[3, 1.5, -.043]} rotation={[0, Math.PI / 2, 0]} fov={12}></PerspectiveCamera>
            <pointLight castShadow position={[-3, -3, 10]}></pointLight>
            <pointLight castShadow position={[3, 3, 10]}></pointLight>
            <Suspense fallback={null}>
                <SceneNode {...gltf.nodes["Kühlschrank"]} customDrag={false}></SceneNode>
                <SceneMesh {...gltf.nodes["P"]} customDrag={false}></SceneMesh>
                <SceneNode {...gltf.nodes["R"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["O"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["S"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["A001"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["N"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["O001"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["V"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["A"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["2"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["3"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["Bald"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["mehr"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["Infos"]} customDrag={false}></SceneNode>
                <SceneNode url={"https://prosanova.net"} {...gltf.nodes["2020"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["Schlechte_Wörter_Sticker"]} customDrag={false}></SceneNode>
                <SceneNode {...gltf.nodes["Kalender"]} customDrag={false}></SceneNode>
                <SceneNode url={"instagram.com"} {...gltf.nodes["Instagram_Magnet"]} customDrag={false}></SceneNode>
                <SceneNode url={"https://prosanova.net"} {...gltf.nodes["2020001"]} customDrag={false}></SceneNode>

            </Suspense>
            {/* <axesHelper></axesHelper> */}
            {/* <OrbitControls target={[0, 1.5, 0]}></OrbitControls> */}
        </Canvas>
    )
}
