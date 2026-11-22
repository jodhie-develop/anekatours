import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { Link } from '../router';
import { company, destinations as siteDestinations, hero, heroPhotos, intro, services, pages } from '../data/site';
import { useCms } from '../data/CmsProvider';
import { baliRegion, destinationPagesWithoutContent, javaRegion } from '../data/destinations';

const heroSlides = heroPhotos;
const highImagePriority = { fetchpriority: 'high' };

export function Hero() {
  const [loadedSlides, setLoadedSlides] = useState(0);
  const loadedSlideIndexes = useRef(new Set<number>());
  const slidesReady = loadedSlides >= heroSlides.length;
  const cycleSeconds = heroSlides.length * 7;
  const markSlideLoaded = (index: number) => {
    if (loadedSlideIndexes.current.has(index)) return;
    loadedSlideIndexes.current.add(index);
    setLoadedSlides(loadedSlideIndexes.current.size);
  };

  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>('.hero__slide');
    images.forEach((image, index) => {
      if (image.complete) markSlideLoaded(index);
    });
  }, []);

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
            onLoad={() => markSlideLoaded(index)}
            onError={() => markSlideLoaded(index)}
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

export function ScrollArrow() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      setAtBottom(window.scrollY + window.innerHeight >= pageHeight - 8);
    };
    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const scroll = () => {
    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    if (atBottom) {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const headerOffset = document.querySelector('.header')?.getBoundingClientRect().height ?? 0;
    const nextSection = [...document.querySelectorAll<HTMLElement>('main > section')]
      .find((section) => section.getBoundingClientRect().top > headerOffset + 8);
    if (nextSection) nextSection.scrollIntoView({ behavior, block: 'start' });
    else window.scrollTo({ top: document.documentElement.scrollHeight, behavior });
  };

  return (
    <button className="hero__scroll" type="button" onClick={scroll} aria-label={atBottom ? 'Scroll to the top' : 'Scroll to the next section'}>
      <svg viewBox="0 0 24 24" width="23" height="23" aria-hidden="true">
        {atBottom
          ? <path d="M12 20V5m7 7-7-7-7 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M12 4v15m-7-7 7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </button>
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
    <Reveal as="section" id="intro" className="intro">
      <div className="intro__inner container">
        <div className="intro__copy">
          <p className="eyebrow eyebrow--light">Your local partner for Indonesia</p>
          <h2 className="h2 intro__statement">{intro.statement}</h2>
        </div>
        <ul className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <StatCounter value={s.value} suffix={s.suffix} />
              <span className="stats__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function StatCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
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

  return <span className="stats__value" ref={ref}>{count.toLocaleString('en-US')}{suffix}</span>;
}

export function Destinations({ compactTop = false }: { compactTop?: boolean }) {
  const { destinations } = useCms();
  return (
    <Reveal as="section" className={`section container ${compactTop ? 'section--tight-top' : ''}`}>
      <p className="eyebrow">One country. Endless possibilities.</p>
      <h2 className="h2">Where will your next adventure take you?</h2>
      <div className="bento bento--destinations">
        {destinations.map((d) => {
          const destinationPage = d.slug === 'java' ? javaRegion : d.slug === 'bali' ? baliRegion : destinationPagesWithoutContent.find((item) => item.slug === d.slug);
          const image = d.image || destinationPage?.heroImage?.src;
          const imageAlt = d.imageAlt || destinationPage?.heroImage?.alt || d.name;
          return (
          <Link
            key={d.slug}
            to={`/destinations/${d.slug}`}
            className={`dest-card${image ? '' : ' dest-card--no-image'}`}
          >
            {image && <img src={image} sizes="(max-width: 768px) 90vw, 33vw" alt={imageAlt} loading="lazy" />}
            <span className="dest-card__shade" />
            <span className="dest-card__name">{d.name}</span>
          </Link>
          );
        })}
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

function ProgramTags({ serviceTypes, destinationSlugs, light = false }: { serviceTypes: string[]; destinationSlugs: string[]; light?: boolean }) {
  const regions = destinationSlugs.map((slug) => siteDestinations.find((item) => item.slug === slug)?.name ?? slug);
  return <span className={`program-tags ${light ? 'program-tags--light' : ''}`} aria-label={`Services: ${serviceTypes.join(', ')}. Destinations: ${regions.join(', ')}`}>
    {serviceTypes.map((service) => <span className="program-tag" key={`service-${service}`}>{service}</span>)}
    {regions.map((region) => <span className="program-tag program-tag--destination" key={`destination-${region}`}>{region}</span>)}
  </span>;
}

export function Programs({ showHeading = true }: { withFilter?: boolean; showHeading?: boolean }) {
  const { programs } = useCms();
  const highlights = programs.filter((program) => program.highlighted);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const updateActiveSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    if (!slides.length) return;
    const closest = slides.reduce((bestIndex, slide, index) =>
      Math.abs(slide.offsetLeft - track.scrollLeft) < Math.abs(slides[bestIndex].offsetLeft - track.scrollLeft) ? index : bestIndex, 0);
    setActiveIndex(closest);
  };

  useEffect(() => {
    if (paused || highlights.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((current) => {
        const next = (current + 1) % highlights.length;
        const track = trackRef.current;
        const slide = track?.children[next] as HTMLElement | undefined;
        if (track && slide) track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
        return next;
      });
    }, 6500);
    return () => window.clearInterval(timer);
  }, [highlights.length, paused]);

  return (
    <Reveal as="section" className={`section container ${showHeading ? '' : 'section--tight-top'}`}>
      {showHeading && <><h2 className="h2">{pages.programs.title}</h2><p className="lead">{pages.programs.intro}</p></>}
      {highlights.length ? <div className="program-carousel" role="region" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false); }} aria-roledescription="carousel" aria-label="Featured sample programs">
        <div className="program-carousel__track" ref={trackRef} onScroll={updateActiveSlide}>
          {highlights.map((program, index) => <Link className={`program-card program-carousel__slide ${program.image ? '' : 'program-card--no-image'}`} key={program.slug} to={`/programs/${program.slug}`} aria-roledescription="slide" aria-label={`${program.title}, slide ${index + 1} of ${highlights.length}`}>
            {program.image && <img src={program.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} />}
            <span className="program-card__shade" />
            <span className="program-card__duration">{program.days ? `${program.days} days` : 'Duration to be confirmed'}</span>
            <span className="program-card__content">
              <strong className="program-card__title">{program.title}</strong>
              <ProgramTags serviceTypes={program.serviceTypes} destinationSlugs={program.destinationSlugs} light />
              <span className="program-card__route"><span><small>Start</small>{program.start}</span><span className="program-card__arrow" aria-hidden="true">→</span><span><small>Finish</small>{program.finish}</span></span>
            </span>
            <span className="program-card__open">View program <span aria-hidden="true">↗</span></span>
          </Link>)}
        </div>
        {highlights.length > 1 && <div className="program-carousel__controls">
          <button type="button" aria-label="Previous highlighted program" onClick={() => goTo((activeIndex - 1 + highlights.length) % highlights.length)}>←</button>
          <div className="program-carousel__dots" aria-label="Choose a highlighted program">{highlights.map((program, index) => <button key={program.slug} type="button" aria-label={`Show ${program.title}`} aria-current={activeIndex === index ? 'true' : undefined} onClick={() => goTo(index)} />)}</div>
          <button type="button" aria-label="Next highlighted program" onClick={() => goTo((activeIndex + 1) % highlights.length)}>→</button>
        </div>}
      </div> : <p className="empty">No sample programs are currently highlighted. Explore all programs to find a starting point for your journey. <Link to="/programs" className="link">View all sample programs</Link></p>}
    </Reveal>
  );
}

export function ProgramShowcase() {
  const { programs } = useCms();
  return (
    <section className="section container program-list-section">
      <p className="eyebrow">Sample programs</p>
      <h1 className="h2">Choose a journey to begin with.</h1>
      <div className="program-card-grid">
        {programs.map((program) => (
          <Link className={`program-card ${program.image ? '' : 'program-card--no-image'}`} key={program.slug} to={`/programs/${program.slug}`}>
            {program.image && <img src={program.image} alt={`${program.title}: ${program.start} to ${program.finish}`} loading="lazy" />}
            <span className="program-card__shade" />
            <span className="program-card__duration">{program.days ? `${program.days} days` : 'Duration to be confirmed'}</span>
            <span className="program-card__content">
              <strong className="program-card__title">{program.title}</strong>
              <ProgramTags serviceTypes={program.serviceTypes} destinationSlugs={program.destinationSlugs} light />
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
      <h2 className="h2">Member of</h2>
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
