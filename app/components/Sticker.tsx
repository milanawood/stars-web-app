import React, { ReactNode, CSSProperties } from 'react';

interface StickerProps {
  animationClass?: string;
  children: ReactNode;
  style?: CSSProperties;
}

const Sticker: React.FC<StickerProps> = ({ animationClass, children, style }) => {
  return (
    <div className={`sticker ${animationClass}`} style={style}>
        
        {children}
    </div>
  );
};

export default Sticker;