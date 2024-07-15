import React from "react";
import Image from "next/image";
import BackgroundImage from "../components/BackgroundImage";
import Sticker from "../components/Sticker";

const About: React.FC = () => {
  return (
    <>
      <BackgroundImage
        src="/images/background-transparent.png"
        width="100%"
        height="100%"
        alt="Background"
        className="fixed mix-blend-multiply z-0 w-screen h-screen top-0 left-0 pointer-events-none select-none"
      />
      <div className="relative max-w-[1600px] m-auto">
        <div className="h-[600px] overflow-hidden relative w-full 800:h-screen 800:max-h-[900px]">
          <div className="relative flex items-center justify-center h-full z-10">
            <div className="flex items-center justify-center h-full w-full">
              <div className="w-full w-[90%] h-[80%] max-w-1200 relative">
                <Image
                  src="/images/burger-backdrop.png"
                  alt="Burger Backdrop"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="border border-black border-solid rounded-[10px]"
                />
                <div className="h-full w-full flex items-center justify-center z-20 absolute top-0 left-0">
                  <div className="text-center m-auto max-w-1100">
                    <h2 className="w-[60%] header-shadows m-auto font-termina font-bold uppercase leading-61 text-5xl 800:text-3xl 800:w-[80%] 800:leading-80 1000:text-5xl 1000:w-[70%]">
                      Coming to a shack near you!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sticker
        animationClass="animate-none"
        className="absolute top-[55%] left-[10%] sm:top-[70%] sm:left-[50%] sm:transform sm:translate-x-[-50%]"
      >
        <Image
          src="/images/polaroid-10.png"
          alt="Polaroid Sticker"
          layout="responsive"
          width={275}
          height={200} 
        />
      </Sticker>
      {/*<Sticker
        animationClass="animate-none"
        className="absolute top-[15%] left-[60%]"
      >
        <Image
          src="/images/paper-clip.png"
          alt="Star eye retro smiley face"
          layout="responsive"
          width={500}
          height={500} 
        />
  </Sticker>*/}
      <Sticker
        animationClass="animate-spin"
        className="absolute top-[70%] left-[80%]"
      >
        <Image
          src="/images/stickers-glasses.png"
          alt="Sticker Image"
          layout="responsive"
          width={100}
          height={100} 
        />
      </Sticker>
    </>
  );
};

export default About;
