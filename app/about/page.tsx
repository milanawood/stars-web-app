import React from 'react';
import BackgroundImage from '../components/BackgroundImage';
import Blurb from './Blurb';
import HeroSection from './HeroSection';
import BodySectionOne from './BodySectionOne';
import BodySectionTwo from './BodySectionTwo';
import TextMarquee from './TextMarquee';
import BodySectionThree from './BodySectionThree';
import BodySectionFour from './BodySectionFour';
import BodySectionFive from './BodySectionFive';
import BodySectionSix from './BodySectionSix';

const Who: React.FC = () => {
  const stickerImages = [
    {
      src: "/images/stars-hat-6.png",
      alt: "Stars trucker hat",
      style: { top: '10%', left: '10%' },
      className: 'right-[-15%] w-[33%] top-[-10%] transform translate-y-[-10%] 1200:top-[-10%] 1200:transform 1200:translate-y-[-10%] 1200:right-[-5%] 1200:w-[50%]'
    },
    {
      src: "/images/stars-burger-character-5.png",
      alt: "Stars burger avatar",
      style: { top: '20%', left: '10%' },
      className: 'right-[10%] w-[-33%] top-[10%] transform translate-y-[10%] 1200:top-[55%] 1200:transform 1200:translate-y-[-10%] 1200:right-[73%] 1200:w-[33%]'
    },
    {
      src: "/images/cool-vibes-sticker-4.png",
      alt: "cool vibes STARS® smiley",
      style: { top: '95%', left: '10%' },
      className: 'left-[10%] w-[25%] bottom-[-5%] 1200:top-[0%] 1200:transform 1200:translate-y-[-20%] 1200:right-[-30%] 1200:w-[20%]'
    }
  ];

  const stickers = [
    {
      src: '/images/logo/pink.png',
      alt: 'Stars vintage stereo boombox',
      style: { top: '24%', left: '12%', width: '28%' },
      className: 'sticker-burger',
      animationClass: 'skew',
    },
    {
      src: '/images/logo-pink.png',
      alt: 'Stars logo',
      style: { top: '58%', left: '57%', width: '21%' },
      className: 'sticker-logo',
      animationClass: 'tilt',
    },
  ];
  const bodySectionFiveStickers = [
    {
      src: '/images/burger-eye-smiley-3.png',
      alt: 'Stars sticker',
      style: { top: '83%', transform: 'translateY(-83%)', right: '-3%', width: '42%' },
      className: '800:top-55 800:transform-translate-y-[-55%] 800:right-[-3%] 800:width-[26%]'
    },
    {
      src: '/images/star-red.png',
      alt: 'Stars logo',
      style: { top: '57%', transform: 'translateY(-57%)', right: '-5%', width: '44%' },
      className: '800:top-45 800:transform-translate-y-[-45%] 800:right-[-7%] 800:width-[44%] 1200:top-0 1200:transform-translate-y-[-0%] 1200:right-0 1200:width-[300px]'
    }
  ];

  const bodySectionSixStickers = [
    {
      src: '/images/stars-hat-6.png',
      alt: 'Sticker 1',
      style: { top: '50%', transform: 'translateY(-50%)', left: '10%', width: '28%' },
      className: '800:top-64 800:transform-translate-y-[-64%] 800:left-8 800:width-[25%]'
    },
    {
      src: '/images/stereo-sticker-7.png',
      alt: 'Sticker 2',
      style: { top: '70%', transform: 'translateY(-70%)', left: '30%', width: '28%' },
      className: '800:top-104 800:transform-translate-y-[-104%] 800:left-22 800:width-[20%]'
    },
  ];

  return (
    <>
    <div className="min-h-screen relative">
      <HeroSection
        backgroundImage="/images/background-transparent.png"
        mainImage="/images/who-hero.gif"
        heading="We are STARS®"
        stickerImages={stickerImages}
      />
      <div className="relative z-20">
        <BodySectionOne
          stickerSrc="/images/polaroid-10.png"
          stickerAlt="Stars® burger polaroid"
          heading="STARS® is a food tech start up"
          subheading="based in the UK, Australia and North America."
        />
        <BodySectionTwo
                heading="Meet the team."
                subheading="Abi Aspen Glencross."
                stickers={[
                  {
                    src: "/images/star-red.png",
                    alt: "Burger Smiley",
                    style: { top: '30%', transform: 'translateY(-30%)', left: '30px', width: '10%' },
                    className: 'smileyBurger'
                  },
                  {
                    src: "/images/logo-pink.png",
                    alt: "Sticker",
                    style: { top: '0%', transform: 'translateY(0%)', left: '-3%', width: '30%' },
                    className: 'bodytwosticker'
                  }
                ]}
                images={[
                  {
                    src: "/images/polaroid-10.png",
                    alt: "Sticker 1",
                    style: {},
                    className: 'bodytwostickertwo'
                  },
                  {
                    src: "/images/polaroid-2-10.png",
                    alt: "Sticker Four",
                    style: {},
                    className: 'bodytwostickerfour'
                  }
                ]}
              />
              <TextMarquee
        textItems={[
          'Coming to a shack near you',
          'Coming to a shack near you',
          'Coming to a shack near you',
          'Coming to a shack near you',
        ]}
        imageSrc="/images/star-red.png"
        animationDuration="10s"
        animationDirection="left"
      />
      <BodySectionThree
        heading="Adventurers Unite"
        text="Need to add text here."
        imageSrc="/images/cool-vibes-sticker-4.png"
        imageAlt="stars logo red"
        backgroundColor="#b2f8e5"
      />
      <BodySectionFour
        backgroundColor="#b2f8e5"
        bottomColor="#ffffe6"
        stickers={stickers}
        mainImage={{
          src: '/images/about-polaroids-large.png',
          alt: 'Main image'
        }}
        text="…our team will rule the world."
      />
      <BodySectionFive
        backgroundColor="#b2f8e5"
        borderColor="border-green"
        stickers={bodySectionFiveStickers}
        mainImage={{
          src: '/images/polaroid-2-10.png',
          alt: 'Main image'
        }}
        heading="SUSTAINABLE JOY FOR"
        subheading="EVERYONE"
      />
      <TextMarquee 
      textItems={[
        'Peace',
        'love',
        'burgers',
        'adventure',
      ]}
      imageSrc="/images/star-red.png"
      animationDuration="10s"
      animationDirection="left"
      />
      <BodySectionSix 
      backgroundColor="bg-blue-700"
      textColor="text-"
      stickers={bodySectionSixStickers}
      mainImage={{
        src: '/images/logo-offwhite.png',
        alt: 'Main Image'
      }}
      heading="STARS® is a vibe, an approach to life and having a great time for the surfers, skaters, boarders and bikers."
      subheading="The dreamers, the creators, movers and shakers!"
      description="We are about having an awesome time in the natural environment of the waves, beach, mountain and trails."
      />
      
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
    </>
  );
};

export default Who;
