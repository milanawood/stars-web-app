import React, { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="marquee-container bg-cyan-300">
    <img src="/images/food-background.jpg" alt="burger doodle" className="absolute pointer-events-none shadow-carousel w-full h-full top-0 left-0 object-cover opacity-75"/>
        {/*<div className="embla__slide js-height mt-[60px] h-mobile-screen  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative"></div> */}
        <div className="absolute left-0 top-0 z-10 flex items-center justify-center select-none pointer-events-none w-full h-full">
            <div className="w-[80%] h-[80%] border-4 border-solid border-red-400"></div>
        <div className="marquee-content animate-marquee">
        {children}
        </div>
        </div>
    </div>
  );
};

export default Marquee;