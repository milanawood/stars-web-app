'use client';
import React, { useEffect, useRef } from 'react';

const items = [
  "Coming to a shack near you!",
  "Coming to a shack near you!",
  "Coming to a shack near you!",
  "Coming to a shack near you!"
];

const VerticalSlide: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.innerHTML += marquee.innerHTML; 
    }
  }, []);

  return (
      <div className="h-screen transform rotate-180 select-none pointer-events-none relative bg-stars">
        <div className="transform rotate-90 origin-top-left block w-[100vh] h-[50px] translate-x-[92px] 800:translate-x-[100px]">
          <div ref={marqueeRef} className="relative overflow-visible flex h-screen w-full pt-6">
            {items.map((item, index) => (
              <div key={index} className="flex marqueeContent pause-animation animate-marqueeL">
                <h2 className="marqueeItem uppercase my-1 mx-2 py-1 font-termina font-extrabold relative leading-none text-outline text-6xl text-stars">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default VerticalSlide;
