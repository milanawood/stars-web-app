import React from "react";
import Image from "next/image";
import Sticker from "../components/Sticker";
import BackgroundImage from "../components/BackgroundImage";

const What = () => {
  return (
    <>
      <BackgroundImage className="absolute top-0 left-0 w-full h-full mix-blend-multiply" width={''} height={''} src={'/images/background-transparent.png'} alt={''}      />
      <div className="relative max-w-[1600px] m-auto">
        <div className="h-[600px] overflow-hidden relative w-full 800:h-screen 800:max-h-[900px]">
          <div className="relative flex items-center justify-center h-full z-10 p-8 800:p-12"  style={{ backgroundColor: 'rgb(30, 241, 221)' }}>
            <div className="flex items-center justify-center h-full w-full">
              <div className="w-full h-full relative rounded-[10px] overflow-hidden">
                <Image
                  src="/images/background-factory.png"
                  alt="Burger Backdrop"
                  fill
                  object-fit="cover"
                  objectPosition="center"
                  className="border border-black border-solid rounded-[10px]"
                  unoptimized
                />
                <Image
                  src="/images/burger-gif.gif"
                  alt="Burger Backdrop"
                  fill
                  object-fit="cover"
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
        className="absolute top-[55%] left-[10%] sm:top-[60%] sm:left-[40%] sm:transform sm:translate-x-[-50%]"
      >
        <Image
          src="/images/polaroid-2-10.png"
          alt="Polaroid Sticker"
          layout="responsive"
          width={275}
          height={200} 
        />
      </Sticker>
{  /*    <Sticker
        animationClass="animate-none"
        className="absolute top-[55%] left-[10%] sm:top-[75%] sm:left-[30%] sm:transform sm:translate-x-[-50%]"
      >
        <Image
          src="/images/spinning-logo-2.png"
          alt="Polaroid Sticker"
          layout="responsive"
          width={100}
          height={100} 
        />
      </Sticker>*/}
      <Sticker
        animationClass="animate-none"
        className="absolute top-[70%] left-[10%] -rotate-45"
      >
        <Image
          src="/images/logo-offwhite.png"
          alt="Star eye retro smiley face"
          layout="responsive"
          width={500}
          height={500} 
        />
  </Sticker>
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


export default What;