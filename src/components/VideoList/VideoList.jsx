import React from "react";
import {VideoItem} from "../index";
import "./VideoList.style.css"

export default function VideoList({ videos ,key }) {
  return (
    <div className="main">
      {videos &&
        videos.map((video) => {
          return (
            <div key={video.id.videoId}>
              <VideoItem className="item" video={video} />
            </div>
          );
        })}
    </div>
  );
}
