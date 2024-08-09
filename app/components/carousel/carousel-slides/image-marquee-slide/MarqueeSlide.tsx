import React from 'react';
import Marquee from './Marquee';
import MarqueeItem from './MarqueeItem';


const MarqueeSlide: React.FC = () => {
  return (
    <div className="w-screen 1000:min-w-[66vh] 1000:max-w-[66vh] h-mobile-screen 800:h-screen">
        <Marquee>
          <MarqueeItem src="/images/burger-image-kitchen.png" alt="stars burger" />
          <MarqueeItem src="/images/burger-image-kitchen-two.png" alt="stars burger" />
          <MarqueeItem src="/images/burger-image-kitchen.png" alt="Item 3" />
          <MarqueeItem src="/images/burger-image-kitchen-two.png" alt="Item 4" />
          <MarqueeItem src="/images/burger-image-kitchen.png" alt="Item 5" />
        </Marquee>
    </div>
  );
};

export default MarqueeSlide;
