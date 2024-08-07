import React from 'react';
import Image from 'next/image';
import Sticker from '../Sticker';

const Burger: React.FC = () => {
  return (
    <div className="w-full h-full top-0">
      <Sticker className="top-[50%] transform -translate-y-[50%] right-0  w-[240px] 800:top-[50%] 800:transform 800:-translate-y-1/2 800:w-[240px]">
        <Image
          src="/images/star-red.png"
          alt="STARS® logo red"
          width={316}
          height={364}
          className="overflow-visible object-cover pb-[115%] w-full"
        />
      </Sticker>
      <Sticker className="top-[27.5%] transform -translate-y-[27.5%] right-[5%] w-[30%] 800:top-[24%] 800:transform 800:-translate-y-[24%] 800:w-[24%] 800:right-[9%]">
        <Image
          src="/images/stars-burger-character-5.png"
          alt="STARS® logo red"
          width={971}
          height={596}
          className="overflow-visible object-cover pb-[61%] w-full"
        />
      </Sticker>
      <Sticker className="left-[33%] w-[40%] bottom-0">
        <Image
          src="/images/logo-red.png"
          alt="STARS® logo red"
          width={2295}
          height={1290}
          className="overflow-visible object-cover pb-[56%] w-full"
        />
      </Sticker>
      <Sticker className="left-[30%] bottom-[11%] w-[20%] 500:left-[35%] 500:w-[35%] 500:bottom-[10%] 1200:left-[32%] 1200:w-[20%] 1200:bottom-[10%]">
        <Image
          src="/images/burger-eyes.png"
          alt="burger eye smiley"
          width={769}
          height={769}
          className="overflow-visible object-cover pb-[84%] w-full animate-tilt "
        />
      </Sticker>
      <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0">
        <figure>
          <div className='absolute z-20 w-full h-full top-0 left-0'>
            <Image src='/images/background-transparent.png'
              alt='texture background'
              fill
              objectFit='cover'
              objectPosition='center'
              className='absolute w-full h-full object-cover object-center mix-blend-multiply'
            />
          </div>
        </figure>
      </div>
      <div className="absolute select-none h-full top-0 transform translate-y-0 w-60% bg-transparent">
        <figure className='select-none pointer-events-none'>
          <div className='absolute w-full h-full top-0 left-0'>
            <Image
              src='/images/about-polaroids-large.png'
              alt='STARS® polaroid collage'
              width={1686}
              height={2070}
              className='absolute w-full h-full object-cover object-center'
            />
          </div>
        </figure>
      </div>
      <div className="relative z-20 w-1/2 h-full 800:h-screen top-0 left-0">
        <div className="flex items-center justify-center w-full h-full 800:h-screen">
          <div className="flex items-center justify-center w-full h-full 800:h-screen">
            <div className='w-full p-8 800:p-[5vw] text-stars'>
              <div className='w-full text-left'>
                <h3 className="text-stars uppercase font-extrabold font-termina my-2 py-2 text-4xl leading-[80%] 800:text-[10vh]">
                  STARS® is developing the next generation <br />
                  <span className="text-stars font-light text-2xl">
                    of plant-based burger flavours for diverse proteins and novel fat
                    systems.
                  </span>
                </h3>
                <p className="text-14 800:text-22 font-termina mt-4">
                  <a
                    className="relative uppercase max-w-[260px] 800:max-w-[310px] block rounded-full no-underline"
                    href="/about"
                  >
                    <svg
                      className="w-full max-w-[260px] 800:max-w-[310px] h-auto"
                      width="367"
                      height="65"
                      viewBox="0 0 367 65"
                      fill="none"
                    >
                      <path
                        d="M356.667 2.74813L356.682 2.75299L356.697 2.75723C358.765 3.33542 360.352 4.07096 361.589 5.08962C362.819 6.10155 363.746 7.42825 364.438 9.25876C365.844 12.9759 366.25 18.666 366.25 27.728C366.25 33.7252 365.709 40.4092 363.744 45.9096C361.784 51.3984 358.455 55.5907 352.929 56.8793C352.788 56.912 352.65 56.9406 352.514 56.9649L352.493 56.9687L352.472 56.9736C344.579 58.8575 324.987 60.7593 288.284 62.6637C259.069 64.0899 238.885 64.5659 160.745 63.6144L160.743 63.6143C108.113 63.1385 73.1678 62.6628 50.1853 61.9494C38.6935 61.5927 30.2023 61.1768 23.9912 60.6728C17.7648 60.1675 13.8796 59.5769 11.5691 58.8876L11.5691 58.8876L11.5601 58.885C5.77237 57.2368 2.77234 55.313 1.50009 51.5173C0.845702 49.565 0.626506 47.0566 0.815122 43.7244C1.00349 40.3966 1.59474 36.3 2.52334 31.1944C3.59619 25.4322 4.13058 17.2979 4.13058 13.9299C4.13058 9.29674 5.16138 6.63678 6.60088 4.91069C8.15484 3.2496 10.3252 2.30237 12.6004 2.2929L122.995 1.83335L122.996 1.83334C206.991 1.35754 264.003 1.11967 300.746 1.2386C319.119 1.29807 332.418 1.44675 341.487 1.69925C346.022 1.82552 349.492 1.97756 352.007 2.15671C354.557 2.33839 356.039 2.54376 356.667 2.74813Z"
                        fill="#ffc1e6"
                        stroke="#1A1A1A"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span className="absolute z-10 text-center top-[2px] left-0 flex justify-center items-center font-termina w-full h-full">
                      Learn More
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
