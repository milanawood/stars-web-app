'use client';
import React, { useEffect, useRef } from 'react';

const items = [
  "Coming to a shack near you!",
  "Coming to a shack near you!",
  "Coming to a shack near you!",
  "Coming to a shack near you!"
];

const VerticalSlide = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let offset = 0;
      const width = marquee.scrollWidth / 2;
      marquee.innerHTML += marquee.innerHTML; 

      const animate = () => {
        offset++;
        if (offset >= width) offset = 0;
        marquee.style.transform = `translateX(-${offset}px)`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  return (
    <div className="embla__slide js-height mt-[60px] h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[76px]">
      <div className="h-screen transform rotate-180 select-none text-marquee pointer-events-none relative bg-stars">
        <div className="transform rotate-90 origin-top-left block w-[100vh] h-[50px] translate-x-[92px] 800:translate-x-[100px]">
          <div className="flex h-screen w-full" ref={marqueeRef}>
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0 flex items-center mx-4">
                <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-stars text-outline text-70">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlide;
