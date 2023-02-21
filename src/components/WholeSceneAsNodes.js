import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import SceneNode from "./SceneNode";
import { PerspectiveCamera, Scroll, ScrollControls, OrbitControls } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useProsanovaScene } from "functions";
import { TextureLoader } from "three";
import { BACKGROUND_FILE } from "../constants";

function Box() {
  const [ref] = useBox(
    () => ({ mass: 1, position: [1, 0, 0], args: [0.1, 0.1, 0.1] }),
    useRef()
  );
  // const ref = useRef()

  return (
    <mesh ref={ref} position={[1, 0, 0]} rotation={[0, -Math.PI / 4, 0]}>
      <boxGeometry args={[0.1, 0.1, 0.1]}></boxGeometry>
      <meshStandardMaterial></meshStandardMaterial>
    </mesh>
  );
}


function FridgeImage() {

  const texture = useLoader(TextureLoader, BACKGROUND_FILE)
  return <mesh rotation={[0, -Math.PI / 2, 0]} position={[1, 0, 0]}>
    <planeGeometry args={[3, 3]}></planeGeometry>
    <meshBasicMaterial map={texture}></meshBasicMaterial>
  </mesh>
}


export default function WholeSceneAsNodes() {
  const gltf = useProsanovaScene();
  console.log(gltf);

  const makeDraggable = false

  // window.addEventListener(
  //   'resize',
  //   throttle(
  //     () => {
  //       const width = window.innerWidth;
  //       const height = window.innerHeight;
  //       camera.aspect = width / height;
  //       camera.updateProjectionMatrix();
  //       renderer.setSize(width, height);
  //       setCanvasDimensions(renderer.domElement, width, height);
  //     },
  //     500,
  //     { trailing: true }
  //   )
  // );

  const customMaterialProps = {
    metalness: .1,
    roughness: 0,
    exposure: 1,
    // reflectivity: 1,
    // envMapIntensity: 1
  }

  // function onWindowResize() {

  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   camera.aspect = width / height;
  //   camera.updateProjectionMatrix();

  //   renderer.setSize( width, height );

  // }



  return (
    <Canvas style={{ height: "100vh", width: "100vw" }} dpr={[1, 2]}>
      {/* <OrbitControls target={[.1, 1.2, 0]}></OrbitControls> */}
      <ScrollControls pages={1.8} damping={0.05}>
        <PerspectiveCamera
          makeDefault
          position={[10, 1.25, -.01]}
          rotation={[0, Math.PI / 2, 0]}
          fov={2}
        ></PerspectiveCamera>
        <pointLight castShadow position={[1, 1.2, 0]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1,1.25, .1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1,1.25, -.15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1,1.25, .2]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, .15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.2]} intensity={.1}></pointLight>
        <Suspense fallback={null}>
          <Scroll>
            <FridgeImage></FridgeImage>
            <SceneNode {...gltf["nodes"]["A_Handle"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Wolke_Magnet"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A001"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_N"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_3"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O001"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_V"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_P"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_23ster"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2020"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_R"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_S"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bis"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_25ster"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_infos"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bald"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_pfeile_runter"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2017"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_diesen"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_jahres"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_sechster"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_mehr"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Instagram_Magnet"]} customDrag={makeDraggable} customMaterialOverwrites={customMaterialProps}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Hintergrund"]} customDrag={false}></SceneNode>
          </Scroll>
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
}
