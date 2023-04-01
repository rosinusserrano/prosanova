import { useBox, useCompoundBody } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { LETTERS_OFFSET, SCALE, LETTERS_MASS } from "constants";
import { useControls } from "leva";
import React, { useRef, useState } from "react";


function randomLittleRotation() {
    // return ((Math.random() - .5) * 2) * Math.PI * 0
    return 0
}


function randomHeightOffset(offset) {
    return 1* (offset/2) + Math.random() * (offset/2)
    // return offset
}


export function FallbackLetter({ gltfNode, offset }) {
    const { size, viewport } = useThree();

    const [position, setPosition] = useState([
        gltfNode["position"]["x"] * SCALE + LETTERS_OFFSET + randomHeightOffset(offset),
        gltfNode["position"]["y"] * SCALE,
        gltfNode["position"]["z"] * SCALE]);

    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);

    const aspect = size.width / viewport.width;

    const [ref, api] = useBox(() => ({
        mass: LETTERS_MASS,
        position: position,
        rotation: [
            gltfNode["rotation"]["_x"] + randomLittleRotation(),
            gltfNode["rotation"]["_y"] + randomLittleRotation(),
            gltfNode["rotation"]["_z"] + randomLittleRotation()],
        scale: [SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"] * 3, SCALE * gltfNode["scale"]["z"]],
        args: [0.035 * SCALE, 0.01 * SCALE, 0.04 * SCALE],

    }))

    const X_OFFSET_HARDCODED = 0
    const Y_OFFSET_HARDCODED = 0
    const bind = useDrag(({ offset: [,], xy: [x, y], first, last }) => {
        if (first) {
            api.mass.set(0);
        } else if (last) {
            api.mass.set(LETTERS_MASS)
        }
        api.position.set(0.0035 * SCALE, -((y - Y_OFFSET_HARDCODED) - size.height / 2) / aspect, -((x - X_OFFSET_HARDCODED) - size.width / 2) / aspect);
    }, { pointerEvents: true });

    useFrame(() => {
        const deltaX = Math.abs(ref.current.position["x"] - position[0])
        const deltaY = Math.abs(ref.current.position["y"] - position[1])
        const deltaZ = Math.abs(ref.current.position["z"] - position[2])
        if (deltaX > 0.001 || deltaY > 0.001 || deltaZ > 0.001) {
            setPosition([
                ref.current.position["x"],
                ref.current.position["y"],
                ref.current.position["z"]]);
        }
        const bodyQuaternion = ref.current.quaternion.toArray()
        const quaternionDelta = bodyQuaternion.map((n, idx) => Math.abs(n - quaternion[idx]))
            .reduce((acc, curr) => acc + curr);
        if (quaternionDelta > 0.01) {
            setQuaternion(ref.current.quaternion.toArray());
        }
    })

    return <mesh
        geometry={gltfNode["geometry"]}
        material={gltfNode["material"]}
        scale={[SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"], SCALE * gltfNode["scale"]["z"]]}
        ref={ref}
        {...bind()}
        onClick={(e) => e.stopPropagation()}
        castShadow
        // receiveShadow
    />
}


export function A({ gltfNode }) {

    const newBox = useControls({
        xSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        ySize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        zSize: { value: 1, min: 0.1, max: 5, step: 0.01 },
        xPos: { value: 0.00, min: -1, max: 1, step: 0.0001 },
        yPos: { value: 0.00, min: -1, max: 1, step: 0.0001 },
        zPos: { value: 0.00, min: -1, max: 1, step: 0.0001 },
        xRot: { value: 0.00, min: 0, max: Math.PI * 100, step: 1 },
        yRot: { value: 0.00, min: 0, max: Math.PI * 100, step: 1 },
        zRot: { value: 0.00, min: 0, max: Math.PI * 100, step: 1 }
    })

    const [ref, api] = useCompoundBody(() => ({
        mass: LETTERS_MASS,
        position: [
            gltfNode["position"]["x"] * SCALE + LETTERS_OFFSET,
            gltfNode["position"]["y"] * SCALE,
            gltfNode["position"]["z"] * SCALE],
        rotation: [
            gltfNode["rotation"]["_x"],
            gltfNode["rotation"]["_y"],
            gltfNode["rotation"]["_z"]],
        scale: [SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"], SCALE * gltfNode["scale"]["z"]],
        shapes: [
            {
                type: "Box",
                position: [newBox.xPos / 100, newBox.yPos / 100, newBox.zPos / 100],
                args: [newBox.xSize / 100, newBox.ySize / 100, newBox.zSize / 100],
                rotation: [newBox.xRot / 100, newBox.yRot / 100, newBox.zRot / 100]
            }
        ]
    }), useRef())

    return <>
        <mesh
            geometry={gltfNode["geometry"]}
            material={gltfNode["material"]}
            scale={[SCALE * gltfNode["scale"]["x"], SCALE * gltfNode["scale"]["y"], SCALE * gltfNode["scale"]["z"]]}
            ref={ref} >
            <mesh scale={[SCALE * (1/gltfNode["scale"]["x"]), SCALE * (1/gltfNode["scale"]["y"]), SCALE * (1/gltfNode["scale"]["z"])]}
                    position={[newBox.xPos / 100, newBox.yPos / 100, newBox.zPos / 100]}
                    rotation={[newBox.xRot / 100, newBox.yRot / 100, newBox.zRot / 100]}>
                <meshNormalMaterial></meshNormalMaterial>
                <boxGeometry args={[newBox.xSize / 100, newBox.ySize / 100, newBox.zSize / 100]}></boxGeometry>
            </mesh>
        </mesh>
    </>
}