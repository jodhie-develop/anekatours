import { baliAttractions, baliRegion, destinationPagesWithoutContent, getDestinationAttraction, javaAttractions, javaRegion, type AttractionPageContent, type DestinationImage } from '../data/destinations';
import { destinations } from '../data/site';
import { Link } from '../router';

const highImagePriority = { fetchpriority: 'high' };

function DestinationHero({ image, title, intro, breadcrumbs }: { image: DestinationImage | null; title: string; intro?: string[]; breadcrumbs: { label: string; href?: string }[] }) {
  return (
    <section className="hero hero--page destination-hero">
      {image ? <img {...highImagePriority} className="hero__bg" src={image.src} srcSet={image.srcSet} sizes="100vw" alt={image.alt} /> : <div className="destination-hero__no-image" aria-hidden="true" />}
      <div className="hero__shade hero__shade--page" />
      <div className="hero__content">
        <nav className="destination-breadcrumb" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`}>
                {index > 0 && <span aria-hidden="true">›</span>}
                {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="display hero__anim" style={{ animationDelay: '0.1s' }}>{title}</h1>
        {intro?.map((paragraph, index) => <p className="hero__sub hero__anim" style={{ animationDelay: `${0.25 + index * 0.1}s` }} key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function JavaAttractionCard({ attraction, regionSlug = 'java' }: { attraction: AttractionPageContent; regionSlug?: string }) {
  return (
    <Link to={`/destinations/${regionSlug}/${attraction.slug}`} className={`destination-place-card${attraction.heroImage ? '' : ' destination-place-card--no-image'}`}>
      {attraction.heroImage && <img src={attraction.heroImage.src} srcSet={attraction.heroImage.srcSet} sizes="(max-width: 768px) 90vw, 40vw" alt={attraction.heroImage.alt} loading="lazy" />}
      <span className="destination-place-card__shade" />
      <span className="destination-place-card__title">{attraction.h1.split(':')[0]}</span>
    </Link>
  );
}

export function BaliRegionPage() {
  return (
    <>
      <DestinationHero image={baliRegion.heroImage} title={baliRegion.h1} intro={baliRegion.intro}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Bali' }]} />
      <section className="section container destination-region-content">
        <p className="eyebrow">Explore Bali</p>
        <h2 className="h2">Places to discover</h2>
        <div className="destination-place-grid">
          {baliAttractions.map((attraction) => <JavaAttractionCard key={attraction.slug} attraction={attraction} regionSlug="bali" />)}
        </div>
        <Link to="/destinations" className="link destination-regions__back">← All destinations</Link>
      </section>
    </>
  );
}

export function JavaRegionPage() {
  const javaCard = destinations.find(({ slug }) => slug === javaRegion.slug);
  return (
    <>
      <DestinationHero
        image={javaRegion.heroImage}
        title={javaRegion.h1}
        intro={javaRegion.intro}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: 'Java' }]}
      />
      <section className="section container destination-region-content">
        <p className="eyebrow">Explore Java</p>
        <h2 className="h2">Places to discover</h2>
        <div className="destination-place-grid">
          {javaAttractions.map((attraction) => <JavaAttractionCard key={attraction.slug} attraction={attraction} />)}
        </div>
        {javaCard && <Link to="/destinations" className="link destination-regions__back">← All destinations</Link>}
      </section>
    </>
  );
}

export function OtherDestinationRegionPage({ slug }: { slug: string }) {
  const region = destinationPagesWithoutContent.find((item) => item.slug === slug);
  if (!region) return null;
  const places = region.attractions.filter((attraction) => attraction.published !== false);
  return (
    <>
      <DestinationHero
        image={region.heroImage}
        title={region.name}
        intro={region.intro}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: region.name }]}
      />
      <section className="section container destination-region-content">
        <p className="eyebrow">Explore {region.name}</p>
        <h2 className="h2">Places to discover</h2>
        <div className="destination-place-grid">
          {places.map((attraction) => <JavaAttractionCard key={attraction.slug} attraction={attraction} regionSlug={region.slug} />)}
        </div>
        <Link to="/destinations" className="link destination-regions__back">← All destinations</Link>
      </section>
    </>
  );
}

function PairingLine({ pair }: { pair: AttractionPageContent['pairsWith'][number] }) {
  if (pair.segments) return <p>{pair.segments.map((segment, index) => {
    const match = segment.href?.match(/^\/destinations\/([^/]+)\/([^/]+)$/);
    const validHref = match && getDestinationAttraction(match[1], match[2]) ? segment.href : undefined;
    return validHref ? <Link key={`${segment.text}-${index}`} to={validHref}>{segment.text}</Link> : <span key={`${segment.text}-${index}`}>{segment.text}</span>;
  })}</p>;
  if (!pair.href) return <p>{pair.text}</p>;
  return <p>{pair.before}{pair.title && <Link to={pair.href}>{pair.title}</Link>}{pair.text}</p>;
}

export function JavaAttractionPage({ attraction }: { attraction: AttractionPageContent }) {
  return <AttractionDetailPage attraction={attraction} regionSlug="java" regionName="Java" others={javaAttractions} />;
}

export function BaliAttractionPage({ attraction }: { attraction: AttractionPageContent }) {
  return <AttractionDetailPage attraction={attraction} regionSlug="bali" regionName="Bali" others={baliAttractions} />;
}

export function OtherAttractionPage({ regionSlug, slug }: { regionSlug: string; slug: string }) {
  const attraction = getDestinationAttraction(regionSlug, slug);
  const region = destinationPagesWithoutContent.find((item) => item.slug === regionSlug);
  if (!attraction || !region) return null;
  return <AttractionDetailPage attraction={attraction} regionSlug={region.slug} regionName={region.name} others={region.attractions.filter((item) => item.published !== false)} />;
}

function AttractionDetailPage({ attraction, regionSlug, regionName, others }: { attraction: AttractionPageContent; regionSlug: string; regionName: string; others: AttractionPageContent[] }) {
  const otherPlaces = others.filter((item) => item.slug !== attraction.slug && item.published !== false);
  return (
    <>
      <DestinationHero
        image={attraction.heroImage}
        title={attraction.h1}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Destinations', href: '/destinations' }, { label: regionName, href: `/destinations/${regionSlug}` }, { label: attraction.h1.split(':')[0] }]}
      />
      <div className="section container destination-detail">
        <section className="destination-detail__section destination-detail__intro">
          {attraction.intro.map((paragraph) => <p className="lead" key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="destination-detail__section">
          <h2 className="h2">Highlights</h2>
          <div className="destination-highlight-grid">
            {attraction.highlights.map((highlight) => (
              <article className="destination-highlight" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="destination-detail__section">
          <h2 className="h2">The Aneka Kartika Experience</h2>
          <ul className="destination-check-list">
            {attraction.experience.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
          </ul>
        </section>

        <section className="destination-detail__section">
          <h2 className="h2">Best Time to Visit</h2>
          {attraction.bestTime.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="destination-detail__section">
          <h2 className="h2">Group Logistics: Challenges and How We Handle Them</h2>
          <table className="destination-logistics-table">
            <thead><tr><th scope="col">Challenge</th><th scope="col">Our solution</th></tr></thead>
            <tbody>{attraction.logistics.map((row) => <tr key={row.challenge}><th scope="row">{row.challenge}</th><td>{row.solution}</td></tr>)}</tbody>
          </table>
          <div className="destination-logistics-cards">
            {attraction.logistics.map((row) => <article className="destination-logistics-card" key={row.challenge}><h3>{row.challenge}</h3><p>{row.solution}</p></article>)}
          </div>
        </section>

        <section className="destination-detail__section destination-pairings">
          <h2 className="h2">Pairs Well With</h2>
          {attraction.pairsWith.map((pair, index) => <PairingLine key={`${pair.title}-${index}`} pair={pair} />)}
        </section>

        <section className="destination-detail__section destination-faq">
          <h2 className="h2">FAQ for Travel Agents</h2>
          {attraction.faq.map((item) => (
            <details className="destination-faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="destination-cta">
          <p className="lead">{attraction.cta}</p>
          <Link to={`/contact?destination=${attraction.slug}`} className="btn btn--primary">Request a Quote</Link>
        </section>

        <Link to={`/destinations/${regionSlug}`} className="link destination-detail__back">← Back to {regionName}</Link>

        <section className="destination-other-places">
          <h2 className="h2">Other places in {regionName}</h2>
          <div className="destination-place-grid destination-place-grid--other">
            {otherPlaces.map((place) => <JavaAttractionCard key={place.slug} attraction={place} regionSlug={regionSlug} />)}
          </div>
        </section>
      </div>
    </>
  );
}
