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
};
const titles = {
  '/': 'Aneka Kartika Tours & Travel | Indonesia DMC',
  '/destinations': 'Indonesia Destinations | Aneka Kartika Tours & Travel DMC',
  '/programs': 'Indonesia Group Tour Programs | Aneka Kartika Tours & Travel',
  '/services': 'B2B Group Travel Services | Aneka Kartika Tours & Travel Indonesia',
  '/about': 'About Aneka Kartika Tours & Travel | Indonesia Inbound Tour Operator',
  '/contact': 'Request an Indonesia Group Quote | Aneka Kartika Tours & Travel',
  '/gallery': 'Sumatra Photo Gallery | Aneka Kartika Tours & Travel',
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
  const routeTitle = (route, program, destination, region) => program ? `${program.title} | Aneka Kartika Tours & Travel` : region && destination ? `${region.name} | ${destination.name} | Aneka Kartika Tours & Travel` : destination ? `${destination.name} | Indonesia Destinations | Aneka Kartika Tours & Travel` : titles[route] ?? 'Page not found | Aneka Kartika Tours & Travel';
  const routeDescription = (route, program, destination, region) => program ? `${program.days}-day Indonesia journey from ${program.start} to ${program.finish}, tailored by Aneka Kartika Tours for travel trade partners.` : region && destination ? `${region.description} Plan a tailored ${destination.name} journey with Aneka Kartika Tours.` : destination ? `Explore ${destination.name} with Aneka Kartika Tours. Discover distinctive regions and plan a seamless Indonesia journey with our local team.` : descriptions[route] ?? 'Aneka Kartika Tours & Travel, your local destination management partner in Indonesia since 1979.';
  const destinationPaths = site.destinations.map((item) => `/destinations/${item.slug}`);
  const destinationRegionPaths = site.destinations.flatMap((destination) => (site.destinationRegions[destination.slug] ?? []).map((region) => `/destinations/${destination.slug}/${region.slug}`));
  const paths = [...routeInfo.map(([url]) => url), ...destinationPaths, ...destinationRegionPaths, ...site.featuredPrograms.map((p) => `/programs/${p.slug}`)];
  for (const route of paths) {
    router.setStaticLocation(route);
    const program = site.featuredPrograms.find((item) => route === `/programs/${item.slug}`);
    const destinationSegments = route.startsWith('/destinations/') ? route.slice('/destinations/'.length).split('/') : [];
    const destination = site.destinations.find((item) => item.slug === destinationSegments[0]);
    const region = destination ? (site.destinationRegions[destination.slug] ?? []).find((item) => item.slug === destinationSegments[1]) : undefined;
    let html = template.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`);
    const title = routeTitle(route, program, destination, region);
    const desc = routeDescription(route, program, destination, region).slice(0, 155);
    const image = `${origin}${region?.image ?? destination?.image ?? ogImages[route] ?? ogImages['/programs']}`;
    html = html.replace(/<title>.*?<\/title>/i, `<title>${esc(title)}</title>`);
    html = setMeta(html, 'name', 'description', desc);
    html = setCanonical(html, `${origin}${route === '/' ? '/' : route}`);
    html = setMeta(html, 'property', 'og:title', title);
    html = setMeta(html, 'property', 'og:description', desc);
    html = setMeta(html, 'property', 'og:image', image);
    html = setMeta(html, 'property', 'og:url', `${origin}${route}`);
    html = setMeta(html, 'property', 'og:type', 'website');
    html = setMeta(html, 'property', 'og:site_name', 'Aneka Kartika Tours & Travel');
    html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
    html = setMeta(html, 'name', 'twitter:title', title);
    html = setMeta(html, 'name', 'twitter:description', desc);
    html = setMeta(html, 'name', 'twitter:image', image);
    if (route === '/gallery') html = setMeta(html, 'name', 'robots', 'noindex, nofollow');
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

  const sitemap = [...routeInfo.filter(([url]) => url !== '/gallery').map(([url]) => url), ...destinationPaths, ...destinationRegionPaths, ...site.featuredPrograms.map((p) => `/programs/${p.slug}`)];
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemap.map((url) => `<url><loc>${origin}${url === '/' ? '/' : url}</loc></url>`).join('')}</urlset>`);
} finally {
  await vite.close();
}
