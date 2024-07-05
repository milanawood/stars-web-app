import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative">
      {children}
    </div>
  );
};

export default Slide;