import React, { JSXElementConstructor } from 'react';
import Image from 'next/image';
import Sticker from '../components/Sticker';

interface Section {
  heading: React.ReactNode;
  subheading: string;
}

interface BodySectionTwoProps {
  sections: Section[];
  stickers: {
    src: string;
    alt: string;
    className: string;
  }[];
  images: {
    src: string;
    alt: string;
    className: string;
  }[];
}

const BodySectionTwo: React.FC<BodySectionTwoProps> = ({ sections, stickers, images }) => {
  return (
    <div className="relative 800:py-6">
      <div className="px-5 max-w-[1200px] py-10 relative m-auto">
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            className={`z-[14] overflow-visible items-center justify-center absolute pointer-events-none select-none ${sticker.className}`}
          >
            <div className="image w-full overflow-visible" style={{ height: 0, paddingBottom: '75%' }}>
              <Image
                src={sticker.src}
                alt={sticker.alt}
                width={500}
                height={500}
                className="animate-null overflow-visible"
              />
            </div>
          </Sticker>
        ))}
        <div className="w-full">
          <div className="flex w-full justify-end">
            <div className="w-full relative rounded-[10px] h-0 pb-[52%]">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="block absolute w-full h-full object-contain"
              />
            </div>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="flex w-full justify-end my-4">
              <div className="w-[50%]">
                <h2 className="text-base 800:leading-34 tracking-02 1000:leading-44 font-termina font-extrabold">
                  {section.heading}
                </h2>
                <p className="text-sm 800:leading-34 tracking-02 1000:leading-44 font-termina">
                  {section.subheading}
                </p>
              </div>
            </div>
          ))}
          <div className="flex w-full justify-center">
            <div className="w-[70%]">
              <div className="w-full relative rounded-[10px] h-[0] pb-[59%]">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="block absolute w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionTwo;
