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
    <div className="w-screen h-screen relative">
      <video
        className="w-screen h-screen object-center"
        loop
        muted
        autoPlay
        playsInline
        ref={videoRef}
      >
        <source src="/images/promo-video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;