import React from 'react';
import Marquee from './Marquee';
import MarqueeItem from './MarqueeItem';
import Image from 'next/image';

const MarqueeSlide: React.FC = () => {
  return (
    <div className="embla__slide h-js-height mt-[60px] 800:h-screen 800:mt-0 w-screen flex items-center justify-center">
      <div className="w-full overflow-hidden h-full top-0 relative flex items-center justify-center">
        <div className="absolute w-full h-full top-0 left-0" style={{ backgroundColor: 'rgb(255, 255, 230)' }}>
          <figure>
            <div className="image absolute pointer-events-none shadow-carousel w-full h-full top-0 left-0">
              <Image
                src="/images/wax-paper.png"
                alt="background pattern"
                fill
                className="absolute object-center object-cover pointer-events-none shadow-carousel w-full h-full top-0 left-0 opacity-85"
              />
            </div>
          </figure>
        </div>
        <div className="absolute left-0 top-0 z-10 flex items-center justify-center select-none pointer-events-none w-full h-full">
          <div className="w-[80%] h-[80%] border-4 border-solid border-cyan-500"></div>
        </div>
        <Marquee>
          <MarqueeItem src="/images/20240513_130056795_iOS.png" alt="stars burger" />
          <MarqueeItem src="/images/20240513_130256882_iOS.png" alt="stars burger" />
          <MarqueeItem src="/images/20240513_130056795_iOS.png" alt="Item 3" />
          <MarqueeItem src="/images/20240513_130056795_iOS.png" alt="Item 4" />
          <MarqueeItem src="/images/20240513_130056795_iOS.png" alt="Item 5" />
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSlide;
