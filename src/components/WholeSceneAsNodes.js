import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import SceneNode from "./SceneNode";
import { PerspectiveCamera, Scroll, ScrollControls } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import SceneMesh from "./SceneMesh";
import { useProsanovaScene } from "functions";

function Box() {
  const [ref] = useBox(
    () => ({ mass: 1, position: [1, 0, 0], args: [0.1, 0.1, 0.1] }),
    useRef()
  );
  // const ref = useRef()

  return (
    <mesh ref={ref} position={[1, 0, 0]}>
      <boxGeometry args={[0.1, 0.1, 0.1]}></boxGeometry>
      <meshStandardMaterial></meshStandardMaterial>
    </mesh>
  );
}

export default function WholeSceneAsNodes() {
  const gltf = useProsanovaScene();

  console.log(Object.keys(gltf["nodes"]).filter((val) => val.startsWith("A_")));
  console.log(Object.keys(gltf["nodes"]));
  console.log(gltf);

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
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
            <SceneNode {...gltf["nodes"]["A_Handle"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Wolke_Magnet"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_A001"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_N"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_3"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O001"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_V"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_P"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_O"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_23ster"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2020"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_R"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_S"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bis"]} customDrag={false}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_25ster"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_infos"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_bald"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_pfeile_runter"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_2017"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_diesen"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_jahres"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_sechster"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_mehr"]} customDrag={true}></SceneNode>
            <SceneNode {...gltf["nodes"]["A_Instagram_Magnet"]} customDrag={true}></SceneNode>
          </Scroll>
        </Suspense>
      </ScrollControls>
    </Canvas>
  );
}
