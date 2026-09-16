import { useState, useEffect, useRef, type FC } from 'react';
import {
  Headphones,
  BookOpen,
  PenTool,
  ArrowRight,
  ExternalLink,
  Clock,
  CheckCircle2,
  RotateCcw,
  Award,
  Play,
  Pause,
  Layers
} from 'lucide-react';
import type { TabType } from '../Navbar';
import { formatTime } from '../../utils/ieltsScoring';

interface FullIeltsPracticeProps {
  onNavigate: (tab: TabType) => void;
}

type Stage = 'listening' | 'reading' | 'writing' | 'completed';

const STAGE_CONFIG: Record<Stage, { name: string; duration: number; icon: any; order: number }> = {
  listening: { name: 'Listening', duration: 40 * 60, icon: Headphones, order: 1 },
  reading: { name: 'Reading', duration: 60 * 60, icon: BookOpen, order: 2 },
  writing: { name: 'Writing', duration: 60 * 60, icon: PenTool, order: 3 },
  completed: { name: 'Completado', duration: 0, icon: Award, order: 4 }
};

export const FullIeltsPractice: FC<FullIeltsPracticeProps> = ({ onNavigate }) => {
  const [currentStage, setCurrentStage] = useState<Stage>('listening');
  const [timerSeconds, setTimerSeconds] = useState<number>(STAGE_CONFIG['listening'].duration);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [totalElapsedSeconds, setTotalElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isTimerRunning && currentStage !== 'completed') {
      timerRef.current = setInterval(() => {
        setTotalElapsedSeconds(prev => prev + 1);
        setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, currentStage]);

  const handleToggleTimer = () => {
    setIsTimerRunning(prev => !prev);
  };

  const handleAdvanceStage = (next: Stage) => {
    setIsTimerRunning(false);
    setCurrentStage(next);
    if (next !== 'completed') {
      setTimerSeconds(STAGE_CONFIG[next].duration);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFullTest = () => {
    if (window.confirm('¿Deseas reiniciar el simulacro completo desde la seccion 1 (Listening)?')) {
      setIsTimerRunning(false);
      setCurrentStage('listening');
      setTimerSeconds(STAGE_CONFIG['listening'].duration);
      setTotalElapsedSeconds(0);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Simulation Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Simulacro Completo Oficial</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Full IELTS Academic Examination
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
            Simula las tres secciones principales del examen en estricto orden cronológico oficial: Listening (40 min), Reading (60 min) y Writing (60 min).
          </p>
        </div>

        {/* Global Stopwatches & Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <div className="bg-slate-800/90 border border-slate-700 px-4 py-2.5 rounded-2xl">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Tiempo Total Empleado</span>
            <div className="flex items-center gap-2 text-base font-mono font-bold text-slate-100">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>{formatTime(totalElapsedSeconds)}</span>
            </div>
          </div>

          {currentStage !== 'completed' && (
            <div className="bg-slate-800/90 border border-slate-700 px-4 py-2.5 rounded-2xl flex items-center gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Tiempo Restante Etapa</span>
                <div className="text-base font-mono font-bold text-amber-400">
                  {formatTime(timerSeconds)}
                </div>
              </div>
              <button
                onClick={handleToggleTimer}
                className={`p-2 rounded-xl text-white font-bold transition-all cursor-pointer ${
                  isTimerRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                title={isTimerRunning ? 'Pausar' : 'Iniciar'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>
          )}

          <button
            onClick={handleResetFullTest}
            className="p-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer"
            title="Reiniciar Simulacro Completo"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stepper Progression: Listening -> Reading -> Writing */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Step 1: Listening */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            currentStage === 'listening'
              ? 'bg-indigo-50/70 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
              : currentStage === 'reading' || currentStage === 'writing' || currentStage === 'completed'
              ? 'bg-emerald-50/60 border-emerald-300'
              : 'bg-white border-slate-200 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Etapa 1 &bull; 40 min</span>
            {currentStage === 'reading' || currentStage === 'writing' || currentStage === 'completed' ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" /> Completada
              </span>
            ) : currentStage === 'listening' ? (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">En Curso</span>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Academic Listening</h2>
              <p className="text-xs text-slate-600">4 Secciones con audio oficial</p>
            </div>
          </div>
        </div>

        {/* Step 2: Reading */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            currentStage === 'reading'
              ? 'bg-indigo-50/70 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
              : currentStage === 'writing' || currentStage === 'completed'
              ? 'bg-emerald-50/60 border-emerald-300'
              : 'bg-white border-slate-200 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Etapa 2 &bull; 60 min</span>
            {currentStage === 'writing' || currentStage === 'completed' ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" /> Completada
              </span>
            ) : currentStage === 'reading' ? (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">En Curso</span>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Academic Reading</h2>
              <p className="text-xs text-slate-600">3 Pasajes y 40 preguntas</p>
            </div>
          </div>
        </div>

        {/* Step 3: Writing */}
        <div
          className={`p-5 rounded-2xl border transition-all ${
            currentStage === 'writing'
              ? 'bg-indigo-50/70 border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
              : currentStage === 'completed'
              ? 'bg-emerald-50/60 border-emerald-300'
              : 'bg-white border-slate-200 opacity-60'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Etapa 3 &bull; 60 min</span>
            {currentStage === 'completed' ? (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" /> Completada
              </span>
            ) : currentStage === 'writing' ? (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-600 text-white">En Curso</span>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Academic Writing</h2>
              <p className="text-xs text-slate-600">Task 1 (20m) + Task 2 (40m)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Detail Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
        {/* Stage 1: Listening Active */}
        {currentStage === 'listening' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Etapa 1 de 3</span>
                <h2 className="text-2xl font-bold text-slate-900">Sección de Listening (30-40 minutos)</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              En el examen oficial de IELTS, la prueba inicia con la comprensión auditiva. El audio se reproduce una sola vez. Debes escuchar, tomar notas y responder las 40 preguntas distribuidas en 4 secciones de dificultad creciente.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Estructura Oficial del Listening</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Sección 1: Diálogo Cotidiano</strong>
                  Conversación entre dos hablantes en un contexto social general (reserva de alojamiento, solicitud de información).
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Sección 2: Monólogo Social</strong>
                  Discurso de una sola persona en un contexto cotidiano (guía turístico, presentación de instalaciones).
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Sección 3: Discusión Universitaria</strong>
                  Conversación entre hasta cuatro personas en un entorno educativo o de formación académica (asesoría con tutor).
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <strong className="text-slate-900 block mb-1">Sección 4: Conferencia Académica</strong>
                  Monólogo formal sobre un tema académico universitario dictado por un catedrático o investigador.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://practicepteonline.com/listening-ielts-tests/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <Headphones className="w-4 h-4" />
                <span>Abrir Tests Oficiales de Listening en PracticePTE</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => handleAdvanceStage('reading')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Terminé Listening &bull; Pasar a Reading</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Stage 2: Reading Active */}
        {currentStage === 'reading' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Etapa 2 de 3</span>
                <h2 className="text-2xl font-bold text-slate-900">Sección de Reading (60 minutos)</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              La segunda sección del examen oficial evalúa tu comprensión lectora con 3 textos académicos auténticos (aproximadamente 2,150 a 2,750 palabras en total) y 40 preguntas. No hay tiempo extra para transferir respuestas.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Estrategia Oficial de Gestión de Tiempo</h3>
              <p className="text-xs text-slate-600">
                Se recomienda asignar estrictamente 20 minutos por pasaje:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Pasaje 1 (20 min)</strong>
                  Enfoque descriptivo o factual. Resuelve rápido las preguntas directas.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Pasaje 2 (20 min)</strong>
                  Enfoque analítico o técnico. Localización de información y emparejamientos.
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Pasaje 3 (20 min)</strong>
                  Discusión abstracta y tesis teórica. Argumentación y deducción del autor.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('reading')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md shadow-sky-600/20 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Abrir Simulador de Reading Local</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleAdvanceStage('writing')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Terminé Reading &bull; Pasar a Writing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Stage 3: Writing Active */}
        {currentStage === 'writing' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <PenTool className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">Etapa 3 de 3</span>
                <h2 className="text-2xl font-bold text-slate-900">Sección de Writing (60 minutos)</h2>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
              La tercera y última sección presencial del examen oficial. Se compone de dos tareas escritas que deben completarse en 60 minutos consecutivos: Task 1 (mínimo 150 palabras, 20 minutos recomendados) y Task 2 (mínimo 250 palabras, 40 minutos recomendados).
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Distribución Obligatoria</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Task 1: Reporte Académico (20 min)</strong>
                  Describe, resume o explica información visual en al menos 150 palabras (visión general, tendencias clave y comparaciones relevantes).
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block mb-1">Task 2: Ensayo Discursivo (40 min)</strong>
                  Ensayo formal en respuesta a un punto de vista, argumento o problema en al menos 250 palabras. Pesa el doble de la nota que Task 1.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('writing')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm shadow-md shadow-violet-600/20 transition-all cursor-pointer"
              >
                <PenTool className="w-4 h-4" />
                <span>Abrir Simulador de Writing Local</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleAdvanceStage('completed')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <span>Finalizar Examen Completo</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Stage 4: Completed */}
        {currentStage === 'completed' && (
          <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Simulacro Full IELTS Finalizado
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Has completado las tres etapas del examen oficial en el orden estipulado por Cambridge: Listening, Reading y Writing.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left space-y-2 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="font-semibold text-slate-600">Tiempo total de simulación:</span>
                <span className="font-mono font-bold text-slate-900">{formatTime(totalElapsedSeconds)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="font-semibold text-slate-600">Archivos generados:</span>
                <span className="text-slate-900 font-medium">Guardados en carpeta submissions/ (.md y .json)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-600">Siguiente paso:</span>
                <span className="text-indigo-700 font-medium">Solicitar evaluación detallada de tus ensayos en el chat</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('submissions')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                Ver Ensayos Guardados
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
              >
                Volver al Inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
