import React, { ReactNode, CSSProperties } from 'react';

interface StickerProps {
  animationClass?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Sticker: React.FC<StickerProps> = ({ animationClass, children, style, className }) => {
  return (
    <div className={`sticker ${animationClass} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Sticker;
