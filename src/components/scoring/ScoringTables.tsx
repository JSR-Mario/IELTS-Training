import { useState, type FC } from 'react';
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Calculator,
  Info,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Award
} from 'lucide-react';

type SectionTab = 'listening' | 'reading' | 'writing' | 'speaking' | 'calculator';

export const ScoringTables: FC = () => {
  const [activeSection, setActiveSection] = useState<SectionTab>('listening');

  // Overall calculator state
  const [calcListening, setCalcListening] = useState<number>(8.5);
  const [calcReading, setCalcReading] = useState<number>(8.0);
  const [calcWriting, setCalcWriting] = useState<number>(7.0);
  const [calcSpeaking, setCalcSpeaking] = useState<number>(7.5);

  // Cambridge official rounding formula:
  // Average = sum / 4
  // Fraction = average - floor(average)
  // If fraction < 0.25 -> round down to .0
  // If fraction >= 0.25 and < 0.75 -> round to .5
  // If fraction >= 0.75 -> round up to next whole band
  const rawAverage = (calcListening + calcReading + calcWriting + calcSpeaking) / 4;
  const calculateOverallBand = (avg: number): number => {
    const floorVal = Math.floor(avg);
    const fraction = avg - floorVal;
    if (fraction < 0.25) {
      return floorVal;
    } else if (fraction < 0.75) {
      return floorVal + 0.5;
    } else {
      return floorVal + 1.0;
    }
  };
  const overallBand = calculateOverallBand(rawAverage);

  const bandOptions = [9.0, 8.5, 8.0, 7.5, 7.0, 6.5, 6.0, 5.5, 5.0, 4.5, 4.0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-indigo-400" />
            <span>Baremo Oficial de Cambridge IELTS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Tablas de Calificación y Criterios Oficiales
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
            Consulta la conversión exacta de aciertos a Band Score (1.0 a 9.0), los descriptores de evaluación de Writing y Speaking, y calcula tu promedio general.
          </p>
        </div>

        {/* Quick overall preview badge */}
        <div className="bg-slate-800/90 border border-slate-700 px-5 py-3.5 rounded-2xl shrink-0 flex items-center gap-3">
          <Award className="w-8 h-8 text-amber-400" />
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Tu Simulación General</span>
            <span className="text-xl font-mono font-bold text-white">Banda {overallBand.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs for Sections */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveSection('listening')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeSection === 'listening'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Headphones className="w-4 h-4" />
          <span>Listening (0-40)</span>
        </button>

        <button
          onClick={() => setActiveSection('reading')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeSection === 'reading'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Reading Academic (0-40)</span>
        </button>

        <button
          onClick={() => setActiveSection('writing')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeSection === 'writing'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <PenTool className="w-4 h-4" />
          <span>Writing (Criterios y Ponderación)</span>
        </button>

        <button
          onClick={() => setActiveSection('speaking')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeSection === 'speaking'
              ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Mic className="w-4 h-4" />
          <span>Speaking (4 Criterios)</span>
        </button>

        <button
          onClick={() => setActiveSection('calculator')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeSection === 'calculator'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Calculadora Overall Band</span>
        </button>
      </div>

      {/* Content Section 1: Listening */}
      {activeSection === 'listening' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Tabla de Conversión IELTS Listening</h3>
                  <p className="text-xs text-slate-500">Mismo baremo para Academic y General Training (40 preguntas totales)</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 font-bold text-xs border border-sky-100">
                  40 Preguntas
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 uppercase font-semibold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Aciertos (Raw Score)</th>
                      <th className="py-3 px-4">Band Score</th>
                      <th className="py-3 px-4">Nivel de Competencia</th>
                      <th className="py-3 px-4 text-right">Margen de Error Máximo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr className="bg-emerald-50/40 font-bold">
                      <td className="py-3 px-4 font-mono text-emerald-900">39 – 40</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">9.0</span></td>
                      <td className="py-3 px-4 text-emerald-800">Usuario Experto</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 1 fallo</td>
                    </tr>
                    <tr className="bg-sky-50/30 font-semibold">
                      <td className="py-3 px-4 font-mono text-sky-900">37 – 38</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold">8.5</span></td>
                      <td className="py-3 px-4 text-sky-800">Muy Competente Superior</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 3 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">35 – 36</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">8.0</span></td>
                      <td className="py-3 px-4">Muy Competente</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 5 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">32 – 34</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-700 text-white font-bold">7.5</span></td>
                      <td className="py-3 px-4">Competente Avanzado</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 8 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">30 – 31</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-600 text-white font-bold">7.0</span></td>
                      <td className="py-3 px-4">Usuario Competente</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 10 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">26 – 29</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-500 text-white font-bold">6.5</span></td>
                      <td className="py-3 px-4">Competente Moderado</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 14 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">23 – 25</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-400 text-white font-bold">6.0</span></td>
                      <td className="py-3 px-4">Usuario Competente Básico</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 17 fallos</td>
                    </tr>
                    <tr className="text-slate-500">
                      <td className="py-3 px-4 font-mono">18 – 22</td>
                      <td className="py-3 px-4 font-bold">5.5</td>
                      <td className="py-3 px-4">Usuario Modesto</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 22 fallos</td>
                    </tr>
                    <tr className="text-slate-500">
                      <td className="py-3 px-4 font-mono">16 – 17</td>
                      <td className="py-3 px-4 font-bold">5.0</td>
                      <td className="py-3 px-4">Usuario Modesto Básico</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 24 fallos</td>
                    </tr>
                    <tr className="text-slate-400">
                      <td className="py-3 px-4 font-mono">13 – 15</td>
                      <td className="py-3 px-4 font-bold">4.5</td>
                      <td className="py-3 px-4">Usuario Limitado</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 27 fallos</td>
                    </tr>
                    <tr className="text-slate-400">
                      <td className="py-3 px-4 font-mono">10 – 12</td>
                      <td className="py-3 px-4 font-bold">4.0</td>
                      <td className="py-3 px-4">Usuario Muy Limitado</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 30 fallos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Rules & Warnings */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                  <Info className="w-4 h-4 text-indigo-600" />
                  <span>Reglas Oficiales de Calificación en Listening</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">1. Ortografía estricta (Spelling):</strong>
                    Cualquier palabra mal escrita (incluso por una sola letra faltante o duplicada) recibe 0 puntos. Se aceptan tanto variantes británicas como americanas (ej. colour/color).
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">2. Singular y Plural:</strong>
                    Si el audio menciona un sustantivo en plural (ej. "reservations") y escribes "reservation", se marca como incorrecto.
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">3. Palabras de más y preposiciones:</strong>
                    Si la instrucción pide "NO MORE THAN ONE WORD AND/OR A NUMBER" y escribes "25 of", excedes el límite y se marca incorrecto. Si la preposición ya estaba en la hoja, no debes repetirla.
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">4. Uso de Mayúsculas:</strong>
                    Puedes escribir tus respuestas completamente en MAYÚSCULAS o en minúsculas. Los examinadores de Cambridge no penalizan si escribes nombres propios en minúsculas en Listening o Reading.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 2: Reading Academic */}
      {activeSection === 'reading' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Table */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Tabla de Conversión IELTS Academic Reading</h3>
                  <p className="text-xs text-slate-500">Específica para el módulo Academic (textos científicos y divulgación)</p>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
                  40 Preguntas &bull; 3 Pasajes
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 text-slate-700 uppercase font-semibold text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Aciertos (Raw Score)</th>
                      <th className="py-3 px-4">Band Score</th>
                      <th className="py-3 px-4">Nivel Académico</th>
                      <th className="py-3 px-4 text-right">Tolerancia de Fallos</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr className="bg-emerald-50/40 font-bold">
                      <td className="py-3 px-4 font-mono text-emerald-900">39 – 40</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">9.0</span></td>
                      <td className="py-3 px-4 text-emerald-800">Comprensión Impecable</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 1 fallo</td>
                    </tr>
                    <tr className="bg-emerald-50/20 font-semibold">
                      <td className="py-3 px-4 font-mono text-emerald-800">37 – 38</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">8.5</span></td>
                      <td className="py-3 px-4 text-emerald-700">Lectura Crítica Superior</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 3 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">35 – 36</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-800 text-white font-bold">8.0</span></td>
                      <td className="py-3 px-4">Muy Competente</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 5 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">33 – 34</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-700 text-white font-bold">7.5</span></td>
                      <td className="py-3 px-4">Competente Avanzado</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 7 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">30 – 32</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-600 text-white font-bold">7.0</span></td>
                      <td className="py-3 px-4">Usuario Competente</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 10 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">27 – 29</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-500 text-white font-bold">6.5</span></td>
                      <td className="py-3 px-4">Competente Moderado</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 13 fallos</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono font-semibold">23 – 26</td>
                      <td className="py-3 px-4"><span className="px-2 py-0.5 rounded bg-slate-400 text-white font-bold">6.0</span></td>
                      <td className="py-3 px-4">Competente Básico</td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">Máx. 17 fallos</td>
                    </tr>
                    <tr className="text-slate-500">
                      <td className="py-3 px-4 font-mono">19 – 22</td>
                      <td className="py-3 px-4 font-bold">5.5</td>
                      <td className="py-3 px-4">Usuario Modesto</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 21 fallos</td>
                    </tr>
                    <tr className="text-slate-500">
                      <td className="py-3 px-4 font-mono">15 – 18</td>
                      <td className="py-3 px-4 font-bold">5.0</td>
                      <td className="py-3 px-4">Usuario Modesto Básico</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 25 fallos</td>
                    </tr>
                    <tr className="text-slate-400">
                      <td className="py-3 px-4 font-mono">13 – 14</td>
                      <td className="py-3 px-4 font-bold">4.5</td>
                      <td className="py-3 px-4">Usuario Limitado</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 27 fallos</td>
                    </tr>
                    <tr className="text-slate-400">
                      <td className="py-3 px-4 font-mono">10 – 12</td>
                      <td className="py-3 px-4 font-bold">4.0</td>
                      <td className="py-3 px-4">Usuario Muy Limitado</td>
                      <td className="py-3 px-4 text-right font-mono">Máx. 30 fallos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reading Key Notes */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Diferencias Críticas en Reading</span>
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">Academic vs General Training:</strong>
                    En Academic se requieren menos aciertos para una Banda 7.0 (30 aciertos) que en General Training (donde se necesitan 34-35 aciertos), debido a la mayor complejidad sintáctica y léxica de los textos académicos.
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">TRUE/FALSE vs YES/NO:</strong>
                    - TRUE/FALSE/NOT GIVEN: Se basa en hechos factuales e información verificable en el texto.
                    - YES/NO/NOT GIVEN: Se basa en las opiniones, tesis o afirmaciones del autor.
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <strong className="text-slate-900 block mb-1">Abreviaturas aceptadas:</strong>
                    Se admiten las siglas `T`, `F`, `NG` o `Y`, `N`, `NG` en la hoja de respuestas sin penalización.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 3: Writing */}
      {activeSection === 'writing' && (
        <div className="space-y-6">
          {/* Weighting Banner */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">Ponderación Oficial de Writing</span>
              <h3 className="text-lg font-bold text-indigo-950 mt-0.5">Task 1 (33.3%) &bull; Task 2 (66.7%)</h3>
              <p className="text-xs text-indigo-800 mt-1">
                La tarea 2 (Ensayo) tiene el doble de valor que la tarea 1 (Reporte). Fórmula: <code className="bg-white/80 px-1.5 py-0.5 rounded font-mono font-bold text-indigo-900">Writing Band = (Task 1 + 2 * Task 2) / 3</code>.
              </p>
            </div>
            <div className="shrink-0 bg-white px-4 py-2 rounded-xl border border-indigo-200 text-center">
              <span className="text-[11px] uppercase font-bold text-slate-500 block">Ejemplo</span>
              <span className="text-xs font-mono font-bold text-indigo-950">T1: 6.5 + T2: 7.5 &rarr; <strong>7.0</strong></span>
            </div>
          </div>

          {/* 4 Assessment Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Criterion 1 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Criterio 1 &bull; 25%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">TA / TR</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Task Achievement (T1) / Task Response (T2)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evalúa si respondiste completamente a la consigna.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Task 1:</strong> Presentar una visión general clara (Overview), destacar tendencias principales y respaldar con datos precisos (mínimo 150 palabras).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Task 2:</strong> Abordar todas las partes de la pregunta, mantener una postura clara durante todo el ensayo y justificar ideas con argumentos (mínimo 250 palabras).</span>
                </li>
              </ul>
            </div>

            {/* Criterion 2 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Criterio 2 &bull; 25%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">CC</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Coherence and Cohesion</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evalúa la claridad del flujo de ideas y la estructura de párrafos.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Párrafos definidos:</strong> Cada párrafo debe desarrollar un tema central claro (topic sentence).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Conectores (Discourse markers):</strong> Uso variado y natural sin abusar ni memorizar fórmulas mecánicas.</span>
                </li>
              </ul>
            </div>

            {/* Criterion 3 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Criterio 3 &bull; 25%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">LR</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Lexical Resource</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evalúa el rango, precisión y propiedad del vocabulario académico.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Colocaciones académicas:</strong> Uso de frases naturales en inglés formal (ej. "underlying causes", "substantial increase").</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Ortografía y formación:</strong> Control de prefijos, sufijos y ortografía correcta sin errores recurrentes.</span>
                </li>
              </ul>
            </div>

            {/* Criterion 4 */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Criterio 4 &bull; 25%</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">GRA</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">Grammatical Range and Accuracy</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evalúa la variedad de estructuras oracionales y la tasa de error.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Estructuras complejas:</strong> Cláusulas subordinadas, condicionales mixtos, voz pasiva y participios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Puntuación y precisión:</strong> La mayoría de las oraciones deben estar completamente libres de faltas sintácticas.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Penalties callout */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-xs text-rose-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-rose-950">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Penalizaciones Automáticas Severas en Writing</span>
            </div>
            <p>
              - <strong>Menos de 150 / 250 palabras:</strong> Penalización directa en Task Achievement / Task Response.
            </p>
            <p>
              - <strong>Memorización evidente de plantillas:</strong> Párrafos completos calcados de internet son ignorados por el examinador y no se computan en el conteo de palabras.
            </p>
            <p>
              - <strong>Respuesta fuera de tema (Off-topic):</strong> Si no respondes exactamente a la consigna, la calificación máxima en Task Response se limita a Banda 4.0 o 5.0.
            </p>
          </div>
        </div>
      )}

      {/* Content Section 4: Speaking */}
      {activeSection === 'speaking' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Entrevista Oral (11-14 Minutos)</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Los 4 Criterios Oficiales de IELTS Speaking</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                La entrevista individual consta de Parte 1 (Preguntas personales cotidianas, 4-5 min), Parte 2 (Monólogo con tarjeta Cue Card, 3-4 min) y Parte 3 (Discusión abstracta y analítica, 4-5 min).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase text-violet-700 block mb-1">1. Fluency and Coherence (25%)</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Fluidez y Coherencia</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Capacidad de hablar a un ritmo natural sin pausas largas ni vacilaciones para buscar vocabulario. Conexión lógica entre oraciones usando marcadores discursivos variados.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase text-violet-700 block mb-1">2. Lexical Resource (25%)</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Recursos Léxicos</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Variedad léxica, empleo de expresiones idiomáticas y colocaciones naturales. Habilidad para parafrasear cuando no se recuerda un término específico.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase text-violet-700 block mb-1">3. Grammatical Range and Accuracy (25%)</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Rango Gramatical y Precisión</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Uso flexible de tiempos verbales (presente perfecto, condicionales, pasiva), construcción de oraciones complejas y ausencia de errores sistemáticos elementales.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold uppercase text-violet-700 block mb-1">4. Pronunciation (25%)</span>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Pronunciación</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Claridad de articulación, acentuación adecuada de palabras (stress) y oraciones (intonation), y división rítmica en grupos de sentido (chunking). El acento nativo no es necesario, pero sí la inteligibilidad inmediata.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section 5: Overall Band Calculator */}
      {activeSection === 'calculator' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Simulador de Puntaje Global</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Calculadora Oficial de IELTS Overall Band</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Selecciona la banda estimada para cada una de las 4 habilidades y comprueba cómo aplica la regla oficial de redondeo de Cambridge.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {/* Listening Selector */}
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200">
                <div className="flex items-center gap-2 mb-2 text-sky-900 font-bold text-xs">
                  <Headphones className="w-4 h-4 text-sky-600" />
                  <span>Listening</span>
                </div>
                <select
                  value={calcListening}
                  onChange={e => setCalcListening(parseFloat(e.target.value))}
                  className="w-full bg-white border border-sky-300 rounded-xl px-3 py-2 text-base font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                  {bandOptions.map(b => (
                    <option key={b} value={b}>Banda {b.toFixed(1)}</option>
                  ))}
                </select>
              </div>

              {/* Reading Selector */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold text-xs">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Reading</span>
                </div>
                <select
                  value={calcReading}
                  onChange={e => setCalcReading(parseFloat(e.target.value))}
                  className="w-full bg-white border border-emerald-300 rounded-xl px-3 py-2 text-base font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                >
                  {bandOptions.map(b => (
                    <option key={b} value={b}>Banda {b.toFixed(1)}</option>
                  ))}
                </select>
              </div>

              {/* Writing Selector */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200">
                <div className="flex items-center gap-2 mb-2 text-indigo-900 font-bold text-xs">
                  <PenTool className="w-4 h-4 text-indigo-600" />
                  <span>Writing</span>
                </div>
                <select
                  value={calcWriting}
                  onChange={e => setCalcWriting(parseFloat(e.target.value))}
                  className="w-full bg-white border border-indigo-300 rounded-xl px-3 py-2 text-base font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                >
                  {bandOptions.map(b => (
                    <option key={b} value={b}>Banda {b.toFixed(1)}</option>
                  ))}
                </select>
              </div>

              {/* Speaking Selector */}
              <div className="p-4 rounded-2xl bg-violet-50/60 border border-violet-200">
                <div className="flex items-center gap-2 mb-2 text-violet-900 font-bold text-xs">
                  <Mic className="w-4 h-4 text-violet-600" />
                  <span>Speaking</span>
                </div>
                <select
                  value={calcSpeaking}
                  onChange={e => setCalcSpeaking(parseFloat(e.target.value))}
                  className="w-full bg-white border border-violet-300 rounded-xl px-3 py-2 text-base font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-500 cursor-pointer"
                >
                  {bandOptions.map(b => (
                    <option key={b} value={b}>Banda {b.toFixed(1)}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Resultado Oficial Calculado</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">
                    {overallBand.toFixed(1)}
                  </span>
                  <span className="text-sm text-slate-300">
                    (Promedio aritmético exacto: <strong className="text-amber-300 font-mono">{rawAverage.toFixed(3)}</strong>)
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Regla de redondeo oficial de Cambridge: si el promedio tiene decimal .25 o .75, se redondea hacia arriba al siguiente .5 o banda completa.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl text-xs space-y-1 shrink-0 text-slate-200">
                <div className="flex justify-between gap-4">
                  <span>Listening:</span>
                  <span className="font-mono font-bold text-white">{calcListening.toFixed(1)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Reading:</span>
                  <span className="font-mono font-bold text-white">{calcReading.toFixed(1)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Writing:</span>
                  <span className="font-mono font-bold text-white">{calcWriting.toFixed(1)}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Speaking:</span>
                  <span className="font-mono font-bold text-white">{calcSpeaking.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
