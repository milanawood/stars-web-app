import React from 'react';
import Image from 'next/image';
import Sticker from '../components/Sticker';

interface StickerImage {
  src: string;
  alt: string;
  className: string;
  animationClass: string;
}

interface HeroSectionProps {
  backgroundImage: string;
  mainImage: string;
  heading: string;
  stickerImages: StickerImage[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ backgroundImage, mainImage, heading, stickerImages }) => {
  return (
    <div className="mt-[60px] 800:mt-0">
      <div className="relative" style={{ backgroundColor: 'rgb(30, 241, 221)' }}>
        <div className="absolute overflow-hidden w-full h-full">
          <div className="w-full w-screen absolute h-full top-0 left-0" style={{ mixBlendMode: 'multiply' }}>
            <Image 
              src={backgroundImage}
              className="w-screen object-cover object-center z-20" 
              alt="STARS® background"
              fill
            />
          </div>
        </div>
        <div className="relative max-w-[1600px] m-auto">
          {stickerImages.map((sticker, index) => (
            <div key={index} className={`z-[14] overflow-visible items-center justify-center absolute pointer-events-none select-none m-0 ${sticker.className}`}>
              <Sticker animationClass={sticker.animationClass}>
                <Image src={sticker.src} alt={sticker.alt} width={500} height={175} />
              </Sticker>
            </div>
          ))}
          <div className="h-[600px] overflow-hidden relative w-full 800:h-screen 800:max-h-[900px]">
            <div className="relative flex items-center justify-center h-full z-10">
              <div className="flex items-center justify-center h-full w-full">
                <div className="relative w-[90%] h-[80%] max-w-[1200px]">
                  <Image 
                    src={mainImage}
                    className="border opacity-85 border-black border-solid rounded-[10px] w-full h-full object-cover z-20"
                    alt="STARS® ocean water over sand slowly moving"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="h-full w-full flex items-center justify-center z-20 absolute top-0 left-0 text-fontwhite shadow-header 800:shadow-header-lg">
                <div className="text-center m-auto max-w-1100">
                  <h2 className="w-[60%] header-shadows m-auto font-termina font-extrabold uppercase leading-61 text-4xl 800:text-5xl 800:w-[80%] 800:leading-80 1000:text-152 1000:w-[70%]">
                    {heading}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default HeroSection;
