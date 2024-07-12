"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  path: string;
  name: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ path, name, onClick }) => {
  const pathname = usePathname();

  return (
    <Link href={path} legacyBehavior>
      <a
        onClick={onClick}
        className={`uppercase border-0 text-left block no-underline pb-2 text-sky-700 font-termina text-78 leading-72 800:text-16 800:font-termina border-b border-dotted border-sky-700 last:border-b-0 800:rounded-[20px] 800:px-4 800:border-0 800:py-1 800:leading-26 800:hover:bg-sky-700 800:hover:text-offwhite ${
          pathname === path ? '800:bg-sky-700 800:text-offwhite' : ''
        }`}
      >
        <span className="relative 800:top-[1.5px]">{name}</span>
      </a>
    </Link>
  );
};

export default NavLink;