---
title: Git általános
description: Git általános
---

* **Repository (Repo):** Egy mappa/projekt, amit a Git követ, beleértve a fájlokat és a teljes módosítási előzményt.
* **Clone:** Egy távoli repository másolatának letöltése a saját gépedre.
* **Stage:** Kiválasztod, mely módosításokat szeretnéd a következő mentésbe (commitba) tenni.
* **Commit:** A staged változtatások pillanatképének mentése a Git előzményekbe.
* **Branch:** Külön ág létrehozása, hogy párhuzamosan dolgozhass különböző funkciókon vagy verziókon.
* **Merge:** Különböző branchek változtatásainak egyesítése.
* **Pull:** A távoli repository legfrissebb változásainak letöltése és beolvasztása a saját verziódba.
* **Push:** A saját commitjaid feltöltése a távoli repositoryba.


# Alapértelmezett szerkesztő beállítása
```bash
git config --global core.editor "code --wait"
git config --global user.name "Név"
git config --global user.name "emailcím"

```
Use --global to set the value for every repository on your computer.

Use --local (the default) to set it only for the current repositor

# Beállítás elfelejtése

```bash

git config --global --unset code.editor

```

---
# Összes konfiguráció listázása
```bash
git config --list
```


There are three levels of configuration:

System (all users): git config --system
Global (current user): git config --global
Local (current repo): git config --local
The order of precedence is:

Local (current repo)
Global (current user)
System (all users)



# Git - visszaállítás

| git restore . | az összes módosítást elveti és vissza állítja az előző commit állapotára |
| git restore fajl_nev | amikor modositunk 1 fájlt de nem szeretnénl commitolni... akkor ezzel az előző commit állapotára állítsuk vissza a fájl tartalmát |

# Fájl törlése az utolsó commitból
```bash
git reset HEAD^ -- torlend.txt
git commit --amend
```

---
# Utolsó commit javítása, pl elgépelés esetén

```bash
git commit --amend -m "Javított commit üzenet"
```
---
# Fájl hozzáadása az utolsó commit-hoz

```bash
git add elfejeltett.txt
git commit --amend
```

---
# Git reset 
```bash
git reset --soft <commit> # Move HEAD to commit, keep changes staged
git reset --mixed <commit> # Move HEAD to commit, unstage changes (default)
git reset --hard <commit> # Move HEAD to commit, discard all changes
git reset <file> # Unstage a file
git log --oneline # Show commit history

```
---
# Git staging

The staging environment (or staging area) is like a waiting room for your changes.

You use it to tell Git exactly which files you want to include in your next commit.

This gives you control over what goes into your project history.

Here are some key commands for staging:

git add <file> - Stage a file
git add --all or git add -A - Stage all changes
git status - See what is staged
git restore --staged <file> - Unstage a file

# Unstaged-re állítás
git restore --staged index.html