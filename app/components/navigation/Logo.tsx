import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className: string;
  src: string;
  alt?: string;
}

const Logo: React.FC<LogoProps> = ({ className, src, alt = 'logo' }) => {
  return (
    <Image className={className} src={src} alt={alt} fill object-fit='cover' />
  );
};

export default Logo;
