import React, { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="relative w-full h-full bg-cyan-300 overflow-hidden">
      <img
        src="/images/food-background.jpg"
        alt="burger doodle"
        className="absolute pointer-events-none w-full h-full top-0 left-0 object-cover opacity-75"
      />
      <div className="absolute left-0 top-0 z-10 flex items-center justify-center w-full h-full select-none pointer-events-none">
        <div className="w-[80%] h-[80%] border-4 border-solid border-red-400"></div>
      </div>
      <div className="marquee-content absolute top-0 left-5 w-full h-full flex items-center animate-marquee">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
