
import React from 'react';
import NavBar from './components/navigation/NavBars';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Slide from './components/carousel/Slide';
import VideoSection from './components/carousel/carousel-slides/VideoSection';
import Manifest from './components/carousel/carousel-slides/Manifest';
import ComingSoon from './components/carousel/carousel-slides/ComingSoon';
import MarqueeSlide from './components/carousel/carousel-slides/image-marquee-slide/MarqueeSlide';
import BackgroundImage from './components/BackgroundImage';
import VerticalSlide from './components/carousel/carousel-slides/vertical-marquee/VerticalSlide';


export default function Home() {
  return (
    <>
{      <BackgroundImage width="3840" height="2160" src="/images/background-transparent.png" alt="Background" className="bg-amber-50 mix-blend-multiply z-0" />
}      <NavBar />
      <div className="w-full is-wheel-dragging h-screen fixed top-0 left-0">
        <EmblaCarousel>
        <Slide>
            <ComingSoon />
          </Slide>
          <Slide >
          <div className="rotate-90 max-w-5">
              <VerticalSlide />
            </div>
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
