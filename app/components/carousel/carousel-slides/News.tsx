import React from 'react';
import Image from 'next/image';
import Sticker from '../../Sticker';

const News: React.FC = () => {
  return (
    <div className="w-full h-full top-0">
      <Sticker className="animate-skew 800:top-[55%] 800:transform 800:-translate-y-[55%] 800:left-[5px] 800:w-[200px] max-w-799:[top-23%] max-w-799:transform max-w-799:-translate-y-[23%] max-w-799:w-[200px] max-w-799:left-[1%] max-w-375:top-[26%] max-w-375:transform max-w-375:left-[4%] max-w-375:w-[120px]">
        <Image
          src="/images/logo-pink.png"
          alt="STARS® logo pink"
          width={1034}
          height={675}
          className="overflow-visible pb-[65%] w-full"
        />
      </Sticker>
      <Sticker className="animate-rotate 800:top-[52%] 800:transform 800:-translate-y-[52%] 800:right-[6px] 800:w-[200px] max-w-799:right-[23%] max-w-799:transform max-w-799:bottom-[11%] max-w-799:w-[180px]">
        <Image
          src="/images/cool-vibes-sticker-4.png"
          alt="cool vibes only smiley"
          width={323}
          height={323}
          className="overflow-visible pb-[100%] w-full"
        />
      </Sticker>
      <div className="absolute w-full h-full top-0 left-0 bg-yellow-50">
        <div className="absolute w-full h-full top-0 left-0 mix-blend-multiply">
          <Image
            src="/images/background-transparent.png"
            alt="Background Texture"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div className="absolute select-none pointer-events-none h-full 800:top-[-23%] 800:transform 800:-translate-y-[23%] 800:left-[3%] 800:w-[94%] 800:block max-w-799:top-[-38%%] max-w-799:transform max-w-799:-translate-y-[38%] max-w-799:left-[3%] max-w-799:w-[94%] max-w-799:block max-w-375:top-[-35%] max-w-375:transform max-w-375:left-[3%] max-w-375:w-[94%] max-w-375:block bg-transparent">
        <figure className="select-none pointer-events-none">
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              src="/images/meet-the-team.png"
              alt="STARS® team with Adam Thorpe and Alan Hernandez Alvarez and Ruixian Han"
              width={1022}
              height={441}
              className='absolute w-full h-full object-contain object-center'
            />
          </div>
        </figure>
      </div>
      <div className='relative z-20 w-full h-full 800:h-screen top-0 left-0'>
        <div className="flex items-center justify-center w-full h-full 800:h-screen">
          <div className="w-full p-8 800:p-8 text-white">
            <p className="text-14 800:text-22 font-termina">
              <a
                className="text-black text-18 800:text-22 relative uppercase max-w-[260px] 800:max-w-[310px] block rounded-full no-underline"
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
                    fill="#71F47B"
                    stroke="#1A1A1A"
                    strokeWidth="1.5"
                  ></path>
                </svg>
                <span className="absolute z-10 text-center top-[2px] left-0 flex justify-center items-center font-termina w-full h-full">
                  Meet the Team!
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute select-none pointer-events-none h-full 800:left-[1%] 800:right-[1%] 800:bottom-[-35%] 800:w-[98%] max-w-799:left-[1%] max-w-799:bottom-0 max-w-799:w-[110%]  max-w-375:left-[8%] max-w-375:bottom-0 max-w-375:w-[95%] bg-transparent">
        <figure className="select-none pointer-events-none">
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              src="/images/abi-bio.png"
              alt="Abi Aspen Glencross"
              width={1014}
              height={850}
              className='absolute w-full h-full object-contain object-center'
            />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default News;
