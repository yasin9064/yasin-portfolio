import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <Link href="/">Home</Link>
      <Link href="/skill">Skills</Link>
      <Link href="/project">Projects</Link>
      <Link href="/achievements">Achievements</Link>
    </nav>
  );
}
