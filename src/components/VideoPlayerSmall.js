import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import PlayButton from './PlayButton';

const VideoPlayer = () => {
  const [play, setPlay] = useState(false);

  const handleButtonClick = () => {
    setPlay(true);
  };

  return (
    <div className="Video-wrapper-small">
      {!play && <PlayButton onButtonClick={handleButtonClick} />}
      {play && (
        <ReactPlayer
          url="../0203TeaserWebsite-Animation-mobile.mp4"
          playing
          muted
          loop
          playsinline
          attributes={{ playsinline: true, webkitPlaysinline: true }}
          width="auto%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
