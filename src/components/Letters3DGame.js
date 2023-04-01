import { Debug, Physics } from '@react-three/cannon'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Buchstabis from './Letters3DGame/Buchstabis'
import Plane from './Letters3DGame/Plane'
import { SCALE } from 'constants'
import * as THREE from 'three'
import { useControls } from 'leva'
import { Vector3 } from 'three'


function usePointLightProps(name, ref) {
  return useControls(name, {
    visible: {
      value: false,
      onChange: (v) => ref.current.visible = v
    },
    intensity: { value: 1, min: 0, max: 5, step: .1, onChange: (v) => ref.current.intensity = v },
    x: { value: 0, min: -1, max: 1, step: 0.001, onChange: (v) => ref.current.position.x = v },
    y: { value: 0, min: -1, max: 1, step: 0.001, onChange: (v) => ref.current.position.y = v },
    z: { value: 0, min: -1, max: 1, step: 0.001, onChange: (v) => ref.current.position.z = v },
    castShadow: { value: false, onChange: (v) => ref.current.castShadow = v },
    color: "#FFFFFF"
  })
}


function CustomizablePointLight({ name }) {
  const pointLightRef = useRef()
  const pointLight = usePointLightProps(name, pointLightRef)

  return (
    <pointLight ref={pointLightRef} {...pointLight}>
      <mesh>
        <meshNormalMaterial></meshNormalMaterial>
        <sphereGeometry args={[0.01]} />
      </mesh>
    </pointLight>
  )
}


function CutomizableLights() {

  const ambientControls = useControls('Ambient Light', {
    visible: false,
    color: 'white',
    intensity: 0.5
  })


  const initialLightControls = useControls("Initial Light", {
    visible: true,
  })


  return (
    <>
      <ambientLight {...ambientControls} />
      <pointLight visible={initialLightControls.visible} position={[1, 1, 1]}></pointLight>
      <CustomizablePointLight name="pointLight1"></CustomizablePointLight>
      <CustomizablePointLight name="pointLight2"></CustomizablePointLight>
      <CustomizablePointLight name="pointLight3"></CustomizablePointLight>
      <CustomizablePointLight name="pointLight4"></CustomizablePointLight>
      <CustomizablePointLight name="pointLight5"></CustomizablePointLight>
    </>
  )
}


function Lights() {
  const pointLight1Props = {
    intensity: 0.8,
    position: new Vector3(.75, .42, -.5)
  }

  const pointLight2Props = {
    intensity: 0.8,
    position: new Vector3(.11, .24, .34)
  }

  const pointLight3Props = {
    intensity: 0.4,
    position: new Vector3(.88, .34, 0)
  }

  const pointLight4Props = {
    intensity: 0.6,
    position: new Vector3(.08, -.9, -.5)
  }

  return (
    <>
      <pointLight {...pointLight1Props}/>
      <pointLight {...pointLight2Props}/>
      <pointLight {...pointLight3Props}/>
      <pointLight {...pointLight4Props}/>
    </>
  )
}


export default function Letters3DGame() {
  return (
    <Suspense>
      <Canvas className="border-radius" shadows style={{ height: "calc(100vh - 9rem)", backgroundColor: "#E8E3DD",  }}
        camera={{
          fov: 25,
          rotation: [0, Math.PI / 2, 0],
          position: [SCALE, 0, 0],
          far: 10,
          near: 0.01
        }} >
        {/* <OrbitControls ></OrbitControls> */}
        {/* <pointLight position={[.3 * SCALE, .3 * SCALE, .3 * SCALE]} castShadow></pointLight> */}
        {/* <directionalLight position={[.1, .1, .1]} castShadow></directionalLight> */}
        <Lights></Lights>
        {/* <ambientLight></ambientLight> */}
        <Physics gravity={[-2, 0, 0]}
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
