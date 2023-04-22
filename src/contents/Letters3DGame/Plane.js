import { usePlane } from '@react-three/cannon'
import { SCALE } from 'constants'
import { useControls } from 'leva'
import React, { useRef } from 'react'

export default function Plane() {
    const {color} = useControls("fridge color", {color: "#C6C0BA"})
    const [ref, api] = usePlane(() => ({
        mass: 0,
        position: [0, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        args: [5* SCALE, 5* SCALE]
    }), useRef())

    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[5 * SCALE, 5 * SCALE]}></planeGeometry>
            <meshStandardMaterial color={color}></meshStandardMaterial>
        </mesh>
    )
}
