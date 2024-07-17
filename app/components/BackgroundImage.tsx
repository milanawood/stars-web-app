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

const BackgroundImage: React.FC<BackgroundImageProps> = ({ className, style, src, alt }) => {
  return (
    <Image
      className={className}
      style={style}
      src={src}
      alt={alt}
      fill
      object-fit='cover'
    />
  );
};

export default BackgroundImage;
