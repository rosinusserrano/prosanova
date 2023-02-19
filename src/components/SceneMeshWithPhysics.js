import { useBox, useConvexPolyhedron } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import React, { useMemo, useRef, useState } from 'react'
import { Geometry } from 'three-stdlib';

export default function SceneMeshWithPhysics(props) {

    const [position, setPosition] = useState(props.position)
    // const [position, setPosition] = useState([1, 0, 0])

    // const { size, viewport } = useThree()
    // const aspect = (size.width / viewport.width)

    // var bind = useDrag(
    //     ({ offset: [xOffset, yOffset] }) => {
    //         const [x, y, z] = props.position;
    //         setPosition([x, y - (yOffset / aspect), z - (xOffset / aspect)]);
    //     },
    //     { pointerEvents: true }
    // );

    // if (!props.customDrag) {
    //     bind = (() => { })
    // }

    console.log(props.position)

    // const pos = {
    //     x: props.position.x,
    //     y: props.position.y,
    //     z: props.position.z
    // }

    


    const [ref] = useBox(() => ({ mass: 0, position: [0, 0, 0], rotation: [props.rotation._x, props.rotation._y, props.rotation._z], args: [.001, .001, .001] }), useRef())
    // const ref = useRef()

    return (
        <mesh
            {...props}
            ref={ref}
            // position={position}
            // {...bind()}
            onClick={() => console.log(ref)}
        >
        </mesh>
    )
}