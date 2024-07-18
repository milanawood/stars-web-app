import React from "react";
import Image from "next/image";

const Who: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/images/background-transparent.png"
        layout="fill"
        objectFit="cover"
        alt="Background"
        className="absolute top-0 left-0 w-full h-full mix-blend-multiply"
      />
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="mt-[60px] 800:mt-0 overflow-hidden relative bg-stars bg-opacity-75">
          <div className="max-w-[1600px] relative m-auto z-20 overflow-visible items-center justify-center">
            <div className="absolute pointer-events-none select-none h-auto top-5 transform translate-y-[-5%] right-[-40%] w-80%">
              <Image
                src="/images/stars-hat-6.png"
                alt="stars cap Sticker"
                layout="responsive"
                width={721}
                height={717}
                className="who-top w-auto mix-blend-multiply"
              />
            </div>
            <div className="h-[600px] overflow-hidden relative w-full 1000:min-h-[600px] 1000:max-h-[700px] 1200:h-screen 1200:min-h-[800px] 1200:max-h-[900px]">
              <div className="relative flex justify-center h-full z-20 header-shadows">
                <div className="h-full w-full flex justify-center absolute top-0 left-0">
                  <div className="text-center mt-20 800:mt-44 max-w-1200">
                    <h2 className="w-[80%] header-shadows m-auto font-termina font-extrabold uppercase leading-61 text-4xl 800:text-4xl 800:w-[100%] 800:leading-80 1200:text-4xl 1200:leading-108">
                      Adventure Loving burger people
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 mt-[-320px] 500:mt-[-320px] 1200:mt-[-450px] px-8">
            <div className="max-w-[1200px] mx-auto border border-solid border-black rounded-[20px] overflow-hidden relative">
              <Image
                src="/images/about-polaroids-large.png"
                alt="Polaroid Collage"
                layout="fill"
                objectFit="cover"
                className="block w-full h-full"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-end justify-between px-10 800:pr-[50px] 1300:pr-[20px]">
              {[
                "STARS® is a food tech start up, based in the UK, Australia and North America.  STARS® was founded and is run by Adam Thorpe, a UK based entrepreneur. ",
                "The UK companies are engaged in a joint research program with the University of Leeds to develop a delicious plant-based patty made using sustainably regionally grown whole foods, matching the taste, texture and aroma of beef along with matching price parity within a decade. This is being led by Dr Alan Hernandez Alvarez, a recognised global expert in plant-based protein.",
                "STARS® is also hiring under its intern program from the University of Leeds within the following talent clusters; branding, content creation, food and events.",
                "STARS® Australia is looking for its 1st STARS® location in Byron Bay to create a hub for the surf community. As STARS® looks to serve communities in Australia we acknowledge and are grateful to create an organisation within Bundjalung Nation of the Arakwal People or Mob. We respect them, their spiritual places, beliefs, cultural heritage and deep roots and connection to Country, dating back thousands of years. Whilst we learn more of the Arakwal people and County they belong, we seek to engage with their Elders and take their past forward with our future.",
                "STARS® is a vibe, an approach to life and having a great time for the surfers, skaters, boarders and bikers. The dreamers, the creators, movers and shakers!  We are about having an awesome time in the natural environment of the waves, beach, mountain and trails. ",
              ].map((text, index) => (
                <div key={index} className="flex-grow h-full p-4">
                  <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-nobell">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
