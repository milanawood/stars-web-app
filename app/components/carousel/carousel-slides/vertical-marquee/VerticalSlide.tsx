'use client';
import React, { useEffect, useRef } from 'react';

const VerticalSlide = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee && marquee.parentElement) {
      const width = marquee.scrollWidth / 2;
      let offset = -marquee.parentElement.offsetWidth;

      marquee.innerHTML += marquee.innerHTML; 

      const animate = () => {
        offset+= 1;
        if (offset >= width) offset = 0;
        marquee.style.transform = `translateX(-${offset}px)`;
        requestAnimationFrame(animate);
      };

      animate();


      console.log('Marquee Wrapper Width:', marquee.parentElement?.offsetWidth);
      console.log('Marquee Content Width:', marquee.scrollWidth);
    }
  }, []);

  return (
    <div className="embla_slide marquee-wrapper w-[758px] bg-stars 1000:min-w-[100vh] 800:min-w-screen h-full flex items-center origin-center">
      <div ref={marqueeRef} className="vmarquee-content w-auto flex items-center whitespace-nowrap">
        <div className="vmarquee-item bg-stars text-fontwhite uppercase font-termina font-bold text-3xl mx-4 flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="w-8 h-8 mx-2 inline-block" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
        <div className="vmarquee-item bg-stars text-stars uppercase font-termina font-bold text-3xl mx-4 text-outline flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="w-8 h-8 mx-2 inline-block" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
      </div>
    </div>
  );
};



export default VerticalSlide;
