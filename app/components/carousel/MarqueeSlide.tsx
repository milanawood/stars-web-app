import React from 'react';

const MarqueeSlide: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[60px] h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[76px]">
      <div className="h-screen transform rotate-180 select-none text-marquee pointer-events-none relative" style={{ backgroundColor: 'rgb(113, 244, 123)' }}>
        <div className="transform rotate-90 origin-top-left block w-[100vh] h-[50px] translate-x-[92px] 800:translate-x-[100px]">
          <div data-marqy="" data-direction="left" className="flex h-screen w-full">
            <div data-marqy-inner="">
              <div data-marqy-content="" style={{ animationDuration: '14.3075s' }}>
                <div data-marqy-item="">
                  <div className="flex">
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70">Respect</h3>
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70" style={{ color: 'rgb(113, 244, 123)' }}>respect</h3>
                  </div>
                </div>
                <div aria-hidden="true" data-marqy-item="">
                  <div className="flex">
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70">burgers</h3>
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70" style={{ color: 'rgb(113, 244, 123)' }}>burgers</h3>
                  </div>
                </div>
              </div>
              <div data-marqy-content="" style={{ animationDuration: '14.3075s' }}>
                <div aria-hidden="true" data-marqy-item="">
                  <div className="flex">
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70">ADVENTURE</h3>
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70" style={{ color: 'rgb(113, 244, 123)' }}>adventure</h3>
                  </div>
                </div>
                <div aria-hidden="true" data-marqy-item="">
                  <div className="flex">
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70">COMMUNITY</h3>
                    <h3 className="uppercase my-1 mx-2 py-1 font-termina relative leading-none text-black text-outline text-70" style={{ color: 'rgb(113, 244, 123)' }}>community</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default MarqueeSlide;
