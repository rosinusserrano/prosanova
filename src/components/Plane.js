import { usePlane } from '@react-three/cannon'
import React, { useRef } from 'react'

export default function Plane(props) {
    const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef())

    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry attach="geometry" args={[50, 50]} />
        <shadowMaterial attach="material" color="#171717" opacity={0.5} />
      </mesh>
    )
}