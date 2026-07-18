import { useEffect, useRef, useState } from 'react';
import { navItems } from '../data/siteContent';
import { BrandMark } from './BrandMark';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus({ preventScroll: true });
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !headerRef.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    const focusTimer = window.setTimeout(() => {
      if (document.activeElement === menuButtonRef.current) {
        firstMobileLinkRef.current?.focus({ preventScroll: true });
      }
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className={`site-header${isMenuOpen ? ' mobile-menu-open' : ''}`}>
      <BrandMark />
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={`${item.label}-${item.href}`} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <span className="language-switch" aria-label="Langues disponibles">
          FR <span>|</span> EN <span>|</span> AR
        </span>
        <a className="button button-gold button-small" href="#contact">
          Planifier un échange
        </a>
        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer la navigation' : 'Ouvrir la navigation'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-navigation"
        aria-label="Navigation mobile"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav-links">
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-${item.href}-mobile`}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a className="mobile-nav-cta" href="#contact" tabIndex={isMenuOpen ? 0 : -1} onClick={() => setIsMenuOpen(false)}>
          Planifier un échange
        </a>
        <span className="mobile-nav-languages" aria-label="Langues disponibles">
          FR <span>|</span> EN <span>|</span> AR
        </span>
      </nav>
    </header>
  );
}
