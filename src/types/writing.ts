export type TaskType = 'task1' | 'task2';

export interface WritingPrompt {
  id: string;
  type: TaskType;
  title: string;
  category: string;
  prompt: string;
  minWords: number;
  timeLimitMinutes: number;
  chartDescription?: string;
  chartSvg?: string;
  tips?: string[];
}

export interface WritingSubmission {
  taskType: TaskType;
  promptId: string;
  promptTitle: string;
  promptText: string;
  content: string;
  wordCount: number;
  timeSpentSeconds: number;
  targetWords: number;
  createdAt?: string;
  baseName?: string;
}
