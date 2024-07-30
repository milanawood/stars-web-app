import React from 'react';
import NavBar from './components/navigation/NavBars';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Slide from './components/carousel/Slide';
import VideoSection from './components/carousel/carousel-slides/VideoSection';
import Manifest from './components/carousel/carousel-slides/Manifest';
import ComingSoon from './components/carousel/carousel-slides/ComingSoon';
import MarqueeSlide from './components/carousel/carousel-slides/image-marquee-slide/MarqueeSlide';
import BackgroundImage from './components/BackgroundImage';
import Quest from './components/carousel/Quest';
import VerticalSlide from './components/carousel/carousel-slides/vertical-marquee/VerticalSlide';

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="fixed mix-blend-multiply z-20 w-full h-full top-0 left-0 pointer-events-none select-none">
          <BackgroundImage className="w-full h-full absolute object-fill" width={''} height={''} src={''} alt={''} />
        </div>
        <div className="fixed top-[1px] left-[1px] width-[1px] height-0 padding-0 margin-[1px] overflow-hidden clip-[rect(0, 0, 0, 0)] whitespace-nowrap border-none display-none"></div>
        <NavBar />
        <EmblaCarousel>
          <Slide className="w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
            <ComingSoon />
          </Slide>
          <Slide className="w-screen 1000:min-w-[66vh] 1000:max-w-[66vh]">
            <MarqueeSlide />
          </Slide>
          <Slide className="w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative">
            <Quest />
          </Slide>
          <Slide className="hidden w-[76px]">
            <VerticalSlide />
          </Slide>
          <Slide className="w-[100vw] 800:w-auto 800:aspect-[calc(1920/1080)] relative">
            <VideoSection />
          </Slide>
          <Slide className="w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
            <Manifest />
          </Slide>
        </EmblaCarousel>
      </div>
    </>
  );
}
