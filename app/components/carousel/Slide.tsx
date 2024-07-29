import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen  800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
      {children}
    </div>
  );
};

export default Slide;
