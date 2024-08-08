import React, { ReactNode, CSSProperties } from 'react';

interface StickerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Sticker: React.FC<StickerProps> = ({ children, className }) => {
  return (
    <div className={`z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none m-0 ${className}`}>
      {children}
    </div>
  );
};

export default Sticker;
