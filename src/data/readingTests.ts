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
  }
];
