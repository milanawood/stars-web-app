import React from 'react';
import Image from 'next/image';

interface ArtifactProps {
  src: string;
  alt: string;
  customClass: string;
}

const FunSticker: React.FC<ArtifactProps> = ({ src, alt, customClass }) => {
  return (
    <div className={`z-[14] overflow-visible items-center justify-center absolute ${customClass} pointer-events-none select-none`}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default FunSticker;
