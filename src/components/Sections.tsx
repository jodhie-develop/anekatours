import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Link } from '../router';
import { company, destinations, hero, heroPhotos, intro, programs, services, team, testimonial, pages } from '../data/site';

const heroSlides = heroPhotos;

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
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
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
  const currentYear = new Date().getFullYear();
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
