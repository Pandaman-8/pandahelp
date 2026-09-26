import { useEffect, useRef, useState } from 'react';
import { copy } from '../content/ru';
import { Icon, Panda } from './UI';

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 1000px)');
    const closeOnResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    desktop.addEventListener('change', closeOnResize);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      desktop.removeEventListener('change', closeOnResize);
    };
  }, [open]);
  function navigate(event) {
    setOpen(false);
    const href = event.target.closest('a')?.getAttribute('href');
    if (href?.startsWith('#')) document.querySelector(href)?.focus({ preventScroll: true });
  }
  return (
    <header
      className="site-header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={copy.brand}>
          <Panda />
          <span>
            Panda<span className="brand-light">Help</span>
            <span className="brand-dot">.</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? copy.closeMenu : copy.menu}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label={copy.navigation}
          onClick={navigate}
        >
          {copy.nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a className="mobile-nav-contact" href="#contact">
            {copy.contact}
            <Icon name="arrow" />
          </a>
        </nav>
        <a href="#contact" className="button button-dark header-contact">
          {copy.contact}
          <Icon name="northeast" />
        </a>
      </div>
    </header>
  );
}
