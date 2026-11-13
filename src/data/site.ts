// All website content lives here. Edit text, images and contact details in this file.
// TODO: Keep unverified client-facing information out of public pages until confirmed.

// TODO: Menunggu URL profil Facebook resmi dari klien; when supplied, update the JSON-LD SHA-256 source in vercel.json too.
export const FACEBOOK_URL = '';

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

// TODO: Add translated routes and hreflang metadata before restoring ZH/JA language controls.

export const hero = {
  eyebrow: 'Indonesia, through local eyes',
  title: `Your ground partner in Indonesia since ${company.sinceYear}`,
  subtitle: 'Extraordinary places. Seamless group journeys. A local team on your side.',
};

export const intro = {
  statement: 'We work exclusively with tour operators and travel agents.\nYou bring the travellers. We bring Indonesia to life.',
  stats: [
    { value: 24, label: 'years of experience' },
    { value: 2000, suffix: '+', label: 'number of clients' },
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
  { name: 'Children of Candirejo', slug: 'children-of-candirejo', image: '/images/optimized/children-of-candirejo.webp' },
  { name: 'Dagi Hill Picnic', slug: 'dagi-hill-picnic', image: '/images/optimized/dagi-hill-picnic.webp' },
  { name: 'Sunset Sanur', slug: 'sunset-sanur', image: '/images/optimized/sunset-sanur.webp' },
  { name: 'Watu Ulo Jember', slug: 'watu-ulo-jember', image: '/images/optimized/watu-ulo-jember.webp' },
];

export const heroPhotos = openingPhotos.filter(({ slug }) =>
  ['toba9', 'borobudur-7', 'bromo-023', 'bromo-d', 'jatiluwih-kk', 'prambanan-5', 'rice-25'].includes(slug),
);
export const destinations: Destination[] = [
  { name: 'Java', slug: 'java', image: '/images/optimized/bromo-023.webp' },
  { name: 'Bali', slug: 'bali', image: '/images/optimized/bali.webp' },
  { name: 'Lombok & Komodo', slug: 'lombok-komodo', image: '/images/optimized/lombok-komodo.webp' },
  { name: 'Sumatra', slug: 'sumatra', image: '/images/optimized/sumatra-main.webp' },
  { name: 'Sulawesi', slug: 'sulawesi', image: '/images/optimized/sulawesi.webp' },
  { name: 'Kalimantan', slug: 'kalimantan', image: '/images/optimized/tanjung-puting-04.webp' },
];

export type DestinationRegion = Destination & { description: string };
export const destinationRegions: Record<string, DestinationRegion[]> = {
  java: [
    { name: 'East Java', slug: 'east-java', image: '/images/optimized/bromo-d.webp', description: 'Volcanic landscapes, coastal journeys and village life.' },
    { name: 'Central Java', slug: 'central-java', image: '/images/optimized/borobudur-7.webp', description: 'Ancient temples and the cultural heartland around Borobudur.' },
    { name: 'Yogyakarta', slug: 'yogyakarta', image: '/images/optimized/prambanan-5.webp', description: 'Living traditions, local crafts and the temples of Prambanan.' },
    { name: 'West Java', slug: 'west-java', image: '/images/optimized/bogor-presidential-palace.webp', description: 'Highland scenery, tea country and green escapes near Jakarta.' },
  ],
  bali: [
    { name: 'Ubud & Central Bali', slug: 'ubud-central-bali', image: '/images/optimized/jatiluwih-kk.webp', description: 'Rice terraces, village paths and the island’s artistic centre.' },
    { name: 'South Bali', slug: 'south-bali', image: '/images/optimized/jukung-in-sanur.webp', description: 'Coastal stays, seaside mornings and easy access to the island.' },
    { name: 'North & East Bali', slug: 'north-east-bali', image: '/images/optimized/bali.webp', description: 'Quiet coastlines, mountain scenery and traditional communities.' },
  ],
  'lombok-komodo': [
    { name: 'Lombok', slug: 'lombok', image: '/images/optimized/lombok-komodo.webp', description: 'Island landscapes, Sasak culture and routes around Mount Rinjani.' },
    { name: 'Komodo National Park', slug: 'komodo-national-park', image: '/images/optimized/lombok-komodo.webp', description: 'A signature island and marine journey through eastern Indonesia.' },
    { name: 'Flores', slug: 'flores', image: '/images/optimized/lombok-komodo.webp', description: 'A dramatic overland route through highlands and coastal villages.' },
  ],
  sumatra: [
    { name: 'Lake Toba & Samosir', slug: 'lake-toba-samosir', image: '/images/optimized/toba9.webp', description: 'A vast volcanic lake and the heritage of the Batak people.' },
    { name: 'Aceh', slug: 'aceh', image: '/images/optimized/sumatra-main.webp', description: 'Northern landscapes, strong traditions and warm hospitality.' },
    { name: 'West Sumatra', slug: 'west-sumatra', image: '/images/optimized/sumatra-main.webp', description: 'Highland scenery and Minangkabau culture.' },
  ],
  sulawesi: [
    { name: 'South Sulawesi', slug: 'south-sulawesi', image: '/images/optimized/sulawesi.webp', description: 'Coastal journeys and the cultural heritage of the south.' },
    { name: 'Tana Toraja', slug: 'tana-toraja', image: '/images/optimized/ceremony.webp', description: 'Mountain villages and distinctive Torajan traditions.' },
    { name: 'North Sulawesi', slug: 'north-sulawesi', image: '/images/optimized/sulawesi.webp', description: 'Volcanic scenery, island life and rich marine experiences.' },
  ],
  kalimantan: [
    { name: 'Tanjung Puting', slug: 'tanjung-puting', image: '/images/optimized/tanjung-puting-04.webp', description: 'River journeys through rainforest habitat and orangutan conservation areas.' },
    { name: 'Heart of Borneo', slug: 'heart-of-borneo', image: '/images/optimized/tanjung-puting-04.webp', description: 'A remote interior of rainforest, rivers and Indigenous communities.' },
    { name: 'Mahakam River', slug: 'mahakam-river', image: '/images/optimized/tanjung-puting-04.webp', description: 'A river route connecting forest landscapes and riverside communities.' },
  ],
};

export const services = [
  {
    title: 'FIT-Individual',
    text: 'Independent journeys shaped around each traveller’s interests, preferred pace and priorities, with local coordination from arrival to departure.',
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
    image: '/images/optimized/borobudur-7.webp',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
  {
    days: 5,
    title: 'Bali: Beyond the Everyday',
    route: ['Ubud', 'Central Bali', 'South Bali'],
    category: 'MICE & Incentive',
    image: '/images/optimized/bali.webp',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
  {
    days: 4,
    title: 'East Java Discovery',
    route: ['Surabaya', 'Bromo', 'Malang'],
    category: 'FIT-Individual',
    image: '/images/optimized/east-java.webp',
    itineraryUrl: '#',
    pdfUrl: '#',
  },
];

export type FeaturedProgram = {
  slug: string;
  days: number;
  title: string;
  start: string;
  finish: string;
  image: string;
  description: string;
  supportingImages: { image: string; title: string }[];
};

export const featuredPrograms: FeaturedProgram[] = [
  {
    slug: 'east-java-discovery',
    days: 4,
    title: 'East Java Discovery',
    start: 'Surabaya Airport',
    finish: 'Bali hotel',
    image: '/images/optimized/bromo-023.webp',
    supportingImages: [
      { image: '/images/optimized/bromo-023.webp', title: 'Mount Bromo at first light' },
      { image: '/images/optimized/bromo-d.webp', title: 'Bromo volcanic landscape' },
      { image: '/images/optimized/east-java.webp', title: 'East Java highlands' },
      { image: '/images/optimized/rice-25.webp', title: 'Rural Java' },
    ],
    description:
      "From Surabaya, head east on a journey through East Java's striking volcanic landscapes and rural heartland. Your first encounter is Mount Bromo, where an early morning Jeep ride takes you across the vast Sea of Sand towards a panoramic viewpoint, just in time to witness the first light of day illuminating the surrounding volcanic peaks. Continue to Banyuwangi for a two-night stay, offering a closer look at the region's rural character and traditions. Spend a day wandering through a local village, discovering its coffee plantations and getting acquainted with the daily rhythm of farming life. The next day's adventure takes you into the highlands of Mount Ijen, where dramatic volcanic scenery unfolds around its remarkable turquoise crater lake. After exploring this remarkable landscape, make your way to Ketapang Harbour for a ferry crossing over the Bali Strait. Upon arrival, continue to your selected hotel in Bali, bringing this East Java discovery to a fitting close.",
  },
  {
    slug: 'java-to-bali-culture-volcano',
    days: 8,
    title: 'Java to Bali, Culture & Volcano',
    start: 'Yogyakarta airport',
    finish: 'Bali hotel',
    image: '/images/optimized/borobudur-7.webp',
    supportingImages: [
      { image: '/images/optimized/borobudur-7.webp', title: 'Borobudur Temple' },
      { image: '/images/optimized/prambanan-5.webp', title: 'Prambanan Temple' },
      { image: '/images/optimized/bromo-023.webp', title: 'Mount Bromo' },
      { image: '/images/optimized/jatiluwih-kk.webp', title: 'Jatiluwih rice terraces' },
    ],
    description:
      "A journey across Java reveals layers of culture, history and ever-changing landscapes, with Bali just across the strait. Begin in Yogyakarta, the cultural heartland of Java, where centuries-old traditions remain part of everyday life. Discover two of Indonesia's UNESCO World Heritage Sites, Borobudur and Prambanan, explore the Sultan's Palace and visit a local village to see traditional cottage industries still practised by its residents. Leaving Yogyakarta behind, board a scenic train for a memorable ride across Java's heartland to Malang, where you spend the night. Continue towards Mount Bromo, where an early morning Jeep ride takes you across the vast Sea of Sand to catch the first light over its remarkable volcanic landscape. The journey eastwards leads to Kalibaru, a quiet countryside settlement surrounded by plantations. Take a guided walk through a private plantation to discover local crops and produce, before continuing to Banyuwangi. Another early start takes you to Mount Ijen, where a striking turquoise crater lake sits within a vast volcanic caldera. After exploring the highlands, descend towards Ketapang Harbour for the ferry crossing to Bali, bringing your Java overland journey to a close.",
  },
  {
    slug: 'bali-quiet-roads',
    days: 6,
    title: 'Bali, Along the Quiet Roads',
    start: 'Bali hotel (South)',
    finish: 'Bali hotel (South)',
    image: '/images/optimized/jatiluwih-kk.webp',
    supportingImages: [
      { image: '/images/optimized/jatiluwih-kk.webp', title: 'Jatiluwih rice terraces' },
      { image: '/images/optimized/rice-25.webp', title: 'Bali countryside' },
      { image: '/images/optimized/jukung-in-sanur.webp', title: 'Sanur coast' },
      { image: '/images/optimized/bali.webp', title: 'Bali landscapes' },
    ],
    description:
      "There is another side of Bali, found along its quieter roads, in its mountain villages, rice-growing countryside and little coastal hideaways. Leaving your hotel behind, head towards Tanah Lot and the former royal temple of Taman Ayun before continuing inland to Jatiluwih. Here, the landscape opens into magnificent rice terraces, and the night is spent in the peaceful surroundings of the countryside, far from the island's busier corners. The road north takes you through Bedugul and its lakeside temple of Ulun Danu Beratan, before winding through the cool highlands of Munduk, where a short walk brings you to a secluded waterfall. Further north, Pemuteran offers a welcome change of pace, with two nights to enjoy its laid-back coastal setting, perhaps venturing into Bali Barat National Park or simply taking in the tranquillity of the village. The journey back towards South Bali follows a different route, tracing the northern coastline through Singaraja, with time to visit its old Chinese temple and Brahma Vihara-Arama Buddhist monastery. Continue inland to Sidemen, where another two-night stay invites you to enjoy the quieter charms of Bali's eastern countryside, before eventually making your way back to South Bali.",
  },
];

// TODO: Confirm that the East Java Discovery route should end at a Bali hotel; its current route metadata is retained.

// TODO: Add a partner testimonial and attribution after the client provides approved copy.

export const quote = {
  title: 'Your next Indonesia journey starts here.',
  subtitle: 'Share your group brief with our team. We’ll work with you on an itinerary built around your clients.',
  hotelClasses: ['3 star', '4 star', '5 star'],
};

// ---------- Subpages ----------

export const pages = {
  about: {
    seoTitle: 'About Aneka Kartika Tours & Travel | Indonesia Inbound Tour Operator',
    title: 'Your people in Indonesia.',
    intro:
      'Aneka Kartika Tours & Travel is an Indonesian inbound tour operator and destination management company for overseas tour operators and travel agents. We help you shape group journeys with local insight and careful coordination.',
    story: [
      {
        heading: 'Our Story',
        paragraphs: [
          'In 1979, we began with a small office in Surabaya and a simple belief: the best way to show people Indonesia is to know it well, and to look after those who trust you with their guests.',
          'That office has grown into Aneka Kartika Tours, an established Indonesian Destination Management Company with our own three-storey headquarters, branch offices, sister companies and trusted representatives across the archipelago. Yet we still work as we did then: we listen first, then build each programme from the ground up around you and your clients.',
        ],
      },
      {
        heading: 'Explore. Experience. Engage.',
        paragraphs: ['Three words guide everything we plan, because a trip should leave people with more than photographs.'],
        points: [
          { lead: 'Explore', text: ' begins with curiosity, taking travellers beyond the familiar stops.' },
          { lead: 'Experience', text: ' means being part of the day, not just passing through.' },
          { lead: 'Engage', text: ' is what people remember longest: a conversation with a guide who grew up in the village, a shared laugh with a craftsman. Places stay with you, but it is the people who bring you back.' },
        ],
      },
      {
        heading: 'The people who trust us',
        paragraphs: [
          'Wholesalers and tour operators from more than fifteen countries have placed their clients in our care, and we never take that lightly. From carefully chosen hotels and well-maintained vehicles to professional local guides, we watch the details so each journey runs smoothly and keeps its true character.',
          'We are proud to be active members of IATA, ASITA, ASTINDO and IINTOA.',
        ],
      },
    ],
    image: '/images/optimized/central-java-yogyakarta.webp',
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
  gallery: {
    seoTitle: 'Sumatra Photo Gallery | Aneka Kartika Tours & Travel',
    title: 'Sumatra, in pictures.',
    intro: 'Explore the landscapes, wildlife and local life of Sumatra. Select a photo to view it in full size.',
  },
  contact: {
    seoTitle: 'Request an Indonesia Group Quote | Aneka Kartika Tours & Travel',
    title: 'Let’s plan something extraordinary.',
    intro: 'Tell us about your group. Our team will help shape the right Indonesia program for your agency.',
  },
};
