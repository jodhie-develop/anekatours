import { CtaBand, Destinations, Hero, Intro, PageHero, Programs, Services, Team, Testimonial } from './components/Sections';
import QuoteForm from './components/QuoteForm';
import Reveal from './components/Reveal';
import { Link } from './router';
import { pages } from './data/site';

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
        <p className="lead about__story">{p.story}</p>
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
  const p = pages.programs;
  return (
    <>
      <PageHero title={p.title} intro={p.intro} />
      <Programs withFilter showHeading={false} />
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
