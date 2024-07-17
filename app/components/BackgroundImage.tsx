"use client";

import React from 'react';
import Image from 'next/image';

const BackgroundImage: React.FC = () => (
  <Image
    src="/images/background-transparent.png"
    alt="Background"
    fill
    className="fixed w-full h-[100vh] top-0 left-0 mix-blend-multiply"
  />
);

export default BackgroundImage;
