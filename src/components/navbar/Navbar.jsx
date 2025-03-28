'use client';

// next-react things
import { useState } from 'react';

// components
import { LogoNavbar, MainLinks, BottomMenu, TopMenu } from './w-allNavbar';

// icons
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [navMenu, setNavMenu] = useState(false);

  function handleNav() {
    setNavMenu(!navMenu);
  }

  return (
    <header className="fixed w-full h-20 shadow-xl z-[100] px-3">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <LogoNavbar />
        <nav>
          <MainLinks
            ulClassName="hidden md:flex"
            liClassName="ml-10 text-sm uppercase ease-in duration-130 hover:text-main-green"
          />
          {/* Menu Icon */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <HiOutlineMenu size={25} />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={() => setNavMenu(false)}
        className={
          navMenu
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            navMenu
              ? ' fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-230'
              : 'fixed right-[-100%] top-0 p-5 ease-in duration-230'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <LogoNavbar />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <TopMenu />
          </div>
          <nav className="py-4 flex flex-col">
            <MainLinks ulClassName="uppercase" liClassName="py-2 text-sm" />
            <BottomMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
