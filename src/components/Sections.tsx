import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Link } from '../router';
import { company, destinations, featuredPrograms, hero, heroPhotos, intro, programs, services, pages } from '../data/site';

const heroSlides = heroPhotos;
const highImagePriority = { fetchpriority: 'high' };

export function Hero() {
  const [loadedSlides, setLoadedSlides] = useState(0);
  const slidesReady = loadedSlides >= heroSlides.length;
  const cycleSeconds = heroSlides.length * 7;
  const markSlideLoaded = () => setLoadedSlides((count) => Math.min(count + 1, heroSlides.length));

  return (
    <section className="hero hero--slideshow">
      <div className={`hero__slides ${slidesReady ? 'is-ready' : ''}`} aria-hidden="true">
        {heroSlides.map((destination, index) => (
          <img
            key={destination.slug}
            className={`hero__slide ${index % 2 === 0 ? 'hero__slide--zoom-in' : 'hero__slide--zoom-out'}`}
            src={destination.image}
            alt={`${destination.name} in Indonesia`}
            {...(index === 0 ? highImagePriority : {})}
            onLoad={markSlideLoaded}
            onError={markSlideLoaded}
            style={{ animationDelay: `${-((heroSlides.length - index) % heroSlides.length) * 7 - 1}s`, animationDuration: `${cycleSeconds}s` }}
          />
        ))}
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light hero__anim" style={{ animationDelay: '0.1s' }}>
          {hero.eyebrow}
        </p>
        <h1 className="display hero__anim" style={{ animationDelay: '0.2s' }}>
          {hero.title}
        </h1>
        <p className="hero__sub hero__anim" style={{ animationDelay: '0.35s' }}>
          {hero.subtitle}
        </p>
        <div className="hero__ctas hero__anim" style={{ animationDelay: '0.5s' }}>
          <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
          <Link to="/programs" className="btn btn--primary">View Sample Programs</Link>
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
        <img {...highImagePriority} className="hero__bg" src={image} alt={title} />
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
  const currentYear = __BUILD_YEAR__;
  const stats = intro.stats.map((stat) =>
    stat.label === 'years of experience'
      ? { ...stat, value: currentYear - Number(company.sinceYear) }
      : stat,
  );

  return (
    <Reveal as="section" className="intro">
      <div className="intro__inner container">
        <div className="intro__copy">
          <p className="eyebrow eyebrow--light">Your local partner for Indonesia</p>
          <h2 className="h2 intro__statement">{intro.statement}</h2>
        </div>
        <ul className="stats">
          {stats.map((s) => (
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
  const [count, setCount] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const animate = () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value);
        return;
      }

      setCount(0);
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

  return <span className="stats__value" ref={ref}>{count.toLocaleString('en-US')}{value >= 2000 ? '+' : ''}</span>;
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
                {p.itineraryUrl !== '#' && p.itineraryUrl && (
                  <a href={p.itineraryUrl} className="link">View itinerary</a>
                )}
                {withFilter ? (
                  <Link to={`/contact?program=${encodeURIComponent(p.title)}`} className="link">
                    Request this program
                  </Link>
                ) : (
                  <Link to={`/contact?program=${encodeURIComponent(p.title)}`} className="link">Request this program</Link>
                )}
                {p.pdfUrl !== '#' && p.pdfUrl && <a href={p.pdfUrl} className="link">Download PDF</a>}
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && <p className="empty">No sample programs for this group type yet — ask us for a tailored proposal.</p>}
      </div>
    </Reveal>
  );
}

export function ProgramShowcase() {
  return (
    <section className="section container program-list-section">
      <p className="eyebrow">Sample programs</p>
      <h1 className="h2">Choose a journey to explore.</h1>
      <div className="program-card-grid">
        {featuredPrograms.map((program) => (
          <Link className="program-card" key={program.slug} to={`/programs/${program.slug}`}>
            <img src={program.image} alt={`${program.title}: ${program.start} to ${program.finish}`} loading="lazy" />
            <span className="program-card__shade" />
            <span className="program-card__duration">{program.days} days</span>
            <span className="program-card__content">
              <strong className="program-card__title">{program.title}</strong>
              <span className="program-card__route">
                <span><small>Start</small>{program.start}</span>
                <span className="program-card__arrow" aria-hidden="true">→</span>
                <span><small>Finish</small>{program.finish}</span>
              </span>
            </span>
            <span className="program-card__open">View program <span aria-hidden="true">↗</span></span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Team() {
  const memberLogos = [
    { name: 'IATA', src: '/images/logo/Iata.png' },
    { name: 'ASITA', src: '/images/logo/asita.png' },
    { name: 'ASTINDO', src: '/images/logo/astindo.png' },
    { name: 'IINTOA', src: '/images/logo/iintoa.jpeg' },
  ];

  return (
    <Reveal as="section" className="section container team-members">
      <h2 className="h2">We are member of:</h2>
      <div className="team-members__logos">
        {memberLogos.map((logo) => (
          <div className="team-members__logo" key={logo.name}>
            <img src={logo.src} alt={logo.name} loading="lazy" />
          </div>
        ))}
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
