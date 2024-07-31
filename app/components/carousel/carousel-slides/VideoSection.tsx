"use client";
import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRefLarge = useRef<HTMLVideoElement>(null);
  const videoRefSmall = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRefLarge.current) {
      videoRefLarge.current.play();
    }
    if (videoRefSmall.current) {
      videoRefSmall.current.play();
    }
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div className="w-full m-0 p-0 hidden 800:block">
        <video
          className="w-full h-full object-cover opacity-80"
          loop
          muted
          autoPlay
          playsInline
          ref={videoRefLarge}
        >
          <source src="/images/burger-video-large-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full m-0 p-0 block 800:hidden">
        <video
          className="w-full 800:js-height mt-[60px] h-mobile-screen object-cover opacity-80"
          loop
          muted
          autoPlay
          playsInline
          ref={videoRefSmall}
        >
          <source src="/images/promo-video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
