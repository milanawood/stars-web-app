"use client";
import React from 'react';
import { useNavStore } from '@/app/stores/navStore';
import Navbar from './navbar';
import Sidebar from './sidebar';
import BackgroundImage from '../BackgroundImage';
import NavLink from '../NavLink';

const ClientNav: React.FC = () => {
  const { isNavOpen, toggleNav } = useNavStore();

  const handleToggleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    toggleNav();
  };

  return (
    <div>
      {isNavOpen && (
        <BackgroundImage
          width="300"
          height="900"
          className="opacity-60 select-none pointer-events-none z-40 fixed w-full object-cover h-full top-0 left-0"
          style={{ mixBlendMode: 'multiply' }}
          src="/assets/mobile-pattern-background.png"
          alt="background pattern"
        />
      )}
      <header className="bg-offwhite 800:bg-transparent fixed grid grid-cols-12 gap-6 items-center justify-between w-full p-2 px-2.5 top-0 left-0 z-30">
        <div className="col-span-12 text-center 800:col-span-2 inline-flex justify-center items-center">
          <Navbar />
        </div>
        <div className="hidden col-span-10 1000:col-span-8 800:flex justify-center">
          <div className="border-offblack relative hidden 800:inline-flex items-center border rounded-full border-solid p-[2px] bg-offwhite">
            <NavLink path="/pages/about" name="About" onClick={handleToggleNav} />
            <NavLink path="/pages/careers" name="Careers" onClick={handleToggleNav} />
            <NavLink path="/pages/press" name="News" onClick={handleToggleNav} />
            <NavLink path="/pages/faq" name="FAQ" onClick={handleToggleNav} />
            <NavLink path="/freepizza" name="Free Pizza" onClick={handleToggleNav} />
          </div>
        </div>
        <div className="col-span-6 800:col-span-2 text-right absolute top-2 right-2 800:relative pr-1">
          <button
            onClick={(e) => { e.preventDefault(); toggleNav(); }}
            className="h-8 w-8 rounded-full bg-transparent border-none inline-flex items-center justify-center 800:hidden"
          >
            <div>
              <span className={`w-4 h-[2px] my-[4px] bg-black block relative transform duration-300 ${isNavOpen ? 'rotate-45 top-[4px]' : ''}`} />
              <span className={`w-4 h-[2px] my-[4px] bg-black block relative transform duration-300 ${isNavOpen ? '-rotate-45 -top-[2px]' : ''}`} />
            </div>
          </button>
          {isNavOpen && (
            <Sidebar />
          )}
        </div>
      </header>
    </div>
  );
};

export default ClientNav;
