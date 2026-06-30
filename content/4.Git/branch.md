---
title: Git branch
description: Git branch
---


# Git Branching 

## 📌 Mi az a Git Branch?

A Git-ben egy **branch (ág)** olyan, mint egy külön munkaterület, ahol módosításokat végezhetsz anélkül, hogy a fő projektet (általában a `main` vagy `master` ágat) befolyásolnád.

👉 Gondolj rá úgy, mint egy **párhuzamos univerzumra** a kódod számára.

A branchek lehetővé teszik, hogy egyszerre több feladaton dolgozz biztonságosan, egymástól elszigetelten.

---

## 🎯 Miért használunk brancheket?

- új funkciók fejlesztése  
- hibajavítás  
- kísérletezés  
- veszélytelen fejlesztés a fő ágtól külön  
- gyors váltás különböző feladatok között

A branch lehetővé teszi, hogy a munka csak akkor kerüljön vissza a fő ágba, amikor kifejezetten összeolvasztod (merge).

---

# 🧭 Git Branch vs Branch nélküli munka

## ❌ Branch nélkül

- fájlok kézi másolgatása és átnevezése  
- könnyű összekeverni melyik verzió hová tartozik  
- vészhelyzet esetén mindent félre kell rakni  
- visszamásolgatáskor hibák keletkezhetnek  
- sok manuális és hibalehetőséggel teli folyamat  

## ✔️ Git Branchekkel

- létrehozol egy új ágat (`new-design`), és nyugodtan dolgozol rajta  
- vészhelyzet esetén → új ág (`emergency-fix`), hiba javítása, merge a main-be  
- visszamész a `new-design` ágra és folytatod a munkát  
- mindent szeparáltan kezelsz, nincs kavarodás  
- a merge figyelmeztet, ha kimaradt valamilyen fix  

👉 **Gyorsabb, tisztább és biztonságosabb munkafolyamat.**

---

# 🌿 Branch létrehozása

```bash
git branch hello-world-images
````

Ezzel létrejött egy új ág **hello-world-images** néven.

---

# 📄 Branch-ek listázása

```bash
git branch
```

Példa kimenet:

```
  hello-world-images
* master
```

A `*` jelöli az aktuális ágat.

---

# 🔀 Branch váltás

```bash
git checkout hello-world-images
```

Most már ezen az ágon dolgozol.

**Tipp:** Új branch létrehozása és oda váltás egyben:

```bash
git checkout -b feature-xyz
```



# 🔧 Munka egy branch-en

Fájlok módosítása után ellenőrizd az állapotot:

```bash
git status
```

Ha van:

* módosított, de nem stage-elt fájl → `modified`
* új fájl → `untracked`

Stage-elés:

```bash
git add --all
```

Commit:

```bash
git commit -m "Added image to Hello World"
```

Most már a módosítások ezen az új ágon vannak, és nem a master-en.

---

# 🔄 Gyors branch-váltás szemléltetése

`hello-world-images` ágon:

```bash
ls
```

Példa:

```
README.md  bluestyle.css  img_hello_world.jpg  index.html
```

Majd váltás:

```bash
git checkout master
```

Ismét listázás:

```
README.md  bluestyle.css  index.html
```

🔎 Az `img_hello_world.jpg` eltűnt, mert az csak a másik ágon létezik.

Ez a Git egyik legfontosabb előnye:
👉 teljes mértékben elszeparáltan dolgozol külön ágakon.

---

# 🚨 Vészhelyzeti javítás – Emergency Branch

Ha egy másik ágon dolgozol, de sürgős hiba érkezik:

Hozz létre gyorsan egy új ágat a master-ből:

```bash
git checkout -b emergency-fix
```

Javítsd a hibát, majd:

```bash
git add index.html
git commit -m "updated index.html with emergency fix"
```

A fix készen áll a `master` ágba való merge-re.

---

# 🗑️ Branch törlése

Ha egy branch már be van merge-ölve, törölheted:

```bash
git branch -d hello-world-images
```

Nem merge-ölt branch kényszerített törlése:

```bash
git branch -D branch-name
```

---

# 🧠 Best Practices (Ajánlott módszerek)

* adj a brancheknek **érthető neveket**

  * `feature/user-login`
  * `bugfix/footer-crash`
* egy branch = egy feladat
* rendszeresen húzd be a fő ág változásait

  ```bash
  git pull origin main
  ```
* töröld a már nem szükséges ágakat
* ne dolgozz közvetlenül a `main`-en, csak kis hotfix esetén

---

# 🛠️ Hasznos Parancsok Gyűjteménye

| Feladat                    | Parancs                      |
| -------------------------- | ---------------------------- |
| Ágak listázása             | `git branch`                 |
| Új ág létrehozása          | `git branch new-branch`      |
| Váltás másik ágra          | `git checkout branch-name`   |
| Új ág + váltás             | `git checkout -b new-branch` |
| Ág átnevezése              | `git branch -m new-name`     |
| Ág törlése                 | `git branch -d branch`       |
| Ág erőltetett törlése      | `git branch -D branch`       |
| Megnézni, melyik ágon vagy | `git status`                 |

---

# 🧩 Gyakori problémák és megoldások

### ❓ „Nem látom a változtatásaimat a main ágon!”

➡️ A változtatások **az adott branch-en maradnak**, amíg merge nem történik.

### ❓ „Nem tudom törölni a branch-et.”

➡️ A Git nem törli, ha nincs merge-ölve.
Ha biztos vagy benne:

```bash
git branch -D branch-name
```

### ❓ „Véletlenül rossz branch-en dolgoztam.”

➡️ Stash + switch:

```bash
git stash
git checkout helyes-branch
git stash pop
```

---

# 🎉 Összefoglaló

A Git branchek segítségével:

* egyszerre több funkción dolgozhatsz
* egymástól elszigetelten fejleszthetsz
* gyorsan kezelheted a sürgős hibákat
* tiszta, rendezett fejlesztési folyamatot tarthatsz fenn

A branch-elés a Git egyik legerősebb funkciója — gyors, rugalmas és biztonságos.

```

---

Ha szeretnéd, csinálok **egy teljes Git alapok → haladó szintig** dokumentumot is egységes stílusban (Tags + History + Branching + Merging + Stash + Remote + Reset/Revert).
```
