import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, {Suspense, useRef} from 'react'
import { useLoader, Canvas } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AxesHelper } from 'three'

export default function WholeScene() {
    const gltf = useLoader(GLTFLoader, "./PN-0202.glb")

    const ref = useRef()

    const axesHelper = new AxesHelper(50)

    return (
        <Canvas style={{height: "100vh", width: "100vw"}}>
            <PerspectiveCamera makeDefault position={[3.5, 0, -.043]} rotation={[0, Math.PI / 2, 0]} fov={25}></PerspectiveCamera>
            <pointLight position={[-3, -3, 10]}></pointLight>
            <pointLight position={[3, 3, 10]}></pointLight>
            <Suspense>
                <primitive object={gltf.scene} ref={ref}></primitive>
            </Suspense>
            <OrbitControls></OrbitControls>
            <axesHelper></axesHelper>
        </Canvas>
    )
}
