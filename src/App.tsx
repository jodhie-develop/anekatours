import { useEffect, type ComponentType } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import Chatbot from './components/Chatbot';
import { useLocation } from './router';
import { destinationRegions, destinations, featuredPrograms, pages } from './data/site';
import { AboutPage, ContactPage, DestinationDetailPage, DestinationsPage, GalleryPage, HomePage, NotFoundPage, ProgramDetailPage, ProgramsPage, ServicesPage } from './pages';
import { ScrollArrow } from './components/Sections';

const routes: Record<string, { component: ComponentType; title: string }> = {
  '/': { component: HomePage, title: 'Aneka Kartika Tours & Travel | Indonesia DMC' },
  '/destinations': { component: DestinationsPage, title: pages.destinations.seoTitle },
  '/programs': { component: ProgramsPage, title: pages.programs.seoTitle },
  '/gallery': { component: GalleryPage, title: pages.gallery.seoTitle },
  '/services': { component: ServicesPage, title: pages.services.seoTitle },
  '/about': { component: AboutPage, title: pages.about.seoTitle },
  '/contact': { component: ContactPage, title: pages.contact.seoTitle },
};

const descriptions: Record<string, string> = {
  '/': 'Indonesia destination management for tour operators and travel agents. Build seamless group journeys with Aneka Kartika Tours, established in 1979.',
  '/destinations': 'Explore Indonesia with a local DMC, from Java and Bali to Sumatra, Kalimantan and Sulawesi. Plan distinctive journeys with Aneka Kartika Tours.',
  '/programs': 'Browse sample Indonesia tour programs for travel trade partners. Adapt routes, timing and experiences with our Surabaya-based local team.',
  '/services': 'Ground handling, FIT travel and tailored group services for overseas tour operators and travel agents across Indonesia.',
  '/about': 'Meet Aneka Kartika Tours, an Indonesian destination management company serving travel trade partners since 1979.',
  '/contact': 'Share your Indonesia group brief with Aneka Kartika Tours. Request a tailored proposal from our local destination team.',
  '/gallery': 'View landscapes, wildlife and local life in Sumatra through the Aneka Kartika Tours photo gallery.',
};
const socialImages: Record<string, string> = {
  '/': '/images/og/home.jpg', '/destinations': '/images/og/destinations.jpg', '/programs': '/images/og/programs.jpg',
  '/services': '/images/og/services.jpg', '/about': '/images/og/about.jpg', '/contact': '/images/og/contact.jpg', '/gallery': '/images/og/gallery.jpg',
};

function setMeta(selector: string, attribute: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(selector.includes('property=') ? 'property' : 'name', selector.match(/(?:name|property)="([^"]+)"/)?.[1] ?? '');
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, value);
}

export default function App() {
  const { path, search } = useLocation();
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path;
  const route = routes[clean];
  const programSlug = clean.startsWith('/programs/') ? clean.slice('/programs/'.length) : '';
  const program = featuredPrograms.find((item) => item.slug === programSlug);
  const destinationSegments = clean.startsWith('/destinations/') ? clean.slice('/destinations/'.length).split('/') : [];
  const destination = destinations.find((item) => item.slug === destinationSegments[0]);
  const destinationRegion = destination ? destinationRegions[destination.slug]?.find((item) => item.slug === destinationSegments[1]) : undefined;
  const validDestinationPath = Boolean(destination && (destinationSegments.length === 1 || destinationRegion && destinationSegments.length === 2));
  const Page = route?.component ?? (program ? ProgramDetailPage : validDestinationPath ? DestinationDetailPage : NotFoundPage);
  const pageTitle = route?.title ?? (program ? `${program.title} | Aneka Kartika Tours & Travel` : destinationRegion ? `${destinationRegion.name} | ${destination?.name} | Aneka Kartika Tours & Travel` : validDestinationPath && destination ? `${destination.name} | Indonesia Destinations | Aneka Kartika Tours & Travel` : 'Page not found | Aneka Kartika Tours & Travel');

  useEffect(() => {
    document.title = pageTitle;
    const program = featuredPrograms.find((item) => clean === `/programs/${item.slug}`);
    const destinationSegments = clean.startsWith('/destinations/') ? clean.slice('/destinations/'.length).split('/') : [];
    const destination = destinations.find((item) => item.slug === destinationSegments[0]);
    const destinationRegion = destination ? destinationRegions[destination.slug]?.find((item) => item.slug === destinationSegments[1]) : undefined;
    const description = (program
      ? `${program.days}-day Indonesia journey from ${program.start} to ${program.finish}, tailored by Aneka Kartika Tours for travel trade partners.`
      : destinationRegion && destination ? `${destinationRegion.description} Plan a tailored ${destination.name} journey with Aneka Kartika Tours.`
        : destination ? `Explore ${destination.name} with Aneka Kartika Tours. Discover distinctive regions and plan a seamless Indonesia journey with our local team.` : descriptions[clean] ?? 'Aneka Kartika Tours & Travel, your local destination management partner in Indonesia since 1979.').slice(0, 155);
    const canonical = `https://www.aneka-tours.co.id${clean === '/' ? '/' : clean}`;
    const image = `https://www.aneka-tours.co.id${destinationRegion?.image ?? destination?.image ?? socialImages[clean] ?? socialImages['/programs']}`;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', image);
    let canonicalTag = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonical;
    let robotsTag = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (clean === '/gallery' || !route && !program && !validDestinationPath) {
      if (!robotsTag) { robotsTag = document.createElement('meta'); robotsTag.name = 'robots'; document.head.appendChild(robotsTag); }
      robotsTag.content = 'noindex, nofollow';
    } else robotsTag?.remove();
    window.scrollTo(0, 0);
  }, [clean, search, pageTitle, route, programSlug]);

  return (
    <>
      {clean === '/' && <IntroScreen />}
      <Header current={clean} />
      {/* key re-mounts the page so scroll animations and pre-filled forms reset on navigation */}
      <main key={clean + search}>
        <Page />
      </main>
      <Footer />
      <Chatbot />
      {clean === '/' && <ScrollArrow />}
    </>
  );
}
