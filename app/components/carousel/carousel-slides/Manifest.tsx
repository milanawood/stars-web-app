import React from 'react';
import Image from 'next/image';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[90px] h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
      <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0 bg-stars bg-opacity-50">
        {/* Uncomment and update the src if you want to use this background image */}
        {/* <Image src="/images/mission-statement-image.png" alt="texture background texture" layout="fill" objectFit="cover" className="absolute" /> */}
      </div>
      <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0">
        <div className="flex items-center justify-center w-full h-full 800:h-screen">
          <div className="p-8 800:p-[5vw] relative z-30">
            <h1 className="w-3/5 text-4xl text-fontwhite font-bold font-termina mr-1 mb-4">
              STARS® is here to serve life&apos;s <span className="text-stars">adventurers.</span>
            </h1>
            <p className="w-3/5 text-lg font-termina text-fontwhite">
              We believe in the power of great food and great people. Our mission is to bring delicious burgers, communities in iconic locations together, across the world.
            </p>
          </div>
          <Sticker animationClass="animate-none" className="absolute top-[15%] left-[60%] ">
            <Image src="/images/paper-clip.png" alt="surfer, snowboarder, biker burger collage retro with paper clip" width={500} height={500} />
          </Sticker>
          <Sticker animationClass="animate-spin" className="800:top-[70%] 800:left-[80%] top-[45%] left-[75%]">
            <Image src="/images/stickers-glasses.png" alt="Sticker Image" width={100} height={100} />
          </Sticker>
          <Sticker
          animationClass="animate-none"
          className="800:top-[54%] 800:left-[15%] top-[48%] left-[60%]"
        >
          <Image src="/images/polaroid-10.png" alt="polaroid of plant-based STARS® burger" width={275} height={275} />
        </Sticker>
        </div>
      </div>
    </div>
  );
};

export default Manifest;
