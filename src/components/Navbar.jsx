// next things
import Image from 'next/image';
import Link from 'next/link';

// images
import RakitaLogo from '@/assets/favicon.ico';

// data
import { linksHomePage } from '@/utils/data/navLinks';

// icons
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  return (
    <header className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={'/'}>
          <Image
            src={RakitaLogo}
            width={'85'}
            height="auto"
            alt="Studio Rakita logo"
          />
        </Link>
        <nav>
          <ul className="hidden md:flex">
            {linksHomePage.map((link) => (
              <li
                key={link.id}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          {/* Menu Icon */}
          <div className="md:hidden">
            <HiOutlineMenu size={25} />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={'fixed left-0 top-0 w-full h-screen bg-black/70'}>
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={RakitaLogo} width="87" height="35" alt="/" />
              </Link>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Hajde da zajedno napravimo nešto legendarno
              </p>
            </div>
          </div>
          <nav className="py-4 flex flex-col">
            <ul className="uppercase">
              {linksHomePage.map((link) => (
                <li key={link.id} className="py-4 text-sm">
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
