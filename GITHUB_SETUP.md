# GitHub Upload — Step-by-Step (DevOps)

Use these **exact** commands in order. Run from the project root: `c:\Users\AEEN.IQ\Desktop\tabeby landing`

---

## 1. Ensure clean state (no heavy/generated files tracked)

```powershell
cd "c:\Users\AEEN.IQ\Desktop\tabeby landing"
```

Remove build/cache so the first commit only contains source (`.gitignore` already excludes these; this step is for safety if you had run git before):

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
```

---

## 2. Initialize Git and set default branch to `main`

```powershell
git init -b main
```

If you already ran `git init` earlier (no `-b main`), set default branch to `main`:

```powershell
git branch -M main
```

---

## 3. Configure user (if not set globally)

```powershell
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

(Omit if already set with `git config --global user.name` / `user.email`.)

---

## 4. Stage only what .gitignore allows (clean index)

```powershell
git add .
git status
```

Check that **node_modules**, **.next**, and **.env\*.local** do **not** appear. If they do, fix `.gitignore` and run:

```powershell
git reset
git add .
git status
```

---

## 5. First commit

```powershell
git commit -m "Initial commit: Tabeby landing (Next.js 14, TS, Tailwind)"
```

---

## 6. Create repo on GitHub and add remote

- On GitHub: **New repository** → name (e.g. `tabeby-landing`) → **do not** add README/license/.gitignore.
- Copy the repo URL (HTTPS or SSH), then:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/tabeby-landing.git
```

(Replace with your URL; SSH example: `git@github.com:YOUR_USERNAME/tabeby-landing.git`.)

---

## 7. Push to GitHub (main)

```powershell
git push -u origin main
```

---

## 8. If push is rejected (e.g. “upstream” or “non-fast-forward”)

**Rejection: “failed to push some refs” / “upstream” / “non-fast-forward”**

If the GitHub repo already had a first commit (e.g. README), pull and then push:

```powershell
git pull origin main --rebase
git push -u origin main
```

If you **must** overwrite the remote (use only on a new/throwaway repo):

```powershell
git push -u origin main --force
```

**Rejection: “large files” or “file exceeds 100 MB”**

- Find the large file: e.g. something under `node_modules` or `.next` was committed.
- Remove it from the index and from the last commit:

```powershell
git reset HEAD~1 --soft
git reset node_modules
git reset .next
git add .
git commit -m "Initial commit: Tabeby landing (Next.js 14, TS, Tailwind)"
git push -u origin main
```

If the large file is already in history, use:

```powershell
git filter-branch --force --index-filter "git rm -rf --cached --ignore-unmatch PATH_TO_LARGE_FILE_OR_FOLDER" --prune-empty main
```

Or use **BFG Repo-Cleaner** / **git filter-repo** for big cleanups.

---

## 9. Verify after push

- On GitHub: repo **Code** tab → default branch is **main**.
- Repo size: **Settings → General** (scroll) or use a clone; keep under **1 GB** (ideally much less). This project should be well under that if `node_modules` and `.next` are not tracked.

---

## Quick reference

| Step | Command |
|------|--------|
| Go to project | `cd "c:\Users\AEEN.IQ\Desktop\tabeby landing"` |
| Init + main | `git init -b main` |
| Stage | `git add .` |
| Commit | `git commit -m "Initial commit: Tabeby landing (Next.js 14, TS, Tailwind)"` |
| Remote | `git remote add origin <YOUR_REPO_URL>` |
| Push | `git push -u origin main` |
| Force push (overwrite remote) | `git push -u origin main --force` |
