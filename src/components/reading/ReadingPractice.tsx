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
  Pause
} from 'lucide-react';

export const ReadingPractice: FC = () => {
  const currentTest: ReadingTest = READING_TESTS[0];
  const [selectedPassageIndex, setSelectedPassageIndex] = useState<number>(0);
  const activePassage: ReadingPassage = currentTest.passages[selectedPassageIndex];

  // User answers map: { [questionId]: answerString }
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Timer
  const [timeRemaining, setTimeRemaining] = useState<number>(20 * 60); // 20 mins per passage
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);
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

  const handleResetPassage = () => {
    if (window.confirm('Reset this passage and clear all your answers?')) {
      setAnswers({});
      setIsSubmitted(false);
      setShowResultsModal(false);
      setTimeRemaining(20 * 60);
      setElapsedSeconds(0);
      setIsTimerRunning(true);
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
      if (!window.confirm(`You have ${unanswered.length} unanswered questions. Are you sure you want to submit?`)) {
        return;
      }
    }
    setIsSubmitted(true);
    setIsTimerRunning(false);
    setShowResultsModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Header Controls */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Passage Switcher */}
        <div className="flex items-center gap-2">
          {currentTest.passages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedPassageIndex(idx);
                setTimeRemaining(20 * 60);
                setIsSubmitted(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                selectedPassageIndex === idx
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Passage {p.number} ({p.questions.length} Qs)
            </button>
          ))}
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
                className={`p-1 rounded-md transition-colors ${
                  isTimerRunning ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
                title={isTimerRunning ? 'Pause' : 'Play'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleResetPassage}
                className="p-1 rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                title="Reset Passage"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all"
            >
              Submit & Check
            </button>
          ) : (
            <button
              onClick={() => setShowResultsModal(true)}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>Score: Band {bandScore}</span>
            </button>
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
                READING PASSAGE {activePassage.number}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Highlighter className="w-3.5 h-3.5" />
                <span>Text highlighter enabled</span>
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
                <span>Questions for Passage {activePassage.number}</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Answered {Object.keys(answers).length} / {questions.length}
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
                            className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all border ${
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
                              className={`w-full text-left p-3 rounded-xl text-xs sm:text-sm font-medium border transition-all flex items-start gap-2.5 ${
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
                          placeholder="Type your exact answer from passage..."
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
                              <CheckCircle2 className="w-3.5 h-3.5" /> Correct!
                            </span>
                          ) : (
                            <span className="text-rose-700 font-bold flex items-center gap-1">
                              <XCircle className="w-3.5 h-3.5" /> Incorrect
                            </span>
                          )}
                          <span className="text-slate-500 font-mono">
                            Correct: <strong className="text-slate-800">{q.correctAnswer}</strong>
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed mt-1">
                          <strong className="text-indigo-900">Explanation:</strong> {q.explanation}
                        </p>
                        {q.passageAnchor && (
                          <span className="inline-block text-[11px] font-semibold text-slate-400">
                            Location: {q.passageAnchor}
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

              <h3 className="text-2xl font-bold text-slate-900">Reading Test Results</h3>
              <p className="text-xs text-slate-500 mt-1">Passage {activePassage.number} Evaluation</p>

              <div className="my-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
                  Estimated IELTS Academic Band
                </div>
                <div className="text-5xl font-black text-indigo-700 font-mono">
                  {bandScore.toFixed(1)}
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">
                  Raw Score: {correctCount} / {questions.length} ({Math.round((correctCount / questions.length) * 100)}%)
                </div>
              </div>

              <div className="space-y-2 mb-6 text-xs text-left bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Questions:</span>
                  <span className="font-bold text-slate-800">{questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Correct Answers:</span>
                  <span className="font-bold text-emerald-600">{correctCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Time Taken:</span>
                  <span className="font-bold text-slate-800">{formatTime(elapsedSeconds)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md transition-colors"
                >
                  Review Answers & Explanations
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
