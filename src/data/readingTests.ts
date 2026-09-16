import type { ReadingTest } from '../types/reading';

export const READING_TESTS: ReadingTest[] = [
  {
    id: 'academic-test-01',
    title: 'Cambridge Style Academic Practice Test 1',
    description: 'A full-length 3-passage IELTS Academic Reading examination featuring authentic question types, line-by-line annotations, and band score mapping.',
    passages: [
      {
        id: 'p1',
        number: 1,
        title: 'The Rise of Urban Agriculture',
        subtitle: 'How modern cities are transforming rooftops, abandoned lots, and vertical towers into hyper-productive food systems.',
        paragraphs: [
          {
            label: 'A',
            text: 'By the year 2050, the United Nations projects that nearly 70 percent of the world’s estimated 9.8 billion inhabitants will reside in urban metropolises. This unprecedented demographic shift poses profound logistical challenges for global food supply chains. Currently, commercial agriculture consumes roughly 70 percent of accessible global freshwater and occupies over a third of Earth’s arable land. Furthermore, the transportation of fresh produce from distant rural agrarian belts to dense urban centers generates astronomical carbon emissions and incurs substantial food spoilage along the transit corridors.'
          },
          {
            label: 'B',
            text: 'In response, a burgeoning technological and environmental movement known as urban agriculture has transitioned from fringe idealism into mainstream infrastructure. Modern urban farming diverges sharply from traditional allotments or small backyard gardens. It leverages sophisticated technological advancements such as controlled-environment agriculture (CEA), hydroponics (cultivating plants in nutrient-rich liquid solutions without soil), and aeroponics, wherein suspended plant root matrices are intermittently misted with atomized nutrients.'
          },
          {
            label: 'C',
            text: 'Chief among the commercial manifestations of this movement are vertical farms. Situated within retrofitted industrial warehouses, subterranean bomb shelters, and purpose-built climate-controlled towers, vertical farms stack cultivation trays vertically toward the ceiling. By utilizing specialized LED lighting tuned to photosynthetically active wavelengths, operators can manipulate crop growth cycles, accelerating maturation rates by up to 300 percent compared to open-field farming. Because these facilities operate within fully enclosed, bio-secure environments, synthetic chemical pesticides and fungicides are rendered completely unnecessary.'
          },
          {
            label: 'D',
            text: 'The environmental and resource efficiencies claimed by proponents are extraordinary. A representative vertical farming facility in Singapore or Newark can yield up to 350 times more leafy greens per square meter than conventional outdoor agriculture, while utilizing an astonishing 95 percent less water due to continuous internal recycling of condensed transpiration. Moreover, producing food within walking distance of urban consumers eliminates long-haul refrigeration logistics and drastically reduces post-harvest loss.'
          },
          {
            label: 'E',
            text: 'Nevertheless, the industry encounters sharp skepticism from agricultural economists and energy analysts. The Achilles’ heel of indoor urban agriculture remains its prodigious electrical consumption. Replicating natural sunlight with artificial illumination and maintaining constant heating, ventilation, and air conditioning (HVAC) systems requires colossal kilowatt-hour inputs. If this electricity is derived from fossil fuel combustion rather than renewable sources, the net carbon footprint of vertically grown produce can paradoxically surpass that of food trucked across continents.'
          },
          {
            label: 'F',
            text: 'Furthermore, the high capital expenditure required to acquire metropolitan real estate and install automated robotic harvesting systems currently restricts commercial indoor production to high-margin, fast-growing crops—predominantly microgreens, salad leaves, and culinary herbs. Staple calorie crops that sustain human populations, such as wheat, rice, corn, and root vegetables, remain economically and physically unfeasible to cultivate indoors at scale under existing energy constraints.'
          }
        ],
        questions: [
          {
            id: 'q1',
            number: 1,
            type: 'true-false-not-given',
            instructions: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE if the statement agrees, FALSE if the statement contradicts, or NOT GIVEN if there is no information on this.',
            text: 'By 2050, approximately seven out of ten people on Earth are expected to live in cities.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states: "nearly 70 percent of the world’s estimated 9.8 billion inhabitants will reside in urban metropolises."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 'q2',
            number: 2,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Aeroponics requires plants to be immersed in stationary pools of water.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explicitly clarifies that aeroponics involves "suspended plant root matrices are intermittently misted with atomized nutrients", whereas immersing in liquid solution describes hydroponics.',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 'q3',
            number: 3,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Vertical farms depend on chemical pesticides to protect crops from persistent indoor insect outbreaks.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states: "Because these facilities operate within fully enclosed, bio-secure environments, synthetic chemical pesticides and fungicides are rendered completely unnecessary."',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 'q4',
            number: 4,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Governments in Asia have provided tax subsidies to lower the cost of vertical farm construction.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'While Singapore is mentioned as an example of vertical farming location in Paragraph D, there is no mention in the text regarding government subsidies or tax incentives.',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 'q5',
            number: 5,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Vertical farms recycle water that has evaporated and condensed inside the facility.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph D mentions: "utilizing an astonishing 95 percent less water due to continuous internal recycling of condensed transpiration."',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 'q6',
            number: 6,
            type: 'sentence-completion',
            instructions: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            text: 'The primary operational weakness of vertical farming lies in its enormous _______ consumption.',
            correctAnswer: 'electrical',
            explanation: 'Paragraph E states: "The Achilles’ heel of indoor urban agriculture remains its prodigious electrical consumption."',
            passageAnchor: 'Paragraph E'
          },
          {
            id: 'q7',
            number: 7,
            type: 'sentence-completion',
            instructions: 'Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'Currently, vertical farming is largely limited to luxury, rapid-maturing items such as culinary herbs, salad leaves, and _______.',
            correctAnswer: 'microgreens',
            explanation: 'Paragraph F states that production is restricted to "predominantly microgreens, salad leaves, and culinary herbs."',
            passageAnchor: 'Paragraph F'
          }
        ]
      },
      {
        id: 'p2',
        number: 2,
        title: 'Biomimicry: Engineering Inspired by Nature',
        subtitle: 'How millions of years of evolutionary trial and error are unlocking breakthroughs in architecture, transportation, and materials science.',
        paragraphs: [
          {
            label: 'A',
            text: 'For over 3.8 billion years, biological organisms on Earth have been engaged in an unrelenting research and development initiative. Through the relentless pressures of natural selection, species that devised inefficient mechanisms for energy conservation, thermal regulation, or structural integrity perished, while those with elegant, resource-frugal adaptations flourished. Today, human engineers, architects, and material scientists are turning to nature’s catalog of tested blueprints in a discipline known as biomimicry—the intentional emulation of nature’s genius to resolve complex anthropogenic problems.'
          },
          {
            label: 'B',
            text: 'One of the most famous and triumphant precedents of biomimicry occurred in the late 1990s with Japan’s high-speed Shinkansen bullet train. As engineers increased the train’s operating velocity to nearly 300 kilometers per hour, a disruptive aerodynamic phenomenon emerged: whenever the train entered narrow mountain tunnels at terminal speed, the abrupt displacement of air generated a powerful atmospheric shockwave. Upon exiting the opposite end of the tunnel, this shockwave culminated in a deafening sonic boom audible over 400 meters away, shattering structural glass and prompting fierce residential complaints.'
          },
          {
            label: 'C',
            text: 'The solution was engineered by Eiji Nakatsu, the general manager of technical development and an avid birdwatcher. Nakatsu observed that the kingfisher, a predatory avian species, dives seamlessly from the low-resistance medium of air into the high-density medium of water with virtually zero splash to snatch fish. Nakatsu realized the kingfisher’s elongated, wedge-shaped beak possessed the exact aerodynamic geometry required to dissipate fluid resistance gradually. By redesigning the bullet train’s locomotive nose to mirror the beak’s profile, the train eliminated the sonic tunnel boom, ran 10 percent faster, and reduced electricity consumption by 15 percent.'
          },
          {
            label: 'D',
            text: 'In the realm of structural architecture, biomimicry has unlocked passive cooling systems that obviate the need for mechanical air conditioning. In Harare, Zimbabwe, architect Mick Pearce designed the Eastgate Centre, a mid-rise shopping and office complex inspired by the architecture of indigenous termite mounds. Macrotermes bellicosus termites cultivate subterranean fungus gardens that require an invariant internal temperature of 30.5 degrees Celsius, even while exterior ambient temperatures in the African savannah fluctuate between 2 degrees at night and 40 degrees at midday.'
          },
          {
            label: 'E',
            text: 'Pearce observed that termite mounds achieve thermal equilibrium through a network of convective air conduits and chimney vents. Cool nighttime air settles into lower chambers, and as ground heat warms the air during the day, convective updrafts exhaust stale, warm air through high vertical flues. Replicating this thermodynamic principle with concrete ducts and localized fans, the Eastgate Centre consumes 90 percent less energy for climate control than comparable conventional buildings in Harare, saving millions of dollars in utility expenses since its opening in 1996.'
          },
          {
            label: 'F',
            text: 'On a microscopic scale, researchers are deciphering the unique structural coloration and antibacterial properties of marine organisms. The skin of Galapagos sharks is lined with microscopic riblets known as dermal denticles. These diamond-shaped grooves disrupt water eddies, reducing drag as the predator glides through the ocean. Crucially, the topography of denticles prevents micro-organisms and harmful bacteria from establishing a biofilm on the shark’s surface. Bio-tech companies have now replicated this texture in adhesive synthetic films for hospital surfaces and ship hulls, curbing bacterial colonisation without the application of toxic biocides or antibiotics.'
          }
        ],
        questions: [
          {
            id: 'q8',
            number: 8,
            type: 'matching-headings',
            instructions: 'Reading Passage 2 has six paragraphs, A-F. Choose the correct heading for each paragraph from the list of headings below: i. An avian answer to aerodynamic turbulence | ii. Microscopic textures preventing bacterial contamination | iii. The evolutionary database of natural solutions | iv. Termite-inspired passive architectural climate control | v. Financial risks in biomimetic investment | vi. A noise crisis caused by high-speed transit.',
            text: 'Which heading corresponds to Paragraph B?',
            options: [
              'i. An avian answer to aerodynamic turbulence',
              'ii. Microscopic textures preventing bacterial contamination',
              'iii. The evolutionary database of natural solutions',
              'iv. Termite-inspired passive architectural climate control',
              'v. Financial risks in biomimetic investment',
              'vi. A noise crisis caused by high-speed transit'
            ],
            correctAnswer: 'vi. A noise crisis caused by high-speed transit',
            explanation: 'Paragraph B describes the high-speed train generating sonic booms when exiting tunnels and the complaints it caused.',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 'q9',
            number: 9,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for Paragraph C.',
            text: 'Which heading corresponds to Paragraph C?',
            options: [
              'i. An avian answer to aerodynamic turbulence',
              'ii. Microscopic textures preventing bacterial contamination',
              'iii. The evolutionary database of natural solutions',
              'iv. Termite-inspired passive architectural climate control',
              'v. Financial risks in biomimetic investment',
              'vi. A noise crisis caused by high-speed transit'
            ],
            correctAnswer: 'i. An avian answer to aerodynamic turbulence',
            explanation: 'Paragraph C details how observing the kingfisher beak solved the train aerodynamic problem.',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 'q10',
            number: 10,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for Paragraph E.',
            text: 'Which heading corresponds to Paragraph E?',
            options: [
              'i. An avian answer to aerodynamic turbulence',
              'ii. Microscopic textures preventing bacterial contamination',
              'iii. The evolutionary database of natural solutions',
              'iv. Termite-inspired passive architectural climate control',
              'v. Financial risks in biomimetic investment',
              'vi. A noise crisis caused by high-speed transit'
            ],
            correctAnswer: 'iv. Termite-inspired passive architectural climate control',
            explanation: 'Paragraph E explains how convective thermodynamic chimneys inspired by termite mounds chilled the Eastgate Centre using 90% less energy.',
            passageAnchor: 'Paragraph E'
          },
          {
            id: 'q11',
            number: 11,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'What prompted Japanese rail engineers to redesign the nose of the Shinkansen train?',
            options: [
              'A. The train suffered severe structural damage due to water splashes.',
              'B. The train could not reach speeds exceeding 150 km/h.',
              'C. Loud sonic disturbances caused by air compression inside tunnels.',
              'D. Excessive fuel consumption compared to commercial aircraft.'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph B explains that exiting tunnels generated a powerful atmospheric shockwave culminating in a deafening sonic boom.',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 'q12',
            number: 12,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'How does shark skin prevent bacterial biofilm accumulation according to Paragraph F?',
            options: [
              'A. It secretes a chemical biocide lethal to bacteria.',
              'B. Its physical microscopic groove pattern inhibits bacterial adherence.',
              'C. Its high electrical charge repels water-borne microorganisms.',
              'D. It absorbs antibiotic chemicals present in sea water.'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph F states that the microscopic riblets (dermal denticles) disrupt eddies and that the physical topography prevents microorganisms from establishing a biofilm without toxic biocides.',
            passageAnchor: 'Paragraph F'
          }
        ]
      },
      {
        id: 'p3',
        number: 3,
        title: 'The Linguistic Ecology of Endangered Languages',
        subtitle: 'Why the accelerating disappearance of indigenous idioms threatens collective human knowledge and biodiversity science.',
        paragraphs: [
          {
            label: 'A',
            text: 'Of the approximately 7,000 distinct spoken languages currently recognized across the globe, linguists calculate that more than half will likely cease to be spoken by the close of the twenty-first century. This linguistic attrition is unfolding at a tempo unprecedented in recorded history: on average, an indigenous language vanishes every fortnight when its final fluent native speaker passes away. While linguistic evolution and language death have occurred throughout history, the current pace of homogenisation is propelled by hyper-globalized telecommunications, state-sponsored educational assimilation, and economic marginalisation of traditional linguistic communities.'
          },
          {
            label: 'B',
            text: 'Public indifference toward language loss is often rooted in the pragmatic belief that a linguistically unified planet facilitates frictionless commerce, international cooperation, and social cohesion. Monolingual advocates argue that communication barriers generate conflict and inefficiency. However, anthropological linguists counter that reducing the global linguistic tapestry to a handful of dominant lingua francas destroys invaluable epistemological repositories—vast libraries of ecological, pharmaceutical, and cosmological understanding distilled over thousands of years.'
          },
          {
            label: 'C',
            text: 'Nowhere is this symbiotic link between language and survival more evident than in ethnobiology. Indigenous vocabularies frequently contain exquisite taxonomic classifications of local flora, fauna, and soil chemistry that possess no equivalent terminology in major world languages. For example, in the Amazonian basin, the Seri and Yanomami languages categorize botanical species not by visual morphology alone, but by therapeutic biochemical interactions and precise seasonal fruiting schedules. When a language withers, the unique empirical pharmacology possessed by its community is often permanently extinguished before modern botanists can record or synthesize its active medicinal compounds.'
          },
          {
            label: 'D',
            text: 'Linguists also emphasize the profound cognitive value of structural linguistic diversity. Languages differ radically in how they encode human experience, spatial perception, and grammatical responsibility. In Australian Aboriginal languages such as Guugu Yimithirr, speakers do not utilize egocentric spatial coordinates like "left", "right", "ahead", or "behind". Instead, every spatial orientation is anchored to absolute cardinal directions: "north", "south", "east", and "west". A speaker of Guugu Yimithirr maintaining a conversation must sustain continuous subconscious awareness of their geographic orientation, fostering extraordinary navigational cognition rarely exhibited by speakers of European languages.'
          },
          {
            label: 'E',
            text: 'Fortunately, grassroots revival programs are demonstrating that language revitalization is feasible when backed by community passion and digital preservation technologies. The Maori of New Zealand pioneered the "Kohanga Reo" (Language Nests) model, immersing infants and young children in immersion preschools staffed by fluent tribal elders. Concurrently, mobile lexicographical apps and interactive digital audio archives are enabling diaspora youth to learn heritage dialects asynchronously. While these interventions cannot save every vulnerable dialect, they prove that the trajectory of language extinction is not an inevitable fate, but a conscious cultural choice.'
          }
        ],
        questions: [
          {
            id: 'q13',
            number: 13,
            type: 'yes-no-not-given',
            instructions: 'Do the following statements agree with the views of the writer in Reading Passage 3? Write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.',
            text: 'Global linguistic extinction is currently occurring at a significantly faster rate than in previous historical eras.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states: "This linguistic attrition is unfolding at a tempo unprecedented in recorded history: on average, an indigenous language vanishes every fortnight..."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 'q14',
            number: 14,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'The author agrees that having a single global language would improve human life without any negative consequences.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explicitly argues against this viewpoint: "However, anthropological linguists counter that reducing the global linguistic tapestry to a handful of dominant lingua francas destroys invaluable epistemological repositories..."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 'q15',
            number: 15,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'Indigenous plant classifications can capture practical medical information omitted by modern Western botanical terms.',
            correctAnswer: 'YES',
            explanation: 'Paragraph C states that Amazonian languages classify plants by "therapeutic biochemical interactions... When a language withers, the unique empirical pharmacology possessed by its community is often permanently extinguished before modern botanists can record or synthesize its active medicinal compounds."',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 'q16',
            number: 16,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'What makes spatial orientation in the Guugu Yimithirr language remarkable?',
            options: [
              'A. It relies entirely on cardinal compass directions rather than relative terms like left or right.',
              'B. It only identifies landmarks that are visible from the coastline.',
              'C. It uses egocentric bodily coordinates instead of maps.',
              'D. It has no grammatical tense to express direction.'
            ],
            correctAnswer: 'A',
            explanation: 'Paragraph D states that speakers do not use egocentric coordinates like left/right, but anchor every orientation to absolute cardinal directions (north, south, east, west).',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 'q17',
            number: 17,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            text: 'The Maori revival initiative utilized an immersion model known in English as _______.',
            correctAnswer: 'Language Nests',
            explanation: 'Paragraph E states: "The Maori of New Zealand pioneered the "Kohanga Reo" (Language Nests) model, immersing infants and young children in immersion preschools..."',
            passageAnchor: 'Paragraph E'
          }
        ]
      }
    ]
  }
];
