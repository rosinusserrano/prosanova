


import { Scroll, ScrollControls, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import WholeScene from 'components/WholeScene'
import React, { Suspense, useRef, useState } from 'react'

export default function Test() {


    const { viewport } = useThree()

    return (
        <ScrollControls pages={3} damping={0.1}>
            {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
            <Bar></Bar>
            <Scroll>
                {/* Canvas contents in here will scroll along */}
                <Foo position={[-1, 0, 0]} />
                <Foo position={[0, 0, 0]} />
                <Foo position={[1, 0, 0]} />
            </Scroll>
            <Scroll html>
                {/* DOM contents in here will scroll along */}
                <h1 style={{ color: "white" }}>html in here (optional)</h1>
                <h1 style={{ top: '100vh', color: "white" }}>second page</h1>
                <h1 style={{ top: '200vh', color: "white" }}>third page</h1>
            </Scroll>
        </ScrollControls>
    )
}


function Bar(props) {
    const ref = useRef()
    const data = useScroll()

    const [xRotation, setXRotation] = useState(0)
    const [yRotation, setYRotation] = useState(0)
    const [zRotation, setZRotation] = useState(0)

    useFrame(() => {
        setXRotation(data.range(0, 1 / 3) * Math.PI)
        setYRotation(data.range(0, 1) * Math.PI)
        setZRotation(data.range(2 / 3, 1 / 3) * Math.PI)
    })

    return <mesh position={[4, 2, 0]} rotation={[xRotation, yRotation, zRotation]}>
        <boxGeometry args={[3, 3, 3]}></boxGeometry>
        <meshStandardMaterial color={"#ffaaaa"}></meshStandardMaterial>
    </mesh>
}


function Foo(props) {
    const ref = useRef()
    const data = useScroll()
    useFrame(() => {
        // data.offset = current scroll position, between 0 and 1, dampened
        // data.delta = current delta, between 0 and 1, dampened

        // Will be 0 when the scrollbar is at the starting position,
        // then increase to 1 until 1 / 3 of the scroll distance is reached
        const a = data.range(0, 1 / 3)
        // Will start increasing when 1 / 3 of the scroll distance is reached,
        // and reach 1 when it reaches 2 / 3rds.
        const b = data.range(1 / 3, 1 / 3)
        // Same as above but with a margin of 0.1 on both ends
        const c = data.range(1 / 3, 1 / 3, 0.1)
        // Will move between 0-1-0 for the selected range
        const d = data.curve(1 / 3, 1 / 3)
        // Same as above, but with a margin of 0.1 on both ends
        const e = data.curve(1 / 3, 1 / 3, 0.1)
        // Returns true if the offset is in range and false if it isn't
        const f = data.visible(2 / 3, 1 / 3)
        // The visible function can also receive a margin
        const g = data.visible(2 / 3, 1 / 3, 0.1)
        console.table({ a, b, c, d, e, f, g })
    })
    return <mesh ref={ref} {...props}>
        <boxGeometry></boxGeometry><meshStandardMaterial></meshStandardMaterial>
    </mesh>
}