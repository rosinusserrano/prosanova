import React from "react";

import Lottie from 'react-lottie-player';
import '../styles/loadingscreen.css';

// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from './prosanovaloading.json';

export default function Example() {
  return (
    <div className="loadingcontainer">
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 120, height: 120 }}
    />
    </div>
  )
}