"use client";
import React, { ReactNode, useEffect, useRef } from 'react';

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
    <div className="marquee-container h-js-height 800:h-mobile-screen">
      <div className="marquee-content h-full flex items-center">
        <div ref={marqueeRef} className="flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
