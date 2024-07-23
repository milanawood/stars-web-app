import React from "react";
import Image from "next/image";
import BackgroundImage from "../components/BackgroundImage";
import Sticker from "../components/Sticker";
import Blurb from "./Blurb";
import HeroSection from "../components/HeroSection";

const Who: React.FC = () => {
  return (
    <>
      <div className="">
        <BackgroundImage className="bg-amber-50 mix-blend-multiply z-0 object-cover h-js-height" width={''} height={''} src={''} alt={''} />
        <div className="min-h-screen">
          <div className="min-h-screen overflow-hidden">
            <div className="mt-[60px] 800:mt-0"></div>
            <div className="relative z-20">
              <div className="relative">
                <div className="px-12 max-w-[1200px] py-4 800:py-14 m-auto relative">
                  <Sticker className="z-[14] overflow-visible  items-center justify-center absolute pointer-events-none select-none m-0" animationClass="animate-rock" style={{ top: '68%', left: '10%' }}>
                    <Image
                      src="/images/stereo-sticker-7.png"
                      alt="Stars vintage stero boombox"
                      width="175"
                      height="175"
                      className="w-full  overflow-visible" />
                  </Sticker>
                  <div className="grid grid-cols-12 800:gap-8">
                    <div className="col-span-12 800:col-span-6">
                      <div className="w-full">
                        <h2 className="text-50 leading-39 uppercase my-1 py-1 800:my-2 800:py-2 font-termina  font-extrabold 800:text-60 800:leading-60  1000:text-100 1000:leading-78 ">
                          Great vibes, great food, great planet.</h2>
                        <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">creating the worlds first patty based on whole food ingredients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative 800:py-6">
                <div className="px-5 max-w-[1200px] py-10 relative m-auto">
                  <Sticker className="z-[14] overflow-visible  items-center justify-center absolute pointer-events-none select-none m-0" animationClass="animate-rock" style={{ top: '50%', left: '50%' }}>
                    <Image
                      src="/images/stereo-sticker-7.png"
                      alt="Stars vintage stero boombox"
                      width="175"
                      height="175"
                      className="w-full  overflow-visible" />
                  </Sticker>
                </div>
                <Sticker className="z-[14] overflow-visible  items-center justify-center absolute pointer-events-none select-none m-0" animationClass="animate-rock" style={{ top: '20', left: '80%' }}>
                  <Image
                    src="/images/stereo-sticker-7.png"
                    alt="Stars vintage stero boombox"
                    width="175"
                    height="175"
                    className="w-full  overflow-visible" />
                </Sticker>
              </div>
              <div className="w-full h-[30px] h-auto"></div>
              <div className="w-full h-full">
                <div className="relative bg-emerald-400 bg-opacity-50">
                  <div className="marquee-container flex items-center w-full">
                    <div className="marquee-content animate-marqueeL" style={{ animationDuration: "10s", animationDirection: "left" }}>
                      <div className="marquee-item flex">
                        <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-stars font-extrabold">
                          Coming to a shack near you</h3>
                        <Image
                          className="mx-1 800:mx-2 relative -top-1 leading-80"
                          src={"/images/star-red.png"}
                          width={100}
                          height={100}
                          alt={"off white star"}
                        />
                        <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-transparent text-outline font-extrabold">
                          Coming to a shack near you
                        </h3>
                        <Image
                          className="mx-1 800:mx-2 relative -top-1 leading-80"
                          src={"/images/star-red.png"}
                          width={100}
                          height={100}
                          alt={"off white star"}
                        />
                        <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-stars font-extrabold">
                          Coming to a shack near you</h3>
                        <Image
                          className="mx-1 800:mx-2 relative -top-1 leading-80"
                          src={"/images/star-red.png"}
                          width={100}
                          height={100}
                          alt={"off white star"}
                        />
                        <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-transparent text-outline font-extrabold">
                          Coming to a shack near you
                        </h3>
                        <Image
                          className="mx-1 800:mx-2 relative -top-1 leading-80"
                          src={"/images/star-red.png"}
                          width={100}
                          height={100}
                          alt={"off white star"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-stars w-full h-full px-8 py-6 800:py-14 top-0 relative">
                <div className="max-w-[1100px] m-auto null">
                  <div className="w-full">
                    <h2 className="uppercase py-2 my-2 font-termina  font-bold text-78 leading-61 1000:text-100  1000:leading-82  1400:leading-80 1400:text-152">
                      adventurers unite</h2>
                    <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina">
                      need to add text here.</p>
                    <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina"></p>
                    <figure className="py-1 w-full inline">
                      <div className="image w-full">
                        <Image
                          src={"/images/cool-vibes-sticker-4.png"}
                          width={150}
                          height={150}
                          alt={"stars logo red"}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="bg-stars w-full relative">
                <div className="z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none">
                  <Sticker animationClass="animate-rock" style={{ top: '24%', left: '12%' }}>
                    <Image
                      src="/images/spinning-logo-3.png"
                      alt="Stars vintage stero boombox"
                      width="175"
                      height="175"
                      className="w-full  overflow-visible" />
                  </Sticker>
                </div>
                <div className="relative z-[2]">
                  <div className="">
                    {/*<div className="w-full">
                      <div className="relative pb-80">
                        <Image
                          src="/images/spinning-logo-3.png"
                          alt="Stars vintage stero boombox"
                          width={10}
                          height={10}
                          className="w-full  overflow-visible" />
                      </div>
  </div> */}
                    <div className="text-center w-full">
                      <p className="text-17 leading-23 800:text-26 800:leading-38 1000:leading-46 1000:text-34 max-w-[650px] p-4 m-auto font-nobell">…and more text.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full bottom-0 h-1/2 bg-yellow-100"></div>
              </div>
              <div className="relative">
                <div className="px-12 max-w-[1200px] py-4 800:py-14 m-auto relative">
                  <div className="z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none m-0">
                    <Sticker animationClass="animate-spin" style={{ top: '83%', right: '-3%' }}>
                      <Image
                        src="/images/stereo-sticker-7.png"
                        alt="Stars vintage stero boombox"
                        width="175"
                        height="175"
                        className="w-full overflow-visible" />
                    </Sticker>
                  </div>
                  <div className="z-[14] overflow-visible  items-center justify-center  absolute pointer-events-none select-none m-0">
                    <Sticker animationClass="animate-spin" style={{ top: '57%', right: '-5%' }}>
                      <Image
                        src="/images/stereo-sticker-7.png"
                        alt="Stars vintage stero boombox"
                        width="175"
                        height="175"
                        className="w-full overflow-visible" />
                    </Sticker>
                  </div>
                  <div className="grid grid-cols-12 800:gap-8">
                    <div className="col-span-12 800:col-span-6">
                      <div className="w-full">
                        <h2 className="text-50 leading-39 uppercase my-1 py-1 800:my-2 800:py-2 font-termina  800:text-60 800:leading-60  1000:text-100 1000:leading-78 ">SUSTAINABLE VIBES <span className="text-stars">Sustainable future</span>
                        </h2>
                        <p className="text-16 800:text-26 800:leading-34 1000:text-32 -tracking-02 1000:leading-44 font-termina font-extrabold">more about the team.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-12 800:col-span-6">
                      <div className="w-full">
                        <div className="w-full relative border-[4px] border-green border-solid">
                          <Image
                            src={'/images/polaroid-2-10.png'}
                            alt={'polaroid'}
                            fill
                            className="block p-5 absolute w-full h-full object-fit" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="relative bg-stars">
                  <div
                    className="marquee-container marqueeL flex items-center w-full">
                    <div
                      className="marquee-content flex" style={{ animationDuration: '8s', animationDirection: 'left' }}>
                      <h3 className="uppercase mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-stars">
                        clean, happy, fun</h3>
                      <h3 className="uppercase text-transparent text-outline mx-1 800:mx-2 font-termina relative -top-1 text-36 800:text-86 leading-80 text-stars">
                        adventure, happiness, peace</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-cyan-600">
                  <Blurb heading={"the team"} subheading={"loves the planet and burgers"} content={[]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;


