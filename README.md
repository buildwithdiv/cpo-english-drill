# CPO English Drill

A free, single-file practice trainer for the **SSC CPO Tier-2 (Paper-2) English** exam — built for aspirants who want everything in one place: topic-wise drills, a full mixed mock, and a daily vocabulary builder, all matched to the actual SSC CPO pattern.

**Made with ❤️ by Div**

## Features

- **11 topic drills** covering the full Paper-2 syllabus: Error Spotting, Cloze Test, Synonym/Antonym, Idioms & Phrases, One-Word Substitution, Sentence Improvement, Para Jumbles, Active/Passive Voice, Direct/Indirect Speech, Spelling Check, and Reading Comprehension — each question comes with a clear explanation.
- **Mixed Drill** — a shuffled, full-paper-style mock pulling from every topic at once.
- **Adaptive difficulty** — every question is tagged Easy/Medium/Hard. The app tracks accuracy per topic and reorders upcoming questions to match the learner's level (Beginner/Intermediate/Advanced) — weaker learners see easier questions first, stronger ones get pushed harder, faster.
- **No-repeat session engine** — inspired by how Testbook structures huge banks into fresh chapter-wise sets, the app tracks how many times (and how recently) each question has been served, and every new session prioritises unseen questions first, then the least-recently-seen ones.
- **Procedural question generators (no internet needed)** — Active/Passive Voice, Synonym/Antonym, One-Word Substitution, and Idioms don't rely on a fixed list at all: each is assembled on the fly from a bank of building blocks (15 subjects × 15 objects × 20 verbs × 6 tenses for Voice alone = 27,000+ distinct sentences), with freshly randomised wrong options every time — so these sections effectively never repeat, with or without internet.
- **Optional AI mode** — paste a free Google Gemini API key (Duty Board → "AI Questions") and every topic drill instead generates genuinely unlimited, fresh CPO Tier-2-style questions on demand. No key needed for the app to work — it's a bonus layer on top of the built-in bank, and the key is stored only in your own browser, never sent anywhere but directly to Google.
- **Vocab Chowki** — a genuinely new word each time, fetched live from the internet (Free Dictionary API + Datamuse), filterable by Easy/Medium/Hard/Mixed difficulty, with meaning, synonym, antonym, and a usage example. Falls back to a built-in offline word bank automatically if there's no internet.
- **Vocab Test** — a separate Testbook-style quiz mode that tests previously learned words (never the word currently on screen), cycling through different words each round with the meaning hidden until answered.
- **Scorecard** — a progress report showing accuracy and capability level per section, plus a "Focus Areas" callout highlighting exactly which topics need the most work.
- **Progress tracking** — everything above is saved locally in the browser (no sign-up, no server)

## Tech

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools. Data (questions/vocab) lives directly in `index.html` and can be extended by editing the `Q` and `VOCAB` objects in the `<script>` section.
# cpo-english-drill
