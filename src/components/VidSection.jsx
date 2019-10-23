import React from 'react';
import NewsVid from './NewsVid';

export default function VidSection(props) {
  return (
    <section id="vid-section">
      <h2>Current trends</h2>
      <div id="vid-gallery">
        <NewsVid videoSource="https://www.youtube.com/embed/JVJTl1vITTk"/>
        <NewsVid videoSource="https://www.youtube.com/embed/RQCa-pKyqdU"/>
      </div>
    </section>
  )
}