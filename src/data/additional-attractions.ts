import type { AttractionPageContent, DestinationImage } from './destinations';

type AttractionDraft = {
  region: string;
  regionSlug: string;
  slug: string;
  name: string;
  summary: string;
  intro: [string, string];
  highlights: { title: string; text: string }[];
  image?: DestinationImage;
  pair?: { name: string; slug: string };
  bestTime?: string[];
  logistics?: { challenge: string; solution: string }[];
};

const makeAttraction = (draft: AttractionDraft): AttractionPageContent => ({
  region: draft.region,
  regionSlug: draft.regionSlug,
  slug: draft.slug,
  published: true,
  metaTitle: `${draft.name} Group Tours | ${draft.region} | Aneka Kartika`,
  metaDescription: `${draft.summary} Plan a group visit with Aneka Kartika Tours, your local Indonesia travel partner.`,
  h1: draft.name,
  heroImage: draft.image ?? null,
  intro: draft.intro,
  highlights: draft.highlights,
  experience: [
    `We shape ${draft.name} visits around group pace, interests and the wider route.`,
    'Local transport, guiding and visit timing are coordinated as part of one itinerary.',
    'Our team confirms current access arrangements and local guidance before travel.',
  ],
  bestTime: draft.bestTime ?? [
    'Weather, access and local schedules can vary through the year. We check current conditions for the requested travel dates before confirming the programme.',
    'For a more comfortable group visit, we plan outdoor activities around the day’s conditions and leave room for a flexible pace.',
  ],
  logistics: draft.logistics ?? [
    {
      challenge: 'Road travel and local access.',
      solution: 'We confirm realistic transfer times with local suppliers and sequence visits to suit the group’s arrival and departure plans.',
    },
    {
      challenge: 'Different walking abilities.',
      solution: 'We discuss walking distances and access requirements with the agent in advance and adapt the visit plan where possible.',
    },
    {
      challenge: 'Local customs and site guidance.',
      solution: 'Guests receive a briefing on respectful conduct and any current site instructions before arrival.',
    },
  ],
  pairsWith: draft.pair
    ? [{ title: draft.pair.name, text: ' for a wider regional itinerary.', href: `/destinations/${draft.regionSlug}/${draft.pair.slug}`, before: 'Combine with ' }]
    : [{ text: `Our team can combine ${draft.name} with other suitable places in ${draft.region}.` }],
  faq: [
    {
      question: `How can ${draft.name} fit into a group itinerary?`,
      answer: `We recommend the visit length and sequence after reviewing the group profile, arrival point and other places planned in ${draft.region}.`,
    },
    {
      question: 'Can the visit be adapted for different group needs?',
      answer: 'Yes. Share mobility, timing and special-interest requirements with us so we can confirm suitable arrangements with local suppliers.',
    },
  ],
  cta: `Planning ${draft.name} for your clients? Share your dates and group profile, and our team will shape a suitable programme.`,
});

const bogorImage: DestinationImage = {
  src: '/images/optimized/bogor-presidential-palace.webp',
  srcSet: '/images/optimized/bogor-presidential-palace.webp 1280w',
  alt: 'Bogor Presidential Palace and grounds',
};
const rinjaniImage: DestinationImage = {
  src: '/images/optimized/lombok-rinjani-1280.webp',
  srcSet: '/images/optimized/lombok-rinjani-640.webp 640w, /images/optimized/lombok-rinjani-1280.webp 1280w',
  alt: 'Mount Rinjani rising above the green landscape of Lombok',
};
const sendangGileImage: DestinationImage = {
  src: '/images/optimized/sendang-gile-waterfall-1280.webp',
  srcSet: '/images/optimized/sendang-gile-waterfall-640.webp 640w, /images/optimized/sendang-gile-waterfall-1280.webp 1280w',
  alt: 'Sendang Gile waterfall in a tropical forest near Senaru',
};
const tiuKelepImage: DestinationImage = {
  src: '/images/optimized/tiu-kelep-waterfall-1280.webp',
  srcSet: '/images/optimized/tiu-kelep-waterfall-640.webp 640w, /images/optimized/tiu-kelep-waterfall-1280.webp 1280w',
  alt: 'Tiu Kelep waterfall surrounded by forest near Senaru',
};
const tangkahanImage: DestinationImage = {
  src: '/images/optimized/tangkahan-river-1280.webp',
  srcSet: '/images/optimized/tangkahan-river-640.webp 640w, /images/optimized/tangkahan-river-1280.webp 1280w',
  alt: 'River landscape in Tangkahan, North Sumatra',
};

// TODO: Add approved location-specific photos for Jakarta, Baduy Village, Sukuh Temple, Solo and Semarang.
export const additionalJavaAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'jakarta', name: 'Jakarta: Indonesia’s Capital City', summary: 'Explore Jakarta’s national landmarks, historic quarters and contemporary city life.',
    intro: ['Jakarta brings together Indonesia’s national institutions, historic neighbourhoods and a fast-moving modern city. A guided visit can connect the capital’s layered past with the country guests encounter throughout their journey.', 'For groups, Jakarta works as an arrival, departure or short city stay, with visits arranged around flight times and the interests of the travellers.'],
    highlights: [{ title: 'The historic old town.', text: 'Explore Kota Tua and its preserved colonial-era public spaces.' }, { title: 'National landmarks.', text: 'Include key civic and cultural landmarks according to opening hours and group interests.' }, { title: 'A city of many communities.', text: 'Discover the capital through its neighbourhoods, food and everyday life.' }],
    pair: { name: 'Bogor', slug: 'bogor' },
  }),
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'bogor', name: 'Bogor: Gardens and Highland Heritage', summary: 'Visit Bogor’s botanical gardens, historic architecture and cooler highland surroundings.', image: bogorImage,
    intro: ['Bogor offers a green pause south of Jakarta, known for its botanical gardens and historic setting. Its cooler surroundings make it a natural contrast to the capital’s busy streets.', 'A visit can focus on the gardens and city heritage or serve as a stop on a wider West Java route, subject to traffic and the group’s schedule.'],
    highlights: [{ title: 'Bogor Botanical Gardens.', text: 'Walk through a major botanical collection in the heart of the city.' }, { title: 'Presidential Palace views.', text: 'See the palace grounds from designated public areas.' }, { title: 'A change of pace.', text: 'Enjoy a greener setting before or after time in Jakarta.' }],
    pair: { name: 'Jakarta', slug: 'jakarta' },
  }),
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'baduy-village', name: 'Baduy Village: Living Sundanese Tradition', summary: 'Meet the Baduy community through a respectful, locally guided cultural visit.',
    intro: ['The Baduy community in Banten maintains distinctive customs and a close relationship with its surrounding landscape. A visit is an opportunity to learn through local guidance and careful attention to community protocols.', 'The experience requires sensitivity: routes, photography and access may be restricted, particularly in areas with stricter customary rules. We confirm what is appropriate before proposing a visit.'],
    highlights: [{ title: 'Community-led interpretation.', text: 'Learn about local traditions from guides familiar with community expectations.' }, { title: 'Walking routes.', text: 'Experience the landscape on foot at a pace agreed with the group.' }, { title: 'Respectful cultural exchange.', text: 'Follow local guidance on photography, access and visitor conduct.' }],
    logistics: [{ challenge: 'Customary access rules.', solution: 'We reconfirm permitted routes and visitor protocols with local contacts before travel.' }, { challenge: 'Walking conditions.', solution: 'The visit involves walking; route length and terrain are discussed with the agent in advance.' }, { challenge: 'Photography and privacy.', solution: 'Guests are briefed to follow community guidance and ask before taking photographs.' }],
    pair: { name: 'Jakarta', slug: 'jakarta' },
  }),
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'sukuh-temple', name: 'Sukuh Temple: A Javanese Hillside Sanctuary', summary: 'Discover Sukuh Temple’s distinctive stepped architecture in the hills of Central Java.',
    intro: ['Sukuh Temple stands on the slopes of Mount Lawu in Central Java and is known for its distinctive stepped form and stone reliefs. Its setting and architecture offer a different perspective on Java’s temple heritage.', 'A visit is usually planned with nearby cultural stops and requires a road transfer into the highlands. We confirm site access and travel timing for the selected date.'],
    highlights: [{ title: 'Distinctive temple architecture.', text: 'Explore a compact sanctuary with a stepped profile unlike Java’s better-known temple complexes.' }, { title: 'Stone reliefs and sculptures.', text: 'Observe carved details while following site rules.' }, { title: 'Mount Lawu setting.', text: 'Experience the temple’s hillside location as part of a Central Java route.' }],
    pair: { name: 'Solo', slug: 'solo' },
  }),
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'solo', name: 'Solo: Royal Heritage and Batik', summary: 'Explore Surakarta’s royal heritage, batik traditions and historic city centre.',
    intro: ['Solo, also known as Surakarta, is a Central Java city shaped by court traditions, craft and commerce. Its royal sites and batik culture provide a strong cultural complement to visits in Yogyakarta and the surrounding highlands.', 'The city can be explored at a measured pace, with visits selected around opening schedules and the group’s interests.'],
    highlights: [{ title: 'Royal heritage.', text: 'Discover the city’s palace traditions through selected heritage sites.' }, { title: 'Batik workshops and markets.', text: 'Learn about a craft closely associated with Central Java.' }, { title: 'Historic city streets.', text: 'Explore neighbourhoods, local markets and traditional food.' }],
    pair: { name: 'Sukuh Temple', slug: 'sukuh-temple' },
  }),
  makeAttraction({
    region: 'Java', regionSlug: 'java', slug: 'semarang', name: 'Semarang: Old Town and Sam Poo Kong', summary: 'Explore Semarang’s historic districts, Chinese-Indonesian heritage and landmark temples.',
    intro: ['Semarang combines a historic old town with a rich mix of Javanese, Chinese and colonial influences. Its heritage sites make the city a rewarding stop between Central Java’s cultural centres.', 'A group visit can connect the old town with Sam Poo Kong and other selected landmarks, with the route adjusted for traffic and opening hours.'],
    highlights: [{ title: 'Kota Lama.', text: 'Walk through the historic quarter and its restored buildings.' }, { title: 'Sam Poo Kong.', text: 'Visit a landmark temple complex associated with Semarang’s Chinese-Indonesian heritage.' }, { title: 'Local food culture.', text: 'Discover Central Javanese dishes and city market life.' }],
    pair: { name: 'Solo', slug: 'solo' },
  }),
];

// TODO: Add approved location-specific photos for Pemuteran, Sidemen and Bedugul.
export const additionalBaliAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Bali', regionSlug: 'bali', slug: 'pemuteran', name: 'Pemuteran: A Quiet Coastal Village', summary: 'Discover northwest Bali’s calm coastline, marine conservation and nearby island waters.',
    intro: ['Pemuteran offers a quieter coastal setting in northwest Bali, with a village atmosphere, surrounding hills and access to marine experiences. Community-led reef restoration is part of the area’s local conservation story.', 'The village pairs well with a slower north Bali itinerary. Boat and marine activities are planned according to sea conditions and the group’s experience.'],
    highlights: [{ title: 'Biorock reef restoration.', text: 'Learn about community-supported coral restoration and its underwater structures.' }, { title: 'Snorkelling and diving.', text: 'Explore coastal waters with local operators, subject to conditions and ability.' }, { title: 'A quieter coastline.', text: 'Enjoy a more relaxed pace away from southern Bali’s busier resort areas.' }],
    pair: { name: 'Bedugul', slug: 'bedugul' },
  }),
  makeAttraction({
    region: 'Bali', regionSlug: 'bali', slug: 'sidemen', name: 'Sidemen: Bali’s Rural East', summary: 'Experience East Bali’s village landscapes, rice-growing valleys and views towards Mount Agung.',
    intro: ['Sidemen is a rural valley in East Bali where village life and cultivated landscapes shape the visitor experience. Walking routes offer a closer look at the surrounding countryside and daily rhythms.', 'A stay in Sidemen suits travellers looking for a slower cultural interlude between Bali’s coastal areas and eastern heritage sites.'],
    highlights: [{ title: 'Rice-growing landscapes.', text: 'Walk through cultivated valleys and village paths with a local guide.' }, { title: 'Traditional craft and daily life.', text: 'Meet local makers where visits are welcomed and arranged respectfully.' }, { title: 'Mount Agung views.', text: 'On clear days, the landscape opens towards Bali’s highest volcano.' }],
    pair: { name: 'Ubud', slug: 'ubud' },
  }),
  makeAttraction({
    region: 'Bali', regionSlug: 'bali', slug: 'nusa-lembongan', name: 'Nusa Lembongan: Island Time', summary: 'Enjoy Nusa Lembongan’s coastal scenery, village life and marine experiences.',
    intro: ['Nusa Lembongan offers a smaller-island contrast to mainland Bali, with coastal scenery, local villages and a relaxed pace. The island can be explored by road, on foot or through selected water activities.', 'Fast-boat transfers connect the island with Bali, and the schedule is planned with sea conditions, luggage handling and onward flights in mind.'],
    highlights: [{ title: 'Island coastline.', text: 'Discover viewpoints and bays around the island with a local driver.' }, { title: 'Mangrove waterways.', text: 'Explore the island’s mangrove setting through locally arranged boat trips.' }, { title: 'Marine activities.', text: 'Snorkelling and other water activities can be arranged with suitable operators.' }],
    image: { src: '/images/optimized/bali-nusa-lembongan-01.webp', srcSet: '/images/optimized/bali-nusa-lembongan-01.webp 737w', alt: 'Green island landscape in Nusa Lembongan' },
    logistics: [{ challenge: 'Fast-boat schedules.', solution: 'We select crossings around the group’s itinerary and confirm current operator schedules before travel.' }, { challenge: 'Luggage and island transfers.', solution: 'Port transfers and luggage handling are coordinated with the hotel and boat operator.' }, { challenge: 'Sea conditions.', solution: 'Crossing plans are checked against operator advice and current conditions.' }],
    pair: { name: 'Ubud', slug: 'ubud' },
  }),
  makeAttraction({
    region: 'Bali', regionSlug: 'bali', slug: 'bedugul', name: 'Bedugul: Lakes and Highland Temples', summary: 'Explore Bali’s central highlands, Lake Beratan and Ulun Danu Beratan Temple.',
    intro: ['Bedugul is a highland area in central Bali known for its lakes, gardens and temple setting. Cooler upland scenery makes it a natural pause between southern Bali and the north of the island.', 'Visits can include Lake Beratan and Ulun Danu Beratan Temple, with timing adapted to weather, traffic and the group’s route.'],
    highlights: [{ title: 'Lake Beratan.', text: 'Enjoy the lake and surrounding highland landscape.' }, { title: 'Ulun Danu Beratan Temple.', text: 'Visit the lakeside temple complex and learn about its cultural setting.' }, { title: 'Central highland gardens.', text: 'Add a garden or market stop when it suits the group’s interests.' }],
    pair: { name: 'Pemuteran', slug: 'pemuteran' },
  }),
];

// TODO: Add an approved Selong Belanak beach photo; the supplied Lombok photos cover Mount Rinjani and the two Senaru waterfalls.
export const additionalLombokAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Lombok & Gili Islands', regionSlug: 'lombok-gili-islands', slug: 'selong-belanak', name: 'Selong Belanak: Lombok’s Open Beach', summary: 'Visit Selong Belanak, a broad sandy beach on Lombok’s southern coast.',
    intro: ['Selong Belanak is a beach on Lombok’s southern coast, known for its broad shoreline and open coastal views. It offers a relaxed contrast to the island’s mountain and village experiences.', 'The beach can be included in a South Lombok route, with swimming and surf activities arranged according to conditions and local operator advice.'],
    highlights: [{ title: 'A wide sandy shoreline.', text: 'Enjoy the open beach and coastal scenery.' }, { title: 'Beginner surf setting.', text: 'Surf lessons may be arranged with local providers when conditions allow.' }, { title: 'South Lombok villages.', text: 'Combine the coast with nearby local stops on a private group route.' }],
    pair: { name: 'Gili Islands', slug: 'gili-islands' },
  }),
  makeAttraction({
    region: 'Lombok & Gili Islands', regionSlug: 'lombok-gili-islands', slug: 'sendang-gile-waterfall', name: 'Sendang Gile Waterfall: Senaru’s Forest Cascade', summary: 'Walk to Sendang Gile waterfall near Senaru in North Lombok.',
    intro: ['Sendang Gile is a forest waterfall near Senaru in North Lombok, close to the Mount Rinjani area. A marked approach leads visitors through a lush setting to the cascade.', 'The visit can be combined with Tiu Kelep and a Senaru village stop. Walking routes and conditions are checked with local guides before the group sets out.'],
    highlights: [{ title: 'A forest waterfall.', text: 'See the cascade framed by tropical vegetation.' }, { title: 'Senaru village.', text: 'Pair the waterfall with a locally guided introduction to the village and its mountain setting.' }, { title: 'A North Lombok nature stop.', text: 'Include the falls in a wider route around Senaru and Mount Rinjani.' }],
    image: sendangGileImage,
    logistics: [{ challenge: 'Steps and uneven paths.', solution: 'We check route conditions and discuss walking ability before confirming the visit.' }, { challenge: 'Rain and water conditions.', solution: 'Local guides advise on safe access and any temporary restrictions.' }, { challenge: 'Combining both waterfalls.', solution: 'Sendang Gile and Tiu Kelep can be sequenced together when time and group fitness allow.' }],
    pair: { name: 'Tiu Kelep Waterfall', slug: 'tiu-kelep-waterfall' },
  }),
  makeAttraction({
    region: 'Lombok & Gili Islands', regionSlug: 'lombok-gili-islands', slug: 'tiu-kelep-waterfall', name: 'Tiu Kelep Waterfall: A Forest Walk in Senaru', summary: 'Trek through forest paths to Tiu Kelep waterfall near Senaru.',
    intro: ['Tiu Kelep is a waterfall reached by a forest walk from Senaru in North Lombok. The route passes through a lush landscape and may include shallow-water crossings, depending on current conditions.', 'The outing is best planned with a local guide and a realistic allowance for walking. It can be combined with nearby Sendang Gile for groups comfortable with a longer visit.'],
    highlights: [{ title: 'The main cascade.', text: 'See the waterfall framed by the forested slopes of North Lombok.' }, { title: 'A guided forest route.', text: 'Walk with a local guide familiar with the current path and water conditions.' }, { title: 'Senaru’s mountain setting.', text: 'Combine the waterfall with village and Mount Rinjani foothill scenery.' }],
    image: tiuKelepImage,
    logistics: [{ challenge: 'Uneven trail and water crossings.', solution: 'We confirm current route conditions with local guides and advise guests to wear secure, non-slip footwear.' }, { challenge: 'Different fitness levels.', solution: 'The walk is discussed with the agent in advance; a shorter Senaru visit can be planned for guests who do not join.' }, { challenge: 'Changing weather.', solution: 'The guide checks local conditions and may alter or cancel the walk for safety.' }],
    pair: { name: 'Sendang Gile Waterfall', slug: 'sendang-gile-waterfall' },
  }),
];

export const additionalSumatraAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Sumatra', regionSlug: 'sumatra', slug: 'bohorok', name: 'Bohorok: Gateway to Gunung Leuser', summary: 'Explore the Bohorok area and rainforest access near Bukit Lawang.',
    intro: ['Bohorok is associated with the rainforest gateway around Bukit Lawang in North Sumatra. The area provides access to guided walks in the Gunung Leuser landscape and a chance to learn about the region’s wildlife and conservation.', 'A visit is planned with local guides, with route length and activity level matched to the group. Wildlife sightings are never guaranteed.'],
    highlights: [{ title: 'Rainforest walks.', text: 'Explore forest trails with a local guide and learn about the surrounding ecosystem.' }, { title: 'Wildlife observation.', text: 'Look for local wildlife while keeping a respectful distance; sightings vary.' }, { title: 'Bohorok River setting.', text: 'Enjoy the river landscape and village surroundings near the forest.' }],
    image: { src: '/images/destinations/bukit-lawang-1280.webp', srcSet: '/images/destinations/bukit-lawang-640.webp 640w, /images/destinations/bukit-lawang-1280.webp 1280w', alt: 'Rainforest landscape near Bukit Lawang and Bohorok' },
    pair: { name: 'Tangkahan', slug: 'tangkahan' },
  }),
  makeAttraction({
    region: 'Sumatra', regionSlug: 'sumatra', slug: 'tangkahan', name: 'Tangkahan: River and Rainforest', summary: 'Discover Tangkahan’s river landscape and community-based forest experiences.',
    intro: ['Tangkahan lies in North Sumatra’s Gunung Leuser landscape, where rainforest, rivers and community-based tourism shape the visitor experience. The area offers a nature-focused complement to the cultural and lakeside stops elsewhere in the region.', 'Activities are arranged with local providers and selected for the group’s interests, with current access and conservation guidance confirmed before travel.'],
    highlights: [{ title: 'Tangkahan River.', text: 'Experience the river setting and surrounding forest.' }, { title: 'Guided rainforest walks.', text: 'Explore with local guides and learn about the area’s natural environment.' }, { title: 'Community-based tourism.', text: 'Meet local hosts and understand how visitors can support responsible tourism.' }],
    image: tangkahanImage,
    logistics: [{ challenge: 'Rural road access.', solution: 'We confirm transfer conditions with local suppliers and allow a flexible schedule.' }, { challenge: 'River and forest activities.', solution: 'Activities follow local guide advice and current weather and water conditions.' }, { challenge: 'Wildlife interaction.', solution: 'We prioritize observation at a respectful distance and follow conservation guidance.' }],
    pair: { name: 'Bohorok', slug: 'bohorok' },
  }),
];

// TODO: Add an approved location-specific photo for Luwuk & Banggai.
export const additionalSulawesiAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Sulawesi', regionSlug: 'sulawesi', slug: 'luwuk-banggai', name: 'Luwuk & Banggai: Island and Coastal Landscapes', summary: 'Explore Luwuk and the surrounding Banggai coastal and island region.',
    intro: ['Luwuk is a gateway to the Banggai region of Central Sulawesi, where coastal landscapes and offshore islands create a different side of Sulawesi travel. Routes can combine the town with selected nature and island visits.', 'Because transfers depend on local transport and sea conditions, the itinerary is planned around confirmed schedules and the group’s available time.'],
    highlights: [{ title: 'Luwuk town.', text: 'Use the coastal town as a base for regional visits.' }, { title: 'Banggai island scenery.', text: 'Explore selected island and coastal landscapes with local operators.' }, { title: 'A less-travelled region.', text: 'Build a slower, nature-led itinerary with time for transfers.' }],
    pair: { name: 'Tana Toraja', slug: 'tana-toraja' },
    logistics: [{ challenge: 'Multiple transport connections.', solution: 'We verify current flight, road and boat schedules before fixing the sequence.' }, { challenge: 'Sea conditions.', solution: 'Island transfers are planned with local operator guidance and contingency time.' }, { challenge: 'Remote-area services.', solution: 'Accommodation and meals are confirmed early to match the group’s requirements.' }],
  }),
];

// TODO: Add approved location-specific photos for Kelimutu, Wae Rebo and Sumba.
export const additionalKomodoAttractions: AttractionPageContent[] = [
  makeAttraction({
    region: 'Komodo & Flores', regionSlug: 'komodo-flores', slug: 'kelimutu', name: 'Kelimutu: Flores’ Three Crater Lakes', summary: 'Visit Kelimutu National Park and its three volcanic crater lakes in Flores.',
    intro: ['Kelimutu is known for three crater lakes set within a volcanic landscape in central Flores. The changing appearance of the lakes gives the area a distinctive natural character.', 'The visit is usually planned from the Ende or Moni area and involves an early start and walking. Access and weather are checked before the programme is confirmed.'],
    highlights: [{ title: 'Three crater lakes.', text: 'View the distinct lakes from designated viewpoints.' }, { title: 'Volcanic highland scenery.', text: 'Experience a different landscape from Flores’s coastal and island routes.' }, { title: 'Local Lio culture.', text: 'Add a respectful introduction to communities and traditions around the park.' }],
    pair: { name: 'Wae Rebo', slug: 'wae-rebo' },
    logistics: [{ challenge: 'Early departure and walking.', solution: 'We advise guests on the start time, walking surface and clothing for the highland conditions.' }, { challenge: 'Weather and visibility.', solution: 'The viewpoint experience depends on conditions; the guide adjusts timing where possible.' }, { challenge: 'Overland distances.', solution: 'We sequence Kelimutu with suitable overnight stops rather than compressing long drives.' }],
  }),
  makeAttraction({
    region: 'Komodo & Flores', regionSlug: 'komodo-flores', slug: 'wae-rebo', name: 'Wae Rebo: A Traditional Mountain Village', summary: 'Trek to Wae Rebo and experience its traditional village setting in Flores.',
    intro: ['Wae Rebo is a mountain village in Flores known for its distinctive traditional houses and strong community identity. Reaching the village involves an uphill walk through a forested landscape.', 'Visits are arranged with local hosts and should be paced with respect for village customs, overnight capacity and the physical needs of the group.'],
    highlights: [{ title: 'Traditional village architecture.', text: 'See the village’s distinctive communal houses with local interpretation.' }, { title: 'A guided mountain walk.', text: 'Reach the village on foot with a local guide and a steady pace.' }, { title: 'Community hospitality.', text: 'Experience an overnight or day visit according to local arrangements.' }],
    pair: { name: 'Kelimutu', slug: 'kelimutu' },
    logistics: [{ challenge: 'A steep walk to the village.', solution: 'We discuss fitness and mobility in advance and set an appropriate walking pace.' }, { challenge: 'Limited village capacity.', solution: 'Visits and overnight stays are requested ahead and confirmed with local hosts.' }, { challenge: 'Respecting community protocols.', solution: 'Guests are briefed on local customs, photography and appropriate conduct.' }],
  }),
  makeAttraction({
    region: 'Komodo & Flores', regionSlug: 'komodo-flores', slug: 'sumba', name: 'Sumba: Traditions and Open Landscapes', summary: 'Discover Sumba’s traditional settlements, cultural heritage and distinctive landscapes.',
    intro: ['Sumba offers a strong sense of place through traditional settlements, ancestral heritage and broad open landscapes. Experiences vary across the island, making route planning important for groups with limited time.', 'A programme can focus on cultural visits, countryside and coast, with local guidance used to arrange respectful access to villages and ceremonial sites.'],
    highlights: [{ title: 'Traditional villages.', text: 'Visit selected settlements with local interpretation and respect for community protocols.' }, { title: 'Open countryside.', text: 'Travel through Sumba’s distinctive rural landscapes.' }, { title: 'Local craft and heritage.', text: 'Discover weaving and cultural traditions through community-led visits.' }],
    pair: { name: 'Komodo National Park', slug: 'komodo-national-park' },
    logistics: [{ challenge: 'Distances across the island.', solution: 'We keep the route focused and confirm road conditions and travel time with local suppliers.' }, { challenge: 'Community access.', solution: 'Visits are arranged with local hosts and follow current customary guidance.' }, { challenge: 'Limited transport schedules.', solution: 'We align the programme with confirmed flight schedules and allow contingency time.' }],
  }),
];
