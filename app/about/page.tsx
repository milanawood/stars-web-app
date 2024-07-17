import React from "react";
import Image from "next/image";
import BackgroundImage from "../components/BackgroundImage";


const Who: React.FC = () => {
  return (
    <>
        <BackgroundImage />
    <div className="bg-red-300 mix-blend-multiply">
        <div className="h-[600px] relative w-full 1000:min-h-[600px] 1000:max-h-[700px] 1200:h-screen 1200:min-h-[800px] 1200:max-h-[900px]">
          <div className="relative flex justify-center h-full z-20 header-shadows">
            <div className="h-full w-full flex justify-center absolute top-0 left-0">
              <div className="text-center mt-20 800:mt-44 max-w-1200">
                <h2 className="w-[80%] header-shadows m-auto font-termina font-extrabold uppercase leading-61 text-4xl 800:text-4xl 800:w-[100%] 800:leading-80 1200:text-4xl 1200:leading-108">
                  Adventure Loving Burger People
                </h2>
              </div>
            </div>
          </div>
        <div className="absolute top-5 right-[-40%] w-[80%] 800:top-[-12%] 800:right-[-30%] 800:w-[56vw] 1200:top-[-22%] 1200:right-[-26vw] 1200:w-[740px] pointer-events-none select-none">
          <div className="relative w-full overflow-visible" style={{ height: '0', paddingBottom: '99.44521497919555%' }}>
            <Image
              src="/images/burger-eye-smiley-3.png"
              alt="sticker"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="absolute right-[-30%] bottom-[-10%] w-[60%] 800:right-[-17vw] 800:bottom-[-20%] 800:w-[400px] 1200:right-[-13vw] 1200:bottom-[-20%] 1200:w-[520px] pointer-events-none select-none">
          <div className="relative w-full overflow-visible" style={{ height: '0', paddingBottom: '106.48011782032401%' }}>
            <Image
              src="/images/stereo-sticker-7.png"
              alt="sticker"
              fill
              object-fit="cover"
            />
          </div>
        </div>
        <div className="absolute left-[20%] top-[-26%] w-[70%] 800:top-[-25%] 800:left-[25vw] 800:w-[50vw] 1200:top-[-190px] 1200:left-[30vw] 1200:w-[590px] pointer-events-none select-none">
          <div className="relative w-full overflow-visible" style={{ height: '0', paddingBottom: '98.70129870129871%' }}>
            <Image
              src="/images/stars-burger-character-5.png"
              alt="sticker"
              fill
              object-fit="cover"
            />
          </div>
        </div>
        <div className="absolute left-[-20%] top-[20%] w-[50%] 800:top-[7%] 800:left-[-10vw] 800:w-[340px] 1200:left-[-10vw] 1200:w-[420px] pointer-events-none select-none">
          <div className="relative w-full overflow-visible" style={{ height: '0', paddingBottom: '117.21311475409837%' }}>
            <Image
              src="/images/stars-hat-6.png"
              alt="sticker"
              fill
              object-fit="cover"
            />
          </div> 
        </div>
        <div className="absolute left-[-5vw] bottom-0 w-[36vw] 800:left-[-12vw] 800:bottom-[-18%] 800:w-[340px] 1200:left-[-12vw] 1200:bottom-[-20%] 1200:w-[440px] pointer-events-none select-none">
          <div className="relative w-full overflow-visible" style={{ height: '0', paddingBottom: '105.35987748851454%' }}>
            <Image
              src="/images/cool-vibes-sticker-4.png"
              alt="sticker"
              fill
              object-fit="cover"
            />
          </div>
        </div>
      </div>
    </div>
   { /*<div className="relative z-20">
      <div className="overflow-visible">
        <div className="mt-100px">
          <div className="w-full">
            <Image
              src="/images/about-polaroids-large.png"
              alt="polaroids"
              fill
              object-fit="cover"
              className="block w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full 800:hidden max-w-[1200px] m-auto 500:rounded-[20px] border overflow-hidden border-solid border-black relative">
          <div className="w-full">
            <Image
              src="/images/about-polaroids-mobile.png"
              alt="careers"
              layout="fill"
              objectFit="cover"
              className="block w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="h-full w-full absolute left-1/2 -translate-x-1/2 top-0 max-w-[1200px]">
          <div className="w-full h-full flex flex-col items-end justify-between px-10 800:pr-[50px] 1300:pr-[20px]">
            <div className="flex-grow h-full" data-section="0">
              <div className="p-4">
                <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                  <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                    Adventure lovers,
                    <br />
                    if you love burgers, planet earth and having a great time, then this is the burger for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-grow h-full">
              <div className="p-4">
                <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                  <div className="font-termina">
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                      Our team is working on making the worlds first whole food plant based burger.
                    </p>
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                      Abi Aspen Glencross, Adam Thorpe, the university of Leeds and Canada are partnering to bring food lovers, nature lovers and adventurers together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow h-full" data-section="2">
              <div className="p-4">
                <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                  <div className="font-termina">
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                      need more text
                    </p>
                    <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                      need more text
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow h-full" data-section="3">
              <div className="p-4">
                <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                  <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                    and more text
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-grow h-full flex-end flex" data-section="4">
              <div className="p-4 flex-end flex items-end">
                <div className="bg-offwhite p-2 border border-solid border-black max-w-[500px] w-full">
                  <p className="text-15 leading-16 800:text-19 800:leading-21 font-termina">
                    and more text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-center my-4">
        <a href="/">
          <button className="font-termina relative bg-transparent border-0">
            <svg className="text-pink block w-full 600:w-auto" width="367" height="65" viewBox="0 0 367 65" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3329 62.1112L10.3179 62.1064L10.3028 62.1021C8.23556 61.5239 6.64834 60.7884 5.41089 59.7697C4.18161 58.7578 3.25461 57.4311 2.56238 55.6006C1.15671 51.8835 0.750242 46.1933 0.750243 37.1314C0.750243 31.1342 1.29111 24.4501 3.25586 18.9498C5.21649 13.461 8.54504 9.26863 14.0716 7.98005C14.2119 7.94733 14.35 7.91878 14.4858 7.89448L14.5069 7.8907L14.5278 7.88572C22.4208 6.00189 42.0132 4.10004 78.7158 2.19571C107.931 0.769468 128.115 0.293493 206.255 1.24502L206.257 1.24504C258.887 1.72085 293.832 2.1966 316.815 2.91C328.307 3.26672 336.798 3.68259 343.009 4.18661C349.235 4.69187 353.121 5.28243 355.431 5.97174L355.431 5.9718L355.44 5.97436C361.228 7.62257 364.228 9.54642 365.5 13.342C366.155 15.2943 366.374 17.8027 366.185 21.135C365.997 24.4628 365.405 28.5595 364.477 33.6652C363.404 39.4274 362.87 47.5615 362.87 50.9295C362.87 55.5626 361.839 58.2226 360.399 59.9487C358.845 61.6098 356.675 62.557 354.4 62.5665L244.005 63.026L244.004 63.026C160.009 63.5018 102.998 63.7397 66.2542 63.6208C47.8817 63.5613 34.5825 63.4126 25.5133 63.1601C20.978 63.0338 17.508 62.8818 14.9936 62.7027C12.4436 62.521 10.9608 62.3156 10.3329 62.1112Z" fill="currentColor" stroke="#1A1A1A" strokeWidth="1.5"></path>
            </svg>
            <span className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-22">
              Join the Team
            </span>
          </button>
        </a>
      </div>
      </div> */}
    </>
  );
};

export default Who;
