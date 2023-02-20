import { Canvas, useLoader } from "@react-three/fiber";
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
    return <mesh rotation={[0, Math.PI / 2, 0]} position={[.07, 1.2, 0]}>
        <planeGeometry args={[.65, .65]}></planeGeometry>
        <meshBasicMaterial map={texture}></meshBasicMaterial>
    </mesh>
}


export default function WholeSceneAsNodes() {
  const gltf = useProsanovaScene();

  console.log(Object.keys(gltf["nodes"]).filter((val) => val.startsWith("A_")));
  console.log(Object.keys(gltf["nodes"]));
  console.log(gltf);

  const makeDraggable = false

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
    <OrbitControls target={[.1, 2, 0]}></OrbitControls>
      <ScrollControls pages={2} damping={0.05}>
        <PerspectiveCamera
          makeDefault
          position={[10, 1, 0]}
          rotation={[0, Math.PI / 2, 0]}
          fov={5}
        ></PerspectiveCamera>
        <pointLight castShadow position={[5, 0, 0]}></pointLight>
        <pointLight castShadow position={[5, 5, 5]}></pointLight>
        <Suspense fallback={null}>
          <Scroll>
            {/* <FridgeImage></FridgeImage> */}
            <SceneNode {...gltf["nodes"]["A_Handle"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Wolke_Magnet"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A001"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_N"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_3"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O001"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_V"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_P"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_23ster"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2020"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_R"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_S"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bis"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_25ster"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_infos"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bald"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_pfeile_runter"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2017"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_diesen"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_jahres"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_sechster"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_mehr"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Instagram_Magnet"]} customDrag={makeDraggable}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Hintergrund"]} customDrag={false}></SceneNode>
          </Scroll>
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
}
