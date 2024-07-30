import React from 'react';
import Image from 'next/image';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <Sticker animationClass="animate-none" className="absolute left-[10%] bottom-[2%] w-[80%]">
        <div className="w-full overflow-visible relative pb-[41.0726%]">
          <Image
            src="/images/stars-burger-character-5.png"
            alt="burger guy"
            layout="fill"
            objectFit="contain"
            className="animate-none overflow-visible"
          />
        </div>
      </Sticker>
      <Sticker animationClass="animate-none" className="absolute top-[18%] left-[9%] w-[80%] 800:top-[22%] 800:left-[7.5%]">
        <div className="w-full overflow-visible relative pb-[13.0435%]">
          <Image
            src="/images/logo-offwhite.png"
            alt="burger text"
            layout="fill"
            objectFit="contain"
            className="animate-none overflow-visible"
          />
        </div>
      </Sticker>
      <Sticker animationClass="animate-none" className="absolute top-[5%] right-[15%] w-[40%] 800:top-[9%] 800:w-[23%]">
        <div className="w-full overflow-visible relative pb-[39.4558%]">
          <Image
            src="/images/star-offwhite.png"
            alt="crossed out brand manifesto"
            fill
            objectFit="contain"
            className="animate-none overflow-visible"
          />
        </div>
      </Sticker>
      <div className="absolute inset-0 bg-stars bg-opacity-60 select-none pointer-events-none"></div>
      <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0 flex items-center justify-center">
        <div className="w-full p-8 800:p-[5vw]">
          <div className="w-full">
            <p className="text-16 -tracking-02 text-fontwhite font-termina font-extrabold 400:text-18 800:text-22 1200:text-22 1200:leading-36 1600:text-25">
              We believe in the power of great food and great people. Our mission is to bring delicious burgers, communities in iconic locations together, across the world.
            </p>
            <p className="uppercase text-transparent text-outline text-16 -tracking-02 font-termina font-extrabold 400:text-18 800:text-22 1200:text-22 1200:leading-36 1600:text-25">
              peace, love and burgers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifest;