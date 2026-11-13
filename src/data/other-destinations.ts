import type { DestinationRegionContent } from './destinations';

// TODO: review klien — Lombok & Komodo intro summarizes only the supplied attractions.
// TODO: review klien — Sumatra intro summarizes only the supplied attractions.
// TODO: review klien — Sulawesi intro summarizes only the supplied attractions.
// TODO: review klien — Kalimantan intro summarizes only the supplied attractions.
export const otherDestinationRegions: DestinationRegionContent[] = [
  {
    "region": "Lombok & Komodo",
    "slug": "lombok-komodo",
    "name": "Lombok & Komodo",
    "metaTitle": "Lombok & Komodo Group Tours | Indonesia DMC | Aneka Kartika",
    "metaDescription": "Explore the Gili Islands, Mount Rinjani, Sasak Villages, Kuta Lombok, Komodo National Park and Labuan Bajo.",
    "h1": "Lombok & Komodo",
    "heroImage": {
      "src": "/images/destinations/lombok-komodo-1280.webp",
      "srcSet": "/images/destinations/lombok-komodo-640.webp 640w, /images/destinations/lombok-komodo-1280.webp 1280w",
      "alt": "Lombok & Komodo landscape"
    },
    "intro": [
      "Explore the Gili Islands, Mount Rinjani, Sasak Villages, Kuta Lombok, Komodo National Park and Labuan Bajo."
    ],
    "attractions": [
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        // TODO: Foto utama gallery belum ditemukan untuk gili-islands.
        "slug": "gili-islands",
        "metaTitle": "Gili Islands Group Tours | Lombok | Aneka Kartika",
        "metaDescription": "Gili Trawangan, Meno and Air for groups of up to 20: boat transfers, luggage handling, snorkelling and 3–5★ stays arranged by an Indonesia DMC.",
        "h1": "Gili Islands: Three Car-Free Islands off Lombok",
        "heroImage": null,
        "intro": [
          "Off the northwest coast of Lombok, three small coral islands, Gili Trawangan, Gili Meno and Gili Air, offer white sand, clear water and a pace of life without cars or motorbikes. Guests get around on foot, by bicycle or by cidomo, the local horse cart.",
          "Each island has its own character: Trawangan is the liveliest, Air balances village life with cafés and beaches, and Meno is the quietest of the three. For groups, the Gilis are a relaxed finale after a cultural programme in Bali, Java or Lombok."
        ],
        "highlights": [
          {
            "title": "Snorkelling with turtles.",
            "text": "Green and hawksbill turtles feed on the reefs a short swim or boat ride from the beach."
          },
          {
            "title": "Island-hopping.",
            "text": "A glass-bottom boat trip between the three islands with snorkelling stops."
          },
          {
            "title": "Sunset on the west coast.",
            "text": "Views across the strait towards Bali’s Mount Agung."
          },
          {
            "title": "Cycling around the island.",
            "text": "Gili Trawangan can be circled by bicycle in about an hour."
          },
          {
            "title": "Diving for all levels.",
            "text": "Well-established dive centres offer introductory dives and courses."
          }
        ],
        "experience": [
          "Boat transfers, luggage handling and island transport are coordinated in one plan, so guests are not left waiting on the beach with their bags.",
          "An English-speaking guide accompanies the group across the strait and on island activities.",
          "Groups of up to 20 guests, staying together on one island or split across neighbouring properties.",
          "Hotels and resorts from 3 to 5 stars, chosen according to whether the group prefers a lively or a quiet island."
        ],
        "bestTime": [
          "The dry season, from about April to October, brings calm seas, sunny days and the best visibility for snorkelling. July and August are the busiest months.",
          "From November to March, short tropical showers are common and the sea can be rougher, occasionally affecting boat crossings. Prices and crowds are lower."
        ],
        "logistics": [
          {
            "challenge": "No motor vehicles on the islands.",
            "solution": "Luggage is carried by cidomo or porter from the beach to the hotel. We choose hotels within easy reach of the landing point for guests with limited mobility."
          },
          {
            "challenge": "Beach landings.",
            "solution": "Boats often land directly on the beach, so guests may step into shallow water. They are briefed to keep shoes and bags ready."
          },
          {
            "challenge": "Sea conditions for crossings.",
            "solution": "We use established boat operators, check the forecast and schedule crossings in the morning when the sea is usually calmer."
          },
          {
            "challenge": "Limited large hotels.",
            "solution": "Rooms are blocked early, and larger groups can be split across two properties close to each other."
          },
          {
            "challenge": "Respecting local custom.",
            "solution": "The islands are predominantly Muslim communities. Guests are briefed to cover up away from the beach."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Lombok’s Sasak Villages",
                "href": "/destinations/lombok-komodo/sasak-villages"
              },
              {
                "text": " "
              },
              {
                "text": "Kuta Lombok",
                "href": "/destinations/lombok-komodo/kuta-lombok"
              },
              {
                "text": "."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Continue to Bali by fast boat for a two-island programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How do groups reach the Gili Islands?",
            "answer": "By fast boat from Bali, or by a short boat crossing from the north coast of Lombok. We arrange the whole transfer, including luggage."
          },
          {
            "question": "Which island is best for a group?",
            "answer": "It depends on the profile: Trawangan suits groups who enjoy a lively atmosphere, Air offers a balance, and Meno is ideal for a quiet stay."
          },
          {
            "question": "Is snorkelling suitable for non-swimmers?",
            "answer": "Guests who cannot swim can join the glass-bottom boat trip and view the reef from the boat."
          }
        ],
        "cta": "Looking for a relaxing finale to your Indonesia programme? Send us your dates and group profile, and we will plan the Gili Islands for you.",
        "published": true
      },
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        // TODO: menunggu konfirmasi status taman nasional.
        // TODO: Foto utama gallery belum ditemukan untuk mount-rinjani.
        "slug": "mount-rinjani",
        "metaTitle": "Mount Rinjani Treks & Foothills for Groups | Aneka Kartika",
        "metaDescription": "Mount Rinjani crater-rim treks and foothill walks for groups of up to 20, with licensed guides, porters and permits arranged by an Indonesia DMC.",
        "h1": "Mount Rinjani: Lombok’s Sacred Volcano",
        "heroImage": null,
        "intro": [
          "At 3,726 metres, Mount Rinjani is the second-highest volcano in Indonesia and dominates the island of Lombok. Inside its vast caldera lies Segara Anak, a crescent-shaped crater lake with a young volcanic cone rising from its waters, sacred to both the Sasak and Balinese communities.",
          "A trek to the crater rim is one of the great mountain experiences in Southeast Asia, suited to fit and well-prepared travellers. For groups with mixed abilities, the green foothills around Senaru and Sembalun offer waterfalls, villages and mountain views without the climb."
        ],
        "highlights": [
          {
            "title": "The crater rim.",
            "text": "Sunrise views over Segara Anak lake and the island of Lombok from Senaru or Sembalun rim."
          },
          {
            "title": "The summit.",
            "text": "A demanding pre-dawn climb to the top, for experienced trekkers only."
          },
          {
            "title": "Waterfalls of Senaru.",
            "text": "Sendang Gile and Tiu Kelep, reached by a short forest walk."
          },
          {
            "title": "The Sembalun valley.",
            "text": "Highland farms and hills with views of the volcano, ideal for gentle walks."
          },
          {
            "title": "Sasak mountain villages.",
            "text": "Traditional houses and village life on the slopes of the volcano."
          }
        ],
        "experience": [
          "Treks are run with licensed local guides and porters, who carry the camping equipment and prepare meals.",
          "An English-speaking guide coordinates the programme and stays with guests who choose the foothill alternative.",
          "Groups of up to 20 guests, with the trekking party and the foothill party travelling on separate programmes when needed.",
          "Hotels from 3 to 5 stars in Senggigi or Mataram before and after the trek, and the best available lodges in Senaru or Sembalun."
        ],
        "bestTime": [
          "The trekking season runs during the dry months, roughly April to November. The national park closes the trails during the rainy season, usually from January to the end of March.",
          "The park can also restrict access at other times for safety reasons, such as fire risk or weather. We confirm the status of each route before every departure."
        ],
        "logistics": [
          {
            "challenge": "Permits and registration.",
            "solution": "Treks must be registered through the national park’s booking system with a licensed operator. We handle registration as soon as dates and guest details are confirmed."
          },
          {
            "challenge": "Fitness and mixed-ability groups.",
            "solution": "We advise agents in advance on the fitness required. Guests who prefer not to trek follow a foothill programme of waterfalls and villages."
          },
          {
            "challenge": "Cold nights and steep terrain.",
            "solution": "Guests receive a detailed packing list; tents, sleeping bags and meals are provided by the trekking team."
          },
          {
            "challenge": "Safety on the mountain.",
            "solution": "Guides follow park rules and turn back when conditions are unsafe. The summit is offered only to experienced trekkers."
          },
          {
            "challenge": "Seasonal closures.",
            "solution": "We plan Rinjani programmes within the open season and keep an alternative ready if the park restricts access."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "the Gili Islands",
                "href": "/destinations/lombok-komodo/gili-islands"
              },
              {
                "text": " for a relaxing stay after the trek."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Sasak Villages",
                "href": "/destinations/lombok-komodo/sasak-villages"
              },
              {
                "text": " for a cultural programme across Lombok."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How long is a crater-rim trek?",
            "answer": "Usually two days and one night, camping at the rim. Summit and lake programmes take three days or more."
          },
          {
            "question": "Can an entire group of 20 trek together?",
            "answer": "Yes, with enough guides and porters, but trekking requires good fitness. Most groups split between a trekking party and a foothill programme."
          },
          {
            "question": "When is Rinjani closed?",
            "answer": "The trails close during the rainy season, usually January to March, and can close at short notice for safety. We check before confirming."
          }
        ],
        "cta": "Planning an active programme in Lombok? Send us your group profile and dates, and we will match the right Rinjani experience to your clients.",
        "published": false
      },
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        // TODO: Foto utama gallery belum ditemukan untuk sasak-villages.
        "slug": "sasak-villages",
        "metaTitle": "Sasak Villages & Lombok Culture Tours | Aneka Kartika",
        "metaDescription": "Lombok’s Sasak villages, weaving and pottery for groups of up to 20, with respectful visits and English-speaking guides arranged by an Indonesia DMC.",
        "h1": "Sasak Villages: The Living Culture of Lombok",
        "heroImage": null,
        "intro": [
          "The Sasak people make up most of Lombok’s population, and their villages in the south of the island preserve traditional houses with high thatched roofs, rice barns shaped like hats and crafts handed down through generations.",
          "A cultural day in Lombok combines these villages with weaving and pottery workshops, temples and gardens, giving groups a very different picture from the beaches the island is known for."
        ],
        "highlights": [
          {
            "title": "Traditional villages.",
            "text": "Sade and Ende, with thatched houses, rice barns and floors traditionally polished with buffalo dung."
          },
          {
            "title": "Songket weaving.",
            "text": "Sukarara, where women weave intricate textiles on backstrap looms."
          },
          {
            "title": "Banyumulek pottery.",
            "text": "Hand-shaped earthenware made with local clay, with a chance to try the wheel."
          },
          {
            "title": "Temples and water gardens.",
            "text": "Lingsar temple, shared by Hindus and Muslims, and the royal gardens of Narmada."
          }
        ],
        "experience": [
          "Visits are arranged with village guides, so groups are welcomed rather than simply passing through.",
          "An English-speaking guide explains Sasak customs, from marriage traditions to the meaning of the weaving patterns.",
          "Groups of up to 20 guests, with hands-on sessions planned in small rotating groups.",
          "Hotels from 3 to 5 stars in Mataram, Senggigi or Kuta Lombok, depending on the rest of the programme."
        ],
        "bestTime": [
          "The villages can be visited all year. Mornings are cooler and quieter, and weavers are usually at work.",
          "Festivals such as Bau Nyale, the sea-worm festival on the south coast, usually in February or March, add colour but also bring large crowds."
        ],
        "logistics": [
          {
            "challenge": "Village etiquette.",
            "solution": "Guests are briefed to dress modestly, ask before taking photos and follow the village guide."
          },
          {
            "challenge": "Pressure to buy souvenirs.",
            "solution": "Our guide explains purchases calmly and makes sure guests never feel obliged to buy."
          },
          {
            "challenge": "Narrow village paths.",
            "solution": "The coach parks outside the village, and the group walks in small groups with a local guide."
          },
          {
            "challenge": "Fair contribution to the community.",
            "solution": "Village entry donations and workshop fees are included in our programme, so the community benefits directly."
          },
          {
            "challenge": "Heat in the middle of the day.",
            "solution": "We schedule village visits for the morning and keep afternoon programmes in shaded or indoor settings."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Kuta Lombok",
                "href": "/destinations/lombok-komodo/kuta-lombok"
              },
              {
                "text": ", close to the southern villages."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "the Gili Islands",
                "href": "/destinations/lombok-komodo/gili-islands"
              },
              {
                "text": " for a cultural and coastal programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Are the villages authentic?",
            "answer": "Yes. Families still live in the villages, although tourism has become part of local life. Our guide helps guests understand both."
          },
          {
            "question": "Can guests try weaving?",
            "answer": "Yes. Short sessions can be arranged at Sukarara for small groups in rotation."
          },
          {
            "question": "How long does a cultural day take?",
            "answer": "A full day covers two villages, a craft workshop and a temple or garden."
          }
        ],
        "cta": "Want to show your clients the cultural side of Lombok? Send us your dates and we will design a Sasak village programme for your group.",
        "published": true
      },
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        // TODO: Foto utama gallery belum ditemukan untuk kuta-lombok.
        "slug": "kuta-lombok",
        "metaTitle": "Kuta Lombok & Mandalika Group Tours | Aneka Kartika",
        "metaDescription": "Kuta Lombok and Mandalika for groups of up to 20: beaches, sunset hills and coastal villages, with 3–5★ hotels arranged by an Indonesia DMC.",
        "h1": "Kuta Lombok & Mandalika: Lombok’s Southern Coast",
        "heroImage": null,
        "intro": [
          "Lombok’s southern coast is a string of bays framed by green hills, from the long white curve of Tanjung Aan to the surf beaches around Selong Belanak. Around the small town of Kuta, the Mandalika area has grown into a resort zone with hotels and an international racing circuit.",
          "Only around half an hour from Lombok International Airport, the south coast is an easy base for groups combining beaches with Sasak villages and the island’s interior."
        ],
        "highlights": [
          {
            "title": "Tanjung Aan.",
            "text": "A wide bay with two beaches of different sand, framed by headlands."
          },
          {
            "title": "Sunset at Merese Hill.",
            "text": "A short walk up to grassy hills with views over the bays."
          },
          {
            "title": "Selong Belanak.",
            "text": "A gentle beach popular for beginner surf lessons."
          },
          {
            "title": "Seaweed farming villages.",
            "text": "Coastal communities where seaweed is grown and dried by hand."
          },
          {
            "title": "Mandalika circuit.",
            "text": "Lombok’s international racetrack, home to major motorsport events."
          }
        ],
        "experience": [
          "An English-speaking guide combines beaches with village life, so the programme is more than a beach stay.",
          "Groups of up to 20 guests, with beach time, sunset walks and cultural visits balanced across the day.",
          "Hotels from 3 to 5 stars, from boutique hotels in Kuta to resorts in the Mandalika area.",
          "Transfers are short, as the airport is close by."
        ],
        "bestTime": [
          "The dry season, from about April to October, brings sunny days and green hills turning golden. July and August are the busiest months.",
          "Major events at the Mandalika circuit and the Bau Nyale festival bring large crowds and higher hotel demand, so we check the event calendar when quoting."
        ],
        "logistics": [
          {
            "challenge": "Hotel demand during big events.",
            "solution": "We check the event calendar and block rooms early, or suggest alternative dates."
          },
          {
            "challenge": "Beach vendors.",
            "solution": "Our guide manages interactions politely so guests can relax."
          },
          {
            "challenge": "Strong currents at some beaches.",
            "solution": "We choose beaches suitable for swimming and inform guests where swimming is not advised."
          },
          {
            "challenge": "Heat on the sunset walk.",
            "solution": "The walk is short; we bring water and plan to arrive before sunset."
          },
          {
            "challenge": "Modest dress in villages.",
            "solution": "Guests are briefed to cover up when visiting villages away from the beach."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Sasak Villages",
                "href": "/destinations/lombok-komodo/sasak-villages"
              },
              {
                "text": ", on the way from the airport."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "the Gili Islands",
                "href": "/destinations/lombok-komodo/gili-islands"
              },
              {
                "text": " for a full Lombok programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How far is Kuta Lombok from the airport?",
            "answer": "About half an hour by road."
          },
          {
            "question": "Is the area suitable for older travellers?",
            "answer": "Yes. Most beaches are easy to reach, and the sunset hill walk is short and optional."
          },
          {
            "question": "Can guests learn to surf?",
            "answer": "Yes, at beginner-friendly beaches with licensed surf schools."
          }
        ],
        "cta": "Planning a coastal stay in Lombok? Send us your dates and group profile, and we will build a southern Lombok programme for your clients.",
        "published": true
      },
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        "slug": "komodo-national-park",
        "metaTitle": "Komodo National Park Group Tours | Aneka Kartika",
        "metaDescription": "Komodo dragons, Padar and Pink Beach for groups of up to 20: park permits, boats and rangers arranged in advance by an Indonesia DMC.",
        "h1": "Komodo National Park: Dragons, Islands and Reefs",
        "heroImage": {
          "src": "/images/destinations/komodo-national-park-1280.webp",
          "srcSet": "/images/destinations/komodo-national-park-640.webp 640w, /images/destinations/komodo-national-park-1280.webp 1280w",
          "alt": "Komodo National Park islands and coastline"
        },
        "intro": [
          "Between the islands of Sumbawa and Flores lies Komodo National Park, a UNESCO World Heritage Site and the only place on earth where the Komodo dragon, the world’s largest lizard, lives in the wild. Its rugged savanna islands rise from some of the richest marine waters in Indonesia.",
          "Groups explore the park by boat from Labuan Bajo, combining ranger-guided walks among the dragons with island viewpoints, pink sand beaches and snorkelling with manta rays."
        ],
        "highlights": [
          {
            "title": "Komodo dragons.",
            "text": "Ranger-guided walks on Komodo or Rinca islands to see the dragons in their natural habitat."
          },
          {
            "title": "Padar Island.",
            "text": "A short, steep climb to a viewpoint over three bays of different coloured sand."
          },
          {
            "title": "Pink Beach.",
            "text": "Sand tinted by fragments of red coral, with good snorkelling close to shore."
          },
          {
            "title": "Manta rays.",
            "text": "Snorkelling at Manta Point, where reef mantas gather in the current."
          },
          {
            "title": "Sailing between islands.",
            "text": "Day trips by speedboat or overnight voyages on a traditional phinisi."
          }
        ],
        "experience": [
          "Park permits, boats and rangers are booked well in advance, as daily visitor numbers are now limited.",
          "An English-speaking guide travels with the group, working with the park rangers on every island landing.",
          "Groups of up to 20 guests, on one large boat or split across two boats sailing together.",
          "Hotels from 3 to 5 stars in Labuan Bajo, or cabins on a phinisi for overnight cruises."
        ],
        "bestTime": [
          "The best conditions are from about April to November, with calmer seas and good visibility. July to September is the busiest period, and boats and permits fill months in advance.",
          "December to March brings rain and occasionally rough seas, which can change routes or cancel sailings. The dragons can be seen all year."
        ],
        "logistics": [
          {
            "challenge": "Daily visitor quota and advance permits.",
            "solution": "The park limits visitor numbers per day and no longer sells walk-in tickets. We book permits as soon as dates and passport details are confirmed."
          },
          {
            "challenge": "Boat capacity for 20 guests.",
            "solution": "Cabins on phinisi boats are limited, so we use one larger boat or two boats travelling together, keeping the programme identical."
          },
          {
            "challenge": "Safety around the dragons.",
            "solution": "Every walk is led by a park ranger. Guests are briefed beforehand and keep to the paths and distances set by the ranger."
          },
          {
            "challenge": "Steep climb at Padar.",
            "solution": "The stairway to the viewpoint is steep and hot. We visit early in the morning, and guests can stop at a lower viewpoint."
          },
          {
            "challenge": "Sea conditions and currents.",
            "solution": "We use experienced crews and adjust snorkelling sites to the conditions; life jackets are provided."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Labuan Bajo",
                "href": "/destinations/lombok-komodo/labuan-bajo"
              },
              {
                "text": ", the gateway town to the park."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine with Bali for a classic Bali and Komodo programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Is it safe to see the Komodo dragons?",
            "answer": "Yes, when following the rangers. Every walk is guided, and groups keep a safe distance at all times."
          },
          {
            "question": "Should we choose a day trip or a cruise?",
            "answer": "A day trip by speedboat covers the highlights. An overnight phinisi cruise is more relaxed and reaches sites at quieter times."
          },
          {
            "question": "How far ahead should we book?",
            "answer": "For the dry season, as early as possible. Boats and permits for July to September often fill several months ahead."
          }
        ],
        "cta": "Want to add Komodo to your Indonesia programme? Send us your dates and group size early, and we will secure the permits and boats for your clients.",
        "published": true
      },
      {
        "region": "Lombok & Komodo",
        "regionSlug": "lombok-komodo",
        // TODO: Foto utama gallery belum ditemukan untuk labuan-bajo.
        "slug": "labuan-bajo",
        "metaTitle": "Labuan Bajo Group Tours | Gateway to Komodo | Aneka Kartika",
        "metaDescription": "Labuan Bajo for groups of up to 20: harbour sunsets, caves, hill viewpoints and Flores extensions, with 3–5★ hotels arranged by an Indonesia DMC.",
        "h1": "Labuan Bajo: Gateway to Komodo and Flores",
        "heroImage": null,
        "intro": [
          "Once a small fishing harbour on the western tip of Flores, Labuan Bajo has become the gateway to Komodo National Park. Its bay is filled with traditional phinisi boats, and the hills around town offer some of the finest sunsets in eastern Indonesia.",
          "With direct flights from Bali and Jakarta, Labuan Bajo is easy to reach. It is also the starting point for journeys across Flores, an island of volcanoes, traditional villages and coffee highlands."
        ],
        "highlights": [
          {
            "title": "Sunset over the bay.",
            "text": "Views of the harbour and islands from Sylvia Hill or Amelia Hill."
          },
          {
            "title": "Batu Cermin cave.",
            "text": "A limestone cave where sunlight reflects off the rock at certain times of day."
          },
          {
            "title": "Rangko Cave.",
            "text": "A cave pool of clear saltwater, reached by a short boat trip."
          },
          {
            "title": "Flores beyond the coast.",
            "text": "Overland extensions to traditional villages and the highlands of Flores."
          },
          {
            "title": "Seafood by the harbour.",
            "text": "Fresh fish grilled at the evening market and waterfront restaurants."
          }
        ],
        "experience": [
          "An English-speaking guide welcomes the group at the airport and coordinates the boat days in the park.",
          "Groups of up to 20 guests, with land programmes planned around the sailing days.",
          "Hotels from 3 to 5 stars, from town hotels to resorts along the coast.",
          "Overland extensions into Flores can be planned for groups wanting a longer journey."
        ],
        "bestTime": [
          "The dry season, from about April to November, is the best time for both sailing and land visits. July to September is the busiest period.",
          "During the rainy season, from December to March, land visits continue but boat programmes may change with the weather."
        ],
        "logistics": [
          {
            "challenge": "Limited flight capacity.",
            "solution": "Flights to Labuan Bajo fill quickly in peak season. We advise agents early and can stagger group arrivals if needed."
          },
          {
            "challenge": "Hotel demand in peak season.",
            "solution": "Rooms are blocked early, especially for July to September."
          },
          {
            "challenge": "Road conditions in Flores.",
            "solution": "Overland routes are winding and slow. We plan realistic driving times with comfortable stops."
          },
          {
            "challenge": "Heat in the middle of the day.",
            "solution": "Land visits are planned for the morning and late afternoon."
          },
          {
            "challenge": "Changing conditions after natural events.",
            "solution": "We monitor local updates and adjust overland routes in Flores when access to sites is limited."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Komodo National Park",
                "href": "/destinations/lombok-komodo/komodo-national-park"
              },
              {
                "text": " for a complete Komodo programme."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine with Bali by direct flight."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How many nights are needed in Labuan Bajo?",
            "answer": "Two to three nights allow one or two days in the park and time to enjoy the town."
          },
          {
            "question": "How do groups get to Labuan Bajo?",
            "answer": "By direct flight from Bali or Jakarta to Komodo Airport."
          },
          {
            "question": "Can we extend into Flores?",
            "answer": "Yes. Overland programmes across Flores can be added for groups with more time."
          }
        ],
        "cta": "Planning a Komodo journey? Send us your dates and group profile, and we will combine Labuan Bajo, the park and Flores for your clients.",
        "published": true
      }
    ]
  },
  {
    "region": "Sumatra",
    "slug": "sumatra",
    "name": "Sumatra",
    "metaTitle": "Sumatra Group Tours | Indonesia DMC | Aneka Kartika",
    "metaDescription": "Explore Lake Toba, Samosir Island, Bukit Lawang, Berastagi, Bukittinggi and Harau Valley.",
    "h1": "Sumatra",
    "heroImage": {
      "src": "/images/destinations/sumatra-1280.webp",
      "srcSet": "/images/destinations/sumatra-640.webp 640w, /images/destinations/sumatra-1280.webp 1280w",
      "alt": "Sumatra landscape"
    },
    "intro": [
      "Explore Lake Toba, Samosir Island, Bukit Lawang, Berastagi, Bukittinggi and Harau Valley."
    ],
    "attractions": [
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        "slug": "lake-toba",
        "metaTitle": "Lake Toba Group Tours | North Sumatra DMC | Aneka Kartika",
        "metaDescription": "Lake Toba for groups of up to 20: Batak culture, lakeside hotels, Sipiso-piso waterfall and boat crossings arranged by an Indonesia DMC since 1979.",
        "h1": "Lake Toba: The Great Volcanic Lake of Sumatra",
        "heroImage": {
          "src": "/images/destinations/lake-toba-1280.webp",
          "srcSet": "/images/destinations/lake-toba-640.webp 640w, /images/destinations/lake-toba-1280.webp 1280w",
          "alt": "Lake Toba in North Sumatra"
        },
        "intro": [
          "Lake Toba fills the caldera of one of the largest volcanic eruptions in the earth’s history. Around 100 kilometres long, it is the largest volcanic lake in the world, ringed by pine-covered hills and the villages of the Batak people.",
          "At around 900 metres above sea level, the air is fresh and the pace is slow. For groups, Toba offers a rare combination of dramatic landscapes and a living culture with its own architecture, music and faith."
        ],
        "highlights": [
          {
            "title": "The lake views.",
            "text": "Panoramas over the caldera from the surrounding ridges and viewpoints."
          },
          {
            "title": "Sipiso-piso waterfall.",
            "text": "One of the tallest waterfalls in Indonesia, plunging into a gorge at the northern end of the lake."
          },
          {
            "title": "Batak villages.",
            "text": "Traditional houses with soaring saddle-shaped roofs and carved façades."
          },
          {
            "title": "Boat trips on the lake.",
            "text": "Crossings to Samosir Island with stops at historic villages."
          },
          {
            "title": "Batak music.",
            "text": "Evening gatherings with songs and gondang music, a highlight for many guests."
          }
        ],
        "experience": [
          "Overland transfers from Medan are planned with scenic stops, turning a long drive into part of the experience.",
          "An English-speaking guide explains Batak history and customs, from royal tombs to clan traditions.",
          "Groups of up to 20 guests, with boat transfers on the lake arranged for the whole group.",
          "Hotels from 3 to 5 stars in Parapat or around the lake, chosen for views and easy boat access."
        ],
        "bestTime": [
          "Lake Toba can be visited all year. The drier months, roughly May to September, bring more sunshine and clearer views over the lake.",
          "Rain falls mostly in the afternoons in the wetter months. Mornings are usually the best time for viewpoints and boat trips."
        ],
        "logistics": [
          {
            "challenge": "Long drive from Medan.",
            "solution": "We plan the transfer with stops at Berastagi or Sipiso-piso, or use the closer Silangit airport when flight schedules suit the group."
          },
          {
            "challenge": "Boat crossings to Samosir.",
            "solution": "Boats are reserved for the group, with luggage handled separately when the group stays on the island."
          },
          {
            "challenge": "Winding mountain roads.",
            "solution": "We use comfortable vehicles, experienced drivers and regular breaks for guests prone to motion sickness."
          },
          {
            "challenge": "Limited high-end hotels.",
            "solution": "We block the best available lakeside rooms early, especially during Indonesian holidays."
          },
          {
            "challenge": "Cool evenings.",
            "solution": "Guests are reminded to bring a light jacket for evenings by the lake."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Samosir Island",
                "href": "/destinations/sumatra/samosir-island"
              },
              {
                "text": " "
              },
              {
                "text": "Berastagi",
                "href": "/destinations/sumatra/berastagi"
              },
              {
                "text": " for a North Sumatra highlands programme."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Bukit Lawang",
                "href": "/destinations/sumatra/bukit-lawang"
              },
              {
                "text": " for wildlife."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How many nights should we spend at Lake Toba?",
            "answer": "Two nights allow time for Samosir Island, the viewpoints and an evening of Batak music."
          },
          {
            "question": "How do groups get to Lake Toba?",
            "answer": "By road from Medan’s Kualanamu airport, or by flight to Silangit airport, which is much closer to the lake."
          },
          {
            "question": "Can guests swim in the lake?",
            "answer": "Yes, at hotel beaches and designated swimming spots, although the water is cool."
          }
        ],
        "cta": "Planning a North Sumatra programme? Send us your dates and group profile, and we will design a Lake Toba journey for your clients.",
        "published": true
      },
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        "slug": "samosir-island",
        "metaTitle": "Samosir Island & Batak Culture Tours | Aneka Kartika",
        "metaDescription": "Samosir Island for groups of up to 20: royal Batak tombs, stone chairs, tor-tor dance and lakeside villages, arranged by an Indonesia DMC since 1979.",
        "h1": "Samosir Island: Heartland of the Toba Batak",
        "heroImage": {
          "src": "/images/destinations/samosir-island-1280.webp",
          "srcSet": "/images/destinations/samosir-island-640.webp 640w, /images/destinations/samosir-island-1280.webp 1280w",
          "alt": "Samosir Island landscape at Lake Toba"
        },
        "intro": [
          "Samosir is an island within an island, rising from the middle of Lake Toba. It is the cultural heartland of the Toba Batak, with villages where traditional houses stand in rows, ancient stone tombs and courtyards where kings once held council.",
          "A day on Samosir introduces groups to Batak history, from the age of kingdoms to the arrival of Christianity, and to a culture that still shapes daily life around the lake."
        ],
        "highlights": [
          {
            "title": "Tomok.",
            "text": "The stone sarcophagus of King Sidabutar and a lively village market."
          },
          {
            "title": "Ambarita.",
            "text": "Stone chairs where village elders once held trials, with stories told by local guides."
          },
          {
            "title": "Tor-tor dance.",
            "text": "Traditional Batak dance performances, with guests invited to join in."
          },
          {
            "title": "Lakeside villages.",
            "text": "Quiet roads, rice fields and churches along the shore."
          },
          {
            "title": "Ulos weaving.",
            "text": "The traditional Batak textile, given at important life events."
          }
        ],
        "experience": [
          "Boats are reserved for the whole group, with stops at the main villages along the shore.",
          "An English-speaking guide works with local village guides, who tell the stories of their own ancestors.",
          "Groups of up to 20 guests, with dance performances arranged for the group.",
          "Hotels from 3 to 5 stars in Parapat, or lakeside hotels on Samosir for an overnight stay."
        ],
        "bestTime": [
          "Samosir can be visited all year. The drier months, roughly May to September, bring the best weather for boat trips.",
          "Mornings are usually calmer on the lake, so we plan crossings early in the day."
        ],
        "logistics": [
          {
            "challenge": "Boat transfers on the lake.",
            "solution": "Private boats for the group, with life jackets and a set schedule for the return."
          },
          {
            "challenge": "Road conditions on the island.",
            "solution": "Some roads are narrow, so we use suitable vehicles on the island and allow extra time."
          },
          {
            "challenge": "Respecting graves and sacred sites.",
            "solution": "Guests are briefed on behaviour at tombs and village courtyards."
          },
          {
            "challenge": "Souvenir sellers in villages.",
            "solution": "Our guide keeps the visit relaxed and explains which crafts are made locally."
          },
          {
            "challenge": "Weather on the lake.",
            "solution": "If wind or rain makes crossings uncomfortable, we adjust the timing or use a larger boat."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Lake Toba",
                "href": "/destinations/sumatra/lake-toba"
              },
              {
                "text": " for a full lakeside stay."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Berastagi",
                "href": "/destinations/sumatra/berastagi"
              },
              {
                "text": " on the way from Medan."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Do we need to stay on Samosir?",
            "answer": "Not necessarily. Many groups stay in Parapat and visit the island on a day trip by boat."
          },
          {
            "question": "How long is the boat crossing?",
            "answer": "Usually under an hour, depending on the departure point and destination on the island."
          },
          {
            "question": "Can guests join the tor-tor dance?",
            "answer": "Yes. Guests are often invited to dance with the performers at the end."
          }
        ],
        "cta": "Want to show your clients the heart of Batak culture? Send us your dates and we will plan a Samosir day for your group.",
        "published": true
      },
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        // TODO: menunggu konfirmasi status taman nasional.
        "slug": "bukit-lawang",
        "metaTitle": "Bukit Lawang Orangutan Treks for Groups | Aneka Kartika",
        "metaDescription": "Bukit Lawang orangutan jungle treks for groups of up to 20, with licensed guides and responsible wildlife rules, arranged by an Indonesia DMC.",
        "h1": "Bukit Lawang: Sumatran Orangutans in the Wild",
        "heroImage": {
          "src": "/images/destinations/bukit-lawang-1280.webp",
          "srcSet": "/images/destinations/bukit-lawang-640.webp 640w, /images/destinations/bukit-lawang-1280.webp 1280w",
          "alt": "Orangutan in Bukit Lawang"
        },
        "intro": [
          "On the edge of Gunung Leuser National Park, part of the Tropical Rainforest Heritage of Sumatra on the UNESCO World Heritage list, the riverside village of Bukit Lawang is one of the best places in the world to see Sumatran orangutans in their forest home.",
          "Guided jungle treks follow forest trails where orangutans, Thomas leaf monkeys and hornbills live. With the Bohorok River running through the village, Bukit Lawang combines wildlife with a peaceful jungle setting."
        ],
        "highlights": [
          {
            "title": "Orangutan treks.",
            "text": "Guided walks in the rainforest to observe Sumatran orangutans."
          },
          {
            "title": "Rainforest wildlife.",
            "text": "Thomas leaf monkeys, gibbons, hornbills and giant trees."
          },
          {
            "title": "The Bohorok River.",
            "text": "Riverside lodges and the traditional tubing ride back to the village."
          },
          {
            "title": "Village life.",
            "text": "Rubber and palm plantations, local markets and riverside communities."
          }
        ],
        "experience": [
          "Treks are led by licensed local guides, with the group split into small parties as required for responsible wildlife viewing.",
          "An English-speaking guide coordinates the programme and explains the conservation context.",
          "Groups of up to 20 guests, with trek lengths matched to each guest’s fitness.",
          "Best available riverside lodges in Bukit Lawang, which are simple but comfortable, with 3–5★ hotels in Medan before or after."
        ],
        "bestTime": [
          "Bukit Lawang can be visited all year. The drier months, roughly May to September, make the trails easier.",
          "In the wetter months, trails can be muddy and the river high. Sightings of wild orangutans are never guaranteed."
        ],
        "logistics": [
          {
            "challenge": "Wildlife rules and small groups.",
            "solution": "Guests are split into small trekking parties with licensed guides. No feeding, touching or getting too close to the animals."
          },
          {
            "challenge": "Steep and muddy trails.",
            "solution": "We recommend closed shoes, and shorter treks are offered to guests with less experience."
          },
          {
            "challenge": "Limited accommodation.",
            "solution": "Lodges in Bukit Lawang are simple. We block the best rooms early and set clear expectations with the agent."
          },
          {
            "challenge": "Long drive from Medan.",
            "solution": "The drive takes several hours, so we plan it with breaks and an early start."
          },
          {
            "challenge": "Park access and closures.",
            "solution": "We follow national park regulations and check access before confirming dates."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Berastagi",
                "href": "/destinations/sumatra/berastagi"
              },
              {
                "text": " "
              },
              {
                "text": "Lake Toba",
                "href": "/destinations/sumatra/lake-toba"
              },
              {
                "text": " for a classic North Sumatra programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Are orangutan sightings guaranteed?",
            "answer": "No. These are wild and semi-wild animals in the forest. Sightings are frequent, but never guaranteed."
          },
          {
            "question": "How difficult are the treks?",
            "answer": "Treks range from a few hours on easier trails to longer walks. We match the trek to the group’s fitness."
          },
          {
            "question": "Can older travellers join?",
            "answer": "Yes, on shorter treks. Guests who prefer not to trek can enjoy the village and river."
          }
        ],
        "cta": "Looking for a wildlife experience in Sumatra? Send us your group profile and dates, and we will plan a responsible orangutan trek for your clients.",
        "published": false
      },
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        "slug": "berastagi",
        "metaTitle": "Berastagi & Karo Highlands Group Tours | Aneka Kartika",
        "metaDescription": "Berastagi and the Karo highlands for groups of up to 20: volcano views, fruit markets and Karo villages, arranged by an Indonesia DMC since 1979.",
        "h1": "Berastagi: The Cool Highlands of Karo",
        "heroImage": {
          "src": "/images/destinations/berastagi-1280.webp",
          "srcSet": "/images/destinations/berastagi-640.webp 640w, /images/destinations/berastagi-1280.webp 1280w",
          "alt": "Fruit market in Berastagi"
        },
        "intro": [
          "Around two hours from Medan, the hill town of Berastagi sits at about 1,300 metres in the Karo highlands, between two volcanoes, Sibayak and Sinabung. Its cool climate has made it a favourite retreat since colonial times, and its volcanic soil feeds farms of fruit, vegetables and flowers.",
          "For groups, Berastagi is the natural first stop on the road from Medan to Lake Toba, with markets, traditional Karo villages and volcano views."
        ],
        "highlights": [
          {
            "title": "The fruit and flower market.",
            "text": "Passion fruit, oranges and highland vegetables, piled high at the town market."
          },
          {
            "title": "Karo villages.",
            "text": "Traditional longhouses with tall, layered roofs in villages such as Lingga."
          },
          {
            "title": "Volcano views.",
            "text": "Panoramas of Sibayak and Sinabung from viewpoints around the town."
          },
          {
            "title": "Hot springs.",
            "text": "Natural hot springs at the foot of Mount Sibayak."
          },
          {
            "title": "Sibayak trek.",
            "text": "An early-morning hike to the crater of Sibayak for active guests."
          }
        ],
        "experience": [
          "Berastagi is built into the Medan–Toba transfer, so the group arrives at the lake rested and with stories to tell.",
          "An English-speaking guide explains Karo culture and highland life.",
          "Groups of up to 20 guests, with optional volcano walks for active guests.",
          "Hotels from 3 to 5 stars in Berastagi for an overnight stop, or a day visit en route to Lake Toba."
        ],
        "bestTime": [
          "Berastagi can be visited all year. Mornings usually offer the clearest views of the volcanoes before clouds build up.",
          "The drier months, roughly May to September, are best for hiking Sibayak."
        ],
        "logistics": [
          {
            "challenge": "Volcanic activity.",
            "solution": "Mount Sinabung is an active volcano with a restricted zone. We follow official recommendations and only visit safe viewpoints."
          },
          {
            "challenge": "Traffic on weekends and holidays.",
            "solution": "Berastagi is popular with visitors from Medan, so we plan around weekend traffic."
          },
          {
            "challenge": "Cool temperatures.",
            "solution": "Guests are reminded to bring a light jacket for mornings and evenings."
          },
          {
            "challenge": "Early start for the Sibayak trek.",
            "solution": "The trek is optional, with a guide, and starts before dawn for the best views."
          },
          {
            "challenge": "Market crowds.",
            "solution": "We visit the market in the morning and set a clear meeting point."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Lake Toba",
                "href": "/destinations/sumatra/lake-toba"
              },
              {
                "text": " "
              },
              {
                "text": "Bukit Lawang",
                "href": "/destinations/sumatra/bukit-lawang"
              },
              {
                "text": " for a classic North Sumatra route."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How far is Berastagi from Medan?",
            "answer": "About two hours by road, depending on traffic."
          },
          {
            "question": "Is it safe to visit near the volcanoes?",
            "answer": "Yes, when following official restrictions. We visit only safe viewpoints and areas open to the public."
          },
          {
            "question": "Should we stay overnight?",
            "answer": "An overnight stay allows the Sibayak trek or a relaxed morning at the market; otherwise, it works well as a day stop."
          }
        ],
        "cta": "Planning a route from Medan to Lake Toba? Send us your dates and we will include the best of the Karo highlands for your group.",
        "published": true
      },
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        // TODO: Foto utama gallery belum ditemukan untuk bukittinggi.
        "slug": "bukittinggi",
        "metaTitle": "Bukittinggi & Minangkabau Culture Tours | Aneka Kartika",
        "metaDescription": "Bukittinggi and the Minangkabau highlands for groups of up to 20: canyons, palaces, crater lakes and Padang cuisine, arranged by an Indonesia DMC.",
        "h1": "Bukittinggi: Heart of the Minangkabau Highlands",
        "heroImage": null,
        "intro": [
          "High in the mountains of West Sumatra, Bukittinggi is the cultural centre of the Minangkabau, one of the world’s largest matrilineal societies, where property and family names pass through the female line. Their buildings, with dramatic curved roofs like buffalo horns, are among the most striking in Indonesia.",
          "Surrounded by volcanoes, canyons and crater lakes, Bukittinggi makes an excellent base for exploring the highlands. It is also the home of the cuisine known across Indonesia as Padang food."
        ],
        "highlights": [
          {
            "title": "Sianok Canyon.",
            "text": "A deep green valley with steep cliffs, right at the edge of town."
          },
          {
            "title": "Jam Gadang.",
            "text": "The landmark clock tower in the centre of Bukittinggi."
          },
          {
            "title": "Pagaruyung Palace.",
            "text": "A grand reconstruction of the Minangkabau royal palace, with its iconic curved roofs."
          },
          {
            "title": "Lake Maninjau.",
            "text": "A crater lake reached by a famous road of 44 hairpin bends."
          },
          {
            "title": "Minangkabau cuisine.",
            "text": "Rendang and other Padang dishes, served in the traditional style."
          }
        ],
        "experience": [
          "An English-speaking guide explains Minangkabau culture, from matrilineal customs to architecture and cuisine.",
          "Groups of up to 20 guests, with a cooking demonstration or Padang-style meal arranged for the group.",
          "Hotels from 3 to 5 stars in Bukittinggi, with day trips to the surrounding highlands.",
          "Transfers from Padang’s Minangkabau International Airport are planned with scenic stops."
        ],
        "bestTime": [
          "The highlands can be visited all year, with a cool climate. The drier months, roughly June to September, bring the clearest views.",
          "Rain is common in the afternoons. Mornings are best for viewpoints over the canyon and lakes."
        ],
        "logistics": [
          {
            "challenge": "Long transfer from the airport.",
            "solution": "The drive from Padang takes a few hours; we include stops at waterfalls and viewpoints along the way."
          },
          {
            "challenge": "Winding roads.",
            "solution": "The roads to Lake Maninjau and Pagaruyung are winding. We use comfortable vehicles and plan breaks."
          },
          {
            "challenge": "Dress code.",
            "solution": "West Sumatra is a conservative Muslim region. Guests are briefed to dress modestly."
          },
          {
            "challenge": "Spicy food.",
            "solution": "Restaurants are briefed in advance, and milder options are prepared for guests who prefer them."
          },
          {
            "challenge": "Friday prayers and holidays.",
            "solution": "We plan schedules around Friday midday prayers and Ramadan."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Harau Valley",
                "href": "/destinations/sumatra/harau-valley"
              },
              {
                "text": " for a full West Sumatra programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How many nights should we stay in Bukittinggi?",
            "answer": "Two to three nights to cover the town, Pagaruyung, Lake Maninjau and Harau Valley."
          },
          {
            "question": "How do groups get to Bukittinggi?",
            "answer": "By flight to Padang, followed by a scenic drive of a few hours."
          },
          {
            "question": "Is Padang food very spicy?",
            "answer": "It can be, but milder dishes are always available, and we brief restaurants in advance."
          }
        ],
        "cta": "Looking for a cultural destination off the usual routes? Send us your dates and group profile, and we will design a West Sumatra programme for your clients.",
        "published": true
      },
      {
        "region": "Sumatra",
        "regionSlug": "sumatra",
        // TODO: Foto utama gallery belum ditemukan untuk harau-valley.
        "slug": "harau-valley",
        "metaTitle": "Harau Valley Tours for Groups | West Sumatra | Aneka Kartika",
        "metaDescription": "Harau Valley for groups of up to 20: granite cliffs, waterfalls and rice fields near Bukittinggi, with English-speaking guides from an Indonesia DMC.",
        "h1": "Harau Valley: Cliffs and Waterfalls of West Sumatra",
        "heroImage": null,
        "intro": [
          "Near the town of Payakumbuh, Harau Valley is enclosed by sheer granite cliffs rising more than a hundred metres above emerald rice fields. Waterfalls tumble down the rock faces, and traditional Minangkabau houses dot the valley floor.",
          "About an hour from Bukittinggi, Harau is a peaceful contrast to the town, ideal for walks, cycling and photography."
        ],
        "highlights": [
          {
            "title": "The granite cliffs.",
            "text": "Towering rock walls enclosing the valley on both sides."
          },
          {
            "title": "Waterfalls.",
            "text": "Several waterfalls flowing down the cliffs, strongest after the rains."
          },
          {
            "title": "Rice field walks.",
            "text": "Gentle walks between paddies and villages on the valley floor."
          },
          {
            "title": "Echo valley.",
            "text": "A spot where voices bounce off the rock walls."
          },
          {
            "title": "Village life.",
            "text": "Farmers, buffalo and traditional Minangkabau houses."
          }
        ],
        "experience": [
          "An English-speaking guide leads easy walks through the valley and explains rural Minangkabau life.",
          "Groups of up to 20 guests, usually on a day trip from Bukittinggi.",
          "Lunch is arranged in the valley, often with local dishes.",
          "Hotels from 3 to 5 stars in Bukittinggi, as accommodation in the valley is limited."
        ],
        "bestTime": [
          "Harau can be visited all year. The waterfalls are fullest in the wetter months, while the drier months make walks easier.",
          "Mornings are best for light and cooler temperatures."
        ],
        "logistics": [
          {
            "challenge": "Limited accommodation in the valley.",
            "solution": "We base the group in Bukittinggi and visit Harau as a day trip."
          },
          {
            "challenge": "Narrow village roads.",
            "solution": "We use suitable vehicles and walk the final stretches."
          },
          {
            "challenge": "Weekend crowds.",
            "solution": "The valley is popular with local visitors, so we prefer weekdays."
          },
          {
            "challenge": "Slippery paths near waterfalls.",
            "solution": "Guests are advised to wear closed shoes, and the guide chooses safe paths."
          },
          {
            "challenge": "Respecting farmland.",
            "solution": "The group stays on paths and follows the guide around the fields."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Bukittinggi",
                "href": "/destinations/sumatra/bukittinggi"
              },
              {
                "text": " for a West Sumatra programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How far is Harau Valley from Bukittinggi?",
            "answer": "About an hour by road."
          },
          {
            "question": "Is it suitable for older travellers?",
            "answer": "Yes. The walks are flat and can be kept short."
          },
          {
            "question": "Can guests swim at the waterfalls?",
            "answer": "In some pools, depending on water levels and safety on the day."
          }
        ],
        "cta": "Want to add a peaceful nature day to your Sumatra programme? Send us your dates and we will include Harau Valley for your group.",
        "published": true
      }
    ]
  },
  {
    "region": "Sulawesi",
    "slug": "sulawesi",
    "name": "Sulawesi",
    "metaTitle": "Sulawesi Group Tours | Indonesia DMC | Aneka Kartika",
    "metaDescription": "Explore Tana Toraja, Makassar, Tanjung Bira, Bunaken, Tangkoko and the Minahasa Highlands.",
    "h1": "Sulawesi",
    "heroImage": {
      "src": "/images/destinations/sulawesi-1280.webp",
      "srcSet": "/images/destinations/sulawesi-640.webp 640w, /images/destinations/sulawesi-1280.webp 1280w",
      "alt": "Sulawesi landscape"
    },
    "intro": [
      "Explore Tana Toraja, Makassar, Tanjung Bira, Bunaken, Tangkoko and the Minahasa Highlands."
    ],
    "attractions": [
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        "slug": "tana-toraja",
        "metaTitle": "Tana Toraja Group Tours | Culture & Ceremonies | Aneka Kartika",
        "metaDescription": "Tana Toraja for groups of up to 20: tongkonan villages, cliff graves and respectful ceremony visits, with English-speaking guides from an Indonesia DMC.",
        "h1": "Tana Toraja: Highland Culture of South Sulawesi",
        "heroImage": {
          "src": "/images/destinations/tana-toraja-1280.webp",
          "srcSet": "/images/destinations/tana-toraja-640.webp 640w, /images/destinations/tana-toraja-1280.webp 1280w",
          "alt": "Traditional Tongkonan houses in Tana Toraja"
        },
        "intro": [
          "In the mountains of South Sulawesi, the Toraja people have kept a remarkable culture centred on family, ancestors and the journey of the soul. Their tongkonan houses, with sweeping boat-shaped roofs, stand in rows facing rice barns, while their dead rest in graves carved into cliffs and guarded by wooden effigies.",
          "For groups, Toraja offers one of the most profound cultural experiences in Indonesia, best understood with a guide who can explain the meaning behind what guests see."
        ],
        "highlights": [
          {
            "title": "Tongkonan villages.",
            "text": "Kete Kesu and other ancestral villages with carved and painted houses."
          },
          {
            "title": "Cliff and cave graves.",
            "text": "Lemo and Londa, where tau-tau effigies look out over the valley."
          },
          {
            "title": "Rice terraces of Batutumonga.",
            "text": "Sweeping views of terraced valleys and highland villages."
          },
          {
            "title": "Funeral ceremonies.",
            "text": "When a ceremony takes place, guests may be welcomed to observe with a local guide."
          },
          {
            "title": "Local markets.",
            "text": "Weekly markets where buffalo and pigs are traded for ceremonies."
          }
        ],
        "experience": [
          "An English-speaking guide works with local Torajan guides who know the families and the protocol of each village.",
          "Ceremony visits are arranged respectfully, with a customary gift brought on behalf of the group.",
          "Groups of up to 20 guests, split into smaller parties at sensitive sites.",
          "Best available hotels in Rantepao, which are mostly 3–4★ in style."
        ],
        "bestTime": [
          "The drier months, roughly June to October, are the main season for funeral ceremonies and the most comfortable for travel. Ceremonies follow family schedules, so they cannot be guaranteed on a given date.",
          "The highlands can be visited all year, though rain is more frequent from November to April."
        ],
        "logistics": [
          {
            "challenge": "Long journey from Makassar.",
            "solution": "The drive takes most of a day through the mountains. We break the journey with stops, or use flights when schedules allow."
          },
          {
            "challenge": "Ceremonies cannot be scheduled.",
            "solution": "We tell agents in advance that ceremonies depend on families. When one takes place, our local guides arrange a respectful visit."
          },
          {
            "challenge": "Animal sacrifice at funerals.",
            "solution": "Buffalo and pigs are sacrificed during ceremonies. Guests are told beforehand, and anyone who prefers not to witness this can stay away."
          },
          {
            "challenge": "Etiquette and photography.",
            "solution": "Guests wear dark, modest clothing at ceremonies, ask permission before taking photos and follow the guide’s instructions."
          },
          {
            "challenge": "Limited hotel categories.",
            "solution": "We use the best available hotels in Rantepao and set clear expectations with the agent."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Makassar",
                "href": "/destinations/sulawesi/makassar"
              },
              {
                "text": " at the start and end of the journey."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Tanjung Bira",
                "href": "/destinations/sulawesi/tanjung-bira"
              },
              {
                "text": " for a South Sulawesi programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Can visitors attend a funeral?",
            "answer": "Often, yes, when a family welcomes guests. Our local guide arranges the visit and the customary gift."
          },
          {
            "question": "How many nights should we spend in Toraja?",
            "answer": "Two to three nights to see the villages, graves and landscapes at a relaxed pace."
          },
          {
            "question": "How do groups get to Toraja?",
            "answer": "By road from Makassar, usually most of a day, or by a short domestic flight when schedules suit the group."
          }
        ],
        "cta": "Looking for a deeply cultural destination? Send us your dates and group profile, and we will plan a respectful Toraja programme for your clients.",
        "published": true
      },
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        // TODO: Foto utama gallery belum ditemukan untuk makassar.
        "slug": "makassar",
        "metaTitle": "Makassar Group Tours | Gateway to Sulawesi | Aneka Kartika",
        "metaDescription": "Makassar for groups of up to 20: Fort Rotterdam, phinisi harbour, Rammang-Rammang karst and ancient cave art, arranged by an Indonesia DMC.",
        "h1": "Makassar: Gateway to South Sulawesi",
        "heroImage": null,
        "intro": [
          "Makassar has been one of the great trading ports of eastern Indonesia for centuries. Bugis and Makassarese sailors set out from here in their wooden phinisi ships, and the Dutch built Fort Rotterdam on the waterfront in the 17th century.",
          "Today the city is the main gateway to Sulawesi, with direct flights from across Indonesia. Within easy reach lie karst landscapes, waterfalls and caves with some of the oldest known rock art in the world."
        ],
        "highlights": [
          {
            "title": "Fort Rotterdam.",
            "text": "A well-preserved Dutch fort with a museum of South Sulawesi history."
          },
          {
            "title": "Paotere harbour.",
            "text": "Traditional wooden cargo boats loading and unloading at the old port."
          },
          {
            "title": "Rammang-Rammang.",
            "text": "A boat ride through karst towers and rice fields in Maros."
          },
          {
            "title": "Ancient cave art.",
            "text": "Hand stencils and animal paintings in the caves of the Maros-Pangkep karst."
          },
          {
            "title": "Losari Beach at sunset.",
            "text": "The city’s waterfront promenade, with local street food."
          }
        ],
        "experience": [
          "Makassar is planned as a meaningful stop rather than a transit night, with history, landscapes and food.",
          "An English-speaking guide explains the maritime history of the Bugis and Makassarese.",
          "Groups of up to 20 guests, with boats at Rammang-Rammang reserved in advance.",
          "Hotels from 3 to 5 stars in the city centre or along the waterfront."
        ],
        "bestTime": [
          "Makassar can be visited all year. The drier months, roughly June to October, are best for boat trips at Rammang-Rammang.",
          "Mornings are cooler for outdoor visits; sunset is the best time for the waterfront."
        ],
        "logistics": [
          {
            "challenge": "City traffic.",
            "solution": "We plan visits outside rush hours and combine nearby sights."
          },
          {
            "challenge": "Small boats at Rammang-Rammang.",
            "solution": "Several small boats are reserved for the group, travelling together."
          },
          {
            "challenge": "Heat and humidity.",
            "solution": "Outdoor visits are planned for the morning and late afternoon."
          },
          {
            "challenge": "Conservative culture.",
            "solution": "Guests are briefed to dress modestly, especially at religious sites."
          },
          {
            "challenge": "Connections to Toraja and Bira.",
            "solution": "We plan Makassar at the start or end of the journey, to break the long transfers."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Tana Toraja",
                "href": "/destinations/sulawesi/tana-toraja"
              },
              {
                "text": " "
              },
              {
                "text": "Tanjung Bira",
                "href": "/destinations/sulawesi/tanjung-bira"
              },
              {
                "text": "."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How many nights in Makassar?",
            "answer": "One or two nights are enough for the city, Rammang-Rammang and the caves."
          },
          {
            "question": "Can guests see the cave art?",
            "answer": "Yes, at caves open to visitors in the Maros area, accompanied by local guides."
          },
          {
            "question": "Is Makassar good for food?",
            "answer": "Very. It is known for seafood and local dishes such as coto Makassar."
          }
        ],
        "cta": "Planning a Sulawesi journey? Send us your dates and we will make the most of Makassar for your group.",
        "published": true
      },
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        // TODO: Foto utama gallery belum ditemukan untuk tanjung-bira.
        "slug": "tanjung-bira",
        "metaTitle": "Tanjung Bira & Phinisi Boat Builders Tours | Aneka Kartika",
        "metaDescription": "Tanjung Bira for groups of up to 20: white beaches and the phinisi boat builders of Tana Beru, arranged by an Indonesia DMC operating since 1979.",
        "h1": "Tanjung Bira: White Beaches and Phinisi Builders",
        "heroImage": null,
        "intro": [
          "At the southern tip of South Sulawesi, Tanjung Bira is known for powder-white beaches and clear water. Nearby, in Tana Beru, craftsmen still build the great wooden phinisi ships by hand, using techniques recognised by UNESCO as Intangible Cultural Heritage.",
          "For groups, Bira combines a rare cultural encounter with the boat builders and a relaxed coastal stay at the end of a South Sulawesi journey."
        ],
        "highlights": [
          {
            "title": "The phinisi boatyards.",
            "text": "Shipwrights building large wooden vessels on the beach, without plans on paper."
          },
          {
            "title": "Bira Beach.",
            "text": "Soft white sand and turquoise water."
          },
          {
            "title": "Snorkelling.",
            "text": "Reefs around nearby islands, by boat."
          },
          {
            "title": "Coastal villages.",
            "text": "Fishing communities and traditional houses on stilts."
          }
        ],
        "experience": [
          "Visits to the boatyards are arranged with respect for the builders’ work.",
          "An English-speaking guide explains the history of the phinisi and the Bugis seafaring tradition.",
          "Groups of up to 20 guests, with boat trips arranged for snorkelling.",
          "Best available beach hotels in Bira, mostly in the 3★ range."
        ],
        "bestTime": [
          "The drier months, roughly June to October, offer calm seas and sunny beach days.",
          "Boat building continues all year, so the boatyards can be visited in any season."
        ],
        "logistics": [
          {
            "challenge": "Long drive from Makassar.",
            "solution": "The journey takes several hours, so we plan stops and at least two nights in Bira."
          },
          {
            "challenge": "Limited hotel categories.",
            "solution": "We use the best available beach hotels and set clear expectations with the agent."
          },
          {
            "challenge": "Safety at working boatyards.",
            "solution": "Guests stay in safe areas indicated by the guide and do not climb on vessels under construction."
          },
          {
            "challenge": "Sea conditions.",
            "solution": "Snorkelling trips depend on the sea and are planned for the morning."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Makassar",
                "href": "/destinations/sulawesi/makassar"
              },
              {
                "text": " "
              },
              {
                "text": "Tana Toraja",
                "href": "/destinations/sulawesi/tana-toraja"
              },
              {
                "text": " for a full South Sulawesi programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Can guests watch the boat builders at work?",
            "answer": "Yes, respectfully, from safe areas indicated by our guide."
          },
          {
            "question": "How far is Bira from Makassar?",
            "answer": "Several hours by road."
          },
          {
            "question": "Is Bira suitable for a beach stay?",
            "answer": "Yes, for groups who prefer a simple, quiet coastal setting."
          }
        ],
        "cta": "Want to show your clients the craft behind the phinisi? Send us your dates and we will add Tanjung Bira to your Sulawesi programme.",
        "published": true
      },
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        // TODO: Foto utama gallery belum ditemukan untuk bunaken.
        "slug": "bunaken",
        "metaTitle": "Bunaken Marine Park Snorkelling & Diving | Aneka Kartika",
        "metaDescription": "Bunaken Marine Park for groups of up to 20: coral walls, turtles and snorkelling or diving trips from Manado, arranged by an Indonesia DMC.",
        "h1": "Bunaken: Coral Walls of North Sulawesi",
        "heroImage": null,
        "intro": [
          "Off the coast of Manado in North Sulawesi, Bunaken National Marine Park protects some of the most spectacular coral walls in Indonesia, dropping steeply into deep blue water just metres from the shore. Turtles, reef fish and colourful corals make it a world-class destination for snorkellers and divers.",
          "A short boat ride from Manado, Bunaken is easily combined with the volcanoes, highlands and wildlife reserves of North Sulawesi."
        ],
        "highlights": [
          {
            "title": "Coral wall snorkelling.",
            "text": "Shallow reef tops that drop into deep walls, ideal for snorkellers."
          },
          {
            "title": "Diving for all levels.",
            "text": "Licensed dive centres offer introductory dives and guided dives for certified divers."
          },
          {
            "title": "Green turtles.",
            "text": "Frequently seen grazing on the reefs."
          },
          {
            "title": "Manado Tua.",
            "text": "The volcanic island rising behind Bunaken, a striking backdrop."
          }
        ],
        "experience": [
          "Boats, snorkelling equipment and licensed dive centres are booked for the group.",
          "An English-speaking guide coordinates the day, with experienced boat crews in the water.",
          "Groups of up to 20 guests, split by swimming ability between snorkellers and divers.",
          "Hotels from 3 to 5 stars in Manado, or dive resorts on nearby islands."
        ],
        "bestTime": [
          "The best conditions are usually from about April to November, with calmer seas and good visibility.",
          "From December to February, waves and rain can affect crossings and visibility."
        ],
        "logistics": [
          {
            "challenge": "Mixed swimming abilities.",
            "solution": "Non-swimmers can view the reef from a glass-bottom boat, and snorkellers wear life jackets."
          },
          {
            "challenge": "Sea conditions.",
            "solution": "We check the forecast and plan the crossing in the morning when the sea is calmer."
          },
          {
            "challenge": "Marine park rules.",
            "solution": "Guests are briefed not to touch or stand on the coral, and to use reef-safe sunscreen."
          },
          {
            "challenge": "Boat capacity.",
            "solution": "We use boats sized for the group, or two boats travelling together."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Tangkoko",
                "href": "/destinations/sulawesi/tangkoko"
              },
              {
                "text": " "
              },
              {
                "text": "the Minahasa Highlands",
                "href": "/destinations/sulawesi/minahasa-highlands"
              },
              {
                "text": " for a North Sulawesi programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How long is the boat ride to Bunaken?",
            "answer": "Usually under an hour from Manado."
          },
          {
            "question": "Can non-divers enjoy Bunaken?",
            "answer": "Yes. Snorkelling is excellent, as the reef tops are close to the surface."
          },
          {
            "question": "Is a marine park fee required?",
            "answer": "Yes. It is included in our quotations."
          }
        ],
        "cta": "Looking for a world-class reef experience? Send us your dates and group profile, and we will plan Bunaken for your clients.",
        "published": true
      },
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        // TODO: Foto utama gallery belum ditemukan untuk tangkoko.
        "slug": "tangkoko",
        "metaTitle": "Tangkoko Tarsier & Wildlife Tours for Groups | Aneka Kartika",
        "metaDescription": "Tangkoko Nature Reserve for groups of up to 20: tarsiers, black crested macaques and hornbills with local ranger guides, arranged by an Indonesia DMC.",
        "h1": "Tangkoko: Tarsiers and Macaques of North Sulawesi",
        "heroImage": null,
        "intro": [
          "On the northeastern tip of Sulawesi, the forests of Tangkoko Nature Reserve are home to some of the island’s most extraordinary wildlife: the tiny spectral tarsier with its enormous eyes, troops of black crested macaques and the striking knobbed hornbill.",
          "Sulawesi’s animals evolved in isolation, and many are found nowhere else on earth. A walk in Tangkoko with local ranger guides is a highlight for nature lovers."
        ],
        "highlights": [
          {
            "title": "Spectral tarsiers.",
            "text": "Seen at dusk as they leave their roost trees to hunt."
          },
          {
            "title": "Black crested macaques.",
            "text": "Large troops moving through the forest and along the beach."
          },
          {
            "title": "Hornbills and kingfishers.",
            "text": "Rich birdlife, including species found only on Sulawesi."
          },
          {
            "title": "Lembeh Strait.",
            "text": "Nearby, one of the best places in the world for macro diving."
          }
        ],
        "experience": [
          "Walks are led by local ranger guides who know where the animals are likely to be.",
          "An English-speaking guide coordinates the programme and explains Sulawesi’s unique wildlife.",
          "Groups of up to 20 guests, split into small parties to keep disturbance to a minimum.",
          "Simple lodges near the reserve, or 3–5★ hotels in Manado with an early departure."
        ],
        "bestTime": [
          "Tangkoko can be visited all year. The drier months, roughly April to October, make the forest trails easier.",
          "Tarsiers are seen around sunset, so walks usually take place in the late afternoon, or at dawn for birdwatching."
        ],
        "logistics": [
          {
            "challenge": "Small groups in the forest.",
            "solution": "The group is split into small parties, each with a ranger guide."
          },
          {
            "challenge": "Wildlife rules.",
            "solution": "No feeding, touching or flash photography; guests keep the distance set by the guides."
          },
          {
            "challenge": "Distance from Manado.",
            "solution": "The drive takes around two hours, so we plan an early start or an overnight stay nearby."
          },
          {
            "challenge": "Mosquitoes and humidity.",
            "solution": "Guests are reminded to bring repellent, long sleeves and closed shoes."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Bunaken",
                "href": "/destinations/sulawesi/bunaken"
              },
              {
                "text": " "
              },
              {
                "text": "the Minahasa Highlands",
                "href": "/destinations/sulawesi/minahasa-highlands"
              },
              {
                "text": "."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Are sightings guaranteed?",
            "answer": "Tarsiers and macaques are seen very often, but wildlife can never be guaranteed."
          },
          {
            "question": "How long is the walk?",
            "answer": "Usually two to three hours on mostly flat forest trails."
          },
          {
            "question": "Is it suitable for families?",
            "answer": "Yes, for children who can walk in the forest and stay quiet around the animals."
          }
        ],
        "cta": "Want to show your clients Sulawesi’s unique wildlife? Send us your dates and we will plan a Tangkoko programme for your group.",
        "published": true
      },
      {
        "region": "Sulawesi",
        "regionSlug": "sulawesi",
        // TODO: Foto utama gallery belum ditemukan untuk minahasa-highlands.
        "slug": "minahasa-highlands",
        "metaTitle": "Minahasa Highlands & Tomohon Group Tours | Aneka Kartika",
        "metaDescription": "The Minahasa highlands for groups of up to 20: volcano walks, crater lakes, flower gardens and stone graves near Manado, arranged by an Indonesia DMC.",
        "h1": "Minahasa Highlands: Volcanoes, Lakes and Flowers",
        "heroImage": null,
        "intro": [
          "Just an hour inland from Manado, the Minahasa highlands rise to a cool plateau of volcanoes, crater lakes and flower gardens. The city of Tomohon is known as Indonesia’s flower city, and the surrounding villages preserve the culture of the Minahasa people.",
          "For groups, the highlands make a refreshing day out from Manado, combining easy volcano walks with lakes, markets and local history."
        ],
        "highlights": [
          {
            "title": "Mount Mahawu.",
            "text": "An easy walk to the rim of a volcanic crater with views over the highlands."
          },
          {
            "title": "Lake Linow.",
            "text": "A volcanic lake that changes colour with the light and sulphur content."
          },
          {
            "title": "Tomohon flower gardens.",
            "text": "Flower nurseries and, in some years, a colourful flower festival."
          },
          {
            "title": "Waruga stone graves.",
            "text": "Ancient Minahasa stone sarcophagi at Sawangan."
          },
          {
            "title": "Lake Tondano.",
            "text": "The largest lake in North Sulawesi, surrounded by rice fields."
          }
        ],
        "experience": [
          "An English-speaking guide explains Minahasa history, from ancient graves to colonial churches.",
          "Groups of up to 20 guests, usually on a day trip from Manado.",
          "Lunch overlooking a lake or in a local restaurant serving Minahasa dishes.",
          "Hotels from 3 to 5 stars in Manado, or highland hotels in Tomohon."
        ],
        "bestTime": [
          "The highlands can be visited all year, with a cool climate. Mornings bring the clearest views of the volcanoes.",
          "Tomohon’s flower festival, when held, usually takes place around August; dates vary."
        ],
        "logistics": [
          {
            "challenge": "Traditional markets.",
            "solution": "Tomohon’s market is known for unusual meats that some guests may find distressing. The visit is optional, and guests are told beforehand."
          },
          {
            "challenge": "Volcanic activity.",
            "solution": "We follow official recommendations for the volcanoes in the area."
          },
          {
            "challenge": "Winding roads.",
            "solution": "Comfortable vehicles and breaks for guests prone to motion sickness."
          },
          {
            "challenge": "Cool weather.",
            "solution": "Guests are reminded to bring a light jacket."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Bunaken",
                "href": "/destinations/sulawesi/bunaken"
              },
              {
                "text": " "
              },
              {
                "text": "Tangkoko",
                "href": "/destinations/sulawesi/tangkoko"
              },
              {
                "text": " for a full North Sulawesi programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How far are the highlands from Manado?",
            "answer": "About an hour by road."
          },
          {
            "question": "Is the volcano walk difficult?",
            "answer": "No. Mount Mahawu has a short path and steps to the crater rim."
          },
          {
            "question": "Do we have to visit the Tomohon market?",
            "answer": "No. It is optional, and we suggest alternatives for guests who prefer not to."
          }
        ],
        "cta": "Planning North Sulawesi? Send us your dates and we will add a day in the Minahasa highlands for your group.",
        "published": true
      }
    ]
  },
  {
    "region": "Kalimantan",
    "slug": "kalimantan",
    "name": "Kalimantan",
    "metaTitle": "Kalimantan Group Tours | Indonesia DMC | Aneka Kartika",
    "metaDescription": "Explore Tanjung Puting, Banjarmasin, Loksado, Derawan Islands, Mahakam River and West Kalimantan.",
    "h1": "Kalimantan",
    "heroImage": {
      "src": "/images/destinations/kalimantan-1280.webp",
      "srcSet": "/images/destinations/kalimantan-640.webp 640w, /images/destinations/kalimantan-1280.webp 1280w",
      "alt": "Kalimantan landscape"
    },
    "intro": [
      "Explore Tanjung Puting, Banjarmasin, Loksado, Derawan Islands, Mahakam River and West Kalimantan."
    ],
    "attractions": [
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: menunggu konfirmasi status taman nasional.
        "slug": "tanjung-puting",
        "metaTitle": "Tanjung Puting Orangutan Klotok Tours | Aneka Kartika",
        "metaDescription": "Tanjung Puting and Camp Leakey for groups of up to 20: klotok river boats, orangutan feeding stations and park permits arranged by an Indonesia DMC.",
        "h1": "Tanjung Puting: Orangutans by River Boat",
        "heroImage": {
          "src": "/images/destinations/tanjung-puting-1280.webp",
          "srcSet": "/images/destinations/tanjung-puting-640.webp 640w, /images/destinations/tanjung-puting-1280.webp 1280w",
          "alt": "Orangutan in Tanjung Puting"
        },
        "intro": [
          "In Central Kalimantan, on the island of Borneo, Tanjung Puting National Park protects peat swamp forest and lowland rainforest along the Sekonyer River. It is home to one of the largest populations of wild Bornean orangutans, and to Camp Leakey, the research station founded in 1971 that made the park famous.",
          "The classic way to explore is aboard a klotok, a wooden riverboat where guests eat, travel and sleep on deck under mosquito nets, gliding past proboscis monkeys and kingfishers between orangutan feeding stations."
        ],
        "highlights": [
          {
            "title": "Camp Leakey.",
            "text": "The historic research camp, with its information centre and forest trails."
          },
          {
            "title": "Orangutan feeding stations.",
            "text": "Rangers bring fruit at set times, and orangutans often appear from the forest."
          },
          {
            "title": "Life on the klotok.",
            "text": "Days on the river and nights on deck under the jungle sky."
          },
          {
            "title": "Proboscis monkeys.",
            "text": "Seen along the riverbanks in the late afternoon."
          },
          {
            "title": "Fireflies at night.",
            "text": "Trees along the river lit up after dark."
          }
        ],
        "experience": [
          "Klotoks, crews, cooks and park permits are arranged as one package, with menus prepared in advance.",
          "An English-speaking guide travels with the group, alongside the local guides on each boat.",
          "Groups of up to 20 guests, sailing on several klotoks travelling together.",
          "Hotels in Pangkalan Bun before and after the river trip; the nights on the river are spent on the boats."
        ],
        "bestTime": [
          "Tanjung Puting can be visited all year. The drier months, roughly May to September, are popular, while the wetter months bring more fruit in the forest and fewer visitors.",
          "In some dry seasons, forest fires and haze can affect the area and lead to temporary restrictions. We monitor the situation closely before every departure."
        ],
        "logistics": [
          {
            "challenge": "Klotok capacity.",
            "solution": "Each klotok sleeps a small number of guests, so a group of 20 travels on several boats sailing together, with the same itinerary."
          },
          {
            "challenge": "Basic facilities on board.",
            "solution": "Guests sleep on mattresses on deck under mosquito nets, with simple bathrooms. We set clear expectations with the agent, and higher-standard boats can be requested."
          },
          {
            "challenge": "Wildlife rules.",
            "solution": "Guests keep their distance from orangutans, do not feed them and follow the rangers at feeding stations."
          },
          {
            "challenge": "Flights to Pangkalan Bun.",
            "solution": "Flight capacity is limited, so we book group seats early."
          },
          {
            "challenge": "Haze and park restrictions.",
            "solution": "We follow national park announcements and adjust the route or dates if access is limited."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Banjarmasin",
                "href": "/destinations/kalimantan/banjarmasin"
              },
              {
                "text": " for a wider Kalimantan programme."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine with Java, with flights from Jakarta, Surabaya or Semarang."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How long should the river trip be?",
            "answer": "Three days and two nights is the classic programme, reaching Camp Leakey and the main feeding stations."
          },
          {
            "question": "Are orangutans guaranteed?",
            "answer": "Sightings at feeding stations are frequent, but these are wild animals and nothing can be guaranteed."
          },
          {
            "question": "Is the klotok comfortable?",
            "answer": "It is simple but comfortable, with meals cooked on board. It is an adventure rather than a hotel stay."
          }
        ],
        "cta": "Looking for an unforgettable wildlife journey? Send us your dates and group profile, and we will plan a Tanjung Puting river trip for your clients.",
        "published": false
      },
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: Foto utama gallery belum ditemukan untuk banjarmasin.
        "slug": "banjarmasin",
        "metaTitle": "Banjarmasin Floating Market Tours for Groups | Aneka Kartika",
        "metaDescription": "Banjarmasin for groups of up to 20: dawn floating markets, river life and the diamond town of Martapura, arranged by an Indonesia DMC since 1979.",
        "h1": "Banjarmasin: City of a Thousand Rivers",
        "heroImage": null,
        "intro": [
          "Built on the delta of the Barito and Martapura rivers in South Kalimantan, Banjarmasin is a city where life has always revolved around water. Before sunrise, women in wide straw hats paddle their boats to the floating markets to trade fruit, vegetables and cakes from boat to boat.",
          "For groups, Banjarmasin offers a glimpse of a river culture found nowhere else in Indonesia, and it is the starting point for journeys into the Meratus mountains."
        ],
        "highlights": [
          {
            "title": "Lok Baintan floating market.",
            "text": "Traders in wooden boats at dawn, best seen from a river boat."
          },
          {
            "title": "River life.",
            "text": "Houses on stilts, river mosques and children swimming along the banks."
          },
          {
            "title": "Martapura.",
            "text": "A town famous for its diamond and gemstone market."
          },
          {
            "title": "Traditional diamond mining.",
            "text": "Small-scale diamond panning at Cempaka."
          },
          {
            "title": "Banjar cuisine.",
            "text": "Soto Banjar and other local dishes, eaten by the river."
          }
        ],
        "experience": [
          "River boats are reserved for the group with an early departure to reach the market at its busiest.",
          "An English-speaking guide explains Banjar culture and the history of the river trade.",
          "Groups of up to 20 guests, split across several boats travelling together.",
          "Hotels from 3 to 5 stars in Banjarmasin."
        ],
        "bestTime": [
          "Banjarmasin can be visited all year. The floating market is busiest early in the morning, usually soon after dawn.",
          "Market activity can be quieter on certain days and during religious holidays, so we check before confirming."
        ],
        "logistics": [
          {
            "challenge": "A very early start.",
            "solution": "Boats leave before sunrise. We plan an early night and simple breakfast on board."
          },
          {
            "challenge": "Boat safety.",
            "solution": "Life jackets are provided, and boats are sized for the group."
          },
          {
            "challenge": "Conservative culture.",
            "solution": "Guests are briefed to dress modestly, especially near mosques."
          },
          {
            "challenge": "Buying gemstones.",
            "solution": "Our guide explains how the market works, and guests are never pressured to buy."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Loksado",
                "href": "/destinations/kalimantan/loksado"
              },
              {
                "text": " for bamboo rafting in the Meratus mountains."
              }
            ]
          },
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Tanjung Puting",
                "href": "/destinations/kalimantan/tanjung-puting"
              },
              {
                "text": " for a wider Kalimantan programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How early do we need to leave for the floating market?",
            "answer": "Usually before sunrise, to arrive while the market is at its busiest."
          },
          {
            "question": "How many nights in Banjarmasin?",
            "answer": "One or two nights, or more when combined with Loksado."
          },
          {
            "question": "Is the boat trip suitable for older travellers?",
            "answer": "Yes. Boarding is assisted, and the boats travel calmly on the river."
          }
        ],
        "cta": "Want to show your clients life on Borneo’s rivers? Send us your dates and we will plan Banjarmasin for your group.",
        "published": true
      },
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: Foto utama gallery belum ditemukan untuk loksado.
        "slug": "loksado",
        "metaTitle": "Loksado Bamboo Rafting & Meratus Dayak Tours | Aneka Kartika",
        "metaDescription": "Loksado for groups of up to 20: bamboo rafting on the Amandit River and Meratus Dayak villages in South Kalimantan, arranged by an Indonesia DMC.",
        "h1": "Loksado: Bamboo Rafting in the Meratus Mountains",
        "heroImage": null,
        "intro": [
          "In the foothills of the Meratus mountains, the village of Loksado is home to the Meratus Dayak communities and their traditional meeting halls. The clear Amandit River flows through the forest here, and the best way to travel it is on a long bamboo raft steered by a local rafter.",
          "For groups looking for adventure and culture together, Loksado offers a gentle river journey and a rare encounter with Dayak village life."
        ],
        "highlights": [
          {
            "title": "Bamboo rafting.",
            "text": "A gentle journey of a few hours down the Amandit River, steered by experienced local rafters."
          },
          {
            "title": "Meratus Dayak villages.",
            "text": "Traditional balai, communal halls shared by extended families."
          },
          {
            "title": "Forest walks.",
            "text": "Trails to waterfalls and viewpoints in the Meratus hills."
          },
          {
            "title": "Village crafts.",
            "text": "Bamboo and rattan work made by local families."
          }
        ],
        "experience": [
          "Rafts and local rafters are booked in advance, with each raft carrying a small number of guests.",
          "An English-speaking guide explains Dayak customs and introduces the group to village leaders.",
          "Groups of up to 20 guests, rafting in a convoy of bamboo rafts.",
          "Simple lodges in Loksado, with 3–5★ hotels in Banjarmasin before and after."
        ],
        "bestTime": [
          "Rafting is possible most of the year, depending on water levels. After heavy rain, the river can be too high, and in long dry periods, too low.",
          "Mornings are best for rafting and walks."
        ],
        "logistics": [
          {
            "challenge": "River conditions.",
            "solution": "Rafters check the water level each morning, and we keep an alternative programme ready."
          },
          {
            "challenge": "Small raft capacity.",
            "solution": "The group travels in several rafts together, with life jackets for every guest."
          },
          {
            "challenge": "Simple accommodation.",
            "solution": "Lodges in Loksado are basic. We set clear expectations with the agent or plan a long day trip."
          },
          {
            "challenge": "Long drive from Banjarmasin.",
            "solution": "The journey takes several hours; we plan comfortable stops."
          },
          {
            "challenge": "Respecting village customs.",
            "solution": "Guests are briefed on behaviour in the balai and follow the guide’s lead."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Banjarmasin",
                "href": "/destinations/kalimantan/banjarmasin"
              },
              {
                "text": " for a South Kalimantan programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Is bamboo rafting safe?",
            "answer": "Yes, with experienced local rafters and life jackets, and only when the river conditions are suitable."
          },
          {
            "question": "How long is the rafting trip?",
            "answer": "Usually a few hours, depending on the water level."
          },
          {
            "question": "Do guests get wet?",
            "answer": "Usually a little. Guests are advised to wear quick-dry clothes and protect their belongings."
          }
        ],
        "cta": "Looking for a gentle adventure in Borneo? Send us your dates and group profile, and we will plan Loksado for your clients.",
        "published": true
      },
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: Foto utama gallery belum ditemukan untuk derawan-islands.
        "slug": "derawan-islands",
        "metaTitle": "Derawan Islands Tours for Groups | East Kalimantan | Aneka Kartika",
        "metaDescription": "Derawan, Maratua and Kakaban for groups of up to 20: turtles, a stingless jellyfish lake and manta rays, arranged by an Indonesia DMC.",
        "h1": "Derawan Islands: Turtles, Mantas and a Jellyfish Lake",
        "heroImage": null,
        "intro": [
          "Off the coast of East Kalimantan, the Derawan archipelago is one of the richest marine areas in Indonesia. Green turtles nest on its beaches, manta rays feed around Sangalaki, and on Kakaban, a lake cut off from the sea is home to jellyfish that have lost their sting.",
          "Remote and uncrowded, the Derawan Islands offer groups a true island escape, with water villages, white sand and clear water."
        ],
        "highlights": [
          {
            "title": "Kakaban lake.",
            "text": "Swimming among harmless jellyfish in an ancient marine lake."
          },
          {
            "title": "Green turtles.",
            "text": "Turtles feeding in the shallows and nesting on the beaches."
          },
          {
            "title": "Manta rays at Sangalaki.",
            "text": "Snorkelling with reef mantas in season."
          },
          {
            "title": "Maratua.",
            "text": "Turquoise lagoons and overwater bungalows."
          },
          {
            "title": "Water villages.",
            "text": "Fishing communities built on stilts over the sea."
          }
        ],
        "experience": [
          "Flights, road transfers and speedboats are combined into a single, well-timed journey.",
          "An English-speaking guide travels with the group, with experienced boat crews for island-hopping.",
          "Groups of up to 20 guests, using several speedboats travelling together.",
          "The best available resorts on Maratua or Derawan, with a limited choice in the higher categories."
        ],
        "bestTime": [
          "The calmest seas are usually from about March to October. Manta sightings vary through the year.",
          "Rougher seas in the wetter months can affect boat transfers between islands."
        ],
        "logistics": [
          {
            "challenge": "A long journey.",
            "solution": "Groups fly to Berau, then continue by road and speedboat. We time connections carefully and allow a full day for travel."
          },
          {
            "challenge": "Limited accommodation.",
            "solution": "Resorts are small. We block rooms early and may split the group across two properties."
          },
          {
            "challenge": "Sea conditions.",
            "solution": "Speedboat transfers are planned for the calmer morning hours."
          },
          {
            "challenge": "Marine rules.",
            "solution": "At Kakaban, guests swim without sunscreen or fins to protect the lake. They are briefed in advance."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "the Mahakam River",
                "href": "/destinations/kalimantan/mahakam-river"
              },
              {
                "text": " for an East Kalimantan programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "How do groups get to Derawan?",
            "answer": "By flight to Berau, followed by a road transfer and a speedboat to the islands."
          },
          {
            "question": "Are the jellyfish really harmless?",
            "answer": "Yes. The jellyfish in Kakaban have evolved without a dangerous sting."
          },
          {
            "question": "How many nights should we stay?",
            "answer": "At least three nights, given the travel time and the number of islands to visit."
          }
        ],
        "cta": "Looking for a remote island escape? Send us your dates and group profile, and we will plan the Derawan Islands for your clients.",
        "published": true
      },
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: Foto utama gallery belum ditemukan untuk mahakam-river.
        "slug": "mahakam-river",
        "metaTitle": "Mahakam River & Dayak Culture Tours | Aneka Kartika",
        "metaDescription": "The Mahakam River for groups of up to 20: Dayak longhouses, river villages and the Kutai heritage of East Kalimantan, arranged by an Indonesia DMC.",
        "h1": "Mahakam River: Into the Heart of Borneo",
        "heroImage": null,
        "intro": [
          "The Mahakam is the great river of East Kalimantan, flowing for hundreds of kilometres from the interior of Borneo to the sea near Samarinda. Along its banks lie river villages, lakes and the longhouses of Dayak communities.",
          "For groups, the Mahakam offers a journey into the heart of Borneo, combining the heritage of the Kutai sultanate with Dayak culture and river life."
        ],
        "highlights": [
          {
            "title": "Dayak longhouses.",
            "text": "Traditional lamin, with carved posts and painted walls."
          },
          {
            "title": "Dayak dances.",
            "text": "Performances of traditional dance and music in a longhouse setting."
          },
          {
            "title": "Tenggarong.",
            "text": "The former capital of the Kutai sultanate, with its palace museum."
          },
          {
            "title": "River villages.",
            "text": "Wooden houses on stilts and floating homes along the river."
          },
          {
            "title": "Lakes of the middle Mahakam.",
            "text": "Wetlands rich in birds, in a region known for rare freshwater dolphins."
          }
        ],
        "experience": [
          "River boats and land transfers are planned together, with realistic distances for the group.",
          "An English-speaking guide explains the history of the Kutai sultanate and Dayak traditions.",
          "Groups of up to 20 guests, with dance performances arranged in advance.",
          "Hotels from 3 to 5 stars in Samarinda or Balikpapan, and simpler lodges further upriver."
        ],
        "bestTime": [
          "The river can be travelled all year. Water levels are higher in the wetter months, which makes some upriver routes easier by boat.",
          "The Erau festival in Tenggarong, a celebration of Kutai heritage, is a colourful time to visit; dates vary each year."
        ],
        "logistics": [
          {
            "challenge": "Long distances.",
            "solution": "We focus on the lower and middle Mahakam for most groups, and offer longer upriver journeys only to adventurous travellers."
          },
          {
            "challenge": "Simple facilities upriver.",
            "solution": "Accommodation becomes basic away from the cities. We set clear expectations with the agent."
          },
          {
            "challenge": "Respecting Dayak communities.",
            "solution": "Guests ask before taking photos and follow the guide’s lead in longhouses."
          },
          {
            "challenge": "River conditions.",
            "solution": "Boat schedules depend on water levels, which we check before departure."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "the Derawan Islands",
                "href": "/destinations/kalimantan/derawan-islands"
              },
              {
                "text": " for an East Kalimantan programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "Can we see a Dayak performance?",
            "answer": "Yes. Performances can be arranged in a longhouse for the group."
          },
          {
            "question": "How do groups reach the Mahakam?",
            "answer": "By flight to Balikpapan or Samarinda, then by road and river boat."
          },
          {
            "question": "Is the river trip suitable for all guests?",
            "answer": "Shorter programmes on the lower Mahakam suit most guests; longer journeys suit adventurous travellers."
          }
        ],
        "cta": "Want to take your clients into the heart of Borneo? Send us your dates and we will design a Mahakam River programme for your group.",
        "published": true
      },
      {
        "region": "Kalimantan",
        "regionSlug": "kalimantan",
        // TODO: Foto utama gallery belum ditemukan untuk west-kalimantan.
        "slug": "west-kalimantan",
        "metaTitle": "Pontianak & Singkawang Tours for Groups | Aneka Kartika",
        "metaDescription": "Pontianak and Singkawang for groups of up to 20: the Equator Monument, Kapuas River and Chinese-Indonesian heritage, arranged by an Indonesia DMC.",
        "h1": "West Kalimantan: On the Equator",
        "heroImage": null,
        "intro": [
          "Pontianak, the capital of West Kalimantan, sits almost exactly on the equator, on the banks of the Kapuas, the longest river in Indonesia. Malay, Dayak and Chinese communities have shaped the region, giving it a distinctive blend of cultures, temples and cuisine.",
          "North of Pontianak, the town of Singkawang is known for its many Chinese temples and its celebrations of Chinese New Year and Cap Go Meh, among the largest in Indonesia."
        ],
        "highlights": [
          {
            "title": "The Equator Monument.",
            "text": "A landmark marking the line of the equator in Pontianak."
          },
          {
            "title": "The Kapuas River.",
            "text": "River boats, the old sultan’s palace and riverside life."
          },
          {
            "title": "Singkawang temples.",
            "text": "Colourful Chinese temples and a strong Hakka heritage."
          },
          {
            "title": "Cap Go Meh.",
            "text": "A spectacular parade on the fifteenth day of Chinese New Year."
          },
          {
            "title": "Local cuisine.",
            "text": "A mix of Malay, Chinese and Dayak flavours."
          }
        ],
        "experience": [
          "An English-speaking guide explains the region’s mix of cultures and history.",
          "Groups of up to 20 guests, with river boats and temple visits arranged for the group.",
          "Hotels from 3 to 5 stars in Pontianak, and the best available hotels in Singkawang.",
          "Festival programmes are planned well in advance for Cap Go Meh."
        ],
        "bestTime": [
          "West Kalimantan can be visited all year. Around the equinoxes in March and September, objects at the Equator Monument cast almost no shadow at midday, an event celebrated locally.",
          "Cap Go Meh, usually in February or March, brings huge crowds to Singkawang and fills hotels early."
        ],
        "logistics": [
          {
            "challenge": "Festival crowds.",
            "solution": "For Cap Go Meh, we reserve hotels and viewing spots months in advance."
          },
          {
            "challenge": "Distance to Singkawang.",
            "solution": "The drive takes a few hours, with coastal stops on the way."
          },
          {
            "challenge": "Heat and humidity.",
            "solution": "Outdoor visits are planned for mornings and late afternoons."
          },
          {
            "challenge": "Temple etiquette.",
            "solution": "Guests are briefed on behaviour and dress in temples and mosques."
          }
        ],
        "pairsWith": [
          {
            "segments": [
              {
                "text": "Combine "
              },
              {
                "text": "Banjarmasin",
                "href": "/destinations/kalimantan/banjarmasin"
              },
              {
                "text": " "
              },
              {
                "text": "Tanjung Puting",
                "href": "/destinations/kalimantan/tanjung-puting"
              },
              {
                "text": " for a wider Kalimantan programme."
              }
            ]
          }
        ],
        "faq": [
          {
            "question": "When is the best time for Cap Go Meh?",
            "answer": "On the fifteenth day after Chinese New Year, usually in February or March."
          },
          {
            "question": "How do groups get to Pontianak?",
            "answer": "By direct flight from Jakarta and other major cities."
          },
          {
            "question": "How many nights are needed?",
            "answer": "Two to three nights to cover Pontianak and Singkawang."
          }
        ],
        "cta": "Looking for a cultural destination few travellers know? Send us your dates and we will plan West Kalimantan for your group.",
        "published": true
      }
    ]
  }
];
