import { useState, useEffect, type FC } from 'react';
import type { WritingSubmission } from '../../types/writing';
import { formatTime } from '../../utils/ieltsScoring';
import {
  FileText,
  Clock,
  Calendar,
  Check,
  RotateCcw,
  ChevronDown,
  Sparkles
} from 'lucide-react';

export const SubmissionsList: FC = () => {
  const [submissions, setSubmissions] = useState<WritingSubmission[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/submissions');
      const data = await res.json();
      if (data.submissions) {
        setSubmissions(data.submissions);
      }
    } catch (err) {
      console.error('Error fetching submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleCopyPrompt = (sub: WritingSubmission, id: string) => {
    const fileName = sub.baseName ? `${sub.baseName}.md` : 'my latest essay';
    const text = `Hola Antigravity, por favor califícame mi ensayo de Writing guardado en submissions/${fileName} como examinador oficial del IELTS. Desglosa mis bandas (1.0 a 9.0) en Task Achievement/Response, Coherence & Cohesion, Lexical Resource y Grammatical Range & Accuracy, y señala correcciones específicas.`;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Writing Practice History</h2>
          <p className="text-sm text-slate-500 mt-1">
            All your submitted essays stored locally in <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs text-slate-700">submissions/</code>
          </p>
        </div>
        <button
          onClick={fetchSubmissions}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Refresh</span>
        </button>
      </div>

      {loading ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-500">Loading stored submissions...</p>
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">No submissions found yet</h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1 mb-4">
            Go to the Writing Simulator tab, choose a Task 1 or Task 2 prompt, and click "Finish & Save" to store your practice essays.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((sub, index) => {
            const subId = sub.baseName || `sub-${index}`;
            const isExpanded = expandedId === subId;

            return (
              <div
                key={subId}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:border-slate-300"
              >
                <div className="p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          sub.taskType === 'task1'
                            ? 'bg-blue-50 text-blue-700 border border-blue-100'
                            : 'bg-purple-50 text-purple-700 border border-purple-100'
                        }`}
                      >
                        {sub.taskType === 'task1' ? 'Task 1 (Report)' : 'Task 2 (Essay)'}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : 'Recent'}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{sub.promptTitle || 'Untitled Session'}</h3>
                  </div>

                  {/* Stats and Action Buttons */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-800 block font-mono">
                        {sub.wordCount} words
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 justify-end font-mono">
                        <Clock className="w-3 h-3" />
                        {formatTime(sub.timeSpentSeconds || 0)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(sub, subId)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-semibold transition-colors"
                      title="Copy examiner evaluation prompt for Antigravity chat"
                    >
                      {copiedId === subId ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Ask Review</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : subId)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Content Preview */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 space-y-4 text-xs sm:text-sm animate-in fade-in duration-150">
                    <div>
                      <h4 className="font-bold text-slate-700 uppercase tracking-wider text-xs mb-1">
                        Prompt
                      </h4>
                      <p className="bg-white p-3 rounded-xl border border-slate-200 font-serif text-slate-800 leading-relaxed">
                        {sub.promptText}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-700 uppercase tracking-wider text-xs mb-1">
                        Your Response ({sub.wordCount} words)
                      </h4>
                      <div className="bg-white p-4 rounded-xl border border-slate-200 font-serif text-slate-900 leading-relaxed whitespace-pre-wrap">
                        {sub.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
