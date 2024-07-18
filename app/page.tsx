
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
{      <BackgroundImage className="bg-amber-50 mix-blend-multiply z-0 object-cover h-js-height" width={''} height={''} src={''} alt={''} />
}      <NavBar />
      <div className="w-full is-wheel-dragging h-screen fixed top-0 left-0">
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
