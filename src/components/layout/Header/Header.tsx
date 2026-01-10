'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>💪</span>
          <span className={styles.logoText}>MULTIBRAWN</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            דף בית
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            גלריה
          </Link>
          <Link href="/about" className={styles.navLink}>
            אודות
          </Link>
          <Link href="/tips" className={styles.navLink}>
            טיפים
          </Link>
          <Link href="/partnerships" className={styles.navLink}>
            שיתופי פעולה
          </Link>
          <Link href="/contact" className={styles.navLink}>
            יצירת קשר
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="תפריט"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link 
              href="/" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              דף בית
            </Link>
            <Link 
              href="/gallery" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              גלריה
            </Link>
            <Link 
              href="/about" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              אודות
            </Link>
            <Link 
              href="/tips" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              טיפים
            </Link>
            <Link 
              href="/partnerships" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              🤝 שיתופי פעולה
            </Link>
            <Link 
              href="/contact" 
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              יצירת קשר
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
