import React, { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function WholeScene() {
    const gltf = useLoader(GLTFLoader, "/PN-0202.glb")
    console.log(gltf)
    return (
        <Suspense>
            <primitive object={gltf.scene}/>
        </Suspense>
    )
}
