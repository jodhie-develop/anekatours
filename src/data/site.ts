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
  subtitle: 'Extraordinary places. Seamless journeys. A local team on your side.',
};

export const intro = {
  statement: 'We work exclusively with tour operators and travel agents.\nYou bring the travellers. We bring Indonesia to life.',
  stats: [
    { value: 24, label: 'years of experience' },
    { value: 128432, label: 'number of clients' },
    { value: 15, suffix: '+', label: 'partner countries' },
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
  { name: 'Lombok & Gili Islands', slug: 'lombok-gili-islands', image: '/images/optimized/gili-islands-1-1280.webp' },
  { name: 'Komodo & Flores', slug: 'komodo-flores', image: '/images/optimized/lombok-komodo.webp' },
  { name: 'Sumatra', slug: 'sumatra', image: '/images/optimized/sumatra-main.webp' },
  { name: 'Sulawesi', slug: 'sulawesi', image: '/images/optimized/sulawesi.webp' },
  { name: 'Kalimantan', slug: 'kalimantan', image: '/images/optimized/tanjung-puting-04.webp' },
  { name: 'Moluccas', slug: 'moluccas', image: '' },
  { name: 'West Papua', slug: 'west-papua', image: '' },
];

export const services = [
  {
    title: 'FIT-Individual',
    text: 'Independent journeys shaped around each traveller’s interests, preferred pace and priorities, with local coordination from arrival to departure.',
  },
  {
    title: 'Groups',
    text: 'Journeys shaped around your clients’ interests, pace and priorities, from first idea to final departure.',
  },
  {
    title: 'MICE & Incentive',
    text: 'Thoughtfully designed journeys, locally supported and tailored to every occasion.',
  },
  {
    title: 'Students & Educational Tours',
    text: 'Purposeful learning journeys for student groups, with educational visits, cultural encounters and local coordination.',
  },
  {
    title: 'Special Interest',
    text: 'Journeys shaped around a shared passion, with local experiences and practical coordination tailored to each group’s interests.',
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
    category: 'Groups',
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
  days: number | null;
  title: string;
  start: string;
  finish: string;
  image: string | null;
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
  {
    slug: 'java-rail-odyssey',
    days: 12,
    title: 'The Java Rail Odyssey',
    start: 'Jakarta airport',
    finish: 'Bali hotel',
    image: '/images/optimized/daily-life-19.webp',
    supportingImages: [
      { image: '/images/optimized/borobudur-7.webp', title: 'Borobudur Temple' },
      { image: '/images/optimized/prambanan-5.webp', title: 'Prambanan Temple' },
      { image: '/images/optimized/bromo-023.webp', title: 'Mount Bromo' },
      { image: '/images/optimized/rice-25.webp', title: 'Java rice fields' },
    ],
    description:
      "Travel across Java from west to east, taking in its historic cities, cultural landmarks and changing landscapes along the way. Start in Jakarta with a walk through the old quarter before boarding Southeast Asia’s first high-speed train to Bandung. Explore the city's colonial streets on foot and venture into the nearby volcanic highlands. From here, take the train across Central Java, passing rice fields, villages and countryside en route to Yogyakarta. Spend three nights discovering the region’s heritage, from Borobudur and Prambanan to the Sultan’s Palace. Continue east to Surabaya for a walk through its old quarter, then head inland to Bromo for an early morning view of its remarkable volcanic scenery. The railway journey continues to Banyuwangi, where a visit to a nearby village offers a glimpse of local life and plantation traditions. Having crossed Java from end to end, head to Bali for two final nights by the coast, with time to slow down and enjoy a change of pace.",
  },
  {
    slug: 'bugis-toraja-south-sulawesi',
    days: 5,
    title: 'Bugis & Toraja – A Journey into South Sulawesi',
    start: 'Makassar Airport',
    finish: 'Makassar Airport',
    image: '/images/destinations/tana-toraja-1280.webp',
    supportingImages: [],
    description:
      "Step into two distinct worlds of South Sulawesi, from the lakeside traditions of the Bugis to the remarkable cultural heritage of the Toraja highlands. Leaving Makassar, travel inland to Sengkang, the heartland of the Bugis, with a stop at Bantimurung Waterfall along the way. When lake conditions allow, take a boat across Lake Tempe to visit the floating villages and meet the families who make their living on the water. Continue north through changing landscapes to Tana Toraja, a land of fascinating customs and ancestral traditions. Discover its iconic Tongkonan houses, cliffside burial grounds guarded by Tau Tau effigies and the unusual baby graves carved into living trees. Further into the highlands, the rice terraces and mountain villages around Batu Tumonga offer a glimpse of everyday Torajan life. A short journey, yet a fascinating introduction to one of Indonesia's most distinctive cultural regions.",
  },
  {
    slug: 'north-sulawesi-crater-coral-reefs',
    days: 6,
    title: 'North Sulawesi – Between Crater and Coral Reefs',
    start: 'Manado Airport',
    finish: 'Manado Airport',
    image: null,
    supportingImages: [],
    description:
      "Your North Sulawesi story begins in Manado, as the afternoon drifts through the lantern-lit lanes of Chinatown and the centuries-old Ban Hin Kiong Temple. Beyond the city, a statue of Christ hovers above the bay, and as the light softens, Makatete Hill unveils its finest view: Bunaken, Siladen and Mount Klabat resting against the sea. Next morning leads you into the cool Minahasa highlands. You walk to the rim of steaming Mt. Mahawu, watch village makers tap sugar palm sap for a spirit older than memory, and wander among the weathered stone Waruga tombs, where the story of the Minahasa people was first written. Lunch is a quiet pause beside Lake Linow, its sulphur waters shifting from jade to turquoise.\n\nThen comes the sea. A short boat ride delivers you to Bunaken Island, one of the world’s celebrated marine parks, where three unhurried days of full board are entirely your own. Optional activity available such as dive the reef walls, float above the coral, or simply linger with the horizon. When it is time to leave, the boat carries you back to Manado, and on to your flight",
  },
  {
    slug: 'into-the-heart-of-borneo',
    days: 4,
    title: 'Into the Heart of Borneo – Orangutan & Rainforest Discovery',
    start: 'Pangkalan Bun Airport',
    finish: 'Pangkalan Bun Airport',
    image: '/images/destinations/tanjung-puting-1280.webp',
    supportingImages: [],
    description:
      "Imagine drifting along a winding jungle river, where mist rises above the water, ancient trees form a lush green canopy, and the sounds of the rainforest become your constant companion. Your adventure begins in Pangkalan Bun, followed by a short transfer to Kumai Harbour, where you board a traditional river boat and cruise along the Sekonyer River to Rimba Lodge, your peaceful retreat in the heart of the rainforest.\n\nOver the next two days, journey deeper into Tanjung Puting National Park, first exploring Camp Leakey, then continuing upstream to Pondok Tanggui and the Pasalat reforestation area. Along the way, encounter Borneo's fascinating wildlife, observe orangutans during their feeding programme, and learn about efforts to restore the rainforest. After two unforgettable days immersed in nature, cruise back to Kumai and spend your final night in Pangkalan Bun before departing for your next destination.",
  },
  {
    slug: 'north-sumatra-orangutans-highlands-batak-heritage',
    days: 6,
    title: 'North Sumatra: Orangutans, Highlands & Batak Heritage',
    start: 'Medan Airport',
    finish: 'Medan Airport',
    image: '/images/optimized/huta-raja-siallagan-danau-toba.webp',
    supportingImages: [
      { image: '/images/destinations/bukit-lawang-1280.webp', title: 'Gunung Leuser rainforest' },
      { image: '/images/destinations/berastagi-1280.webp', title: 'Brastagi highlands' },
      { image: '/images/optimized/huta-raja-siallagan-danau-toba.webp', title: 'Huta Raja and Siallagan, Lake Toba' },
      { image: '/images/destinations/samosir-island-1280.webp', title: 'Samosir Island' },
    ],
    description:
      "From the bustling streets of Medan, head into the countryside towards Bohorok, passing small towns, local markets and extensive rubber and oil palm plantations along the way. Here, the pace changes as you venture into the rainforest of Gunung Leuser National Park for a guided jungle trek. Follow forest trails through dense vegetation and hilly terrain, keeping watch for wild orangutans, gibbons, leaf monkeys, macaques and an abundance of birdlife. After returning to Medan, travel north into the cool highlands of Brastagi, with the volcanic peaks of Sinabung and Sibayak as your backdrop. Along the way, visit traditional Karo villages, discover places of worship with distinctive architecture and admire the spectacular Sipiso-piso Waterfall. The journey then leads to Lake Toba, where a ferry crossing brings you to Samosir Island. Spend time exploring Batak Toba villages, ancient stone meeting places and royal tombs, with a leisurely walk through local communities offering a closer look at island life. Return to Medan with a wonderful mix of rainforest encounters, highland scenery and cultural discoveries behind you.",
  },
  {
    slug: 'sumatra-overland-exploring-north-west-sumatra',
    days: 9,
    title: 'Sumatra Overland: Exploring North & West Sumatra',
    start: 'Medan Airport',
    finish: 'Padang Airport',
    image: '/images/destinations/sumatra-1280.webp',
    supportingImages: [
      { image: '/images/destinations/bukit-lawang-1280.webp', title: 'Gunung Leuser rainforest' },
      { image: '/images/destinations/berastagi-1280.webp', title: 'Brastagi highlands' },
      { image: '/images/optimized/huta-raja-siallagan-danau-toba.webp', title: 'Batak heritage at Lake Toba' },
      { image: '/images/destinations/samosir-island-1280.webp', title: 'Samosir Island' },
    ],
    description:
      "Begin in Medan and head into the countryside of North Sumatra, passing small towns, traditional markets and seemingly endless rubber and oil palm plantations on the way to Bohorok. The following morning, venture into the rainforest of Gunung Leuser, where jungle trails, towering trees and the possibility of spotting orangutans make for an exciting walk through the forest. From the lowlands, climb towards Brastagi, where cooler air, volcanic peaks and traditional Karo villages mark a change of scenery. Continue past the towering Sipiso-piso Waterfall to Parapat, then cross Lake Toba by ferry to Samosir Island. Spend time exploring Batak Toba villages, ancient stone sites and the everyday rhythm of island life. The road south takes you through rural towns and plantation landscapes before reaching the Minangkabau highlands of West Sumatra. In Bukittinggi, wander through lively markets, admire the distinctive traditional architecture and take in the vast Sianok Canyon. From here, descend through the highlands towards Padang where this journey ends.",
  },
  {
    slug: 'bali-nusa-lembongan-two-sides-of-bali',
    days: 9,
    title: 'Bali & Nusa Lembongan: The Two Sides of Bali',
    start: 'Bali airport',
    finish: 'Bali airport',
    image: '/images/optimized/bali-nusa-lembongan-01.webp',
    supportingImages: [
      { image: '/images/optimized/bali-nusa-lembongan-02.webp', title: 'Bali & Nusa Lembongan landscape' },
      { image: '/images/optimized/bali-nusa-lembongan-03.webp', title: 'Nusa Lembongan at sunset' },
      { image: '/images/optimized/bali-nusa-lembongan-04.webp', title: 'Bali & Nusa Lembongan landscape' },
    ],
    description:
      "Begin your Bali escape with two nights by the southern coast, leaving room to unwind before the island reveals its charms. One afternoon, head to Uluwatu, where the temple stands dramatically above the Indian Ocean. As the sun sinks towards the horizon, take your seat for the mesmerising Kecak Dance, its chorus of voices and hundreds of performers bringing an ancient tale to life against a glowing dusk sky.\n\nJourney inland via Mengwi and the iconic sea temple of Tanah Lot before settling into Ubud. Discover Eastern Bali's quieter treasures, from the royal water gardens of Tirta Gangga and Taman Ujung to a village where old traditions remain part of everyday life. Another day, take to two wheels for a leisurely ride through Ubud's countryside.\n\nThen trade the mainland for Nusa Lembongan, reached by fast boat, and enjoy three nights at island pace, with little on the agenda beyond sea breezes, turquoise waters and time well spent. Return to mainland for your onward flight.",
  },
];

// TODO: Confirm that the East Java Discovery route should end at a Bali hotel; its current route metadata is retained.

// TODO: Add a partner testimonial and attribution after the client provides approved copy.

export const quote = {
  title: 'Your next Indonesia journey starts here.',
  subtitle: "Every journey starts with an idea. Share yours with us, and we'll help turn it into an unforgettable experience.",
  hotelStars: ['3', '4', '5'],
  hotelTypes: ['Boutique', 'Heritage'],
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
    title: 'Every journey. Every traveler. Same exceptional care.',
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
