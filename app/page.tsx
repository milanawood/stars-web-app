import React from 'react';
import ClientNav from './components/navigation/ClientNav';
import Slide from './components/Slide';
import VideoSection from './components/VideoSection';
import Marquee from './components/Marquee';
import MarqueeItem from './components/MarqueeItem';
import Sticker from './components/Sticker';
import BackgroundImage from './components/BackgroundImage';


export default function Home() {
  return (
    <>
      <ClientNav />
      <div className="embla__viewport overflow-x-scroll">
        <div className="embla__container flex">
          <Slide>
            <VideoSection />
          </Slide>
          <Slide>
          <Marquee>
              <MarqueeItem 
              src="/images/20240513_130056795_iOS.png"
              alt="stars burger"/>
              <MarqueeItem 
              src="/images/20240513_130256882_iOS.png"
              alt="stars burger"/>
            </Marquee>
            </Slide>
          <Slide>
          <Sticker animationClass="animate-shake" style={{ top: '50%', left: '10%' }} >
              <img src="/images/spinning-logo-1.png" alt="Sticker Image" width="100" height="100"/>
              </Sticker>
              <Sticker animationClass="animate-spin" style={{ top: '80%', left: '15%' }} >
              <img src="/images/spinning-logo-3.png" alt="Sticker Image" width="100" height="100"/>
              </Sticker>
          </Slide>
          <Slide>
          <Sticker animationClass="animate-rock" style={{ top: '20%', left: '5%' }} >
              <img src="/images/burger-icon-circle.png" alt="Sticker Image" width="100" height="100"/>
              </Sticker>
          </Slide>
          {/* Add more slides as needed */}
        </div>
      </div>
    </>
  );
}