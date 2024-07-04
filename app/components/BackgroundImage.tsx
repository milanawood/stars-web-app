import React from 'react';

interface BackgroundImageProps {
    width: string;
    height: string;
    className?: string;
    style?: React.CSSProperties;
    src: string;
    alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ width, height, className, style, src, alt }) => {
    return (
        <img
            width={width}
            height={height}
            className={className}
            style={style}
            src={src}
            alt={alt}
        />
    );
};

export default BackgroundImage;