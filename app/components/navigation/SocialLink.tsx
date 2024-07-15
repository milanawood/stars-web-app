import React from 'react';
import Image from 'next/image';

interface SocialLinkProps {
  link: string;
  text: string;
  total: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, text }) => {
  const getIconSrc = (url: string) => {
    if (/instagram/.test(url)) {
      return '/images/instagram-icon-black.png';
    }
    return '';
  };

  return (
    <div className="text-center w-16 h-16">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-white mx-2 800:mx-6 block w-auto h-8 800:h-34"
      >
        <Image
          alt={`${text} icon`}
          width="100"
          height="100"
          className="w-auto h-full"
          src={getIconSrc(link)}
        />
      </a>
    </div>
  );
};

export default SocialLink;