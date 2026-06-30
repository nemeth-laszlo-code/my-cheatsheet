---
title: Git workflow
description: Git workflow
---

```md
# 🔄 Git Workflow – Teljes Magyar Útmutató

A Git workflow megértése kulcsfontosságú ahhoz, hogy hatékonyan kezeld a kódváltozásokat, szervezetten dolgozz csapatban, és elkerüld a hibákat.

Ez a dokumentum áttekinti:

- a Git három területét (Working Directory, Staging Area, Repository),
- a legfontosabb parancsokat (add, commit, push, status),
- hogyan javíthatsz hibákat (restore, reset, amend),
- alapvető workflow best practice-eket.

---

# 📂 A Git Három Területe

A Git munkafolyamata három fő részből áll:

```

[Working Directory] --git add--> [Staging Area] --git commit--> [Repository]

````

## 🧑‍💻 1. Working Directory (Munkakönyvtár)
Itt szerkeszted a fájlokat:

- új fájlokat adsz hozzá
- módosítod őket
- törlöd, átnevezed stb.

Ezeket a változásokat a Git **még nem menti el** — csak a merevlemezen módosulnak.

---

## 📦 2. Staging Area (Index)
A staging area egy **előszoba**, ahová azokat a változásokat teszed, amelyeket commitolni szeretnél.

Ide kerülnek a fájlok:

```bash
git add index.html
````

Minden változás **csak akkor** kerül be a commitba, ha előtte stage-elted.

---

## 🏛️ 3. Repository (Helyi Git tár)

A commit után a módosítások bekerülnek a **helyi Git történetedbe**.

A commit olyan, mint egy „időkapszula”: a projekt adott pillanatban készített pillanatképe.

Ezután pusholhatod a szerverre (GitHub, GitLab, Bitbucket stb.).

---

# 🔧 Alap Workflow Parancsok

## ➕ Változások stagelése – `git add`

Stage egy adott fájlt:

```bash
git add index.html
```

Stage minden módosítást:

```bash
git add .
```

---

## 📬 Commitolás – `git commit`

Commit = a staged változások végleges mentése a repositoryba.

```bash
git commit -m "Leírás a változtatásokról"
```

Stage + commit együtt (csak módosított/törölt fájlokra):

```bash
git commit -a -m "Üzenet"
```

---

## 📤 Feltöltés a szerverre – `git push`

A commit csak lokálisan létezik. Ahhoz, hogy más is lássa:

```bash
git push
```

Ez frissíti a GitHub/GitLab/Bitbucket távoli repót.

---

## 🔍 Állapot lekérdezése – `git status`

A Git egyik legfontosabb parancsa:

```bash
git status
```

Megmutatja:

* mely fájlok módosítottak
* melyek staged / unstaged
* milyen ágban vagy
* kell-e commitolnod

---

# ♻️ Hibák javítása – Undo & Amend

Gitben visszavonni *szinte bármit* lehet, amíg nem pusholtad.

## 🔄 Working Directory visszaállítása

```bash
git restore <file>
```

A módosítás törlődik → visszaáll az utolsó commit szerinti verzióra.

---

## 🗂️ Unstage egy fájlt

```bash
git restore --staged <file>
```

Hasznos, ha véletlenül:

* túl sok mindent adtál stage-re,
* rossz fájlt stage-eltél.

---

## 🔙 Commit visszavonása (de a változások megmaradnak)

```bash
git reset HEAD~
```

Eltávolítja az utolsó commitot, de a fájlmódosítások ott maradnak a Working Directory-ban.

---

## ✏️ Commit módosítása – `git commit --amend`

Legutóbbi commit javítása:

* üzenet korrigálása
* hiányzó fájlok hozzáadása

```bash
git commit --amend
```

Csak akkor használd, ha még **nem pusholtál**!

---

# ⭐ Best Practices a Git Workflow-hoz

* **Commitolj gyakran**, apró logikus lépésekben.
* Adj **értelmes commit üzeneteket**.
* Használd sokszor a `git status` parancsot.
* **Stage-elj pontosan**: `git add <file>` → elkerülöd a véletlen változásokat.
* Pusholj rendszeresen, hogy biztonsági mentést készíts és mások is lássák a munkát.
* Commit előtt futtasd:

```bash
git diff
```

hogy lásd, mit fogsz menteni.

---

# ⚠️ Tippek és Hibakeresés

* Ha rossz fájlt commitoltál → `git reset HEAD~`
* Ha rossz commit üzenetet írtál → `git commit --amend`
* Ha túl sok fájlt stage-eltél → `git restore --staged <file>`
* Ha valami nem világos → mindig futtasd a `git status` parancsot
* Ne felejts el pusholni → a commit **nem** kerül automatikusan GitHubra

---

# 🌐 GitHub Flow és más workflow-k

A legelterjedtebb, GitHub által használt munkafolyamat: **GitHub Flow**, amely:

* feature branch-eket használ,
* pull requestekkel dolgozik,
* folyamatos integrációt támogat.

Más platformokon (GitLab, Bitbucket) is léteznek hasonló, kissé módosított workflow-k.

---

# 🎉 Összefoglaló

A Git workflow három fő részből áll:

1. **Working Directory** – itt dolgozol
2. **Staging Area** – itt készíted elő a commitot
3. **Repository** – ide kerül a véglegesített történet

A kulcs parancsok:

* `git add`
* `git commit`
* `git push`
* `git status`
* undo: `git restore`, `git reset`, `git commit --amend`

