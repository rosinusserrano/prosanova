import React from "react";
import SceneGroup from "./SceneGroup";
import SceneMesh from "./SceneMesh";


function SceneNode(props) {

  if (props.isGroup) {
    return <SceneGroup {...props}></SceneGroup>
  } else {
    return <SceneMesh {...props}></SceneMesh>
  }
}


export default SceneNode
