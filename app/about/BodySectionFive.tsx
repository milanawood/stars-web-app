import React from 'react';
import Image from 'next/image';

interface StickerImage {
  src: string;
  alt: string;
  style: React.CSSProperties;
  className: string;
}

interface BodySectionFiveProps {
  stickers: StickerImage[];
  mainImage: {
    src: string;
    alt: string;
  };
  heading: string;
  subheading: string;
  backgroundColor: string;
  borderColor: string;
}

const BodySectionFive: React.FC<BodySectionFiveProps> = ({
  stickers,
  mainImage,
  heading,
  subheading,
  backgroundColor,
  borderColor
}) => {
  return (
    <div className={`w-full relative`} style={{ backgroundColor }}>
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`z-[14] overflow-visible items-center justify-center absolute pointer-events-none select-none ${sticker.className}`}
          style={sticker.style}
        >
          <div className="image w-full overflow-visible" style={{ paddingBottom: '100%' }}>
            <Image
              src={sticker.src}
              alt={sticker.alt}
              layout="fill"
              className="block absolute w-full h-full object-fit"
            />
          </div>
        </div>
      ))}
      <div className="grid grid-cols-12 800:gap-8 relative z-[2] px-12 max-w-[1200px] py-4 800:py-14 m-auto">
        <div className="col-span-12 800:col-span-6">
          <div className="w-full">
            <h2 className="text-50 leading-39 uppercase my-1 py-1 800:my-2 800:py-2 font-termina 800:text-60 800:leading-60 1000:text-100 1000:leading-78">
              {heading} <span style={{ color: '#fc5226' }}>{subheading}</span>
            </h2>
            <p className="text-16 800:text-26 800:leading-34 1000:text-32 tracking-02 1000:leading-44 font-termina">
              Scientists, Adventures and Foodies is who we are!
            </p>
          </div>
        </div>
        <div className="col-span-12 800:col-span-6">
          <div>
            <div className="w-full">
              <div className={`image w-full relative border-[4px] ${borderColor} border-solid`} style={{ paddingBottom: '133.33%' }}>
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  layout="fill"
                  className="block p-5 absolute w-full h-full object-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionFive;
