import type { FC } from 'react';
import { PenTool, BookOpen, Headphones, ArrowRight, CheckCircle2, Layers, ExternalLink, Clock } from 'lucide-react';
import type { TabType } from '../Navbar';

interface HomePageProps {
  onNavigate: (tab: TabType) => void;
}

export const HomePage: FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Plataforma Local de Preparación</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            IELTS Academic Training Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Herramienta personal para simular el examen oficial de IELTS Academic en condiciones reales. Practica el examen completo o entrena cada sección en su orden cronológico estipulado.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('full-ielts')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4" />
              <span>Practicar Full IELTS</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <a
              href="https://practicepteonline.com/listening-ielts-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <Headphones className="w-4 h-4 text-sky-400" />
              <span>Listening</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
            <button
              onClick={() => onNavigate('reading')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Reading</span>
            </button>
            <button
              onClick={() => onNavigate('writing')}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <PenTool className="w-4 h-4 text-violet-400" />
              <span>Writing</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured: Full IELTS Simulation Banner */}
      <div className="bg-gradient-to-r from-indigo-900/90 via-slate-900 to-slate-900 rounded-3xl border border-indigo-500/30 p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>Simulacro Oficial Completo</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Simulacro Full IELTS Academic (2 horas 45 minutos)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Realiza la prueba completa continua respetando la estructura y el orden oficial de evaluación:
            Listening (40 min) &rarr; Reading (60 min) &rarr; Writing (60 min).
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" /> 165 minutos en total
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 3 secciones en orden estricto
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Guardado directo de ensayos
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <button
            onClick={() => onNavigate('full-ielts')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>Iniciar Simulacro Full IELTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Individual Sections Grid in Official Order: Listening -> Reading -> Writing */}
      <div>
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Práctica Individual</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Secciones del Examen en Orden Oficial</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Puedes practicar cada sección por separado o seguir la secuencia oficial de preparación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Section 1: Listening */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Sección 1 &bull; 40 Minutos</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Academic Listening</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                40 preguntas divididas en 4 secciones con audios en diversos acentos en inglés (británico, australiano, norteamericano).
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Secciones 1 y 2:</strong> Diálogos y monólogos en contextos sociales cotidianos.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Secciones 3 y 4:</strong> Discusiones académicas universitarias y ponencias magistrales.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Tests interactivos:</strong> Acceso a la colección completa de audios en PracticePTE.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://practicepteonline.com/listening-ielts-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Abrir Tests Oficiales de Listening</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Section 2: Reading */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Sección 2 &bull; 60 Minutos</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Academic Reading</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Comprensión lectora con 15 pasajes auténticos en formato Cambridge distribuidos en 5 exámenes completos.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Formato oficial:</strong> 3 pasajes con asignación secuencial automática obligatoria.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Preguntas oficiales:</strong> True/False/Not Given, Yes/No/Not Given, Matching y Completado.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Evaluación automática:</strong> Estimación de Banda 1.0 a 9.0 con respuestas explicadas.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('reading')}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ir al Simulador de Reading</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 3: Writing */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Sección 3 &bull; 60 Minutos</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Academic Writing</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Práctica con cronómetro oficial y conteo en vivo para cumplir con la estructura y extensión requerida.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Task 1 (20 min):</strong> Reporte analítico de gráficos, tablas o diagramas (150+ palabras).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Task 2 (40 min):</strong> Ensayo académico de opinión, discusión o causas (250+ palabras).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Guardado local:</strong> Exportación automática a Markdown y JSON en submissions/.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('writing')}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ir al Simulador de Writing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
