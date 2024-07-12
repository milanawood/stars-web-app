import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return (
    <div className="embla__slide js-height">
      {children}
    </div>
  );
};

export default Slide;