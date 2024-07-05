import React from 'react';
import { useNavContext } from '@/app/contexts/NavContext';
import { useNavStore } from '@/app/stores/navStore';
import NavLink from '../../NavLink';
import SocialLink from './SocialLink';

const Sidebar: React.FC = () => {
  const { data, secondaryData } = useNavContext();
  const { toggleNav } = useNavStore();

  return (
    <div className="800:hidden fixed h-[calc(100vh-50px)] top-10 left-0 w-full bg-offwhite px-12 pt-5 z-50">
      <img
        width="320"
        height="320"
        className="absolute -right-[100px] top-[150px]"
        style={{ mixBlendMode: 'multiply' }}
        src="./images/spinning-logo.png"
        alt="Smiley Face with star eyes footer"
      />
      {data?.links?.map((link) => (
        <NavLink key={link._key} path={`/pages/${link.slug}`} name={link.title} onClick={toggleNav} />
      ))}
      <NavLink path="/what" name="WHAT" onClick={toggleNav} />
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
  );
};

export default Sidebar;
