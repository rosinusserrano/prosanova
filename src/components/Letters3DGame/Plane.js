import { usePlane } from '@react-three/cannon'
import React from 'react'

export default function Plane() {
    const [ref, api] = usePlane(() => ({ mass: 0, position: [0, -10, 0], rotation: [-Math.PI / 2, 0, 0] , args: [30, 30]}))
    return (
        <mesh ref={ref}>
            <planeGeometry args={[30, 30]}></planeGeometry>
            <meshStandardMaterial></meshStandardMaterial>
        </mesh>
    )
}
