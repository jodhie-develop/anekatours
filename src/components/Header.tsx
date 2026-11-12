import { useEffect, useRef, useState } from 'react';
import { company, navLinks } from '../data/site';
import { Link } from '../router';

export default function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => menuRef.current?.querySelector<HTMLElement>('a[href]')?.focus(), 300);
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !menuRef.current?.contains(target) && !burgerRef.current?.contains(target)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        burgerRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const menuItems = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)') ?? []);
      const focusable = [burgerRef.current, ...menuItems].filter((element): element is HTMLElement => Boolean(element));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && (active === first || !focusable.includes(active as HTMLElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (active === last || !focusable.includes(active as HTMLElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (document.activeElement !== burgerRef.current) burgerRef.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header ref={headerRef} className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
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
          ref={burgerRef}
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => {
            if (!open) burgerRef.current?.focus();
            setOpen((v) => !v);
          }}
        >
          <span />
          <span />
        </button>
      </div>

      <div ref={menuRef} id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={close} tabIndex={open ? 0 : -1} className={current === l.href ? 'is-current' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          {/* TODO: Restore Agent Login when its destination is available. */}
          {/* TODO: Restore EN/ZH/JA after translated routes are available. */}
          <Link to="/contact" className="btn btn--primary" onClick={close} tabIndex={open ? 0 : -1}>
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
