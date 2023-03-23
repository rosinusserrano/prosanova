import { useBox, useCompoundBody } from "@react-three/cannon";
import React from "react";


export function CompoundBox() {
    const [ref, api] = useBox(() => ({ mass: 1, rotation: [Math.PI / 4, Math.PI / 4, Math.PI / 4] }))
    return (
        <mesh ref={ref}>
            <boxGeometry></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
        </mesh>
    )
}


export function CompoundCircles() {
    return (
        <group position={[-8, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 4]}>
            <mesh position={[-3, 0, 0]}>
                <sphereGeometry></sphereGeometry>
                <meshStandardMaterial></meshStandardMaterial>
            </mesh>
            <mesh position={[0, 0, 0]}>
                <sphereGeometry></sphereGeometry>
                <meshStandardMaterial></meshStandardMaterial>
            </mesh>
            <mesh position={[3, 0, 0]}>
                <sphereGeometry></sphereGeometry>
                <meshStandardMaterial></meshStandardMaterial>
            </mesh>
        </group>
    )
}