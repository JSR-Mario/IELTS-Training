# IELTS Academic Training Hub

A lightweight, zero-friction, 100% local practice platform specifically designed for IELTS Academic (focusing on Writing and Reading).

Built to simulate real Cambridge IELTS exam conditions with automated reading scoring, split-screen viewing, live word counters, and examiner evaluation workflows with Antigravity.

---

## Quick Start

Ensure you have Node.js (v18+) installed.

```bash
# 1. Enter the project folder
cd /mnt/raid/Documents/Other/IELTS-Training

# 2. Start the local practice app
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## Stopping the Application

To stop the server:

1. **In the terminal**:
   - Press `Ctrl + C` in the terminal window where `npm run dev` is running.

2. **If running in the background or if the port remains in use**:
   - Free up port 5173:
     ```bash
     fuser -k 5173/tcp
     ```
     or:
     ```bash
     lsof -ti :5173 | xargs kill -9
     ```
   - Or terminate any lingering Vite process:
     ```bash
     pkill -f "vite"
     ```

---

## Writing Simulator

- **Task 1 & Task 2 Support**:
  - **Task 1 (Report)**: 150-word minimum, 20-minute timer. Includes visual SVG charts (bar charts, line graphs, process diagrams) and examiner tips.
  - **Task 2 (Essay)**: 250-word minimum, 40-minute timer. Covers standard IELTS essay genres (Opinion, Discussion, Problem & Solution, Advantages/Disadvantages).
- **Features**:
  - Distraction-free exam writing space.
  - Dynamic real-time word counter with target indicators.
  - Configurable countdown timer or stopwatch.
  - Auto-draft saving to browser storage to prevent loss of progress.
  - **One-click "Finish & Save"**: automatically writes your response to `submissions/writing-<timestamp>-<task>.md` and `.json`.

### Examiner Evaluation with Antigravity
Whenever you complete an essay, no external API keys or tokens are needed. In this chat, simply write:

> "Califícame mi último ensayo de Writing en submissions/"

Antigravity will inspect your file and provide an official IELTS Examiner report:
1. **Task Achievement / Task Response (Band 1.0-9.0)**
2. **Coherence & Cohesion (Band 1.0-9.0)**
3. **Lexical Resource (Band 1.0-9.0)**
4. **Grammatical Range & Accuracy (Band 1.0-9.0)**
5. Line-by-line grammar corrections and high-band lexical upgrades.

---

## Reading Simulator

- **Cambridge Academic Format**:
  - Authentic 3-passage academic texts with paragraph identifiers (A, B, C...).
  - Computer-delivered question types:
    - True / False / Not Given & Yes / No / Not Given
    - Multiple Choice
    - Matching Headings
    - Sentence / Summary Completion
- **Features**:
  - Split-screen view: Passage on the left, interactive questions on the right.
  - Real-time question tracker (unanswered vs answered).
  - Countdown timer (20 minutes per passage / 60 minutes full).
  - **Instant Scoring**: Converts raw marks to the official IELTS Academic Band (e.g. 35/40 = Band 8.0, 30/40 = Band 7.0).
  - **Detailed Explanations**: Review mode reveals exact passage locations and reasons why each option is correct or false.

---

## Project Structure

```
├── data/                    # Question banks & mock tests
│   ├── writingPrompts.ts    # Task 1 & Task 2 prompts with SVG charts
│   └── readingTests.ts      # Authentic Academic passages & question sets
├── submissions/             # Automatically saved user writing essays (.md & .json)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── writing/WritingPractice.tsx
│   │   ├── reading/ReadingPractice.tsx
│   │   └── submissions/SubmissionsList.tsx
│   ├── types/               # TypeScript models for IELTS data
│   ├── utils/               # Band score calculation and time utilities
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts           # Bundler config + built-in local filesystem save API
└── package.json
```

---

## Adding More Prompts & Tests

To add more Cambridge or official IELTS tests:
- **Writing prompts**: Open `src/data/writingPrompts.ts` and add entries to `TASK_1_PROMPTS` or `TASK_2_PROMPTS`.
- **Reading tests**: Open `src/data/readingTests.ts` and append new passages or tests.

---

## Tech Stack

- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **Vite 8** (with integrated local file-saving middleware)
- **Lucide Icons**
