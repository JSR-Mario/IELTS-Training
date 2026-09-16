import { useState } from 'react';
import { Navbar, type TabType } from './components/Navbar';
import { HomePage } from './components/home/HomePage';
import { WritingPractice } from './components/writing/WritingPractice';
import { ReadingPractice } from './components/reading/ReadingPractice';
import { SubmissionsList } from './components/submissions/SubmissionsList';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}
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
            For Writing examiner evaluations, simply ask in Antigravity chat: <span className="text-indigo-400 font-mono">"calificame mi ultimo ensayo"</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
