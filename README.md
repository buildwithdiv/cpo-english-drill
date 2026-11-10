# CPO English Drill

A free, single-file practice trainer for the **SSC CPO Mains (Paper-2) English** exam — topic-wise drills, a balanced full-paper mock, and a vocabulary builder, all matched to the actual SSC CPO pattern. **It works completely offline**: no account, no server, no API key, no internet connection needed.

**Made with ❤️ by Div**

## Getting started

Open `index.html` in any modern browser. That's it — there is nothing to install or build.

## Features

- **11 topic drills (2,300+ handwritten questions, mostly Medium and Hard)** covering the full Paper-2 syllabus: Error Spotting, Cloze Test, Synonym/Antonym, Idioms & Phrases, One-Word Substitution, Sentence Improvement, Para Jumbles, Active/Passive Voice, Direct/Indirect Speech, Spelling Check and Reading Comprehension. Every question has a clear explanation.
- **Timed Test mode** — switch from *Practice* to *⏱ Timed Test* on the Dashboard for exam conditions: a countdown timer (36 seconds per question, like the real paper), **+1 / −0.25 marking**, mark-for-review, a question palette, and auto-submit when time runs out. Each section has a 10-question mini test; the **Full Mock Test** is 50 questions laid out section by section in 30 minutes. The result shows your score, right / wrong / skipped counts, time used and a per-section breakdown.
- **Answer review** — after any test or drill, review every question with your answer, the correct answer and the explanation, filtered by All / Wrong / Skipped / Correct.
- **Weak-area drill** — one tap from the Scorecard starts a drill built only from your weakest sections.
- **Mixed Drill** — a 30-question mock drawn evenly from all 11 sections, so every section is represented every time. Each question is ordered by your level *in its own section*, and the end-of-drill report shows a per-section breakdown.
- **Adaptive difficulty, set high** — every question is tagged Easy / Medium / Hard (over half of the bank is Hard). Everyone starts at Medium: new learners get Medium + Hard questions, learners who score well get Hard ones, and only a learner who is struggling is eased back to Easy + Medium. You can also lock a drill to a single difficulty.
- **No-repeat session engine** — every answered question is logged, and each new session serves unseen questions first, then the least-recently-seen ones.
- **Built-in generators** — Active/Passive Voice, Synonym/Antonym, One-Word Substitution and Idioms also assemble fresh questions on the fly, so these sections keep producing new material:
  - *Voice* is built from verb "frames" that pair each verb only with sensible objects and officials (about 12,700 distinct questions, in both Active→Passive and Passive→Active directions). Passive auxiliaries agree in number with the new subject.
  - Wrong options are screened so none of them can also be a defensible answer.
- **Vocabulary Builder** — 2,600+ exam-relevant words in four levels — Easy, Medium, Hard and Expert — plus a Mixed challenge pool of Hard and Expert words only; pick any level, learn as flashcards or browse and search in a Word List, each with meaning, synonyms, antonyms and a usage example. New words come first; once a level is complete the app revises it in rounds.
- **Vocab Test** — a quiz on words you have already learned, with the meaning hidden until you answer.
- **Scorecard** — accuracy, best score and capability level per section, a "Focus Areas" callout for your weakest topics, your last 10 timed-test scores, and a reset option.
- **Progress is saved as you answer** — leaving a drill midway doesn't lose your progress. Everything is stored locally in your browser (`localStorage`).
- **Keyboard shortcuts** — `1`–`4` or `A`–`D` to answer, `Enter` for the next question. In a timed test: `N` next, `P` previous, `M` mark for review.

## Install as an app (PWA)

When the app is served over **https** (GitHub Pages, Netlify, Cloudflare Pages, ...), it can be installed like a normal app and then works with **no internet**:

- **Android / Chrome:** tap the **📲 Install** button in the header (or the browser menu → *Install app*).
- **iPhone / iPad (Safari):** tap **Share → Add to Home Screen** (the 📲 Install button shows these steps).
- **Desktop Chrome / Edge:** use the install icon in the address bar.

How it works: `manifest.webmanifest` describes the app, `sw.js` (a service worker) caches the page and serves it instantly, even offline, while quietly refreshing it in the background, and `icons/` holds the app icons. Opening `index.html` straight from a folder still works exactly as before (without install). When you ship a new version, simply upload the new files — returning users get it on their next open. Change `CACHE_VERSION` in `sw.js` only if you want old caches cleared.

## Tech

Plain HTML, CSS and vanilla JavaScript — the whole app is the single `index.html`, plus a small manifest, service worker and icons for installing it. No frameworks, no build tools, no external requests (system fonts only).

Question data lives in the `<script>` section of `index.html`:

| Data | Where | Notes |
| --- | --- | --- |
| Reviewed questions | `Q` | Each item: `q`, `opts` (4), `a` (index of the answer), `exp`, optional `d` (Easy / Medium / Hard) |
| Voice generator | `GEN_VOICE_FRAMES` | Verb forms plus the objects each verb can take |
| Synonym/Antonym, One-Word, Idioms generators | `SYNANT_BANK`, `ONEWORD_BANK`, `IDIOMS_BANK` | Related items are listed in the matching `*_GROUPS` so they are never offered as wrong options for each other |
| Vocabulary | `VOCAB` | `[word, level, meaning, synonyms, antonyms, example]` |
