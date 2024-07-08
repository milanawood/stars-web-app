'use client';
import React from 'react';
import { useNavStore } from '@/app/stores/navStore';
import { useNavContext } from '@/app/contexts/NavContext';
import NavLink from './NavLink';
import SocialLink from './SocialLink';
import Image from 'next/image';

const NavBar: React.FC = () => {
  const { isNavOpen, toggleNav } = useNavStore();
  const { logo, data, secondaryData } = useNavContext();

  const handleToggleNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    toggleNav();
  };

  return (
    <div>
      {isNavOpen && (
        <div className="fixed w-full h-full top-0 left-0 opacity-60 select-none pointer-events-none z-40" style={{ mixBlendMode: 'multiply' }}>
          <Image src="/images/background-transparent.png" alt="background pattern" layout="fill" objectFit="cover" />
        </div>
      )}
      <header className="bg-offwhite 800:bg-transparent fixed grid grid-cols-12 gap-6 items-center justify-between w-full p-2 px-2.5 top-0 left-0 z-30">
        <div className="col-span-12 text-center 800:col-span-2 inline-flex justify-center items-center z-20">
          <a href="/" className="relative top-[3px] w-full max-w-[120px] 800:max-w-[220px] inline-block">
            <Image src={`/images/logo-${logo}.png`} alt="logo" width={300} height={80} />
          </a>
        </div>
        <div className="hidden col-span-10 1000:col-span-8 800:flex justify-center">
          <div className="border-offblack relative hidden 800:inline-flex items-center border rounded-full border-solid p-[2px] bg-offwhite">
            <NavLink path="/pages/about" name="WHO" onClick={handleToggleNav} />
            <NavLink path="/pages/careers" name="WHAT" onClick={handleToggleNav} />
            <NavLink path="/pages/press" name="WHY" onClick={handleToggleNav} />
            <NavLink path="/pages/faq" name="WHERE" onClick={handleToggleNav} />
            <NavLink path="/freepizza" name="COMMUNITY" onClick={handleToggleNav} />
          </div>
        </div>
        <div className="col-span-6 800:col-span-2 text-right absolute top-2 right-2 800:relative pr-1 z-20">
          <a href="#" onClick={handleToggleNav} className="block 800:hidden">
            <Image
              src="/images/burger-menu-icon.png"
              alt="Menu"
              width={32}
              height={32}
            />
          </a>
          {isNavOpen && (
            <div className="800:hidden fixed h-[calc(100vh-50px)] top-10 left-0 w-full bg-offwhite px-12 pt-5">
              <Image
                width="320"
                height="320"
                className="absolute -right-[100px] top-[150px]"
                style={{ mixBlendMode: 'multiply' }}
                src="/images/spinning-logo.png"
                alt="Smiley Face with star eyes footer"
              />
              <div className="uppercase border-0 text-left block no-underline pb-2 text-offblack font-termina text-78 leading-72 800:text-16 800:font-termina border-b border-dashed border-black last:border-b-0 800:rounded-[20px] 800:px-4 800:border-0 800:py-1 800:leading-26 800:hover:bg-black 800:hover:text-offwhite">
                {data?.links?.map((link) => (
                  <NavLink key={link._key} path={`/pages/${link.slug}`} name={link.title} onClick={toggleNav} />
                ))}
              </div>
              <div className="grid text-left my-4 grid-cols-2">
                {secondaryData?.links?.map((link) => (
                  <NavLink key={link._key} path={`/pages/${link.slug}`} name={link.title} onClick={toggleNav} />
                ))}
              </div>
              <div className="flex">
                {secondaryData?.socialLinks?.map((link) => (
                  <SocialLink key={link._key} link={link.url} text={link.title} total={secondaryData.socialLinks.length} />
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;