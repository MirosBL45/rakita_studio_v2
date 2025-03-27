// next things
import Image from 'next/image';
import Link from 'next/link';

// images
import Logo from '@/assets/favicon.ico';

// data
import { linksHomePage } from '@/utils/data/navLinks';

export default function Navbar() {
  return (
    <header className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href={'/'}>
          <Image
            src={Logo}
            width={'85'}
            height={'15'}
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
        </nav>
      </div>
    </header>
  );
}
