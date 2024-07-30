import React from 'react';
import Image from 'next/image';
import Sticker from '../Sticker';

const Burger: React.FC = () => {
  return (
    <div className="w-full h-full top-0 relative">
      <Sticker className="absolute top-[50%] right-0 transform -translate-y-1/2 w-[240px]">
        <Image
          src="/images/about-polaroids.png"
          alt="Burger Polaroids"
          width={600}
          height={600}
          className="object-cover"
        />
      </Sticker>
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-start p-8 800:p-[5vw]">
        <div className="w-full text-left">
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
      <Sticker className="absolute top-[27.5%] right-[5%] transform -translate-y-1/4 translate-x-1/2 w-[30%] 800:top-[24%] 800:w-[24%] 800:right-[9%]">
        <Image
          src="/images/star-red.png"
          alt="off white star outline"
          width={100}
          height={100}
          className="object-contain"
        />
      </Sticker>
      <Sticker className="absolute left-[33%] bottom-0 transform translate-x-1/2 translate-y-1/2 w-[40%]">
        <Image
          src="/images/star-red.png"
          alt="stars logo red star outline"
          width={200}
          height={200}
          className="object-contain"
        />
      </Sticker>
      <Sticker className="absolute left-[35%] bottom-[10%] w-[35%] 1200:top-[75%] 1200:left-[32%] 1200:w-[20%]">
        <Image
          src="/images/burger-eyes.png"
          alt="smiley face icon with burger eyes"
          width={150}
          height={150}
          className="object-contain"
        />
      </Sticker>
      <Sticker className="absolute left-[36%] bottom-[30%] w-[11%]">
        <Image
          src="/images/star-red.png"
          alt="stars logo red star"
          width={100}
          height={100}
          className="object-contain"
        />
      </Sticker>
      <div className="absolute inset-0 bg-yellow-100 mix-blend-multiply pointer-events-none select-none">
        <Image
          src="/images/background-transparent.png"
          alt="texture background"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Burger;
