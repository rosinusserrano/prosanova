import React, { Suspense, useState } from "react";
import SceneNode from "./SceneNode";
import {
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useProsanovaScene } from "functions";
import { useControls } from "leva";

export default function WholeSceneAsNodes() {
  const gltf = useProsanovaScene();
  const makeDraggable = false;

  const {metalness, roughness} = useControls({
    metalness: {value: 0.1, min: 0, max: 1, step: .1},
    roughness: {value: 0, min: 0, max: 1, step: .1},
    cameraYY: {value: 1.25, min: -10, max: 20, step: .1},
  })

  const customMaterialProps = {
    metalness: metalness,
    roughness: roughness,
  };

  const initialYOffset = 11.3
  const [cameraX, setCameraX] = useState(12300 / window.innerWidth);
  const [cameraY, setCameraY] = useState(
    Math.min(initialYOffset, initialYOffset + (window.innerWidth - 1280) / 1000)
  );
  window.addEventListener("resize", () => {
    setCameraX(12300 / window.innerWidth);
    setCameraY(Math.min(initialYOffset, initialYOffset + (window.innerWidth - 1280) / 1000));
  });

  return (
    <>
      {/* <OrbitControls target={[.1, cameraY, -.1]}></OrbitControls> */}
      <ScrollControls pages={2} damping={0.05}>
        <PerspectiveCamera
          makeDefault
          position={[cameraX, cameraY, -.1]}
          rotation={[0, Math.PI / 2, 0]}
          fov={25}
        ></PerspectiveCamera>
        <Environment
          preset="apartment"
          background
          resolution={1}
        ></Environment>
        {/* <directionalLight position={[1, 1, -1]}></directionalLight> */}
        {/* <pointLight castShadow position={[1, 1.2, 0]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, .1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, -.15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.25, .2]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.1]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, .15]} intensity={.1}></pointLight>
        <pointLight castShadow position={[1, 1.3, -.2]} intensity={.1}></pointLight> */}
        <Suspense fallback={null}>
          <Scroll>
            <group scale={9} position={[0, 0, 0]}>
              <SceneNode
                {...gltf["nodes"]["A_Handle"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_A"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_Wolke_Magnet"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_A001"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_N"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_2"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_3"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_O001"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_V"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_P"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_O"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_23ster"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_2020"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_R"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_S"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_bis"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_25ster"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_infos"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_bald"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_pfeile"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_2017"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_diesen"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_jahres"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_sechster"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_mehr"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_Instagram_Magnet"]}
                customDrag={makeDraggable}
                customMaterialOverwrites={customMaterialProps}
              ></SceneNode>
              <SceneNode
                {...gltf["nodes"]["A_Hintergrund"]}
                customDrag={false} receiveShadow
              ></SceneNode>
            </group>
          </Scroll>
        </Suspense>
      </ScrollControls>
    </>
  );
}
