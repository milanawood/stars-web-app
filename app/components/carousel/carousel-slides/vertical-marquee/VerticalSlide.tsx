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
      marquee.innerHTML += marquee.innerHTML; 
    }
  }, []);

  return (
      <div className="h-screen transform rotate-180 select-none text-marquee pointer-events-none relative bg-green-300">
        <div className="transform rotate-90 origin-top-left block w-[100vh] h-[50px] translate-x-[92px] 800:translate-x-[100px]">
          <div ref={marqueeRef} className="flex h-screen w-full pause-animation animate-marqueeL">
            {items.map((item, index) => (
              <div key={index} className="marqueeContent">
                <h3 className="marqueeItem uppercase my-1 mx-2 py-1 font-termina font-extrabold relative leading-none text-outline text-xl text-green-300">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default VerticalSlide;
