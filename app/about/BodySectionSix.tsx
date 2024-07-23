import React from 'react';
import Image from 'next/image';

interface Sticker {
  src: string;
  alt: string;
  style: React.CSSProperties;
  className: string;
}

interface BodySectionSixProps {
  backgroundColor: string;
  textColor: string;
  stickers: Sticker[];
  mainImage: { src: string; alt: string };
  heading: string;
  subheading: string;
  description: string;
}

const BodySectionSix: React.FC<BodySectionSixProps> = ({
  backgroundColor,
  textColor,
  stickers,
  mainImage,
  heading,
  subheading,
  description,
}) => {
  return (
    <div className={`relative ${backgroundColor} ${textColor} w-full h-full px-8 py-6 800:py-14`}>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply">
          <Image
            src="/images/background-transparent.png"
            alt="Background"
            layout="fill"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative max-w-[1200px] px-12 py-4 800:py-14 m-auto">
          {stickers.map((sticker, index) => (
            <div key={index} className={`absolute ${sticker.className}`} style={sticker.style}>
              <div className="w-full overflow-visible" style={{ paddingBottom: '75%' }}>
                <Image
                  src={sticker.src}
                  alt={sticker.alt}
                  layout="fill"
                  className="animate-tilt overflow-visible"
                />
              </div>
            </div>
          ))}
          <div className="grid grid-cols-12 800:gap-8">
            <div className="col-span-12 800:col-span-6">
              <div className="w-full">
                <h2 className="uppercase my-1 py-1 font-termina font-extrabold text-50 leading-39 800:text-60 800:leading-60 1000:text-100 1000:leading-78">
                  {heading} <span className="text-red-600">{subheading}</span>
                </h2>
                <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">
                  {description}
                </p>
              </div>
              <div className="w-full h-[120px] 800:h-[160px]" />
              <div className="w-full 800:h-[120px]" />
            </div>
            <div className="col-span-12 800:col-span-6">
              <div className="w-full h-[120px] 800:h-[160px]" />
              <div className="w-full 800:h-[160px]" />
              <div className="w-full 800:h-[120px]" />
              <div className="w-full 800:h-[160px]" />
              <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-nobell">
                Respect for all creatures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionSix;
