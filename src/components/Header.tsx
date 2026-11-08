import { useEffect, useState } from 'react';
import { company, languages, navLinks } from '../data/site';
import { Link } from '../router';

export default function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="logo" onClick={close}>
          {company.name}
        </Link>

        <nav className="header__nav" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className={current === l.href ? 'is-current' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <div className="lang" role="group" aria-label="Language">
            {languages.map((l, i) => (
              <span key={l}>
                <button
                  type="button"
                  className={lang === l ? 'is-active' : ''}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
                {i < languages.length - 1 && ' / '}
              </span>
            ))}
          </div>
          <a href="#" className="header__login">
            Agent Login
          </a>
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
          <a href="#" onClick={close}>
            Agent Login
          </a>
          <span className="lang-static">{languages.join(' / ')}</span>
          <Link to="/contact" className="btn btn--primary" onClick={close}>
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
