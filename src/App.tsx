import { useState } from 'react';
import { Navbar, type TabType } from './components/Navbar';
import { HomePage } from './components/home/HomePage';
import { FullIeltsPractice } from './components/full-ielts/FullIeltsPractice';
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
        {activeTab === 'full-ielts' && <FullIeltsPractice onNavigate={setActiveTab} />}
        {activeTab === 'reading' && <ReadingPractice />}
        {activeTab === 'writing' && <WritingPractice />}
        {activeTab === 'submissions' && <SubmissionsList />}
      </main>

    </div>
  );
}

export default App;
