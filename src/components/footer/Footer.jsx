import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      Footer
      <Link
        href={'https://miroslavjovic.com'}
        target="_blank"
        rel="noopener noreferrer"
      >
        klik
      </Link>
    </footer>
  );
}
