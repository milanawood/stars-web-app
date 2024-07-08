import React from 'react';

interface MarqueeItemProps {
  src: string;
  alt: string;
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ src, alt }) => {
  return (
    <div className="marquee-item mx-4">
      <figure className="relative left-2rem shadow-2xl w-[250px] h-[54vh] 600:w-[350px] 800:h-[70vh] 800:w-[400px] 1000:w-full 1000:min-w-[46vh] 1000:max-w-[46vh]">
        <img src={src} alt={alt} className="block w-full h-full object-cover rounded-[10px]" />
      </figure>
    </div>
  );
};

export default MarqueeItem;