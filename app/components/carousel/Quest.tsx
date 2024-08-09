import React from 'react';
import Sticker from '../Sticker';
import Image from 'next/image';

const Quest: React.FC = () => {
  return (
    <div className="w-[200vw] 800:w-auto 800:aspect-[calc(1805/1124)] relative 800:h-screen h-mobile-screen top-0">
      <Sticker className="top-[14%] -translate-y-[14%] right-[5%] w-[32%] pointer-events-none select-none ">
        <Image
          src="/images/polaroid-2-10.png"
          alt="stars burger polaroid"
          width={500}
          height={500}
          className="object-contain pb-[117%] animate-none"
        />
      </Sticker>
      <Sticker className="left-[45%] bottom-[5%] w-[20%]
      max-w-375:w-[30%] max-w-375:bottom-[-35%]">
        <Image
          src="/images/polaroid-10.png"
          alt="stars logo burger off white"
          width={500}
          height={500}
          className="object-contain pb-[123%]"
        />
      </Sticker>
      <Sticker className="top-[2%] -translate-y-[2%] left-[30%] w-[35%] 
      max-w-375:w-[15%] max-w-375:left-[50%]
      800:top-[2%] 800:-translate-y-[-2%] 800:left-[27%] 800:w-[30%] ">
        <Image
          src="/images/star-red.png"
          alt="stars logo red star outline"
          width={500}
          height={500}
          className="object-contain pb-[110%] animate-skew"
        />
      </Sticker>
      <Sticker className="left-[0.5%] bottom-[7%] w-[20%] 
      600:bottom-[5%] 600:w-[15%] 
      max-w-375:w-[20%] max-w-375:bottom-[8%] max-w-375:left-[75%]">
        <Image
          src="/images/ticker-burger-cream.png"
          alt="stars trucker cap"
          width={500}
          height={500}
          className="object-contain pb-[81%] animate-tilt"
        />
      </Sticker>
      <Sticker className="top-[3%] -translate-y-[3%] left-[9%] w-[14%] 400:top-[2%] 400:-translate-y-[2%] 400:left-[9%] 400:w-[10%] 800:top-[13%] 800:-translate-y-[13%] 800:left-[4%] 800:w-[12%] ">
        <Image
          src="/images/star-offwhite.png"
          alt="stars logo star off white"
          width={500}
          height={500}
          className="object-contain pb-[82%] animate-rotate"
        />
      </Sticker>
      <Sticker className="top-[25%] -translate-y-[25%] left-[48%] w-[20%]
      max-w-375:top-[30%] max-w-375:left-[50%] 
      600:top-[20%] 600:-translate-y-[20%] 600:left-[46%] 600:w-[20%] ">
        <Image
          src="/images/cool-vibes-sticker-4.png"
          alt="cool vibes smiley sticker"
          width={500}
          height={500}
          className="animate-shake object-contain pb-[102%]"
        />
      </Sticker>
      <div className="absolute pointer-events-none select-none w-full h-full top-0 left-0 bg-orange-300 ">
        <figure className='select-none pointer-events-none'>
          <div className='w-full h-full top-0 left-0 '>
            <Image
              src="/images/quest-2.png"
              alt="peace love burgers"
              width={1805}
              height={1124}
              className="object-contain absolute w-full h-full object-center"
            />
          </div>
        </figure>
      </div>
    </div >
  );
};

export default Quest;
