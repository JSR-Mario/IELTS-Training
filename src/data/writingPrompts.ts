import type { WritingPrompt } from '../types/writing';

export const TASK_1_PROMPTS: WritingPrompt[] = [
  {
    id: 't1-01',
    type: 'task1',
    title: 'Electric vs Petrol Vehicle Adoption (Bar Chart)',
    category: 'Bar Chart',
    prompt: `The chart below shows the percentage of households across five European nations that purchased electric vehicles (EVs) compared to traditional petrol cars between 2020 and 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Bar chart comparing EV and Petrol market shares in Norway (78% EV, 22% Petrol), Germany (35% EV, 65% Petrol), UK (32% EV, 68% Petrol), France (28% EV, 72% Petrol), and Spain (14% EV, 86% Petrol) by 2024.',
    chartSvg: `
      <svg viewBox="0 0 600 320" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Vehicle Adoption in 2024 (% Market Share)</text>
        <!-- Axes -->
        <line x1="70" y1="40" x2="70" y2="250" stroke="#64748b" stroke-width="2"/>
        <line x1="70" y1="250" x2="560" y2="250" stroke="#64748b" stroke-width="2"/>
        <!-- Y-Axis labels -->
        <text x="60" y="255" fill="#94a3b8" text-anchor="end" font-size="11">0%</text>
        <text x="60" y="205" fill="#94a3b8" text-anchor="end" font-size="11">25%</text>
        <text x="60" y="155" fill="#94a3b8" text-anchor="end" font-size="11">50%</text>
        <text x="60" y="105" fill="#94a3b8" text-anchor="end" font-size="11">75%</text>
        <text x="60" y="55" fill="#94a3b8" text-anchor="end" font-size="11">100%</text>
        <!-- Grid lines -->
        <line x1="70" y1="200" x2="560" y2="200" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="150" x2="560" y2="150" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="100" x2="560" y2="100" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="50" x2="560" y2="50" stroke="#334155" stroke-dasharray="4"/>

        <!-- Norway: EV 78%, Petrol 22% -->
        <rect x="95" y="94" width="30" height="156" fill="#38bdf8" rx="3"/>
        <rect x="130" y="206" width="30" height="44" fill="#f87171" rx="3"/>
        <text x="127" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Norway</text>

        <!-- Germany: EV 35%, Petrol 65% -->
        <rect x="190" y="180" width="30" height="70" fill="#38bdf8" rx="3"/>
        <rect x="225" y="120" width="30" height="130" fill="#f87171" rx="3"/>
        <text x="222" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Germany</text>

        <!-- UK: EV 32%, Petrol 68% -->
        <rect x="285" y="186" width="30" height="64" fill="#38bdf8" rx="3"/>
        <rect x="320" y="114" width="30" height="136" fill="#f87171" rx="3"/>
        <text x="317" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">UK</text>

        <!-- France: EV 28%, Petrol 72% -->
        <rect x="380" y="194" width="30" height="56" fill="#38bdf8" rx="3"/>
        <rect x="415" y="106" width="30" height="144" fill="#f87171" rx="3"/>
        <text x="412" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">France</text>

        <!-- Spain: EV 14%, Petrol 86% -->
        <rect x="475" y="222" width="30" height="28" fill="#38bdf8" rx="3"/>
        <rect x="510" y="78" width="30" height="172" fill="#f87171" rx="3"/>
        <text x="507" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Spain</text>

        <!-- Legend -->
        <rect x="200" y="295" width="14" height="14" fill="#38bdf8" rx="2"/>
        <text x="222" y="306" fill="#cbd5e1" font-size="12">Electric Vehicles (EV)</text>
        <rect x="370" y="295" width="14" height="14" fill="#f87171" rx="2"/>
        <text x="392" y="306" fill="#cbd5e1" font-size="12">Petrol Vehicles</text>
      </svg>
    `,
    tips: [
      'Structure: Introduction (paraphrase prompt) -> Overview (key overall trend without specific numbers) -> Body Paragraph 1 (Highest vs lowest EV) -> Body Paragraph 2 (Petrol comparisons).',
      'Never give opinions or reasons not shown on the graph.',
      'Use comparative language: "substantially higher", "dwarfed by", "in stark contrast to".'
    ]
  },
  {
    id: 't1-02',
    type: 'task1',
    title: 'Meat & Fish Consumption Trends (Line Graph)',
    category: 'Line Graph',
    prompt: `The line graph below shows the average weekly consumption of fish and three kinds of meat (beef, lamb, and chicken) per person in a European country between 1980 and 2020 (in grams).

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Line graph showing Beef dropping from 220g to 110g, Lamb dropping from 150g to 60g, Chicken rising from 140g to 250g (becoming #1), and Fish remaining steady between 50g and 55g.',
    chartSvg: `
      <svg viewBox="0 0 600 320" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Meat & Fish Consumption (grams per person per week)</text>
        <!-- Axes -->
        <line x1="60" y1="40" x2="60" y2="240" stroke="#64748b" stroke-width="2"/>
        <line x1="60" y1="240" x2="560" y2="240" stroke="#64748b" stroke-width="2"/>
        <!-- Y Axis -->
        <text x="50" y="245" fill="#94a3b8" text-anchor="end" font-size="11">0g</text>
        <text x="50" y="195" fill="#94a3b8" text-anchor="end" font-size="11">100g</text>
        <text x="50" y="145" fill="#94a3b8" text-anchor="end" font-size="11">200g</text>
        <text x="50" y="95" fill="#94a3b8" text-anchor="end" font-size="11">300g</text>
        <!-- X Axis labels -->
        <text x="70" y="260" fill="#cbd5e1" font-size="11">1980</text>
        <text x="185" y="260" fill="#cbd5e1" font-size="11">1990</text>
        <text x="300" y="260" fill="#cbd5e1" font-size="11">2000</text>
        <text x="415" y="260" fill="#cbd5e1" font-size="11">2010</text>
        <text x="530" y="260" fill="#cbd5e1" font-size="11">2020</text>
        <!-- Lines -->
        <!-- Chicken (Yellow): 140 -> 170 -> 210 -> 235 -> 250 -->
        <polyline fill="none" stroke="#facc15" stroke-width="3" points="70,170 185,155 300,135 415,122 530,115" />
        <!-- Beef (Red): 220 -> 200 -> 160 -> 130 -> 110 -->
        <polyline fill="none" stroke="#f87171" stroke-width="3" points="70,130 185,140 300,160 415,175 530,185" />
        <!-- Lamb (Purple): 150 -> 130 -> 100 -> 75 -> 60 -->
        <polyline fill="none" stroke="#c084fc" stroke-width="3" points="70,165 185,175 300,190 415,202 530,210" />
        <!-- Fish (Teal): 50 -> 52 -> 48 -> 51 -> 53 -->
        <polyline fill="none" stroke="#2dd4bf" stroke-width="3" points="70,215 185,214 300,216 415,214 530,213" />

        <!-- Legend -->
        <line x1="80" y1="290" x2="110" y2="290" stroke="#facc15" stroke-width="3"/>
        <text x="115" y="294" fill="#cbd5e1" font-size="11">Chicken</text>

        <line x1="200" y1="290" x2="230" y2="290" stroke="#f87171" stroke-width="3"/>
        <text x="235" y="294" fill="#cbd5e1" font-size="11">Beef</text>

        <line x1="320" y1="290" x2="350" y2="290" stroke="#c084fc" stroke-width="3"/>
        <text x="355" y="294" fill="#cbd5e1" font-size="11">Lamb</text>

        <line x1="440" y1="290" x2="470" y2="290" stroke="#2dd4bf" stroke-width="3"/>
        <text x="475" y="294" fill="#cbd5e1" font-size="11">Fish</text>
      </svg>
    `,
    tips: [
      'Highlight the dramatic rise in chicken consumption which overtook beef around 1995.',
      'Notice the stability of fish intake compared to the significant decline in red meats (beef and lamb).',
      'Use trend vocabulary: "overtook", "plummeted", "stabilised", "surpassed".'
    ]
  },
  {
    id: 't1-03',
    type: 'task1',
    title: 'Desalination Process (Flow Diagram)',
    category: 'Process Diagram',
    prompt: `The diagram below illustrates the stages involved in the desalination process to produce drinking water from seawater.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Five-stage industrial flowchart: 1. Intake of raw ocean water -> 2. Pre-treatment filtration (removes solids and algae) -> 3. High-pressure pump into Reverse Osmosis membrane (separates brine waste from fresh water) -> 4. Post-treatment mineralisation and disinfection -> 5. Distribution to municipal storage tanks.',
    chartSvg: `
      <svg viewBox="0 0 620 220" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="310" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Seawater Reverse Osmosis Desalination Process</text>
        
        <!-- Step 1 -->
        <rect x="15" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="65" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 1</text>
        <text x="65" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Ocean Intake</text>
        <text x="65" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Submerged Pipe</text>

        <!-- Arrow -->
        <line x1="120" y1="97" x2="135" y2="97" stroke="#64748b" stroke-width="2" marker-end="url(#arr)"/>

        <!-- Step 2 -->
        <rect x="140" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="190" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 2</text>
        <text x="190" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Pre-filtration</text>
        <text x="190" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Sand & Cartridge</text>

        <!-- Arrow -->
        <line x1="245" y1="97" x2="260" y2="97" stroke="#64748b" stroke-width="2"/>

        <!-- Step 3 -->
        <rect x="265" y="45" width="115" height="105" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="6"/>
        <text x="322" y="70" fill="#c084fc" text-anchor="middle" font-size="11" font-weight="bold">Step 3 (RO)</text>
        <text x="322" y="90" fill="#e2e8f0" text-anchor="middle" font-size="10">High Pressure</text>
        <text x="322" y="105" fill="#e2e8f0" text-anchor="middle" font-size="10">Membranes</text>
        <text x="322" y="130" fill="#f87171" text-anchor="middle" font-size="9">↓ Brine Rejected</text>

        <!-- Arrow -->
        <line x1="385" y1="97" x2="400" y2="97" stroke="#64748b" stroke-width="2"/>

        <!-- Step 4 -->
        <rect x="405" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="455" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 4</text>
        <text x="455" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Post-Treatment</text>
        <text x="455" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Minerals & Cl2</text>

        <!-- Arrow -->
        <line x1="510" y1="97" x2="525" y2="97" stroke="#64748b" stroke-width="2"/>

        <!-- Step 5 -->
        <rect x="530" y="55" width="80" height="85" fill="#1e293b" stroke="#34d399" stroke-width="1.5" rx="6"/>
        <text x="570" y="80" fill="#34d399" text-anchor="middle" font-size="11" font-weight="bold">Step 5</text>
        <text x="570" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Municipal</text>
        <text x="570" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Distribution</text>

        <text x="310" y="185" fill="#94a3b8" text-anchor="middle" font-size="11">Linear man-made cyclic process using high-pressure separation</text>
      </svg>
    `,
    tips: [
      'In process diagrams, always use the PASSIVE VOICE (e.g. "is extracted", "are separated", "is delivered").',
      'Use sequential signposts: "initially", "following this", "subsequently", "the culminating phase".',
      'Make sure to mention both outputs from Step 3: pure permeate water and concentrated brine waste.'
    ]
  }
];

export const TASK_2_PROMPTS: WritingPrompt[] = [
  {
    id: 't2-01',
    type: 'task2',
    title: 'Compulsory Community Service in High Schools',
    category: 'Opinion (Agree / Disagree)',
    prompt: `Some people believe that unpaid community service should be a compulsory part of high school programmes (for example, working for a charity, improving the neighbourhood, or teaching sports to younger children).

To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40,
    tips: [
      'State a clear thesis in your introduction (e.g. "I completely agree" or "While beneficial, making it mandatory is counterproductive").',
      'Each body paragraph must have a clear topic sentence, explanation, and concrete example.',
      'Maintain a consistent stance throughout the essay to secure Band 7+ in Task Response.'
    ]
  },
  {
    id: 't2-02',
    type: 'task2',
    title: 'University Education: Job Skills vs Pure Knowledge',
    category: 'Discussion (Both Views)',
    prompt: `Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer.

Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40,
    tips: [
      'You MUST discuss BOTH perspectives with balanced weighting before or while presenting your own view.',
      'View 1: Economic competitiveness, return on tuition investment, employability.',
      'View 2: Critical thinking, philosophical exploration, foundational academic research that drives unpredicted discoveries.',
      'Conclude with your nuanced opinion.'
    ]
  },
  {
    id: 't2-03',
    type: 'task2',
    title: 'Artificial Intelligence & Future of Employment',
    category: 'Positive or Negative Development',
    prompt: `With the rapid advancement of artificial intelligence and automation, many traditional professions and cognitive jobs are expected to be replaced by machines in the near future.

Do you consider this to be a positive or negative development?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40,
    tips: [
      'Clearly state whether you view the net outcome as predominantly positive, negative, or a balanced duality.',
      'Positive points: Enhanced productivity, liberation from tedious tasks, creation of novel tech industries.',
      'Negative points: Wealth disparity, structural unemployment, socio-economic alienation of displaced workers.',
      'Use high-level collocations: "cognitive automation", "structural displacement", "economic paradigm shift".'
    ]
  },
  {
    id: 't2-04',
    type: 'task2',
    title: 'High-Rise Towers in Urban Areas',
    category: 'Advantages & Disadvantages',
    prompt: `In many major metropolitan cities worldwide, the construction of tall high-rise residential and commercial towers is increasing rapidly.

Do the advantages of this trend outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40,
    tips: [
      'Carefully evaluate whether advantages OUTWEIGH disadvantages—explicitly declare which side is greater.',
      'Advantages: Mitigating urban sprawl, accommodating growing populations within transport hubs, energy efficiency.',
      'Disadvantages: Loss of historic skyline, pressure on public utilities, psychological disconnection from street life.',
      'Keep your tone objective and formal.'
    ]
  }
];
