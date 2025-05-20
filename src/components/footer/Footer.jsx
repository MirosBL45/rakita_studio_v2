import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="max-w-[1240px] w-[97%] mx-auto p-2 text-center text-[12px] md:text-[15px]">
      © {new Date().getFullYear()} Izradio{' '}
      <Link
        href={'https://miroslavjovic.com'}
        target="_blank"
        rel="noopener noreferrer"
        className="text-main-green transition-all duration-300 hover:text-blue-400"
      >
        Miroslav Jović.{' '}
      </Link>
      Sva prava zadržana.
    </footer>
  );
}
