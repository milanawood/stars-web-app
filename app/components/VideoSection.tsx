"use client"
import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-[100vw] 800:w-auto 800:aspect-[calc(1920/1080)] relative">
      <video
        className="w-full h-full object-center"
        loop
        muted
        autoPlay
        playsInline
        ref={videoRef}
      >
        <source src="/images/promo-video-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
