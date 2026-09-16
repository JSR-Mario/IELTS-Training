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
  ArrowRight
} from 'lucide-react';

const STORAGE_PROGRESS_KEY = 'ielts_completed_reading_passages';

interface ReadingPosition {
  testIndex: number;
  passageIndex: number;
}

const findNextReadingPosition = (completedKeys: Set<string>): ReadingPosition => {
  for (let t = 0; t < READING_TESTS.length; t++) {
    for (let p = 0; p < READING_TESTS[t].passages.length; p++) {
      const key = `${READING_TESTS[t].id}_${READING_TESTS[t].passages[p].id}`;
      if (!completedKeys.has(key)) {
        return { testIndex: t, passageIndex: p };
      }
    }
  }
  return { testIndex: 0, passageIndex: 0 };
};

export const ReadingPractice: FC = () => {
  // Load completed passage keys from localStorage
  const [completedKeys, setCompletedKeys] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_PROGRESS_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Current position in the sequence (starts on the next uncompleted passage)
  const [position, setPosition] = useState<ReadingPosition>(() => {
    const initialKeys = (() => {
      try {
        const stored = localStorage.getItem(STORAGE_PROGRESS_KEY);
        return stored ? new Set<string>(JSON.parse(stored)) : new Set<string>();
      } catch {
        return new Set<string>();
      }
    })();
    return findNextReadingPosition(initialKeys);
  });

  const currentTest: ReadingTest = READING_TESTS[position.testIndex] || READING_TESTS[0];
  const activePassage: ReadingPassage = currentTest.passages[position.passageIndex] || currentTest.passages[0];

  // User answers map: { [questionId]: answerString }
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Timer
  const [timeRemaining, setTimeRemaining] = useState<number>(20 * 60); // 20 mins per passage
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<any>(null);

  // Result & Review modal
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showResultsModal, setShowResultsModal] = useState<boolean>(false);

  useEffect(() => {
    if (isTimerRunning && !isSubmitted) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
        setTimeRemaining(prev => (prev > 0 ? prev - 1 : 0));
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

  const handleResetCurrentPassage = () => {
    if (window.confirm('¿Deseas reiniciar este pasaje y borrar tus respuestas actuales?')) {
      setAnswers({});
      setIsSubmitted(false);
      setShowResultsModal(false);
      setTimeRemaining(20 * 60);
      setElapsedSeconds(0);
      setIsTimerRunning(false);
    }
  };

  // Evaluation
  const questions = activePassage.questions;
  let correctCount = 0;
  questions.forEach(q => {
    const userAns = (answers[q.id] || '').trim().toLowerCase();
    const correctAns = q.correctAnswer.trim().toLowerCase();
    if (userAns === correctAns) {
      correctCount++;
    }
  });

  const bandScore = calculateAcademicReadingBand(correctCount, questions.length);

  const handleSubmit = () => {
    const unanswered = questions.filter(q => !answers[q.id]);
    if (unanswered.length > 0) {
      if (!window.confirm(`Tienes ${unanswered.length} preguntas sin responder. ¿Deseas enviar tu examen de todas formas?`)) {
        return;
      }
    }
    setIsSubmitted(true);
    setIsTimerRunning(false);
    setShowResultsModal(true);

    // Record as completed
    const currentKey = `${currentTest.id}_${activePassage.id}`;
    const nextSet = new Set(completedKeys);
    nextSet.add(currentKey);
    setCompletedKeys(nextSet);
    localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(Array.from(nextSet)));
  };

  // Total passage counts
  const totalPassages = READING_TESTS.reduce((acc, t) => acc + t.passages.length, 0);
  const completedCount = completedKeys.size;
  const isAllCompleted = completedCount >= totalPassages;

  // Advance to next passage in order
  const handleAdvanceToNext = () => {
    setShowResultsModal(false);
    setIsSubmitted(false);
    setAnswers({});
    setTimeRemaining(20 * 60);
    setElapsedSeconds(0);
    setIsTimerRunning(false);

    const currentKey = `${currentTest.id}_${activePassage.id}`;
    const updatedKeys = new Set(completedKeys);
    updatedKeys.add(currentKey);

    const nextPos = findNextReadingPosition(updatedKeys);
    setPosition(nextPos);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Progress & Current Sequence Indicator */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-slate-100 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 border border-slate-200">
            <span>Test {position.testIndex + 1} &bull; Pasaje {activePassage.number} de 3</span>
          </div>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
            Progreso: {completedCount} de {totalPassages} pasajes completados
          </span>

          {isAllCompleted && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
              Ciclo completado (practicando de nuevo)
            </span>
          )}
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
            <Clock className="w-4 h-4 text-slate-500" />
            <span
              className={`font-mono font-bold text-base ${
                timeRemaining <= 300 && timeRemaining > 0
                  ? 'text-amber-600 animate-pulse'
                  : timeRemaining === 0
                  ? 'text-rose-600 font-extrabold'
                  : 'text-slate-800'
              }`}
            >
              {formatTime(timeRemaining)}
            </span>
            <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`p-1 rounded-md transition-colors cursor-pointer ${
                  isTimerRunning ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
                title={isTimerRunning ? 'Pausar' : 'Iniciar'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleResetCurrentPassage}
                className="p-1 rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors cursor-pointer"
                title="Reiniciar pasaje"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all cursor-pointer"
            >
              Enviar y Calificar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowResultsModal(true)}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Award className="w-4 h-4" />
                <span>Banda: {bandScore.toFixed(1)}</span>
              </button>
              <button
                onClick={handleAdvanceToNext}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Siguiente ejercicio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Split Exam Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Academic Reading Passage (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="border-b border-slate-100 pb-4 mb-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                TEST {position.testIndex + 1} &bull; READING PASSAGE {activePassage.number}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Highlighter className="w-3.5 h-3.5" />
                <span>Resaltado activo</span>
              </div>
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mt-1">{activePassage.title}</h2>
            {activePassage.subtitle && (
              <p className="text-sm text-slate-600 font-serif italic mt-1">{activePassage.subtitle}</p>
            )}
          </div>

          {/* Paragraphs with labels */}
          <div className="space-y-4 font-serif text-slate-800 text-[15px] leading-relaxed select-text">
            {activePassage.paragraphs.map((p, idx) => (
              <div key={idx} className="flex gap-3 items-start group">
                {p.label && (
                  <span className="shrink-0 w-6 h-6 rounded-md bg-slate-100 group-hover:bg-indigo-100 group-hover:text-indigo-700 font-sans font-bold text-xs flex items-center justify-center text-slate-500 transition-colors mt-0.5">
                    {p.label}
                  </span>
                )}
                <p className="flex-1 text-justify">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Questions & Input forms (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-indigo-600" />
                <span>Preguntas del Pasaje {activePassage.number}</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Respondidas {Object.keys(answers).length} / {questions.length}
              </span>
            </div>

            {/* Questions list */}
            <div className="space-y-6">
              {questions.map(q => {
                const userVal = answers[q.id] || '';
                const isCorrect = isSubmitted && userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();

                return (
                  <div
                    key={q.id}
                    id={`q-box-${q.number}`}
                    className={`p-4 rounded-xl border transition-all ${
                      isSubmitted
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300'
                          : 'bg-rose-50/50 border-rose-300'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    {/* Instructions if specified */}
                    {q.instructions && (
                      <p className="text-xs font-semibold text-indigo-900 bg-indigo-50/70 p-2 rounded-lg mb-3">
                        {q.instructions}
                      </p>
                    )}

                    {/* Question Prompt */}
                    <div className="flex items-start gap-2.5 mb-3">
                      <span className="w-6 h-6 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {q.number}
                      </span>
                      <p className="text-sm font-medium text-slate-900 leading-snug">{q.text}</p>
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
                            className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all border cursor-pointer ${
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
                              className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium border transition-all flex items-start gap-2.5 cursor-pointer ${
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
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Sentence Completion */}
                    {q.type === 'sentence-completion' && (
                      <div className="mt-2">
                        <input
                          type="text"
                          disabled={isSubmitted}
                          value={userVal}
                          onChange={e => handleSelectAnswer(q.id, e.target.value)}
                          placeholder="Escribe la respuesta exacta extraida del texto..."
                          className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-slate-900"
                        />
                      </div>
                    )}

                    {/* Review Feedback Explanation after submit */}
                    {isSubmitted && (
                      <div className="mt-3 pt-3 border-t border-slate-200/80 space-y-1 text-xs">
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
                            Respuesta correcta: <strong className="text-slate-800">{q.correctAnswer}</strong>
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

      {/* Results Modal */}
      {showResultsModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-4">
                <Award className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">Resultados del Examen</h3>
              <p className="text-xs text-slate-500 mt-1">Test {position.testIndex + 1} &bull; Pasaje {activePassage.number}</p>

              <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                  Banda Estimada IELTS Academic
                </div>
                <div className="text-5xl font-black text-indigo-700 font-mono">
                  {bandScore.toFixed(1)}
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">
                  Puntaje: {correctCount} / {questions.length} ({Math.round((correctCount / questions.length) * 100)}%)
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-left bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Preguntas totales:</span>
                  <span className="font-bold text-slate-800">{questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Respuestas correctas:</span>
                  <span className="font-bold text-emerald-600">{correctCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Tiempo empleado:</span>
                  <span className="font-bold text-slate-800">{formatTime(elapsedSeconds)}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={handleAdvanceToNext}
                  className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Avanzar al siguiente ejercicio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="w-full py-2 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Ver respuestas explicadas en pantalla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
