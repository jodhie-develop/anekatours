import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const origin = 'https://www.aneka-tours.co.id';
const descriptions = {
  '/': 'Indonesia destination management for tour operators and travel agents. Build seamless group journeys with Aneka Kartika Tours, established in 1979.',
  '/destinations': 'Explore Indonesia with a local DMC, from Java and Bali to Sumatra, Kalimantan and Sulawesi. Plan distinctive journeys with Aneka Kartika Tours.',
  '/programs': 'Browse sample Indonesia tour programs for travel trade partners. Adapt routes, timing and experiences with our Surabaya-based local team.',
  '/services': 'Ground handling, FIT travel and tailored group services for overseas tour operators and travel agents across Indonesia.',
  '/about': 'Meet Aneka Kartika Tours, an Indonesian destination management company serving travel trade partners since 1979.',
  '/contact': 'Share your Indonesia group brief with Aneka Kartika Tours. Request a tailored proposal from our local destination team.',
  '/gallery': 'View landscapes, wildlife and local life in Sumatra through the Aneka Kartika Tours photo gallery.',
  '/admin/chat-leads': 'Private Aneka Kartika chat enquiry administration page.',
};
const titles = {
  '/': 'Aneka Kartika Tours & Travel | Indonesia DMC',
  '/destinations': 'Indonesia Destinations | Aneka Kartika Tours & Travel DMC',
  '/programs': 'Indonesia Group Tour Programs | Aneka Kartika Tours & Travel',
  '/services': 'B2B Group Travel Services | Aneka Kartika Tours & Travel Indonesia',
  '/about': 'About Aneka Kartika Tours & Travel | Indonesia Inbound Tour Operator',
  '/contact': 'Request an Indonesia Group Quote | Aneka Kartika Tours & Travel',
  '/gallery': 'Sumatra Photo Gallery | Aneka Kartika Tours & Travel',
  '/admin/chat-leads': 'Chat Enquiries | Aneka Kartika Admin',
};
const ogImages = {
  '/': '/images/og/home.jpg', '/destinations': '/images/og/destinations.jpg',
  '/programs': '/images/og/programs.jpg', '/services': '/images/og/services.jpg',
  '/about': '/images/og/about.jpg', '/contact': '/images/og/contact.jpg',
  '/gallery': '/images/og/gallery.jpg',
};
const routeInfo = [
  ['/', 'home'], ['/destinations', 'destinations'], ['/programs', 'programs'],
  ['/services', 'services'], ['/about', 'about'], ['/contact', 'contact'], ['/gallery', 'gallery'],
];
const vite = await createServer({ configFile: './vite.config.ts', server: { middlewareMode: true }, appType: 'custom' });
try {
  // Load App first so its router module and the prerender setter share the same SSR module instance.
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const router = await vite.ssrLoadModule('/src/router.tsx');
  const site = await vite.ssrLoadModule('/src/data/site.ts');
  const destinationsData = await vite.ssrLoadModule('/src/data/destinations.ts');
  const template = await readFile('dist/index.html', 'utf8');
  const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const setMeta = (html, attr, key, value) => {
    const escaped = esc(value);
    const re = new RegExp(`<meta\\s+[^>]*${attr}=["']${key}["'][^>]*>`, 'i');
    const tag = `<meta ${attr}="${key}" content="${escaped}" />`;
    return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
  };
  const setCanonical = (html, href) => {
    const tag = `<link rel="canonical" href="${href}" />`;
    return /<link\s+rel=["']canonical["'][^>]*>/i.test(html) ? html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag) : html.replace('</head>', `  ${tag}\n  </head>`);
  };
  const removeMeta = (html, attr, key) => html.replace(new RegExp(`<meta\\s+[^>]*${attr}=["']${key}["'][^>]*>`, 'i'), '');
  const routeTitle = (route, program, attraction, destinationPage) => program ? `${program.title} | Aneka Kartika Tours & Travel` : attraction?.metaTitle ?? destinationPage?.metaTitle ?? titles[route] ?? 'Page not found | Aneka Kartika Tours & Travel';
  const routeDescription = (route, program, attraction, destinationPage) => program ? `${program.days}-day Indonesia journey from ${program.start} to ${program.finish}, tailored by Aneka Kartika Tours for travel trade partners.` : attraction?.metaDescription ?? destinationPage?.metaDescription ?? descriptions[route] ?? 'Aneka Kartika Tours & Travel, your local destination management partner in Indonesia since 1979.';
  const destinationPaths = site.destinations.map((item) => `/destinations/${item.slug}`);
  const javaAttractionPaths = destinationsData.javaAttractions.map((item) => `/destinations/java/${item.slug}`);
  const baliAttractionPaths = destinationsData.baliAttractions.map((item) => `/destinations/bali/${item.slug}`);
  const otherAttractionPaths = destinationsData.otherDestinationRegions.flatMap((region) => region.attractions.filter((item) => item.published !== false).map((item) => `/destinations/${region.slug}/${item.slug}`));
  const attractionPaths = [...javaAttractionPaths, ...baliAttractionPaths, ...otherAttractionPaths];
  const paths = [...routeInfo.map(([url]) => url), '/admin/chat-leads', ...destinationPaths, ...attractionPaths, ...site.featuredPrograms.map((p) => `/programs/${p.slug}`)];
  for (const route of paths) {
    router.setStaticLocation(route);
    const program = site.featuredPrograms.find((item) => route === `/programs/${item.slug}`);
    const destinationSegments = route.startsWith('/destinations/') ? route.slice('/destinations/'.length).split('/') : [];
    const otherRegion = destinationsData.otherDestinationRegions.find((item) => item.slug === destinationSegments[0]);
    const attraction = destinationSegments.length === 2
      ? (destinationSegments[0] === 'java' ? destinationsData.javaAttractions : destinationSegments[0] === 'bali' ? destinationsData.baliAttractions : otherRegion?.attractions ?? []).find((item) => item.slug === destinationSegments[1] && item.published !== false)
      : undefined;
    const destinationPage = destinationSegments.length === 1 && destinationSegments[0] === 'java'
      ? destinationsData.javaRegion
      : destinationSegments.length === 1
        ? destinationSegments[0] === 'bali' ? destinationsData.baliRegion : otherRegion
        : undefined;
    let html = template.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`);
    const title = routeTitle(route, program, attraction, destinationPage);
    const desc = routeDescription(route, program, attraction, destinationPage);
    const imagePath = attraction ? attraction.heroImage?.src : destinationPage?.heroImage?.src ?? ogImages[route] ?? ogImages['/programs'];
    const image = imagePath ? `${origin}${imagePath}` : '';
    html = html.replace(/<title>.*?<\/title>/i, `<title>${esc(title)}</title>`);
    html = setMeta(html, 'name', 'description', desc);
    html = setCanonical(html, `${origin}${route === '/' ? '/' : route}`);
    html = setMeta(html, 'property', 'og:title', title);
    html = setMeta(html, 'property', 'og:description', desc);
    html = image ? setMeta(html, 'property', 'og:image', image) : removeMeta(html, 'property', 'og:image');
    html = setMeta(html, 'property', 'og:url', `${origin}${route}`);
    html = setMeta(html, 'property', 'og:type', 'website');
    html = setMeta(html, 'property', 'og:site_name', 'Aneka Kartika Tours & Travel');
    html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
    html = setMeta(html, 'name', 'twitter:title', title);
    html = setMeta(html, 'name', 'twitter:description', desc);
    html = image ? setMeta(html, 'name', 'twitter:image', image) : removeMeta(html, 'name', 'twitter:image');
    if (route === '/gallery' || route === '/admin/chat-leads') html = setMeta(html, 'name', 'robots', 'noindex, nofollow');
    if (attraction || destinationPage) {
      const breadcrumbs = attraction
        ? ['Home', 'Destinations', attraction.region, attraction.h1.split(':')[0]]
        : ['Home', 'Destinations', destinationPage.h1 ?? destinationPage.name];
      const breadcrumbPaths = attraction
        ? ['/', '/destinations', `/destinations/${attraction.regionSlug ?? (attraction.region === 'Java' ? 'java' : attraction.region === 'Bali' ? 'bali' : destinationSegments[0])}`, route]
        : ['/', '/destinations', route];
      const breadcrumbJson = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs.map((name, index) => ({
          '@type': 'ListItem', position: index + 1, name, item: `${origin}${breadcrumbPaths[index]}`,
        })),
      };
      const schemas = [breadcrumbJson];
      if (attraction) {
        const attractionSchema = {
          '@context': 'https://schema.org', '@type': 'TouristAttraction', name: attraction.h1.split(':')[0],
          description: attraction.metaDescription,
          address: { '@type': 'PostalAddress', addressRegion: attraction.region, addressCountry: 'ID' },
          containedInPlace: { '@type': 'AdministrativeArea', name: attraction.region },
          ...(attraction.heroImage ? { image: `${origin}${attraction.heroImage.src}` } : {}),
        };
        schemas.push(attractionSchema);
        schemas.push({
          '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: attraction.faq.map((item) => ({
            '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        });
      }
      html = html.replace('</head>', `  ${schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`).join('\n  ')}\n  </head>`);
    }
    if (route === '/') {
      // TODO: Add the verified Facebook profile URL to sameAs when supplied by the client.
      const jsonLd = {
        '@context': 'https://schema.org', '@type': 'TravelAgency', name: 'Aneka Kartika Tours & Travel', foundingDate: '1979',
        address: { '@type': 'PostalAddress', streetAddress: 'Jl. Manyar Kertoarjo V-50', addressLocality: 'Surabaya', postalCode: '60285', addressRegion: 'East Java', addressCountry: 'ID' },
        telephone: '+62 31 5929000', email: 'info@aneka-tours.co.id', url: origin,
        logo: `${origin}/images/logo-aneka-kartika.png`,
        sameAs: ['https://www.instagram.com/AnekaKartikaTours', ...(site.FACEBOOK_URL ? [site.FACEBOOK_URL] : [])],
      };
      html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd).replaceAll('<', '\\u003c')}</script>\n  </head>`);
    }
    const output = route === '/' ? 'dist/index.html' : path.join('dist', route.slice(1), 'index.html');
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
  }

  router.setStaticLocation('/missing-page');
  const notFoundHtml = template.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`);
  const title = 'Page not found | Aneka Kartika Tours & Travel';
  let notFound = notFoundHtml.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);
  notFound = setMeta(notFound, 'name', 'robots', 'noindex, nofollow');
  notFound = setMeta(notFound, 'name', 'description', 'The requested page could not be found. Explore Indonesia with Aneka Kartika Tours or request a quote.');
  notFound = setCanonical(notFound, `${origin}/404`);
  await writeFile('dist/404.html', notFound);

  const sitemap = [...routeInfo.filter(([url]) => url !== '/gallery').map(([url]) => url), ...destinationPaths, ...attractionPaths, ...site.featuredPrograms.map((p) => `/programs/${p.slug}`)];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map((url) => `<url><loc>${origin}${url === '/' ? '/' : url}</loc></url>`).join('')}</urlset>`);
} finally {
  await vite.close();
}
