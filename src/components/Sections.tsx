import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Link } from '../router';
import { destinations, hero, intro, programs, services, team, testimonial, pages } from '../data/site';

/**
 * Home hero with a scroll reveal: a blue cover layer with the Aneka Kartika logo mark
 * cut out of it sits over a video. Scrolling enlarges the mark until the video fills
 * the screen, then the headline and buttons fade in.
 */
// ---- Aneka Kartika logo mark, drawn for use inside an SVG mask ----
// black = cut-out (video shows through), white = cover stays
const LEG_SLOPE = 0.316;
const legLeft = (y: number) => 20 + LEG_SLOPE * (y - 83);
const outerEdge = (y: number) => 18.4 - 0.353 * (y - 84.6);
const pts = (list: [number, number][]) => list.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');

const BLUE_LEG = pts([
  [20, 83],
  [30, 83],
  [30 + LEG_SLOPE * 23, 106],
  [46, 106],
  [46, 114.4],
  [19.6, 114.4],
  [21, 111.3],
  [legLeft(111.3), 111.3],
]);
const RED_BAND = pts([
  [outerEdge(84.6), 84.6],
  [legLeft(84.6) - 0.9, 84.6],
  [legLeft(111.3) - 1, 111.3],
  [legLeft(111.3) - 1, 114.4],
  [5, 114.4],
  [5, 105.6],
  [outerEdge(105.6), 105.6],
]);
// white gaps between the red stripes: nested chevrons parallel to the outer edge and the foot
const STRIPE_PITCH = 2.1;
const STRIPE_GAPS = Array.from({ length: 6 }, (_, i) => {
  const c = (i + 0.83) * STRIPE_PITCH;
  const xAt = (y: number) => outerEdge(y) + c / 0.943;
  const cornerY = 105.6 + c;
  return pts([
    [xAt(78), 78],
    [xAt(cornerY), cornerY],
    [0, cornerY],
  ]);
});
const STAR = pts(
  Array.from({ length: 10 }, (_, i) => {
    const a = ((-90 + i * 36) * Math.PI) / 180;
    const r = i % 2 === 0 ? 8 : 3.2;
    return [24.2 + r * Math.cos(a), 107.2 + r * Math.sin(a) * 0.76] as [number, number];
  }),
);

function LogoMarkMask() {
  return (
    <>
      <polygon points={RED_BAND} fill="#000" />
      {STRIPE_GAPS.map((p) => (
        <polyline key={p} points={p} fill="none" stroke="#fff" strokeWidth={STRIPE_PITCH * 0.34} strokeLinejoin="miter" />
      ))}
      <polygon points={BLUE_LEG} fill="#000" />
      <polygon points={STAR} fill="#fff" />
    </>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 1200, h: 700 });
  const [videoOk, setVideoOk] = useState(true);
  const maskId = 'at-reveal-mask';

  // Logo mark geometry, in the logo's own units (bounding box x 5–46, y 83–114.4).
  // k converts those units to px for the current stage size.
  const k = Math.min((size.h * 0.5) / 31.4, (size.w * (size.w < 600 ? 0.72 : 0.4)) / 41);
  const cx = size.w / 2;
  const cy = size.h / 2 - size.h * 0.04;
  const markX = cx - 25.5 * k;
  const markY = cy - 98.7 * k;
  // zoom origin: middle of the blue leg, so it grows to cover the whole screen
  const originX = markX + 27.8 * k;
  const originY = markY + 92 * k;
  const maxScale = (4 * Math.hypot(size.w, size.h)) / (10 * k);

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
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    // ease-in-out so the zoom starts and ends gently
    const ease = (t: number) => 0.5 - 0.5 * Math.cos(Math.PI * t);
    const logMax = Math.log(maxScale);
    let frame = 0;
    let current = -1; // smoothed progress
    let target = 0; // progress from the real scroll position

    const readTarget = () => {
      const rect = section.getBoundingClientRect();
      const travel = section.offsetHeight - (stageRef.current?.offsetHeight ?? 0);
      target = reduce ? 1 : clamp(-rect.top / Math.max(1, travel));
    };

    const render = (p: number) => {
      // zoom runs over the first 80% of the scroll; scaling in log space keeps
      // the growth feeling even instead of crawling at first and then jumping
      const z = ease(clamp(p / 0.8));
      const scale = Math.exp(logMax * z);
      zoom.setAttribute(
        'transform',
        `translate(${originX} ${originY}) scale(${scale.toFixed(4)}) translate(${-originX} ${-originY})`,
      );
      section.style.setProperty('--intro-o', String(1 - ease(clamp(p / 0.2))));
      section.style.setProperty('--cover-o', String(1 - ease(clamp((p - 0.62) / 0.18))));
      section.style.setProperty('--content-o', String(ease(clamp((p - 0.74) / 0.2))));
      section.style.setProperty('--video-scale', String(1.12 - 0.12 * z));
    };

    // follow the scroll position with a little inertia, so wheel steps glide instead of jump
    const tick = () => {
      frame = 0;
      current = current < 0 ? target : current + (target - current) * 0.14;
      if (Math.abs(target - current) < 0.0005) current = target;
      render(current);
      if (current !== target) frame = requestAnimationFrame(tick);
    };
    const onScroll = () => {
      readTarget();
      if (!frame) frame = requestAnimationFrame(tick);
    };
    readTarget();
    tick();
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
                <g transform={`translate(${markX} ${markY}) scale(${k})`}>
                  <LogoMarkMask />
                </g>
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
        {team.photo ? <img src={team.photo} alt="Aneka Kartika Tours & Travel team with a group" /> : <span>{team.photoPlaceholder}</span>}
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
