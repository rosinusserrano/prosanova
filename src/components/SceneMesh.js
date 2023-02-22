import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import React, { useRef, useState } from "react";

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

  if ("customMaterialOverwrites" in props && "material" in props) {
    for (const materialProp in props.customMaterialOverwrites) {
      props.material[materialProp] =
        props.customMaterialOverwrites[materialProp];
    }
  }

  // if (props.name === "A_Hintergrund") {
  //     console.log(props.material)
  // }

  const ref = useRef();

  return (
    <mesh
      {...props}
      position={position}
      {...bind()}
      ref={ref}
      onClick={() => console.log(ref)}
      castShadow
      receiveShadow
    ></mesh>
  );
}
