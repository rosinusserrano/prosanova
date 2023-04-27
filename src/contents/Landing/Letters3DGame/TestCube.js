import React from 'react'

function TestCube() {
  return (
    <mesh position={[.1, .1, .1]}>
        <boxGeometry args={[.1, .1, .1]}/>
        <meshStandardMaterial metalness={.1} roughness={0} color={"red"} flatShading={true}/>
    </mesh>
  )
}

export default TestCube