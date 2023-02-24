import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import React, { useRef, useState } from "react";
import SceneNode from "./SceneNode";

export default function SceneGroup(props) {
  const ref = useRef();

  const { children, customDrag, castShadow, receiveShadow, ...filteredProps } = props;

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

  if (!customDrag) {
    bind = () => {};
  }

  function openUrl() {
    if ("url" in props) {
      window.open(props.url);
    }
  }

  return (
    <group
      {...filteredProps}
      position={position}
      {...bind()}
      ref={ref}
      castShadow
      customDrag={false}
      onClick={openUrl}
    >
      {children.map((childNode, index) => (
        <SceneNode
          key={`${props.name}_${index}`}
          {...childNode}
          castShadow={castShadow}
          receiveShadow={receiveShadow}
        ></SceneNode>
      ))}
    </group>
  );
}
