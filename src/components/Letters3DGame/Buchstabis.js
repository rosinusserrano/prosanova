import { useBox } from '@react-three/cannon'
import { useGLTF } from '@react-three/drei'
import { LETTERS_OFFSET } from 'constants'
import { useControls } from 'leva'
import React, { Suspense, useRef } from 'react'
import { A, FallbackLetter } from './LettersWithPhysics'

export default function Buchstabis() {

    const { scene } = useGLTF("Buchstabis-GAME-2503-ohneLichter.glb")
    const children = scene.children
    console.log(children)

    return (
        <Suspense>
            <group >
                {children.map((child) => <Letter gltfNode={child} key={child["name"]}></Letter>)}
            </group>
        </Suspense>
    )
}


function Letter({ gltfNode }){
    if (false){
        return <A gltfNode={gltfNode}></A>
    // } else if (gltfNode["name"] === "B" || gltfNode["name"] === "B001"){
    //     return <B gltfNode={gltfNode}></B>
    // } else if (gltfNode["name"] === "C" || gltfNode["name"] === "C001"){
    //     return <C gltfNode={gltfNode}></C>
    // } else if (gltfNode["name"] === "D" || gltfNode["name"] === "D001"){
    //     return <D gltfNode={gltfNode}></D>
    // } else if (gltfNode["name"] === "E" || gltfNode["name"] === "E001"){
    //     return <E gltfNode={gltfNode}></E>
    // } else if (gltfNode["name"] === "F" || gltfNode["name"] === "F001"){
    //     return <F gltfNode={gltfNode}></F>
    // } else if (gltfNode["name"] === "G" || gltfNode["name"] === "B001"){
    //     return <G gltfNode={gltfNode}></G>
    // } else if (gltfNode["name"] === "H" || gltfNode["name"] === "H001"){
    //     return <H gltfNode={gltfNode}></H>
    // } else if (gltfNode["name"] === "I" || gltfNode["name"] === "I001"){
    //     return <I gltfNode={gltfNode}></I>
    // } else if (gltfNode["name"] === "J" || gltfNode["name"] === "J001"){
    //     return <J gltfNode={gltfNode}></J>
    } else {
        return <FallbackLetter gltfNode={gltfNode}></FallbackLetter>
    }
}
