import React from 'react';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import ComingSoon from './components/carousel/carousel-slides/ComingSoon';
import MarqueeSlide from './components/carousel/carousel-slides/image-marquee-slide/MarqueeSlide';
import Quest from './components/carousel/Quest';
import VerticalSlide from './components/carousel/carousel-slides/vertical-marquee/VerticalSlide';
import Burger from './components/carousel/Burger';
import News from './components/carousel/carousel-slides/News';
import Newsletter from './components/carousel/Newsletter';
import Inspiration from './components/carousel/Inspiration';
import VideoSection from './components/carousel/carousel-slides/VideoSection';
import Manifest from './components/carousel/carousel-slides/Manifest';
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = [
  { content: <ComingSoon />, className: "w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]" },
  { content: <MarqueeSlide />, className: "w-screen 1000:min-w-[66vh] 1000:max-w-[66vh]" },
  { content: <Quest />, className: "w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative" },
  { content: <VerticalSlide />, className: "w-[76px]" },
  { content: <Burger />, className: "w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative" },
  { content: <VerticalSlide />, className: "w-[76px]" },
  { content: <News />, className: "w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]" },
  { content: <Newsletter />, className: "min-w-[100vw] w-screen 800:min-w-[560px] 1000:max-w-[700px]" },
  { content: <VerticalSlide />, className: "w-[76px]" },
  { content: <VideoSection />, className: "w-[100vw] 800:w-auto 800:aspect-[calc(1920/1080)] relative" },
  { content: <Manifest />, className: "w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]" },
];

const Home: React.FC = () => {
  return (
    <div className="">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Home;
