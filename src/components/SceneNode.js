import React from "react";
import SceneGroup from "./SceneGroup";
import SceneMesh from "./SceneMesh";


function SceneNode(props) {

  const {isGroup, ...propsWithoutIsGroup} = props

  if (props.isGroup || ("children" in props && props.children.length > 0)) {
    return <SceneGroup {...propsWithoutIsGroup}></SceneGroup>
  } else {
    return <SceneMesh {...props}></SceneMesh>
  }
}


export default SceneNode
