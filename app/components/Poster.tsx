// app/components/Poster.tsx
import React from "react";
import { Poster } from "../types";

const Poster: React.FC<Poster> = ({ backgroundColor, image, doubleWide, footerText, stickers }) => {
  return (
    <div style={{ backgroundColor }} className={`poster ${doubleWide ? 'double-wide' : ''}`}>
      <img src={image.url} alt={image.alt} />
      {footerText && <p>{footerText}</p>}
      {stickers.items.map(sticker => (
        <img key={sticker._key} src={sticker.image.url} alt={sticker.image.alt} style={{ animation: sticker.animation }} />
      ))}
    </div>
  );
};

export default Poster;
