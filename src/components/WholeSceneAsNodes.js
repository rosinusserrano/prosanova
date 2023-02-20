import { useLoader, Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import SceneNode from './SceneNode'
import { PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import SceneMesh from './SceneMesh'
import { DRACOLoader } from 'three-stdlib'


function Box() {
    const [ref] = useBox(() => ({ mass: 1, position: [1, 0, 0], args: [.1, .1, .1] }), useRef())
    // const ref = useRef()

    return <mesh ref={ref} position={[1, 0, 0]}>
        <boxGeometry args={[.1, .1, .1]}></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
    </mesh>
}

export default function WholeSceneAsNodes() {

    const gltf = useLoader(GLTFLoader, "./PN-2002 (2).glb", (loader) => {
        console.log(12345)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader)
    })

    console.log(Object.keys(gltf["nodes"]))
    console.log(gltf)

    return (
        <Canvas style={{ height: "100vh", width: "100vw" }}>
            <ScrollControls pages={2} damping={.05}>
                <PerspectiveCamera makeDefault position={[1.3, 2, 0]} rotation={[0, Math.PI / 2, 0]} fov={25}></PerspectiveCamera>
                <pointLight castShadow position={[-3, -3, 10]}></pointLight>
                <pointLight castShadow position={[3, 3, 10]}></pointLight>
                <Suspense fallback={null}>
                    <Scroll>
                        <SceneNode {...gltf.nodes["Kühlschrank"]} customDrag={false}></SceneNode>
                        <SceneMesh {...gltf.nodes["P"]} customDrag={true}></SceneMesh>
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
                        <SceneNode {...gltf.nodes["Bald"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["mehr"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["infos"]} customDrag={true}></SceneNode>
                        <SceneNode url={"https://prosanova.net"} {...gltf.nodes["2020"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["Schlechte_Wörter_Sticker"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["Kalender"]} customDrag={true}></SceneNode>
                        <SceneNode url={"instagram.com"} {...gltf.nodes["Instagram_Magnet"]} customDrag={true}></SceneNode>
                        <SceneNode url={"https://prosanova.net"} {...gltf.nodes["2020001"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["Zebra_Paper"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["Bücher_oben"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["23ster"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["25ster"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["bis001"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["bald001"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["diesen001"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["jahres"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["pfeile_runter"]} cutomDrag={false}></SceneNode>
                        {/* <SceneNode {...gltf.nodes["Point"]} cutomDrag={false}></SceneNode> */}
                        <SceneNode {...gltf.nodes["Save_the_Date"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["Blumenvase"]} cutomDrag={false}></SceneNode>
                        <SceneNode {...gltf.nodes["bald001"]} customDrag={true}></SceneNode>
                        <SceneNode {...gltf.nodes["bis001"]} customDrag={true}></SceneNode>
                    </Scroll>
                </Suspense>
            </ScrollControls>
        </Canvas>
    )
}
