import React from 'react';
import Image from 'next/image';
import Sticker from '../components/Sticker';

interface BodySectionOneProps {
  stickerSrc: string;
  stickerAlt: string;
  heading: string;
  subheading: string;
}

const BodySectionOne: React.FC<BodySectionOneProps> = ({ stickerSrc, stickerAlt, heading, subheading }) => {
  return (
    <div className="relative">
      <div className="px-12 max-w-[1200px] py-4 800:py-14 m-auto relative">
        <Sticker
          className="translate-y-neg-43 left-[39%] w-[50%] bottom-[-19%]
          600:left-[50%] 600:bottom-[-60%] 600:w-[40%] 800:top-[43%] 800:translate-y-neg-43 800:left-[44%] 800:w-[50%] "
        >
            <Image
              src={stickerSrc}
              alt={stickerAlt}
              width={500}
              height={500}
              className="animate-none w-full pb-[75%]"
            />
        </Sticker>
        <div className="grid grid-cols-12 800:gap-8">
          <div className="col-span-12 800:col-span-6">
            <div className="w-full">
              <h2 className="text-50 leading-39 uppercase my-1 py-1 800:my-2 800:py-2 font-termina font-extrabold 800:text-60 800:leading-60 1000:text-100 1000:leading-78">
                {heading}
              </h2>
              <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">
                {subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySectionOne;
