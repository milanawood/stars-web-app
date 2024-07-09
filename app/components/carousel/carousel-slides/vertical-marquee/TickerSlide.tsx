"use client";
import React, { useEffect, useRef } from 'react';

const TickerSlide: React.FC = () => {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Commenting out the duplication of the content for now
    // if (tickerRef.current) {
    //   const tickerContent = tickerRef.current.innerHTML;
    //   tickerRef.current.innerHTML += tickerContent; // Duplicate the content for continuous loop
    // }
  }, []);

  console.log('TickerSlide rendered');

  return (
    <div className="embla__slide ticker-slide mt-[60px] h-[10%] 800:h-screen 800:mt-0 w-auto min-w-[150px] flex justify-center items-center">
      <div className="ticker-wrapper bg-stars">
        <div className="ticker-content flex flex-col space-y-8 animate-vertical-marquee" ref={tickerRef}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-8 mb-8">
              <div className="block w-full">
                <h2 className="block uppercase font-termina font-bold leading-none text-fontwhite text-3xl 800:text-2xl transform rotate-90 origin-center">
                  Coming to a shack near you
                </h2>
              </div>
              <div className="block w-full">
                <h2 className="block uppercase font-termina font-bold leading-none text-stars text-3xl 800:text-2xl text-outline transform rotate-90 origin-center">
                  Coming to a shack near you
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerSlide;
