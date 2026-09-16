/**
 * Official IELTS Academic Reading Raw Score to Band Score conversion
 */
export function calculateAcademicReadingBand(rawScore: number, totalQuestions: number = 40): number {
  if (totalQuestions <= 0) return 1.0;

  // If taking a partial test (e.g., 1 passage with 13 questions), normalize to 40
  const normalizedScore = totalQuestions === 40
    ? rawScore
    : Math.round((rawScore / totalQuestions) * 40);

  if (normalizedScore >= 39) return 9.0;
  if (normalizedScore >= 37) return 8.5;
  if (normalizedScore >= 35) return 8.0;
  if (normalizedScore >= 33) return 7.5;
  if (normalizedScore >= 30) return 7.0;
  if (normalizedScore >= 27) return 6.5;
  if (normalizedScore >= 23) return 6.0;
  if (normalizedScore >= 19) return 5.5;
  if (normalizedScore >= 15) return 5.0;
  if (normalizedScore >= 13) return 4.5;
  if (normalizedScore >= 10) return 4.0;
  if (normalizedScore >= 8) return 3.5;
  if (normalizedScore >= 6) return 3.0;
  if (normalizedScore >= 4) return 2.5;
  return 2.0;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}
