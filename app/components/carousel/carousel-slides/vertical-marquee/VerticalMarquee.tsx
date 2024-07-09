// components/VerticalMarquee.tsx
"use client";
import React, { ReactNode, useEffect, useRef } from 'react';

interface VerticalMarqueeProps {
  children: ReactNode;
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({ children }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const marqueeContent = marqueeRef.current.innerHTML;
      marqueeRef.current.innerHTML += marqueeContent; // Duplicate the content for continuous loop
    }
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden marquee-container">
      <div className="marquee-content absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-2">
        <div ref={marqueeRef} className="flex flex-col items-center space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VerticalMarquee;
