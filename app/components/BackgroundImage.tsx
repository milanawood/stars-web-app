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
    <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0 bg-yellow-50">
    <figure>
      <div className='absolute z-20 w-full h-full top-0 left-0'>
        <Image src='/images/background-transparent.png'
          alt='texture background'
          fill
          objectFit='cover'
          objectPosition='center'
          className='absolute w-full h-full object-cover object-center mix-blend-multiply'
        />
      </div>
    </figure>
  </div>
  );
};

export default BackgroundImage;
