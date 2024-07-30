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
      const height = marquee.scrollHeight / 2;
      marquee.innerHTML += marquee.innerHTML; 
    }
  }, []);

  return (
      <div className="transform rotate-180 h-screen select-none text-marquee pointer-events-none relative bg-stars">
        <div className=" ">
          <div className="flex h-screen w-full marqueeContent animate-marqueeL origin-top-left block w-[100vh] h-[50px] transform rotate-90" ref={marqueeRef}>
            {items.map((item, index) => (
              <div key={index} className=" flex-shrink-0 flex items-center mx-4">
                <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-stars text-outline text-70">
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
