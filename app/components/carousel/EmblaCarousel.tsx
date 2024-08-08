"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { AutoScrollOptionsType } from 'embla-carousel-auto-scroll';
import { WheelGesturesPlugin, WheelGesturesPluginOptions } from 'embla-carousel-wheel-gestures';

const wheelGesturesOptions: WheelGesturesPluginOptions = {
  forceWheelAxis: 'both',
  target: undefined,
  wheelDraggingClass: 'is-wheel-dragging',
};

type SlideType = {
  content: JSX.Element;
  className: string;
};

type EmblaCarouselProps = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null && emblaApi) {
      emblaApi.reInit({ container: node });
    }
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, ...options },
    [
      AutoScroll({ stopOnInteraction: true, startDelay: 1000 } as AutoScrollOptionsType),
      WheelGesturesPlugin(wheelGesturesOptions),
    ]
  );


  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    console.log("Scroll ended at index:", emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('scroll', onScroll);
    return () => {
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi, onScroll]);


  return (
    <section className="embla bg-fontwhite">
      <div className="embla__viewport w-full bg-offwhite h-screen fixed top-0 left-0" ref={emblaRef}>
        <div
          className="embla__container container flex flex-nowrap items-center overflow-visible w-[fit-content]"
          ref={(node) => {
            containerRef(node);
          }}
        >
          {slides.map((slide, index) => (
            <div
              className={`embla__slide js-height mt-[60px] h-[calc(100vh-60px)] 800:h-screen 800:mt-0 ${slide.className}`}
              key={index}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
