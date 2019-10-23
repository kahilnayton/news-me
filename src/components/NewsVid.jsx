import React from 'react';

export default function NewsVid(props) {
  const src = props.videoSource;
  return (
    <div className="video">
    <div className="video-responsive">
      <iframe width="900" height="500" title={src} src={src} frameborder="0"></iframe>
      </div>
      </div>
  )
}