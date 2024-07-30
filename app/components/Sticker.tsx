import React, { ReactNode, CSSProperties } from 'react';

interface StickerProps {
  animationClass?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Sticker: React.FC<StickerProps> = ({ animationClass, children, style, className }) => {
  return (
    <div className={`z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none m-0 ${animationClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Sticker;
