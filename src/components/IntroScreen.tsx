import { useEffect, useRef, useState } from 'react';
import { destinations } from '../data/site';

const photoColumns = [
  destinations.slice(0, 4),
  destinations.slice(2),
  [destinations[1], destinations[3], destinations[5], destinations[0]],
  [destinations[4], destinations[2], destinations[0], destinations[1]],
];

export default function IntroScreen() {
  const [phase, setPhase] = useState<'intro' | 'exit' | 'done'>('intro');
  const skipRef = useRef<HTMLButtonElement>(null);
  const exitStarted = useRef(false);
  const endTimer = useRef<number | null>(null);
  const beginExitRef = useRef<() => void>(() => {});

  const beginExit = () => {
    if (exitStarted.current) return;
    exitStarted.current = true;
    setPhase('exit');
    endTimer.current = window.setTimeout(() => {
      setPhase('done');
      document.documentElement.classList.remove('intro-playing');
    }, 950);
  };
  beginExitRef.current = beginExit;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done');
      return;
    }

    document.documentElement.classList.add('intro-playing');
    skipRef.current?.focus();
    const startTimer = window.setTimeout(() => beginExitRef.current(), 2800);
    return () => {
      window.clearTimeout(startTimer);
      if (endTimer.current !== null) window.clearTimeout(endTimer.current);
      document.documentElement.classList.remove('intro-playing');
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`intro-screen ${phase === 'exit' ? 'is-leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Aneka Kartika Tours and Travel"
      onKeyDown={(event) => {
        if (event.key === 'Escape') beginExitRef.current();
      }}
    >
      <div className="intro-screen__collage" aria-hidden="true">
        {photoColumns.map((photos, columnIndex) => (
          <div className="intro-screen__column" key={columnIndex}>
            <div className={`intro-screen__track ${columnIndex % 2 ? 'moves-down' : 'moves-up'}`}>
              {[0, 1].map((repeat) => (
                <div className="intro-screen__set" key={repeat}>
                  {photos.map((photo) => (
                    <div className="intro-screen__photo" key={photo.slug}>
                      <img src={photo.image} alt="" loading="eager" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="intro-screen__shade" aria-hidden="true" />
      <div className="intro-screen__curtain intro-screen__curtain--left" aria-hidden="true" />
      <div className="intro-screen__curtain intro-screen__curtain--right" aria-hidden="true" />
      <button className="intro-screen__skip" ref={skipRef} type="button" onClick={() => beginExitRef.current()}>
        Skip intro <span aria-hidden="true">↗</span>
      </button>
      <div className="intro-screen__brand">
        <img src="/images/logo-aneka-kartika.png" alt="Aneka Kartika Tours and Travel" />
        <p>Indonesia · Since 1979</p>
      </div>
    </div>
  );
}
