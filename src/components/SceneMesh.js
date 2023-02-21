import { useBox } from '@react-three/cannon';
import { useLoader, useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import React, { useRef, useState } from 'react'
import { EquirectangularReflectionMapping, PMREMGenerator, sRGBEncoding, TextureLoader } from 'three';



function useEnvMapping() {

    const { gl } = useThree()
    const pmremGenerator = new PMREMGenerator(gl)
    pmremGenerator.compileEquirectangularShader()

    gl.toneMappingExposure = 1

    const texture = useLoader(TextureLoader, "./equirectangular.png")
    texture.mapping = EquirectangularReflectionMapping
    texture.encoding = sRGBEncoding

    const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(texture)

    return pngCubeRenderTarget
}


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

    props.material["metalness"] = 0.9

    if (!props.customDrag) {
        bind = (() => { })
    }

    if ("customMaterialOverwrites" in props) {
        for (const materialProp in props.customMaterialOverwrites) {
            props.material[materialProp] = props.customMaterialOverwrites[materialProp]
        }
    }

    const envMapping = useEnvMapping()
    props.material.envMap = envMapping.texture
    props.material.needsUpdate = true

    if (props.name == "A_N") { console.log(props) }

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
