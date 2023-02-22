import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useProsanovaScene } from "functions";

export default function WholeScene() {
  const gltf = useProsanovaScene();

  const ref = useRef();

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[3.5, 1.5, -0.043]}
        rotation={[0, Math.PI / 2, 0]}
        fov={25}
      ></PerspectiveCamera>
      <pointLight position={[3, 3, 10]}></pointLight>
      <ambientLight></ambientLight>
      <Suspense>
        <primitive object={gltf.scene} ref={ref}></primitive>
      </Suspense>
      <OrbitControls target={[0, 1.8, 0]}></OrbitControls>
      <axesHelper></axesHelper>
    </>
  );
}
