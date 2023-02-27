import React, { Suspense, useEffect, useRef, useState } from "react";
import SceneNode from "./SceneNode";
import {
  PerspectiveCamera,
  ScrollControls,
  OrbitControls,
  Environment,
  Scroll,
  useScroll,
  ContactShadows,
  SoftShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

function FunkyLight() {
  const scroll = useScroll();
  const [lightY, setLightY] = useState(scroll.range(0, 1) - 5);
  const ref = useRef();
  useFrame(() => {
    setLightY(10 * (1 - scroll.range(0, 1)) - 5);
  });
  return (
    <directionalLight
      castShadow
      position={[2, lightY, 3]}
      intensity={5}
      ref={ref}
    ></directionalLight>
  );
}

export default function WholeSceneAsNodes({ gltf, onFinishedLoading }) {
  const makeDraggable = false;

  const groupRef = useRef();

  const cameraFov = 65;
  const imageWidth = 5.45;
  const imageHeight = 3.5;
  const initialCameraYOffset = 1;
  const [cameraDistance, setCameraDistance] = useState(
    (imageWidth * window.innerHeight) /
      (Math.tan((cameraFov * Math.PI) / 180 / 2) * 2 * window.innerWidth)
  );
  const [cameraYOffset, setCameraYOffset] = useState(
    initialCameraYOffset -
      Math.max(
        0,
        (2 * cameraDistance * Math.tan((cameraFov * Math.PI) / 180 / 2) -
          imageHeight) /
          2
      )
  );

  window.addEventListener("resize", () => {
    setCameraDistance(
      (imageWidth * window.innerHeight) /
        (Math.tan((cameraFov * Math.PI) / 180 / 2) * 2 * window.innerWidth)
    );
    setCameraYOffset(
      initialCameraYOffset -
        Math.max(
          0,
          (2 * cameraDistance * Math.tan((cameraFov * Math.PI) / 180 / 2) -
            imageHeight) /
            2
        )
    );
    setPages(Math.max(1, window.innerWidth / window.innerHeight / 0.82));
  });

  const [metalness, roughness] = [0.1, 0.0];

  const customMaterialProps = {
    metalness: metalness,
    roughness: roughness,
  };

  const [pages, setPages] = useState(
    Math.max(1, window.innerWidth / window.innerHeight / 0.82)
  );

  return (
    <>
      {/* <OrbitControls target={[0, cameraYOffset, -0.1]}></OrbitControls> */}
      <ScrollControls pages={pages} damping={0.05}>
        <PerspectiveCamera
          makeDefault
          position={[cameraDistance, cameraYOffset, -0.1]}
          rotation={[0, Math.PI / 2, 0]}
          fov={cameraFov}
        ></PerspectiveCamera>
        <Environment preset="apartment" background></Environment>
        <FunkyLight></FunkyLight>
        <Scroll>
          <group scale={9} position={[0, 0, 0]} ref={groupRef}>
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
              url="https://prosanova.net"
            ></SceneNode>
            <SceneNode
              {...gltf["nodes"]["A_R"]}
              customDrag={makeDraggable}
              customMaterialOverwrites={customMaterialProps}
              castShadow
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
              url="https://prosanova.net"
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
              url="https://www.instagram.com/prosanovafestival/"
            ></SceneNode>
            <SceneNode
              {...gltf["nodes"]["A_Hintergrund"]}
              customDrag={false}
              castShadow
              receiveShadow
              onAfterRender={onFinishedLoading}
            ></SceneNode>
          </group>
        </Scroll>
      </ScrollControls>
    </>
  );
}
