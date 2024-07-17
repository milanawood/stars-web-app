import React from "react";
import Image from "next/image";
import BackgroundImage from "../components/BackgroundImage";
import Sticker from "../components/Sticker";

const Who: React.FC = () => {
  return (
    <>
      <BackgroundImage
        src="/images/background-transparent.png"
        width="100%"
        height="100%"
        alt="Background"
        className="fixed z-30 w-screen h-screen top-0 left-0 pointer-events-none select-none mix-blend-multiply object-cover "
      />
      <div className="min-h-screen">
        <div className="mt-[60px] 800:mt-0">
          <div className="overflow-hidden relative bg-stars opacity-75">
            <div className="max-w-[1600px] relative m-auto">
              <div className=" z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none">
              <Sticker 
                      animationClass="animate-spin">
              <Image
          src="/images/polaroid-2-10.png"
          alt="Polaroid Sticker"
          layout="responsive"
          width={275}
          height={200} 
        />
              </Sticker>
              </div>
              <div className="h-[600px]  overflow-hidden relative w-full 1000:min-h-[600px] 1000:max-h-[700px] 1200:h-screen 1200:min-h-[800px] 1200:max-h-[900px]">
                <div className="relative flex justify-center h-full z-20 header-shadows">
                  <div className="h-full w-full flex justify-center absolute top-0 left-0">
                    <div className="text-center mt-20 800:mt-44 max-w-1200">
                      <h2 className="w-[80%] header-shadows m-auto font-termina font-extrabold uppercase leading-61 text-4xl 800:text-4xl 800:w-[100%] 800:leading-80 1200:text-4xl 1200:leading-108 ">
                        Adventure Loving burger people
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full relative rounded-[10px] overflow-hidden">
                <Image
                  src="/images/background-factory.png"
                  alt="Burger Backdrop"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="border border-black border-solid rounded-[10px]"
                  unoptimized
                />
                <Image
                  src="/images/burger-gif.gif"
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
        <div className="relative z-20">
          <div className="w-full px-8 h-full top-0 relative mt-[-320px] 500:mt-[-320px] 1200:mt-[-450px] z-10">
            <div className="w-full hidden 800:block max-w-[1200px] m-auto 500:rounded-[20px] border overflow-hidden border-solid border-black relative">
              <div className="w-full h-full">
              <Image 
              src={'/images/about-polaroids.png'}
              alt="polaroid collage of STARS® burger, byron bay and canada"
              className="block w-full h-full object-cover"
              fill
              />
              </div>
            </div>
            <div className="w-full 800:hidden max-w-[1200px] m-auto 500:rounded-[20px] border overflow-hidden border-solid border-black relative">
            <div className="w-full h-full">
              <Image 
              src={'/images/about-polaroids.png'}
              alt="polaroid collage of STARS® burger, byron bay and canada"
              className="block w-full h-full object-cover"
              fill
              object-fit="cover"
              />
              </div>
            </div>
            <div className="h-full w-full absolute left-1/2 -translate-x-1/2 top-0 max-w-[1200px]">
              <div className="w-full h-full flex flex-col items-end justify-between px-10 800:pr-[50px] 1300:pr-[20px]">
                <div className="flex-grow h-full">
                  <div className="p-4">
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                    STARS ® is a food tech start up, based in the UK, Australia and North America. 
                    <br/>
                    STARS® was founded and is run by Adam Thorpe, a UK based entrepreneur. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<Sticker
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
      </Sticker> */}
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
{ /*     <Sticker
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
      </Sticker> */}
    </>
  );
};

export default Who;
