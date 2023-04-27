import { useBox } from '@react-three/cannon';
import { SCALE } from 'constants';
import { useControls } from 'leva';
import React, { useRef } from 'react'

function Henkel({ gltfNode }) {

    const [ref, _] = useBox(() => ({
        mass: 0,
        position: [
            gltfNode["position"]["x"] * SCALE,
            gltfNode["position"]["y"] * SCALE,
            gltfNode["position"]["z"] * SCALE],
        rotation: [
            gltfNode["rotation"]["_x"],
            gltfNode["rotation"]["_y"],
            gltfNode["rotation"]["_z"]],
        scale: [SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"] * 3, SCALE * gltfNode["scale"]["z"]],
        args: [0.1 * SCALE, 0.25 * SCALE, 0.04 * SCALE],
    }), useRef())

    const {metalness, roughness } = useControls("henkel",
        {
            metalness: {value: 0.5, min: 0, max: 1, step: 0.1},
            roughness: {value: 0.5, min: 0, max: 1, step: 0.1}
        })
    var material = gltfNode["material"]
    material.roughness = roughness
    material["metalness"] = metalness

    console.log(material)

    return <mesh
        geometry={gltfNode["geometry"]}
        material={material}
        scale={[SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"], SCALE * gltfNode["scale"]["z"]]}
        ref={ref}
    />
}

export default Henkel