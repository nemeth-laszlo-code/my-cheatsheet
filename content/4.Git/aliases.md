---
title: Git aliases
description: Git aliases

---

# Git Aliases – Cheat Sheet

## 1. `.gitconfig` aliasok (Git szinten)

Ezeket a `~/.gitconfig` fájlba tedd:

```ini id="git1"
[alias]
  co = checkout
  ci = commit
  st = status
  br = branch
  hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
  type = cat-file -t
  dump = cat-file -p
```

### Mit csinálnak?

| Alias      | Eredeti parancs   | Funkció             |
| ---------- | ----------------- | ------------------- |
| `git co`   | `git checkout`    | Branch váltás       |
| `git ci`   | `git commit`      | Commit              |
| `git st`   | `git status`      | Státusz             |
| `git br`   | `git branch`      | Branch kezelés      |
| `git hist` | `git log ...`     | Szép commit history |
| `git type` | `git cat-file -t` | Git object típusa   |
| `git dump` | `git cat-file -p` | Objektum tartalma   |

---

## 2. Shell aliasok (`.profile` / `.bashrc` / `.zshrc`)

```bash id="git2"
alias gs='git status'
alias ga='git add'
alias gb='git branch'
alias gc='git commit'
alias gd='git diff'
alias gco='git checkout'
alias gk='gitk --all&'
alias gx='gitx --all'

alias got='git'
alias get='git'
```

---

## Mit csinálnak?

| Alias | Jelentés              |
| ----- | --------------------- |
| `gs`  | git status            |
| `ga`  | git add               |
| `gb`  | git branch            |
| `gc`  | git commit            |
| `gd`  | git diff              |
| `gco` | git checkout          |
| `gk`  | Git GUI (gitk)        |
| `gx`  | GitX GUI              |
| `got` | git (hibázás javítás) |
| `get` | git (hibázás javítás) |

---

## 3. Használati példák

### Branch váltás

```bash id="git3"
gco feature/login
```

### Status

```bash id="git4"
gs
```

### Commit

```bash id="git5"
gc -m "fix: bugfix"
```

### Add

```bash id="git6"
ga .
```

---

## 4. Extra hasznos alias (opcionális)

```ini id="git7"
lg = log --oneline --graph --decorate --all
```

Használat:

```bash id="git8"
git lg
```

---

## Röviden

### Git config alias:

👉 `git co`, `git ci`, `git st`

### Shell alias:

👉 `gs`, `ga`, `gco`, `gc`

---

## Aranyszabály

* Git alias = Git logika (repo szint)
* Shell alias = kényelmi gyorsbillentyű (globális)

---


