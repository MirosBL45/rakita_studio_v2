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
          className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
}
