import { useEffect, type ComponentType } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import Chatbot from './components/Chatbot';
import { useLocation } from './router';
import { featuredPrograms, pages } from './data/site';
import { AboutPage, ContactPage, DestinationsPage, GalleryPage, HomePage, NotFoundPage, ProgramDetailPage, ProgramsPage, ServicesPage } from './pages';

const routes: Record<string, { component: ComponentType; title: string }> = {
  '/': { component: HomePage, title: 'Aneka Kartika Tours & Travel | Indonesia DMC' },
  '/destinations': { component: DestinationsPage, title: pages.destinations.seoTitle },
  '/programs': { component: ProgramsPage, title: pages.programs.seoTitle },
  '/gallery': { component: GalleryPage, title: pages.gallery.seoTitle },
  '/services': { component: ServicesPage, title: pages.services.seoTitle },
  '/about': { component: AboutPage, title: pages.about.seoTitle },
  '/contact': { component: ContactPage, title: pages.contact.seoTitle },
};

export default function App() {
  const { path, search } = useLocation();
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path;
  const route = routes[clean];
  const programSlug = clean.startsWith('/programs/') ? clean.slice('/programs/'.length) : '';
  const program = featuredPrograms.find((item) => item.slug === programSlug);
  const Page = route?.component ?? (program ? ProgramDetailPage : NotFoundPage);
  const pageTitle = route?.title ?? (program ? `${program.title} | Aneka Kartika Tours & Travel` : 'Page not found | Aneka Kartika Tours & Travel');

  useEffect(() => {
    document.title = pageTitle;
    window.scrollTo(0, 0);
  }, [clean, search, pageTitle]);

  return (
    <>
      <IntroScreen />
      <Header current={clean} />
      {/* key re-mounts the page so scroll animations and pre-filled forms reset on navigation */}
      <main key={clean + search}>
        <Page />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
