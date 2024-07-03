import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

interface NavbarProps {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-offwhite 800:bg-transparent p-2 px-2.5 grid grid-cols-12 gap-6 items-center justify-between">
      <div className="col-span-12 text-center 800:col-span-2 inline-flex justify-center items-center">
        <Logo color="red" />
      </div>
      <div className="hidden 800:flex col-span-10 1000:col-span-8 justify-center">
        <nav className="border-offblack relative hidden 800:inline-flex items-center border rounded-full border-solid p-[2px] bg-offwhite">
          <Link href="/about" className="p-2">About Us</Link>
          <Link href="/team" className="p-2">Team</Link>
          <Link href="/contact" className="p-2">Contact</Link>
        </nav>
      </div>
      <div className="col-span-6 800:col-span-2 text-right absolute top-2 right-2 800:relative pr-1">
        <button onClick={toggleNav} className="h-8 w-8 rounded-full bg-transparent border-none inline-flex items-center justify-center 800:hidden">
          <Image
            src="/images/burger-menu-icon.png"
            alt="menu"
            width={50}
            height={50}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;