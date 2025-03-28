// next-react things
import Image from 'next/image';
import Link from 'next/link';

// images
import RakitaLogo from '@/assets/favicon.ico';

export default function LogoNavbar() {
  return (
    <Link href={'/'}>
      <Image
        src={RakitaLogo}
        width={'85'}
        height="auto"
        alt="Studio Rakita logo"
        title="Studio Rakita"
      />
    </Link>
  );
}
