import React from "react";
import LoadingScreen from "./LoadingScreen";

const PlayButton = ({ onButtonClick }) => {
  return (
    <div className="play-button" onClick={onButtonClick}>
      <LoadingScreen />
    </div>
  );
};

export default PlayButton;
