import { useEffect, type ComponentType } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useLocation } from './router';
import { pages } from './data/site';
import { AboutPage, ContactPage, DestinationsPage, HomePage, NotFoundPage, ProgramsPage, ServicesPage } from './pages';

const routes: Record<string, { component: ComponentType; title: string }> = {
  '/': { component: HomePage, title: 'Aneka Kartika Tours & Travel | Indonesia DMC' },
  '/destinations': { component: DestinationsPage, title: pages.destinations.seoTitle },
  '/programs': { component: ProgramsPage, title: pages.programs.seoTitle },
  '/services': { component: ServicesPage, title: pages.services.seoTitle },
  '/about': { component: AboutPage, title: pages.about.seoTitle },
  '/contact': { component: ContactPage, title: pages.contact.seoTitle },
};

export default function App() {
  const { path, search } = useLocation();
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path;
  const route = routes[clean];
  const Page = route?.component ?? NotFoundPage;

  useEffect(() => {
    document.title = route?.title ?? 'Page not found | Aneka Kartika Tours & Travel';
    window.scrollTo(0, 0);
  }, [clean, search, route]);

  return (
    <>
      <Header current={clean} />
      {/* key re-mounts the page so scroll animations and pre-filled forms reset on navigation */}
      <main key={clean + search}>
        <Page />
      </main>
      <Footer />
    </>
  );
}
