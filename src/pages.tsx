import { CtaBand, Destinations, Hero, Intro, PageHero, ProgramShowcase, Programs, Services, Team } from './components/Sections';
import QuoteForm from './components/QuoteForm';
import Reveal from './components/Reveal';
import { Link, useLocation } from './router';
import { destinations as siteDestinations, pages } from './data/site';
import Gallery from './components/Gallery';
import AdminChatLeads from './components/AdminChatLeads';
import { BaliRegionPage, DestinationAttractionDetail, JavaRegionPage, ManagedDestinationRegionPage, OtherDestinationRegionPage } from './components/DestinationContent';
import { baliRegion, destinationPagesWithoutContent, javaRegion } from './data/destinations';
import { useCms } from './data/CmsProvider';

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
  const { destinations, attractions } = useCms();
  const segments = path.replace(/\/+$/, '').split('/').filter(Boolean).slice(1);
  if (segments.length === 1 && segments[0] === 'java') return <JavaRegionPage attractions={attractions.filter((item) => item.regionSlug === 'java')} />;
  if (segments.length === 1 && segments[0] === 'bali') return <BaliRegionPage attractions={attractions.filter((item) => item.regionSlug === 'bali')} />;
  if (segments.length === 1) {
    const region = destinations.find((item) => item.slug === segments[0]);
    if (region) return <ManagedDestinationRegionPage destination={region} attractions={attractions.filter((item) => item.regionSlug === segments[0])} />;
    return <OtherDestinationRegionPage slug={segments[0]} attractions={attractions.filter((item) => item.regionSlug === segments[0])} />;
  }
  if (segments.length === 2) {
    const [regionSlug, attractionSlug] = segments;
    const attraction = attractions.find((item) => item.regionSlug === regionSlug && item.slug === attractionSlug);
    const region = regionSlug === 'java' ? javaRegion : regionSlug === 'bali' ? baliRegion : destinationPagesWithoutContent.find((item) => item.slug === regionSlug);
    const regionName = regionSlug === 'java' ? 'Java' : regionSlug === 'bali' ? 'Bali' : destinations.find((item) => item.slug === regionSlug)?.name ?? (region && 'name' in region ? region.name : '');
    if (attraction && regionName) return <DestinationAttractionDetail attraction={attraction} regionName={regionName} others={attractions.filter((item) => item.regionSlug === regionSlug)} />;
  }
  return <NotFoundPage />;
}

export function ProgramsPage() {
  return <ProgramShowcase />;
}

export function ProgramDetailPage() {
  const { path } = useLocation();
  const { programs } = useCms();
  const segments = path.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];
  const program = programs.find((item) => item.slug === slug);

  if (!program) return <NotFoundPage />;

  return (
    <>
      <PageHero
        title={program.title}
        intro={`${program.days ? `${program.days} days` : 'Duration to be confirmed'} · Start: ${program.start} · Finish: ${program.finish}`}
        image={program.image ?? undefined}
      />
      <section className="section container program-detail-page">
        <Link to="/programs" className="link">← All sample programs</Link>
        <div className="program-detail-page__content">
          <p className="eyebrow">The journey</p>
          <div className="program-tags" aria-label={`Services: ${program.serviceTypes.join(', ')}. Destinations: ${program.destinationSlugs.join(', ')}`}>
            {program.serviceTypes.map((service) => <span className="program-tag" key={`service-${service}`}>{service}</span>)}
            {program.destinationSlugs.map((slug) => <span className="program-tag program-tag--destination" key={`destination-${slug}`}>{siteDestinations.find((item) => item.slug === slug)?.name ?? slug}</span>)}
          </div>
          <p className="program-detail-page__description">{program.description}</p>
          {program.supportingImages.length > 0 && (
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
          )}
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

export function AdminChatLeadsPage() {
  return <AdminChatLeads />;
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
