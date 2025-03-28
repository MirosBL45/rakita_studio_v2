// next-react things
import Link from 'next/link';

// data
import { linksContact } from '@/utils/data/navLinks';

export default function Socials() {
  return (
    <>
      {linksContact.map((link) => (
        <Link
          rel="noopener noreferrer"
          target={link.target}
          key={link.id}
          href={link.url}
          title={link.title}
          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-main-green ease-in duration-210"
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
}
