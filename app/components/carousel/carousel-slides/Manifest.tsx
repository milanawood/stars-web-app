import React from 'react';
import Image from 'next/image';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
      <div className="w-full h-full top-0">
      <Sticker animationClass="animate-none" className="absolute top-[15%] left-[60%]">
          <Image src="/images/paper-clip.png" alt="surfer, snowboarder, biker burger collage retro with paper clip" width={500} height={500} />
        </Sticker>
        <Sticker animationClass="animate-spin" className="absolute top-[45%] left-[75%] 800:top-[70%] 800:left-[80%]">
          <Image src="/images/stickers-glasses.png" alt="Sticker Image" width={100} height={100} />
        </Sticker>
        <Sticker animationClass="animate-none" className="absolute top-[48%] left-[60%] 800:top-[54%] 800:left-[15%]">
          <Image 
          src="/images/polaroid-10.png" 
          alt="polaroid of plant-based STARS® burger" 
          width={275} 
          height={275} />
        </Sticker>
        <div className="absolute bg-stars bg-opacity-50 select-none pointer-events-none w-full h-full top-0 left-0"></div>
      <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0 ">
        <div className="flex items-center justify-center w-full h-full 800:h-screen">
        <div className="p-8 800:p-[5vw] relative z-30 max-w-[80%] text-fontwhite">
        <h1 className="text-4xl font-bold font-termina mb-4  z-[14] overflow-visible  items-center justify-center absolute pointer-events-none select-none">
            STARS® is here to serve life&apos;s <span className="text-stars">adventurers.</span>
          </h1>
          <p className="text-lg font-termina">
            We believe in the power of great food and great people. Our mission is to bring delicious burgers, communities in iconic locations together, across the world.
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Manifest;
