"use client";
import React, { ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.innerHTML;
      marqueeRef.current.innerHTML += marqueeContent; // Duplicate the content for continuous loop
    }
  }, []);

  return (
    <div className="w-full overflow-hidden h-mobile-screen 800:h-screen top-0 relative">
          <div className="w-full overflow-hidden h-full top-0 relative">
    <div className="absolute w-full h-full top-0 left-0 bg-[rgb(255,255,230)]">
      <figure>
        <div className="absolute pointer-events-none shadow-carousel w-full h-full top-0 left-0">
          <Image
            src="/images/wax-paper.png"
            alt="background pattern"
            fill
            className="absolute object-center object-cover pointer-events-none shadow-carousel w-full h-full top-0 left-0 opacity-85"
          />
        </div>
      </figure>
    </div>
    <div className="absolute left-0 top-0 z-10 flex items-center justify-center select-none pointer-events-none w-full h-mobile-screen 800:h-screen">
      <div className="w-[80%] h-[80%] border-4 border-solid border-cyan-500"></div>
    </div>
      <div className="marqueeContent animate-marqueeL h-full w-full flex items-center">
        <div ref={marqueeRef} className="flex items-center">
          {children}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Marquee;
