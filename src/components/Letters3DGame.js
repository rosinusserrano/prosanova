import { Physics } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { CompoundBox, CompoundCircles } from './Letters3DGame/CompoundShapes'
import Plane from './Letters3DGame/Plane'

export default function Letters3DGame() {
  return (
    <Canvas style={{ height: "70vh" , backgroundColor: "whitesmoke"}}>
      <perspectiveCamera></perspectiveCamera>
      <OrbitControls></OrbitControls>
      <pointLight position={[3, 3, 3]}></pointLight>
      <Physics>
        <CompoundBox></CompoundBox>
        <CompoundCircles></CompoundCircles>
        <Plane></Plane>
      </Physics>
    </Canvas>
  )
}
