import { Physics } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Buchstabis from './Buchstabis'
import Plane from './Plane'
import { SCALE } from 'constants'
import { useControls } from 'leva'
import { Vector3 } from 'three'
import { PerspectiveCamera } from '@react-three/drei'


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
      <pointLight {...pointLight1Props} />
      <pointLight {...pointLight2Props} />
      <pointLight {...pointLight3Props} />
      <pointLight {...pointLight4Props} />
    </>
  )
}


function LevaCamera() {
  const {x, y, z} = useControls("camera", {
    x: 1,
    y: 0,
    z: 0
  })
  return <PerspectiveCamera makeDefault fov={25}
    rotation={[0, Math.PI / 2, 0]}
    position={[x * SCALE, y, z]}
    far={10}
    near={0.01} />
}


export default function Letters3DGame() {

  const [cursor, setCursor] = useState("url(MouseHand-Normal_small.png) 20 20, auto")

  useEffect(() => {
    const img = new Image()
    img.src = "MouseHand-Grab_small.png"
  }, [])

  return (
    <Suspense>
      <div className='border-radius' style={{ cursor: cursor, height: "100%" }}
        onPointerDown={() => setCursor("url(MouseHand-Grab_small.png) 20 20, auto")}
        onPointerUp={() => setCursor("url(MouseHand-Normal_small.png) 20 20, auto")}>
        <Canvas className="border-radius" shadows
          style={{
            // height: "calc(100vh - 9rem)",
            backgroundColor: "#E8E3DD"
          }}
          camera={{
            // fov: 25,
            // rotation: [0, Math.PI / 2, 0],
            // position: [SCALE, 0, 0],
            // far: 10,
            // near: 0.01
          }} >
          <LevaCamera />
          {/* <OrbitControls ></OrbitControls> */}
          {/* <pointLight position={[.3 * SCALE, .3 * SCALE, .3 * SCALE]} castShadow></pointLight> */}
          {/* <directionalLight position={[.1, .1, .1]} castShadow></directionalLight> */}
          <Lights></Lights>
          {/* <ambientLight></ambientLight> */}
          <Physics gravity={[-1, 0, 0]}
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
      </div>
    </Suspense>
  )
}
