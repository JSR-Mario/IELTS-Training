import { useState, useEffect, useRef, type FC } from 'react';
import { TASK_1_PROMPTS, TASK_2_PROMPTS } from '../../data/writingPrompts';
import type { WritingPrompt, TaskType } from '../../types/writing';
import { countWords, formatTime } from '../../utils/ieltsScoring';
import {
  Play,
  Pause,
  RotateCcw,
  Save,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  Lightbulb,
  Copy,
  Check,
  ChevronDown
} from 'lucide-react';

export const WritingPractice: FC = () => {
  const [taskType, setTaskType] = useState<TaskType>('task2');
  const promptsList = taskType === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;
  const [selectedPrompt, setSelectedPrompt] = useState<WritingPrompt>(promptsList[0]);

  // Content & local storage autosave key
  const storageKey = `ielts_draft_${selectedPrompt.id}`;
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem(storageKey) || '';
  });

  // Timer states
  const [timerMode, setTimerMode] = useState<'countdown' | 'stopwatch'>('countdown');
  const [initialSeconds, setInitialSeconds] = useState<number>(selectedPrompt.timeLimitMinutes * 60);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(initialSeconds);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Tips visibility
  const [showTips, setShowTips] = useState<boolean>(false);

  // Submission states
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [savedResult, setSavedResult] = useState<{
    baseName: string;
    jsonFile: string;
    mdFile: string;
  } | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  const timerRef = useRef<any>(null);

  // When prompt changes, reset timer and load draft
  useEffect(() => {
    const draft = localStorage.getItem(`ielts_draft_${selectedPrompt.id}`) || '';
    setContent(draft);
    const secs = selectedPrompt.timeLimitMinutes * 60;
    setInitialSeconds(secs);
    setSecondsRemaining(secs);
    setElapsedSeconds(0);
    setIsRunning(false);
  }, [selectedPrompt]);

  // Autosave content to localStorage
  useEffect(() => {
    localStorage.setItem(`ielts_draft_${selectedPrompt.id}`, content);
  }, [content, selectedPrompt.id]);

  // Timer interval
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
        setSecondsRemaining(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const wordCount = countWords(content);
  const isTargetMet = wordCount >= selectedPrompt.minWords;
  const progressPercent = Math.min(100, Math.round((wordCount / selectedPrompt.minWords) * 100));

  const handleTaskTypeChange = (type: TaskType) => {
    setTaskType(type);
    const newPrompts = type === 'task1' ? TASK_1_PROMPTS : TASK_2_PROMPTS;
    setSelectedPrompt(newPrompts[0]);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setSecondsRemaining(initialSeconds);
    setElapsedSeconds(0);
  };

  const handleClearDraft = () => {
    if (window.confirm('Are you sure you want to clear your current text?')) {
      setContent('');
      localStorage.removeItem(`ielts_draft_${selectedPrompt.id}`);
    }
  };

  const handleSaveSubmission = async () => {
    if (!content.trim()) {
      alert('Please write your response before submitting.');
      return;
    }

    setIsSaving(true);
    try {
      const response = await fetch('/api/save-writing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskType,
          promptId: selectedPrompt.id,
          promptTitle: selectedPrompt.title,
          promptText: selectedPrompt.prompt,
          content,
          wordCount,
          timeSpentSeconds: elapsedSeconds,
          targetWords: selectedPrompt.minWords
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSavedResult(data);
        setIsRunning(false);
      } else {
        alert(`Failed to save: ${data.error || 'Unknown error'}`);
      }
    } catch (err: any) {
      alert(`Network error saving submission: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const examinerChatPrompt = savedResult
    ? `Hola Antigravity, por favor evalúa mi ensayo de Writing guardado en submissions/${savedResult.baseName}.md como examinador oficial del IELTS. Desglosa mis bandas (1.0 a 9.0) en Task Achievement/Response, Coherence & Cohesion, Lexical Resource y Grammatical Range & Accuracy, y señala correcciones específicas.`
    : '';

  const handleCopyChatPrompt = () => {
    navigator.clipboard.writeText(examinerChatPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        {/* Task Selector */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleTaskTypeChange('task1')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              taskType === 'task1'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Task 1 (Report • 150w)
          </button>
          <button
            onClick={() => handleTaskTypeChange('task2')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
              taskType === 'task2'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Task 2 (Essay • 250w)
          </button>

          <div className="relative ml-2">
            <select
              value={selectedPrompt.id}
              onChange={e => {
                const found = promptsList.find(p => p.id === e.target.value);
                if (found) setSelectedPrompt(found);
              }}
              className="appearance-none bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium cursor-pointer"
            >
              {promptsList.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Live Timer and Word Count Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Timer Display */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
            <button
              type="button"
              onClick={() => setTimerMode(prev => prev === 'countdown' ? 'stopwatch' : 'countdown')}
              className="text-slate-500 hover:text-indigo-600 transition-colors"
              title={`Mode: ${timerMode === 'countdown' ? 'Countdown (click for Stopwatch)' : 'Stopwatch (click for Countdown)'}`}
            >
              <Clock className="w-4 h-4" />
            </button>
            <span
              className={`font-mono font-bold text-base ${
                timerMode === 'countdown' && secondsRemaining <= 300 && secondsRemaining > 0
                  ? 'text-amber-600 animate-pulse'
                  : timerMode === 'countdown' && secondsRemaining === 0
                  ? 'text-rose-600 font-extrabold'
                  : 'text-slate-800'
              }`}
            >
              {timerMode === 'countdown' ? formatTime(secondsRemaining) : formatTime(elapsedSeconds)}
            </span>
            <div className="flex items-center gap-1 border-l border-slate-200 pl-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`p-1 rounded-md transition-colors ${
                  isRunning ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
                title={isRunning ? 'Pause Timer' : 'Start Timer'}
              >
                {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={handleResetTimer}
                className="p-1 rounded-md bg-slate-200 text-slate-600 hover:bg-slate-300 transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Word Count Badge */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="flex items-center gap-1.5 justify-end">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Words:</span>
                <span
                  className={`font-mono font-bold text-base ${
                    isTargetMet ? 'text-emerald-600' : 'text-amber-600'
                  }`}
                >
                  {wordCount}
                </span>
                <span className="text-xs text-slate-400 font-medium">/ {selectedPrompt.minWords} min</span>
              </div>
              <div className="w-24 bg-slate-200 rounded-full h-1.5 overflow-hidden mt-0.5">
                <div
                  className={`h-full transition-all duration-300 ${
                    isTargetMet ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Save & Finish Button */}
          <button
            onClick={handleSaveSubmission}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Saving...' : 'Finish & Save'}</span>
          </button>
        </div>
      </div>

      {/* Split Exam Work Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Prompt & Visual Materials (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-5 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                {selectedPrompt.category}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Recommended: {selectedPrompt.timeLimitMinutes} mins
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-2">{selectedPrompt.title}</h2>
          </div>

          {/* Prompt Description */}
          <div className="bg-slate-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
            <p className="text-slate-800 text-sm whitespace-pre-line leading-relaxed font-serif">
              {selectedPrompt.prompt}
            </p>
          </div>

          {/* Task 1 SVG Graphic (if available) */}
          {selectedPrompt.chartSvg && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Visual Source Data</h3>
              <div
                dangerouslySetInnerHTML={{ __html: selectedPrompt.chartSvg }}
                className="overflow-hidden rounded-xl shadow-inner"
              />
              {selectedPrompt.chartDescription && (
                <p className="text-xs text-slate-500 italic mt-1.5">{selectedPrompt.chartDescription}</p>
              )}
            </div>
          )}

          {/* Tips Section */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setShowTips(!showTips)}
              className="w-full flex items-center justify-between p-3.5 bg-slate-50 hover:bg-slate-100 text-left transition-colors"
            >
              <div className="flex items-center gap-2 text-indigo-700 font-semibold text-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Band 8+ Examiner Tips</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 transition-transform ${showTips ? 'rotate-180' : ''}`}
              />
            </button>
            {showTips && (
              <div className="p-4 bg-indigo-50/50 border-t border-slate-200 space-y-2 text-xs text-slate-700">
                {selectedPrompt.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <p>{tip}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Writing Area (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[600px]">
          <div className="bg-slate-100/80 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Writing Response</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">Autosaved locally</span>
              <button
                onClick={handleClearDraft}
                className="text-xs text-slate-500 hover:text-rose-600 transition-colors"
              >
                Clear draft
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 sm:p-6 flex flex-col">
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Type your response here following official IELTS academic standards... Make sure to organize your thoughts into clear paragraphs with an introduction, overview/body, and conclusion."
              className="w-full flex-1 min-h-[500px] resize-y p-4 bg-white border border-slate-200 rounded-xl text-slate-900 text-base leading-relaxed font-serif focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-slate-400"
              spellCheck={true}
            />
          </div>

          <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
            <div>
              Status:{' '}
              {isTargetMet ? (
                <span className="text-emerald-600 font-semibold inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Target requirement met ({wordCount} words)
                </span>
              ) : (
                <span className="text-amber-600 font-semibold inline-flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {selectedPrompt.minWords - wordCount} words needed to reach minimum
                </span>
              )}
            </div>
            <div>Elapsed Time: {formatTime(elapsedSeconds)}</div>
          </div>
        </div>
      </div>

      {/* Submission Success Modal */}
      {savedResult && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">Session Saved Successfully!</h3>
            <p className="text-sm text-slate-600 mt-1">
              Your essay has been written to the repository on your disk:
            </p>

            <div className="bg-slate-100 rounded-xl p-3 my-4 border border-slate-200 font-mono text-xs text-slate-800 select-all">
              {savedResult.mdFile}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6 text-center">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Total Words</span>
                <span className="text-lg font-bold text-slate-800">{wordCount}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 block">Time Spent</span>
                <span className="text-lg font-bold text-slate-800">{formatTime(elapsedSeconds)}</span>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-900 mb-1.5 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-indigo-600" /> Antigravity Examiner Evaluation
              </h4>
              <p className="text-xs text-indigo-800 mb-3 leading-relaxed">
                Copy the prompt below and send it in our chat. I will review your submission file, evaluate your score across the 4 official IELTS criteria, and point out areas for improvement:
              </p>
              <div className="bg-white border border-indigo-200 rounded-lg p-2.5 text-xs text-slate-700 font-mono leading-relaxed mb-3">
                {examinerChatPrompt}
              </div>
              <button
                onClick={handleCopyChatPrompt}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                {copiedPrompt ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPrompt ? 'Copied to Clipboard!' : 'Copy Prompt to Ask Antigravity'}</span>
              </button>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSavedResult(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
              >
                Close & Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
