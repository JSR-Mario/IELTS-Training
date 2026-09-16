import type { FC } from 'react';
import { Home, Headphones, BookOpen, PenTool, History, Award, Layers, ExternalLink } from 'lucide-react';

export type TabType = 'home' | 'full-ielts' | 'reading' | 'writing' | 'submissions';

interface NavbarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Navbar: FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              IELTS Academic Prep
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
              Band 9 Practice
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => onSelectTab('home')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => onSelectTab('full-ielts')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'full-ielts'
                ? 'bg-gradient-to-r from-amber-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30'
                : 'text-amber-300 hover:text-white hover:bg-amber-950/40 border border-amber-500/30'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-400" />
            <span>Full IELTS</span>
          </button>

          <a
            href="https://practicepteonline.com/listening-ielts-tests/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/70 transition-all cursor-pointer"
            title="Abrir Tests Oficiales de Listening en PracticePTE (nueva pestaña)"
          >
            <Headphones className="w-4 h-4 text-sky-400" />
            <span>Listening</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <button
            onClick={() => onSelectTab('reading')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'reading'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Reading</span>
          </button>

          <button
            onClick={() => onSelectTab('writing')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'writing'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <PenTool className="w-4 h-4" />
            <span>Writing</span>
          </button>

          <button
            onClick={() => onSelectTab('submissions')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'submissions'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/70'
            }`}
          >
            <History className="w-4 h-4" />
            <span>Submissions</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
