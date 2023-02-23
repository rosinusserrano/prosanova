import React from "react";
import { Html } from "@react-three/drei";
import Lottie from "react-lottie-player";

export default function Loader() {
  var data;
  var loading = true;

  fetch("./prosanovaloading.json")
    .then((response) => response.json())
    .then((json) => {
      data = json;
      loading = false
    });

  return (
    <Html>
      {loading ? <div/> :
        <Lottie
          loop
          animationData={data}
          play
          style={{ width: 150, height: 150 }}
        ></Lottie>
      }
    </Html>
  );
}
