import React from 'react';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[90px]  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
              <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0 bg-stars bg-opacity-50">
{  /*        <img src="/images/mission-statement-image.png" alt="texture background texture" className="absolute w-full h-full " style={{ mixBlendMode: 'multiply' }} />
*/}        </div>
    <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0">
      <div className="flex items-center justify-center w-full h-full 800:h-screen">
        <div className=" p-8 800:p-[5vw] ">
          <h1 className="w-3/5 text-4xl text-fontwhite font-bold font-termina mb-4">
            STARS® is here to serve life's adventurers.
          </h1>
          <p className=" w-3/5 text-lg font-termina text-fontwhite">
            We believe in the power of great food and great people. Our mission is to bring delicious burgers, communities in iconic locations together, across the world.
          </p>
        </div> 
        <Sticker animationClass="animate-none" style={{ top: '15%', left: '60%' }} >
          <img src="/images/paper-clip.png" alt="Star eye retro smiley face" width="500" height="auto" />
        </Sticker>
            <Sticker animationClass="animate-spin" style={{ top: '70%', left: '80%' }}>
              <img src="/images/stickers-glasses.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
      </div>
      <Sticker animationClass="animate-none" style={{ top: '55%', left: '10%' }}>
              <img src="/images/polaroid-10.png" alt="Sticker Image" width="275" height="auto" />
            </Sticker>
    </div>
    </div>
  );
};

export default Manifest;