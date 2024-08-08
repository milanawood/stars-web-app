import React from 'react';
import Image from 'next/image';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="top-0 w-full h-full bg-stars bg-opacity-60 ml-1">
      <Sticker className="left-[10%] bottom-[1%] w-[30%] 400:hidden">
          <Image
            src="/images/stars-burger-character-5.png"
            alt="burger guy"
            width={500}
            height={105}
            className="animate-none overflow-visible w-full pb-[41%] object-cover"
          />
      </Sticker>
      <Sticker className="top-[8%] -translate-y-[8%] left-[25%] w-[50%] 800:hidden">
        <div className="w-full overflow-visible pb-[13%]">
          <Image
            src="/images/logo-offwhite.png"
            alt="stars off-white logo star outline"
            width={250}
            height={250}
            className="animate-none overflow-visible pb-[39.4558%]"
          />
        </div>
      </Sticker>
      <Sticker className="400:hidden 800:top-[10%] 800:left-[60%] 800:-translate-y-[22%] 800:w-[50%]">
        <div className="w-full overflow-visible pb-[13%]">
          <Image
            src="/images/star-offwhite.png"
            alt="stars off-white logo star outline"
            width={250}
            height={250}
            className="animate-none overflow-visible pb-[39.4558%]"
          />
        </div>
      </Sticker>
      <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0">
        <div className='flex items-center justify-center w-full h-full 800:h-screen'>
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
    </div>
  );
};

export default Manifest;