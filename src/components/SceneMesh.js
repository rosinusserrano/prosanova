import { useBox } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import React, { useRef, useState } from 'react'

export default function SceneMesh(props) {
    

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
        bind = (() => { })
    }

    // const [ref] = useBox(() => ({position: position}))

    const ref = useRef()

    return (
        <mesh
            {...props}
            position={position}
            {...bind()}
            ref={ref}
            onClick={() => console.log(ref)}
            castShadow
        >
        </mesh>
    )
}
