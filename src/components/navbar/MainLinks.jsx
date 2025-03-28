// next-react things
import Link from 'next/link';

// data
import { linksHomePage } from '@/utils/data/navLinks';

export default function MainLinks({ ulClassName, liClassName }) {
  return (
    <ul className={ulClassName}>
      {linksHomePage.map((link) => (
        <li key={link.id} className={liClassName}>
          <Link href={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}
