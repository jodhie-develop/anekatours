import { CtaBand, Destinations, Hero, Intro, PageHero, ProgramShowcase, Programs, Services, Team } from './components/Sections';
import QuoteForm from './components/QuoteForm';
import Reveal from './components/Reveal';
import { Link, useLocation } from './router';
import { destinationRegions, destinations, featuredPrograms, pages } from './data/site';
import Gallery from './components/Gallery';

export function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Destinations />
      <Services />
      <Programs />
      <Team />
      <QuoteForm />
    </>
  );
}

export function AboutPage() {
  const p = pages.about;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} />
      <Reveal as="section" className="container about">
        <div className="about__photo">
          <img src={p.image} alt="Borobudur, Central Java" loading="lazy" />
        </div>
        <div className="about__story">
          {p.story.map((section) => (
            <section className="about__story-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && (
                <ul>
                  {section.points.map((point) => (
                    <li key={point.lead}>
                      <strong>{point.lead}</strong>{point.text}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Reveal>
      <div className="section">
        <CtaBand title={p.ctaTitle} text={p.ctaText} />
      </div>
    </>
  );
}

export function ServicesPage() {
  return (
    <div className="page-pad">
      <Services asPage />
    </div>
  );
}

export function DestinationsPage() {
  const p = pages.destinations;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} image={p.image} />
      <Destinations />
      <div className="container destinations-back">
        <Link to="/" className="link">← Back to home</Link>
      </div>
    </>
  );
}

export function DestinationDetailPage() {
  const { path } = useLocation();
  const segments = path.replace(/\/+$/, '').split('/').filter(Boolean).slice(1);
  const destination = destinations.find((item) => item.slug === segments[0]);
  const regions = destination ? destinationRegions[destination.slug] : undefined;
  if (!destination || !regions) return <NotFoundPage />;

  const region = regions.find((item) => item.slug === segments[1]);
  if (segments.length > 1) {
    if (!region) return <NotFoundPage />;
    return (
      <>
        <PageHero title={region.name} intro={region.description} image={region.image} />
        <section className="section container destination-story">
          <p className="eyebrow">{destination.name}, Indonesia</p>
          <h2 className="h2">Explore {region.name}</h2>
          <p className="lead">Discover this part of {destination.name} with a journey shaped around your travellers. Our local team can tailor the route, pace and experiences to suit your programme.</p>
          <div className="destination-story__links">
            <Link to={`/contact?destination=${encodeURIComponent(`${destination.name} — ${region.name}`)}`} className="btn btn--primary">Plan this destination</Link>
            <Link to={`/destinations/${destination.slug}`} className="link">← Back to {destination.name}</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero title={destination.name} intro={`Explore the regions and island experiences that make ${destination.name} distinctive.`} image={destination.image} />
      <section className="section container">
        <p className="eyebrow">Explore the region</p>
        <h2 className="h2">Discover {destination.name}</h2>
        <div className="bento destination-regions">
          {regions.map((region) => (
            <Link
              key={region.slug}
              to={`/destinations/${destination.slug}/${region.slug}`}
              className="dest-card destination-regions__card"
            >
              <img src={region.image} alt={region.name} loading="lazy" />
              <span className="dest-card__shade" />
              <span className="destination-regions__copy">
                <span className="dest-card__name">{region.name}</span>
                <span className="destination-regions__description">{region.description}</span>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/destinations" className="link destination-regions__back">← All destinations</Link>
      </section>
    </>
  );
}

export function ProgramsPage() {
  return <ProgramShowcase />;
}

export function ProgramDetailPage() {
  const { path } = useLocation();
  const segments = path.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];
  const program = featuredPrograms.find((item) => item.slug === slug);

  if (!program) return <NotFoundPage />;

  return (
    <>
      <PageHero
        title={program.title}
        intro={`${program.days} days · Start: ${program.start} · Finish: ${program.finish}`}
        image={program.image}
      />
      <section className="section container program-detail-page">
        <Link to="/programs" className="link">← All sample programs</Link>
        <div className="program-detail-page__content">
          <p className="eyebrow">The journey</p>
          <p className="program-detail-page__description">{program.description}</p>
          <div className="program-detail-page__supporting">
            <p className="eyebrow">Along the way</p>
            <div className="program-detail-page__gallery">
              {program.supportingImages.map((photo) => (
                <figure className="program-detail-page__photo-card" key={photo.image}>
                  <img src={photo.image} alt={photo.title} loading="lazy" />
                  <figcaption>{photo.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <Link to={`/contact?program=${encodeURIComponent(program.title)}`} className="btn btn--primary">
            Enquire about this program
          </Link>
        </div>
      </section>
    </>
  );
}

export function GalleryPage() {
  const p = pages.gallery;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} />
      <Gallery />
    </>
  );
}

export function ContactPage() {
  const p = pages.contact;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} />
      <QuoteForm full />
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="page-hero container not-found">
      <h1 className="display">Page not found.</h1>
      <p className="page-hero__intro">The page you’re looking for doesn’t exist or has moved.</p>
      <Link to="/" className="btn btn--primary">
        Back to home
      </Link>
      {' '}
      <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
    </section>
  );
}
