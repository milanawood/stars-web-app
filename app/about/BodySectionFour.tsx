import React from 'react';
import Image from 'next/image';

interface StickerImage {
  src: string;
  alt: string;
  style: React.CSSProperties;
  className: string;
  animationClass: string;
}

interface BodySectionFourProps {
  backgroundColor: string;
  bottomColor: string;
  stickers: StickerImage[];
  mainImage: {
    src: string;
    alt: string;
  };
  text: string;
}

const BodySectionFour: React.FC<BodySectionFourProps> = ({
  backgroundColor,
  bottomColor,
  stickers,
  mainImage,
  text
}) => {
  return (
    <div className="w-full relative" style={{ backgroundColor }}>
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`z-[14] overflow-visible items-center justify-center absolute pointer-events-none select-none ${sticker.className}`}
          style={sticker.style}
        >
          <div className="image w-full overflow-visible" style={{ paddingBottom: '88.34%' }}>
            <Image
              src={sticker.src}
              alt={sticker.alt}
              layout="fill"
              className={`animate-${sticker.animationClass}`}
            />
          </div>
        </div>
      ))}
      <div className="relative z-[2]">
        <div className="w-full">
          <div className="image w-full relative" style={{ paddingBottom: '79.29%' }}>
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              layout="fill"
              className="block absolute w-full h-full object-fit"
            />
          </div>
        </div>
        <div className="text-center w-full">
          <p className="text-17 leading-23 800:text-26 800:leading-38 1000:leading-46 1000:text-34 max-w-[650px] p-4 m-auto font-termina font-extrabold">
            {text}
          </p>
        </div>
      </div>
      <div className="absolute w-full bottom-0 h-1/2" style={{ backgroundColor: bottomColor }}></div>
    </div>
  );
};

export default BodySectionFour;