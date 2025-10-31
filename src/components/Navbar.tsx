'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">• Paradox</Link>
      </div>
      <div className="nav-buttons">
        <button className="btn-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>MENU •</button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <Link href="/skill">Skills</Link>
            <Link href="/project">Projects</Link>
            <Link href="/achievements">Achievements</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
