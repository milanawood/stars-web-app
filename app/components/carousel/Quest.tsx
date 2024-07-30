import React from 'react';
import Sticker from '../Sticker';
import Image from 'next/image';

const Quest: React.FC = () => {
  return (
    <div className="w-full h-full top-0 relative">
      <Sticker className="absolute z-[14] top-[14%] translate-y-[-14%] right-[5%] w-[32%] pointer-events-none select-none">
        <Image src="/images/polaroid-2-10.png" alt="stars burger polaroid" width={800} height={938} className="w-full h-auto" />
      </Sticker>
      <Sticker className="absolute z-[14] left-[45%] bottom-[5%] w-[20%] pointer-events-none select-none">
        <Image src="/images/cap.png" alt="stars logo burger off white" width={150} height={150} className="w-full h-auto" />
      </Sticker>
      <Sticker className="absolute z-[14] top-[2%] translate-y-[-2%] left-[30%] w-[35%] 800:top-[2%] 800:translate-y-[-2%] 800:left-[27%] 800:w-[30%] pointer-events-none select-none">
        <Image src="/images/star-red.png" alt="stars logo red star outline" width={150} height={150} className="w-full h-auto" />
      </Sticker>
      <Sticker className="absolute z-[14] left-[0.5%] bottom-[7%] w-[20%] 600:bottom-[5%] 600:w-[15%] pointer-events-none select-none">
        <Image src="/images/ticker-burger-cream.png" alt="stars trucker cap" width={150} height={150} className="w-full h-auto" />
      </Sticker>
      <Sticker className="absolute z-[14] top-[3%] translate-y-[-3%] left-[9%] w-[14%] 400:top-[2%] 400:translate-y-[-2%] 400:left-[9%] 400:w-[10%] 800:top-[13%] 800:translate-y-[-13%] 800:left-[4%] 800:w-[12%] pointer-events-none select-none">
        <Image src="/images/star-offwhite.png" alt="stars logo star off white" width={500} height={500} className="w-full h-auto" />
      </Sticker>
      <Sticker className="absolute z-[14] top-[25%] translate-y-[-25%] left-[48%] w-[20%] 600:top-[20%] 600:translate-y-[-20%] 600:left-[46%] 600:w-[20%] pointer-events-none select-none">
        <Image src="/images/cool-vibes-sticker-4.png" alt="cool vibes smiley sticker" width={500} height={500} className="w-full h-auto" />
      </Sticker>
      <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0 bg-orange-300">
        <figure className="select-none pointer-events-none w-full h-full top-0 left-0">
          <Image src="/images/quest-2.png" alt="peace love burgers" fill objectFit="contain" objectPosition="center" className="absolute w-full h-full" />
        </figure>
      </div>
    </div>
  );
};

export default Quest;
