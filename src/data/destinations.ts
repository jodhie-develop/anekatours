export type DestinationImage = {
  src: string;
  srcSet: string;
  alt: string;
};

export type DestinationPairing = {
  segments?: { text: string; href?: string }[];
  title?: string;
  text?: string;
  href?: string;
  before?: string;
};

export type AttractionPageContent = {
  region: string;
  regionSlug?: string;
  slug: string;
  published?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: DestinationImage | null;
  intro: string[];
  highlights: { title: string; text: string }[];
  experience: string[];
  bestTime: string[];
  logistics: { challenge: string; solution: string }[];
  pairsWith: DestinationPairing[];
  faq: { question: string; answer: string }[];
  cta: string;
};

export type DestinationRegionContent = {
  region: string;
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: DestinationImage;
  intro: string[];
  attractions: AttractionPageContent[];
};

export const javaRegion = {
  region: 'Java',
  slug: 'java',
  metaTitle: 'Java Group Tours | Indonesia DMC | Aneka Kartika',
  metaDescription: 'Explore Mount Bromo, Ijen Crater, Borobudur, Prambanan and Yogyakarta with Aneka Kartika Tours.',
  h1: 'Java',
  heroImage: {
    src: '/images/destinations/mount-bromo-1280.webp',
    srcSet: '/images/destinations/mount-bromo-640.webp 640w, /images/destinations/mount-bromo-1280.webp 1280w',
    alt: 'Mount Bromo, Batok and Semeru at sunrise above the Sea of Sand',
  },
  // TODO: client review
  intro: ['Explore Java’s volcanic landscapes and historic temples through Mount Bromo, Ijen Crater, Borobudur, Prambanan and Yogyakarta. These five places can be combined in a Java programme shaped around your travellers.'],
};

export const javaAttractions: AttractionPageContent[] = [
  {
    region: 'Java',
    slug: 'mount-bromo',
    metaTitle: 'Mount Bromo Group Tours | East Java DMC | Aneka Kartika',
    metaDescription: 'Mount Bromo sunrise tours for groups of up to 20, run by an East Java ground handler since 1979. Jeeps, permits, guides and 3–5★ hotels handled.',
    h1: 'Mount Bromo: Sunrise Over the Sea of Sand',
    heroImage: {
      src: '/images/destinations/mount-bromo-1280.webp',
      srcSet: '/images/destinations/mount-bromo-640.webp 640w, /images/destinations/mount-bromo-1280.webp 1280w',
      alt: 'Mount Bromo, Batok and Semeru at sunrise above the Sea of Sand',
    },
    intro: [
      'Few places in Indonesia leave a group as quiet as the Tengger caldera at first light. Mount Bromo, an active volcano rising from a ten-kilometre sea of volcanic sand, sits inside Bromo Tengger Semeru National Park, with Mount Semeru, the highest peak on Java, smoking on the horizon behind it.',
      'For tour operators, Bromo is the signature moment of any East Java itinerary. It is also our home ground: Aneka Kartika has been operating from Surabaya since 1979, and Bromo is the destination our team knows best. The park lies around three to four hours by road from Surabaya or Malang, so it pairs naturally with Ijen Crater to the east, or with Yogyakarta and Bali on a longer overland journey.',
    ],
    highlights: [
      { title: 'Sunrise viewpoints.', text: 'Watch dawn break over Bromo, Batok and Semeru from Penanjakan or one of the quieter ridges nearby.' },
      { title: '4x4 across the Sea of Sand.', text: 'Jeeps carry the group across the caldera floor to the foot of the volcano.' },
      { title: 'The crater rim.', text: 'Walk or ride a Tengger horse to the base of the cone, then climb a stairway of roughly 250 steps to look into the steaming crater (when access is open).' },
      { title: 'Savanna and Whispering Sands.', text: 'Green hills and wind-sculpted dunes on the southern side of the caldera, especially photogenic after the rains.' },
      { title: 'Tengger culture.', text: 'One of Java’s last Hindu highland communities, with the Pura Luhur Poten temple standing alone in the caldera.' },
    ],
    experience: [
      'An English-speaking guide stays with the group from the first pick-up to the final drop-off, briefing guests the evening before the sunrise start.',
      'Programmes are designed for groups of up to 20 guests, with jeeps allocated so that every guest has a window seat.',
      'Hotels from 3 to 5 stars, chosen to fit the brief: simple mountain lodges on the crater rim for those who want the shortest drive at 3 a.m., or more comfortable hotels lower down the mountain for a slightly earlier start.',
      'Because East Java is where we are based, we can react quickly when park rules, weather or volcanic activity change.',
    ],
    bestTime: [
      'The dry season, roughly April to October, gives the clearest sunrises. July and August are the busiest months, with European summer holidays and domestic travellers arriving together, so expect crowds at the main viewpoint.',
      'From November to March, mornings are often cloudy and afternoons wet, but the savanna turns green and the park is much quieter. Temperatures before dawn can drop to single digits all year round, so warm layers are essential.',
      'The park closes for a few days each year for Tengger ceremonies such as Yadnya Kasada, as well as for Nyepi and short recovery periods. The dates are announced annually, and we check every request against that calendar before confirming.',
    ],
    logistics: [
      { challenge: 'Coaches cannot enter the caldera.', solution: 'Guests transfer to 4x4 jeeps at the park edge. We plan 4–5 guests per jeep for comfort (the maximum is 6), so a group of 20 travels in 4–5 jeeps booked in advance through the local jeep operators.' },
      { challenge: 'A 3 a.m. start in the cold.', solution: 'Wake-up calls, hot drinks before departure and a warm-clothing checklist sent to the agent before arrival. Jackets, gloves and hats can also be bought locally.' },
      { challenge: 'Crowds at Penanjakan in peak season.', solution: 'We use alternative viewpoints on the same ridge and adjust departure times so the group is not stuck in a queue of jeeps.' },
      { challenge: 'Volcanic activity and exclusion zones.', solution: 'Bromo is monitored by Indonesia’s volcanology agency (PVMBG). When the crater rim is closed, the programme shifts to the viewpoints, the Sea of Sand and the savanna, and the agent is informed before departure.' },
      { challenge: 'Few hotels close to the rim.', solution: 'We block rooms early, can split larger groups across neighbouring properties, or base the group lower down the mountain in 4–5★ hotels.' },
      { challenge: 'Dust and walking at altitude.', solution: 'Masks against volcanic dust are provided. Horses are available for the walk to the stairway, and guests with limited mobility can enjoy the sunrise and jeep tour without climbing.' },
    ],
    pairsWith: [
      { title: 'East Java Discovery (4 days · Surabaya, Bromo, Malang)', text: '', href: '/programs/east-java-discovery' },
      { title: 'Java to Bali: Culture & Volcanoes (8 days · Yogyakarta, Bromo, Ubud)', text: '', href: '/programs/java-to-bali-culture-volcano' },
      { title: 'Ijen Crater', text: ' for a classic two-volcano journey before crossing to Bali.', href: '/destinations/java/ijen-crater', before: 'Combine with ' },
    ],
    faq: [
      { question: 'How many nights does a group need at Bromo?', answer: 'One night close to the park is enough for the sunrise and jeep tour. Add a second night if you want time for the savanna, Tengger villages or a slower pace before the drive to Ijen.' },
      { question: 'Is Mount Bromo safe to visit?', answer: 'Bromo is an active volcano under continuous monitoring. The park stays open at normal alert levels, with exclusion zones around the crater when needed. We follow official recommendations and adjust the programme if conditions change.' },
      { question: 'Can older travellers join?', answer: 'Yes. The jeeps do most of the work, and the climb to the crater rim is optional. Horses are available for the walk across the sand.' },
      { question: 'Are park fees included in your quotation?', answer: 'Yes. National park entrance fees, jeeps and guiding are included in our quotations at the foreign-visitor rate valid on the travel date.' },
    ],
    cta: 'Planning Bromo for your next group? Send us your travel dates, group size and preferred hotel category, and our team will build a programme around your clients.',
  },
  {
    region: 'Java',
    slug: 'ijen-crater',
    metaTitle: 'Ijen Crater Blue Fire Tours for Groups | Aneka Kartika',
    metaDescription: 'Ijen Crater night hikes for groups of up to 20: health checks, online permits, gas masks and English-speaking guides arranged by an East Java DMC.',
    h1: 'Ijen Crater: Blue Fire and a Turquoise Lake',
    heroImage: null,
    intro: [
      'In the far east of Java, near the port town of Banyuwangi, Ijen volcano hides one of the most remarkable sights in Indonesia: a vast turquoise crater lake, among the most acidic on earth, and before dawn, the electric-blue flames of burning sulphur gas rising from its shores.',
      'The night hike to the crater rim is demanding but deeply rewarding, and it fits perfectly into an overland route. Ijen sits between Bromo and Bali, which is only a short ferry crossing away, so groups can finish a Java journey here and continue to Bali the same day.',
    ],
    highlights: [
      { title: 'Blue fire before dawn.', text: 'Ignited sulphur gas creates the famous blue flames, visible only in darkness.' },
      { title: 'Sunrise at the crater rim.', text: 'First light reveals the steaming turquoise lake and the walls of the caldera.' },
      { title: 'The sulphur miners.', text: 'A rare glimpse of traditional sulphur mining, still carried out by hand on the crater floor.' },
      { title: 'The Ijen plateau.', text: 'Cool highland coffee plantations and clove gardens on the drive in.' },
      { title: 'Banyuwangi and beyond.', text: 'Osing culture, local cuisine and the savanna of Baluran National Park within easy reach.' },
    ],
    experience: [
      'Permits, health checks and gas masks are organised before the group arrives, so the night of the hike runs to the minute.',
      'An English-speaking guide leads the ascent with the group, sets a comfortable pace and keeps an eye on wind and gas conditions.',
      'Groups of up to 20 guests, with a calm alternative programme for anyone who prefers not to hike.',
      'Hotels in Banyuwangi from 3 to 5 stars, selected for an easy midnight departure and a good rest afterwards.',
    ],
    bestTime: [
      'The dry season, from about April to October, offers the most reliable conditions and clear sunrises. During the rainy season the gate may open later, and trails can close after heavy rain.',
      'Ijen is closed for maintenance on the first Friday of every month, and the authorities can close it temporarily for safety reasons such as high gas levels, bad weather or fire risk. We always check the latest status before confirming a date.',
    ],
    logistics: [
      { challenge: 'A health certificate is mandatory.', solution: 'Every hiker must show a recent medical certificate, and guests with conditions such as asthma or heart disease, or who are pregnant, are not allowed to hike. We collect the relevant details from the agent in advance, arrange the check at a clinic in Banyuwangi or at the medical post by the gate, and offer an alternative programme to those who are not eligible.' },
      { challenge: 'Online permits and daily quotas.', solution: 'Tickets are now booked online with a limited number of visitors per day. We secure permits as soon as travel dates are confirmed.' },
      { challenge: 'A midnight start and a steep trail.', solution: 'Departure is usually around 1 a.m. for a walk of about three kilometres each way, taking 1.5–2 hours uphill. Guests receive a briefing, headlamps and a steady pace; local hand-pulled trolleys are available for those who need help.' },
      { challenge: 'Sulphur gas.', solution: 'Gas masks are provided for every guest. Guides watch the wind and only take the group closer to the crater when it is safe and permitted.' },
      { challenge: 'A long drive from Bromo.', solution: 'We plan the Bromo–Ijen transfer as a daytime drive with comfortable stops, arriving in time to rest before the night hike.' },
      { challenge: 'Tired guests the next day.', solution: 'The following day is kept light, usually the ferry to Bali or a relaxed morning in Banyuwangi.' },
    ],
    pairsWith: [
      { title: 'Mount Bromo', text: ' for a classic East Java two-volcano journey.', href: '/destinations/java/mount-bromo', before: 'Combine with ' },
      { title: 'Bali: Beyond the Everyday', text: '.', href: '/programs/bali-quiet-roads', before: 'Continue to Bali by ferry from Banyuwangi: a natural link to our Bali programmes, such as ' },
    ],
    faq: [
      { question: 'How fit do guests need to be?', answer: 'A reasonable level of fitness is needed for a steady uphill walk in the dark. Guests who are not eligible for the health certificate, or prefer not to hike, can join an alternative morning programme.' },
      { question: 'Is the blue fire guaranteed?', answer: 'No. It depends on gas activity, weather and whether access to the crater floor is permitted on the day. The sunrise and crater lake views from the rim are the main reward in any case.' },
      { question: 'Can Ijen be combined with Bali?', answer: 'Yes. Banyuwangi is a short drive from the ferry port to Bali, so many groups hike Ijen at night and arrive in Bali the same afternoon.' },
      { question: 'What should guests bring?', answer: 'Warm layers, sturdy shoes, gloves and a small daypack. We provide headlamps and gas masks.' },
    ],
    cta: 'Adding Ijen to an East Java or Bali programme? Send us your dates and group profile, and we will handle the permits and health checks for you.',
  },
  {
    region: 'Java',
    slug: 'borobudur',
    metaTitle: 'Borobudur Temple Group Tours | Central Java | Aneka Kartika',
    metaDescription: 'Borobudur for groups of up to 20: timed climb tickets, temple guides and 3–5★ hotels secured early by an Indonesia DMC operating since 1979.',
    h1: 'Borobudur: The World’s Largest Buddhist Monument',
    heroImage: {
      src: '/images/destinations/borobudur-1280.webp',
      srcSet: '/images/destinations/borobudur-640.webp 640w, /images/destinations/borobudur-1280.webp 1280w',
      alt: 'Borobudur stupas and the Buddha statue at morning light',
    },
    intro: [
      'Built in the 9th century and rediscovered under volcanic ash and jungle two hundred years ago, Borobudur is the largest Buddhist monument in the world and a UNESCO World Heritage Site. Nine stacked platforms carry 2,672 carved relief panels and 72 perforated stupas, rising from the Kedu Plain in a ring of volcanoes.',
      'The temple lies about an hour and a half by road from Yogyakarta. Since its recent conservation measures, a visit to the monument itself works very differently from a decade ago, which is exactly where good ground handling makes the difference for a group.',
    ],
    highlights: [
      { title: 'The guided climb.', text: 'A timed session with a certified temple guide, walking the galleries clockwise up to the circular stupa terraces.' },
      { title: 'The relief panels.', text: 'Stone stories of the life of the Buddha and of daily life in ancient Java.' },
      { title: 'Sunrise over the Kedu Plain.', text: 'Morning mist and volcano silhouettes from nearby hills such as Punthuk Setumbu.' },
      { title: 'Mendut and Pawon.', text: 'Two smaller temples on the same ancient processional line, often enjoyed in near silence.' },
      { title: 'Village life.', text: 'Cycling, horse cart or classic jeep rides through the villages around the temple, with pottery and craft workshops.' },
    ],
    experience: [
      'Climb tickets for the whole group are secured as early as possible, so guests are not left waiting for a slot.',
      'Our English-speaking guide stays with the group throughout, alongside the official temple guide required for the climb.',
      'Groups of up to 20 guests, with clear alternatives for anyone who cannot climb the stairs.',
      'Hotels from 3 to 5 stars in Yogyakarta or around Borobudur itself, depending on whether the brief favours city life or a quiet countryside stay.',
    ],
    bestTime: [
      'Visit early in the day for the softest light and cooler temperatures. The dry season, from about April to October, brings the clearest views of the surrounding volcanoes.',
      'Vesak (Waisak), the Buddhist full-moon festival in May or June, is a powerful time to be here but also the busiest, with special access arrangements. Indonesian school holidays and the end-of-year period also bring large crowds.',
    ],
    logistics: [
      { challenge: 'A daily climbing quota.', solution: 'Access to the monument is limited to around 1,200 climbers a day in timed slots, and tickets often sell out days in advance. We book as soon as dates are confirmed and keep the group together in one slot wherever possible.' },
      { challenge: 'Mandatory temple guide and special sandals.', solution: 'Every climb is led by an official guide, and guests wear woven upanat sandals to protect the stone. Both are included in the climb ticket; we brief guests beforehand so the check-in is quick.' },
      { challenge: 'Slots sold out or access restricted.', solution: 'We prepare a full alternative with a grounds ticket, Mendut and Pawon temples and a sunrise viewpoint, and tell the agent at the time of booking.' },
      { challenge: 'Heat and steep stairs.', solution: 'We favour morning slots, carry water and hats, and guests who prefer not to climb can enjoy the temple gardens and museum.' },
      { challenge: 'Dress code and conduct.', solution: 'Shoulders and knees should be covered, and the reliefs must not be touched or climbed on. Our guide explains the etiquette on the way.' },
      { challenge: 'Distance from Yogyakarta.', solution: 'We time the drive around traffic and combine it with nearby sights, so the day never feels like a long transfer.' },
    ],
    pairsWith: [
      { title: 'Java to Bali: Culture & Volcanoes (8 days · Yogyakarta, Bromo, Ubud)', text: '', href: '/programs/java-to-bali-culture-volcano' },
      { title: 'Prambanan', text: ' and Yogyakarta for a complete Central Java cultural programme.', href: '/destinations/java/prambanan', before: 'Combine with ' },
    ],
    faq: [
      { question: 'Can every guest climb the temple?', answer: 'Every guest with a climb ticket can join the guided session, but the stairs are steep and uneven. Guests with limited mobility can stay at ground level, where the gardens and views are still impressive.' },
      { question: 'How far in advance should we book?', answer: 'As early as possible. For groups we recommend confirming dates several weeks ahead, and earlier still for Vesak and peak holiday periods.' },
      { question: 'How long does a visit take?', answer: 'Plan two to three hours at the site, or half a day including Mendut, Pawon and a village experience.' },
      { question: 'Can Borobudur and Prambanan be visited on the same day?', answer: 'Yes, it is possible, but it makes a long day. For most groups we recommend spreading them over two days in Yogyakarta.' },
    ],
    cta: 'Want Borobudur in your next Java programme? Send us your dates early, and we will secure the climb slots for your group.',
  },
  {
    region: 'Java',
    slug: 'prambanan',
    metaTitle: 'Prambanan & Ramayana Ballet Group Tours | Aneka Kartika',
    metaDescription: 'Prambanan temples and the Ramayana Ballet for groups of up to 20: tickets, seating, dinners and English-speaking guides arranged by an Indonesia DMC.',
    h1: 'Prambanan: Java’s Great Hindu Temples',
    heroImage: {
      src: '/images/destinations/prambanan-1280.webp',
      srcSet: '/images/destinations/prambanan-640.webp 640w, /images/destinations/prambanan-1280.webp 1280w',
      alt: 'The tall stone shrines of Prambanan Temple',
    },
    intro: [
      'Rising like a cluster of stone flames from the plain east of Yogyakarta, Prambanan is the largest Hindu temple compound in Indonesia and a UNESCO World Heritage Site. Its central shrine, dedicated to Shiva, stands around 47 metres tall and is carved with the story of the Ramayana.',
      'Built in the 9th century, around the same era as Borobudur, Prambanan sits only about 17 kilometres from the centre of Yogyakarta. The same park includes Sewu, a large Buddhist temple complex, so a single visit tells the story of two faiths side by side. In the evening, the Ramayana Ballet brings the temple’s legends to life on stage.',
    ],
    highlights: [
      { title: 'The Trimurti shrines.', text: 'Temples to Shiva, Vishnu and Brahma, with finely carved Ramayana reliefs.' },
      { title: 'Sewu Temple.', text: 'A vast Buddhist complex within the same park, usually far quieter than the main temples.' },
      { title: 'Plaosan.', text: 'Elegant twin temples a short drive away, ideal for a peaceful late-afternoon stop.' },
      { title: 'Sunset at Ratu Boko.', text: 'Hilltop ruins of an ancient palace with views across the plain towards Merapi.' },
      { title: 'The Ramayana Ballet.', text: 'Over two hundred dancers and gamelan musicians perform the epic without dialogue, with the floodlit temples as a backdrop in the dry season.' },
    ],
    experience: [
      'We build Yogyakarta itineraries around the ballet nights, so the group never misses the performance.',
      'Seats for the whole group are reserved together, with pre-show dinners arranged close to the venue.',
      'An English-speaking guide explains the temples and the story of the Ramayana before the show, so guests can follow every scene.',
      'Groups of up to 20 guests, staying in 3–5★ hotels in Yogyakarta.',
    ],
    bestTime: [
      'Mornings are best for exploring the temples before the midday heat, while late afternoon offers warm light and pairs well with Ratu Boko and the ballet.',
      'The Ramayana Ballet is staged on Tuesday, Thursday and Saturday evenings. From May to October it is performed on the open-air stage facing the temples; from November to April it moves to an indoor theatre.',
    ],
    logistics: [
      { challenge: 'The ballet runs only three nights a week.', solution: 'We schedule the Yogyakarta days around Tuesday, Thursday or Saturday. If dates do not match, we offer an alternative evening performance, such as the Roro Jonggrang dance drama.' },
      { challenge: 'Seating a group of 20 together.', solution: 'We book a block of seats in the preferred class as early as possible; the best rows for the open-air stage go quickly in the dry season.' },
      { challenge: 'Rain during the open-air season.', solution: 'The performance can move indoors in bad weather. Guests receive rain ponchos, and we keep the agent informed on the day.' },
      { challenge: 'Midday heat on the temple grounds.', solution: 'We plan visits in the morning or late afternoon, with water, hats and shaded breaks.' },
      { challenge: 'A late finish.', solution: 'The ballet ends at around 9:30 p.m. Dinner is arranged before the show and the coach waits at the venue for the drive back to the hotel.' },
      { challenge: 'Conservation restrictions.', solution: 'Access to some inner chambers can be limited for conservation. Our guide confirms the latest arrangements on the day.' },
    ],
    pairsWith: [
      { title: 'Java to Bali: Culture & Volcanoes (8 days · Yogyakarta, Bromo, Ubud)', text: '', href: '/programs/java-to-bali-culture-volcano' },
      { title: 'Borobudur', text: ' and Yogyakarta for a complete Central Java cultural programme.', href: '/destinations/java/borobudur', before: 'Combine with ' },
    ],
    faq: [
      { question: 'Is the Ramayana Ballet included in your programmes?', answer: 'It is offered as an option in every Yogyakarta programme, with seat class and pre-show dinner chosen to fit your budget.' },
      { question: 'Will guests understand the performance?', answer: 'Yes. The ballet uses no dialogue; the story is told through dance, costume and gamelan music, and our guide explains the plot beforehand.' },
      { question: 'Is there a combined ticket with Borobudur?', answer: 'Yes, combined tickets are available, and we use them where they make sense for the itinerary.' },
      { question: 'How long should we spend at Prambanan?', answer: 'About two to three hours for the temples, or a full afternoon and evening including Ratu Boko or Plaosan and the ballet.' },
    ],
    cta: 'Planning a Central Java programme? Tell us your preferred dates and we will match them with the ballet schedule and seating for your group.',
  },
  {
    region: 'Java',
    slug: 'yogyakarta',
    metaTitle: 'Yogyakarta Royal City Tours for Groups | Aneka Kartika',
    metaDescription: 'Yogyakarta’s Kraton, Taman Sari and batik workshops for groups of up to 20, with English-speaking guides and 3–5★ hotels arranged since 1979.',
    h1: 'Yogyakarta: Java’s Royal City',
    heroImage: {
      src: '/images/destinations/yogyakarta-900.webp',
      srcSet: '/images/destinations/yogyakarta-640.webp 640w, /images/destinations/yogyakarta-900.webp 900w',
      alt: 'Interior of a traditional Javanese pavilion',
    },
    intro: [
      'Yogyakarta, or simply Jogja to Indonesians, is the cultural heart of Java and the only region of the country still led by a reigning sultan. Its royal palace, the Kraton, has stood at the centre of the city since 1755, surrounded by a living neighbourhood of courtiers, artisans and musicians.',
      'For groups, Yogyakarta is both a destination and the natural base for Borobudur and Prambanan. Two or three nights here allow guests to combine the great temples with the city’s palaces, markets, batik workshops and some of the best food on the island.',
    ],
    highlights: [
      { title: 'The Kraton.', text: 'The sultan’s palace, with pavilions, heirlooms and morning performances of gamelan music and classical dance.' },
      { title: 'Taman Sari Water Castle.', text: 'The royal pleasure garden, with bathing pools, hidden passages and a striking underground mosque.' },
      { title: 'Batik, hands on.', text: 'A workshop where guests try the wax-resist technique and take home their own piece.' },
      { title: 'Kotagede silver.', text: 'The old royal capital, known for its silversmiths and traditional Javanese houses.' },
      { title: 'Evenings in the city.', text: 'A becak ride along Malioboro, Javanese cuisine such as gudeg, or a jeep tour on the slopes of Mount Merapi.' },
    ],
    experience: [
      'Our English-speaking guide brings the city’s royal traditions to life, from court etiquette to the meaning of batik motifs.',
      'City programmes are timed around palace opening days and performances, so groups see the Kraton at its liveliest.',
      'Groups of up to 20 guests, with smaller vehicles or becaks arranged where coaches cannot reach.',
      'A wide choice of 3–5★ hotels, from heritage properties near the palace to resort hotels outside the centre.',
    ],
    bestTime: [
      'Yogyakarta can be visited all year, but the dry season from about April to October is the most comfortable. Mornings are best for the palace, when performances take place and temperatures are lower.',
      'The Kraton is closed on Mondays and during some royal ceremonies, and closes earlier on Fridays. Major royal processions such as the Garebeg are colourful but crowded; their dates follow the Javanese and Islamic calendars.',
    ],
    logistics: [
      { challenge: 'Limited palace opening hours.', solution: 'We schedule the Kraton between Tuesday and Sunday in the morning, and use Mondays for Taman Sari, batik workshops or excursions.' },
      { challenge: 'Narrow lanes around Taman Sari and Kotagede.', solution: 'The coach parks at the edge of the old quarter, and the group continues on foot or by becak, a charming part of the experience.' },
      { challenge: 'Traffic and holiday peaks.', solution: 'We avoid rush hours around Malioboro and plan carefully around Lebaran (Eid), school holidays and the year-end period.' },
      { challenge: 'Hotel availability in peak season.', solution: 'We block rooms early and keep alternatives of the same category in reserve.' },
      { challenge: 'Getting to Yogyakarta.', solution: 'Yogyakarta International Airport is about an hour west of the city, with a direct airport train. Groups can also arrive by train from Surabaya or Jakarta, an easy and scenic way to travel across Java.' },
      { challenge: 'Heat and walking.', solution: 'Walking sections are kept short and planned for the morning, with water and shaded rest stops.' },
    ],
    pairsWith: [
      { title: 'Java to Bali: Culture & Volcanoes (8 days · Yogyakarta, Bromo, Ubud)', text: '', href: '/programs/java-to-bali-culture-volcano' },
      { title: 'Borobudur', text: ' and Prambanan for a complete Central Java cultural programme.', href: '/destinations/java/borobudur', before: 'Combine with ' },
    ],
    faq: [
      { question: 'How many nights should a group spend in Yogyakarta?', answer: 'Two to three nights is ideal to cover Borobudur, Prambanan and the city without rushing.' },
      { question: 'Can guests see a royal performance?', answer: 'Yes. Gamelan and dance performances usually take place at the Kraton in the morning and are included in the palace visit.' },
      { question: 'Can we travel from Surabaya to Yogyakarta by train?', answer: 'Yes. The train is a comfortable alternative to the road and a popular way to link East and Central Java on an overland programme.' },
      { question: 'Is Yogyakarta suitable for school and special-interest groups?', answer: 'Very much so. Batik, gamelan, cooking and university visits can all be arranged as hands-on sessions.' },
    ],
    cta: 'Looking for a cultural base in Java? Send us your group profile and dates, and we will shape a Yogyakarta programme around your clients’ interests.',
  },
];

import { otherDestinationRegions } from './other-destinations';
export { otherDestinationRegions };
export const destinationPagesWithoutContent = otherDestinationRegions;


export const baliRegion = {
  region: 'Bali',
  slug: 'bali',
  metaTitle: 'Bali Group Tours | Indonesia DMC | Aneka Kartika',
  metaDescription: 'Discover Ubud, Uluwatu, Tanah Lot, Jatiluwih, Besakih and Nusa Penida with Aneka Kartika Tours.',
  h1: 'Bali',
  heroImage: {
    src: '/images/destinations/bali-1280.webp',
    srcSet: '/images/destinations/bali-640.webp 640w, /images/destinations/bali-1280.webp 1280w',
    alt: 'Bali landscape',
  },
  // TODO: review klien
  intro: ['The six Bali places featured here are Ubud, Uluwatu, Tanah Lot, Jatiluwih, Besakih and Nusa Penida.'],
};

export const baliAttractions: AttractionPageContent[] = [
  {
    "region": "Bali",
    "slug": "ubud",
    "metaTitle": "Ubud Group Tours | Bali Culture & Rice Terraces | Aneka Kartika",
    "metaDescription": "Ubud for groups of up to 20: palaces, rice terraces, water temples and dance evenings, with English-speaking guides and 3–5★ hotels arranged by a DMC.",
    "h1": "Ubud: The Cultural Heart of Bali",
    "heroImage": null,
    "intro": [
      "Set among river gorges and terraced rice fields in the hills of central Bali, Ubud has been the island’s home of art, dance and craft for generations. Royal families, painters, woodcarvers and musicians shaped this town, and their traditions are still part of daily life in the villages around it.",
      "For groups, Ubud offers the Bali that many travellers come looking for: temples in daily use, green landscapes, evening performances and a slower rhythm than the beach resorts in the south. It also makes an ideal base for exploring central and eastern Bali."
    ],
    "highlights": [
      {
        "title": "Ubud Palace and the evening dance.",
        "text": "Classical Legong or Barong performances in the royal courtyard, staged most evenings."
      },
      {
        "title": "Rice terraces.",
        "text": "The sweeping terraces of Tegallalang and quieter valleys nearby, best in the soft morning light."
      },
      {
        "title": "Water temples.",
        "text": "Tirta Empul, where Balinese come to bathe in holy spring water, and the ancient Goa Gajah cave sanctuary."
      },
      {
        "title": "Sacred Monkey Forest.",
        "text": "A forest temple complex shared with hundreds of long-tailed macaques."
      },
      {
        "title": "Living crafts.",
        "text": "Woodcarving, silver and painting villages, with hands-on workshops for groups."
      }
    ],
    "experience": [
      "An English-speaking guide explains Balinese customs as the group meets them, from temple offerings to the meaning of each dance.",
      "Programmes for groups of up to 20 guests, with visits timed for early mornings when temples and terraces are calmer.",
      "Hotels from 3 to 5 stars, from central Ubud for walkable evenings to resorts overlooking the river valleys.",
      "Optional hands-on sessions such as offering-making, a cooking class or a batik workshop, ideal for special-interest and student groups."
    ],
    "bestTime": [
      "The dry season, from about April to October, brings sunny days and clear views over the rice fields. July and August are the busiest months.",
      "The rainy season, from November to March, usually means short heavy showers in the afternoon and lush green landscapes. Morning programmes work well all year round.",
      "Balinese ceremonies happen throughout the year and can bring unexpected colour to a visit. On Nyepi, the Day of Silence in March, the whole island, including the airport, closes for 24 hours."
    ],
    "logistics": [
      {
        "challenge": "Narrow roads and limited coach parking.",
        "solution": "Central Ubud is not built for large coaches. We use medium-sized vehicles where needed and plan drop-off points so the group walks only short distances."
      },
      {
        "challenge": "Traffic around the town centre.",
        "solution": "We schedule popular sights early in the morning and avoid the late-afternoon peak on the main roads into Ubud."
      },
      {
        "challenge": "Crowds at Tegallalang and Tirta Empul.",
        "solution": "Early arrival, and quieter alternatives with the same landscape or ritual when the main sites are crowded."
      },
      {
        "challenge": "Temple dress code.",
        "solution": "Sarongs and sashes are provided or arranged at each temple, and the guide briefs guests on etiquette beforehand."
      },
      {
        "challenge": "Monkeys at the forest sanctuary.",
        "solution": "Guests are asked to secure glasses, hats and phones and not to bring food. The guide stays with the group throughout."
      },
      {
        "challenge": "Nyepi and major ceremonies.",
        "solution": "We check the Balinese calendar when quoting, so arrivals and departures never fall on Nyepi."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "Java to Bali: Culture & Volcanoes (8 days · Yogyakarta, Bromo, Ubud)",
        "text": "",
        "href": "/programs/java-to-bali-culture-volcano"
      },
      {
        "title": "",
        "text": "Combine with Jatiluwih and Besakih for a full day in Bali’s highlands."
      }
    ],
    "faq": [
      {
        "question": "How many nights should a group spend in Ubud?",
        "answer": "Two to three nights allow time for temples, rice terraces, a dance evening and a hands-on workshop without rushing."
      },
      {
        "question": "Can guests take part in the water purification at Tirta Empul?",
        "answer": "Yes, respectfully. Guests wear a sarong provided at the temple and follow the order of the fountains, with our guide explaining the ritual."
      },
      {
        "question": "Is Ubud suitable for older travellers?",
        "answer": "Yes. Most sights involve short walks, and we choose terrace viewpoints and routes with easy access."
      },
      {
        "question": "Can Ubud be combined with a beach stay?",
        "answer": "Easily. Many groups spend the first nights in Ubud and finish in South Bali close to the airport."
      }
    ],
    "cta": "Planning a cultural stay in Bali? Send us your dates and group profile, and we will design an Ubud programme around your clients."
  },
  {
    "region": "Bali",
    "slug": "uluwatu",
    "metaTitle": "Uluwatu Temple & Kecak Fire Dance for Groups | Aneka Kartika",
    "metaDescription": "Uluwatu cliff temple and the sunset Kecak fire dance for groups of up to 20: seats, timing and English-speaking guides arranged by an Indonesia DMC.",
    "h1": "Uluwatu: Cliff-Top Temple and the Kecak Fire Dance",
    "heroImage": null,
    "intro": [
      "Perched on a limestone cliff some seventy metres above the Indian Ocean, Pura Luhur Uluwatu is one of Bali’s six key directional temples, guarding the island from the spirits of the sea. The views along the cliffs at sunset are among the most memorable in Bali.",
      "As the sun goes down, dozens of men gather in a circle in the open-air amphitheatre for the Kecak, a hypnotic chant-and-dance performance of the Ramayana, ending in fire. For groups staying in South Bali, it is the classic first or last evening of a programme."
    ],
    "highlights": [
      {
        "title": "The cliff-top temple.",
        "text": "A walk along the cliff paths with views of the temple and the ocean below."
      },
      {
        "title": "Kecak fire dance at sunset.",
        "text": "The Ramayana performed by a chorus of voices instead of instruments, with the sea and sky as a backdrop."
      },
      {
        "title": "The Bukit Peninsula.",
        "text": "White-sand beaches and coves below the limestone cliffs, from Padang Padang to Melasti."
      },
      {
        "title": "Seafood at Jimbaran.",
        "text": "Grilled seafood on the sand at Jimbaran Bay, a natural follow-on to the performance."
      }
    ],
    "experience": [
      "Seats for the whole group are arranged in advance, and our guide brings the group in early to secure a good view of the stage and the sunset.",
      "An English-speaking guide explains the Ramayana story before the show, so guests can follow the performance.",
      "Groups of up to 20 guests, with dinner arrangements at Jimbaran or a cliff-top restaurant afterwards.",
      "Hotels from 3 to 5 stars on the Bukit Peninsula, Jimbaran or Nusa Dua, keeping evening transfers short."
    ],
    "bestTime": [
      "The Kecak is performed every evening at sunset. The dry season, from about April to October, offers the most reliable sunsets; in the rainy season a shower can delay or interrupt the show.",
      "Late afternoon is the best time to visit the temple grounds, combined with the performance. Weekends and holiday periods are especially busy."
    ],
    "logistics": [
      {
        "challenge": "Heavy traffic in South Bali in the late afternoon.",
        "solution": "We leave hotels with plenty of time to spare and keep the group on a realistic schedule, so no one arrives as the show begins."
      },
      {
        "challenge": "Popular seats fill early.",
        "solution": "Tickets are arranged in advance and the group arrives about an hour before sunset to sit together."
      },
      {
        "challenge": "Monkeys around the temple.",
        "solution": "Guests are briefed to secure glasses, hats, phones and jewellery. Our guide stays with the group along the cliff path."
      },
      {
        "challenge": "Temple dress code.",
        "solution": "Sarongs and sashes are provided at the entrance. The inner temple is reserved for worshippers, and our guide explains which areas visitors may enter."
      },
      {
        "challenge": "Steps and seating in the amphitheatre.",
        "solution": "The stone seating has no backs and involves some steps. Guests with limited mobility are seated near the entrance."
      },
      {
        "challenge": "Dinner timing after the show.",
        "solution": "Restaurants are reserved for the group in advance, and the coach waits close to the exit to avoid the crowd leaving at the same time."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "",
        "text": "Combine with Tanah Lot for a programme of Bali’s great sea temples."
      }
    ],
    "faq": [
      {
        "question": "How long does the Kecak performance last?",
        "answer": "About an hour. With the temple visit and arrival time, plan around three hours in total."
      },
      {
        "question": "Is the Kecak suitable for non-Indonesian speakers?",
        "answer": "Yes. The story is told through movement and voices, and our guide explains the plot beforehand."
      },
      {
        "question": "Can we visit the temple without watching the dance?",
        "answer": "Yes. The temple can be visited during the day, though most groups combine the cliff walk with the sunset performance."
      },
      {
        "question": "Are tickets included in your quotation?",
        "answer": "Yes. Temple entrance and Kecak tickets are included, along with sarongs and guiding."
      }
    ],
    "cta": "Want a sunset to remember for your group? Send us your dates and we will arrange Uluwatu, the Kecak and dinner for your clients."
  },
  {
    "region": "Bali",
    "slug": "tanah-lot",
    "metaTitle": "Tanah Lot Sea Temple Tours for Groups | Bali | Aneka Kartika",
    "metaDescription": "Tanah Lot sea temple for groups of up to 20: timed for tides and sunset, with English-speaking guides and 3–5★ hotels arranged by an Indonesia DMC.",
    "h1": "Tanah Lot: Bali’s Temple in the Sea",
    "heroImage": null,
    "intro": [
      "Standing on a rocky outcrop surrounded by waves, Pura Tanah Lot is one of the most photographed places in Indonesia. According to legend, it was founded in the 16th century by the priest Dang Hyang Nirartha, who sensed the spiritual power of the rock and asked local fishermen to build a shrine to the sea gods.",
      "Tanah Lot lies on Bali’s southwest coast, around an hour from the main resort areas, depending on traffic. It is best visited in the late afternoon, when the light softens and the temple turns into a silhouette against the sunset."
    ],
    "highlights": [
      {
        "title": "The sea temple.",
        "text": "Pura Tanah Lot on its rock, reachable on foot across the shore at low tide."
      },
      {
        "title": "The holy spring.",
        "text": "A freshwater spring at the base of the rock, where priests bless visitors with holy water."
      },
      {
        "title": "Batu Bolong.",
        "text": "A second temple on a natural rock arch, a short walk along the cliffs."
      },
      {
        "title": "Sunset along the cliffs.",
        "text": "Cliff-top terraces and cafés facing west over the Indian Ocean."
      },
      {
        "title": "Rice fields on the way.",
        "text": "The drive passes through the green countryside of the Tabanan regency, Bali’s rice bowl."
      }
    ],
    "experience": [
      "Visits are timed with the tide tables, so the group can walk out towards the temple when conditions allow.",
      "An English-speaking guide tells the legend of Tanah Lot and explains what visitors may and may not enter.",
      "Groups of up to 20 guests, often combined with Jatiluwih or the Tabanan countryside earlier in the day.",
      "Hotels from 3 to 5 stars in Canggu, Seminyak or along the Tabanan coast, depending on the brief."
    ],
    "bestTime": [
      "Late afternoon is the classic time to visit, for the sunset. Arriving earlier in the afternoon gives time to explore before the crowds build.",
      "The dry season, from about April to October, brings the clearest sunsets. Access to the base of the rock depends on the tide and the swell, so conditions change from day to day."
    ],
    "logistics": [
      {
        "challenge": "Access depends on the tide.",
        "solution": "We check tide tables when planning the day. At high tide or in big swell, the group enjoys the temple from the cliffs and the shore instead."
      },
      {
        "challenge": "Large sunset crowds.",
        "solution": "We arrive mid-afternoon, visit the temple first and then move to a quieter spot along the cliffs for sunset."
      },
      {
        "challenge": "Traffic back to the resort areas after sunset.",
        "solution": "Dinner nearby is a good way to let the traffic ease before the drive back."
      },
      {
        "challenge": "Wet rocks and waves at the shore.",
        "solution": "Guests are briefed to wear suitable footwear and stay behind the safety lines; our guide decides whether it is safe to go down."
      },
      {
        "challenge": "Temple etiquette.",
        "solution": "The temple itself is reserved for worshippers. Our guide explains the blessing at the holy spring and the appropriate dress and behaviour."
      },
      {
        "challenge": "Walking between the car park and the shore.",
        "solution": "The route passes a long row of shops. We use the most direct path and set a clear meeting point for the group."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "",
        "text": "Combine with Jatiluwih rice terraces in the morning and Tanah Lot at sunset, a classic day across west Bali."
      }
    ],
    "faq": [
      {
        "question": "Can visitors enter Tanah Lot temple?",
        "answer": "The temple itself is reserved for worshippers. Visitors can walk to the base of the rock at low tide and receive a blessing at the holy spring."
      },
      {
        "question": "How long does a visit take?",
        "answer": "About two hours, or longer if the group stays for sunset and dinner nearby."
      },
      {
        "question": "Is Tanah Lot worth visiting outside sunset?",
        "answer": "Yes. Mornings are quieter and often better for walking out at low tide, although sunset remains the most popular time."
      },
      {
        "question": "Can Tanah Lot be combined with other sights?",
        "answer": "Yes. It pairs naturally with Jatiluwih, Taman Ayun temple or the Bedugul highlands."
      }
    ],
    "cta": "Adding Tanah Lot to your Bali programme? Send us your dates and we will time the visit with the tides and the sunset for your group."
  },
  {
    "region": "Bali",
    "slug": "jatiluwih",
    "metaTitle": "Jatiluwih Rice Terraces Tours for Groups | Bali | Aneka Kartika",
    "metaDescription": "Jatiluwih UNESCO rice terraces for groups of up to 20: guided walks, subak culture and highland lunches arranged by an Indonesia DMC since 1979.",
    "h1": "Jatiluwih: Bali’s UNESCO Rice Terraces",
    "heroImage": {
      "src": "/images/destinations/jatiluwih-1280.webp",
      "srcSet": "/images/destinations/jatiluwih-640.webp 640w, /images/destinations/jatiluwih-1280.webp 1280w",
      "alt": "Jatiluwih rice terraces with Mount Batukaru"
    },
    "intro": [
      "On the slopes of Mount Batukaru in west-central Bali, the rice terraces of Jatiluwih roll across the hills as far as the eye can see. They are part of Bali’s Cultural Landscape, inscribed on the UNESCO World Heritage list in 2012 for the subak, the cooperative water-management system that has shared irrigation water between farmers and temples for around a thousand years.",
      "Higher, cooler and far less crowded than the terraces near Ubud, Jatiluwih offers groups space to walk, breathe and understand how Balinese farming and religion work together. It is a substantial drive from the south, so we usually build it into a full day in the highlands."
    ],
    "highlights": [
      {
        "title": "Terrace walks.",
        "text": "Marked trails of different lengths between the paddies, with views of Mount Batukaru."
      },
      {
        "title": "The subak system.",
        "text": "Water channels, small shrines and the shared rhythms of planting and harvest that earned UNESCO recognition."
      },
      {
        "title": "Highland lunch.",
        "text": "A slow lunch overlooking the terraces, often with locally grown red rice."
      },
      {
        "title": "Batukaru temple.",
        "text": "One of Bali’s most important mountain temples, surrounded by forest."
      },
      {
        "title": "The Bedugul highlands.",
        "text": "Lake temples, markets and cool mountain air, easily combined on the same day."
      }
    ],
    "experience": [
      "An English-speaking guide explains the subak system as the group walks, turning a scenic stop into a cultural experience.",
      "Walking routes are chosen to match the group’s fitness, from short viewpoint strolls to longer loops through the fields.",
      "Groups of up to 20 guests, with lunch and rest stops planned along the way.",
      "Hotels from 3 to 5 stars in Ubud, Tabanan or the south, depending on how the day fits into the itinerary."
    ],
    "bestTime": [
      "Jatiluwih can be visited all year. The terraces change colour through the growing cycle, from flooded fields and young green shoots to golden rice and harvest, so every visit looks different.",
      "Mornings are clearer and cooler, while afternoons often bring cloud to the mountain. In the rainy season, from about November to March, paths can be muddy and slippery."
    ],
    "logistics": [
      {
        "challenge": "A long drive from South Bali.",
        "solution": "We combine Jatiluwih with Tanah Lot, Batukaru or Bedugul so the drive becomes part of a full and varied day."
      },
      {
        "challenge": "Narrow, winding mountain roads.",
        "solution": "We use vehicles suited to the road and experienced drivers, and allow extra time for the last stretch."
      },
      {
        "challenge": "Uneven and muddy paths.",
        "solution": "Guests are advised to wear closed shoes, and routes are adjusted to the weather and the group’s fitness."
      },
      {
        "challenge": "Changing weather in the highlands.",
        "solution": "Guests receive a reminder to bring a light rain jacket, and we plan the walk for the morning when skies are clearer."
      },
      {
        "challenge": "Limited facilities on the trails.",
        "solution": "Toilet and rest stops are planned at the visitor area and the lunch restaurant."
      },
      {
        "challenge": "Respecting working farmland.",
        "solution": "Our guide keeps the group on the marked paths and explains how to behave around farmers and field shrines."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "",
        "text": "Combine with Tanah Lot at sunset, or with Ubud for a programme focused on Balinese culture and landscapes."
      }
    ],
    "faq": [
      {
        "question": "How long should we spend at Jatiluwih?",
        "answer": "Allow two to three hours for a walk and lunch, as part of a full day in the highlands."
      },
      {
        "question": "Is the walk difficult?",
        "answer": "No. Routes range from short, almost flat strolls to longer loops, and we choose the one that suits the group."
      },
      {
        "question": "When are the terraces most beautiful?",
        "answer": "Every stage has its own appeal. Green fields are the most photographed, but planting and harvest show daily farming life up close."
      },
      {
        "question": "Why is Jatiluwih a UNESCO site?",
        "answer": "For the subak, Bali’s traditional cooperative irrigation system, which links farmers, water and temples."
      }
    ],
    "cta": "Looking for a quieter side of Bali? Send us your group profile and dates, and we will design a highland day around Jatiluwih."
  },
  {
    "region": "Bali",
    "slug": "besakih",
    "metaTitle": "Besakih Mother Temple Tours for Groups | Bali | Aneka Kartika",
    "metaDescription": "Besakih, Bali’s Mother Temple, for groups of up to 20: official tickets, temple guides and respectful visits arranged by an Indonesia DMC since 1979.",
    "h1": "Besakih: The Mother Temple of Bali",
    "heroImage": null,
    "intro": [
      "High on the slopes of Mount Agung, Bali’s holiest volcano, Pura Besakih is the largest and most sacred temple complex on the island. Known as the Mother Temple, it brings together more than twenty temples on terraces climbing the mountainside, linked to every family and region of Bali.",
      "Besakih is a place of active worship, with ceremonies taking place throughout the year. Visiting with a knowledgeable guide turns a long climb of stairs and shrines into an introduction to the spiritual heart of Balinese Hinduism."
    ],
    "highlights": [
      {
        "title": "Pura Penataran Agung.",
        "text": "The central temple, with its tiered meru towers rising towards Mount Agung."
      },
      {
        "title": "Ceremonies in daily life.",
        "text": "Processions, offerings and prayers that guests can watch respectfully from the visitor areas."
      },
      {
        "title": "Views of Mount Agung.",
        "text": "On clear mornings, the volcano rises directly behind the temple terraces."
      },
      {
        "title": "East Bali on the way.",
        "text": "The Sidemen valley, the water palaces of Karangasem and the old royal court of Klungkung."
      }
    ],
    "experience": [
      "An English-speaking guide accompanies the group alongside the official temple guide, explaining the meaning of each terrace and ceremony.",
      "Tickets are bought through the official counter, so the group avoids unofficial guides and touts.",
      "Groups of up to 20 guests, with a pace that allows rest stops on the stairs.",
      "Usually visited as a day trip from Ubud or Sidemen, staying in 3–5★ hotels."
    ],
    "bestTime": [
      "Early mornings offer cooler air, the best chance of clear views of Mount Agung and fewer visitors. Large tour groups tend to arrive later in the morning.",
      "Major festivals, such as Bhatara Turun Kabeh, usually in March or April, bring large crowds of worshippers. The temple closes completely on Nyepi. From November to March, the stone steps can be slippery after rain."
    ],
    "logistics": [
      {
        "challenge": "Unofficial guides and touts.",
        "solution": "We use the official ticket counter, where the ticket includes a temple guide, sarong rental and a shuttle from the car park. Our own guide stays with the group throughout."
      },
      {
        "challenge": "Stairs and altitude.",
        "solution": "The complex involves many steps. We set a gentle pace, plan rest stops, and guests who prefer not to climb can stay on the lower terraces."
      },
      {
        "challenge": "Ceremonies and restricted areas.",
        "solution": "Some courtyards are reserved for worshippers, especially during ceremonies. Our guide explains where visitors may go and how to behave."
      },
      {
        "challenge": "A long drive from South Bali.",
        "solution": "We combine Besakih with east Bali highlights or schedule it from an Ubud or Sidemen base."
      },
      {
        "challenge": "Weather on the mountain.",
        "solution": "Guests are advised to bring a light jacket and suitable footwear, and the visit is planned for the morning."
      },
      {
        "challenge": "Volcanic activity on Mount Agung.",
        "solution": "We follow official volcano updates and adjust the programme if access is restricted."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "",
        "text": "Combine with Ubud and the rice terraces of Sidemen for a programme focused on Balinese culture."
      }
    ],
    "faq": [
      {
        "question": "Is a guide required at Besakih?",
        "answer": "Yes. The official ticket includes a local temple guide. Our English-speaking guide accompanies the group as well."
      },
      {
        "question": "What should guests wear?",
        "answer": "Clothing that covers shoulders and knees. Sarongs and sashes are provided with the ticket."
      },
      {
        "question": "How long does a visit take?",
        "answer": "About two hours at the temple, as part of a half-day or full-day programme in east Bali."
      },
      {
        "question": "Can Besakih be visited during ceremonies?",
        "answer": "Usually yes, from the visitor areas, which can make the visit even more meaningful. Some areas may be closed to visitors on those days."
      }
    ],
    "cta": "Planning a cultural programme in Bali? Send us your dates and we will arrange a respectful, well-guided visit to Besakih for your group."
  },
  {
    "region": "Bali",
    "slug": "nusa-penida",
    "metaTitle": "Nusa Penida Group Tours | Cliffs & Manta Rays | Aneka Kartika",
    "metaDescription": "Nusa Penida day trips for groups of up to 20: fast boats, island drivers, cliff viewpoints and manta snorkelling arranged by an Indonesia DMC.",
    "h1": "Nusa Penida: Cliffs, Coves and Manta Rays",
    "heroImage": null,
    "intro": [
      "Just across the strait from Bali’s southeast coast, Nusa Penida feels like a different island altogether: dry limestone hills, villages far from the resort crowds and dramatic white cliffs dropping into turquoise water. Its coastline has become one of the most recognisable sights in Indonesia.",
      "The waters around the island are rich in marine life, including reef manta rays that visit year-round. With a fast boat crossing of around 45 minutes from Sanur, Nusa Penida makes a spectacular day trip, or a quieter overnight escape for groups."
    ],
    "highlights": [
      {
        "title": "Kelingking Beach.",
        "text": "The famous dinosaur-shaped headland, seen from the clifftop viewpoint."
      },
      {
        "title": "Broken Beach and Angel’s Billabong.",
        "text": "A natural stone arch and tidal pools on the west coast."
      },
      {
        "title": "Diamond Beach and Atuh.",
        "text": "White coves and rock pinnacles on the quieter east coast."
      },
      {
        "title": "Manta rays.",
        "text": "Snorkelling trips to Manta Point, where reef mantas gather around cleaning stations."
      },
      {
        "title": "Crystal Bay.",
        "text": "A sheltered bay with calm water and coral close to the beach."
      }
    ],
    "experience": [
      "Fast boat seats, island vehicles and drivers are booked together, so the group moves smoothly from boat to road.",
      "An English-speaking guide travels with the group from Bali, choosing the order of stops to avoid the busiest times.",
      "Groups of up to 20 guests, split across smaller island vehicles suited to Nusa Penida’s roads.",
      "Usually a day trip from Bali’s 3–5★ hotels, with overnight options on the island for groups who want more time."
    ],
    "bestTime": [
      "The dry season, from about April to October, generally offers the calmest crossings and the best visibility for snorkelling, although the southeast trade winds can make the strait choppy at times. Mornings are usually calmer at sea.",
      "In the rainy season, roads can be slippery and some paths more difficult. The clifftop viewpoints are most pleasant early in the day or later in the afternoon, away from the midday crowds and heat."
    ],
    "logistics": [
      {
        "challenge": "Sea conditions on the crossing.",
        "solution": "We use established fast boat operators and check the forecast the day before. If the sea is too rough, the trip is rescheduled or replaced, and the agent is informed in advance."
      },
      {
        "challenge": "Narrow, steep island roads.",
        "solution": "Coaches cannot operate on the island. The group travels in smaller vehicles with local drivers, typically split into two or three cars for 20 guests."
      },
      {
        "challenge": "The steep path down to Kelingking Beach.",
        "solution": "The descent is loose and demanding. Our standard programme visits the clifftop viewpoint, and the descent is offered only to fit, well-equipped guests."
      },
      {
        "challenge": "Waves at Angel’s Billabong.",
        "solution": "Swimming is not included in our programme. Guests view the pools from a safe distance, as waves can wash over the rocks without warning."
      },
      {
        "challenge": "Limited facilities and cash payments.",
        "solution": "Lunch and rest stops are reserved in advance, and guests are advised to carry some cash for small purchases."
      },
      {
        "challenge": "A long day.",
        "solution": "We keep the number of stops realistic and allow time for the return crossing in daylight."
      }
    ],
    "pairsWith": [
      {
        "title": "Bali: Beyond the Everyday (5 days · Ubud, Central Bali, South Bali)",
        "text": "",
        "href": "/programs/bali-quiet-roads"
      },
      {
        "title": "",
        "text": "Combine with a stay in Sanur or Nusa Dua, close to the boat harbour."
      }
    ],
    "faq": [
      {
        "question": "How long is the boat crossing?",
        "answer": "Around 45 minutes by fast boat from Sanur, depending on the sea."
      },
      {
        "question": "Is Nusa Penida suitable for all guests?",
        "answer": "The viewpoints are accessible for most guests, but the island involves bumpy roads and some walking. We adapt the programme for groups with limited mobility."
      },
      {
        "question": "Can guests snorkel with manta rays?",
        "answer": "Yes, on a separate snorkelling programme with a licensed boat operator, for guests who are confident in open water."
      },
      {
        "question": "Can we stay overnight on the island?",
        "answer": "Yes. A night on Nusa Penida allows a more relaxed pace and quieter viewpoints in the early morning."
      }
    ],
    "cta": "Want to add Nusa Penida to your Bali programme? Send us your dates and group profile, and we will plan the crossing and the island day for you."
  }
];

export const allDestinationAttractions = [...javaAttractions, ...baliAttractions, ...otherDestinationRegions.flatMap((region) => region.attractions)];
export const publishedDestinationAttractions = allDestinationAttractions.filter((attraction) => attraction.published !== false);
export function getDestinationAttraction(regionSlug: string, slug: string) {
  const region = otherDestinationRegions.find((item) => item.slug === regionSlug);
  const attractions = region?.attractions ?? (regionSlug === 'java' ? javaAttractions : regionSlug === 'bali' ? baliAttractions : []);
  return attractions.find((attraction) => attraction.slug === slug && attraction.published !== false);
}
