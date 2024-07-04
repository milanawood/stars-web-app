'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavContextProps {
  logo: string;
  secondaryData: {
    links: Array<{ _key: string; title: string; slug: string }>;
    socialLinks: Array<{ _key: string; url: string; title: string }>;
  };
  data: {
    links: Array<{ _key: string; _type: string; title: string; slug?: string }>;
  };
  updateLogo: (newLogo: string) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logo, setLogo] = useState('yellow');

  const secondaryData = {
    links: [
      { _key: '1', title: 'About', slug: 'about' },
      { _key: '2', title: 'Services', slug: 'services' },
    ],
    socialLinks: [
      { _key: '1', url: 'https://instagram.com', title: 'Instagram' },
      { _key: '2', url: 'https://twitter.com', title: 'Twitter' },
    ],
  };

  const data = {
    links: [
      { _key: '1', _type: 'navPage', title: 'Home', slug: '' },
      { _key: '2', _type: 'navPage', title: 'Blog', slug: 'blog' },
      { _key: '3', _type: 'market', title: 'Shop' },
    ],
  };

  const updateLogo = (newLogo: string) => {
    setLogo(newLogo);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setLogo('blue');
      } else {
        setLogo('yellow');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavContext.Provider value={{ logo, secondaryData, data, updateLogo }}>
      {children}
    </NavContext.Provider>
  );
};

const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNavContext must be used within a NavProvider');
  }
  return context;
};

export { NavProvider, useNavContext };