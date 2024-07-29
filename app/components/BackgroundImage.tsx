import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  width: string;
  height: string;
  className?: string;
  style?: React.CSSProperties;
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ className }) => {
  return (
<div className="fixed w-full h-full top-0 left-0 opacity-60 select-none pointer-events-none z-0" style={{ mixBlendMode: 'multiply' }}>
          <Image src="/images/background-transparent.png" alt="background pattern" fill objectFit="cover" />
    </div>
  );
};

export default BackgroundImage;
