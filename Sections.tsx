import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Link } from '../router';
import { destinations, hero, intro, programs, services, team, testimonial, pages } from '../data/site';

/**
 * Home hero with a scroll reveal: a cream cover layer with the letters "AT" cut out of it
 * sits over a video. Scrolling enlarges the letters until the video fills the screen,
 * then the headline and buttons fade in.
 */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 1200, h: 700 });
  const [videoOk, setVideoOk] = useState(true);
  const maskId = 'at-reveal-mask';

  // letter geometry, in px, derived from the stage size
  const fs = Math.min(size.w * (size.w < 600 ? 0.64 : 0.5), size.h * 0.62);
  const cx = size.w / 2;
  const cy = size.h / 2 - size.h * 0.03;
  // "T" sits right of centre; the middle of its stem is the zoom origin, so the stem
  // grows to cover the whole screen and the video ends up fully visible
  const tX = cx + fs * 0.33;
  const aX = cx - fs * 0.33;
  const originX = tX + fs * 0.03;
  const originY = cy + fs * 0.12;
  const maxScale = (4 * Math.hypot(size.w, size.h)) / (fs * 0.17);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setSize({ w: stage.clientWidth, h: stage.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const zoom = zoomRef.current;
    if (!section || !zoom) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - (stageRef.current?.offsetHeight ?? 0);
      const p = reduce ? 1 : Math.min(1, Math.max(0, -rect.top / Math.max(1, travel)));
      // zoom happens over the first 80% of the scroll, easing in slowly
      const z = Math.min(1, p / 0.8);
      const scale = 1 + (maxScale - 1) * Math.pow(z, 2.2);
      zoom.setAttribute(
        'transform',
        `translate(${originX} ${originY}) scale(${scale}) translate(${-originX} ${-originY})`,
      );
      section.style.setProperty('--intro-o', String(Math.max(0, 1 - p / 0.18)));
      section.style.setProperty('--cover-o', String(p < 0.64 ? 1 : Math.max(0, 1 - (p - 0.64) / 0.14)));
      section.style.setProperty('--content-o', String(Math.min(1, Math.max(0, (p - 0.74) / 0.18))));
      section.style.setProperty('--video-scale', String(1.15 - 0.15 * z));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [maxScale, originX, originY]);

  return (
    <section className="at-reveal" ref={sectionRef}>
      <div className="at-reveal__stage" ref={stageRef}>
        {videoOk && hero.video ? (
          <video
            className="at-reveal__media"
            src={hero.video}
            poster={hero.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoOk(false)}
            aria-hidden="true"
          />
        ) : (
          <img className="at-reveal__media" src={hero.image} alt="Mount Bromo at sunrise, East Java" />
        )}
        <div className="hero__shade" />

        <div className="at-reveal__content hero__content">
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
          <h1 className="display">{hero.title}</h1>
          <p className="hero__sub">{hero.subtitle}</p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--primary">
              Request a Quote
            </Link>
            <Link to="/programs" className="btn btn--primary">
              View Sample Programs
            </Link>
          </div>
        </div>

        {/* cover layer with the letters cut out */}
        <svg className="at-reveal__cover" width={size.w} height={size.h} aria-hidden="true">
          <defs>
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={size.w} height={size.h}>
              <rect width={size.w} height={size.h} fill="#fff" />
              <g ref={zoomRef}>
                <text x={aX} y={cy} fontSize={fs} className="at-reveal__letters" fill="#000">
                  {hero.revealLetters.charAt(0)}
                </text>
                <text x={tX} y={cy} fontSize={fs} className="at-reveal__letters" fill="#000">
                  {hero.revealLetters.charAt(1)}
                </text>
              </g>
            </mask>
          </defs>
          <rect width={size.w} height={size.h} className="at-reveal__fill" mask={`url(#${maskId})`} />
        </svg>

        <div className="at-reveal__intro" aria-hidden="true">
          <p className="at-reveal__eyebrow">{hero.revealEyebrow}</p>
          <p className="at-reveal__tagline">{hero.revealTagline}</p>
          <span className="at-reveal__cue">
            Scroll to explore
            <span className="at-reveal__cue-line" />
          </span>
        </div>
      </div>
    </section>
  );
}

/** Heading block at the top of each subpage. Optional image turns it into a photo banner. */
export function PageHero({ title, intro, image }: { title: string; intro?: string; image?: string }) {
  if (image) {
    return (
      <section className="hero hero--page">
        <img className="hero__bg" src={image} alt="" />
        <div className="hero__shade hero__shade--page" />
        <div className="hero__content">
          <h1 className="display hero__anim" style={{ animationDelay: '0.1s' }}>
            {title}
          </h1>
          {intro && (
            <p className="hero__sub hero__anim" style={{ animationDelay: '0.25s' }}>
              {intro}
            </p>
          )}
        </div>
      </section>
    );
  }
  return (
    <section className="page-hero container">
      <h1 className="display hero__anim">{title}</h1>
      {intro && (
        <p className="page-hero__intro hero__anim" style={{ animationDelay: '0.15s' }}>
          {intro}
        </p>
      )}
    </section>
  );
}

export function Intro() {
  return (
    <Reveal as="section" className="intro">
      <div className="intro__inner container">
        <div className="intro__copy">
          <p className="eyebrow eyebrow--light">Your local partner for Indonesia</p>
          <h2 className="h2 intro__statement">{intro.statement}</h2>
        </div>
        <ul className="stats">
          {intro.stats.map((s) => (
            <li key={s.label}>
              <StatCounter value={s.value} />
              <span className="stats__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function StatCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animate = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value);
        return;
      }

      const duration = 1400;
      const start = performance.now();
      let frame = 0;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(value * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    };

    if (!('IntersectionObserver' in window)) {
      return animate();
    }

    let cancelAnimation = () => {};
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        cancelAnimation = animate() ?? (() => {});
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimation();
    };
  }, [value]);

  return <span className="stats__value" ref={ref}>{count.toLocaleString('id-ID')}</span>;
}

export function Destinations({ compactTop = false }: { compactTop?: boolean }) {
  return (
    <Reveal as="section" className={`section container ${compactTop ? 'section--tight-top' : ''}`}>
      <p className="eyebrow">One country. Endless possibilities.</p>
      <h2 className="h2">Where will your next group go?</h2>
      <div className="bento">
        {destinations.map((d, i) => (
          <Link
            key={d.slug}
            to={`/contact?destination=${encodeURIComponent(d.name)}`}
            className={`dest-card ${i === 0 ? 'dest-card--tall' : ''}`}
          >
            <img src={d.image} alt={d.name} loading="lazy" />
            <span className="dest-card__shade" />
            <span className="dest-card__name">{d.name}</span>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}

export function Services({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? 'h1' : 'h2';
  return (
    <Reveal as="section" className={`services ${asPage ? 'services--page' : ''}`}>
      <div className="services__inner">
        <Heading className={asPage ? 'display' : 'h2'}>{pages.services.title}</Heading>
        <div className="services__grid">
          {services.map((s) => (
            <article key={s.title} className="service">
              <h3 className="h2">{s.title}</h3>
              <p>{s.text}</p>
              <Link to={asPage ? `/contact?group=${encodeURIComponent(s.title)}` : '/services'} className="link">
                Explore services
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

const groupTypes = ['All', ...services.map((s) => s.title)];

export function Programs({ withFilter = false, showHeading = true }: { withFilter?: boolean; showHeading?: boolean }) {
  const [type, setType] = useState('All');
  const list = type === 'All' ? programs : programs.filter((p) => p.category === type);

  return (
    <Reveal as="section" className={`section container ${showHeading ? '' : 'section--tight-top'}`}>
      {showHeading && (
        <>
          <h2 className="h2">{pages.programs.title}</h2>
          <p className="lead">{pages.programs.intro}</p>
        </>
      )}

      {withFilter && (
        <div className="filter" role="group" aria-label={pages.programs.filterLabel}>
          <span className="label">{pages.programs.filterLabel}</span>
          <div className="filter__chips">
            {groupTypes.map((g) => (
              <button
                key={g}
                type="button"
                className={`chip ${type === g ? 'is-active' : ''}`}
                aria-pressed={type === g}
                onClick={() => setType(g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="programs">
        {list.map((p) => (
          <article key={p.title} className="program">
            <div className="program__img">
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <div className="program__body">
              <span className="label">{p.days} days</span>
              <h3 className="program__title">{p.title}</h3>
              <p className="program__route">{p.route.join(' · ')}</p>
              <span className="label">{p.category}</span>
              <div className="program__links">
                <a href={p.itineraryUrl} className="link">
                  View itinerary
                </a>
                {withFilter ? (
                  <Link to={`/contact?program=${encodeURIComponent(p.title)}`} className="link">
                    Request this program
                  </Link>
                ) : (
                  <a href={p.pdfUrl} className="link">
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="empty">No sample programs for this group type yet — ask us for a tailored proposal.</p>}
      </div>
    </Reveal>
  );
}

export function Team() {
  return (
    <Reveal as="section" className="section container">
      <h2 className="h2">{team.title}</h2>
      <p className="lead">{team.highlights.join(' · ')}</p>
      <p className="label">{team.note}</p>
      <div className="team-photo">
        {team.photo ? <img src={team.photo} alt="Aneka Tours team with a group" /> : <span>{team.photoPlaceholder}</span>}
      </div>
    </Reveal>
  );
}

export function Testimonial() {
  return (
    <Reveal as="section" className="testimonial">
      <div className="testimonial__inner">
        <h2 className="h2">{testimonial.title}</h2>
        <blockquote>{testimonial.quote}</blockquote>
        <p className="label">{testimonial.author}</p>
        <p className="label">{testimonial.logosNote}</p>
      </div>
    </Reveal>
  );
}

/** Dark call-to-action band (used on About). */
export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <Reveal as="section" className="testimonial">
      <div className="testimonial__inner">
        <h2 className="h2">{title}</h2>
        <p className="cta-band__text">{text}</p>
        <div>
          <Link to="/contact" className="btn btn--primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
