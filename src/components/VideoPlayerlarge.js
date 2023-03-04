import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/pages.css';


const VideoPlayer = () => {
  return (
    <div className='Video-wrapper-large'>
      <ReactPlayer
        url='../0203TeaserWebsite-Animation.mp4'
        playing
        loop
        muted ={true}
        controls={false}
        width="103%"
        height="auto"
      /></div>
  );
};

export default VideoPlayer;