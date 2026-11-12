import { CtaBand, Destinations, Hero, Intro, PageHero, ProgramShowcase, Programs, Services, Team, Testimonial } from './components/Sections';
import QuoteForm from './components/QuoteForm';
import Reveal from './components/Reveal';
import { Link, useLocation } from './router';
import { featuredPrograms, pages } from './data/site';
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
      <Testimonial />
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
    </section>
  );
}
