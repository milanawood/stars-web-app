import React from 'react';

const Manifest: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
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
      </div>
    </div>
    </div>
  );
};

export default Manifest;