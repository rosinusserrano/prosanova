import { useBox } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import { SCALE } from 'constants';
import React, { useState } from 'react'

function Henkel({ gltfNode }) {
    const { size, viewport } = useThree();

    const [position, setPosition] = useState([
        gltfNode["position"]["x"] * SCALE,
        gltfNode["position"]["y"] * SCALE,
        gltfNode["position"]["z"] * SCALE]);

    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);

    const aspect = size.width / viewport.width;

    const [ref, api] = useBox(() => ({
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
    }))

    // const mainContent = document.getElementsByClassName("header-wrapper")[0]
    // const offsetTop = mainContent.clientHeight + 25
    // const offsetLeft = 18

    // const X_OFFSET_HARDCODED = offsetLeft
    // const Y_OFFSET_HARDCODED = offsetTop
    // const bind = useDrag(({ offset: [,], xy: [x, y], first, last }) => {
    //     if (first) {
    //         // api.mass.set(0);
    //     } else if (last) {
    //         api.mass.set(LETTERS_MASS)
    //     }
    //     api.position.set(0.004 * SCALE, -((y - Y_OFFSET_HARDCODED) - size.height / 2) / aspect, -((x - X_OFFSET_HARDCODED) - size.width / 2) / aspect);
    // }, { pointerEvents: true });

    // useFrame(() => {
    //     const deltaX = Math.abs(ref.current.position["x"] - position[0])
    //     const deltaY = Math.abs(ref.current.position["y"] - position[1])
    //     const deltaZ = Math.abs(ref.current.position["z"] - position[2])
    //     if (deltaX > 0.001 || deltaY > 0.001 || deltaZ > 0.001) {
    //         setPosition([
    //             ref.current.position["x"],
    //             ref.current.position["y"],
    //             ref.current.position["z"]]);
    //     }
    //     const bodyQuaternion = ref.current.quaternion.toArray()
    //     const quaternionDelta = bodyQuaternion.map((n, idx) => Math.abs(n - quaternion[idx]))
    //         .reduce((acc, curr) => acc + curr);
    //     if (quaternionDelta > 0.01) {
    //         setQuaternion(ref.current.quaternion.toArray());
    //     }
    // })

    return <mesh
        geometry={gltfNode["geometry"]}
        material={gltfNode["material"]}
        scale={[SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"], SCALE * gltfNode["scale"]["z"]]}
        ref={ref}
        // {...bind()}
        onClick={(e) => e.stopPropagation()}
        castShadow
    // receiveShadow
    />
}

export default Henkel