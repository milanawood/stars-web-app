'use client';
import React, { useEffect, useRef } from 'react';

export default function VerticalSlide() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.innerHTML;
      marqueeRef.current.innerHTML += marqueeContent; 
    }
  }, []);

  return (
    <div className="vertical-marquee-container bg-stars h-full">
      <div className="vertical-marquee-content " ref={marqueeRef}>
        <div className="vmarquee-item text-fontwhite uppercase font-termina font-bold text-3xl 800:text-2xl flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="inline-block w-8 h-8 mx-2" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
        <div className="vmarquee-item text-stars uppercase font-termina font-bold text-3xl 800:text-2xl text-outline flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="inline-block w-8 h-8 mx-2" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
        <div className="vmarquee-item text-fontwhite uppercase font-termina font-bold text-3xl 800:text-2xl flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="inline-block w-8 h-8 mx-2" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
        <div className="vmarquee-item text-stars uppercase font-termina font-bold text-3xl 800:text-2xl text-outline flex items-center">
          <img src="/images/ticker-burger-cream.png" alt="Burger Icon" className="inline-block w-8 h-8 mx-2" />
          <h2 className="inline-block mx-2">Coming to a shack near you!</h2>
        </div>
      </div>
    </div>
  );
}
