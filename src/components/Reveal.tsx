import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
  delay?: number;
};

/** Fades + slides content up when it scrolls into view (replaces Framer's "appear" effect). */
export default function Reveal({ children, as: Tag = 'div', className = '', id, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    setObserving(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${observing ? 'is-observing' : ''} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
