"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, ...options },
    [
      AutoScroll({ stopOnInteraction: true, startDelay: 4000 } as AutoScrollOptionsType),
      WheelGesturesPlugin(wheelGesturesOptions),
    ]
  );
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(500);

  // State for tracking the scroll progress
  const [e, setE] = useState(0);
  const [t, setT] = useState(0);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    console.log("Scroll ended at index:", emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('scroll', onScroll);
    emblaApi.reInit({ loop: true, ...options });
  }, [emblaApi, onScroll, options]);

  useEffect(() => {
    const updateScroll = () => {
      if (scrollContainer) {
        const f = (e: number, t: number, factor: number) => e * (1 - factor) + t * factor;
        const m = (e: number, t: number = 3) => {
          const factor = 10 ** t;
          return Math.round(e * factor) / factor;
        };

        let animationFrameId: number;

        const animate = () => {
          setE(prevE => {
            const newE = f(prevE, t, 0.2);
            const newT = m(newE, 100);
            scrollContainer.style.transform = `translateX(${newT}px) translateZ(0)`;
            return newE;
          });

          animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleScroll = (e: WheelEvent) => {
          const { deltaY, deltaX } = e;
          setT(prevT => prevT + deltaY + deltaX);
        };

        window.addEventListener('wheel', handleScroll);
        return () => {
          cancelAnimationFrame(animationFrameId);
          window.removeEventListener('wheel', handleScroll);
        };
      }
    };

    updateScroll();
  }, [scrollContainer]);

  useEffect(() => {
    if (scrollContainer) {
      setScrollOffset(scrollContainer.offsetWidth / 3);
    }
  }, [scrollContainer]);

  const handleContainerRef = (ref: HTMLDivElement | null) => {
    if (ref) {
      setScrollContainer(ref);
      setScrollOffset(ref.offsetWidth / 3);
    }
  };

  return (
    <section className="embla bg-fontwhite">
      <div className="embla__viewport w-full bg-offwhite h-screen fixed top-0 left-0" ref={emblaRef}>
        <div
          className="embla__container container flex flex-nowrap items-center overflow-visible w-[fit-content]"
          ref={handleContainerRef}
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
