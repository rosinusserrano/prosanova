import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import React, {Suspense, useRef} from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { AxesHelper } from 'three'
import { Canvas, useLoader } from '@react-three/fiber'
import { DRACOLoader } from 'three-stdlib'

export default function WholeScene() {

    const gltf = useLoader(GLTFLoader, "./PN-2002 (2).glb", (loader) => {
        console.log(12345)
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderConfig({ type: 'js' });
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(dracoLoader)
    })

    const ref = useRef()

    const axesHelper = new AxesHelper(50)

    return (
        <Canvas style={{height: "100vh", width: "100vw"}}>
            <PerspectiveCamera makeDefault position={[3.5, 1.5, -.043]} rotation={[0, Math.PI / 2, 0]} fov={25}></PerspectiveCamera>
            <pointLight position={[3, 3, 10]}></pointLight>
            <ambientLight ></ambientLight>
            <Suspense>
                <primitive object={gltf.scene} ref={ref}></primitive>
            </Suspense>
            <OrbitControls target={[0, 1.8, 0]}></OrbitControls>
            <axesHelper></axesHelper>
        </Canvas>
    )
}
