// All website content lives here. Edit text, images and contact details in this file.
// Values in [SQUARE BRACKETS] are placeholders from the original draft — replace before publishing.

export const company = {
  name: 'aneka tours',
  brandName: 'Aneka Kartika', // name shown in the header logo (public/images/logo-aneka-kartika.png)
  legalName: '[COMPANY LEGAL NAME]',
  address: '[OFFICE ADDRESS]',
  licence: '[LICENCE NUMBER]',
  salesEmail: '[SALES EMAIL]',
  phone: '[PHONE]',
  whatsapp: '[WHATSAPP NUMBER]', // international format without "+", e.g. 6281234567890
  sinceYear: '[YEAR]',
};

export const navLinks = [
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tour Programs', href: '/programs' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const languages = ['EN', 'ZH', 'JA'];

export const hero = {
  eyebrow: 'Indonesia, through local eyes',
  title: `Your ground partner in Indonesia since ${company.sinceYear}`,
  subtitle: 'Extraordinary places. Seamless group journeys. A local team on your side.',
  image: '/images/east-java.jpg',
  // Video revealed through the "AT" letters on scroll. Put the file in public/videos/.
  // Until it exists, the image above is shown instead.
  video: '/videos/hero.mp4',
  // Text on the cover layer, around the cut-out letters
  revealLetters: 'AT',
  revealEyebrow: 'Aneka Tours · Indonesia DMC',
  revealTagline: 'Indonesia, crafted for your groups',
};

export const intro = {
  statement:
    'We work exclusively with tour operators and travel agents. You bring the travellers. We bring Indonesia to life.',
  stats: [
    { value: 24, label: 'years of experience' },
    { value: 2000, label: 'clients per year' },
    { value: 15, label: 'partner countries' },
  ],
};

export type Destination = { name: string; slug: string; image: string };

export const destinations: Destination[] = [
  { name: 'East Java', slug: 'east-java', image: '/images/east-java.jpg' },
  { name: 'Central Java & Yogyakarta', slug: 'central-java-yogyakarta', image: '/images/central-java-yogyakarta.jpg' },
  { name: 'Bali', slug: 'bali', image: '/images/bali.jpg' },
  { name: 'Lombok & Komodo', slug: 'lombok-komodo', image: '/images/lombok-komodo.jpg' },
  { name: 'Sumatra', slug: 'sumatra', image: '/images/sumatra.jpg' },
  { name: 'Sulawesi', slug: 'sulawesi', image: '/images/sulawesi.jpg' },
];

export const services = [
  {
    title: 'Group Series',
    text: 'Thoughtfully coordinated departures, consistent delivery and practical planning for your recurring group business.',
  },
  {
    title: 'Tailor-made Groups',
    text: 'Journeys shaped around your clients’ interests, pace and priorities, from first idea to final departure.',
  },
  {
    title: 'MICE & Incentive',
    text: 'Memorable settings and locally coordinated experiences for meetings, rewards and incentive groups.',
  },
  {
    title: 'Student & Special Interest',
    text: 'Purposeful encounters for curious travellers, with educational, cultural and specialist interests at the heart.',
  },
];

export type Program = {
  days: number;
  title: string;
  route: string[];
  category: string;
  image: string;
  itineraryUrl: string;
  pdfUrl: string;
};

export const programs: Program[] = [
  {
    days: 8,
    title: 'Java to Bali: Culture & Volcanoes',
    route: ['Yogyakarta', 'Bromo', 'Ubud'],
    category: 'Tailor-made Groups',
    image: '/images/east-java.jpg',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
  {
    days: 5,
    title: 'Bali: Beyond the Everyday',
    route: ['Ubud', 'Central Bali', 'South Bali'],
    category: 'MICE & Incentive',
    image: '/images/bali.jpg',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
  {
    days: 4,
    title: 'East Java Discovery',
    route: ['Surabaya', 'Bromo', 'Malang'],
    category: 'Group Series',
    image: '/images/east-java.jpg',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
];

export const team = {
  title: 'Behind every great journey, a dependable local team.',
  highlights: ['Fast quotes', 'Licensed multilingual guides', 'Reliable fleet', '24/7 on-tour support'],
  note: '[SERVICE CAPABILITIES — confirm before publication]',
  photo: '', // e.g. '/images/team.jpg' — leave empty to show the placeholder box
  photoPlaceholder: '[APPROVED PHOTO OF AN ANEKA TOURS GROUP]',
};

export const testimonial = {
  title: 'Good journeys begin with good partnerships.',
  quote: '[TESTIMONIAL FROM A PARTNER AGENT]',
  author: '[AGENT NAME] · [AGENCY] · [COUNTRY]',
  logosNote: '[VERIFIED ASSOCIATION AND PARTNER LOGOS]',
};

export const quote = {
  title: 'Your next Indonesia journey starts here.',
  subtitle: 'Share your group brief with our team. We’ll work with you on an itinerary built around your clients.',
  hotelClasses: ['3 star', '4 star', '5 star'],
  note: '[QUOTE FORM — submission and sales inbox setup required before publication]',
};

// ---------- Subpages ----------

export const pages = {
  about: {
    seoTitle: 'About Aneka Tours | Indonesia Inbound Tour Operator',
    title: 'Your people in Indonesia.',
    intro:
      'Aneka Tours is an Indonesian inbound tour operator and destination management company for overseas tour operators and travel agents. We help you shape group journeys with local insight and careful coordination.',
    story: '[COMPANY STORY] · Founded [YEAR] · [TEAM AND OFFICE DETAILS]',
    image: '/images/central-java-yogyakarta.jpg',
    ctaTitle: 'A partnership, not a transaction.',
    ctaText:
      'Clear communication, thoughtful route planning and a collaborative approach. Tell us what your clients need, and let’s build the right journey together.',
  },
  services: {
    seoTitle: 'B2B Group Travel Services | Aneka Tours Indonesia',
    title: 'Different groups. The same care.',
  },
  destinations: {
    seoTitle: 'Indonesia Destinations | Aneka Tours DMC',
    title: 'Many islands. One trusted partner.',
    intro: 'From Java’s volcanic landscapes to Bali’s living traditions, shape the right Indonesia journey for your groups.',
    image: '/images/sulawesi.jpg',
  },
  programs: {
    seoTitle: 'Indonesia Group Tour Programs | Aneka Tours',
    title: 'A starting point for your next journey',
    intro: 'Sample concepts, ready to adapt around your clients. Every itinerary is confirmed through a tailored quotation.',
    filterLabel: 'Choose a group type',
  },
  contact: {
    seoTitle: 'Request an Indonesia Group Quote | Aneka Tours',
    title: 'Let’s plan something extraordinary.',
    intro: 'Tell us about your group. Our team will help shape the right Indonesia program for your agency.',
    note: '[FORM EMAIL DELIVERY — connect the sales inbox before publishing]',
  },
};
