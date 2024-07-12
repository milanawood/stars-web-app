import React from 'react';
import Sticker from '../../Sticker';

const Manifest: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[90px]  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
      <div className="relative z-20 min-w-fit h-full 800:h-screen top-0 left-0">
        <div className="flex items-center justify-center w-full h-full 800:h-screen">
          <div className="relative w-full h-full">
            <img
              src="/images/mission-statement-image.png"
              alt="texture background texture"
              className="absolute w-full h-full object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
            <Sticker animationClass="animate-spin" style={{ top: '70%', left: '70%' }}>
              <img src="/images/stickers-glasses.png" alt="Sticker Image" width="100" height="100" />
            </Sticker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifest;
