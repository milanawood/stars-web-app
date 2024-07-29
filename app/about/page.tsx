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
import Image from 'next/image';

const Who: React.FC = () => {
  const stickerImages = [
    {
      src: "/images/cap.png",
      alt: "Stars trucker hat",
      className: 'right-[-5%] w-[200px] top-[-5%] translate-y-neg-5 800:top-[-10%] 800:translate-y-neg-10 800:right-[-15%] 800:w-[33%] 1200:top-[-10%] 1200:translate-y-neg-10 1200:right-[-5%] 1200:w-[33%]',
      animationClass: 'animate-none'
    },
    {
      src: "/images/stereo-sticker-7.png",
      alt: "STARS® retro stereo boombox",
      className: 'left-[30%] w-[30%] top-[91.1%] translate-y-neg-91 bottom-[0] 600:left-[30%] 600:bottom-[-7%] 600:w-[25%] 800:top-[92%] 800:translate-y-neg-92 800:w-[21%] 1200:top-[90%] 1200:translate-y-neg-90 1200:left-[30%] 1200:w-[17%]',
      animationClass: 'animate-tilt'
    },
    {
      src: "/images/burger-eyes.png",
      alt: "cool vibes STARS® smiley",
      className: 'top-[17%] translate-y-neg-17 left-[0%] w-[25%] 800:top-[27%] 800:top-[27%] 800:translate-y-neg-27 800:left-[0%] 800:w-[17%] 1200:top-[30%] 1200:translate-y-neg-30 1200:left-[6%] w-[15%]',
      animationClass: 'animate-rotate'
    },
    {
      src: "/images/cool-vibes-sticker-4.png",
      alt: "STARS® cool vibes only blue smiley sticker",
      className: 'top-[75%] left-[71%] bottom-[15%] w-[30%] translate-y-neg-75 rotate-[-35deg] 600:top-[60%] 600:translate-y-neg-60 600:rotate-[-30deg] 600:left-[70%] 600:bottom-[20%] 600:w-[25%] 800:top-[82%] 800:translate-y-neg-82 800:rotate-[-35deg] 800:left-[78%] 800:bottom-[0%] 800:w-[20%]',
      animationClass: 'animate-skew'
    },
    {
      src: "/images/star-red.png",
      alt: "STARS® red star icon",
      className: 'left-[-20%] bottom-[15%] w-[58%] transform 600:left-[20%] 600:bottom-[15%] 600:w-[50%] 800:left-[-5%] 800:bottom-[15%] 800:w-[34%]',
      animationClass: 'animate-none'
    },
    {
      src: "/images/star-red.png",
      alt: "STARS® red star icon",
      className: 'right-[-5%] bottom-[-20%] w-[200px] transform 600:right-[-1%] 600:bottom-[-20%] 600:w-[25%] 600:transform 800:transform 800:right-[5%] 800:bottom-[-59%] 800:w-[40%]',
      animationClass: 'animate-none'
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
    <div className="fixed w-full h-full top-0 left-0 opacity-60 select-none pointer-events-none z-10" style={{ mixBlendMode: 'multiply' }}>
          <Image src="/images/background-transparent.png" alt="background pattern" fill objectFit="cover" />
    </div>
      <HeroSection
        backgroundImage="/images/background-transparent.png"
        mainImage="/images/who-hero.gif"
        heading="We are STARS®"
        stickerImages={stickerImages}
      />
      <div className="relative z-20">
        <BodySectionOne
          stickerSrc="/images/stars-burger-character-5.png"
          stickerAlt="Stars® burger polaroid"
          heading="STARS® is a food tech start up"
          subheading="based in the UK, Australia and North America."
        />
        <BodySectionTwo
          sections={[
            {
              heading: (<span><span className="text-stars uppercase text-lg">Adam Thorpe  </span> Founder & CEO</span>),
              subheading: "Our UK-based visionary dedicated to crafting delicious, sustainable burgers in the worlds coolest spots.",
            },
            {
              heading: (<span><span className="text-stars uppercase text-lg">Dr. Alan Hernandez Alvarez  </span> Head of Research</span>),
              subheading: "Leading our quest for a plant-based patty that beats beef in taste, texture, and price, in collaboration with the University of Leeds.",
            },
            {
              heading: (<span><span className="text-stars uppercase text-lg">Abi Aspen Glencross  </span> CTO</span>),
              subheading: "The tech genius steering innovation across the UK and North America, mastering protein purification and extrusion."
            },
            {
              heading: (<span className="text-stars uppercase text-lg">The extended team</span>),
              subheading: "World-class experts in agri-food and food tech, driving STARS® with unmatched expertise and cutting-edge knowledge.",
            },
          ]}
                stickers={[
                  {
                    src: "/images/abi-bio.png",
                    alt: "STARS® CTO Abi Aspen Glencross",
                    className: 'top-[30%] left-[30px] w-[40%] translate-y-neg-30 800:left-[5%] 800:top-[38%] 800:w-[35%] 1200:top-[38%] 1200:translate-y-neg-38 1200:left-[5%] 1200:w-[450px]',
                    animationClass: 'animate-none'
                  },
                  {
                    src: "/images/star-red.png",
                    alt: "STARS® red star icon",
                    className: 'top-[0%] translate-y-neg-0 w-[50%] left-[-3%] 800:top-[20%] 800:w-[340px] 800:translate-y-neg-20 800:left-[5%] 800:w-[340px] 1200:top-[19%] 1200:w-[300px] 1200:translate-y-neg-19 1200:left-[-5%]',
                    animationClass: 'animate-none'
                  }
                ]}
                images={[
                  {
                    src: "/images/alan-ruixian.png",
                    alt: "Dr Alan Hernandez-Alvarexz and Ruixian Han",
                    className: 'block absolute w-full h-full object-contain'
                  },
                  {
                    src: "/images/adam-bio.png",
                    alt: "Adam Thorpe STARS® founder and CEO",
                    className: 'block absolute w-full h-full object-fit'
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
      
          {/*<Blurb
            heading="The Team"
            subheading="Loves the planet and burgers"
            content={[
              "STARS® is a food tech start up, based in the UK, Australia and North America. STARS® was founded and is run by Adam Thorpe, a UK based entrepreneur.",
              "The UK companies are engaged in a joint research program with the University of Leeds to develop a delicious plant-based patty made using sustainably regionally grown whole foods, matching the taste, texture and aroma of beef along with matching price parity within a decade. This is being led by Dr Alan Hernandez Alvarez, a recognised global expert in plant-based protein.",
              "STARS® is also hiring under its intern program from the University of Leeds within the following talent clusters; branding, content creation, food and events.",
              "STARS® Australia is looking for its 1st STARS® location in Byron Bay to create a hub for the surf community. As STARS® looks to serve communities in Australia we acknowledge and are grateful to create an organisation within Bundjalung Nation of the Arakwal People or Mob. We respect them, their spiritual places, beliefs, cultural heritage and deep roots and connection to Country, dating back thousands of years. Whilst we learn more of the Arakwal people and County they belong, we seek to engage with their Elders and take their past forward with our future.",
              "STARS® is a vibe, an approach to life and having a great time for the surfers, skaters, boarders and bikers. The dreamers, the creators, movers and shakers! We are about having an awesome time in the natural environment of the waves, beach, mountain and trails."
            ]}
          /> */}
      </div>
    </div>
    </>
  );
};

export default Who;
