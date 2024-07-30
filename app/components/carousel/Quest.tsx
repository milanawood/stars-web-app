import React from 'react';
import Sticker from '../Sticker';
import Image from 'next/image';

const Quest: React.FC = () => {
    return (
        <div className="w-full h-full top-0">
            <Sticker className='animate-none top-[14%] translate-y-neg-17 right-[5%] w-[32%] m-0'>
                <Image src={'/images/polaroid-2-10.png'} alt="" className="w-full overflow-visible h-0 pb-[117.283%]" width={800} height={938}/>
            </Sticker>
            <Sticker className="left-[45%] bottom-[5%] w-[20%] m-0">
                <Image src={'/images/ticker-burger-cream.png'} alt="" className="height-0 pb-[123.602%]" width={150} height={150}/>
            </Sticker>
            <Sticker className="m-0 top-[2%] translate-y-1 left-[30%] w-[35%] 800:top-[1%] 800:w-[30%] 800:left-[27%]">
                <Image src={'/images/stereo-sticker-7.png'} alt="" className="w-full h-0 pb-[110.667%]" width={150} height={150}/>
            </Sticker>
            <Sticker className="animate-tilt left-[0.5%] bottom-[7%] w-[20%] 600:bottom-[5%] 600:w-[15%] pointer-events-none select-none m-0">
                <Image src={'/images/cap.png'} alt="" className="w-full overflow-visible h-0 pb-[81.25%;]" width={150} height={150}/>
            </Sticker>
            <Sticker className="animate-rotate overflow-visible top-[3%] translate-y-neg-5 left-[9%] w-[14%] 400:top-[2%] 400:left-[9%] 400:w-[10%] 800:top-[13%] 800:translate-y-neg-10 800:left-[4%] 800:w-[12%]">
                <Image src={'/images/star-offwhite.png'} alt="" className='m-0 h-0 pb-[82.716%]' width={500} height={500} />
            </Sticker>
            <Sticker className='animate-pulse overflow-visible top-[25%] translate-y-neg-27 left-[48%] w-[20%] 600:top-20% 600:translate-y-neg-20 600:left-[46%] 600:w-[20%]'>
                <Image src={'/images/cap.png'} alt='' className='w-full pb-[102%]' width={500} height={500} />
            </Sticker>
            <div className="absolute select-none pointer-events-none w-full h-full top-0 left-0 bg-lime-200">
                <figure className="select-none pointer-events-none">
                    <Image src={'/images/quest-2.png'} alt='' className='object-contain object-center false overflow-visible absolute w-full h-full top-0 left-0' width={1080} height={1920} />
                </figure>
            </div>
        </div>
    );
};

export default Quest;
