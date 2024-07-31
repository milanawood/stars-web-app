import React from "react";
import Image from "next/image";

const Inspiration: React.FC = () => {
    return (
        <div>
            <div className="absolute w-full h-full top-0 left-0 bg-yellow-200"></div>
            <div className="mt-[-2%] 800:mt-[-1%]"></div>
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center z-10">
                <Image
                    src="/images/stars-burger-character-5.png"
                    alt="Stars Burger Character"
                    width={600}
                    height={600}
                    className="w-full h-auto block p-10"
                    loading="lazy"
                />
            </div>
            <div className="absolute z-20 p-4 top-0 left-0 w-full h-full">
                <div className="flex h-full flex-col justify-between">
                    <div className="flex transition-transform duration-300 hover:scale-105 1000:p-4 w-full justify-end 800:mt-8">
                        <div className="relative group border-2 h-[105%] 800:h-auto w-full max-w-[240px] 800:max-w-[300px] border-solid border-black p-3 1000:p-5 text-center">
                            <div className="relative z-10">
                                <span className="uppercase font-termina text-24 800:text-[4vh] 1000:text-[5.75vh] leading-[0.75rem]" style={{ color: 'rgb(30, 103, 241)' }}>
                                    Peace
                                </span>
                                <span className="font-termina 800:text-[2.5vh] text-black w-full h-full flex items-center justify-center">
                                    Love
                                </span>
                            </div>
                            <figure className="p-2 relative z-10 m-auto my-0 max-h-[20vh] max-w-[140px] 800:max-w-[180px]">
                                <Image
                                    src="/images/burger-eyes.png"
                                    alt="Drop"
                                    className="max-h-[20vh] object-contain"
                                    width={140}
                                    height={140}
                                />
                            </figure>
                            <a className="font-termina bg-green-500 text-black relative z-10 border-1 border-solid border-black rounded-full no-underline text-16 uppercase w-full p-2" href="/about">
                                Burgers
                            </a>
                            <div className="absolute inset-0 bg-yellow-200"></div>
                        </div>
                    </div>
                    <div className="flex transition-transform duration-300 hover:scale-105 1000:p-4 w-full">
                        <div className="relative group border-2 h-[105%] 800:h-auto w-full max-w-[240px] 800:max-w-[300px] border-solid border-black p-3 1000:p-5 text-center">
                            <div className="relative z-10">
                                <span className="uppercase font-termina text-24 800:text-[4vh] 1000:text-[5.75vh] leading-[0.75rem]" style={{ color: 'rgb(252, 82, 38)' }}>
                                    Coming to a shack near you
                                </span>
                                <span className="font-termina 800:text-[2.5vh] text-black w-full h-full flex items-center justify-center">
                                    2025
                                </span>
                            </div>
                            <figure className="p-2 relative z-10 m-auto my-0 max-h-[20vh] max-w-[140px] 800:max-w-[180px]">
                                <Image
                                    src="/images/polaroid-10.png"
                                    alt="burger polaroid"
                                    className="max-h-[20vh] object-contain"
                                    width={140}
                                    height={140}
                                />
                            </figure>
                            <a className="font-termina bg-green-500 text-black relative z-10 border-1 border-solid border-black rounded-full no-underline text-16 uppercase w-full p-2" href="/">
                                Sign Up
                            </a>
                            <div className="absolute inset-0 bg-yellow-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inspiration;
