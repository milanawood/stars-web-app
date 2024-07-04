import React from "react";
import { HeroVideo } from "../types";

const HeroVideo: React.FC<HeroVideo> = ({ desktopVideo, mobileVideo }) => {
  return (
    <div className="hero-video">
      <video className="hidden sm:block" src={desktopVideo} autoPlay muted loop />
      <video className="block sm:hidden" src={mobileVideo} autoPlay muted loop />
    </div>
  );
};

export default HeroVideo;
