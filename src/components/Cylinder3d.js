import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useDrag } from "react-use-gesture";

const { useFrame, useThree } = require("@react-three/fiber");
const { useRef, useState } = require("react");


function Cylinder3d(props) {
    const ref = useRef();

    const [position, setPosition] = useState(props.position)

    const [hovered, hover] = useState(false)

    const { size, viewport } = useThree()
    const aspect = size.width / viewport.width

    return (
        <motion.mesh
            {...props}
            position={position}
            ref={ref}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <cylinderGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                wireframe={props.wireframe}
                color={hovered ? "hotpink" : "orange"} />
            <OrbitControls></OrbitControls>
        </motion.mesh>
    )
}


export default Cylinder3d
