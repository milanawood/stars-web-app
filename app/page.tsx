// pages/index.tsx or pages/Home.tsx
import React from 'react';
import NavBar from './components/navigation/NavBars';
import EmblaCarousel from './components/EmblaCarousel';
import Slide from './components/Slide';
import VideoSection from './components/VideoSection';
import Marquee from './components/Marquee';
import MarqueeItem from './components/MarqueeItem';
import Sticker from './components/Sticker';
import Manifest from './components/Manifest';
import ComingSoon from './components/ComingSoon';
import BackgroundImage from './components/BackgroundImage';
import MarqueeSlide from './components/MarqueeSlide';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="w-full is-wheel-dragging bg-offwhite bg-hero-pattern bg-blend-lighten h-screen fixed top-0 left-0" id="sections">
        <EmblaCarousel>
          <Slide>
            <VideoSection />
          </Slide>
          <Slide>
            <Marquee>
              <MarqueeItem src="/images/20240513_130056795_iOS.png" alt="stars burger" />
              <MarqueeItem src="/images/20240513_130256882_iOS.png" alt="stars burger" />
            </Marquee>
          </Slide>
          <Slide >
            <Sticker animationClass="animate-shake" style={{ top: '50%', left: '10%' }}>
              <img src="/images/spinning-logo-1.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
            <Sticker animationClass="animate-spin" style={{ top: '80%', left: '15%' }}>
              <img src="/images/spinning-logo-3.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
          </Slide>
          <MarqueeSlide />
          <Slide>
            <Sticker animationClass="animate-rock" style={{ top: '20%', left: '5%' }}>
              <img src="/images/burger-icon-circle.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
          </Slide>
          <Slide>
            <Manifest />
            <Sticker animationClass="animate-rock" style={{ top: '20%', left: '5%' }}>
              <img src="/images/burger-icon-circle.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
          </Slide>
          <Slide>
            <ComingSoon />
          </Slide>
        </EmblaCarousel>
      </div>
    </>
  );
}
