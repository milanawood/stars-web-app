'use client';
import React, { useEffect, useRef } from 'react';

const VerticalSlide = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let offset = 0;
      const width = marquee.scrollWidth / 2;
      marquee.innerHTML += marquee.innerHTML; // Duplicate content for infinite loop

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
    <div className="embla__slide marquee-wrapper bg-stars rotate-180">
      <div ref={marqueeRef} className="marquee-content ">
        <div className="marquee-item text-fontwhite uppercase font-termina font-bold text-3xl mx-4 flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="w-8 h-8 mx-2 inline-block" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
        <div className="marquee-item text-stars uppercase font-termina font-bold text-3xl mx-4 text-outline flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="w-8 h-8 mx-2 inline-block" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
      </div>
    </div>
  );
};



export default VerticalSlide;
