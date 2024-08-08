import React from 'react';
import Image from 'next/image';
import Sticker from '../Sticker';

const Newsletter: React.FC = () => {
  return (
    <div className="w-full h-mobile-screen 800:h-screen top-0">
      <div className="absolute pointer-events-none shadow-carousel w-full h-screen object-cover opacity-90 top-0 left-0">
        <Image
          src="/images/wax-paper.png"
          alt="STARS® wax paper illustration"
          width={1233}
          height={1791}
          className='absolute top-0 left-0 w-full h-full object-cover object-center'
        />
      </div>
      <div className="p-8 relative z-0 mt-20 800:mt-30 flex justify-center">
        <div className="w-full max-w-[400px] relative rounded-[10px] p-2 bg-[#b2f8e5]">
          <div className='absolute w-full h-full border border-black rounded-[10px] left-[10px] bottom-[10px] border-solid'></div>
          <div className="relative">
            <h3 className="text-black my-2 py-2 text-left p-4 font-termina font-extrabold text-7xl leading-50 uppercase 800:text-80 800:leading-66">
              Learn About Our R&D
            </h3>
          </div>
          <div className="flex mt-10 pt-10 800:mt-20 p-2">
            <form className="w-full">
              <div className="w-full relative">
               <input
                  placeholder="Email Address"
                  className="border w-full bg-offwhite box-border font-termina text-16 tracking-[-0.01em] uppercase placeholder-black p-2 px-4 border-black rounded-full 800:py-3 800:px-6"
                  name="email"
                  type="email"
                /> 
                <button className="hover:opacity-80 duration-300 absolute uppercase font-termina inline-flex justify-center items-center right-[4px] top-[3px] h-[calc(100%-6px)] 800:h-[calc(100%-8px)] 800:top-[4px] 800:right-[4px] bg-black text-offwhite border-0 rounded-full text-16 tracking-[-0.01em] px-6 800:px-6">
                  <span className="relative top-[1px]">Sign up</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Sticker className="top-[35%] transform -translate-y-[35%] right-[1%] w-[40%] 400:top-[40%] 400:-translate-y-[24%] 400:right-[1%] 400:w-[30%] 800:top-[350px] 800:transform 800:right-[5%] 800:w-[240px]">
        <Image
          src="/images/burger-icon-circle.png"
          alt="STARS® sticker"
          width={500}
          height={500}
          className="animate-tilt pb-[97%] w-full"
        />
      </Sticker>
      <Sticker className=" top-[52%] transform -translate-y-[52%] left-[40%] w-[140px] 400:top-[75%] 400:-translate-y-[36%] 400:left-[20%] 400:w-[200px] 800:top-[440px] 800:transform 800:left-[40%] 800:w-[140px]">
        <Image
          src="/images/stereo-sticker-7.png"
          alt="STARS® sticker"
          width={757}
          height={372}
          className="animate-skew pb-[49%] w-full"
        />
      </Sticker>
    </div>
  );
};

export default Newsletter;