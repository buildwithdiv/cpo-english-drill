# Setup Guide — CPO English Drill

## 1. Unzip

Unzip `cpo-english-drill.zip` anywhere on your computer (Desktop, Documents, wherever). You'll get a folder called `cpo-english-drill` with these files:

```
cpo-english-drill/
├── index.html      → the actual app (everything is in this one file)
├── README.md        → project description (shows on GitHub)
├── SETUP.md          → this guide
└── .gitignore
```

## 2. Open in VS Code

- Open VS Code.
- `File → Open Folder` → select the `cpo-english-drill` folder.
- Done — you'll see all files in the sidebar.

(Drag-and-drop also works: just drag the unzipped folder onto the VS Code icon/window.)

## 3. Preview it locally

Easiest way — just double-click `index.html`, it opens in your default browser. Nothing else needed.

For a live-reloading preview while you edit:
1. In VS Code, go to Extensions (left sidebar, the square icon) and install **"Live Server"** by Ritwick Dey.
2. Right-click `index.html` in the sidebar → **"Open with Live Server"**.
3. It opens in your browser and auto-refreshes whenever you save changes.

## 4. Push to GitHub

**Option A — VS Code's built-in Git (no terminal needed)**
1. Click the **Source Control** icon in the left sidebar (looks like a branching line).
2. Click **"Initialize Repository"**.
3. Type a commit message (e.g. "Initial commit") and click the ✓ **Commit** button.
4. Click **"Publish Branch"** (top of the Source Control panel) — VS Code will ask you to sign in to GitHub and create the repo for you. Choose public or private.
5. That's it — your code is now on GitHub.

**Option B — Terminal**
Open a terminal inside VS Code (`Terminal → New Terminal`), then run:

```bash
git init
git add .
git commit -m "Initial commit - CPO English Drill"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
(Create an empty repo on github.com first, and swap in your username/repo name above.)

## 5. Host it for free (optional, so you can just send people a link)

1. On your GitHub repo, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source: Deploy from a branch**.
3. Set **Branch: main**, folder: **/(root)** → Save.
4. Wait a minute, then your app will be live at:
   `https://<your-username>.github.io/<repo-name>/`

Anyone with that link can use the app directly — no download needed for them.

## Editing content later

All the questions and vocabulary words live inside `index.html`, inside the `<script>` section, in two places:
- `const Q = { ... }` — all topic-wise questions.
- `const VOCAB = [ ... ]` — all vocab words.

Just follow the existing pattern (copy an existing question/word object, change the text) to add more.
