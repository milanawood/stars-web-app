import React from 'react';
import Image from 'next/image';

interface BlurbProps {
  heading: string;
  subheading: string;
  content: string[];
}

const Blurb: React.FC<BlurbProps> = ({ heading, subheading, content }) => {
  return (
    <div className="relative bg-cyan-500">
      <Image 
        src="/images/logo-offwhite.png"
        fill
        className="w-full h-full absolute top-0 left-0 mix-blend-multiply"
        alt="Logo"
      />
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
          <div className="w-full h-[120px] 800:h-[160px]"></div>
          <div className="w-full sm 800:h-[120px]"></div>
        </div>
        <div className="col-span-12 800:col-span-6">
          <div className="w-full h-[120px] 800:h-[160px]"></div>
          <div className="w-full sm 800:h-[160px]"></div>
          <div className="w-full sm 800:h-[120px]"></div>
          <div className="w-full sm 800:h-[160px]"></div>
          {content.map((text, index) => (
            <p key={index} className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blurb;