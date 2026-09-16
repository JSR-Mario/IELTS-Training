import type { ReadingTest } from '../types/reading';

export const READING_TESTS: ReadingTest[] = [
  {
    id: 'academic-test-01',
    title: 'Cambridge Academic Practice Test 1',
    description: 'A full 3-passage examination exploring urban agriculture, biomimetic engineering, and linguistic diversity.',
    passages: [
      {
        id: 'p1-t1',
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
            id: 't1-q1',
            number: 1,
            type: 'true-false-not-given',
            instructions: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE if the statement agrees, FALSE if the statement contradicts, or NOT GIVEN if there is no information on this.',
            text: 'By 2050, approximately seven out of ten people on Earth are expected to live in cities.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph A states: "nearly 70 percent of the world’s estimated 9.8 billion inhabitants will reside in urban metropolises."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 't1-q2',
            number: 2,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Aeroponics requires plants to be immersed in stationary pools of water.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph B explicitly clarifies that aeroponics involves "suspended plant root matrices are intermittently misted with atomized nutrients", whereas immersing in liquid solution describes hydroponics.',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't1-q3',
            number: 3,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Vertical farms depend on chemical pesticides to protect crops from persistent indoor insect outbreaks.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph C states: "Because these facilities operate within fully enclosed, bio-secure environments, synthetic chemical pesticides and fungicides are rendered completely unnecessary."',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 't1-q4',
            number: 4,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Governments in Asia have provided tax subsidies to lower the cost of vertical farm construction.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'While Singapore is mentioned as a location in Paragraph D, there is no mention in the text regarding government subsidies or tax incentives.',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 't1-q5',
            number: 5,
            type: 'sentence-completion',
            instructions: 'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            text: 'The primary operational weakness of vertical farming lies in its enormous _______ consumption.',
            correctAnswer: 'electrical',
            explanation: 'Paragraph E states: "The Achilles’ heel of indoor urban agriculture remains its prodigious electrical consumption."',
            passageAnchor: 'Paragraph E'
          },
          {
            id: 't1-q6',
            number: 6,
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
        id: 'p2-t1',
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
            id: 't1-q7',
            number: 7,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for each paragraph from the list below.',
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
            id: 't1-q8',
            number: 8,
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
            id: 't1-q9',
            number: 9,
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
            id: 't1-q10',
            number: 10,
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
        id: 'p3-t1',
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
            id: 't1-q11',
            number: 11,
            type: 'yes-no-not-given',
            instructions: 'Do the following statements agree with the views of the writer? Write YES, NO, or NOT GIVEN.',
            text: 'Global linguistic extinction is currently occurring at a significantly faster rate than in previous historical eras.',
            correctAnswer: 'YES',
            explanation: 'Paragraph A states: "This linguistic attrition is unfolding at a tempo unprecedented in recorded history: on average, an indigenous language vanishes every fortnight..."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 't1-q12',
            number: 12,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'The author agrees that having a single global language would improve human life without any negative consequences.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explicitly argues against this viewpoint: "However, anthropological linguists counter that reducing the global linguistic tapestry to a handful of dominant lingua francas destroys invaluable epistemological repositories..."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't1-q13',
            number: 13,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
            text: 'The Maori revival initiative utilized an immersion model known in English as _______.',
            correctAnswer: 'Language Nests',
            explanation: 'Paragraph E states: "The Maori of New Zealand pioneered the Kohanga Reo (Language Nests) model, immersing infants and young children in immersion preschools..."',
            passageAnchor: 'Paragraph E'
          }
        ]
      }
    ]
  },
  {
    id: 'academic-test-02',
    title: 'Cambridge Academic Practice Test 2',
    description: 'A full examination exploring ancient Roman packaging archaeology, cognitive psychology of deep work, and solar geoengineering.',
    passages: [
      {
        id: 'p1-t2',
        number: 1,
        title: 'The Roman Amphora: Packaging the Ancient World',
        subtitle: 'How standardized ceramic containers fueled the Mediterranean economy and left an indelible archaeological fingerprint.',
        paragraphs: [
          {
            label: 'A',
            text: 'For modern consumers, cardboard boxes and shipping containers represent the ubiquitous vessels of global logistics. In the classical antiquity of the Mediterranean, that role was performed almost exclusively by the terracotta amphora. Designed with a pointed base, a slender neck, and two opposing vertical handles, amphorae were manufactured by the tens of millions to store and transport liquid merchandise across maritime trade networks. Their primary cargoes included olive oil, wine, defrutum (concentrated grape syrup), and garum, the fermented fish condiment that defined Roman culinary culture.'
          },
          {
            label: 'B',
            text: 'The ergonomic design of the amphora was masterfully calibrated for maritime shipping. The pointed base served a dual functional purpose: it functioned as a sturdy third handle when handlers tipped the heavy vessel to pour, and it allowed dockworkers to wedge amphorae snugly into layers of loose sand in the cargo holds of merchant ships. By interlocking the handles and bases across several tiers, Roman shipmasters prevented catastrophic cargo shifts in rough seas, ensuring maximum volumetric density within wooden hulls.'
          },
          {
            label: 'C',
            text: 'Because terra-cotta is chemically inert and highly durable, broken amphora fragments do not degrade in acidic soil or underwater shipwrecks. Instead, they provide archaeologists with an extraordinary record of ancient economic dynamics. The ultimate testament to Roman container logistics is Monte Testaccio in Rome—an artificial hill rising over 35 meters high with a perimeter exceeding one kilometer. It is composed entirely of an estimated 53 million discarded olive oil amphorae, predominantly the Dressel 20 typology originating from the Guadalquivir river valley in Roman Hispania (modern Andalusia).'
          },
          {
            label: 'D',
            text: 'Unlike wine amphorae, which could occasionally be washed, relined with pine pitch, and reused, olive oil containers could not be repurposed. The porous clay inevitably absorbed rancid oil residues over time, contaminating any subsequent product. Consequently, upon reaching the river docks of the Tiber in Rome, each vessel was drained into large communal terracotta storage vats (dolia) and systematically smashed. Workers then carted the potsherds to Monte Testaccio, sprinkling quicklime over the mounds to neutralize noxious odors.'
          },
          {
            label: 'E',
            text: 'Crucially for economic historians, Roman amphorae carried sophisticated commercial labeling known as tituli picti. Painted in red or black ink on the vessel’s shoulder, these brushstrokes recorded the exact tare weight of the empty amphora, the net weight of oil, the name of the agricultural estate owner, the merchant contractor, and an official customs inspector stamp. This ancient precursor to the modern barcode proves that Roman imperial authorities exercised rigorous state monitoring over food standardization and taxation.'
          }
        ],
        questions: [
          {
            id: 't2-q1',
            number: 1,
            type: 'true-false-not-given',
            instructions: 'Do the following statements agree with the information given in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
            text: 'The pointed base of an amphora helped dockworkers stabilize vessels inside ship cargo holds.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B states that the pointed base "allowed dockworkers to wedge amphorae snugly into layers of loose sand in the cargo holds of merchant ships... preventing catastrophic cargo shifts."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't2-q2',
            number: 2,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Olive oil amphorae were routinely washed and reused to export Roman wine back to Hispania.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph D states: "Unlike wine amphorae, which could occasionally be washed... olive oil containers could not be repurposed. The porous clay inevitably absorbed rancid oil residues... each vessel was drained... and systematically smashed."',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 't2-q3',
            number: 3,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Workers at Monte Testaccio were paid higher wages than standard Roman dockworkers.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph D describes the quicklime and workers smashing potsherds, but there is no mention of wages or compensation.',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 't2-q4',
            number: 4,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'Commercial labels painted with ink on Roman amphora shoulders were known as _______.',
            correctAnswer: 'tituli picti',
            explanation: 'Paragraph E states: "Roman amphorae carried sophisticated commercial labeling known as tituli picti."',
            passageAnchor: 'Paragraph E'
          },
          {
            id: 't2-q5',
            number: 5,
            type: 'sentence-completion',
            instructions: 'Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'Workers scattered _______ over the discarded pottery mounds to suppress unpleasant smells.',
            correctAnswer: 'quicklime',
            explanation: 'Paragraph D notes that workers carted potsherds "sprinkling quicklime over the mounds to neutralize noxious odors."',
            passageAnchor: 'Paragraph D'
          }
        ]
      },
      {
        id: 'p2-t2',
        number: 2,
        title: 'The Cognitive Architecture of Deep Work',
        subtitle: 'Why chronic task-switching and digital interruptions fragment human attentional capacity.',
        paragraphs: [
          {
            label: 'A',
            text: 'In contemporary professional environments, hyper-connectivity is often misconstrued as synonymous with productivity. Knowledge workers spend an estimated 60 percent of their daily working hours navigating communicative overhead: checking messaging platforms, responding to asynchronous emails, and participating in recurring video conferences. However, emerging research in cognitive neuroscience reveals that this relentless fragmentation of focus imposes an invisible, devastating penalty on higher-order analytical thinking.'
          },
          {
            label: 'B',
            text: 'The primary neurological impediment underlying task-switching was conceptualized by business professor Sophie Leroy as "attention residue." Leroy demonstrated that when individuals transition from Task A to an unrelated Task B, their mental bandwidth does not switch cleanly or instantaneously. Instead, a substantial portion of cognitive resources remains fixated on thinking about the incomplete elements of Task A. Even a brief, five-second glance at an incoming inbox notification leaves an attentional shadow that compromises working memory and critical problem-solving for up to twenty minutes.'
          },
          {
            label: 'C',
            text: 'To counter this systemic degradation of cognitive throughput, computer scientist Cal Newport coined the paradigm of "Deep Work"—professional activities performed in a state of distraction-free concentration that push cognitive capabilities to their absolute limit. Newport distinguishes deep work from "shallow work," which encompasses non-cognitively demanding, logistical tasks often performed while semi-distracted. While shallow tasks prevent administrative paralysis, they rarely produce novel intellectual value or hard-to-replicate breakthroughs in competitive markets.'
          },
          {
            label: 'D',
            text: 'Neurological imaging indicates that deep work cultivates expertise through myelination. When a person concentrates intensely on a challenging conceptual skill without interruption, specific neural circuits fire repeatedly in isolated sequences. In response, oligodendrocytes—glial cells in the central nervous system—wrap layers of a fatty protein substance called myelin around the active axons. This myelin sheath acts as biological insulation, enabling electrical action potentials to travel up to one hundred times faster along the neural pathway, transforming difficult cognitive execution into fluid mastery.'
          },
          {
            label: 'E',
            text: 'Organizations, however, face architectural and cultural resistance when attempting to foster deep work. The pervasive adoption of open-plan office architectures, originally intended to encourage spontaneous serendipity and egalitarian collaboration, has in practice precipitated sensory overload and defensive headphone use. Longitudinal studies conducted by organizational psychologists indicate that workers in open environments experience 64 percent more interruptions and report significantly heightened cortisol levels compared to peers in closed, quiet workspaces.'
          }
        ],
        questions: [
          {
            id: 't2-q6',
            number: 6,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for each paragraph from the options below.',
            text: 'Which heading corresponds to Paragraph B?',
            options: [
              'i. The biological mechanism of skill insulation',
              'ii. Attention residue and the cost of brief distractions',
              'iii. The failure of collaborative open-plan architecture',
              'iv. Misconceptions regarding continuous digital availability',
              'v. Distinguishing high-value deep tasks from logistical duties'
            ],
            correctAnswer: 'ii. Attention residue and the cost of brief distractions',
            explanation: 'Paragraph B explains Sophie Leroy’s research on attention residue when switching tasks.',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't2-q7',
            number: 7,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for Paragraph D.',
            text: 'Which heading corresponds to Paragraph D?',
            options: [
              'i. The biological mechanism of skill insulation',
              'ii. Attention residue and the cost of brief distractions',
              'iii. The failure of collaborative open-plan architecture',
              'iv. Misconceptions regarding continuous digital availability',
              'v. Distinguishing high-value deep tasks from logistical duties'
            ],
            correctAnswer: 'i. The biological mechanism of skill insulation',
            explanation: 'Paragraph D discusses oligodendrocytes producing myelin around active axons to insulate and accelerate neural signals.',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 't2-q8',
            number: 8,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'According to Paragraph D, how does myelin improve brain performance during intensive concentration?',
            options: [
              'A. It stimulates the rapid growth of brand-new brain lobes.',
              'B. It insulates neural pathways, allowing signals to travel significantly faster.',
              'C. It reduces cortisol levels directly inside the spinal cord.',
              'D. It eliminates the need for nighttime sleep cycles.'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D states that the myelin sheath "acts as biological insulation, enabling electrical action potentials to travel up to one hundred times faster along the neural pathway."',
            passageAnchor: 'Paragraph D'
          },
          {
            id: 't2-q9',
            number: 9,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'What does Paragraph E conclude about open-plan office layouts?',
            options: [
              'A. They have proven completely successful in boosting deep work hours.',
              'B. They lower construction costs without any behavioral drawbacks.',
              'C. They lead to frequent disruptions and elevated stress hormone indicators.',
              'D. They encourage employees to abandon laptops in favor of paper.'
            ],
            correctAnswer: 'C',
            explanation: 'Paragraph E states that open environments resulted in "64 percent more interruptions and report significantly heightened cortisol levels."',
            passageAnchor: 'Paragraph E'
          }
        ]
      },
      {
        id: 'p3-t2',
        number: 3,
        title: 'Solar Geoengineering: Cooling a Warming Planet',
        subtitle: 'The technological possibilities, ecological uncertainties, and governance dilemmas of deliberate planetary climate intervention.',
        paragraphs: [
          {
            label: 'A',
            text: 'As international greenhouse gas reduction initiatives struggle to maintain global warming within the 1.5-degree Celsius threshold established by the Paris Agreement, a once-taboo technological concept is ascending into serious scientific discourse: solar geoengineering. Also known as Solar Radiation Management (SRM), this suite of proposed techniques does not attempt to reduce atmospheric concentrations of heat-trapping carbon dioxide. Instead, it seeks to cool the planetary surface directly by reflecting a modest fraction (approximately one to two percent) of incoming solar irradiance back into outer space.'
          },
          {
            label: 'B',
            text: 'The most scientifically mature SRM proposal is Stratospheric Aerosol Injection (SAI), an approach modeled explicitly on natural volcanic analogs. When Mount Pinatubo erupted in the Philippines in June 1991, it ejected an estimated seventeen megatons of sulfur dioxide into the stratosphere. There, the gas reacted with water vapor to create a persistent veil of reflective sulfate aerosol droplets. Within months, this reflective layer circled the globe, depressing average planetary temperatures by approximately 0.5 degrees Celsius for nearly two years before the aerosols settled back into the troposphere.'
          },
          {
            label: 'C',
            text: 'Advocates of SAI argue that a fleet of purpose-engineered high-altitude aircraft could continuously inject synthetic aerosol precursors—such as sulfur dioxide or calcium carbonate particles—into the lower tropical stratosphere at altitudes exceeding twenty kilometers. Proponents calculate that the direct economic expense of such deployment would be astonishingly low compared to the multitrillion-dollar costs of unabated climate damage, providing humanity with a vital thermal cushion while green energy transitions mature.'
          },
          {
            label: 'D',
            text: 'Despite its apparent thermal efficacy, solar geoengineering is fraught with terrifying environmental side effects. Because SRM alters the radiation balance without scrubbing greenhouse gases from the atmosphere, it offers zero remediation for ocean acidification, which threatens the foundational food webs of marine biospheres. Furthermore, climate modeling conducted by the IPCC suggests that uneven planetary dimming could disrupt monsoon dynamics across South Asia and Sub-Saharan Africa, jeopardizing agricultural subsistence for hundreds of millions of vulnerable farmers.'
          },
          {
            label: 'E',
            text: 'The most perilous risk associated with SAI is known as "termination shock." If a future society initiates solar geoengineering and sustains it for decades while allowing greenhouse gas emissions to continue unabated, the planet will accumulate colossal latent heat. If that aerosol deployment is subsequently halted abruptly—due to geopolitical conflict, economic collapse, or sabotage—the artificial cooling veil would vanish within twelve to eighteen months. The resulting temperature rebound would unfold at a pace fifty times faster than current warming, causing catastrophic ecological collapse.'
          }
        ],
        questions: [
          {
            id: 't2-q10',
            number: 10,
            type: 'yes-no-not-given',
            instructions: 'Do the following statements agree with the views of the author? Write YES, NO, or NOT GIVEN.',
            text: 'Solar Radiation Management directly cleans carbon dioxide molecules out of the atmosphere.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states: "this suite of proposed techniques does not attempt to reduce atmospheric concentrations of heat-trapping carbon dioxide. Instead, it seeks to cool the planetary surface directly by reflecting... solar irradiance back into outer space."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 't2-q11',
            number: 11,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'The 1991 eruption of Mount Pinatubo resulted in a temporary decrease in average global temperatures.',
            correctAnswer: 'YES',
            explanation: 'Paragraph B states that Mount Pinatubo aerosols "circled the globe, depressing average planetary temperatures by approximately 0.5 degrees Celsius for nearly two years."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't2-q12',
            number: 12,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'The United Nations has already signed a treaty establishing an international flight fleet for sulfur injection.',
            correctAnswer: 'NOT GIVEN',
            explanation: 'Paragraph C discusses what proponents argue could be done, but there is no mention of any signed UN treaty or operational flight fleet.',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 't2-q13',
            number: 13,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'The catastrophic rapid warming that would occur if aerosol spraying suddenly stopped is called _______.',
            correctAnswer: 'termination shock',
            explanation: 'Paragraph E states: "The most perilous risk associated with SAI is known as termination shock."',
            passageAnchor: 'Paragraph E'
          }
        ]
      }
    ]
  },
  {
    id: 'academic-test-03',
    title: 'Cambridge Academic Practice Test 3',
    description: 'A full examination investigating fungal mycelium networks, the evolution of precision timekeeping, and the bilingual brain.',
    passages: [
      {
        id: 'p1-t3',
        number: 1,
        title: 'The Secrets of Mycelium: Nature’s Subterranean Web',
        subtitle: 'How expansive fungal networks beneath the forest floor sustain plant life and inspire next-generation bio-materials.',
        paragraphs: [
          {
            label: 'A',
            text: 'Beneath the leaf litter of forest floors across the globe lies an intricate, living network of microscopic fungal threads known as mycelium. While mushrooms are the visible, reproductive fruiting bodies of fungi, they represent merely the ephemeral tip of a subterranean biological iceberg. A single cubic inch of fertile topsoil can contain over eight miles of mycelial hyphae, branching continuously through microscopic soil pores to form vast, interconnected biological webs that span entire ecosystems.'
          },
          {
            label: 'B',
            text: 'For decades, classical botanical dogma viewed forest trees as solitary competitors vying fiercely for sunlight, soil moisture, and mineral nutrients. However, groundbreaking ecological field research conducted by Dr. Suzanne Simard at the University of British Columbia revealed that forests operate as collaborative super-organisms linked by mycorrhizal fungi. Through these mutualistic networks, fungal hyphae envelop and penetrate tree root cells, supplying essential soil minerals like phosphorus and nitrogen in exchange for carbon-rich sugars synthesized through photosynthesis.'
          },
          {
            label: 'C',
            text: 'More astonishingly, Simard demonstrated that mycorrhizal networks facilitate dynamic resource redistribution among diverse plant species. During summer months, mature Douglas fir trees in deep shade receive carbon subsidies via fungal channels from neighboring paper birch trees basking in full sunlight. In autumn, when birch trees shed their foliage, the directional transfer reverses, with firs transferring nutrients back to the dormant birches. Fungi also act as biochemical communication conduits: when a tree is attacked by parasitic aphids, it transmits chemical alarm signals through the mycelium, prompting neighboring trees to preemptively synthesize protective defensive tannins.'
          },
          {
            label: 'D',
            text: 'Capitalizing on the unique structural properties of mycelium, modern bio-engineers are utilizing fungi to develop sustainable industrial materials designed to supplant plastic polymers and synthetic styrofoam. By inoculating agricultural waste products—such as hemp husks, corn stalks, or sawdust—with fungal strains, the mycelium digests the organic matter over several days, binding the fibers into a dense, solid composite matrix. Once baked at high temperatures to halt further biological growth, the resulting material is lightweight, water-resistant, completely fire-retardant, and fully biodegradable within months when composted.'
          },
          {
            label: 'E',
            text: 'In the construction sector, architectural innovators are investigating mycelium bricks as self-insulating, carbon-negative building blocks. Unlike concrete, the manufacturing of which generates approximately eight percent of worldwide greenhouse gas emissions, mycelium composites sequester carbon inside their cellular structures throughout cultivation. As society confronts acute landfill crises and escalating carbon targets, the subterranean genius of the fungal kingdom is offering an elegant paradigm of regenerative industrial design.'
          }
        ],
        questions: [
          {
            id: 't3-q1',
            number: 1,
            type: 'true-false-not-given',
            instructions: 'Do the following statements agree with the information in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Mushrooms represent the largest and most enduring portion of a fungus’s physical mass.',
            correctAnswer: 'FALSE',
            explanation: 'Paragraph A states that mushrooms are "merely the ephemeral tip of a subterranean biological iceberg", while mycelium constitutes the vast majority of the organism.',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 't3-q2',
            number: 2,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Mycorrhizal fungi receive carbon sugars produced by trees during photosynthesis.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph B explicitly confirms: "supplying essential soil minerals... in exchange for carbon-rich sugars synthesized through photosynthesis."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't3-q3',
            number: 3,
            type: 'true-false-not-given',
            instructions: 'Write TRUE, FALSE, or NOT GIVEN.',
            text: 'Trees attacked by pests can warn adjacent trees through mycelial communication channels.',
            correctAnswer: 'TRUE',
            explanation: 'Paragraph C states: "when a tree is attacked by parasitic aphids, it transmits chemical alarm signals through the mycelium, prompting neighboring trees to preemptively synthesize protective defensive tannins."',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 't3-q4',
            number: 4,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'Mycelium composites are baked at high temperatures to stop any further _______ before commercial use.',
            correctAnswer: 'biological growth',
            explanation: 'Paragraph D notes: "Once baked at high temperatures to halt further biological growth, the resulting material is lightweight..."',
            passageAnchor: 'Paragraph D'
          }
        ]
      },
      {
        id: 'p2-t3',
        number: 2,
        title: 'The Evolution of Chronometry: From Sundials to Atomic Clocks',
        subtitle: 'How humanity’s obsessive quest to divide the day into uniform intervals revolutionized navigation and quantum physics.',
        paragraphs: [
          {
            label: 'A',
            text: 'For the vast majority of human history, the passage of time was marked strictly by the apparent motion of celestial bodies across the horizon. Sundials in ancient Mesopotamia and Egypt tracked diurnal intervals using shadow lengths, while water clocks (clepsydras) measured nocturnal durations through the regulated drip of liquid through calibrated orifices. However, these rudimentary chronometers suffered from severe operational vulnerabilities: sundials were useless on overcast days, and water clocks froze during winter or experienced fluctuating flow rates caused by temperature-induced viscosity shifts.'
          },
          {
            label: 'B',
            text: 'The dawn of mechanical timekeeping commenced in fourteenth-century medieval Europe with the invention of the verge-and-foliot escapement. Constructed within church bell towers to coordinate monastic prayer routines, these early mechanical weight-driven clocks replaced fluid flow with mechanical oscillation. Yet, because their oscillating foliot balance bars lacked a natural resonant frequency, their timing varied by up to half an hour per day, necessitating frequent daily recalibration against noon solar shadows.'
          },
          {
            label: 'C',
            text: 'A profound leap in precision arrived in 1656 when Dutch polymath Christiaan Huygens adapted Galileo Galilei’s astronomical observations to construct the first pendulum clock. Galileo had noted the isochronism of the pendulum—the remarkable property whereby a swinging pendulum takes virtually the identical amount of time to complete an arc regardless of the amplitude of the swing. Huygens’ pendulum reduced daily timing inaccuracies from thirty minutes down to less than ten seconds, establishing a rigorous new baseline for astronomical observation and scientific experimentation.'
          },
          {
            label: 'D',
            text: 'However, pendulum clocks were strictly terrestrial devices; the pitching and rolling of a sailing vessel at sea disrupted the delicate gravitational swing of the pendulum, rendering it completely useless for maritime navigation. The inability to determine precise time at sea precipitated devastating maritime catastrophes, as navigators could determine latitude by celestial altitudes but had no reliable method to calculate longitude. This crisis led the British Parliament to pass the Longitude Act of 1714, offering a colossal prize of 20,000 pounds for a solution.'
          },
          {
            label: 'E',
            text: 'The prize was ultimately claimed by Yorkshire carpenter and self-taught horologist John Harrison. Between 1730 and 1761, Harrison designed a series of marine chronometers, culminating in the masterpiece known as H4. Harrison bypassed gravity altogether by employing fast-beating coiled balance springs, temperature-compensating bimetallic strips, and jewel bearings that operated without friction-inducing oil lubrication. On a transatlantic voyage to Jamaica in 1761, Harrison’s H4 lost only 5.1 seconds over eighty-one days, revolutionizing global maritime cartography.'
          }
        ],
        questions: [
          {
            id: 't3-q5',
            number: 5,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for each paragraph from the options below.',
            text: 'Which heading corresponds to Paragraph C?',
            options: [
              'i. The maritime longitude crisis and parliament reward',
              'ii. Early medieval escapements and their inaccuracies',
              'iii. The breakthrough of the isochronous pendulum',
              'iv. Harrison’s mechanical masterpiece for sea voyage',
              'v. Environmental limitations of celestial and hydraulic timing'
            ],
            correctAnswer: 'iii. The breakthrough of the isochronous pendulum',
            explanation: 'Paragraph C details Huygens’ pendulum clock based on Galileo’s observations of isochronism.',
            passageAnchor: 'Paragraph C'
          },
          {
            id: 't3-q6',
            number: 6,
            type: 'matching-headings',
            instructions: 'Choose the correct heading for Paragraph E.',
            text: 'Which heading corresponds to Paragraph E?',
            options: [
              'i. The maritime longitude crisis and parliament reward',
              'ii. Early medieval escapements and their inaccuracies',
              'iii. The breakthrough of the isochronous pendulum',
              'iv. Harrison’s mechanical masterpiece for sea voyage',
              'v. Environmental limitations of celestial and hydraulic timing'
            ],
            correctAnswer: 'iv. Harrison’s mechanical masterpiece for sea voyage',
            explanation: 'Paragraph E details John Harrison and the H4 marine chronometer that solved longitude at sea.',
            passageAnchor: 'Paragraph E'
          },
          {
            id: 't3-q7',
            number: 7,
            type: 'multiple-choice',
            instructions: 'Choose the correct letter, A, B, C, or D.',
            text: 'Why could pendulum clocks not be used to calculate longitude aboard ocean-going ships?',
            options: [
              'A. The high humidity warped the clock’s wooden exterior casing.',
              'B. The pitching motion of ocean waves disrupted the gravitational pendulum swing.',
              'C. Ship compasses generated magnetic fields that froze the gears.',
              'D. Pendulums required constant sunlight to maintain their swing.'
            ],
            correctAnswer: 'B',
            explanation: 'Paragraph D states that "the pitching and rolling of a sailing vessel at sea disrupted the delicate gravitational swing of the pendulum."',
            passageAnchor: 'Paragraph D'
          }
        ]
      },
      {
        id: 'p3-t3',
        number: 3,
        title: 'The Neurobiology of the Bilingual Brain',
        subtitle: 'How managing two linguistic systems reorganizes prefrontal brain architecture and delays cognitive decline.',
        paragraphs: [
          {
            label: 'A',
            text: 'Throughout the early and mid-twentieth century, educational theorists frequently warned parents and pedagogues that rearing children in a bilingual household would handicap intellectual development. It was hypothesized that forcing a young mind to acquire two linguistic vocabularies simultaneously would provoke cognitive interference, stunt verbal intelligence, and foster communicative confusion. Today, sophisticated functional neuroimaging and cognitive psychological research have entirely overturned this outdated consensus.'
          },
          {
            label: 'B',
            text: 'Far from creating confusion, managing two distinct linguistic systems acts as a lifelong mental workout that fortifies the brain’s executive function. Executive function comprises the suite of higher-order cognitive control processes directed by the prefrontal cortex: working memory, cognitive flexibility, selective attention, and inhibitory control. Whenever a bilingual individual speaks, both languages are activated simultaneously in the subconscious brain. To communicate in one language, the speaker must continuously suppress and inhibit the competing phonemes and lexical rules of the other language.'
          },
          {
            label: 'C',
            text: 'This continuous neural resistance training sharpens the dorsal anterior cingulate cortex and the basal ganglia—the brain areas responsible for conflict monitoring and goal-directed switching. In laboratory experiments utilizing the Stroop test or the Simon task, bilingual participants consistently outperform monolinguals of comparable educational backgrounds in resolving sensory conflict and ignoring irrelevant visual distractions, demonstrating superior cognitive agility.'
          },
          {
            label: 'D',
            text: 'Perhaps the most profound medical manifestation of bilingual neuro-architecture is its protective shield against neurodegenerative disorders. In pioneering clinical research directed by Dr. Ellen Bialystok at York University in Toronto, neuropsychologists analyzed the clinical records of hundreds of patients diagnosed with Alzheimer’s disease. Bialystok discovered that lifelong bilingual patients exhibited the clinical onset of dementia symptoms an average of four to five years later than demographically matched monolingual patients exhibiting identical stages of brain tissue degeneration.'
          },
          {
            label: 'E',
            text: 'Importantly, bilingualism does not prevent the physical neuropathology of Alzheimer’s, such as amyloid plaque accumulation or neurofibrillary tau tangles. Rather, it builds what neuroscientists term "cognitive reserve"—a dense, resilient neural redundancy that enables the brain to devise alternative compensatory synaptic pathways. Even when physical portions of brain matter suffer damage, the bilingual brain continues functioning normally long after a monolingual brain would experience cognitive impairment.'
          }
        ],
        questions: [
          {
            id: 't3-q8',
            number: 8,
            type: 'yes-no-not-given',
            instructions: 'Do the following statements agree with the views of the author? Write YES, NO, or NOT GIVEN.',
            text: 'Early twentieth-century pedagogical theories encouraged bilingualism as a method to improve intellectual capacity.',
            correctAnswer: 'NO',
            explanation: 'Paragraph A states that early twentieth-century theorists "frequently warned parents and pedagogues that rearing children in a bilingual household would handicap intellectual development."',
            passageAnchor: 'Paragraph A'
          },
          {
            id: 't3-q9',
            number: 9,
            type: 'yes-no-not-given',
            instructions: 'Write YES, NO, or NOT GIVEN.',
            text: 'When a bilingual person speaks, their inactive second language is completely shut down by the brain.',
            correctAnswer: 'NO',
            explanation: 'Paragraph B explicitly clarifies: "Whenever a bilingual individual speaks, both languages are activated simultaneously in the subconscious brain."',
            passageAnchor: 'Paragraph B'
          },
          {
            id: 't3-q10',
            number: 10,
            type: 'sentence-completion',
            instructions: 'Complete the sentence below. Choose NO MORE THAN TWO WORDS from the passage.',
            text: 'The resilient neural redundancy that delays symptoms of dementia is referred to by neuroscientists as _______.',
            correctAnswer: 'cognitive reserve',
            explanation: 'Paragraph E states: "it builds what neuroscientists term cognitive reserve—a dense, resilient neural redundancy..."',
            passageAnchor: 'Paragraph E'
          }
        ]
      }
    ]
  },
  {
    id: "academic-test-04",
    title: "Cambridge Academic Practice Test 4",
    description: "Authentic Cambridge IELTS examination covering linguistic prescriptivism, marine tidal power turbines, and Shannon's information theory.",
    passages: [
      {
        id: "p1-t4",
        number: 1,
        title: "Attitudes to Language",
        subtitle: "The historical and modern conflict between prescriptive grammar rules and descriptive linguistic reality.",
        paragraphs: [
          {
            label: "A",
            text: "It is not easy to be systematic and objective about language study. Popular linguistic debate regularly deteriorates into invective and polemic. Language belongs to everyone, so most people feel they have a right to hold an opinion about it. And when opinions differ, emotions can run high. Arguments can start as easily over minor points of usage as over major policies of linguistic education."
          },
          {
            label: "B",
            text: "Language, moreover, is a very public behaviour, so it is easy for different usages to be noted and criticised. No part of society or social behaviour is exempt: linguistic factors influence how we judge personality, intelligence, social status, educational standards, job aptitude, and many other areas of identity and social survival. As a result, it is easy to hurt, and to be hurt, when language use is unfeelingly attacked."
          },
          {
            label: "C",
            text: "In its most general sense, prescriptivism is the view that one variety of language has an inherently higher value than others, and that this ought to be imposed on the whole of the speech community. The view is propounded especially in relation to grammar and vocabulary, and frequently with reference to pronunciation. The variety which is favoured, in this account, is usually a version of the 'standard' written language, especially as encountered in literature, or in the formal spoken language which most closely reflects this style. Adherents to this variety are said to speak or write 'correctly'; deviations from it are said to be 'incorrect'."
          },
          {
            label: "D",
            text: "All the main languages have been studied prescriptively, especially in the 18th century approach to the writing of grammars and dictionaries. The aims of these early grammarians were threefold: (a) they wanted to codify the principles of their languages, to show that there was a system beneath the apparent chaos of usage, (b) they wanted a means of settling disputes over usage, and (c) they wanted to point out what they felt to be common errors, in order to 'improve' the language. The authoritarian nature of the approach is best characterised by its reliance on 'rules' of grammar. Some usages are 'prescribed', to be learnt and followed accurately; others are 'proscribed', to be avoided. In this early period, there were no half-measures: usage was either right or wrong, and it was the task of the grammarian not simply to record alternatives, but to pronounce judgement upon them."
          },
          {
            label: "E",
            text: "These attitudes are still with us, and they motivate a widespread concern that linguistic standards should be maintained. Nevertheless, there is an alternative point of view that is concerned less with standards than with the facts of linguistic usage. This approach is summarised in the statement that it is the task of the grammarian to describe, not prescribe to record the facts of linguistic diversity, and not to attempt the impossible tasks of evaluating language variation or halting language change. In the second half of the 18th century, we already find advocates of this view, such as Joseph Priestley, whose Rudiments of English Grammar (1761) insists that 'the custom of speaking is the original and only just standard of any language'. Linguistic issues, it is argued, cannot be solved by logic and legislation. And this view has become the tenet of the modern linguistic approach to grammatical analysis."
          },
          {
            label: "F",
            text: "In our own time, the opposition between 'descriptivists' and 'prescriptivists' has often become extreme, with both sides painting unreal pictures of the other. Descriptive grammarians have been presented as people who do not care about standards, because of the way they see all forms of usage as equally valid. Prescriptive grammarians have been presented as blind adherents to a historical tradition. The opposition has even been presented in quasi-political terms \u2013 of radical liberalism vs elitist conservatism."
          }
        ],
        questions: [
          {
            id: "t4-q1",
            number: 1,
            type: "yes-no-not-given",
            instructions: "Do the following statements agree with the claims of the writer in Reading Passage 1? Write YES if the statement agrees, NO if it contradicts, or NOT GIVEN if it is impossible to say.",
            text: "There are understandable reasons why arguments occur about language.",
            correctAnswer: "YES",
            explanation: "Paragraph A states: 'Language belongs to everyone, so most people feel they have a right to hold an opinion about it. And when opinions differ, emotions can run high.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q2",
            number: 2,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "People feel more strongly about language education than about small differences in language usage.",
            correctAnswer: "NO",
            explanation: "Paragraph A notes that arguments can start 'as easily over minor points of usage as over major policies of linguistic education', contradicting the assertion that people feel more strongly about education.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q3",
            number: 3,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Our assessment of a person\u2019s intelligence is affected by the way he or she uses language.",
            correctAnswer: "YES",
            explanation: "Paragraph B states that 'linguistic factors influence how we judge personality, intelligence, social status, educational standards...'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t4-q4",
            number: 4,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Prescriptive grammar books cost a lot of money to buy in the 18th century.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph D discusses 18th-century grammars and dictionaries, but makes no statement regarding their commercial cost or price.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q5",
            number: 5,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Prescriptivism still exists today.",
            correctAnswer: "YES",
            explanation: "Paragraph E states: 'These attitudes are still with us, and they motivate a widespread concern that linguistic standards should be maintained.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q6",
            number: 6,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "According to descriptivists it is pointless to try to stop language change.",
            correctAnswer: "YES",
            explanation: "Paragraph E explains that the descriptivist view sees it as an impossible task to attempt 'evaluating language variation or halting language change.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q7",
            number: 7,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Descriptivism only appeared after the 18th century.",
            correctAnswer: "NO",
            explanation: "Paragraph E explicitly states: 'In the second half of the 18th century, we already find advocates of this view, such as Joseph Priestley...'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q8",
            number: 8,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Both descriptivists and prescriptivists have been misrepresented.",
            correctAnswer: "YES",
            explanation: "Paragraph F notes that 'the opposition between descriptivists and prescriptivists has often become extreme, with both sides painting unreal pictures of the other.'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t4-q9",
            number: 9,
            type: "multiple-choice",
            instructions: "Complete the summary below using the list of words/terms (A-I).",
            text: "Summary - The language debate: According to (9) _______ there is only one correct form of language.",
            options: [
              "A Descriptivists",
              "B Language experts",
              "C Popular speech",
              "D Formal language",
              "E Evaluation",
              "F Rules",
              "G Modern linguists",
              "H Prescriptivists",
              "I Change"
            ],
            correctAnswer: "H",
            explanation: "Paragraph C states that prescriptivism holds the view that one variety of language has an inherently higher value than others.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q10",
            number: 10,
            type: "multiple-choice",
            instructions: "Choose the correct letter A-I.",
            text: "Linguists who take this prescriptive approach to language place great importance on grammatical (10) _______.",
            options: [
              "A Descriptivists",
              "B Language experts",
              "C Popular speech",
              "D Formal language",
              "E Evaluation",
              "F Rules",
              "G Modern linguists",
              "H Prescriptivists",
              "I Change"
            ],
            correctAnswer: "F",
            explanation: "Paragraph D states: 'The authoritarian nature of the approach is best characterised by its reliance on rules of grammar.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q11",
            number: 11,
            type: "multiple-choice",
            instructions: "Choose the correct letter A-I.",
            text: "Conversely, the view of (11) _______, such as Joseph Priestley...",
            options: [
              "A Descriptivists",
              "B Language experts",
              "C Popular speech",
              "D Formal language",
              "E Evaluation",
              "F Rules",
              "G Modern linguists",
              "H Prescriptivists",
              "I Change"
            ],
            correctAnswer: "A",
            explanation: "Paragraph E presents Joseph Priestley as an early advocate of the descriptivist viewpoint.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q12",
            number: 12,
            type: "multiple-choice",
            instructions: "Choose the correct letter A-I.",
            text: "...is that grammar should be based on (12) _______.",
            options: [
              "A Descriptivists",
              "B Language experts",
              "C Popular speech",
              "D Formal language",
              "E Evaluation",
              "F Rules",
              "G Modern linguists",
              "H Prescriptivists",
              "I Change"
            ],
            correctAnswer: "C",
            explanation: "Paragraph E quotes Priestley insisting that 'the custom of speaking' (popular speech) is the original and only just standard.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q13",
            number: 13,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "What is the writer\u2019s main purpose in Reading Passage 1?",
            options: ["A To argue in favour of a particular approach to writing dictionaries and grammar books", "B To present a historical account of differing views of language", "C To describe the differences between spoken and written language", "D To show how a certain view of language has been discredited"],
            correctAnswer: "B",
            explanation: "The text provides an objective, historical review of how differing viewpoints (prescriptivism vs descriptivism) emerged and evolved over centuries.",
            passageAnchor: "Whole passage"
          }
        ]
      },
      {
        id: "p2-t4",
        number: 2,
        title: "Tidal Power",
        subtitle: "Harnessing predictable marine currents with underwater turbine arrays to provide clean national power.",
        paragraphs: [
          {
            label: "A",
            text: "Operating on the same principle as wind turbines, the power in sea turbines comes from tidal currents which turn blades similar to ships\u2019 propellers, but, unlike wind, the tides are predictable and the power input is constant. The technology raises the prospect of Britain becoming self-sufficient in renewable energy and drastically reducing its carbon dioxide emissions. If tide, wind and wave power are all developed, Britain would be able to close gas, coal and nuclear power plants and export renewable power to other parts of Europe. Unlike wind power, which Britain originally developed and then abandoned for 20 years allowing the Dutch to make it a major industry, undersea turbines could become a big export earner to island nations such as Japan and New Zealand."
          },
          {
            label: "B",
            text: "Tidal sites have already been identified that will produce one sixth or more of the UK\u2019s power \u2013 and at prices competitive with modern gas turbines and undercutting those of the already ailing nuclear industry. One site alone, the Pentland Firth, between Orkney and mainland Scotland, could produce 10% of the country\u2019s electricity with banks of turbines under the sea, and another at Alderney in the Channel Islands three times the 1,200 megawatts of Britain\u2019s largest and newest nuclear plant, Sizewell B, in Suffolk. Other sites identified include the Bristol Channel and the west coast of Scotland, particularly the channel between Campbeltown and Northern Ireland."
          },
          {
            label: "C",
            text: "Work on designs for the new turbine blades and sites are well advanced at the University of Southampton\u2019s sustainable energy research group. The first station is expected to be installed off Lynmouth in Devon shortly to test the technology in a venture jointly funded by the department of Trade and Industry and the European Union. AbuBakr Bahaj, in charge of the Southampton research, said: 'The prospects for energy from tidal currents are far better than from wind because the flows of water are predictable and constant. The technology for dealing with the hostile saline environment under the sea has been developed in the North Sea oil industry and much is already known about turbine blade design, because of wind power and ship propellers. There are a few technical difficulties, but I believe in the next five to ten years we will be installing commercial marine turbine farms.' Southampton has been awarded \u00a3215,000 over three years to develop the turbines and is working with Marine Current Turbines, a subsidiary of IT power, on the Lynmouth project. EU research has now identified 106 potential sites for tidal power, 80% round the coasts of Britain. The best sites are between islands or around heavily indented coasts where there are strong tidal currents."
          },
          {
            label: "D",
            text: "A marine turbine blade needs to be only one third of the size of a wind generator to produce three times as much power. The blades will be about 20 metres in diameter, so around 30 metres of water is required. Unlike wind power, there are unlikely to be environmental objections. Fish and other creatures are thought unlikely to be at risk from the relatively slow-turning blades. Each turbine will be mounted on a tower which will connect to the national power supply grid via underwater cables. The towers will stick out of the water and be lit, to warn shipping, and also be designed to be lifted out of the water for maintenance and to clean seaweed from the blades."
          },
          {
            label: "E",
            text: "Dr Bahaj has done most work on the Alderney site, where there are powerful currents. The single undersea turbine farm would produce far more power than needed for the Channel Islands and most would be fed into the French Grid and be re-imported into Britain via the cable under the Channel."
          },
          {
            label: "F",
            text: "One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles. These can cause vibration and damage the blades of the turbines. Dr Bahaj said: 'We have to test a number of blade types to avoid this happening or at least make sure it does not damage the turbines or reduce performance. Another slight concern is submerged debris floating into the blades. So far we do not know how much of a problem it might be. We will have to make the turbines robust because the sea is a hostile environment, but all the signs that we can do it are good.'"
          }
        ],
        questions: [
          {
            id: "t4-q14",
            number: 14,
            type: "multiple-choice",
            instructions: "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
            text: "The location of the first test site.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "C",
            explanation: "Paragraph C specifies: 'The first station is expected to be installed off Lynmouth in Devon shortly to test the technology...'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q15",
            number: 15,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A way of bringing the power produced on one site back into Britain.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "E",
            explanation: "Paragraph E explains that power from Alderney would be fed into the French grid and re-imported into Britain via the sub-Channel cable.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q16",
            number: 16,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A reference to a previous attempt by Britain to find an alternative source of energy.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "A",
            explanation: "Paragraph A states: 'Unlike wind power, which Britain originally developed and then abandoned for 20 years allowing the Dutch to make it a major industry...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q17",
            number: 17,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "Mention of the possibility of applying technology from another industry.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "C",
            explanation: "Paragraph C notes that 'The technology for dealing with the hostile saline environment under the sea has been developed in the North Sea oil industry...'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q18",
            number: 18,
            type: "multiple-choice",
            instructions: "Questions 18-22 examine key claims made by the writer about tidal power. Choose the correct option.",
            text: "How does tidal power compare to wind power according to the passage?",
            options: ["A It is a more reliable and constant source of energy than wind power.", "B It requires completely calm surface waters to operate.", "C It has generated fierce resistance from offshore fishing communities.", "D It costs more to operate per megawatt than nuclear power plants."],
            correctAnswer: "A",
            explanation: "Paragraph A explains that unlike wind, tides are predictable and the power input is constant.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q19",
            number: 19,
            type: "multiple-choice",
            text: "What positive environmental contribution could widespread marine power provide?",
            options: ["A It would desalinate seawater for human domestic consumption.", "B It would drastically cut carbon dioxide emissions.", "C It would prevent severe coastal erosion along cliffs.", "D It would eliminate marine debris and plastics in estuaries."],
            correctAnswer: "B",
            explanation: "Paragraph A states the technology raises the prospect of drastically reducing carbon dioxide emissions.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q20",
            number: 20,
            type: "multiple-choice",
            text: "What could be an outcome for Britain's conventional energy infrastructure if marine renewables are fully developed?",
            options: ["A Massive state subsidies would be required for coal mines.", "B Britain would need to import all of its gas from Eastern Europe.", "C Britain would be able to close gas, coal and nuclear power plants.", "D Electricity rationing would be mandatory during peak hours."],
            correctAnswer: "C",
            explanation: "Paragraph A states: 'Britain would be able to close gas, coal and nuclear power plants and export renewable power to other parts of Europe.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q21",
            number: 21,
            type: "multiple-choice",
            text: "How could undersea turbines benefit Britain\u2019s national economy?",
            options: ["A By serving as a major export earner to island nations like Japan and New Zealand.", "B By generating tourism revenue around offshore oil rigs.", "C By eliminating all port taxes for international merchant shipping.", "D By guaranteeing free domestic electricity to coastal towns."],
            correctAnswer: "A",
            explanation: "Paragraph A states undersea turbines 'could become a big export earner to island nations such as Japan and New Zealand.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q22",
            number: 22,
            type: "multiple-choice",
            text: "Where are the most advantageous geographic locations for tidal power installations?",
            options: ["A In calm inland river estuaries.", "B Deep under polar ice caps.", "C Between islands or around heavily indented coasts with strong currents.", "D Beside commercial shipping lanes in open ocean."],
            correctAnswer: "C",
            explanation: "Paragraph C notes: 'The best sites are between islands or around heavily indented coasts where there are strong tidal currents.'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q23",
            number: 23,
            type: "sentence-completion",
            instructions: "Complete the technical details below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "The turbine towers are engineered so they can be lifted out of the water for _______ and cleaning.",
            correctAnswer: "maintenance",
            explanation: "Paragraph D states the towers will be 'designed to be lifted out of the water for maintenance and to clean seaweed from the blades.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q24",
            number: 24,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Marine fauna are not thought to be in danger because of the relatively _______ blades.",
            correctAnswer: "slow-turning",
            explanation: "Paragraph D notes: 'Fish and other creatures are thought unlikely to be at risk from the relatively slow-turning blades.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q25",
            number: 25,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Air bubbles form around turbine blades as a result of _______.",
            correctAnswer: "low pressure",
            explanation: "Paragraph F states: 'cavitation, where low pressure behind a turning blade causes air bubbles.'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t4-q26",
            number: 26,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "The technical phenomenon known as _______ creates vibration and risks damaging blades.",
            correctAnswer: "cavitation",
            explanation: "Paragraph F explicitly identifies 'One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles.'",
            passageAnchor: "Paragraph F"
          }
        ]
      },
      {
        id: "p3-t4",
        number: 3,
        title: "Information Theory \u2013 The Big Idea",
        subtitle: "Claude Shannon\u2019s mathematical foundation for digital communication, noise reduction, and data compression.",
        paragraphs: [
          {
            label: "A",
            text: "In April 2002 an event took place which demonstrated one of the many applications of information theory. The space probe, Voyager I, launched in 1977, had sent back spectacular images of Jupiter and Saturn and then soared out of the Solar System on a one-way mission to the stars. After 25 years of exposure to the freezing temperatures of deep space, the probe was beginning to show its age. Sensors and circuits were on the brink of failing and NASA experts realised that they had to do something or lose contact with their probe forever. The solution was to get a message to Voyager I to instruct it to use spares to change the failing parts. With the probe 12 billion kilometres from Earth, this was not an easy task. By means of a radio dish belonging to NASA\u2019s Deep Space Network, the message was sent out into the depths of space. Even travelling at the speed of light, it took over 11 hours to reach its target, far beyond the orbit of Pluto. Yet, incredibly, the little probe managed to hear the faint call from its home planet, and successfully made the switchover."
          },
          {
            label: "B",
            text: "It was the longest-distance repair job in history, and a triumph for the NASA engineers. But it also highlighted the astonishing power of the techniques developed by American communications engineer Claude Shannon, who had died just a year earlier. Born in 1916 in Petoskey, Michigan, Shannon showed an early talent for maths and for building gadgets, and made breakthroughs in the foundations of computer technology when still a student. While at Bell Laboratories, Shannon developed information theory, but shunned the resulting acclaim. In the 1940s, he single-handedly created an entire science of communication which has since inveigled its way into a host of applications, from DVDs to satellite communications to bar codes \u2013 any area, in short, where data has to be conveyed rapidly yet accurately."
          },
          {
            label: "C",
            text: "This all seems light years away from the down-to-earth uses Shannon originally had for his work, which began when he was a 22-year-old graduate engineering student at the prestigious Massachusetts Institute of Technology in 1939. He set out with an apparently simple aim: to pin down the precise meaning of the concept of 'information'. The most basic form of information, Shannon argued, is whether something is true or false \u2013 which can be captured in the binary unit, or 'bit', of the form 1 or 0. Having identified this fundamental unit, Shannon set about defining otherwise vague ideas about information and how to transmit it from place to place. In the process he discovered something surprising: it is always possible to guarantee information will get through random interference \u2013 'noise' \u2013 intact."
          },
          {
            label: "D",
            text: "Noise usually means unwanted sounds which interfere with genuine information. Information theory generalises this idea via theorems that capture the effects of noise with mathematical precision. In particular, Shannon showed that noise sets a limit on the rate at which information can pass along communication channels while remaining error-free. This rate depends on the relative strengths of the signal and noise travelling down the communication channel, and on its capacity (its 'bandwidth'). The resulting limit, given in units of bits per second, is the absolute maximum rate of error-free communication given signal strength and noise level. The trick, Shannon showed, is to find ways of packaging up \u2013 'coding' \u2013 information to cope with the ravages of noise, while staying within the information-carrying capacity \u2013 'bandwidth' \u2013 of the communication system being used."
          },
          {
            label: "E",
            text: "Over the years scientists have devised many such coding methods, and they have proved crucial in many technological feats. The Voyager spacecraft transmitted data using codes which added one extra bit for every single bit of information; the result was an error rate of just one bit in 10,000 \u2013 and stunningly clear pictures of the planets. Other codes have become part of everyday life \u2013 such as the Universal Product Code, or bar code, which uses a simple error-detecting system that ensures supermarket check-out lasers can read the price even on, say, a crumpled bag of crisps. As recently as 1993, engineers made a major breakthrough by discovering so-called turbo codes \u2013 which come very close to Shannon\u2019s ultimate limit for the maximum rate that data can be transmitted reliably, and now play a key role in the mobile videophone revolution."
          },
          {
            label: "F",
            text: "Shannon also laid the foundations of more efficient ways of storing information, by stripping out superfluous ('redundant') bits from data which contributed little real information. As mobile phone text messages like 'I CN C U' show, it is often possible to leave out a lot of data without losing much meaning. As with error correction, however, there\u2019s a limit beyond which messages become too ambiguous. Shannon showed how to calculate this limit, opening the way to the design of compression methods that cram maximum information into the minimum space."
          }
        ],
        questions: [
          {
            id: "t4-q27",
            number: 27,
            type: "multiple-choice",
            instructions: "Reading Passage 3 has six paragraphs, A-F. Which paragraph contains the following information?",
            text: "An explanation of the factors affecting the transmission of information.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "D",
            explanation: "Paragraph D explains that the maximum error-free transmission rate depends on signal strength, noise level, and bandwidth.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q28",
            number: 28,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "An example of how unnecessary information can be omitted.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "F",
            explanation: "Paragraph F cites mobile phone text messages like 'I CN C U' to illustrate stripping out redundant data.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t4-q29",
            number: 29,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A reference to Shannon\u2019s attitude to fame.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "B",
            explanation: "Paragraph B states: 'Shannon developed information theory, but shunned the resulting acclaim.'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t4-q30",
            number: 30,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "Details of a machine capable of interpreting incomplete information.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "E",
            explanation: "Paragraph E details supermarket check-out lasers reading bar codes on crumpled packaging.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t4-q31",
            number: 31,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A detailed account of an incident involving information theory.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "A",
            explanation: "Paragraph A provides a detailed narrative of the April 2002 Deep Space Network transmission to repair Voyager 1.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q32",
            number: 32,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A reference to what Shannon initially intended to achieve in his research.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F"
            ],
            correctAnswer: "C",
            explanation: "Paragraph C notes his early aim: 'to pin down the precise meaning of the concept of information.'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q33",
            number: 33,
            type: "sentence-completion",
            instructions: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "The Voyager 1 space probe transmitted pictures of both _______ and Saturn before leaving the solar system.",
            correctAnswer: "Jupiter",
            explanation: "Paragraph A states: 'The space probe, Voyager I, launched in 1977, had sent back spectacular images of Jupiter and Saturn...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q34",
            number: 34,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "After photographing the gas giants, the probe soared out of the _______ on a one-way mission.",
            correctAnswer: "Solar System",
            explanation: "Paragraph A states: 'and then soared out of the Solar System on a one-way mission to the stars.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q35",
            number: 35,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "NASA experts feared losing contact because deep-space freezing temperatures placed both the _______ and circuits on the verge of breakdown.",
            correctAnswer: "sensors",
            explanation: "Paragraph A states: 'Sensors and circuits were on the brink of failing...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q36",
            number: 36,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "The engineers transmitted instructions commanding Voyager 1 to switch over to its internal _______.",
            correctAnswer: "spares",
            explanation: "Paragraph A states: 'The solution was to get a message to Voyager I to instruct it to use spares to change the failing parts.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q37",
            number: 37,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "The transmission was successfully beamed over 12 billion kilometres utilizing a NASA Deep Space Network _______.",
            correctAnswer: "radio dish",
            explanation: "Paragraph A explains: 'By means of a radio dish belonging to NASA\u2019s Deep Space Network, the message was sent out...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t4-q38",
            number: 38,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 3? Write TRUE, FALSE, or NOT GIVEN.",
            text: "The concept of describing something as true or false was the starting point for Shannon in his attempts to send messages over distances.",
            correctAnswer: "TRUE",
            explanation: "Paragraph C states that the binary true/false bit was the fundamental unit from which Shannon set about defining how to transmit information.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t4-q39",
            number: 39,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The amount of information that can be sent in a given time period is determined with reference to the signal strength and noise level.",
            correctAnswer: "TRUE",
            explanation: "Paragraph D confirms: 'The resulting limit, given in units of bits per second, is the absolute maximum rate of error-free communication given signal strength and noise level.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t4-q40",
            number: 40,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Products have now been developed which can convey more information than Shannon had anticipated as possible.",
            correctAnswer: "FALSE",
            explanation: "Paragraph E states that even the most advanced turbo codes 'come very close to Shannon\u2019s ultimate limit', meaning none have exceeded his theoretical ceiling.",
            passageAnchor: "Paragraph E"
          }
        ]
      }
    ]
  },
  {
    id: "academic-test-05",
    title: "Cambridge Academic Practice Test 5",
    description: "Authentic Cambridge IELTS examination exploring classroom auditory deficits in children, historical transits of Venus, and the neuroscience of iconoclastic thinking.",
    passages: [
      {
        id: "p1-t5",
        number: 1,
        title: "Hearing Impairment and Noise in Classrooms",
        subtitle: "How poor acoustics and modern teaching environments disproportionately affect children with auditory processing deficits.",
        paragraphs: [
          {
            label: "A",
            text: "Hearing impairment or other auditory function deficit in young children can have a major impact on their development of speech and communication, resulting in a detrimental effect on their ability to learn at school. This is likely to have major consequences for the individual and the population as a whole. The New Zealand Ministry of Health has found from research carried out over two decades that 6-10% of children in that country are affected by hearing loss."
          },
          {
            label: "B",
            text: "A preliminary study in New Zealand has shown that classroom noise presents a major concern for teachers and pupils. Modern teaching practices, the organisation of desks in the classroom, poor classroom acoustics, and mechanical means of ventilation such as air-conditioning units all contribute to the number of children unable to comprehend the teacher\u2019s voice. Education researchers Nelson and Soli have also suggested that recent trends in learning often involve collaborative interaction of multiple minds and tools as much as individual possession of information. This all amounts to heightened activity and noise levels, which have the potential to be particularly serious for children experiencing auditory function deficit. Noise in classrooms can only exacerbate their difficulty in comprehending and processing verbal communication with other children and instructions from the teacher."
          },
          {
            label: "C",
            text: "Children with auditory function deficit are potentially failing to learn to their maximum potential because of noise levels generated in classrooms. The effects of noise on the ability of children to learn effectively in typical classroom environments are now the subject of increasing concern. The International Institute of Noise Control Engineering (I-INCE), on the advice of the World Health Organization, has established an international working party, which includes New Zealand, to evaluate noise and reverberation control for school rooms."
          },
          {
            label: "D",
            text: "While the detrimental effects of noise in classroom situations are not limited to children experiencing disability, those with a disability that affects their processing of speech and verbal communication could be extremely vulnerable. The auditory function deficits in question include hearing impairment, autistic spectrum disorders (ASD) and attention deficit disorders (ADD/ADHD)."
          },
          {
            label: "E",
            text: "Autism is considered a neurological and genetic life-long disorder that causes discrepancies in the way information is processed. This disorder is characterised by interlinking problems with social imagination, social communication and social interaction. According to Janzen, this affects the ability to understand and relate in typical ways to people, understand events and objects in the environment, and understand or respond to sensory stimuli. Autism does not allow learning or thinking in the same ways as in children who are developing normally. Autistic spectrum disorders often result in major difficulties in comprehending verbal information and speech processing. Those experiencing these disorders often find sounds such as crowd noise and the noise generated by machinery painful and distressing. This is difficult to scientifically quantify as such extra-sensory stimuli vary greatly from one autistic individual to another. But a child who finds any type of noise in their classroom or learning space intrusive is likely to be adversely affected in their ability to process information."
          },
          {
            label: "F",
            text: "The attention deficit disorders are indicative of neurological and genetic disorders and are characterised by difficulties with sustaining attention, effort and persistence, organisation skills and disinhibition. Children experiencing these disorders find it difficult to screen out unimportant information, and focus on everything in the environment rather than attending to a single activity. Background noise in the classroom becomes a major distraction, which can affect their ability to concentrate."
          },
          {
            label: "G",
            text: "Children experiencing an auditory function deficit can often find speech and communication very difficult to isolate and process when set against high levels of background noise. These levels come from outside activities that penetrate the classroom structure, from teaching activities, and other noise generated inside, which can be exacerbated by room reverberation. Strategies are needed to obtain the optimum classroom construction and perhaps a change in classroom culture and methods of teaching. In particular, the effects of noisy classrooms and activities on those experiencing disabilities in the form of auditory function deficit need thorough investigation. It is probable that many undiagnosed children exist in the education system with 'invisible' disabilities. Their needs are less likely to be met than those of children with known disabilities."
          },
          {
            label: "H",
            text: "The New Zealand Government has developed a New Zealand Disability Strategy and has embarked on a wide-ranging consultation process. The strategy recognises that people experiencing disability face significant barriers in achieving a full quality of life in areas such as attitude, education, employment and access to services. Objective 3 of the New Zealand Disability Strategy is to 'Provide the Best Education for Disabled People' by improving education so that all children, youth learners and adult learners will have equal opportunities to learn and develop within their already existing local school. For a successful education, the learning environment is vitally significant, so any effort to improve this is likely to be of great benefit to all children, but especially to those with auditory function disabilities."
          },
          {
            label: "I",
            text: "A number of countries are already in the process of formulating their own standards for the control and reduction of classroom noise. New Zealand will probably follow their example. The literature to date on noise in school rooms appears to focus on the effects on schoolchildren in general, their teachers and the hearing impaired. Only limited attention appears to have been given to those students experiencing the other disabilities involving auditory function deficit. It is imperative that the needs of these children are taken into account in the setting of appropriate international standards to be promulgated in future."
          }
        ],
        questions: [
          {
            id: "t5-q1",
            number: 1,
            type: "multiple-choice",
            instructions: "Reading Passage 1 has nine sections, A-I. Which section contains the following information?",
            text: "An account of a national policy initiative.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "H",
            explanation: "Section H describes the New Zealand Disability Strategy and its Objective 3.",
            passageAnchor: "Section H"
          },
          {
            id: "t5-q2",
            number: 2,
            type: "multiple-choice",
            instructions: "Which section contains the following information?",
            text: "A description of a global team effort.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "C",
            explanation: "Section C notes: 'The International Institute of Noise Control Engineering (I-INCE), on the advice of the World Health Organization, has established an international working party...'",
            passageAnchor: "Section C"
          },
          {
            id: "t5-q3",
            number: 3,
            type: "multiple-choice",
            instructions: "Which section contains the following information?",
            text: "A hypothesis as to one reason behind the growth in classroom noise.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "B",
            explanation: "Section B explains Nelson and Soli's hypothesis regarding recent trends in learning involving collaborative interaction causing heightened activity.",
            passageAnchor: "Section B"
          },
          {
            id: "t5-q4",
            number: 4,
            type: "multiple-choice",
            instructions: "Which section contains the following information?",
            text: "A demand for suitable worldwide regulations.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "I",
            explanation: "Section I states: 'It is imperative that the needs of these children are taken into account in the setting of appropriate international standards...'",
            passageAnchor: "Section I"
          },
          {
            id: "t5-q5",
            number: 5,
            type: "multiple-choice",
            instructions: "Which section contains the following information?",
            text: "A list of medical conditions which place some children more at risk from noise than others.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "D",
            explanation: "Section D lists hearing impairment, autistic spectrum disorders (ASD), and attention deficit disorders (ADD/ADHD).",
            passageAnchor: "Section D"
          },
          {
            id: "t5-q6",
            number: 6,
            type: "multiple-choice",
            instructions: "Which section contains the following information?",
            text: "The estimated proportion of children in New Zealand with auditory problems.",
            options: [
              "A Section A",
              "B Section B",
              "C Section C",
              "D Section D",
              "E Section E",
              "F Section F",
              "G Section G",
              "H Section H",
              "I Section I"
            ],
            correctAnswer: "A",
            explanation: "Section A states that research found that '6-10% of children in that country are affected by hearing loss.'",
            passageAnchor: "Section A"
          },
          {
            id: "t5-q7",
            number: 7,
            type: "sentence-completion",
            instructions: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            text: "For what period of time has hearing loss in schoolchildren been studied in New Zealand?",
            correctAnswer: "two decades",
            explanation: "Section A states: 'from research carried out over two decades that 6-10% of children in that country are affected by hearing loss.'",
            passageAnchor: "Section A"
          },
          {
            id: "t5-q8",
            number: 8,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "In addition to machinery noise, what other type of noise can upset children with autism?",
            correctAnswer: "crowd noise",
            explanation: "Section E states: 'often find sounds such as crowd noise and the noise generated by machinery painful and distressing.'",
            passageAnchor: "Section E"
          },
          {
            id: "t5-q9",
            number: 9,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What term is used to describe the hearing problems of schoolchildren which have not been officially diagnosed?",
            correctAnswer: "invisible disabilities",
            explanation: "Section G states: 'many undiagnosed children exist in the education system with invisible disabilities.'",
            passageAnchor: "Section G"
          },
          {
            id: "t5-q10",
            number: 10,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.",
            text: "What specific part of the New Zealand Disability Strategy aims to provide disabled learners with equal opportunity?",
            correctAnswer: "Objective 3",
            explanation: "Section H states: 'Objective 3 of the New Zealand Disability Strategy is to Provide the Best Education for Disabled People...'",
            passageAnchor: "Section H"
          },
          {
            id: "t5-q11",
            number: 11,
            type: "multiple-choice",
            instructions: "Questions 11-12: The list below includes factors contributing to classroom noise. Choose the mentioned factor.",
            text: "Which modern educational factor is mentioned as contributing to elevated noise levels in classrooms?",
            options: ["A Current teaching practices and collaborative interaction.", "B Echoing school corridors.", "C Overcrowded playground areas during recess.", "D Strict examinations conducted in silence."],
            correctAnswer: "A",
            explanation: "Section B explicitly lists 'Modern teaching practices' and 'collaborative interaction of multiple minds' as noise factors.",
            passageAnchor: "Section B"
          },
          {
            id: "t5-q12",
            number: 12,
            type: "multiple-choice",
            text: "Which physical equipment factor is identified as generating distracting classroom noise?",
            options: ["A Interactive digital whiteboards.", "B Metal desk frames rattling on wooden flooring.", "C Mechanical ventilation and cooling systems like air-conditioning units.", "D Fluorescent lighting ballasts humming at 50Hz."],
            correctAnswer: "C",
            explanation: "Section B cites 'mechanical means of ventilation such as air-conditioning units' as contributing to comprehension difficulty.",
            passageAnchor: "Section B"
          },
          {
            id: "t5-q13",
            number: 13,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "What is the writer\u2019s overall purpose in writing this article?",
            options: ["A To compare different medical treatments for chronic auditory problems.", "B To provide acoustic architecture blueprints for newly built classrooms.", "C To increase awareness of the vulnerable situation of children with auditory problems in noisy classrooms.", "D To promote New Zealand's acoustic model as mandatory for other countries."],
            correctAnswer: "C",
            explanation: "The author aims to draw attention to the serious educational impact of classroom acoustics on children with auditory function deficits.",
            passageAnchor: "Whole passage"
          }
        ]
      },
      {
        id: "p2-t5",
        number: 2,
        title: "Venus in Transit",
        subtitle: "How historical observations of the planet Venus crossing the Sun helped astronomers determine the astronomical unit and scale the cosmos.",
        paragraphs: [
          {
            label: "A",
            text: "On 8 June 2004, more than half the population of the world were treated to a rare astronomical event. For over six hours, the planet Venus steadily inched its way over the surface of the Sun. This 'transit' of Venus was the first since 6 December 1882. On that occasion, the American astronomer Professor Simon Newcomb led a party to South Africa to observe the event. They were based at a girls\u2019 school, where \u2013 it is alleged \u2013 the combined forces of three schoolmistresses outperformed the professionals with the accuracy of their observations."
          },
          {
            label: "B",
            text: "For centuries, transits of Venus have drawn explorers and astronomers alike to the four corners of the globe. And you can put it all down to the extraordinary polymath Edmond Halley. In November 1677, Halley observed a transit of the innermost planet, Mercury, from the desolate island of St Helena in the South Pacific. He realised that, from different latitudes, the passage of the planet across the Sun\u2019s disc would appear to differ. By timing the transit from two widely-separated locations, teams of astronomers could calculate the parallax angle \u2013 the apparent difference in position of an astronomical body due to a difference in the observer\u2019s position. Calculating this angle would allow astronomers to measure what was then the ultimate goal: the distance of the Earth from the Sun. This distance is known as the 'astronomical unit' or AU."
          },
          {
            label: "C",
            text: "Halley was aware that the AU was one of the most fundamental of all astronomical measurements. Johannes Kepler, in the early 17th century, had shown that the distances of the planets from the Sun governed their orbital speeds, which were easily measurable. But no-one had found a way to calculate accurate distances to the planets from the Earth. The goal was to measure the AU; then, knowing the orbital speeds of all the other planets round the Sun, the scale of the Solar System would fall into place. However, Halley realised that Mercury was so far away that its parallax angle would be very difficult to determine. As Venus was closer to the Earth, its parallax angle would be larger, and Halley worked out that by using Venus it would be possible to measure the Sun\u2019s distance to 1 part in 500. But there was a problem: transits of Venus, unlike those of Mercury, are rare, occurring in pairs roughly eight years apart every hundred or so years. Nevertheless, he accurately predicted that Venus would cross the face of the Sun in both 1761 and 1769 \u2013 though he didn\u2019t survive to see either."
          },
          {
            label: "D",
            text: "Inspired by Halley\u2019s suggestion of a way to pin down the scale of the Solar System, teams of British and French astronomers set out on expeditions to places as diverse as India and Siberia. But things weren\u2019t helped by Britain and France being at war. The person who deserves most sympathy is the French astronomer Guillaume Le Gentil. He was thwarted by the fact that the British were besieging his observation site at Pondicherry in India. Fleeing on a French warship crossing the Indian Ocean, Le Gentil saw a wonderful transit \u2013 but the ship\u2019s pitching and rolling ruled out any attempt at making accurate observations. Undaunted, he remained south of the equator, keeping himself busy by studying the islands of Mauritius and Madagascar before setting off to observe the next transit in the Philippines. Ironically after travelling nearly 50,000 kilometres, his view was clouded out at the last moment, a very dispiriting experience."
          },
          {
            label: "E",
            text: "While the early transit timings were as precise as instruments would allow, the measurements were dogged by the 'black drop' effect. When Venus begins to cross the Sun\u2019s disc, it looks smeared not circular \u2013 which makes it difficult to establish timings. This is due to diffraction of light. The second problem is that Venus exhibits a halo of light when it is seen just outside the Sun\u2019s disc. While this showed astronomers that Venus was surrounded by a thick layer of gases refracting sunlight around it, both effects made it impossible to obtain accurate timings."
          },
          {
            label: "F",
            text: "But astronomers laboured hard to analyse the results of these expeditions to observe Venus transits. Johann Franz Encke, Director of the Berlin Observatory, finally determined a value for the AU based on all these parallax measurements: 153,340,000 km. Reasonably accurate for the time, that is quite close to today\u2019s value of 149,597,870 km, determined by radar, which has now superseded transits and all other methods in accuracy. The AU is a cosmic measuring rod, and the basis of how we scale the Universe today. The parallax principle can be extended to measure the distances to the stars. If we look at a star in January \u2013 when Earth is at one point in its orbit \u2013 it will seem to be in a different position from where it appears six months later. Knowing the width of Earth\u2019s orbit, the parallax shift lets astronomers calculate the distance."
          },
          {
            label: "G",
            text: "June 2004\u2019s transit of Venus was thus more of an astronomical spectacle than a scientifically important event. But such transits have paved the way for what might prove to be one of the most vital breakthroughs in the cosmos \u2013 detecting Earth-sized planets orbiting other stars."
          }
        ],
        questions: [
          {
            id: "t5-q14",
            number: 14,
            type: "multiple-choice",
            instructions: "Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?",
            text: "Examples of different ways in which the parallax principle has been applied.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F",
              "G Paragraph G"
            ],
            correctAnswer: "F",
            explanation: "Paragraph F discusses applying the parallax principle both to calculate the AU and to measure distances to distant stars.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t5-q15",
            number: 15,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A description of an event which prevented a transit observation.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F",
              "G Paragraph G"
            ],
            correctAnswer: "D",
            explanation: "Paragraph D describes Guillaume Le Gentil's expeditions being ruined by war and cloud cover.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t5-q16",
            number: 16,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A statement about potential future discoveries leading on from transit observations.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F",
              "G Paragraph G"
            ],
            correctAnswer: "G",
            explanation: "Paragraph G notes that transit observations have paved the way for 'detecting Earth-sized planets orbiting other stars.'",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t5-q17",
            number: 17,
            type: "multiple-choice",
            instructions: "Which paragraph contains the following information?",
            text: "A description of physical states connected with Venus which early astronomical instruments failed to overcome.",
            options: [
              "A Paragraph A",
              "B Paragraph B",
              "C Paragraph C",
              "D Paragraph D",
              "E Paragraph E",
              "F Paragraph F",
              "G Paragraph G"
            ],
            correctAnswer: "E",
            explanation: "Paragraph E details the optical distortion of the 'black drop' effect and the halo of refracted light around Venus.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q18",
            number: 18,
            type: "multiple-choice",
            instructions: "Questions 18-21: Match each statement with the correct person (A: Edmond Halley, B: Johannes Kepler, C: Guillaume Le Gentil, D: Johann Franz Encke).",
            text: "He calculated the distance of the Sun from the Earth based on observations of Venus with a fair degree of accuracy.",
            options: ["A Edmond Halley", "B Johannes Kepler", "C Guillaume Le Gentil", "D Johann Franz Encke"],
            correctAnswer: "D",
            explanation: "Paragraph F states: 'Johann Franz Encke, Director of the Berlin Observatory, finally determined a value for the AU based on all these parallax measurements...'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t5-q19",
            number: 19,
            type: "multiple-choice",
            instructions: "Match the statement with the person.",
            text: "He understood that the distance of the Sun from the Earth could be worked out by comparing observations of a transit.",
            options: ["A Edmond Halley", "B Johannes Kepler", "C Guillaume Le Gentil", "D Johann Franz Encke"],
            correctAnswer: "A",
            explanation: "Paragraph B explains that Edmond Halley realised comparing transit timings from different latitudes would yield the parallax angle.",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t5-q20",
            number: 20,
            type: "multiple-choice",
            instructions: "Match the statement with the person.",
            text: "He realised that the time taken by a planet to go round the Sun depends on its distance from the Sun.",
            options: ["A Edmond Halley", "B Johannes Kepler", "C Guillaume Le Gentil", "D Johann Franz Encke"],
            correctAnswer: "B",
            explanation: "Paragraph C notes that 'Johannes Kepler, in the early 17th century, had shown that the distances of the planets from the Sun governed their orbital speeds...'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t5-q21",
            number: 21,
            type: "multiple-choice",
            instructions: "Match the statement with the person.",
            text: "He witnessed a Venus transit but was unable to make any calculations.",
            options: ["A Edmond Halley", "B Johannes Kepler", "C Guillaume Le Gentil", "D Johann Franz Encke"],
            correctAnswer: "C",
            explanation: "Paragraph D states Le Gentil saw the transit from a pitching warship, which 'ruled out any attempt at making accurate observations.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t5-q22",
            number: 22,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.",
            text: "Halley observed one transit of the planet Venus.",
            correctAnswer: "FALSE",
            explanation: "Paragraph B states Halley observed a transit of Mercury, and Paragraph C confirms he did not survive to see the Venus transits of 1761 and 1769.",
            passageAnchor: "Paragraph B & C"
          },
          {
            id: "t5-q23",
            number: 23,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Le Gentil managed to observe a second Venus transit.",
            correctAnswer: "FALSE",
            explanation: "Paragraph D notes that after travelling 50,000 km to the Philippines, 'his view was clouded out at the last moment.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t5-q24",
            number: 24,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The shape of Venus appears distorted when it starts to pass in front of the Sun.",
            correctAnswer: "TRUE",
            explanation: "Paragraph E states: 'When Venus begins to cross the Sun\u2019s disc, it looks smeared not circular...'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q25",
            number: 25,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Early astronomers suspected that the atmosphere on Venus was toxic.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph E mentions a thick layer of gases refracting sunlight, but contains no mention of toxicity.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q26",
            number: 26,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The parallax principle allows astronomers to work out how far away distant stars are from the Earth.",
            correctAnswer: "TRUE",
            explanation: "Paragraph F explicitly states: 'The parallax principle can be extended to measure the distances to the stars.'",
            passageAnchor: "Paragraph F"
          }
        ]
      },
      {
        id: "p3-t5",
        number: 3,
        title: "A Neuroscientist Reveals How to Think Differently",
        subtitle: "The biological mechanics of perception, fear control, and social intelligence that distinguish the iconoclastic brain.",
        paragraphs: [
          {
            label: "A",
            text: "In the last decade a revolution has occurred in the way that scientists think about the brain. We now know that the decisions humans make can be traced to the firing patterns of neurons in specific parts of the brain. These discoveries have led to the field known as neuroeconomics, which studies the brain\u2019s secrets to success in an economic environment that demands innovation and being able to do things differently from competitors. A brain that can do this is an iconoclastic one. Briefly, an iconoclast is a person who does something that others say can\u2019t be done."
          },
          {
            label: "B",
            text: "This definition implies that iconoclasts are different from other people, but more precisely, it is their brains that are different in three distinct ways: perception, fear response, and social intelligence. Each of these three functions utilizes a different circuit in the brain. Naysayers might suggest that the brain is irrelevant, that thinking in an original, even revolutionary, way is more a matter of personality than brain function. But the field of neuroeconomics was born out of the realization that the physical workings of the brain place limitations on the way we make decisions. By understanding these constraints, we begin to understand why some people march to a different drumbeat."
          },
          {
            label: "C",
            text: "The first thing to realize is that the brain suffers from limited resources. It has a fixed energy budget, about the same as a 40 watt light bulb, so it has evolved to work as efficiently as possible. This is where most people are impeded from being an iconoclast. For example, when confronted with information streaming from the eyes, the brain will interpret this information in the quickest way possible. Thus it will draw on both past experience and any other source of information, such as what other people say, to make sense of what it is seeing. This happens all the time. The brain takes shortcuts that work so well we are hardly ever aware of them. We think our perceptions of the world are real, but they are only biological and electrical rumblings. Perception is not simply a product of what your eyes or ears transmit to your brain. More than the physical reality of photons or sound waves, perception is a product of the brain."
          },
          {
            label: "D",
            text: "Perception is central to iconoclasm. Iconoclasts see things differently to other people. Their brains do not fall into efficiency pitfalls as much as the average person\u2019s brain. Iconoclasts, either because they were born that way or through learning, have found ways to work around the perceptual shortcuts that plague most people. Perception is not something that is hardwired into the brain. It is a learned process, which is both a curse and an opportunity for change. The brain faces the fundamental problem of interpreting physical stimuli from the senses. Everything the brain sees, hears, or touches has multiple interpretations. The one that is ultimately chosen is simply the brain\u2019s best theory. In technical terms, these conjectures have their basis in the statistical likelihood of one interpretation over another and are heavily influenced by past experience and, importantly for potential iconoclasts, what other people say."
          },
          {
            label: "E",
            text: "The best way to see things differently to other people is to bombard the brain with things it has never encountered before. Novelty releases the perceptual process from the chains of past experience and forces the brain to make new judgments. Successful iconoclasts have an extraordinary willingness to be exposed to what is fresh and different. Observation of iconoclasts shows that they embrace novelty while most people avoid things that are different."
          },
          {
            label: "F",
            text: "The problem with novelty, however, is that it tends to trigger the brain\u2019s fear system. Fear is a major impediment to thinking like an iconoclast and stops the average person in his tracks. There are many types of fear, but the two that inhibit iconoclastic thinking and people generally find difficult to deal with are fear of uncertainty and fear of public ridicule. These may seem like trivial phobias. But fear of public speaking, which everyone must do from time to time, afflicts one-third of the population. This makes it too common to be considered a mental disorder. It is simply a common variant of human nature, one which iconoclasts do not let inhibit their reactions."
          },
          {
            label: "G",
            text: "Finally, to be successful iconoclasts, individuals must sell their ideas to other people. This is where social intelligence comes in. Social intelligence is the ability to understand and manage people in a business setting. In the last decade there has been an explosion of knowledge about the social brain and how the brain works when groups coordinate decision making. Neuroscience has revealed which brain circuits are responsible for functions like understanding what other people think, empathy, fairness, and social identity. These brain regions play key roles in whether people convince others of their ideas. Perception is important in social cognition too. The perception of someone\u2019s enthusiasm, or reputation, can make or break a deal. Understanding how perception becomes intertwined with social decision making shows why successful iconoclasts are so rare."
          },
          {
            label: "H",
            text: "Iconoclasts create new opportunities in every area from artistic expression to technology to business. They supply creativity and innovation not easily accomplished by committees. Rules aren\u2019t important to them. Iconoclasts face alienation and failure, but can also be a major asset to any organization. It is crucial for success in any field to understand how the iconoclastic mind works."
          }
        ],
        questions: [
          {
            id: "t5-q27",
            number: 27,
            type: "multiple-choice",
            instructions: "Choose the correct letter, A, B, C or D.",
            text: "Neuroeconomics is a field of study which seeks to:",
            options: ["A Cause a revolutionary change in how scientists understand brain chemistry.", "B Understand how optimal commercial decisions are made in laboratory settings.", "C Understand how the brain is linked to achievement in competitive fields.", "D Trace the specific firing patterns of neurons across childhood development."],
            correctAnswer: "C",
            explanation: "Paragraph A states neuroeconomics 'studies the brain\u2019s secrets to success in an economic environment that demands innovation and being able to do things differently from competitors.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t5-q28",
            number: 28,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "According to the writer, iconoclasts are distinctive because:",
            options: ["A They create completely unique physical brain structures.", "B Their brains function differently in perception, fear, and social intelligence.", "C Their aggressive personalities defy societal norms.", "D They make rapid executive decisions without contemplation."],
            correctAnswer: "B",
            explanation: "Paragraph B states: 'more precisely, it is their brains that are different in three distinct ways: perception, fear response, and social intelligence.'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t5-q29",
            number: 29,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "According to the writer, the brain works efficiently because:",
            options: ["A It processes visual signals without neural lag.", "B It interprets raw sensory data strictly through formal logic.", "C It consumes massive amounts of glucose during stress.", "D It relies on previous events and takes cognitive shortcuts."],
            correctAnswer: "D",
            explanation: "Paragraph C explains that with a fixed energy budget, the brain draws on past experience to take perceptual shortcuts.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t5-q30",
            number: 30,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "The writer asserts that perception is:",
            options: ["A An exact objective recording of external photons and sound waves.", "B A reliable reflection of what our sensory organs transmit.", "C A product of brain processes and internal statistical conjectures.", "D An automatic process of which humans remain consciously aware."],
            correctAnswer: "C",
            explanation: "Paragraph C and D confirm: 'More than the physical reality of photons or sound waves, perception is a product of the brain.'",
            passageAnchor: "Paragraph C & D"
          },
          {
            id: "t5-q31",
            number: 31,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "According to the writer, an iconoclastic thinker:",
            options: ["A Isolates sensory perception entirely to the prefrontal cortex.", "B Avoids cognitive traps and standard perceptual shortcuts.", "C Has a brain that is hardwired from birth never to experience fear.", "D Possesses far more career opportunities than average employees."],
            correctAnswer: "B",
            explanation: "Paragraph D states iconoclasts 'have found ways to work around the perceptual shortcuts that plague most people.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t5-q32",
            number: 32,
            type: "yes-no-not-given",
            instructions: "Do the following statements agree with the claims of the writer in Reading Passage 3? Write YES, NO, or NOT GIVEN.",
            text: "Exposure to different events forces the brain to think differently.",
            correctAnswer: "YES",
            explanation: "Paragraph E states: 'Novelty releases the perceptual process from the chains of past experience and forces the brain to make new judgments.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q33",
            number: 33,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Iconoclasts are unusually receptive to new experiences.",
            correctAnswer: "YES",
            explanation: "Paragraph E notes: 'Successful iconoclasts have an extraordinary willingness to be exposed to what is fresh and different.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q34",
            number: 34,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Most people are too shy to try different things.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph E mentions people avoid things that are different due to fear of novelty, but does not state they are 'too shy'.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t5-q35",
            number: 35,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "If you think in an iconoclastic way, you can easily overcome fear.",
            correctAnswer: "NO",
            explanation: "Paragraph F explains fear is a major impediment and stops people in their tracks; iconoclasts do not let fear inhibit reactions, but it is not described as easy.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t5-q36",
            number: 36,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "When concern about embarrassment matters less, other fears become irrelevant.",
            correctAnswer: "NOT GIVEN",
            explanation: "The text discusses fear of ridicule and fear of uncertainty, but makes no claim that overcoming embarrassment makes other fears irrelevant.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t5-q37",
            number: 37,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Fear of public speaking is a psychological illness.",
            correctAnswer: "NO",
            explanation: "Paragraph F explicitly states fear of public speaking is 'too common to be considered a mental disorder. It is simply a common variant of human nature...'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t5-q38",
            number: 38,
            type: "multiple-choice",
            instructions: "Questions 38-40: Complete each sentence with the correct ending (A-E).",
            text: "Thinking like a successful iconoclast is demanding because it...",
            options: [
              "A Requires both perceptual and social intelligence skills.",
              "B Focuses on how groups decide on an action.",
              "C Works in many fields, both artistic and scientific.",
              "D Leaves one open to continuous criticism and rejection.",
              "E Involves understanding how organisations manage people."
            ],
            correctAnswer: "A",
            explanation: "Paragraph G explains that iconoclasts must not only perceive differently but also possess social intelligence to convince others of their ideas.",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t5-q39",
            number: 39,
            type: "multiple-choice",
            instructions: "Choose the correct ending A-E.",
            text: "The concept of the social brain is useful to iconoclasts because it...",
            options: [
              "A Requires both perceptual and social intelligence skills.",
              "B Focuses on how groups decide on an action.",
              "C Works in many fields, both artistic and scientific.",
              "D Leaves one open to continuous criticism and rejection.",
              "E Involves understanding how organisations manage people."
            ],
            correctAnswer: "B",
            explanation: "Paragraph G states: 'how the brain works when groups coordinate decision making... play key roles in whether people convince others of their ideas.'",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t5-q40",
            number: 40,
            type: "multiple-choice",
            instructions: "Choose the correct ending A-E.",
            text: "Iconoclasts are generally an asset because their way of thinking...",
            options: [
              "A Requires both perceptual and social intelligence skills.",
              "B Focuses on how groups decide on an action.",
              "C Works in many fields, both artistic and scientific.",
              "D Leaves one open to continuous criticism and rejection.",
              "E Involves understanding how organisations manage people."
            ],
            correctAnswer: "C",
            explanation: "Paragraph H states iconoclasts 'create new opportunities in every area from artistic expression to technology to business... a major asset to any organization.'",
            passageAnchor: "Paragraph H"
          }
        ]
      }
    ]
  }
];
