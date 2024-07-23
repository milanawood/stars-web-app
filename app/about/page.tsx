import React from 'react';
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';
import Sticker from '../components/Sticker';
import Blurb from './Blurb';
import HeroSection from '../components/HeroSection';

const Who: React.FC = () => {
  const stickerImages = [
    {
      src: "/images/stars-hat-6.png",
      alt: "Stars trucker hat",
      style: { top: '68%', left: '10%' },
      className: 'right-[-15%] w-[33%] top-[-10%] transform translate-y-[-10%] 1200:top-[-10%] 1200:transform 1200:translate-y-[-10%] 1200:right-[-5%] 1200:w-[33%]'
    },
    {
      src: "/images/stars-burger-character-5.png",
      alt: "Stars burger avatar",
      style: { top: '10%', left: '10%' },
      className: 'right-[10%] w-[-33%] top-[10%] transform translate-y-[10%] 1200:top-[55%] 1200:transform 1200:translate-y-[-10%] 1200:right-[73%] 1200:w-[33%]'
    },
    { 
      src: "/images/cool-vibes-sticker-4.png",
      alt: "cool vibes STARS® smiley",
      style: { top: '30%', left: '20%' },
      className: 'left-[30%] w-[25%] bottom-[-5%] 1200:top-[0%] 1200:transform 1200:translate-y-[-30%] 1200:right-[-30%] 1200:w-[30%]'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundImage className="bg-amber-50 mix-blend-multiply z-0 object-cover h-js-height" width={''} height={''} src={''} alt={''} />
      <HeroSection 
        backgroundImage="/images/background-transparent.png"
        mainImage="/images/who-hero.gif"
        heading="We are STARS®"
        stickerImages={stickerImages}
      />
      <div className="relative bg-cyan-600">
        <Blurb 
          heading="The Team" 
          subheading="Loves the planet and burgers" 
          content={[
            "STARS® is a food tech start up, based in the UK, Australia and North America. STARS® was founded and is run by Adam Thorpe, a UK based entrepreneur.",
            "The UK companies are engaged in a joint research program with the University of Leeds to develop a delicious plant-based patty made using sustainably regionally grown whole foods, matching the taste, texture and aroma of beef along with matching price parity within a decade. This is being led by Dr Alan Hernandez Alvarez, a recognised global expert in plant-based protein.",
            "STARS® is also hiring under its intern program from the University of Leeds within the following talent clusters; branding, content creation, food and events.",
            "STARS® Australia is looking for its 1st STARS® location in Byron Bay to create a hub for the surf community. As STARS® looks to serve communities in Australia we acknowledge and are grateful to create an organisation within Bundjalung Nation of the Arakwal People or Mob. We respect them, their spiritual places, beliefs, cultural heritage and deep roots and connection to Country, dating back thousands of years. Whilst we learn more of the Arakwal people and County they belong, we seek to engage with their Elders and take their past forward with our future.",
            "STARS® is a vibe, an approach to life and having a great time for the surfers, skaters, boarders and bikers. The dreamers, the creators, movers and shakers! We are about having an awesome time in the natural environment of the waves, beach, mountain and trails."
          ]}
        />
      </div>
    </div>
  );
};

export default Who;
