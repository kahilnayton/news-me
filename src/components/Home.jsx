import React from 'react';
import HeroSection from './HeroSection';
import PicSection from './PicSection';
import VidSection from './VidSection';


export default function Home(props) {
  return (
    <div>
      <HeroSection />
      <PicSection />
      <VidSection />
    </div>
  )
}