import React from 'react';
import { useNavContext } from '@/app/contexts/NavContext';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { logo } = useNavContext();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Logo className="inline-block 800:hidden relative top-[3px] max-w-[120px] 800:max-w-[220px] w-full" src={`/images/logo-${logo}.png`} />
      <Logo className="hidden 800:inline-block relative top-[3px] max-w-[120px] 800:max-w-[220px] w-full drop-shadow" src={`/images/logo-${logo}.png`} />
    </div>
  );
};

export default Navbar;
