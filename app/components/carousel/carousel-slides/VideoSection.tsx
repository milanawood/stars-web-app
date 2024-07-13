"use client";
import React, { useRef, useEffect } from 'react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <video
        className="w-screen h-screen object-cover opacity-80"
        loop
        muted
        autoPlay
        playsInline
        ref={videoRef}
      >
        <source src="/images/promo-video-1.mp4" type="video/mp4" media="(min-width: 800px)" />
        <source src="/images/promo-video-2.mp4" type="video/mp4" media="(max-width: 799px)" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;