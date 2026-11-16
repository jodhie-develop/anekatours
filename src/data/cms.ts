import { allDestinationAttractions, baliRegion, destinationPagesWithoutContent, javaRegion, type AttractionPageContent } from './destinations';
import { destinations as siteDestinations, featuredPrograms, type FeaturedProgram } from './site';

export type CmsAttraction = Omit<AttractionPageContent, 'heroImage' | 'pairsWith'> & {
  regionSlug: string;
  image: string;
  imageAlt: string;
  pairsText: string;
};

export type CmsProgram = FeaturedProgram & { published?: boolean };
export type CmsDestination = { slug: string; name: string; image: string; imageAlt: string; intro: string[]; metaTitle: string; metaDescription: string; published?: boolean };
export type CmsContent = { destinations: CmsDestination[]; attractions: CmsAttraction[]; programs: CmsProgram[] };

const slugForRegion = (region: string) => region.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function makeCmsSeed(): CmsContent {
  const destinations = siteDestinations.map((destination) => {
    const region = destination.slug === 'java' ? javaRegion : destination.slug === 'bali' ? baliRegion : destinationPagesWithoutContent.find((item) => item.slug === destination.slug);
    return {
      slug: destination.slug,
      name: region ? ('name' in region ? region.name : region.h1) : destination.name,
      image: region?.heroImage?.src || destination.image || '',
      imageAlt: region?.heroImage?.alt || destination.name,
      intro: region?.intro ?? [],
      metaTitle: region?.metaTitle ?? `${destination.name} | Aneka Kartika Tours`,
      metaDescription: region?.metaDescription ?? `Explore ${destination.name} with Aneka Kartika Tours.`,
      published: true,
    };
  });
  const attractions = allDestinationAttractions.map((attraction) => ({
    ...attraction,
    regionSlug: attraction.regionSlug || slugForRegion(attraction.region),
    image: attraction.heroImage?.src || '',
    imageAlt: attraction.heroImage?.alt || attraction.h1,
    pairsText: attraction.pairsWith.map((pair) => pair.text || pair.title || '').filter(Boolean).join('\n'),
  }));
  const programs = featuredPrograms.map((program) => ({ ...program, published: true }));
  return { destinations, attractions, programs };
}

export function toAttractionPage(item: CmsAttraction): AttractionPageContent {
  const { image, imageAlt, pairsText, ...content } = item;
  return {
    ...content,
    regionSlug: item.regionSlug,
    heroImage: image ? { src: image, srcSet: `${image} 1280w`, alt: imageAlt || item.h1 } : null,
    pairsWith: pairsText.trim() ? pairsText.split('\n').map((text) => ({ text: text.trim() })).filter((pair) => pair.text) : [],
  };
}

export function mergeAttractions(overrides: CmsAttraction[], hidden: string[] = []): AttractionPageContent[] {
  const merged = new Map<string, CmsAttraction>();
  for (const item of makeCmsSeed().attractions) merged.set(`${item.regionSlug}/${item.slug}`, item);
  for (const item of overrides) merged.set(`${item.regionSlug}/${item.slug}`, item);
  const hiddenKeys = new Set(hidden);
  return [...merged.values()].filter((item) => item.published !== false && !hiddenKeys.has(`${item.regionSlug}/${item.slug}`)).map(toAttractionPage);
}

export function mergePrograms(overrides: CmsProgram[], hidden: string[] = []): FeaturedProgram[] {
  const merged = new Map<string, CmsProgram>();
  for (const item of makeCmsSeed().programs) merged.set(item.slug, item);
  for (const item of overrides) merged.set(item.slug, item);
  const hiddenSlugs = new Set(hidden);
  return [...merged.values()]
    .filter((item) => item.published !== false && !hiddenSlugs.has(item.slug))
    .map((item) => ({ ...item, supportingImages: item.supportingImages.filter((image) => Boolean(image.image)) }));
}

export function mergeDestinations(overrides: CmsDestination[], hidden: string[] = []): CmsDestination[] {
  const merged = new Map<string, CmsDestination>();
  for (const item of makeCmsSeed().destinations) merged.set(item.slug, item);
  for (const item of overrides) merged.set(item.slug, item);
  const hiddenSlugs = new Set(hidden);
  return [...merged.values()].filter((item) => item.published !== false && !hiddenSlugs.has(item.slug));
}
