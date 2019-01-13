import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  console.log(videos);

  return (
    <div>
      <VideoItem />
    </div>
  );
};

export default VideoList;
