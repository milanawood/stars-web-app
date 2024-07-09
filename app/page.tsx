
import React from 'react';
import NavBar from './components/navigation/NavBars';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Slide from './components/carousel/Slide';
import VideoSection from './components/carousel/carousel-slides/VideoSection';
import Sticker from './components/Sticker';
import Manifest from './components/carousel/carousel-slides/Manifest';
import ComingSoon from './components/carousel/carousel-slides/ComingSoon';
import MarqueeSlide from './components/carousel/carousel-slides/image-marquee-slide/MarqueeSlide';
import BackgroundImage from './components/BackgroundImage';
import TickerSlide from './components/carousel/carousel-slides/vertical-marquee/TickerSlide';
import VerticalMarquee from './components/carousel/carousel-slides/vertical-marquee/VerticalMarquee';



export default function Home() {
  return (
    <>
      <BackgroundImage width="3840" height="2160" src="/images/background-transparent.png" alt="Background" className="mix-blend-multiply z-0" />
      <NavBar />
      <div className="w-full is-wheel-dragging bg-offwhite h-screen fixed top-0 left-0">
        <EmblaCarousel>
        <Slide>
            <ComingSoon />
          </Slide>
          <Slide>
            <MarqueeSlide />
          </Slide>
          <Slide>
          <TickerSlide />
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
