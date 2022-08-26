// packages/Video/index.stories.tsx
import React from "react";
import Video from "./index";

export default {
  title: "Video"
};

export const WithVideo = () => (
  <Video
    controls={true}
    autoPlay={false}
    url="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo-720p.mp4"
    style={{
      width: "100%"
    }}
  />
);
