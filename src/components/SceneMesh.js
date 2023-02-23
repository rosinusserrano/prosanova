import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import React, { useRef, useState } from "react";
import {
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from "three";

export default function SceneMesh(props) {
  const [position, setPosition] = useState(props.position);

  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  var bind = useDrag(
    ({ offset: [xOffset, yOffset] }) => {
      const [x, y, z] = props.position;
      setPosition([x, y - yOffset / aspect, z - xOffset / aspect]);
    },
    { pointerEvents: true }
  );

  if (!props.customDrag) {
    bind = () => {};
  }

  function openUrl() {
    if ("url" in props) {
      window.open(props.url);
    }
  }

  if ("customMaterialOverwrites" in props && "material" in props) {
    for (const materialProp in props.customMaterialOverwrites) {
      props.material[materialProp] =
        props.customMaterialOverwrites[materialProp];
    }
  }

  var { material, ...propsWithoutMaterial } = props;

  const ref = useRef();

  return (
    <mesh
      {...propsWithoutMaterial}
      material={material}
      position={position}
      {...bind()}
      ref={ref}
      onClick={openUrl}
      receiveShadow
      castShadow
    ></mesh>
  );
}
