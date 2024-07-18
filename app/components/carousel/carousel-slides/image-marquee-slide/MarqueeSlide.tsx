import React from 'react';
import Marquee from './Marquee';
import MarqueeItem from './MarqueeItem';
import Image from 'next/image';

const MarqueeSlide: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen 1000:min-w-[66vh] 1000:max-w-[66vh]">
      <div className="w-full overflow-hidden h-full top-0 relative">
        <div className="image w-full  absolute pointer-events-none shadow-carousel h-full top-0 left-0 bg-orange-200">
          <Image
            src="/images/wax-paper.png"
            alt="background pattern"
            fill
            objectFit='cover'
            className="absolute object-center pointer-events-none shadow-carousel w-full h-full top-0 left-0 opacity-85"
          />
        </div>
        <div className="absolute left-0 top-0 z-10 flex items-center justify-center select-none pointer-events-none w-full h-full">
          <div className="absolute left-0 top-0 z-10 flex items-center justify-center select-none pointer-events-none w-full h-full border-solid border-cyan-500"></div>
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
