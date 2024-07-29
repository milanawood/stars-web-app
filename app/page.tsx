import React from 'react';
import NavBar from './components/navigation/NavBars';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Slide from './components/carousel/Slide';
import VideoSection from './components/carousel/carousel-slides/VideoSection';
import Manifest from './components/carousel/carousel-slides/Manifest';
import ComingSoon from './components/carousel/carousel-slides/ComingSoon';
import MarqueeSlide from './components/carousel/carousel-slides/image-marquee-slide/MarqueeSlide';
import BackgroundImage from './components/BackgroundImage';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="fixed mix-blend-multiply z-20 w-full h-full top-0 left-0 pointer-events-none select-none">
          <BackgroundImage className="w-full h-full absolute object-fill" width={''} height={''} src={''} alt={''} />
        </div>
        <div className="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
        <NavBar />
        <EmblaCarousel>
          <Slide>
            <ComingSoon />
          </Slide>
          <Slide>
            <MarqueeSlide />
          </Slide>
          <Slide>
            <Manifest />
          </Slide>
          <Slide>
            <VideoSection />
          </Slide>
        </EmblaCarousel>
      </div>
    </>
  );
}
