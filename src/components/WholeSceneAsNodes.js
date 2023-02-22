import React, { Suspense } from "react";
import SceneNode from "./SceneNode";
import { PerspectiveCamera, Scroll, ScrollControls, OrbitControls } from "@react-three/drei";
import { useProsanovaScene } from "functions";


export default function WholeSceneAsNodes() {
  const gltf = useProsanovaScene();
  console.log(gltf);

  const makeDraggable = false

  const customMaterialProps = {
    metalness: .1,
    roughness: 0
  }

  return (
    <>
      {/* <OrbitControls target={[.1, 2, 0]}></OrbitControls> */}
      <ScrollControls pages={1.8} damping={0.05}>
        <PerspectiveCamera
          makeDefault
          position={[10, 1.25, -.01]}
          rotation={[0, Math.PI / 2, 0]}
          fov={2}
        ></PerspectiveCamera>
        <pointLight castShadow position={[1, 1.2, 0]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, .1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, -.15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, .2]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, .15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.2]} intensity={.1}></pointLight>
        <Suspense fallback={null}>
          <Scroll>
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
    </>
  );
}
