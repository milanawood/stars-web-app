import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen 800:h-screen 800:mt-0 w-screen">
      {children}
    </div>
  );
};

export default Slide;