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

    </div>
  );
}

export default App;
