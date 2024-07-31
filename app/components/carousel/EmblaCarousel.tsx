"use client";
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin, WheelGesturesPluginOptions } from 'embla-carousel-wheel-gestures';
import ComingSoon from './carousel-slides/ComingSoon';
import MarqueeSlide from './carousel-slides/image-marquee-slide/MarqueeSlide';
import Quest from './Quest';
import VerticalSlide from './carousel-slides/vertical-marquee/VerticalSlide';
import Burger from './Burger';
import News from './carousel-slides/News';
import Newsletter from './Newsletter';
import Inspiration from './Inspiration';
import VideoSection from './carousel-slides/VideoSection';
import Manifest from './carousel-slides/Manifest';

const wheelGesturesOptions: WheelGesturesPluginOptions = {
  forceWheelAxis: 'both',
  target: undefined,
  wheelDraggingClass: 'is-wheel-dragging',
};

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchResize: true, direction: 'rtl' },
    [
      Autoplay(),
      WheelGesturesPlugin(wheelGesturesOptions),
    ]
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('scroll', onScroll);
    onScroll();
  }, [emblaApi, onScroll]);

  useEffect(() => {
    if (!emblaApi) return;

    // Debugging: Log the number of slides
    console.log('Number of slides:', emblaApi.slideNodes().length);

    // Debugging: Log the looping status
    console.log('Looping enabled:', emblaApi.plugins);
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
          <ComingSoon />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen 1000:min-w-[66vh] 1000:max-w-[66vh]">
          <MarqueeSlide />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)]">
          <Quest />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[76px]">
          <VerticalSlide />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)]">
          <Burger />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[76px]">
          <VerticalSlide />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
          <News />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 min-w-[100vw] w-screen 800:min-w-[560px] 1000:max-w-[700px]">
          <Newsletter />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen 1000:w-auto">
          <Inspiration />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[76px]">
          <VerticalSlide />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[100vw] 800:w-auto 800:aspect-[calc(1920/1080)]">
          <VideoSection />
        </div>
        <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
          <Manifest />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
