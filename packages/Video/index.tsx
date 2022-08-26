// packages/Video/index.tsx
import React from "react";

export interface IVideoProps
  extends React.MediaHTMLAttributes<HTMLVideoElement> {
  url: string;
}

const Video = ({ url, ...props }: IVideoProps) => {
  return (
    <video src={url} autoPlay controls {...props}>
      <source src={url} type="video/mp4" />
      <track src={url} kind="captions" label="english_captions" />
    </video>
  );
};

export default Video;
