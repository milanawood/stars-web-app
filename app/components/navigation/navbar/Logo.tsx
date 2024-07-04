"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = ({ color }: { color: string }) => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth); // Clean up the event listener
  }, []);

  return (
    <Link href="/">
      <Image
        src={`/images/logo-${color}.png`}
        alt="logo"
        width={width < 1024 ? 150 : 250}
        height={width < 1024 ? 45 : 74}
        className="relative"
      />
    </Link>
  );
};

export default Logo;