import React from 'react';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[60px]  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
              <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0">
          <img src="/images/hero-image.png" alt="texture background texture" className="absolute w-full h-full object-screen" style={{ mixBlendMode: 'multiply' }} />
        </div>
    <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0">
      <div className="flex items-center justify-center w-full h-full 800:h-screen">
        <div className="w-full p-8 800:p-[5vw] bg-red-100">
          <h1 className="text-4xl font-bold font-termina mb-4">
            STARS® is here to serve life's adventurers.
          </h1>
          <p className="text-lg font-termina">
            We believe in the power of great food and great people. Our mission is to bring delicious burgers, communities in iconic locations together, across the world.
          </p>
        </div>
        <Sticker animationClass="animate-rock" style={{ top: '80%', left: '80%' }}>
          <img src="/images/spinning-logo-4.png" alt="Sticker Image 1" width="100" height="100" />
          </Sticker>
          <Sticker animationClass="animate-none" style={{ top: '60%', left: '85%' }}>
              <img src="/images/spinning-logo-1.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
            <Sticker animationClass="animate-spin" style={{ top: '70%', left: '70%' }}>
              <img src="/images/spinning-logo-3.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
      </div>
    </div>
    </div>
  );
};

export default Manifest;