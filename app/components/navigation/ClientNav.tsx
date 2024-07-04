"use client"
import React from 'react';
import { useNavContext } from '../../contexts/NavContext';
import { useNavStore } from '../../stores/navStore';
import Navbar from './navbar';
import Sidebar from './sidebar';
import BackgroundImage from '../BackgroundImage';

const ClientNav: React.FC = () => {
  const { logo, secondaryData, data } = useNavContext();
  const { isNavOpen, toggleNav } = useNavStore();

  const handleToggleNav = (e: { preventDefault: () => void; }) => {
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
        <Navbar logo={logo} />
        <div className="col-span-6 800:col-span-2 text-right absolute top-2 right-2 800:relative pr-1">
          <button
            onClick={handleToggleNav}
            className="h-8 w-8 rounded-full bg-transparent border-none inline-flex items-center justify-center 800:hidden"
          >
            <div>
              <span
                className={`w-4 h-[2px] my-[4px] bg-black block relative transform duration-300 ${isNavOpen ? 'rotate-45 top-[4px]' : ''}`}
              />
              <span
                className={`w-4 h-[2px] my-[4px] bg-black block relative transform duration-300 ${isNavOpen ? '-rotate-45 -top-[2px]' : ''}`}
              />
            </div>
          </button>
          {isNavOpen && (
            <Sidebar data={data} secondaryData={secondaryData} toggleNav={toggleNav} />
          )}
        </div>
      </header>
    </div>
  );
};

export default ClientNav;