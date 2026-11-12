import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react';

// Tiny dependency-free router based on the History API.
// Routes are clean URLs (/about, /destinations ...). vercel.json rewrites every path to index.html.

const listeners = new Set<() => void>();
let staticLocation = { path: '/', search: '', hash: '' };

/** Used by the build prerenderer; normal browser navigation remains History API based. */
export function setStaticLocation(path: string) {
  staticLocation = { path: path.split('?')[0] || '/', search: path.includes('?') ? `?${path.split('?').slice(1).join('?')}` : '', hash: '' };
}

export function navigate(to: string) {
  if (to === window.location.pathname + window.location.search + window.location.hash) return;
  window.history.pushState({}, '', to);
  listeners.forEach((l) => l());
}

export function useLocation() {
  const [loc, setLoc] = useState(() => typeof window === 'undefined' ? staticLocation : ({ path: window.location.pathname, search: window.location.search, hash: window.location.hash }));
  useEffect(() => {
    const update = () =>
      setLoc({ path: window.location.pathname, search: window.location.search, hash: window.location.hash });
    listeners.add(update);
    window.addEventListener('popstate', update);
    return () => {
      listeners.delete(update);
      window.removeEventListener('popstate', update);
    };
  }, []);
  return loc;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

/** Internal link: navigates without a full page reload. */
export function Link({ to, onClick, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...rest} />;
}
