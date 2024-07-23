import React from 'react';
import Image from 'next/image';

interface BodySectionThreeProps {
  heading: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor: string;
}

const BodySectionThree: React.FC<BodySectionThreeProps> = ({
  heading,
  text,
  imageSrc,
  imageAlt,
  backgroundColor
}) => {
  return (
    <div className="w-full h-full px-8 py-6 800:py-14 top-0 relative" style={{ backgroundColor }}>
      <div className="max-w-[1100px] m-auto">
        <div className="w-full">
          <h2 className="uppercase py-2 my-2 font-termina font-bold text-78 leading-61 1000:text-100 1000:leading-82 1400:leading-80 1400:text-152">
            {heading}
          </h2>
          <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">
            {text}
          </p>
          <figure className="py-1 w-full inline">
            <div className="image w-full">
              <Image
                src={imageSrc}
                width={150}
                height={150}
                alt={imageAlt}
                className="w-full"
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default BodySectionThree;
