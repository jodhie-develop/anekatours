// All website content lives here. Edit text, images and contact details in this file.
// Values in [SQUARE BRACKETS] are placeholders from the original draft — replace before publishing.

export const company = {
  name: 'aneka kartika tours & travel',
  brandName: 'Aneka Kartika', // name shown in the header logo (public/images/logo-aneka-kartika.png)
  legalName: 'ANEKA KARTIKA TOURS & TRAVEL SERVICES',
  membership: 'Founding Member of Indonesia Specialists Consortium',
  address: 'Jl. Manyar Kertoarjo V-50, Surabaya 60285, Indonesia',
  licence: 'ASITA/02/XII/DPP/1994',
  salesEmail: 'info@aneka-tours.co.id',
  phone: '(62-31) 592 9000',
  fax: '(62-31) 592 8515',
  whatsapp: '62811344980',
  whatsappDisplay: '+62. 811344980',
  footerEmails: [
    { label: 'odjie@aneka-tours.co.id', href: 'odjie@aneka-tours.co.id' },
    { label: 'domestik@aneka-tours.co.id', href: 'domestik@aneka-tours.co.id' },
  ],
  sinceYear: '1979',
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
};

export const intro = {
  statement: 'We work exclusively with tour operators and travel agents.\nYou bring the travellers. We bring Indonesia to life.',
  stats: [
    { value: 24, label: 'years of experience' },
    { value: 2000, label: 'number of clients' },
    { value: 15, label: 'partner countries' },
  ],
};

export type Destination = { name: string; slug: string; image: string };

export const openingPhotos: Destination[] = [
  { name: 'Toba', slug: 'toba9', image: '/images/optimized/toba9.webp' },
  { name: 'Blitar Dancers', slug: 'blitar-dancers', image: '/images/optimized/blitar-dancers.webp' },
  { name: 'Bogor Presidential Palace', slug: 'bogor-presidential-palace', image: '/images/optimized/bogor-presidential-palace.webp' },
  { name: 'Borobudur', slug: 'borobudur-3', image: '/images/optimized/borobudur-3.webp' },
  { name: 'Borobudur', slug: 'borobudur-7', image: '/images/optimized/borobudur-7.webp' },
  { name: 'Bromo', slug: 'bromo-023', image: '/images/optimized/bromo-023.webp' },
  { name: 'Bromo', slug: 'bromo-d', image: '/images/optimized/bromo-d.webp' },
  { name: 'Building', slug: 'building-02', image: '/images/optimized/building-02.webp' },
  { name: 'Ceremony', slug: 'ceremony', image: '/images/optimized/ceremony.webp' },
  { name: 'Cremation', slug: 'cremation', image: '/images/optimized/cremation.webp' },
  { name: 'Daily Life', slug: 'daily-life-19', image: '/images/optimized/daily-life-19.webp' },
  { name: 'Jatiluwih', slug: 'jatiluwih-kk', image: '/images/optimized/jatiluwih-kk.webp' },
  { name: 'Jukung in Sanur', slug: 'jukung-in-sanur', image: '/images/optimized/jukung-in-sanur.webp' },
  { name: 'Kaliandra', slug: 'kaliandra-02', image: '/images/optimized/kaliandra-02.webp' },
  { name: 'Kaliandra', slug: 'kaliandra-04', image: '/images/optimized/kaliandra-04.webp' },
  { name: 'Kid Dancers', slug: 'kid-dancers', image: '/images/optimized/kid-dancers.webp' },
  { name: 'Prambanan', slug: 'prambanan-5', image: '/images/optimized/prambanan-5.webp' },
  { name: 'Rice Fields', slug: 'rice-25', image: '/images/optimized/rice-25.webp' },
  { name: 'Samosir', slug: 'samosir-tree-line', image: '/images/optimized/samosir-tree-line.webp' },
  { name: 'Tanjung Puting', slug: 'tanjung-puting-04', image: '/images/optimized/tanjung-puting-04.webp' },
  { name: 'Traditional Market', slug: 'traditional-market-pabean-01', image: '/images/optimized/traditional-market-pabean-01.webp' },
];

export const heroPhotos = openingPhotos.filter(({ slug }) =>
  ['toba9', 'borobudur-7', 'bromo-023', 'bromo-d', 'jatiluwih-kk', 'prambanan-5', 'rice-25'].includes(slug),
);
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
    title: 'FIT-Individual',
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
    category: 'FIT-Individual',
    image: '/images/east-java.jpg',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
];

export type FeaturedProgram = {
  days: number;
  title: string;
  start: string;
  finish: string;
  image: string;
  description: string;
};

export const featuredPrograms: FeaturedProgram[] = [
  {
    days: 4,
    title: 'East Java discovery',
    start: 'Surabaya Airport',
    finish: 'Bali hotel',
    image: '/images/optimized/bromo-023.webp',
    description:
      "From Surabaya, head east on a journey through East Java's striking volcanic landscapes and rural heartland. Your first encounter is Mount Bromo, where an early morning Jeep ride takes you across the vast Sea of Sand towards a panoramic viewpoint, just in time to witness the first light of day illuminating the surrounding volcanic peaks. Continue to Banyuwangi for a two-night stay, offering a closer look at the region's rural character and traditions. Spend a day wandering through a local village, discovering its coffee plantations and getting acquainted with the daily rhythm of farming life. The next day's adventure takes you into the highlands of Mount Ijen, where dramatic volcanic scenery unfolds around its remarkable turquoise crater lake. After exploring this remarkable landscape, make your way to Ketapang Harbour for a ferry crossing over the Bali Strait. Upon arrival, continue to your selected hotel in Bali, bringing this East Java discovery to a fitting close.",
  },
  {
    days: 8,
    title: 'Java to Bali, Culture & Volcano',
    start: 'Yogyakarta airport',
    finish: 'Bali hotel',
    image: '/images/optimized/borobudur-7.webp',
    description:
      "A journey across Java reveals layers of culture, history and ever-changing landscapes, with Bali just across the strait. Begin in Yogyakarta, the cultural heartland of Java, where centuries-old traditions remain part of everyday life. Discover two of Indonesia's UNESCO World Heritage Sites, Borobudur and Prambanan, explore the Sultan's Palace and visit a local village to see traditional cottage industries still practised by its residents. Leaving Yogyakarta behind, board a scenic train for a memorable ride across Java's heartland to Malang, where you spend the night. Continue towards Mount Bromo, where an early morning Jeep ride takes you across the vast Sea of Sand to catch the first light over its remarkable volcanic landscape. The journey eastwards leads to Kalibaru, a quiet countryside settlement surrounded by plantations. Take a guided walk through a private plantation to discover local crops and produce, before continuing to Banyuwangi. Another early start takes you to Mount Ijen, where a striking turquoise crater lake sits within a vast volcanic caldera. After exploring the highlands, descend towards Ketapang Harbour for the ferry crossing to Bali, bringing your Java overland journey to a close.",
  },
  {
    days: 6,
    title: 'Bali, along the quiet roads',
    start: 'Bali hotel (South)',
    finish: 'Bali hotel (South)',
    image: '/images/optimized/jatiluwih-kk.webp',
    description:
      "There is another side of Bali, found along its quieter roads, in its mountain villages, rice-growing countryside and little coastal hideaways. Leaving your hotel behind, head towards Tanah Lot and the former royal temple of Taman Ayun before continuing inland to Jatiluwih. Here, the landscape opens into magnificent rice terraces, and the night is spent in the peaceful surroundings of the countryside, far from the island's busier corners. The road north takes you through Bedugul and its lakeside temple of Ulun Danu Beratan, before winding through the cool highlands of Munduk, where a short walk brings you to a secluded waterfall. Further north, Pemuteran offers a welcome change of pace, with two nights to enjoy its laid-back coastal setting, perhaps venturing into Bali Barat National Park or simply taking in the tranquillity of the village. The journey back towards South Bali follows a different route, tracing the northern coastline through Singaraja, with time to visit its old Chinese temple and Brahma Vihara-Arama Buddhist monastery. Continue inland to Sidemen, where another two-night stay invites you to enjoy the quieter charms of Bali's eastern countryside, before eventually making your way back to South Bali.",
  },
];

export const team = {
  title: 'Behind every great journey, a dependable local team.',
  highlights: ['Fast quotes', 'Licensed multilingual guides', 'Reliable fleet', '24/7 on-tour support'],
  note: '[SERVICE CAPABILITIES — confirm before publication]',
  photo: '', // e.g. '/images/team.jpg' — leave empty to show the placeholder box
  photoPlaceholder: '[APPROVED PHOTO OF AN ANEKA KARTIKA TOURS & TRAVEL GROUP]',
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
    seoTitle: 'About Aneka Kartika Tours & Travel | Indonesia Inbound Tour Operator',
    title: 'Your people in Indonesia.',
    intro:
      'Aneka Kartika Tours & Travel is an Indonesian inbound tour operator and destination management company for overseas tour operators and travel agents. We help you shape group journeys with local insight and careful coordination.',
    story:
      'Aneka Kartika Tours and Travels began in 1979 in a small office with just five staff members in Surabaya. Today, our 40-person team works from our own three-story building, supported by branch offices, sister companies, and qualified representatives in strategic locations across Indonesia. Experience, dedication, and open-mindedness are the core values that set us apart. Our passionate team crafts programs for individuals and groups from the ground up. With our simple 3E recipe—Explore, Experience, Enjoy—we aim to make every program a memorable experience. International wholesalers and tour operators from more than twelve countries have appointed us as their ground handler. We carefully design each program, handpick the right hotels and resorts, supply well-maintained vehicles and on-site logistics, and provide professional guides to create seamless, authentic travel experiences. For your peace of mind, we are proud to be active members of respected travel associations, including IATA, ASITA, ASTINDO, ASEANTA, and IINTOA.',
    image: '/images/central-java-yogyakarta.jpg',
    ctaTitle: 'A partnership, not a transaction.',
    ctaText:
      'Clear communication, thoughtful route planning and a collaborative approach. Tell us what your clients need, and let’s build the right journey together.',
  },
  services: {
    seoTitle: 'B2B Group Travel Services | Aneka Kartika Tours & Travel Indonesia',
    title: 'Different groups. The same care.',
  },
  destinations: {
    seoTitle: 'Indonesia Destinations | Aneka Kartika Tours & Travel DMC',
    title: 'Many islands. One trusted partner.',
    intro: 'From Java’s volcanic landscapes to Bali’s living traditions, shape the right Indonesia journey for your groups.',
    image: '/images/optimized/daily-life-19.webp',
  },
  programs: {
    seoTitle: 'Indonesia Group Tour Programs | Aneka Kartika Tours & Travel',
    title: 'A starting point for your next journey',
    intro: 'Sample concepts, ready to adapt around your clients. Every itinerary is confirmed through a tailored quotation.',
    filterLabel: 'Choose a group type',
  },
  contact: {
    seoTitle: 'Request an Indonesia Group Quote | Aneka Kartika Tours & Travel',
    title: 'Let’s plan something extraordinary.',
    intro: 'Tell us about your group. Our team will help shape the right Indonesia program for your agency.',
    note: '[FORM EMAIL DELIVERY — connect the sales inbox before publishing]',
  },
};
