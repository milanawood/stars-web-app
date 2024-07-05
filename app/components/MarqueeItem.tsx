import React from 'react';

interface MarqueeItemProps {
  src: string;
  alt: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, alt }) => {
  return (
    <div className="marquee-content shadow 2-xl">
        <figure className="marquee relative shadow-2xl w-[250px] h-[54vh] 600:w-[350px] 800:h-[70vh] 800:w-[400px] 1000:w-[full] 1000:min-w-[46vh] 1000:max-w-[46vh]">
             <img src={src} alt={alt} className="w-full h-full top-0 left-0 block object-cover absolute w-full rounded-[10px] h-full" />
        </figure>
    </div>
  );
};

export default MarqueeItem;
