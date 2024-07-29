import React from 'react';
import Image from 'next/image';

interface MarqueeItemProps {
  src: string;
  alt: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, alt }) => {
  return (
    <div className="marqueeItem">
      <div className="flex items-center h-full w-full">
        <figure className="flex mx-5 relative shadow-2xl w-[250px] h-[54vh] 600:w-[350px] 800:h-[70vh] 800:w-[400px] 1000:w-[full] 1000:min-w-[46vh] 1000:max-w-[46vh]">
          <div className="w-full h-full absolute top-0 left-0 ">
            <Image src={src} alt={alt} fill className="block object-cover absolute w-full rounded-[10px] h-full " />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default MarqueeItem;
