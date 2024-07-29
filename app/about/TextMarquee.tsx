import React from 'react';
import Image from 'next/image';

interface TextMarqueeProps {
  textItems: string[];
  imageSrc: string;
  animationDuration?: string;
  animationDirection?: 'left' | 'right';
}

const TextMarquee: React.FC<TextMarqueeProps> = ({
  textItems,
  imageSrc,
}) => {
  return (
    <div className="w-full h-auto ">
      <div className="w-full h-full">
        <div className="relative bg-emerald-400 bg-opacity-50">
          <div className="marquee-container flex items-center w-full">
            <div
              className="marqueeContent animate-marqueeL"
            >
              <div className="marquee-item flex">
                {textItems.map((text, index) => (
                  <React.Fragment key={index}>
                    <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-base 800:text-base leading-80 text-stars font-extrabold">
                      {text}
                    </h3>
                    <Image
                      className="mx-1 800:mx-2 relative -top-1 leading-80"
                      src={imageSrc}
                      width={30}
                      height={50}
                      alt="star image"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
