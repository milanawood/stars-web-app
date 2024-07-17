"use client"
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
    <div className="embla_slide js-height relative w-full h-full overflow-hidden marquee-container">
      <div className="marquee-content absolute top-0 left-0 w-full h-full flex items-center">
        <div ref={marqueeRef} className="flex items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
