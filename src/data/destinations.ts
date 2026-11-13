export type DestinationImage = {
  src: string;
  srcSet: string;
  alt: string;
};

export type DestinationPairing = {
  title: string;
  text: string;
  href?: string;
  before?: string;
};

export type AttractionPageContent = {
  region: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: DestinationImage;
  intro: string[];
  highlights: { title: string; text: string }[];
  experience: string[];
  bestTime: string[];
  logistics: { challenge: string; solution: string }[];
  pairsWith: DestinationPairing[];
  faq: { question: string; answer: string }[];
  cta: string;
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
    heroImage: {
      src: '/images/destinations/ijen-crater-1280.webp',
      srcSet: '/images/destinations/ijen-crater-640.webp 640w, /images/destinations/ijen-crater-1280.webp 1280w',
      alt: 'Volcanic landscape in East Java',
    },
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

export const destinationPagesWithoutContent = [
  { slug: 'bali', name: 'Bali', metaTitle: 'Bali | Indonesia Destinations | Aneka Kartika', metaDescription: 'Request a tailored Bali travel programme from Aneka Kartika Tours.', heroImage: { src: '/images/destinations/bali-1280.webp', srcSet: '/images/destinations/bali-640.webp 640w, /images/destinations/bali-1280.webp 1280w', alt: 'Bali landscape' } },
  { slug: 'lombok-komodo', name: 'Lombok & Komodo', metaTitle: 'Lombok & Komodo | Indonesia Destinations | Aneka Kartika', metaDescription: 'Request a tailored Lombok and Komodo travel programme from Aneka Kartika Tours.', heroImage: { src: '/images/destinations/lombok-komodo-1280.webp', srcSet: '/images/destinations/lombok-komodo-640.webp 640w, /images/destinations/lombok-komodo-1280.webp 1280w', alt: 'Lombok and Komodo island landscape' } },
  { slug: 'sumatra', name: 'Sumatra', metaTitle: 'Sumatra | Indonesia Destinations | Aneka Kartika', metaDescription: 'Request a tailored Sumatra travel programme from Aneka Kartika Tours.', heroImage: { src: '/images/destinations/sumatra-1280.webp', srcSet: '/images/destinations/sumatra-640.webp 640w, /images/destinations/sumatra-1280.webp 1280w', alt: 'Landscape in Sumatra' } },
  { slug: 'sulawesi', name: 'Sulawesi', metaTitle: 'Sulawesi | Indonesia Destinations | Aneka Kartika', metaDescription: 'Request a tailored Sulawesi travel programme from Aneka Kartika Tours.', heroImage: { src: '/images/destinations/sulawesi-1280.webp', srcSet: '/images/destinations/sulawesi-640.webp 640w, /images/destinations/sulawesi-1280.webp 1280w', alt: 'Landscape in Sulawesi' } },
  { slug: 'kalimantan', name: 'Kalimantan', metaTitle: 'Kalimantan | Indonesia Destinations | Aneka Kartika', metaDescription: 'Request a tailored Kalimantan travel programme from Aneka Kartika Tours.', heroImage: { src: '/images/destinations/kalimantan-1280.webp', srcSet: '/images/destinations/kalimantan-640.webp 640w, /images/destinations/kalimantan-1280.webp 1280w', alt: 'Tanjung Puting landscape in Kalimantan' } },
];
