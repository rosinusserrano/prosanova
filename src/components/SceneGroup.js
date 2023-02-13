import React from 'react'
import SceneNode from './SceneNode'

export default function SceneGroup(props) {

    const { children, ...propsWithoutChildren } = props

    return (
        <group {...propsWithoutChildren}>
            {children.map((childNode) => <SceneNode {...childNode}></SceneNode>)}
        </group>
    )
}
