import React from 'react';
import Sticker from '../../Sticker';
import Image from 'next/image';

const ComingSoon: React.FC = () => {
  return (
    <div className="embla__slide js-height mt-[60px] h-mobile-screen  h-[calc(100vh-60px)] 800:h-screen 800:mt-0 w-screen min-w-[100vw] 800:min-w-[80vh] 800:max-w-[800px]">
      <div className="w-full h-full top-0">
        <div className="absolute z-[14] overflow-visible items-center justify-center pointer-events-none select-none burger-button">
          <Image src="/images/burger-eye-smiley-3.png" alt="STARS® burger icon" width={80} height={80} className="w-20 h-auto animate-rock" />
        </div>
        <div className="absolute z-[14] overflow-visible items-center justify-center pointer-events-none select-none m-0 peace-burger">
          <Image src="/images/stars-burger-character-5.png" alt="burger mascot peace sign" className="w-full h-auto animate-rock" width="100" height="175" />
        </div>
        <div className="overflow-visible absolute select-none pointer-events-none w-full h-full top-0 left-0" style={{ backgroundColor: 'rgb(30, 241, 221)' }}>
          <Image src="/images/background-transparent.png" alt="texture background texture" layout='fill' objectFit='cover'  className="absolute w-full h-full object-cover object-center" style={{ mixBlendMode: 'multiply' }} />
        </div>
        <div className="relative z-20 w-full h-full 800:h-screen top-0 left-0">
          <div className="flex items-center justify-center w-full h-full 800:h-screen">
            <div className="w-full p-8 800:p-[5vw] text-fontwhite">
              <div className="w-full text-left">
                <h2 className="uppercase py-2 my-2 font-termina font-bold leading-76 text-[7vh] 800:text-[14vh] 800:leading-[80%] 1000:text-[15vh]">
                  Burgers<br />Coming<br /> <span className="text-stars">Soon</span><br />
                </h2>
                <div className="flex justify-center w-full">
                  <p className="text-14 800:text-22 font-termina">
                    <button className="text-black bg-transparent border-none my-4 text-18 800:text-22 relative uppercase max-w-[260px] 800:max-w-[310px] block rounded-full no-underline">
                      <svg className="w-full max-w-[260px] 800:max-w-[310px] h-auto" width="367" height="65" viewBox="0 0 367 65" fill="none">
                        <path d="M356.667 2.74813L356.682 2.75299L356.697 2.75723C358.765 3.33542 360.352 4.07096 361.589 5.08962C362.819 6.10155 363.746 7.42825 364.438 9.25876C365.844 12.9759 366.25 18.666 366.25 27.728C366.25 33.7252 365.709 40.4092 363.744 45.9096C361.784 51.3984 358.455 55.5907 352.929 56.8793C352.788 56.912 352.65 56.9406 352.514 56.9649L352.493 56.9687L352.472 56.9736C344.579 58.8575 324.987 60.7593 288.284 62.6637C259.069 64.0899 238.885 64.5659 160.745 63.6144L160.743 63.6143C108.113 63.1385 73.1678 62.6628 50.1853 61.9494C38.6935 61.5927 30.2023 61.1768 23.9912 60.6728C17.7648 60.1675 13.8796 59.5769 11.5691 58.8876L11.5691 58.8876L11.5601 58.885C5.77237 57.2368 2.77234 55.313 1.50009 51.5173C0.845702 49.565 0.626506 47.0566 0.815122 43.7244C1.00349 40.3966 1.59474 36.3 2.52334 31.1944C3.59619 25.4322 4.13058 17.2979 4.13058 13.9299C4.13058 9.29674 5.16138 6.63678 6.60088 4.91069C8.15484 3.2496 10.3252 2.30237 12.6004 2.2929L122.995 1.83335L122.996 1.83334C206.991 1.35754 264.003 1.11967 300.746 1.2386C319.119 1.29807 332.418 1.44675 341.487 1.69925C346.022 1.82552 349.492 1.97756 352.007 2.15671C354.557 2.33839 356.039 2.54376 356.667 2.74813Z" fill="#71F47B" stroke="#1A1A1A" strokeWidth="1.5"></path>
                      </svg>
                      <span className="absolute z-10 text-center -top-[2px] left-0 flex justify-center items-center font-termina w-full h-full">
                        Join the Team!
                      </span>
                    </button>
                  </p>
                  <Sticker animationClass="animate-spin" style={{ top: '68%', left: '10%' }}>
                 <Image src="/images/stickers-star-eyes-7.png" alt="Star eye retro smiley face" width="175" height="175" />
                 </Sticker>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
