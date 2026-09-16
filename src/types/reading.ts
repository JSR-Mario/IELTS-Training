export type QuestionType =
  | 'true-false-not-given'
  | 'yes-no-not-given'
  | 'multiple-choice'
  | 'matching-headings'
  | 'sentence-completion';

export interface ReadingQuestion {
  id: string;
  number: number;
  type: QuestionType;
  instructions?: string;
  text: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  passageAnchor?: string;
}

export interface ReadingPassage {
  id: string;
  number: 1 | 2 | 3;
  title: string;
  subtitle?: string;
  paragraphs: {
    label?: string; // 'A', 'B', 'C', etc.
    text: string;
  }[];
  questions: ReadingQuestion[];
}

export interface ReadingTest {
  id: string;
  title: string;
  description: string;
  passages: ReadingPassage[];
}

export interface ReadingResult {
  testId: string;
  passageIndex: number | 'all';
  score: number;
  total: number;
  bandScore: number;
  answers: Record<string, string>;
  submittedAt: string;
  timeSpentSeconds: number;
}
