import React from "react";
import { ResponsiveImageProps } from "../types";

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ imgProps, alt, className, sources, src, lqip }) => {
  return (
    <picture className={className}>
      {sources.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.url} />
      ))}
      <img {...imgProps} src={src.url} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
