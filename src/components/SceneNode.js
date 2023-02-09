import { useDrag } from "@use-gesture/react"
const { useThree } = require("@react-three/fiber");
const { useRef, useState } = require("react");


function SceneNode(props) {
  const ref = useRef();

  const [position, setPosition] = useState(props.position)

  const { size, viewport } = useThree()
  const aspect = (size.width / viewport.width)

  var bind = useDrag(
    ({ offset: [xOffset, yOffset] }) => {
      const [x, y, z] = props.position;
      setPosition([x, y - (yOffset / aspect), z - (xOffset / aspect)]);
    },
    { pointerEvents: true }
  );

  if (!props.customDrag) {
    bind = () => { }
  }

  return (
    <mesh
      {...props}
      position={position}
      {...bind()}
      ref={ref}
      onClick={() => console.log(ref)}
    >
    </mesh>
  )
}


export default SceneNode
