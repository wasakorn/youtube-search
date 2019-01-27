import React from "react";
import VideoItem from "./VideoItem";

const renderVideoItem = video => {
  return (
    <div>
      <VideoItem key={video.id.videoId} video={video} />
    </div>
  );
};
const VideoList = ({ videos }) => {
  console.log(videos);

  return <div>{videos.map(renderVideoItem)}</div>;
};

export default VideoList;
