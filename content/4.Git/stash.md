---
title: Git stash
description: Git stash

---

````md
# 🧰 Git Stash Cheat Sheet  
## Módosítások ideiglenes elmentése, visszaállítása és kezelése

A `git stash` lehetővé teszi, hogy **ideiglenesen elmentsd a változtatásaidat anélkül, hogy commitolnád őket**, így bármikor válthatsz feladatra vagy branch-re, majd később visszaállíthatod a munkádat.

---

# 📘 Mi az a Git Stash? Miért használd?

A stash akkor hasznos, ha:

- gyorsan fel kell függesztened a munkát,
- át kell váltanod egy másik branch-re,
- sürgős hibát kell javítanod,
- nem szeretnél félkész commitokat készíteni.

A stash lényegében:
- **elmenti a tracked fájlok (staged + unstaged) módosításait**,  
- opcionálisan elmenti az untracked fájlokat is (`-u` kapcsolóval),  
- majd **üres, tiszta working directory-t** hagy maga után.

A stashek egy **stack**-ben (veremben) tárolódnak:  
a legfrissebb stash a `stash@{0}`, az előző a `stash@{1}`, stb.

---

# I. 🎒 Változtatások elmentése: `git stash`

## Alap stash
```bash
git stash
````

Alapból a következőket menti:

* tracked fájlok (staged + unstaged)
* **nem** menti az untracked fájlokat

## Untracked fájlokkal együtt

```bash
git stash -u
```

## Stash üzenettel

Segít később emlékezni, mit tartalmazott:

```bash
git stash push -m "WIP: homepage redesign"
```

---

# II. 📋 Összes stash listázása

```bash
git stash list
```

Példa kimenet:

```
stash@{0}: On main: WIP: homepage redesign
stash@{1}: WIP on main: 1234567 Add new feature
```

---

# III. 🔍 Stash tartalmának megtekintése

## Rövid összegzés

```bash
git stash show
```

## Teljes diff

```bash
git stash show -p
```

---

# IV. 🔄 Stash visszaállítása

## Legutóbbi stash alkalmazása

```bash
git stash apply
```

Ez **nem törli** a stash-t a stackből.

## Konkrét stash alkalmazása

```bash
git stash apply stash@{1}
```

---

# V. 📤 Stash visszaállítása és törlése (pop)

A `pop` visszaállítja a stash-t és **eltávolítja** is a stackből:

```bash
git stash pop
```

---

# VI. 🗑️ Stash törlése

## Egy stash törlése

```bash
git stash drop stash@{0}
```

## Minden stash törlése

⚠️ Végleges, nem visszavonható!

```bash
git stash clear
```

---

# VII. 🌿 Új branch létrehozása stash-ből

Ha a félkész munkádból végül külön fejlesztési ág lesz:

```bash
git stash branch new-feature stash@{0}
```

Ez:

1. létrehoz egy új branch-et,
2. alkalmazza rá a stash-t,
3. törli a stash-t.

---

# VIII. ⭐ Hasznos tippek és jó gyakorlatok

* Adj **értelmes üzenetet** a stash-eknek:

  ```bash
  git stash push -m "WIP: login page refactor"
  ```
* Ne használj stash-eket hosszú távú tárolásra — inkább commitolj egy WIP commitot.
* Rendszeresen tisztítsd a régi, felesleges stash-eket.
* Ne feledd: `git stash clear` végleges!

---

# IX. 🛠️ Hibaelhárítás

### ❓ „Eltűntek a változásaim!”

Nézd meg a stash listát:

```bash
git stash list
```

### ❓ „A stash nem alkalmazható tisztán.”

Konfliktusok léphetnek fel — ugyanúgy oldd meg, mint egy merge-nél.

### ❓ „Untracked fájlok elvesztek!”

Alapértelmezetten nem stashelődnek → használd a `-u` kapcsolót legközelebb.

### ❓ „Véletlenül töröltem minden stash-t!”

A `git stash clear` végleges. Sajnos nem visszaállítható.

---

# 🎉 Összefoglalás

A `git stash` egy rendkívül hasznos eszköz, ha átmenetileg el kell mentened a munkádat anélkül, hogy commitolnál.
Segít rendezetten tartani a repository-t és gyorsan váltani a feladatok között.

```

---

Ha szeretnéd, **összefűzhetem a commit + tag + stash jegyzeteket egyetlen nagy Git-dokumentumba** is.
```
