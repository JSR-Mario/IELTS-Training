import type { WritingPrompt } from '../types/writing';

export const TASK_1_PROMPTS: WritingPrompt[] = [
  {
    id: 't1-01',
    type: 'task1',
    title: 'Electric vs Petrol Vehicle Adoption (Bar Chart)',
    category: 'Bar Chart',
    prompt: `The chart below shows the percentage of households across five European nations that purchased electric vehicles (EVs) compared to traditional petrol cars in 2024.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Bar chart comparing EV and Petrol market shares in Norway (78% EV, 22% Petrol), Germany (35% EV, 65% Petrol), UK (32% EV, 68% Petrol), France (28% EV, 72% Petrol), and Spain (14% EV, 86% Petrol) in 2024.',
    chartSvg: `
      <svg viewBox="0 0 600 320" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Vehicle Adoption in 2024 (% Market Share)</text>
        <line x1="70" y1="40" x2="70" y2="250" stroke="#64748b" stroke-width="2"/>
        <line x1="70" y1="250" x2="560" y2="250" stroke="#64748b" stroke-width="2"/>
        <text x="60" y="255" fill="#94a3b8" text-anchor="end" font-size="11">0%</text>
        <text x="60" y="205" fill="#94a3b8" text-anchor="end" font-size="11">25%</text>
        <text x="60" y="155" fill="#94a3b8" text-anchor="end" font-size="11">50%</text>
        <text x="60" y="105" fill="#94a3b8" text-anchor="end" font-size="11">75%</text>
        <text x="60" y="55" fill="#94a3b8" text-anchor="end" font-size="11">100%</text>
        <line x1="70" y1="200" x2="560" y2="200" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="150" x2="560" y2="150" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="100" x2="560" y2="100" stroke="#334155" stroke-dasharray="4"/>
        <line x1="70" y1="50" x2="560" y2="50" stroke="#334155" stroke-dasharray="4"/>
        <rect x="95" y="94" width="30" height="156" fill="#38bdf8" rx="3"/>
        <rect x="130" y="206" width="30" height="44" fill="#f87171" rx="3"/>
        <text x="127" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Norway</text>
        <rect x="190" y="180" width="30" height="70" fill="#38bdf8" rx="3"/>
        <rect x="225" y="120" width="30" height="130" fill="#f87171" rx="3"/>
        <text x="222" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Germany</text>
        <rect x="285" y="186" width="30" height="64" fill="#38bdf8" rx="3"/>
        <rect x="320" y="114" width="30" height="136" fill="#f87171" rx="3"/>
        <text x="317" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">UK</text>
        <rect x="380" y="194" width="30" height="56" fill="#38bdf8" rx="3"/>
        <rect x="415" y="106" width="30" height="144" fill="#f87171" rx="3"/>
        <text x="412" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">France</text>
        <rect x="475" y="222" width="30" height="28" fill="#38bdf8" rx="3"/>
        <rect x="510" y="78" width="30" height="172" fill="#f87171" rx="3"/>
        <text x="507" y="270" fill="#cbd5e1" text-anchor="middle" font-size="12">Spain</text>
        <rect x="200" y="295" width="14" height="14" fill="#38bdf8" rx="2"/>
        <text x="222" y="306" fill="#cbd5e1" font-size="12">Electric Vehicles (EV)</text>
        <rect x="370" y="295" width="14" height="14" fill="#f87171" rx="2"/>
        <text x="392" y="306" fill="#cbd5e1" font-size="12">Petrol Vehicles</text>
      </svg>
    `
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
    chartDescription: 'Line graph showing Beef dropping from 220g to 110g, Lamb dropping from 150g to 60g, Chicken rising from 140g to 250g, and Fish remaining steady between 50g and 55g.',
    chartSvg: `
      <svg viewBox="0 0 600 320" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Meat & Fish Consumption (grams per person per week)</text>
        <line x1="60" y1="40" x2="60" y2="240" stroke="#64748b" stroke-width="2"/>
        <line x1="60" y1="240" x2="560" y2="240" stroke="#64748b" stroke-width="2"/>
        <text x="50" y="245" fill="#94a3b8" text-anchor="end" font-size="11">0g</text>
        <text x="50" y="195" fill="#94a3b8" text-anchor="end" font-size="11">100g</text>
        <text x="50" y="145" fill="#94a3b8" text-anchor="end" font-size="11">200g</text>
        <text x="50" y="95" fill="#94a3b8" text-anchor="end" font-size="11">300g</text>
        <text x="70" y="260" fill="#cbd5e1" font-size="11">1980</text>
        <text x="185" y="260" fill="#cbd5e1" font-size="11">1990</text>
        <text x="300" y="260" fill="#cbd5e1" font-size="11">2000</text>
        <text x="415" y="260" fill="#cbd5e1" font-size="11">2010</text>
        <text x="530" y="260" fill="#cbd5e1" font-size="11">2020</text>
        <polyline fill="none" stroke="#facc15" stroke-width="3" points="70,170 185,155 300,135 415,122 530,115" />
        <polyline fill="none" stroke="#f87171" stroke-width="3" points="70,130 185,140 300,160 415,175 530,185" />
        <polyline fill="none" stroke="#c084fc" stroke-width="3" points="70,165 185,175 300,190 415,202 530,210" />
        <polyline fill="none" stroke="#2dd4bf" stroke-width="3" points="70,215 185,214 300,216 415,214 530,213" />
        <line x1="80" y1="290" x2="110" y2="290" stroke="#facc15" stroke-width="3"/>
        <text x="115" y="294" fill="#cbd5e1" font-size="11">Chicken</text>
        <line x1="200" y1="290" x2="230" y2="290" stroke="#f87171" stroke-width="3"/>
        <text x="235" y="294" fill="#cbd5e1" font-size="11">Beef</text>
        <line x1="320" y1="290" x2="350" y2="290" stroke="#c084fc" stroke-width="3"/>
        <text x="355" y="294" fill="#cbd5e1" font-size="11">Lamb</text>
        <line x1="440" y1="290" x2="470" y2="290" stroke="#2dd4bf" stroke-width="3"/>
        <text x="475" y="294" fill="#cbd5e1" font-size="11">Fish</text>
      </svg>
    `
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
    chartDescription: 'Five-stage industrial flowchart: 1. Intake of raw ocean water -> 2. Pre-treatment filtration -> 3. High-pressure Reverse Osmosis membrane separation -> 4. Post-treatment mineralisation -> 5. Municipal distribution.',
    chartSvg: `
      <svg viewBox="0 0 620 220" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="310" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Seawater Reverse Osmosis Desalination Process</text>
        <rect x="15" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="65" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 1</text>
        <text x="65" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Ocean Intake</text>
        <text x="65" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Submerged Pipe</text>
        <line x1="120" y1="97" x2="135" y2="97" stroke="#64748b" stroke-width="2"/>
        <rect x="140" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="190" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 2</text>
        <text x="190" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Pre-filtration</text>
        <text x="190" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Sand & Cartridge</text>
        <line x1="245" y1="97" x2="260" y2="97" stroke="#64748b" stroke-width="2"/>
        <rect x="265" y="45" width="115" height="105" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="6"/>
        <text x="322" y="70" fill="#c084fc" text-anchor="middle" font-size="11" font-weight="bold">Step 3 (RO)</text>
        <text x="322" y="90" fill="#e2e8f0" text-anchor="middle" font-size="10">High Pressure</text>
        <text x="322" y="105" fill="#e2e8f0" text-anchor="middle" font-size="10">Membranes</text>
        <text x="322" y="130" fill="#f87171" text-anchor="middle" font-size="9">Brine Rejected</text>
        <line x1="385" y1="97" x2="400" y2="97" stroke="#64748b" stroke-width="2"/>
        <rect x="405" y="55" width="100" height="85" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" rx="6"/>
        <text x="455" y="80" fill="#38bdf8" text-anchor="middle" font-size="11" font-weight="bold">Step 4</text>
        <text x="455" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Post-Treatment</text>
        <text x="455" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Minerals & Cl2</text>
        <line x1="510" y1="97" x2="525" y2="97" stroke="#64748b" stroke-width="2"/>
        <rect x="530" y="55" width="80" height="85" fill="#1e293b" stroke="#34d399" stroke-width="1.5" rx="6"/>
        <text x="570" y="80" fill="#34d399" text-anchor="middle" font-size="11" font-weight="bold">Step 5</text>
        <text x="570" y="100" fill="#e2e8f0" text-anchor="middle" font-size="10">Municipal</text>
        <text x="570" y="115" fill="#94a3b8" text-anchor="middle" font-size="9">Distribution</text>
      </svg>
    `
  },
  {
    id: 't1-04',
    type: 'task1',
    title: 'Household Energy Consumption (Pie Charts)',
    category: 'Pie Chart',
    prompt: `The pie charts below compare the proportion of energy used by residential households in an average Australian state in 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Two pie charts comparing energy usage: Heating/Cooling dropped from 42% to 31%, Water Heating remained at 25%, Appliances rose from 18% to 32%, Lighting fell from 10% to 5%, and Refrigeration shifted from 5% to 7%.',
    chartSvg: `
      <svg viewBox="0 0 600 260" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="25" fill="#f1f5f9" text-anchor="middle" font-size="14" font-weight="bold">Australian Household Energy Breakdown (2000 vs 2020)</text>
        <circle cx="160" cy="130" r="70" fill="#38bdf8" />
        <path d="M 160 130 L 160 60 A 70 70 0 0 1 228 150 Z" fill="#f87171" />
        <path d="M 160 130 L 228 150 A 70 70 0 0 1 140 198 Z" fill="#fbbf24" />
        <path d="M 160 130 L 140 198 A 70 70 0 0 1 100 160 Z" fill="#34d399" />
        <text x="160" y="225" fill="#cbd5e1" text-anchor="middle" font-size="12" font-weight="bold">Year 2000</text>
        <circle cx="440" cy="130" r="70" fill="#38bdf8" />
        <path d="M 440 130 L 440 60 A 70 70 0 0 1 505 155 Z" fill="#fbbf24" />
        <path d="M 440 130 L 505 155 A 70 70 0 0 1 425 198 Z" fill="#f87171" />
        <path d="M 440 130 L 425 198 A 70 70 0 0 1 385 160 Z" fill="#a78bfa" />
        <text x="440" y="225" fill="#cbd5e1" text-anchor="middle" font-size="12" font-weight="bold">Year 2020</text>
        <rect x="70" y="242" width="10" height="10" fill="#38bdf8" />
        <text x="85" y="251" fill="#94a3b8" font-size="10">Heating/Cooling</text>
        <rect x="180" y="242" width="10" height="10" fill="#f87171" />
        <text x="195" y="251" fill="#94a3b8" font-size="10">Water Heating</text>
        <rect x="290" y="242" width="10" height="10" fill="#fbbf24" />
        <text x="305" y="251" fill="#94a3b8" font-size="10">Appliances</text>
        <rect x="380" y="242" width="10" height="10" fill="#34d399" />
        <text x="395" y="251" fill="#94a3b8" font-size="10">Lighting</text>
        <rect x="460" y="242" width="10" height="10" fill="#a78bfa" />
        <text x="475" y="251" fill="#94a3b8" font-size="10">Other</text>
      </svg>
    `
  },
  {
    id: 't1-05',
    type: 'task1',
    title: 'University Library Services Usage (Table)',
    category: 'Table',
    prompt: `The table below displays the annual usage statistics for four key library services at an international university between 2010 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Data Table: Physical Book Loans: 2010 (120,000), 2015 (85,000), 2020 (42,000). Electronic Book Downloads: 2010 (15,000), 2015 (68,000), 2020 (175,000). Study Room Reservations: 2010 (8,200), 2015 (14,100), 2020 (21,500). Physical Information Desk Inquiries: 2010 (24,000), 2015 (18,500), 2020 (9,800).',
    chartSvg: `
      <svg viewBox="0 0 600 240" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="24" fill="#f1f5f9" text-anchor="middle" font-size="13" font-weight="bold">Annual Library Service Usage (2010 - 2020)</text>
        <rect x="30" y="45" width="540" height="30" fill="#1e293b" rx="4"/>
        <text x="50" y="65" fill="#cbd5e1" font-weight="bold" font-size="11">Library Service</text>
        <text x="260" y="65" fill="#cbd5e1" font-weight="bold" font-size="11">2010</text>
        <text x="370" y="65" fill="#cbd5e1" font-weight="bold" font-size="11">2015</text>
        <text x="480" y="65" fill="#cbd5e1" font-weight="bold" font-size="11">2020</text>
        <line x1="30" y1="80" x2="570" y2="80" stroke="#334155"/>
        <text x="50" y="105" fill="#94a3b8" font-size="11">Physical Book Loans</text>
        <text x="260" y="105" fill="#f87171" font-size="11">120,000</text>
        <text x="370" y="105" fill="#f87171" font-size="11">85,000</text>
        <text x="480" y="105" fill="#f87171" font-size="11">42,000</text>
        <text x="50" y="140" fill="#94a3b8" font-size="11">E-Book Downloads</text>
        <text x="260" y="140" fill="#38bdf8" font-size="11">15,000</text>
        <text x="370" y="140" fill="#38bdf8" font-size="11">68,000</text>
        <text x="480" y="140" fill="#38bdf8" font-size="11">175,000</text>
        <text x="50" y="175" fill="#94a3b8" font-size="11">Study Room Bookings</text>
        <text x="260" y="175" fill="#34d399" font-size="11">8,200</text>
        <text x="370" y="175" fill="#34d399" font-size="11">14,100</text>
        <text x="480" y="175" fill="#34d399" font-size="11">21,500</text>
        <text x="50" y="210" fill="#94a3b8" font-size="11">In-Person Inquiries</text>
        <text x="260" y="210" fill="#fbbf24" font-size="11">24,000</text>
        <text x="370" y="210" fill="#fbbf24" font-size="11">18,500</text>
        <text x="480" y="210" fill="#fbbf24" font-size="11">9,800</text>
      </svg>
    `
  },
  {
    id: 't1-06',
    type: 'task1',
    title: 'Island Transformation for Tourism (Map Comparison)',
    category: 'Map',
    prompt: `The two maps below show an uninhabited coastal island before and after the construction of tourist resort facilities.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Map 1: Natural island with palm trees, open beach to the west, central woodland, and empty coastline. Map 2: Accommodations added with footpaths, pier built in south for ferry access, central reception building, restaurant, and swimming area on beach.',
    chartSvg: `
      <svg viewBox="0 0 600 240" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="150" y="22" fill="#cbd5e1" font-weight="bold" font-size="12" text-anchor="middle">Before Tourism Development</text>
        <rect x="30" y="40" width="240" height="170" rx="40" fill="#0f172a" stroke="#334155" stroke-dasharray="3"/>
        <path d="M 60 70 Q 150 50 240 80 Q 250 170 210 190 Q 90 200 60 70 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="75" y="130" fill="#38bdf8" font-size="10">Beach</text>
        <circle cx="150" cy="120" r="14" fill="#065f46"/>
        <text x="150" y="123" fill="#6ee7b7" font-size="8" text-anchor="middle">Trees</text>
        <text x="450" y="22" fill="#cbd5e1" font-weight="bold" font-size="12" text-anchor="middle">After Resort Construction</text>
        <rect x="330" y="40" width="240" height="170" rx="40" fill="#0f172a" stroke="#334155" stroke-dasharray="3"/>
        <path d="M 360 70 Q 450 50 540 80 Q 550 170 510 190 Q 390 200 360 70 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <rect x="435" y="105" width="25" height="18" fill="#a855f7" rx="2"/>
        <text x="447" y="117" fill="#ffffff" font-size="7" text-anchor="middle">Hotel</text>
        <rect x="475" y="105" width="22" height="15" fill="#f59e0b" rx="2"/>
        <text x="486" y="115" fill="#ffffff" font-size="6" text-anchor="middle">Rest.</text>
        <line x1="447" y1="175" x2="447" y2="200" stroke="#f87171" stroke-width="4"/>
        <text x="447" y="215" fill="#f87171" font-size="9" text-anchor="middle">Pier / Jetty</text>
      </svg>
    `
  },
  {
    id: 't1-07',
    type: 'task1',
    title: 'Recycled Paper Manufacturing (Process)',
    category: 'Process Diagram',
    prompt: `The flow chart below illustrates how used paper is collected, treated, and recycled into new commercial paper products.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Process steps: 1. Collection & sorting -> 2. Pulping with water and chemicals -> 3. De-inking filtration -> 4. Bleaching & slurry refinement -> 5. Rolling, pressing, and drying into finished paper rolls.',
    chartSvg: `
      <svg viewBox="0 0 600 200" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="22" fill="#f1f5f9" text-anchor="middle" font-size="13" font-weight="bold">Paper Recycling Production Cycle</text>
        <rect x="20" y="55" width="90" height="70" fill="#1e293b" stroke="#38bdf8" rx="6"/>
        <text x="65" y="85" fill="#38bdf8" text-anchor="middle" font-size="10" font-weight="bold">1. Collection</text>
        <text x="65" y="102" fill="#94a3b8" text-anchor="middle" font-size="9">Waste Paper</text>
        <line x1="115" y1="90" x2="135" y2="90" stroke="#64748b" stroke-width="2"/>
        <rect x="140" y="55" width="95" height="70" fill="#1e293b" stroke="#38bdf8" rx="6"/>
        <text x="187" y="85" fill="#38bdf8" text-anchor="middle" font-size="10" font-weight="bold">2. Pulping</text>
        <text x="187" y="102" fill="#94a3b8" text-anchor="middle" font-size="9">Water + Chem</text>
        <line x1="240" y1="90" x2="260" y2="90" stroke="#64748b" stroke-width="2"/>
        <rect x="265" y="55" width="95" height="70" fill="#1e293b" stroke="#c084fc" rx="6"/>
        <text x="312" y="85" fill="#c084fc" text-anchor="middle" font-size="10" font-weight="bold">3. De-inking</text>
        <text x="312" y="102" fill="#94a3b8" text-anchor="middle" font-size="9">Ink Removed</text>
        <line x1="365" y1="90" x2="385" y2="90" stroke="#64748b" stroke-width="2"/>
        <rect x="390" y="55" width="95" height="70" fill="#1e293b" stroke="#38bdf8" rx="6"/>
        <text x="437" y="85" fill="#38bdf8" text-anchor="middle" font-size="10" font-weight="bold">4. Refining</text>
        <text x="437" y="102" fill="#94a3b8" text-anchor="middle" font-size="9">Bleaching</text>
        <line x1="490" y1="90" x2="510" y2="90" stroke="#64748b" stroke-width="2"/>
        <rect x="515" y="55" width="70" height="70" fill="#1e293b" stroke="#34d399" rx="6"/>
        <text x="550" y="85" fill="#34d399" text-anchor="middle" font-size="10" font-weight="bold">5. Pressing</text>
        <text x="550" y="102" fill="#94a3b8" text-anchor="middle" font-size="9">New Paper</text>
      </svg>
    `
  },
  {
    id: 't1-08',
    type: 'task1',
    title: 'Global Renewable Electricity Share (Line Graph)',
    category: 'Line Graph',
    prompt: `The graph below shows the percentage of electricity generated by three renewable energy sources (Wind, Solar, and Hydroelectric) in a group of industrialized countries between 2005 and 2025.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

Write at least 150 words.`,
    minWords: 150,
    timeLimitMinutes: 20,
    chartDescription: 'Line graph showing Hydro remaining steady between 16% and 18%, Wind surging from 3% to 24%, and Solar growing exponentially from under 1% to 28% by 2025.',
    chartSvg: `
      <svg viewBox="0 0 600 240" class="w-full h-auto bg-slate-900/40 p-4 rounded-xl border border-slate-700">
        <text x="300" y="22" fill="#f1f5f9" text-anchor="middle" font-size="13" font-weight="bold">Renewable Electricity Generation Share (2005 - 2025)</text>
        <line x1="50" y1="40" x2="50" y2="190" stroke="#64748b" stroke-width="2"/>
        <line x1="50" y1="190" x2="560" y2="190" stroke="#64748b" stroke-width="2"/>
        <text x="40" y="195" fill="#94a3b8" font-size="10" text-anchor="end">0%</text>
        <text x="40" y="145" fill="#94a3b8" font-size="10" text-anchor="end">15%</text>
        <text x="40" y="95" fill="#94a3b8" font-size="10" text-anchor="end">30%</text>
        <polyline fill="none" stroke="#fbbf24" stroke-width="3" points="60,186 180,180 300,160 420,110 540,65"/>
        <polyline fill="none" stroke="#38bdf8" stroke-width="3" points="60,175 180,165 300,140 420,105 540,80"/>
        <polyline fill="none" stroke="#34d399" stroke-width="3" points="60,140 180,142 300,138 420,140 540,137"/>
        <text x="60" y="210" fill="#cbd5e1" font-size="10">2005</text>
        <text x="180" y="210" fill="#cbd5e1" font-size="10">2010</text>
        <text x="300" y="210" fill="#cbd5e1" font-size="10">2015</text>
        <text x="420" y="210" fill="#cbd5e1" font-size="10">2020</text>
        <text x="540" y="210" fill="#cbd5e1" font-size="10">2025</text>
      </svg>
    `
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
    timeLimitMinutes: 40
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
    timeLimitMinutes: 40
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
    timeLimitMinutes: 40
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
    timeLimitMinutes: 40
  },
  {
    id: 't2-05',
    type: 'task2',
    title: 'Environmental Responsibility: Individuals vs Governments',
    category: 'Discussion (Both Views)',
    prompt: `Some people argue that environmental damage can only be solved if individuals change their daily habits and consumption patterns. Others believe that only stringent government policies and international regulations can protect the environment.

Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-06',
    type: 'task2',
    title: 'Taxing Unhealthy Foods to Combat Obesity',
    category: 'Opinion (Agree / Disagree)',
    prompt: `In many countries, health authorities are proposing heavy taxes on sugary drinks and fast foods in order to discourage unhealthy diets and combat rising obesity rates.

To what extent do you agree or disagree with this policy?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-07',
    type: 'task2',
    title: 'Space Exploration Funding vs Domestic Problems',
    category: 'Opinion (Agree / Disagree)',
    prompt: `Governments spend billions of dollars every year on space exploration programmes. Some people believe that this expenditure cannot be justified when so many urgent problems, such as poverty and climate change, exist on Earth.

To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-08',
    type: 'task2',
    title: 'Impacts of Mass Tourism on Historic Heritage',
    category: 'Problems & Solutions',
    prompt: `In many historic cities and fragile natural locations, international tourism is causing severe damage to cultural heritage and local communities.

What problems are associated with mass tourism in these areas, and what measures can be implemented by authorities to address them?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-09',
    type: 'task2',
    title: 'Smartphones in Primary Education',
    category: 'Advantages & Disadvantages',
    prompt: `An increasing number of primary schools are integrating smartphones and digital tablets into daily classroom lessons.

Do the advantages of this practice outweigh the disadvantages?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-10',
    type: 'task2',
    title: 'Criminal Justice: Prison Sentences vs Rehabilitation',
    category: 'Discussion (Both Views)',
    prompt: `Some people believe that the best way to reduce crime is to enforce longer prison sentences. Others think that education, job training, and community rehabilitation are more effective solutions.

Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-11',
    type: 'task2',
    title: 'Preservation of Endangered Languages',
    category: 'Opinion (Agree / Disagree)',
    prompt: `Every year, dozens of regional and indigenous languages fall into disuse. Some believe that spending public funds to preserve minority languages is a waste of resources because a single global language would improve communication and trade.

To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  },
  {
    id: 't2-12',
    type: 'task2',
    title: 'Remote Working and Urban Transformation',
    category: 'Positive or Negative Development',
    prompt: `Due to advances in communications technology, more employees are choosing to work remotely from home rather than commute to central business offices.

Do you consider the shift toward telecommuting to be a positive or negative development for society?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.

Write at least 250 words.`,
    minWords: 250,
    timeLimitMinutes: 40
  }
];
