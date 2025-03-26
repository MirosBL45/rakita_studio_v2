import Image from 'next/image';
import React from 'react';

import Logo from '@/assets/favicon.ico';

export default function Navbar() {
  return (
    <header className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={Logo}
          width={'125'}
          height={'50'}
          alt="Studio Rakita logo"
        />
      </div>
    </header>
  );
}
