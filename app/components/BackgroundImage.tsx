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
    <Image
      className={className}
      style={{ mixBlendMode: 'multiply' }}
      src='/images/background-transparent.png'
      alt='texture background'
      fill
      object-fit='contain'
    />
  );
};

export default BackgroundImage;
