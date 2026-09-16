import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { WritingPractice } from './components/writing/WritingPractice';
import { ReadingPractice } from './components/reading/ReadingPractice';
import { SubmissionsList } from './components/submissions/SubmissionsList';

export function App() {
  const [activeTab, setActiveTab] = useState<'writing' | 'reading' | 'submissions'>('writing');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'writing' && <WritingPractice />}
        {activeTab === 'reading' && <ReadingPractice />}
        {activeTab === 'submissions' && <SubmissionsList />}
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            IELTS Academic Training Hub &bull; 100% Local &bull; Cambridge Format Simulation
          </p>
          <p className="text-slate-400">
            For Writing examiner evaluations, simply ask in Antigravity chat: <span className="text-indigo-400 font-mono">"califícame mi último ensayo"</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
