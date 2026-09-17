import type { ReadingTest } from "../types/reading";

export const READING_TESTS: ReadingTest[] = [
  {
    id: "cambridge-academic-01",
    title: "Cambridge Academic Reading Test 1",
    description: "Authentic Cambridge IELTS examination covering linguistic prescriptivism, marine tidal power turbines, and Shannon's information theory.",
    passages: [
      {
        id: "p1-t1",
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
            id: "t1-q1",
            number: 1,
            type: "yes-no-not-given",
            instructions: "Do the following statements agree with the claims of the writer in Reading Passage 1? Write YES if the statement agrees, NO if it contradicts, or NOT GIVEN if it is impossible to say.",
            text: "There are understandable reasons why arguments occur about language.",
            correctAnswer: "YES",
            explanation: "Paragraph A states: 'Language belongs to everyone, so most people feel they have a right to hold an opinion about it. And when opinions differ, emotions can run high.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q2",
            number: 2,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "People feel more strongly about language education than about small differences in language usage.",
            correctAnswer: "NO",
            explanation: "Paragraph A notes that arguments can start 'as easily over minor points of usage as over major policies of linguistic education', contradicting the assertion that people feel more strongly about education.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q3",
            number: 3,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Our assessment of a person\u2019s intelligence is affected by the way he or she uses language.",
            correctAnswer: "YES",
            explanation: "Paragraph B states that 'linguistic factors influence how we judge personality, intelligence, social status, educational standards...'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t1-q4",
            number: 4,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Prescriptive grammar books cost a lot of money to buy in the 18th century.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph D discusses 18th-century grammars and dictionaries, but makes no statement regarding their commercial cost or price.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t1-q5",
            number: 5,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Prescriptivism still exists today.",
            correctAnswer: "YES",
            explanation: "Paragraph E states: 'These attitudes are still with us, and they motivate a widespread concern that linguistic standards should be maintained.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t1-q6",
            number: 6,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "According to descriptivists it is pointless to try to stop language change.",
            correctAnswer: "YES",
            explanation: "Paragraph E explains that the descriptivist view sees it as an impossible task to attempt 'evaluating language variation or halting language change.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t1-q7",
            number: 7,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Descriptivism only appeared after the 18th century.",
            correctAnswer: "NO",
            explanation: "Paragraph E explicitly states: 'In the second half of the 18th century, we already find advocates of this view, such as Joseph Priestley...'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t1-q8",
            number: 8,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Both descriptivists and prescriptivists have been misrepresented.",
            correctAnswer: "YES",
            explanation: "Paragraph F notes that 'the opposition between descriptivists and prescriptivists has often become extreme, with both sides painting unreal pictures of the other.'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t1-q9",
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
            id: "t1-q10",
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
            id: "t1-q11",
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
            id: "t1-q12",
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
            id: "t1-q13",
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
        id: "p2-t1",
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
            id: "t1-q14",
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
            id: "t1-q15",
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
            id: "t1-q16",
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
            id: "t1-q17",
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
            id: "t1-q18",
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
            id: "t1-q19",
            number: 19,
            type: "multiple-choice",
            text: "What positive environmental contribution could widespread marine power provide?",
            options: ["A It would desalinate seawater for human domestic consumption.", "B It would drastically cut carbon dioxide emissions.", "C It would prevent severe coastal erosion along cliffs.", "D It would eliminate marine debris and plastics in estuaries."],
            correctAnswer: "B",
            explanation: "Paragraph A states the technology raises the prospect of drastically reducing carbon dioxide emissions.",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q20",
            number: 20,
            type: "multiple-choice",
            text: "What could be an outcome for Britain's conventional energy infrastructure if marine renewables are fully developed?",
            options: ["A Massive state subsidies would be required for coal mines.", "B Britain would need to import all of its gas from Eastern Europe.", "C Britain would be able to close gas, coal and nuclear power plants.", "D Electricity rationing would be mandatory during peak hours."],
            correctAnswer: "C",
            explanation: "Paragraph A states: 'Britain would be able to close gas, coal and nuclear power plants and export renewable power to other parts of Europe.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q21",
            number: 21,
            type: "multiple-choice",
            text: "How could undersea turbines benefit Britain\u2019s national economy?",
            options: ["A By serving as a major export earner to island nations like Japan and New Zealand.", "B By generating tourism revenue around offshore oil rigs.", "C By eliminating all port taxes for international merchant shipping.", "D By guaranteeing free domestic electricity to coastal towns."],
            correctAnswer: "A",
            explanation: "Paragraph A states undersea turbines 'could become a big export earner to island nations such as Japan and New Zealand.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q22",
            number: 22,
            type: "multiple-choice",
            text: "Where are the most advantageous geographic locations for tidal power installations?",
            options: ["A In calm inland river estuaries.", "B Deep under polar ice caps.", "C Between islands or around heavily indented coasts with strong currents.", "D Beside commercial shipping lanes in open ocean."],
            correctAnswer: "C",
            explanation: "Paragraph C notes: 'The best sites are between islands or around heavily indented coasts where there are strong tidal currents.'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t1-q23",
            number: 23,
            type: "sentence-completion",
            instructions: "Complete the technical details below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "The turbine towers are engineered so they can be lifted out of the water for _______ and cleaning.",
            correctAnswer: "maintenance",
            explanation: "Paragraph D states the towers will be 'designed to be lifted out of the water for maintenance and to clean seaweed from the blades.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t1-q24",
            number: 24,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Marine fauna are not thought to be in danger because of the relatively _______ blades.",
            correctAnswer: "slow-turning",
            explanation: "Paragraph D notes: 'Fish and other creatures are thought unlikely to be at risk from the relatively slow-turning blades.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t1-q25",
            number: 25,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Air bubbles form around turbine blades as a result of _______.",
            correctAnswer: "low pressure",
            explanation: "Paragraph F states: 'cavitation, where low pressure behind a turning blade causes air bubbles.'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t1-q26",
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
        id: "p3-t1",
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
            id: "t1-q27",
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
            id: "t1-q28",
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
            id: "t1-q29",
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
            id: "t1-q30",
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
            id: "t1-q31",
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
            id: "t1-q32",
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
            id: "t1-q33",
            number: 33,
            type: "sentence-completion",
            instructions: "Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "The Voyager 1 space probe transmitted pictures of both _______ and Saturn before leaving the solar system.",
            correctAnswer: "Jupiter",
            explanation: "Paragraph A states: 'The space probe, Voyager I, launched in 1977, had sent back spectacular images of Jupiter and Saturn...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q34",
            number: 34,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "After photographing the gas giants, the probe soared out of the _______ on a one-way mission.",
            correctAnswer: "Solar System",
            explanation: "Paragraph A states: 'and then soared out of the Solar System on a one-way mission to the stars.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q35",
            number: 35,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "NASA experts feared losing contact because deep-space freezing temperatures placed both the _______ and circuits on the verge of breakdown.",
            correctAnswer: "sensors",
            explanation: "Paragraph A states: 'Sensors and circuits were on the brink of failing...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q36",
            number: 36,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "The engineers transmitted instructions commanding Voyager 1 to switch over to its internal _______.",
            correctAnswer: "spares",
            explanation: "Paragraph A states: 'The solution was to get a message to Voyager I to instruct it to use spares to change the failing parts.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q37",
            number: 37,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "The transmission was successfully beamed over 12 billion kilometres utilizing a NASA Deep Space Network _______.",
            correctAnswer: "radio dish",
            explanation: "Paragraph A explains: 'By means of a radio dish belonging to NASA\u2019s Deep Space Network, the message was sent out...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t1-q38",
            number: 38,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 3? Write TRUE, FALSE, or NOT GIVEN.",
            text: "The concept of describing something as true or false was the starting point for Shannon in his attempts to send messages over distances.",
            correctAnswer: "TRUE",
            explanation: "Paragraph C states that the binary true/false bit was the fundamental unit from which Shannon set about defining how to transmit information.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t1-q39",
            number: 39,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The amount of information that can be sent in a given time period is determined with reference to the signal strength and noise level.",
            correctAnswer: "TRUE",
            explanation: "Paragraph D confirms: 'The resulting limit, given in units of bits per second, is the absolute maximum rate of error-free communication given signal strength and noise level.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t1-q40",
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
    id: "cambridge-academic-02",
    title: "Cambridge Academic Reading Test 2",
    description: "Authentic Cambridge IELTS examination exploring classroom auditory deficits in children, historical transits of Venus, and the neuroscience of iconoclastic thinking.",
    passages: [
      {
        id: "p1-t2",
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
            id: "t2-q1",
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
            id: "t2-q2",
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
            id: "t2-q3",
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
            id: "t2-q4",
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
            id: "t2-q5",
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
            id: "t2-q6",
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
            id: "t2-q7",
            number: 7,
            type: "sentence-completion",
            instructions: "Answer the questions below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.",
            text: "For what period of time has hearing loss in schoolchildren been studied in New Zealand?",
            correctAnswer: "two decades",
            explanation: "Section A states: 'from research carried out over two decades that 6-10% of children in that country are affected by hearing loss.'",
            passageAnchor: "Section A"
          },
          {
            id: "t2-q8",
            number: 8,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "In addition to machinery noise, what other type of noise can upset children with autism?",
            correctAnswer: "crowd noise",
            explanation: "Section E states: 'often find sounds such as crowd noise and the noise generated by machinery painful and distressing.'",
            passageAnchor: "Section E"
          },
          {
            id: "t2-q9",
            number: 9,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What term is used to describe the hearing problems of schoolchildren which have not been officially diagnosed?",
            correctAnswer: "invisible disabilities",
            explanation: "Section G states: 'many undiagnosed children exist in the education system with invisible disabilities.'",
            passageAnchor: "Section G"
          },
          {
            id: "t2-q10",
            number: 10,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.",
            text: "What specific part of the New Zealand Disability Strategy aims to provide disabled learners with equal opportunity?",
            correctAnswer: "Objective 3",
            explanation: "Section H states: 'Objective 3 of the New Zealand Disability Strategy is to Provide the Best Education for Disabled People...'",
            passageAnchor: "Section H"
          },
          {
            id: "t2-q11",
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
            id: "t2-q12",
            number: 12,
            type: "multiple-choice",
            text: "Which physical equipment factor is identified as generating distracting classroom noise?",
            options: ["A Interactive digital whiteboards.", "B Metal desk frames rattling on wooden flooring.", "C Mechanical ventilation and cooling systems like air-conditioning units.", "D Fluorescent lighting ballasts humming at 50Hz."],
            correctAnswer: "C",
            explanation: "Section B cites 'mechanical means of ventilation such as air-conditioning units' as contributing to comprehension difficulty.",
            passageAnchor: "Section B"
          },
          {
            id: "t2-q13",
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
        id: "p2-t2",
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
            id: "t2-q14",
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
            id: "t2-q15",
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
            id: "t2-q16",
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
            id: "t2-q17",
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
            id: "t2-q18",
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
            id: "t2-q19",
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
            id: "t2-q20",
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
            id: "t2-q21",
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
            id: "t2-q22",
            number: 22,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 2? Write TRUE, FALSE, or NOT GIVEN.",
            text: "Halley observed one transit of the planet Venus.",
            correctAnswer: "FALSE",
            explanation: "Paragraph B states Halley observed a transit of Mercury, and Paragraph C confirms he did not survive to see the Venus transits of 1761 and 1769.",
            passageAnchor: "Paragraph B & C"
          },
          {
            id: "t2-q23",
            number: 23,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Le Gentil managed to observe a second Venus transit.",
            correctAnswer: "FALSE",
            explanation: "Paragraph D notes that after travelling 50,000 km to the Philippines, 'his view was clouded out at the last moment.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t2-q24",
            number: 24,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The shape of Venus appears distorted when it starts to pass in front of the Sun.",
            correctAnswer: "TRUE",
            explanation: "Paragraph E states: 'When Venus begins to cross the Sun\u2019s disc, it looks smeared not circular...'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t2-q25",
            number: 25,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Early astronomers suspected that the atmosphere on Venus was toxic.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph E mentions a thick layer of gases refracting sunlight, but contains no mention of toxicity.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t2-q26",
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
        id: "p3-t2",
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
            id: "t2-q27",
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
            id: "t2-q28",
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
            id: "t2-q29",
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
            id: "t2-q30",
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
            id: "t2-q31",
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
            id: "t2-q32",
            number: 32,
            type: "yes-no-not-given",
            instructions: "Do the following statements agree with the claims of the writer in Reading Passage 3? Write YES, NO, or NOT GIVEN.",
            text: "Exposure to different events forces the brain to think differently.",
            correctAnswer: "YES",
            explanation: "Paragraph E states: 'Novelty releases the perceptual process from the chains of past experience and forces the brain to make new judgments.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t2-q33",
            number: 33,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Iconoclasts are unusually receptive to new experiences.",
            correctAnswer: "YES",
            explanation: "Paragraph E notes: 'Successful iconoclasts have an extraordinary willingness to be exposed to what is fresh and different.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t2-q34",
            number: 34,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Most people are too shy to try different things.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph E mentions people avoid things that are different due to fear of novelty, but does not state they are 'too shy'.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t2-q35",
            number: 35,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "If you think in an iconoclastic way, you can easily overcome fear.",
            correctAnswer: "NO",
            explanation: "Paragraph F explains fear is a major impediment and stops people in their tracks; iconoclasts do not let fear inhibit reactions, but it is not described as easy.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t2-q36",
            number: 36,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "When concern about embarrassment matters less, other fears become irrelevant.",
            correctAnswer: "NOT GIVEN",
            explanation: "The text discusses fear of ridicule and fear of uncertainty, but makes no claim that overcoming embarrassment makes other fears irrelevant.",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t2-q37",
            number: 37,
            type: "yes-no-not-given",
            instructions: "Write YES, NO, or NOT GIVEN.",
            text: "Fear of public speaking is a psychological illness.",
            correctAnswer: "NO",
            explanation: "Paragraph F explicitly states fear of public speaking is 'too common to be considered a mental disorder. It is simply a common variant of human nature...'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t2-q38",
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
            id: "t2-q39",
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
            id: "t2-q40",
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
  },
  {
    id: "cambridge-academic-03",
    title: "Cambridge Academic Reading Test 3",
    description: "Authentic Cambridge IELTS examination covering Perkin's discovery of synthetic mauve dye, the search for extra-terrestrial intelligence (SETI), and the evolutionary double return of tortoises.",
    passages: [
      {
        id: "p1-t3",
        number: 1,
        title: "William Henry Perkin",
        subtitle: "The accidental discovery of synthetic mauve dye that sparked the modern organic chemical industry.",
        paragraphs: [
          {
            label: "A",
            text: "William Henry Perkin was born on March 12, 1838, in London, England. As a boy, Perkin\u2019s curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather\u2019s home that solidified the young man\u2019s enthusiasm for chemistry."
          },
          {
            label: "B",
            text: "As a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist\u2019s enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15."
          },
          {
            label: "C",
            text: "At the time of Perkin\u2019s enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin\u2019s scientific gifts soon caught Hofmann\u2019s attention and, within two years, he became Hofmann\u2019s youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune."
          },
          {
            label: "D",
            text: "At the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge."
          },
          {
            label: "E",
            text: "During his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family\u2019s house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin\u2019s scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur\u2019s words 'chance favours only the prepared mind', Perkin saw the potential of his unexpected find."
          },
          {
            label: "F",
            text: "Historically, textile dyes were made from such natural sources as plants and animal excretions. Some of these, such as the glandular mucus of snails, were difficult to obtain and outrageously expensive. Indeed, the purple colour extracted from a snail was once so costly that in society at the time only the rich could afford it. Further, natural dyes tended to be muddy in hue and fade quickly. It was against this backdrop that Perkin\u2019s discovery was made."
          },
          {
            label: "G",
            text: "Perkin quickly grasped that his purple solution could be used to colour fabric, thus making it the world\u2019s first synthetic dye. Realising the importance of this breakthrough, he lost no time in patenting it. But perhaps the most fascinating of all Perkin\u2019s reactions to his find was his nearly instant recognition that the new dye had commercial possibilities. Perkin originally named his dye Tyrian Purple, but it later became commonly known as mauve (from the French for the plant used to make the colour violet). He asked advice of Scottish dye works owner Robert Pullar, who assured him that manufacturing the dye would be well worth it if the colour remained fast and the cost was relatively low. So, over the fierce objections of his mentor Hofmann, he left college to give birth to the modern chemical industry."
          },
          {
            label: "H",
            text: "With the help of his father and brother, Perkin set up a factory not far from London. Utilising the cheap and plentiful coal tar that was an almost unlimited byproduct of London\u2019s gas street lighting, the dye works began producing the world\u2019s first synthetically dyed material in 1857. The company received a commercial boost from the Empress Eugenie of France, when she decided the new colour flattered her. Very soon, mauve was the necessary shade for all the fashionable ladies in that country. Not to be outdone, England\u2019s Queen Victoria also appeared in public wearing a mauve gown, thus making it all the rage in England as well. The dye was bold and fast, and the public clamoured for more."
          },
          {
            label: "I",
            text: "Although Perkin\u2019s fame was achieved and fortune assured by his first discovery, the chemist continued his research. Among other dyes he developed and introduced were aniline red (1859) and aniline black (1863) and, in the late 1860s, Perkin\u2019s green. It is important to note that Perkin\u2019s synthetic dye discoveries had outcomes far beyond the merely decorative. The dyes also became vital to medical research in many ways. For instance, they were used to stain previously invisible microbes and bacteria, allowing researchers to identify such bacilli as tuberculosis, cholera, and anthrax. Artificial dyes continue to play a crucial role today. And, in what would have been particularly pleasing to Perkin, their current use is in the search for a vaccine against malaria."
          }
        ],
        questions: [
          {
            id: "t3-q1",
            number: 1,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 1? Write TRUE, FALSE, or NOT GIVEN.",
            text: "Michael Faraday was the first person to recognize Perkin\u2019s ability as a student of chemistry.",
            correctAnswer: "FALSE",
            explanation: "Paragraph B states that it was his school teacher, Thomas Hall, who perceived his talent and devotion first.",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q2",
            number: 2,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Michael Faraday suggested Perkin should enroll in the Royal College of Chemistry.",
            correctAnswer: "NOT GIVEN",
            explanation: "The passage notes Faraday's lectures inspired him, but does not say Faraday suggested enrolment.",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q3",
            number: 3,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Perkin employed August Wilhelm Hofmann as his assistant.",
            correctAnswer: "FALSE",
            explanation: "Paragraph C states that Perkin became Hofmann's assistant, not his employer.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t3-q4",
            number: 4,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Perkin was still young when he made the discovery that made him rich and famous.",
            correctAnswer: "TRUE",
            explanation: "Paragraph B, C and E show he entered college at 15 and made his breakthrough in 1856 at age 18.",
            passageAnchor: "Paragraph B-E"
          },
          {
            id: "t3-q5",
            number: 5,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The trees from which quinine is derived grow only in South America.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph D states the tree is native to South America, but does not state it grows only there.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q6",
            number: 6,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Perkin hoped to manufacture a drug from a coal tar waste product.",
            correctAnswer: "TRUE",
            explanation: "Paragraph E: 'He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product.'",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t3-q7",
            number: 7,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur.",
            correctAnswer: "NOT GIVEN",
            explanation: "Pasteur's quote is cited by the narrator, but there is no statement that Perkin was inspired by Pasteur's discoveries.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t3-q8",
            number: 8,
            type: "sentence-completion",
            instructions: "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "Before Perkin\u2019s discovery, with what group in society was the colour purple associated?",
            correctAnswer: "rich",
            explanation: "Paragraph F states: 'in society at the time only the rich could afford it.'",
            passageAnchor: "Paragraph F"
          },
          {
            id: "t3-q9",
            number: 9,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What potential did Perkin immediately understand that his new dye had?",
            correctAnswer: "commercial",
            explanation: "Paragraph G states: 'his nearly instant recognition that the new dye had commercial possibilities.'",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t3-q10",
            number: 10,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What was the name finally used to refer to the first color Perkin invented?",
            correctAnswer: "mauve",
            explanation: "Paragraph G states: 'it later became commonly known as mauve...'",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t3-q11",
            number: 11,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What was the name of the person Perkin consulted before setting up his own dye works?",
            correctAnswer: "Robert Pullar",
            explanation: "Paragraph G states: 'He asked advice of Scottish dye works owner Robert Pullar...'",
            passageAnchor: "Paragraph G"
          },
          {
            id: "t3-q12",
            number: 12,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "In what country did Perkin's newly invented colour first become fashionable?",
            correctAnswer: "France",
            explanation: "Paragraph H notes: 'The company received a commercial boost from the Empress Eugenie of France... fashionable ladies in that country.'",
            passageAnchor: "Paragraph H"
          },
          {
            id: "t3-q13",
            number: 13,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "According to the passage, which disease is now being targeted by researchers using synthetic dyes?",
            correctAnswer: "malaria",
            explanation: "Paragraph I concludes: 'their current use is in the search for a vaccine against malaria.'",
            passageAnchor: "Paragraph I"
          }
        ]
      },
      {
        id: "p2-t3",
        number: 2,
        title: "Is There Anybody Out There?",
        subtitle: "The Search for Extra-Terrestrial Intelligence (SETI) and the science of interstellar communication.",
        paragraphs: [
          {
            label: "A",
            text: "The primary reason for the search is basic curiosity \u2013 the same curiosity about the natural world that drives all pure science. We want to know whether we are alone in the Universe. We want to know whether life evolves naturally if given the right conditions, or whether there is something very special about the Earth to have fostered the variety of life forms that we see around us on the planet. The simple detection of a radio signal will be sufficient to answer this most basic of all questions. In this sense, SETI is another cog in the machinery of pure science which is continually pushing out the horizon of our knowledge. However, there are other reasons for being interested in whether life exists elsewhere. For example, we have had civilisation on Earth for perhaps only a few thousand years, and the threats of nuclear war and pollution over the last few decades have told us that our survival may be tenuous. Will we last another two thousand years or will we wipe ourselves out? Since the lifetime of a planet like ours is several billion years, we can expect that, if other civilisations do survive in our galaxy, their ages will range from zero to several billion years. Thus any other civilisation that we hear from is likely to be far older, on average, than ourselves. The mere existence of such a civilisation will tell us that long-term survival is possible, and gives us some cause for optimism. It is even possible that the older civilisation may pass on the benefits of their experience in dealing with threats to survival such as nuclear war and global pollution, and other threats that we haven\u2019t yet discovered."
          },
          {
            label: "B",
            text: "In discussing whether we are alone, most SETI scientists adopt two ground rules. First, UFOs (Unidentified Flying Objects) are generally ignored since most scientists don\u2019t consider the evidence for them to be strong enough to bear serious consideration (although it is also important to keep an open mind in case any really convincing evidence emerges in the future). Second, we make a very conservative assumption that we are looking for a life form that is pretty well like us, since if it differs radically from us we may well not recognise it as a life form, quite apart from whether we are able to communicate with it. In other words, the life form we are looking for may well have two green heads and seven fingers, but it will nevertheless resemble us in that it should communicate with its fellows, be interested in the Universe, live on a planet orbiting a star like our Sun, and perhaps most restrictively, have a chemistry, like us, based on carbon and water."
          },
          {
            label: "C",
            text: "Even when we make these assumptions, our understanding of other life forms is still severely limited. We do not even know, for example, how many stars have planets, and we certainly do not know how likely it is that life will arise naturally, given the right conditions. However, when we look at the 100 billion stars in our galaxy (the Milky Way), and 100 billion galaxies in the observable Universe, it seems inconceivable that at least one of these planets does not have a life form on it; in fact, the best educated guess we can make, using the little that we do know about the conditions for carbon-based life, leads us to estimate that perhaps one in 100,000 stars might have a life-bearing planet orbiting it. That means that our nearest neighbours are perhaps 100 light years away, which is almost next door in astronomical terms."
          },
          {
            label: "D",
            text: "An alien civilisation could choose many different ways of sending information across the galaxy, but many of these either require too much energy, or else are severely attenuated while traversing the vast distances across the galaxy. It turns out that, for a given amount of transmitted power, radio waves in the frequency range 1000 to 3000 MHz travel the greatest distance, and so all searches to date have concentrated on looking for radio waves in this frequency range. So far there have been a number of searches by various groups around the world, including Australian searches using the radio telescope at Parkes, New South Wales. Until now there have not been any detections from the few hundred stars which have been searched. The scale of the searches has been increased dramatically since 1992, when the US Congress voted NASA $10 million per year for ten years to conduct a thorough search for extra-terrestrial life. Much of the money in this project is being spent on developing the special hardware needed to search many frequencies at once. The project has two parts. One part is a targeted search using the world\u2019s largest radio telescopes, the American-operated telescope in Arecibo, Puerto Rico and the French telescope in Nancy in France. This part of the project is searching the nearest 1000 likely stars with high sensitivity for signals in the frequency range 1000 to 3000 MHz. The other part of the project is an undirected search which is monitoring all of space with a lower sensitivity, using the smaller antennas of NASA\u2019s Deep Space Network."
          },
          {
            label: "E",
            text: "There is considerable debate over how we should react if we detect a signal from an alien civilisation. Everybody agrees that we should not reply immediately. Quite apart from the impracticality of sending a reply over such large distances at short notice, it raises a host of ethical questions that would have to be addressed by the global community before any reply could be sent. Would the human race face the culture shock if faced with a superior and much older civilisation? Luckily, there is no urgency about this. The stars being searched are hundreds of light years away, so it takes hundreds of years for their signal to reach us, and a further few hundred years for our reply to reach them. It\u2019s not important, then, if there\u2019s a delay of a few years, or decades, while the human race debates the question of whether to reply, and perhaps carefully drafts a reply."
          }
        ],
        questions: [
          {
            id: "t3-q14",
            number: 14,
            type: "matching-headings",
            instructions: "Reading Passage 2 has five paragraphs, A-E. Choose the correct heading for paragraphs B-E from the list below.",
            text: "Choose the correct heading for Paragraph B.",
            options: [
              "i. Seeking the transmission of radio signals from planets",
              "ii. Appropriate responses to signals from other civilizations",
              "iii. Vast distances to Earth\u2019s closest neighbors",
              "iv. Assumptions underlying the search for extra-terrestrial intelligence",
              "v. Reasons for the search for extra-terrestrial intelligence",
              "vi. Knowledge of extra-terrestrial life forms",
              "vii. Likelihood of life on other planets"
            ],
            correctAnswer: "iv. Assumptions underlying the search for extra-terrestrial intelligence",
            explanation: "Paragraph B outlines the two ground rules and assumptions (ignoring UFOs and assuming carbon-water based life).",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q15",
            number: 15,
            type: "matching-headings",
            instructions: "Choose the correct heading from the list.",
            text: "Choose the correct heading for Paragraph C.",
            options: [
              "i. Seeking the transmission of radio signals from planets",
              "ii. Appropriate responses to signals from other civilizations",
              "iii. Vast distances to Earth\u2019s closest neighbors",
              "iv. Assumptions underlying the search for extra-terrestrial intelligence",
              "v. Reasons for the search for extra-terrestrial intelligence",
              "vi. Knowledge of extra-terrestrial life forms",
              "vii. Likelihood of life on other planets"
            ],
            correctAnswer: "vii. Likelihood of life on other planets",
            explanation: "Paragraph C estimates the statistical probability (perhaps one in 100,000 stars) of a life-bearing planet.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t3-q16",
            number: 16,
            type: "matching-headings",
            instructions: "Choose the correct heading from the list.",
            text: "Choose the correct heading for Paragraph D.",
            options: [
              "i. Seeking the transmission of radio signals from planets",
              "ii. Appropriate responses to signals from other civilizations",
              "iii. Vast distances to Earth\u2019s closest neighbors",
              "iv. Assumptions underlying the search for extra-terrestrial intelligence",
              "v. Reasons for the search for extra-terrestrial intelligence",
              "vi. Knowledge of extra-terrestrial life forms",
              "vii. Likelihood of life on other planets"
            ],
            correctAnswer: "i. Seeking the transmission of radio signals from planets",
            explanation: "Paragraph D discusses monitoring the 1000-3000 MHz frequency range with radio telescopes in Puerto Rico, France, and Australia.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q17",
            number: 17,
            type: "matching-headings",
            instructions: "Choose the correct heading from the list.",
            text: "Choose the correct heading for Paragraph E.",
            options: [
              "i. Seeking the transmission of radio signals from planets",
              "ii. Appropriate responses to signals from other civilizations",
              "iii. Vast distances to Earth\u2019s closest neighbors",
              "iv. Assumptions underlying the search for extra-terrestrial intelligence",
              "v. Reasons for the search for extra-terrestrial intelligence",
              "vi. Knowledge of extra-terrestrial life forms",
              "vii. Likelihood of life on other planets"
            ],
            correctAnswer: "ii. Appropriate responses to signals from other civilizations",
            explanation: "Paragraph E discusses the debate over how we should react and reply if a signal is detected.",
            passageAnchor: "Paragraph E"
          },
          {
            id: "t3-q18",
            number: 18,
            type: "sentence-completion",
            instructions: "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "What is the life expectancy of Earth according to the passage?",
            correctAnswer: "several billion years",
            explanation: "Paragraph A states: 'Since the lifetime of a planet like ours is several billion years...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t3-q19",
            number: 19,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "What kind of signals from other intelligent civilizations are SETI scientists searching for?",
            correctAnswer: "radio waves",
            explanation: "Paragraph D explains: 'radio waves in the frequency range 1000 to 3000 MHz travel the greatest distance...'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q20",
            number: 20,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.",
            text: "How many stars are the world\u2019s most powerful radio telescopes searching in the targeted project?",
            correctAnswer: "1000",
            explanation: "Paragraph D states: 'searching the nearest 1000 likely stars with high sensitivity...'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q21",
            number: 21,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the views of the writer? Write TRUE, FALSE, or NOT GIVEN.",
            text: "Alien civilizations may be able to help the human race to overcome serious problems.",
            correctAnswer: "TRUE",
            explanation: "Paragraph A states: 'It is even possible that the older civilisation may pass on the benefits of their experience in dealing with threats to survival...'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t3-q22",
            number: 22,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "SETI scientists are trying to find a life form that resembles humans in many ways.",
            correctAnswer: "TRUE",
            explanation: "Paragraph B states: 'we make a very conservative assumption that we are looking for a life form that is pretty well like us...'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q23",
            number: 23,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The Americans and Australians have co-operated on joint research projects.",
            correctAnswer: "NOT GIVEN",
            explanation: "Both Australian and American radio searches are mentioned, but joint co-operation is not mentioned.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q24",
            number: 24,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "So far SETI scientists have picked up radio signals from several stars.",
            correctAnswer: "FALSE",
            explanation: "Paragraph D explicitly states: 'Until now there have not been any detections from the few hundred stars which have been searched.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q25",
            number: 25,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The NASA project attracted criticism from some members of Congress.",
            correctAnswer: "NOT GIVEN",
            explanation: "The text notes Congress voted $10 million per year, but says nothing about criticism.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q26",
            number: 26,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "If a signal from outer space is received, it will be important to respond promptly.",
            correctAnswer: "FALSE",
            explanation: "Paragraph E states: 'Everybody agrees that we should not reply immediately... luckily there is no urgency about this.'",
            passageAnchor: "Paragraph E"
          }
        ]
      },
      {
        id: "p3-t3",
        number: 3,
        title: "The History of the Tortoise",
        subtitle: "The evolutionary transition of tortoises from sea to land, back to sea, and back to land again.",
        paragraphs: [
          {
            label: "A",
            text: "If you go back far enough, everything lived in the sea. At various points in evolutionary history, enterprising individuals within many different animal groups moved out onto the land, sometimes even to the most parched deserts, taking their own private seawater with them in blood and cellular fluids. In addition to the reptiles, birds, mammals and insects which we see all around us, other groups that have succeeded out of water include scorpions, snails, crustaceans such as woodlice and land crabs, millipedes and centipedes, spiders and various worms. And we mustn\u2019t forget the plants, without whose prior invasion of the land none of the other migrations could have happened."
          },
          {
            label: "B",
            text: "Moving from water to land involved a major redesign of every aspect of life, including breathing and reproduction. Nevertheless, a good number of thoroughgoing land animals later turned around, abandoned their hard-earned terrestrial re-tooling, and returned to the water again. Seals have only gone part way back. They show us what the intermediates might have been like, on the way to extreme cases such as whales and dugongs. Whales (including the small whales we call dolphins) and dugongs, with their close cousins the manatees, ceased to be land creatures altogether and reverted to the full marine habits of their remote ancestors. They don\u2019t even come ashore to breed. They do, however, still breathe air, having never developed anything equivalent to the gills of their earlier marine incarnation. Turtles went back to the sea a very long time ago and, like all vertebrate returnees to the water, they breathe air. However, they are, in one respect, less fully given back to the water than whales or dugongs, for turtles still lay their eggs on beaches."
          },
          {
            label: "C",
            text: "There is evidence that all modern turtles are descended from a terrestrial ancestor which lived before most of the dinosaurs. There are two key fossils called Proganochelys quenstedti and Palaeochersis talampayensis dating from early dinosaur times, which appear to be close to the ancestry of all modern turtles and tortoises. You might wonder how we can tell whether fossil animals lived on land or in water, especially if only fragments are found. Sometimes it\u2019s obvious. Ichthyosaurs were reptilian contemporaries of the dinosaurs, with fins and streamlined bodies. The fossils look like dolphins and they surely lived like dolphins, in the water. With turtles it is a little less obvious. One way to tell is by measuring the bones of their forelimbs."
          },
          {
            label: "D",
            text: "Walter Joyce and Jacques Gauthier, at Yale University, obtained three measurements in these particular bones of 71 species of living turtles and tortoises. They used a kind of triangular graph paper to plot the three measurements against one another. All the land tortoise species formed a tight cluster of points in the upper part of the triangle; all the water turtles cluster in the lower part of the triangular graph. There was no overlap, except when they added some species that spend time both in water and on land. Sure enough, these amphibious species show up on the triangular graph approximately half way between the 'wet cluster' of sea turtles and the 'dry cluster' of land tortoises. The next step was to determine where the fossils fell. The bones of P. quenstedti and P. talampayensis leave us in no doubt. Their points on the graph are right in the thick of the dry cluster. Both these fossils were dry-land tortoises. They come from the era before our turtles returned to the water."
          },
          {
            label: "E",
            text: "You might think, therefore, that modern land tortoises have probably stayed on land ever since those early terrestrial times, as most mammals did after a few of them went back to the sea. But apparently not. If you draw out the family tree of all modern turtles and tortoises, nearly all the branches are aquatic. Today\u2019s land tortoises constitute a single branch, deeply nested among branches consisting of aquatic turtles. This suggests that modern land tortoises have not stayed on land continuously since the time of P. quenstedti and P. talampayensis. Rather, their ancestors were among those who went back to the water, and they then re-emerged back onto the land in (relatively) more recent times."
          },
          {
            label: "F",
            text: "Tortoises therefore represent a remarkable double return. In common with all mammals, reptiles and birds, their remote ancestors were marine fish and before that various more or less worm-like creatures stretching back, still in the sea, to the primeval bacteria. Later ancestors lived on land and stayed there for a very large number of generations. Later ancestors still evolved back into the water and became sea turtles. And finally they returned yet again to the land as tortoises, some of which now live in the driest of deserts."
          }
        ],
        questions: [
          {
            id: "t3-q27",
            number: 27,
            type: "sentence-completion",
            instructions: "Answer the questions below. Choose NO MORE THAN TWO WORDS from the passage for each answer.",
            text: "What had to transfer from sea to land before any animals could migrate?",
            correctAnswer: "plants",
            explanation: "Paragraph A states: 'without whose prior invasion of the land none of the other migrations could have happened.'",
            passageAnchor: "Paragraph A"
          },
          {
            id: "t3-q28",
            number: 28,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Which processes are mentioned as those in which animals had to make big changes as they moved onto land?",
            correctAnswer: "breathing and reproduction",
            explanation: "Paragraph B explains: 'involved a major redesign of every aspect of life, including breathing and reproduction.'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q29",
            number: 29,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Which physical feature, possessed by their marine ancestors, do whales lack?",
            correctAnswer: "gills",
            explanation: "Paragraph B notes: 'having never developed anything equivalent to the gills of their earlier marine incarnation.'",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q30",
            number: 30,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Which modern animals might fossil ichthyosaurs have resembled?",
            correctAnswer: "dolphins",
            explanation: "Paragraph C states: 'The fossils look like dolphins and they surely lived like dolphins...'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t3-q31",
            number: 31,
            type: "true-false-not-given",
            instructions: "Do the following statements agree with the information in Reading Passage 3? Write TRUE, FALSE, or NOT GIVEN.",
            text: "Turtles were among the first group of animals to migrate back to the sea.",
            correctAnswer: "NOT GIVEN",
            explanation: "Paragraph B mentions turtles went back a very long time ago, but does not say they were among the first.",
            passageAnchor: "Paragraph B"
          },
          {
            id: "t3-q32",
            number: 32,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "It is always difficult to determine where an animal lived when its fossilized remains are incomplete.",
            correctAnswer: "FALSE",
            explanation: "Paragraph C contradicts this directly: 'Sometimes it\u2019s obvious.'",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t3-q33",
            number: 33,
            type: "true-false-not-given",
            instructions: "Write TRUE, FALSE, or NOT GIVEN.",
            text: "The habitat of ichthyosaurs can be determined by the appearance of their fossilized remains.",
            correctAnswer: "TRUE",
            explanation: "Paragraph C explains their fins and streamlined bodies looking like dolphins showed they lived in water.",
            passageAnchor: "Paragraph C"
          },
          {
            id: "t3-q34",
            number: 34,
            type: "sentence-completion",
            instructions: "Complete the flow-chart below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage.",
            text: "Step 1: In 71 species of living turtles and tortoises, forelimb bones were examined and a total of _______ were obtained.",
            correctAnswer: "3 measurements",
            explanation: "Paragraph D states: 'obtained three measurements in these particular bones...'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q35",
            number: 35,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Step 2: The data was plotted on a _______ to compare the species.",
            correctAnswer: "triangular graph",
            explanation: "Paragraph D notes they used a kind of 'triangular graph' paper.",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q36",
            number: 36,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Step 2 Outcome: Land tortoises formed a dense _______ of points towards the upper part.",
            correctAnswer: "cluster",
            explanation: "Paragraph D: 'All the land tortoise species formed a tight cluster of points in the upper part...'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q37",
            number: 37,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Step 3: Comparative data was collected from some living _______ species.",
            correctAnswer: "amphibious",
            explanation: "Paragraph D states: 'these amphibious species show up on the triangular graph...'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q38",
            number: 38,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Step 3 Outcome: Points for these amphibious species were positioned about _______ up between land tortoises and sea turtles.",
            correctAnswer: "half way",
            explanation: "Paragraph D states: 'approximately half way between the wet cluster of sea turtles and the dry cluster of land tortoises.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q39",
            number: 39,
            type: "sentence-completion",
            instructions: "Choose NO MORE THAN TWO WORDS from the passage.",
            text: "Step 4: Examination of P. quenstedti and P. talampayensis indicated both ancient creatures were _______.",
            correctAnswer: "dry-land tortoises",
            explanation: "Paragraph D concludes: 'Both these fossils were dry-land tortoises.'",
            passageAnchor: "Paragraph D"
          },
          {
            id: "t3-q40",
            number: 40,
            type: "multiple-choice",
            instructions: "Choose the correct letter A, B, C or D.",
            text: "According to the writer, the most significant thing about tortoises is that:",
            options: ["A They are able to adapt to life in extremely dry environments.", "B Their original life form was a kind of primeval bacteria.", "C They have so much in common with sea turtles.", "D They have made the transition from sea to land more than once."],
            correctAnswer: "D",
            explanation: "Paragraph F states: 'Tortoises therefore represent a remarkable double return... returned yet again to the land as tortoises.'",
            passageAnchor: "Paragraph F"
          }
        ]
      }
    ]
  }
];
