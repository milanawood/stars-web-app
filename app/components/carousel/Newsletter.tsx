import React from 'react';
import Image from 'next/image';

const Newsletter = () => {
  return (
    <div className="w-full h-full top-0">
      <div className="absolute inset-0 pointer-events-none shadow-carousel">
        <Image
          src="/images/wax-paper.png"
          alt="paper illustration"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-8 relative z-10 mt-20 800:mt-30 flex justify-center">
        <div className="w-full max-w-[400px] relative rounded-[10px] p-2 bg-[#b2f8e5]">
          <div className="absolute inset-0 border border-black rounded-[10px] left-[10px] bottom-[10px] border-solid"></div>
          <div className="relative">
            <h3 className="text-black my-2 py-2 text-left p-4 font-ribons text-66 leading-50 uppercase 800:text-80 800:leading-66">
              Sign up for news & updates
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
      <div className="absolute z-[14] overflow-visible items-center justify-center pointer-events-none select-none artifact--d615053f4c8c">
        <Image
          src="/images/stereo-sticker-7.png"
          alt="stereo"
          width={200}
          height={200}
          className="animate-tilt"
        />
      </div>
    </div>
  );
};

export default Newsletter;