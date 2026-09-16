import type { FC } from 'react';
import { PenTool, BookOpen, History, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: 'writing' | 'reading' | 'submissions') => void;
}

export const HomePage: FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Plataforma Local de Preparacion</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            IELTS Academic Training Hub
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Herramienta personal para simular el examen oficial de IELTS Academic en condiciones reales. Practica redaccion cronometrada y comprension de lectura con evaluacion personalizada en chat.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('writing')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
            >
              <PenTool className="w-4 h-4" />
              <span>Practicar Writing</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => onNavigate('reading')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Practicar Reading</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Module 1: Writing */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Modulo de Redaccion</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Academic Writing</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Practica con cronometro oficial y conteo en vivo para asegurar el cumplimiento de extension y estructura academica.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Task 1 (Reporte de datos):</strong> Graficos de barras, lineas y diagramas de proceso (minimo 150 palabras, 20 minutos).
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Task 2 (Ensayo academico):</strong> Ensayos de opinion, discusion y causa/efecto (minimo 250 palabras, 40 minutos).
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Guardado en disco:</strong> Exportacion automatica a formato Markdown y JSON en la carpeta submissions/.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => onNavigate('writing')}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ir al Simulador de Writing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Module 2: Reading */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Modulo de Lectura</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Academic Reading</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Entrenamiento con pasajes de investigacion cientifica, divulgacion y analisis social en formato Cambridge.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Formato oficial:</strong> 3 pasajes con preguntas True/False/Not Given, Matching Headings y Sentence Completion.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Pantalla dividida y resaltador:</strong> Lectura comoda a la izquierda y panel interactivo a la derecha.
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Calificacion inmediata:</strong> Estimacion automatica de la Banda (1.0 a 9.0) y revision con respuestas explicadas.
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={() => onNavigate('reading')}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Ir al Simulador de Reading</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* How Workflow Works */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Flujo de Trabajo</span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">Como funciona la evaluacion</h3>
          <p className="text-sm text-slate-600 mt-2">
            La herramienta almacena tus respuestas de forma local para permitir una revision detallada en el chat sin costos de API externa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Selecciona y redacta</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elige entre Task 1 o Task 2, inicia el temporizador y redacta tu respuesta cumpliendo el minimo de palabras.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Guarda la sesion</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Presiona "Finish & Save". El archivo se genera inmediatamente en tu repositorio en submissions/.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Solicita revision</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Copia el mensaje generado o escribe en este chat: "calificame mi ultimo ensayo de Writing".
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Reporte de bandas</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Recibe la calificacion detallada bajo los 4 criterios de IELTS (TR, CC, LR y GRA) junto con correcciones precisas.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('submissions')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
          >
            <History className="w-4 h-4" />
            <span>Ver historial de ensayos previos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
