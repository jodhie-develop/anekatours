import { useEffect, useState } from 'react';
import { company, navLinks } from '../data/site';
import { Link } from '../router';

export default function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={close} aria-label={`${company.brandName} — home`}>
          <img
            src="/images/logo-aneka-kartika.png"
            alt={`${company.brandName} tours & travel service`}
            width={898}
            height={150}
            decoding="async"
          />
        </Link>

        <nav className="header__nav" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className={current === l.href ? 'is-current' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          {/* TODO: Restore language selector when translated /zh/ and /ja/ routes are ready. */}
          {/* TODO: Add Agent Login only after its destination is available. */}
          <Link to="/contact" className="btn btn--primary">
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={close} className={current === l.href ? 'is-current' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          {/* TODO: Restore Agent Login when its destination is available. */}
          {/* TODO: Restore EN/ZH/JA after translated routes are available. */}
          <Link to="/contact" className="btn btn--primary" onClick={close}>
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
