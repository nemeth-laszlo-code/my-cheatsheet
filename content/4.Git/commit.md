---
title: Git commit
description: Git commit
---





# Git Commitok 
## Változások Rögzítése és Történet Kezelése

Ez az átfogó dokumentum a leggyakrabban használt **Git parancsokat** tartalmazza, amelyek a változások rögzítéséhez (commit) és a napló/történet (log) megtekintéséhez szükségesek.

---

# I. 💾 Változások rögzítése: `git commit`

A `commit` paranccsal rögzítheted a staging area-ben lévő változtatásokat a lokális repository-ban.

## 1. Alapvető commit parancsok

| Parancs | Leírás |
|--------|--------|
| `git commit -m "rövid üzenet"` | A stage-elt változások commitolása egy rövid üzenettel. |
| `git commit -a -m "üzenet"` | Az összes követett (tracked) fájl változtatásának automatikus stagingje és commitja. |

💡 **Megjegyzés:**  
A `-a` csak a **követett (tracked)** fájlokra hat.  
Az új (untracked) fájlokat először mindig külön kell hozzáadni:  
```bash

git add fájl.txt

```

---

## 2. Többsoros commit üzenet

Ha részletes commit üzenetet szeretnél:

```bash

git commit

```

Ez megnyitja az alapértelmezett szerkesztőt (Vim, Nano, VS Code stb.).

### Ajánlott formátum:
- **Első sor:** rövid cím (max 50–70 karakter)  
- **Üres sor**  
- **Törzs:** több soros részletes leírás

---

# II. 🔄 A legutóbbi commit módosítása

A `--amend` lehetővé teszi az utolsó commit kijavítását vagy kibővítését.

## 1. Utolsó commit javítása

| Parancs | Leírás |
|--------|--------|
| `git commit --amend -m "Helyes üzenet"` | Az utolsó commit üzenetének javítása. |
| `git add fájl.txt` + `git commit --amend --no-edit` | Hozzáadja a stage-elt változásokat az utolsó commit-hoz, **az üzenet módosítása nélkül**. |
| `git commit --amend` | Megnyitja a szerkesztőt: üzenet és tartalom együtt módosítható. |

---

## 2. Commit visszavonása (`git reset`)

| Parancs | Leírás |
|--------|--------|
| `git reset --soft HEAD~1` | Visszavonja az utolsó commitot, a változásokat megtartja *staged* állapotban. (Újra commitolható.) |
| `git reset --hard HEAD~1` | Törli az utolsó commitot **és az összes módosítást is**. ⚠️ Veszélyes! |

---

# III. 📜 Történeti napló megtekintése: `git log`

| Parancs | Leírás |
|--------|--------|
| `git log` | Teljes commit történet: azonosító, szerző, dátum, üzenet. |
| `git log --oneline` | Rövidített nézet: egy commit = egy sor (rövid hash + üzenet). |
| `git log --stat` | Fájlonkénti statisztika: mely fájlok változtak és hány sorban. |

---

# 🎉 Hasznos tippek

- Elfelejtettél fájlt stage-elni?  
```bash

git add fájl
git commit --amend --no-edit

```

- Üres commit létrehozása (pl. projekt indítása):  
```bash

git commit --allow-empty -m "Start project"

```

- Commit üzenet módosítás szerkesztő nélkül:  
```bash

git commit --no-edit
Create an empty commit:
git commit --allow-empty -m "Start project"
Use previous commit message (no editor):
git commit --no-edit
Quickly add staged changes to last commit, keep message:
git commit --amend --no-edit
```

---





