import React, { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, className }) => {
  return (
    <div className={`embla_slide js-height mt-[60px] h-mobile-screen  800:h-screen 800:mt-0 ${className}`}>
      {children}
    </div>
  );
};

export default Slide;