import { useState, useEffect, useRef, type FC } from 'react';
import { READING_TESTS } from '../../data/readingTests';
import type { ReadingTest, ReadingPassage } from '../../types/reading';
import { calculateAcademicReadingBand, formatTime } from '../../utils/ieltsScoring';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  Highlighter,
  HelpCircle,
  Play,
  Pause,
  ArrowRight,
  ArrowLeft,
  AlertTriangle
} from 'lucide-react';

const STORAGE_PROGRESS_KEY = 'ielts_completed_full_reading_tests';

const findNextTestIndex = (completedTestIds: Set<string>): number => {
  for (let i = 0; i < READING_TESTS.length; i++) {
    if (!completedTestIds.has(READING_TESTS[i].id)) {
      return i;
    }
  }
  return 0;
};

export const ReadingPractice: FC = () => {
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

  const currentTest: ReadingTest = READING_TESTS[currentTestIndex] || READING_TESTS[0];

  // Active passage index within the current test (0, 1, or 2)
  const [activePassageIndex, setActivePassageIndex] = useState<number>(0);
  const activePassage: ReadingPassage = currentTest.passages[activePassageIndex] || currentTest.passages[0];

  // All 40 questions across all 3 passages
  const allQuestions = currentTest.passages.flatMap(p => p.questions);
  const totalQuestions = allQuestions.length; // 40

  // User answers map for all 40 questions: { [questionId]: answerString }
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // 60-minute Official Exam Timer (3600 seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(60 * 60);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
  const timerRef = useRef<any>(null);

  // Result & Review modal
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showResultsModal, setShowResultsModal] = useState<boolean>(false);

  // Highlight tool state
  const [isHighlightMode, setIsHighlightMode] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerRunning && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isTimerRunning, isSubmitted]);

  const handleSelectAnswer = (qId: string, val: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleResetCurrentTest = () => {
    if (window.confirm('¿Deseas reiniciar este examen completo de 40 preguntas y borrar tus respuestas actuales?')) {
      setAnswers({});
      setIsSubmitted(false);
      setShowResultsModal(false);
      setTimeRemaining(60 * 60);
      setElapsedSeconds(0);
      setIsTimerRunning(true);
      setActivePassageIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Evaluation across all 40 questions
  let correctCount = 0;
  allQuestions.forEach(q => {
    const userAns = (answers[q.id] || '').trim().toLowerCase();
    const correctAns = q.correctAnswer.trim().toLowerCase();
    if (userAns === correctAns) {
      correctCount++;
    }
  });

  const bandScore = calculateAcademicReadingBand(correctCount, totalQuestions);

  // Passage specific scores for breakdown
  const getPassageScore = (passageIdx: number) => {
    const p = currentTest.passages[passageIdx];
    if (!p) return { correct: 0, total: 0 };
    let c = 0;
    p.questions.forEach(q => {
      const userAns = (answers[q.id] || '').trim().toLowerCase();
      const correctAns = q.correctAnswer.trim().toLowerCase();
      if (userAns === correctAns) c++;
    });
    return { correct: c, total: p.questions.length };
  };

  const answeredCount = Object.values(answers).filter(v => v && v.trim().length > 0).length;
  const pendingCount = totalQuestions - answeredCount;

  const handleSubmit = () => {
    if (pendingCount > 0) {
      const confirmSubmit = window.confirm(
        `Tienes ${pendingCount} de ${totalQuestions} preguntas sin responder.\n¿Estás seguro de que deseas entregar el examen ahora?`
      );
      if (!confirmSubmit) return;
    }

    setIsSubmitted(true);
    setIsTimerRunning(false);
    setShowResultsModal(true);

    // Save test completion
    const nextSet = new Set(completedTestIds);
    nextSet.add(currentTest.id);
    setCompletedTestIds(nextSet);
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(Array.from(nextSet)));
  };

  const handleAdvanceToNextTest = () => {
    setShowResultsModal(false);
    setIsSubmitted(false);
    setAnswers({});
    setTimeRemaining(60 * 60);
    setElapsedSeconds(0);
    setIsTimerRunning(true);
    setActivePassageIndex(0);

    const updatedCompleted = new Set(completedTestIds);
    updatedCompleted.add(currentTest.id);
    const nextIndex = findNextTestIndex(updatedCompleted);
    setCurrentTestIndex(nextIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Jump to specific question and switch passage if needed
  const handleJumpToQuestion = (qNumber: number) => {
    let targetPassageIdx = 0;
    for (let pIdx = 0; pIdx < currentTest.passages.length; pIdx++) {
      const hasQ = currentTest.passages[pIdx].questions.some(q => q.number === qNumber);
      if (hasQ) {
        targetPassageIdx = pIdx;
        break;
      }
    }

    if (targetPassageIdx !== activePassageIndex) {
      setActivePassageIndex(targetPassageIdx);
    }

    setTimeout(() => {
      const el = document.getElementById(`question-card-${qNumber}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const isAllCompleted = completedTestIds.size >= READING_TESTS.length;
  const isTenMinutesLeft = timeRemaining <= 10 * 60 && timeRemaining > 0;
  const isTimeUp = timeRemaining === 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-28 space-y-6">
      {/* Top Header Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
        {/* Test Info and Counters */}
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-xl text-xs sm:text-sm font-bold">
              Test {currentTestIndex + 1} de {READING_TESTS.length} &bull; Examen Completo
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
              Progreso: {answeredCount} de {totalQuestions} respondidas ({pendingCount} pendientes)
            </span>
            {isAllCompleted && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                Ciclo completado
              </span>
            )}
          </div>
          <h1 className="text-base sm:text-lg font-bold text-slate-900">
            {currentTest.title}
          </h1>
        </div>

        {/* 60-minute Timer & Actions */}
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
              onClick={() => setIsTimerRunning(prev => !prev)}
              className={`ml-1 p-1.5 rounded-lg text-white font-bold transition-all cursor-pointer ${
                isSubmitted
                  ? 'bg-slate-300 cursor-not-allowed'
                  : isTimerRunning
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              title={isTimerRunning ? 'Pausar Cronómetro' : 'Iniciar Cronómetro (60:00)'}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={() => setIsHighlightMode(!isHighlightMode)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              isHighlightMode
                ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-sm'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Herramienta de resaltado"
          >
            <Highlighter className="w-4 h-4" />
            <span className="hidden sm:inline">Resaltar</span>
          </button>

          <button
            onClick={handleResetCurrentTest}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 transition-all cursor-pointer"
            title="Reiniciar Examen Completo"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>Entregar Examen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowResultsModal(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Ver Resultados ({bandScore})</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar of the 40 Questions */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="bg-indigo-600 h-full transition-all duration-300"
          style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Official 10-Minute Warning Alert */}
      {isTenMinutesLeft && !isSubmitted && (
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 flex items-center gap-3 text-amber-900 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
          <div>
            <strong>Aviso oficial de IELTS:</strong> Quedan menos de 10 minutos. Asegúrate de transferir o marcar todas tus respuestas pendientes en la hoja de respuestas.
          </div>
        </div>
      )}

      {/* Passage Selector Tabs (CD-IELTS style) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        {currentTest.passages.map((passage, pIdx) => {
          const isActive = pIdx === activePassageIndex;
          const pQuestions = passage.questions;
          const pAnswered = pQuestions.filter(q => answers[q.id] && answers[q.id].trim().length > 0).length;
          const pTotal = pQuestions.length;
          const startQ = pQuestions[0]?.number || 1;
          const endQ = pQuestions[pQuestions.length - 1]?.number || 13;

          return (
            <button
              key={passage.id}
              onClick={() => {
                setActivePassageIndex(pIdx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>Pasaje {passage.number} (Q{startQ}-{endQ})</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : pAnswered === pTotal
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {pAnswered}/{pTotal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Split Screen: Left = Reading Passage, Right = Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage Text (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6 lg:max-h-[calc(100vh-260px)] lg:overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Academic Reading &bull; Pasaje {activePassage.number} de 3
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {activePassage.paragraphs.length} párrafos
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {activePassage.title}
            </h2>
            {activePassage.subtitle && (
              <p className="mt-2 text-sm text-slate-600 italic leading-relaxed border-l-2 border-indigo-400 pl-3">
                {activePassage.subtitle}
              </p>
            )}
          </div>

          <hr className="border-slate-100" />

          {/* Paragraphs with labels */}
          <div className="space-y-5 text-sm sm:text-base text-slate-800 leading-relaxed font-serif">
            {activePassage.paragraphs.map((p, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                {p.label && (
                  <span className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-sans font-bold text-xs flex items-center justify-center shrink-0 select-none mt-0.5">
                    {p.label}
                  </span>
                )}
                <p className={`${isHighlightMode ? 'selection:bg-amber-200' : ''}`}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Questions of Current Passage (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:max-h-[calc(100vh-260px)] lg:overflow-y-auto pr-1">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>Preguntas del Pasaje {activePassage.number}</span>
              </h3>
              <span className="text-xs text-slate-500 font-semibold font-mono">
                {activePassage.questions[0]?.number} - {activePassage.questions[activePassage.questions.length - 1]?.number}
              </span>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {activePassage.questions.map(q => {
                const userVal = answers[q.id] || '';
                const isCorrect = isSubmitted && userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.number}`}
                    className={`p-4 rounded-xl border transition-all ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300'
                          : 'bg-rose-50/50 border-rose-300'
                        : userVal
                        ? 'bg-indigo-50/30 border-indigo-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    {/* Instructions if specified */}
                    {q.instructions && (
                      <p className="text-xs font-semibold text-indigo-900 bg-indigo-50/80 p-2 rounded-lg mb-2.5">
                        {q.instructions}
                      </p>
                    )}

                    {/* Question Prompt */}
                    <div className="flex items-start gap-2.5 mb-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.number}
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-900 leading-snug">
                        {q.text}
                      </p>
                    </div>

                    {/* True / False / Not Given & Yes / No / Not Given */}
                    {(q.type === 'true-false-not-given' || q.type === 'yes-no-not-given') && (
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {(q.type === 'true-false-not-given'
                          ? ['TRUE', 'FALSE', 'NOT GIVEN']
                          : ['YES', 'NO', 'NOT GIVEN']
                        ).map(opt => (
                          <button
                            key={opt}
                            disabled={isSubmitted}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            className={`py-2 px-2.5 rounded-lg text-xs font-bold tracking-wider transition-all border cursor-pointer ${
                              userVal === opt
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Multiple Choice & Matching Headings */}
                    {(q.type === 'multiple-choice' || q.type === 'matching-headings') && q.options && (
                      <div className="space-y-2 mt-2">
                        {q.options.map((opt, oIdx) => {
                          const optKey = q.type === 'multiple-choice' ? opt.charAt(0) : opt;
                          const isSelected = userVal === optKey;

                          return (
                            <button
                              key={oIdx}
                              disabled={isSubmitted}
                              onClick={() => handleSelectAnswer(q.id, optKey)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all flex items-start gap-2 cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                                  isSelected ? 'bg-white text-indigo-600' : 'bg-slate-100 text-slate-600'
                                }`}
                              >
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span className="flex-1 leading-snug">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Sentence Completion / Short Answer */}
                    {q.type === 'sentence-completion' && (
                      <div className="mt-2">
                        <input
                          type="text"
                          disabled={isSubmitted}
                          value={userVal}
                          onChange={e => handleSelectAnswer(q.id, e.target.value)}
                          placeholder="Escribe la respuesta exacta del texto..."
                          className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-900"
                        />
                      </div>
                    )}

                    {/* Review Feedback Explanation after submit */}
                    {isSubmitted && (
                      <div className="mt-3 pt-3 border-t border-slate-200 space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          {isCorrect ? (
                            <span className="text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correcto
                            </span>
                          ) : (
                            <span className="text-rose-700 font-bold flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Incorrecto
                            </span>
                          )}
                          <span className="text-slate-500 font-mono">
                            Respuesta oficial: <strong className="text-slate-800">{q.correctAnswer}</strong>
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mt-1">
                          <strong className="text-indigo-900">Explicación:</strong> {q.explanation}
                        </p>
                        {q.passageAnchor && (
                          <span className="inline-block text-[11px] font-semibold text-slate-400">
                            Ubicación: {q.passageAnchor}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Question Palette & Navigation Bar (Official CD-IELTS Style) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white py-3 px-4 sm:px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Question Palette Buttons (1 to 40) */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
              Preguntas:
            </span>
            {allQuestions.map(q => {
              const val = answers[q.id];
              const isAnswered = val && val.trim().length > 0;
              const isCurrentPassage = activePassage.questions.some(pq => pq.id === q.id);

              return (
                <button
                  key={q.id}
                  onClick={() => handleJumpToQuestion(q.number)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold shrink-0 transition-all cursor-pointer flex items-center justify-center ${
                    isAnswered
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : isCurrentPassage
                      ? 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                      : 'bg-slate-800/40 text-slate-500 border border-slate-800 hover:bg-slate-800'
                  }`}
                  title={`Ir a pregunta ${q.number} (${isAnswered ? 'Respondida' : 'Pendiente'})`}
                >
                  {q.number}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <button
              disabled={activePassageIndex === 0}
              onClick={() => {
                setActivePassageIndex(prev => Math.max(0, prev - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-200 border border-slate-700 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            <button
              disabled={activePassageIndex === currentTest.passages.length - 1}
              onClick={() => {
                setActivePassageIndex(prev => Math.min(currentTest.passages.length - 1, prev + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-200 border border-slate-700 transition-all cursor-pointer"
            >
              <span>Siguiente</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {!isSubmitted && (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Entregar 40 Preguntas</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Official Results Modal */}
      {showResultsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/10">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Evaluación Oficial IELTS Academic Reading
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Resultado del Examen Completo
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentTest.title}
                </p>
              </div>

              {/* Band Score Display */}
              <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 flex items-center justify-around">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Band Score Oficial</span>
                  <span className="text-4xl font-extrabold font-mono text-amber-400">
                    {bandScore.toFixed(1)}
                  </span>
                </div>
                <div className="w-px h-12 bg-slate-800" />
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-400 block">Aciertos Totales</span>
                  <span className="text-2xl font-bold font-mono text-white">
                    {correctCount} / {totalQuestions}
                  </span>
                  <span className="text-[11px] text-slate-400 block">
                    ({Math.round((correctCount / totalQuestions) * 100)}% de aciertos)
                  </span>
                </div>
              </div>

              {/* Breakdown by Passage */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs">
                <span className="font-bold text-slate-900 block uppercase tracking-wider text-[11px]">
                  Desglose por Pasaje:
                </span>
                {currentTest.passages.map((p, idx) => {
                  const pScore = getPassageScore(idx);
                  return (
                    <div key={p.id} className="flex justify-between items-center py-1 border-b border-slate-200/80 last:border-0">
                      <span className="text-slate-600">Pasaje {p.number} ({p.title.slice(0, 26)}...):</span>
                      <span className="font-mono font-bold text-slate-900">
                        {pScore.correct} / {pScore.total}
                      </span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-1 text-slate-500">
                  <span>Tiempo empleado:</span>
                  <span className="font-mono font-bold text-slate-800">{formatTime(elapsedSeconds)} de 60:00</span>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  Revisar Respuestas y Explicaciones
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
