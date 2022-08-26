import React from 'react';
export interface IVideoProps extends React.MediaHTMLAttributes<HTMLVideoElement> {
    url: string;
}
declare const Video: ({ url, ...props }: IVideoProps) => JSX.Element;
export default Video;
