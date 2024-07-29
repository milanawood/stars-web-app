"use client";
import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { WheelGesturesPlugin, WheelGesturesPluginOptions } from 'embla-carousel-wheel-gestures';

interface EmblaCarouselProps {
  children: React.ReactNode;
}

const wheelGesturesOptions: WheelGesturesPluginOptions = {
  forceWheelAxis: 'both',
  target: undefined,
  wheelDraggingClass: 'is-wheel-dragging',
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
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

  return (
    <div className="embla w-full virtual-scroll bg-fontwhite h-screen fixed top-0 left-0" ref={emblaRef}>
      <div className="embla__container container flex flex-nowrap items-center overflow-visible w-[fit-content] translate-neg-custom-x">{children}</div>
    </div>
  );
};

export default EmblaCarousel;