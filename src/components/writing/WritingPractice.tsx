import { useState, useEffect, useRef, type FC } from 'react';
import { TASK_1_PROMPTS, TASK_2_PROMPTS } from '../../data/writingPrompts';
import type { WritingPrompt, TaskType } from '../../types/writing';
import { countWords, formatTime } from '../../utils/ieltsScoring';
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Clock,
  Copy,
  Check,
  ArrowRight,
  PenTool,
  BarChart2,
  FileText,
  AlertTriangle
} from 'lucide-react';

const STORAGE_PROGRESS_KEY = 'ielts_completed_full_writing_tests';

interface WritingTestPair {
  id: string;
  testNumber: number;
  task1: WritingPrompt;
  task2: WritingPrompt;
}

// Pair Task 1 and Task 2 prompts into full 60-minute tests
const TOTAL_WRITING_TESTS: WritingTestPair[] = Array.from(
  { length: Math.min(TASK_1_PROMPTS.length, TASK_2_PROMPTS.length) },
  (_, idx) => ({
    id: `writing-test-${idx + 1}`,
    testNumber: idx + 1,
    task1: TASK_1_PROMPTS[idx],
    task2: TASK_2_PROMPTS[idx]
  })
);

const findNextTestIndex = (completedIds: Set<string>): number => {
  for (let i = 0; i < TOTAL_WRITING_TESTS.length; i++) {
    if (!completedIds.has(TOTAL_WRITING_TESTS[i].id)) {
      return i;
    }
  }
  return 0;
};

export const WritingPractice: FC = () => {
  // Completed test IDs
  const [completedTestIds, setCompletedTestIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PROGRESS_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Current test index in strict sequential order
  const [currentTestIndex, setCurrentTestIndex] = useState<number>(() => {
    const initialCompleted = (() => {
      try {
        const stored = localStorage.getItem(STORAGE_PROGRESS_KEY);
        return stored ? new Set<string>(JSON.parse(stored)) : new Set<string>();
      } catch {
        return new Set<string>();
      }
    })();
    return findNextTestIndex(initialCompleted);
  });

  const currentPair = TOTAL_WRITING_TESTS[currentTestIndex] || TOTAL_WRITING_TESTS[0];
  const { task1, task2 } = currentPair;

  // Active tab within the test ('task1' or 'task2')
  const [activeTask, setActiveTask] = useState<TaskType>('task1');

  // Draft contents for Task 1 and Task 2
  const [t1Content, setT1Content] = useState<string>(() => {
    return localStorage.getItem(`ielts_draft_${task1.id}`) || '';
  });
  const [t2Content, setT2Content] = useState<string>(() => {
    return localStorage.getItem(`ielts_draft_${task2.id}`) || '';
  });

  // 60-Minute Official Exam Timer (3600 seconds) with auto-start
  const [timeRemaining, setTimeRemaining] = useState<number>(60 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const timerRef = useRef<any>(null);

  // Submission & modal states
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showResultsModal, setShowResultsModal] = useState<boolean>(false);
  const [copiedReview, setCopiedReview] = useState<boolean>(false);

  // Autosave Task 1 and Task 2 drafts
  useEffect(() => {
    localStorage.setItem(`ielts_draft_${task1.id}`, t1Content);
  }, [t1Content, task1.id]);

  useEffect(() => {
    localStorage.setItem(`ielts_draft_${task2.id}`, t2Content);
  }, [t2Content, task2.id]);

  // When currentPair changes (next test), update drafts
  useEffect(() => {
    setT1Content(localStorage.getItem(`ielts_draft_${task1.id}`) || '');
    setT2Content(localStorage.getItem(`ielts_draft_${task2.id}`) || '');
    setTimeRemaining(60 * 60);
    setElapsedSeconds(0);
    setIsRunning(true);
    setIsSubmitted(false);
    setShowResultsModal(false);
    setActiveTask('task1');
  }, [currentTestIndex, task1.id, task2.id]);

  // Continuous timer countdown
  useEffect(() => {
    if (isRunning && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, isSubmitted]);

  // Word counts
  const t1Words = countWords(t1Content);
  const t2Words = countWords(t2Content);
  const t1Met = t1Words >= task1.minWords;
  const t2Met = t2Words >= task2.minWords;
  const totalWords = t1Words + t2Words;

  const handleResetCurrentTest = () => {
    if (window.confirm('¿Deseas reiniciar este examen de Writing (60:00) y borrar tus textos actuales?')) {
      setT1Content('');
      setT2Content('');
      localStorage.removeItem(`ielts_draft_${task1.id}`);
      localStorage.removeItem(`ielts_draft_${task2.id}`);
      setTimeRemaining(60 * 60);
      setElapsedSeconds(0);
      setIsRunning(true);
      setIsSubmitted(false);
      setShowResultsModal(false);
      setActiveTask('task1');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Submit and save both tasks to disk
  const handleSubmitWriting = async () => {
    const warnings: string[] = [];
    if (!t1Met) {
      warnings.push(`Task 1 tiene ${t1Words} palabras (mínimo recomendado: 150)`);
    }
    if (!t2Met) {
      warnings.push(`Task 2 tiene ${t2Words} palabras (mínimo recomendado: 250)`);
    }

    if (warnings.length > 0) {
      const confirmSubmit = window.confirm(
        `Atención a los requisitos de extensión:\n- ${warnings.join('\n- ')}\n\n¿Deseas entregar el examen de Writing de todos modos?`
      );
      if (!confirmSubmit) return;
    }

    setIsSaving(true);
    try {
      // Save Task 1
      await fetch('/api/save-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskType: 'task1',
          promptId: task1.id,
          promptTitle: task1.title,
          promptText: task1.prompt,
          content: t1Content,
          wordCount: t1Words,
          targetWords: task1.minWords,
          timeSpentSeconds: elapsedSeconds
        })
      });

      // Save Task 2
      await fetch('/api/save-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskType: 'task2',
          promptId: task2.id,
          promptTitle: task2.title,
          promptText: task2.prompt,
          content: t2Content,
          wordCount: t2Words,
          targetWords: task2.minWords,
          timeSpentSeconds: elapsedSeconds
        })
      });

      // Mark completed
      const nextCompleted = new Set(completedTestIds);
      nextCompleted.add(currentPair.id);
      setCompletedTestIds(nextCompleted);
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(Array.from(nextCompleted)));

      setIsSubmitted(true);
      setIsRunning(false);
      setShowResultsModal(true);
    } catch (err) {
      console.error('Error saving writing submissions:', err);
      alert('Hubo un error al guardar los archivos en disco.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAdvanceToNextTest = () => {
    setShowResultsModal(false);
    const updatedCompleted = new Set(completedTestIds);
    updatedCompleted.add(currentPair.id);
    const nextIdx = findNextTestIndex(updatedCompleted);
    setCurrentTestIndex(nextIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate evaluation prompt to copy into chat
  const generateChatEvaluationPrompt = () => {
    return [
      `Hola Antigravity, acabo de terminar mi examen completo de IELTS Academic Writing en el simulador.`,
      `Por favor, califícame con los 4 criterios oficiales de Cambridge (Task Achievement/Response, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy) tanto para Task 1 como para Task 2, y calcula mi Writing Band Score final con la ponderación oficial (1/3 Task 1 + 2/3 Task 2).`,
      ``,
      `--- DATOS DEL EXAMEN ---`,
      `Tiempo empleado: ${formatTime(elapsedSeconds)} de 60:00 minutos`,
      ``,
      `--- TASK 1: ${task1.title} (${t1Words} palabras) ---`,
      `Consigna:`,
      task1.prompt,
      ``,
      `Mi respuesta Task 1:`,
      t1Content || '(Sin respuesta)',
      ``,
      `--- TASK 2: ${task2.title} (${t2Words} palabras) ---`,
      `Consigna:`,
      task2.prompt,
      ``,
      `Mi respuesta Task 2:`,
      t2Content || '(Sin respuesta)'
    ].join('\n');
  };

  const handleCopyEvaluationPrompt = async () => {
    const text = generateChatEvaluationPrompt();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedReview(true);
      setTimeout(() => setCopiedReview(false), 3000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  const isTenMinutesLeft = timeRemaining <= 10 * 60 && timeRemaining > 0;
  const isTimeUp = timeRemaining === 0;
  const isAllCompleted = completedTestIds.size >= TOTAL_WRITING_TESTS.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 space-y-6">
      {/* Top Header Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        {/* Test Info and Counters */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-xl text-xs sm:text-sm font-bold">
              Test {currentTestIndex + 1} de {TOTAL_WRITING_TESTS.length} &bull; Examen Completo
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
              Total palabras: {totalWords} (T1: {t1Words}/150 &bull; T2: {t2Words}/250)
            </span>
            {isAllCompleted && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                Ciclo completado
              </span>
            )}
          </div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900">
            IELTS Academic Writing &bull; 60 Minutos Oficiales
          </h1>
        </div>

        {/* 60-Minute Countdown Timer & Controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div
            className={`flex items-center gap-2.5 border px-3.5 py-2 rounded-xl transition-all ${
              isTenMinutesLeft
                ? 'bg-amber-50 border-amber-300 text-amber-900 animate-pulse'
                : isTimeUp
                ? 'bg-rose-50 border-rose-300 text-rose-900 font-bold'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            <Clock className={`w-4 h-4 ${isTenMinutesLeft ? 'text-amber-600' : 'text-slate-500'}`} />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                Tiempo Restante
              </span>
              <span className="font-mono text-base sm:text-lg font-bold">
                {formatTime(timeRemaining)}
              </span>
            </div>
            <button
              disabled={isSubmitted}
              onClick={() => setIsRunning(prev => !prev)}
              className={`ml-1 p-1.5 rounded-lg text-white font-bold transition-all cursor-pointer ${
                isSubmitted
                  ? 'bg-slate-300 cursor-not-allowed'
                  : isRunning
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              title={isRunning ? 'Pausar Cronómetro' : 'Reanudar Cronómetro (60:00)'}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={handleResetCurrentTest}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-all cursor-pointer"
            title="Reiniciar Examen Completo de Writing"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <button
              disabled={isSaving}
              onClick={handleSubmitWriting}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 disabled:bg-slate-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>{isSaving ? 'Guardando...' : 'Entregar Examen Completo'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowResultsModal(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Ver Entrega Final</span>
            </button>
          )}
        </div>
      </div>

      {/* Official 10-Minute Warning Alert */}
      {isTenMinutesLeft && !isSubmitted && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-center gap-3 text-amber-900 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong>Aviso oficial de IELTS:</strong> Quedan menos de 10 minutos para concluir el examen de Writing. Asegúrate de revisar ambas tareas y comprobar que cumples con la extensión mínima.
          </div>
        </div>
      )}

      {/* Task Switcher Tabs (CD-IELTS style) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-2">
        <div className="flex items-center gap-2">
          {/* Task 1 Tab */}
          <button
            onClick={() => setActiveTask('task1')}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTask === 'task1'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            <span>Task 1: Academic Report (1/3 nota)</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                activeTask === 'task1'
                  ? 'bg-white/20 text-white'
                  : t1Met
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {t1Words} / 150 palabras
            </span>
          </button>

          {/* Task 2 Tab */}
          <button
            onClick={() => setActiveTask('task2')}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTask === 'task2'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Task 2: Discursive Essay (2/3 nota)</span>
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                activeTask === 'task2'
                  ? 'bg-white/20 text-white'
                  : t2Met
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {t2Words} / 250 palabras
            </span>
          </button>
        </div>

        <span className="text-xs text-slate-500 hidden md:inline-block">
          Sugerencia oficial: 20 min en Task 1 &bull; 40 min en Task 2
        </span>
      </div>

      {/* Main Split Screen for Active Task */}
      {activeTask === 'task1' ? (
        /* TASK 1 VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Task 1 Prompt and Chart (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 lg:max-h-[calc(100vh-260px)] lg:overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Task 1 &bull; {task1.category}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Mínimo 150 palabras
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
                {task1.title}
              </h2>
            </div>

            {/* Visual SVG Chart */}
            {task1.chartSvg && (
              <div
                className="overflow-x-auto rounded-xl shadow-inner bg-slate-950 p-2"
                dangerouslySetInnerHTML={{ __html: task1.chartSvg }}
              />
            )}

            {/* Chart Description */}
            {task1.chartDescription && (
              <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                {task1.chartDescription}
              </p>
            )}

            <hr className="border-slate-100" />

            {/* Prompt Instructions */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-line">
              {task1.prompt}
            </div>
          </div>

          {/* Right Column: Task 1 Writing Editor (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-bold text-slate-900">Hoja de Respuesta - Task 1</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${
                    t1Met
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {t1Words} / 150 palabras {t1Met ? '(Meta cumplida)' : `(Faltan ${150 - t1Words})`}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${t1Met ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                style={{ width: `${Math.min(100, (t1Words / 150) * 100)}%` }}
              />
            </div>

            {/* Editor Textarea */}
            <textarea
              disabled={isSubmitted}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              value={t1Content}
              onChange={e => setT1Content(e.target.value)}
              placeholder="Escribe tu reporte de Task 1 aquí... (Incluye introducción con paráfrasis, visión general / overview con las tendencias principales, y párrafos de detalles con datos comparativos específicos)."
              rows={18}
              className="w-full p-4 text-sm font-mono text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white leading-relaxed resize-y"
            />
          </div>
        </div>
      ) : (
        /* TASK 2 VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Task 2 Prompt & Guidelines (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 lg:max-h-[calc(100vh-260px)] lg:overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  Task 2 &bull; {task2.category}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                  Mínimo 250 palabras
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
                {task2.title}
              </h2>
            </div>

            {/* Prompt Instructions */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-line">
              {task2.prompt}
            </div>

            <hr className="border-slate-100" />

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 text-xs text-indigo-900 space-y-2">
              <strong className="block font-bold">Estructura Académica Recomendada (4 párrafos):</strong>
              <p>1. <strong>Introducción:</strong> Paráfrasis del tema y tesis clara con tu postura.</p>
              <p>2. <strong>Cuerpo 1:</strong> Primer argumento central, explicación causal y ejemplo.</p>
              <p>3. <strong>Cuerpo 2:</strong> Segundo argumento central o perspectiva contraria refutada.</p>
              <p>4. <strong>Conclusión:</strong> Síntesis de los puntos principales y reafirmación de postura.</p>
            </div>
          </div>

          {/* Right Column: Task 2 Writing Editor (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-bold text-slate-900">Hoja de Respuesta - Task 2</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border font-mono ${
                    t2Met
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {t2Words} / 250 palabras {t2Met ? '(Meta cumplida)' : `(Faltan ${250 - t2Words})`}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${t2Met ? 'bg-emerald-500' : 'bg-violet-500'}`}
                style={{ width: `${Math.min(100, (t2Words / 250) * 100)}%` }}
              />
            </div>

            {/* Editor Textarea */}
            <textarea
              disabled={isSubmitted}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              value={t2Content}
              onChange={e => setT2Content(e.target.value)}
              placeholder="Escribe tu ensayo académico de Task 2 aquí... (Asegúrate de justificar tus ideas con argumentos sólidos, conectores variados y vocabulario formal)."
              rows={18}
              className="w-full p-4 text-sm font-mono text-slate-900 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white leading-relaxed resize-y"
            />
          </div>
        </div>
      )}

      {/* Sticky Bottom Navigation & Submission Bar (CD-IELTS Style) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white py-3 px-4 sm:px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Quick Task Switcher Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTask('task1')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTask === 'task1'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>Task 1 ({t1Words}/150)</span>
              {t1Met && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>

            <button
              onClick={() => setActiveTask('task2')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTask === 'task2'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>Task 2 ({t2Words}/250)</span>
              {t2Met && <Check className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs text-slate-400 font-mono hidden md:inline">
              Tiempo: {formatTime(elapsedSeconds)} / 60:00
            </span>

            {!isSubmitted ? (
              <button
                disabled={isSaving}
                onClick={handleSubmitWriting}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>{isSaving ? 'Guardando...' : 'Entregar Examen Completo'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowResultsModal(true)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Ver Resumen de Entrega</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Submission Results & Evaluation Modal */}
      {showResultsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Examen Oficial IELTS Academic Writing
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Examen Entregado y Guardado en Disco
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Test {currentPair.testNumber} finalizado en {formatTime(elapsedSeconds)} minutos.
                </p>
              </div>

              {/* Status summary box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {/* Task 1 Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">
                    Task 1 (33.3% de la nota)
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate">{task1.title}</h4>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-600">Palabras escritas:</span>
                    <span className={`font-mono font-bold ${t1Met ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {t1Words} / 150
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate">
                    Archivo: submissions/writing-*-task1.md
                  </span>
                </div>

                {/* Task 2 Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 block">
                    Task 2 (66.7% de la nota)
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 truncate">{task2.title}</h4>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-slate-600">Palabras escritas:</span>
                    <span className={`font-mono font-bold ${t2Met ? 'text-emerald-700' : 'text-amber-700'}`}>
                      {t2Words} / 250
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block truncate">
                    Archivo: submissions/writing-*-task2.md
                  </span>
                </div>
              </div>

              {/* Chat evaluation callout */}
              <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-2xl p-5 text-left space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                  Evaluación Personalizada en el Chat
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Tus respuestas ya están persistidas localmente en disco. Para recibir la retroalimentación detallada con los 4 criterios de Cambridge y tu Band Score estimado, pulsa el botón para copiar el texto de evaluación y pégalo en nuestro chat.
                </p>
                <button
                  onClick={handleCopyEvaluationPrompt}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copiedReview ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedReview ? 'Copiado al portapapeles' : 'Copiar Texto para Evaluar en Chat'}</span>
                </button>
              </div>

              {/* Modal buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Continuar Viendo Respuestas
                </button>
                <button
                  onClick={handleAdvanceToNextTest}
                  className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Siguiente Examen Completo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
