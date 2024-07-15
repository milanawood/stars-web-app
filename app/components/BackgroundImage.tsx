import React from 'react';

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
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
    />
  );
};

export default BackgroundImage;
