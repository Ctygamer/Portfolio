import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projekte', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Kontakt', href: '#contact' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#hero" onClick={(e) => handleClick(e, '#hero')}>
          CY
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menü öffnen"
        >
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>
    </nav>
  );
}
