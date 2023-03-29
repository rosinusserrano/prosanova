import { Debug, Physics } from '@react-three/cannon'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Buchstabis from './Letters3DGame/Buchstabis'
import Plane from './Letters3DGame/Plane'
import { SCALE } from 'constants'
import * as THREE from 'three'
import { useControls } from 'leva'


function Lights() {
  const ambientRef = useRef()
  const directionalRef = useRef()
  const pointRef = useRef()
  const spotRef = useRef()

  useControls('Ambient Light', {
    visible: {
      value: false,
      onChange: (v) => {
        ambientRef.current.visible = v
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        ambientRef.current.color = new THREE.Color(v)
      },
    },
  })

  useControls('Directional Light', {
    visible: {
      value: true,
      onChange: (v) => {
        directionalRef.current.visible = v
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v)
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        directionalRef.current.color = new THREE.Color(v)
      },
    },
  })

  useControls('Point Light', {
    visible: {
      value: false,
      onChange: (v) => {
        pointRef.current.visible = v
      },
    },
    position: {
      x: 2,
      y: 0,
      z: 0,
      onChange: (v) => {
        pointRef.current.position.copy(v)
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        pointRef.current.color = new THREE.Color(v)
      },
    },
  })

  useControls('Spot Light', {
    visible: {
      value: false,
      onChange: (v) => {
        spotRef.current.visible = v
      },
    },
    position: {
      x: 3,
      y: 2.5,
      z: 1,
      onChange: (v) => {
        spotRef.current.position.copy(v)
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        spotRef.current.color = new THREE.Color(v)
      },
    },
  })

  return (
    <>
      <ambientLight ref={ambientRef} castShadow/>
      <directionalLight ref={directionalRef} castShadow />
      <pointLight ref={pointRef} castShadow />
      <spotLight ref={spotRef} castShadow />
    </>
  )
}

export default function Letters3DGame() {
  return (
    <Suspense>
      <Canvas shadows style={{ height: "90vh", backgroundColor: "whitesmoke" }}
        camera={{
          fov: 25,
          rotation: [0, Math.PI / 2, 0],
          position: [SCALE, 0, 0],
          far: 10,
          near: 0.01
        }} >
        <OrbitControls ></OrbitControls>
        {/* <pointLight position={[.3 * SCALE, .3 * SCALE, .3 * SCALE]} castShadow></pointLight> */}
        {/* <directionalLight position={[.1, .1, .1]} castShadow></directionalLight> */}
        <Lights></Lights>
        {/* <ambientLight></ambientLight> */}
        <Physics gravity={[-.5, 0, 0]}
          defaultContactMaterial={{
            friction: 0.01,
            // restitution: -0.5,
          }}>
          {/* <Debug > */}
            <Buchstabis></Buchstabis>
            <Plane></Plane>
          {/* </Debug> */}
        </Physics>
        {/* <axesHelper></axesHelper> */}
      </Canvas>
    </Suspense>
  )
}
