---
title: Git merge
description: Git merge

---


# 🔀 Git Merging – Teljes Magyar Útmutató

## 📌 Mi az a Merge?

A **merge** (összeolvasztás) a Gitben azt jelenti, hogy egy ág (branch) változtatásait **beleszövöd** egy másik ágba.

Tipikusan akkor használjuk, amikor:

- egy funkciófejlesztés kész → vissza akarod hozni a `main`-be  
- hibajavítást végeztél → vissza kell vinni a fő ágba  
- külön ágakon dolgoztatok → össze kell fésülni a munkát  

---

# 🔧 Gyakori Merge Parancsok

| Parancs | Mit csinál? |
|--------|--------------|
| `git merge branch` | Összeolvasztja a megadott ágat a jelenlegibe |
| `git merge --no-ff branch` | Mindig merge commitot hoz létre |
| `git merge --squash branch` | Az egész ágat egyetlen commitba gyúrja |
| `git merge --abort` | Megszakítja az éppen zajló merge-t |

---

# 🔀 Branch-ek összeolvasztása (git merge)

Először át kell váltani arra az ágra, **amelybe** merge-ölsz:

```bash
git checkout master
````

Majd merge:

```bash
git merge emergency-fix
```

Példa kimenet:

```
Updating 09f4acd..dfa79db
Fast-forward
 index.html | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Ez egy **fast-forward merge**, mert:

* a `emergency-fix` közvetlenül a `master`-ből készült
* a master-en nem volt közben más commit
  👉 ezért a Git egyszerűen a pointert viszi előre.

---

# ⭐ Fast-Forward Merge

A Git csak előretekerné a pointert, mert nincs „elágazás”.

A történet így néz ki:

```
A -- B -- C (master)
          \
           D -- E (feature)
```

Ha a master-en nem történt módosítás, akkor:

```
master → E
```

---

# 🚫 Non-Fast-Forward Merge (git merge --no-ff)

Ha szeretnél **mindenképp merge commitot**, akár lenne fast-forward, akár nem:

```bash
git merge --no-ff feature-branch
```

Miért jó?

* látszik, hogy volt külön feature branch
* nem „tűnik el” a funkció ág
* tisztább, követhetőbb történet

---

# 🧼 Squash Merge (git merge --squash)

Ezzel a módszerrel **az egész ág commitjait összevonod egyetlen commitba**:

```bash
git merge --squash feature-branch
```

Hasznos, ha:

* a feature branch több apró commitot tartalmaz („fix typo”, „oops”)
* tiszta history-t akarsz
* mégsem akarsz merge commitot

Utána manuálisan commitolsz:

```bash
git commit -m "Add feature X (squashed)"
```

---

# 🛑 Merge megszakítása

Ha elrontottál valamit vagy konfliktusba futottál:

```bash
git merge --abort
```

Visszaáll minden a merge előtti állapotra.

---

# ⚠️ Mi az a Merge Conflict?

Merge conflict akkor történik, amikor:

* ugyanazt a fájlt
* ugyanazon a helyen
* **mindkét ág módosította különböző módon**

Git nem tudja eldönteni, melyiket tartsuk meg → segítséged kell.

Konfliktusjelölők:

```
<<<<<<< HEAD
változat A (jelenlegi ág)
=======
változat B (merge-elt ág)
>>>>>>> branch-neve
```

---

# 🧩 Merge Conflict feloldása – példa

Miután új képet adsz hozzá a `hello-world-images` ágon és commitolod:

```bash
git checkout master
git merge hello-world-images
```

Kimenet:

```
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Git jelzi:

* a képek rendben
* az `index.html` ütközik

Status:

```
Unmerged paths:
  both modified: index.html
```

### Konfliktus a fájlban:

```
<<<<<<< HEAD
<p>This line is here to show how merging works.</p>
=======
<p>A new line in our file!</p>
<div><img src="img_hello_git.jpg" ... ></div>
>>>>>>> hello-world-images
```

### Megoldott verzió:

```html
<p>This line is here to show how merging works.</p>
<div><img src="img_hello_git.jpg" alt="Hello Git" style="width:100%;max-width:640px"></div>
```

Konfliktus feloldása után stage:

```bash
git add index.html
```

Majd lezárod a merge-t:

```bash
git commit -m "merged with hello-world-images after fixing conflicts"
```

Branch törlése:

```bash
git branch -d hello-world-images
```

---

# 🧠 Best Practices a Merge-ökhöz

* Mindig **commitold vagy stash-eld** a munkád merge előtt
* Rendszeresen merge-eld a `main`-t a feature branch-be, hogy kevesebb legyen a konfliktus
* Konfliktusnál olvasd el alaposan a jelöléseket
* Adj érthető merge commit üzeneteket

---

# 🛠 Hasznos merge parancsok összefoglalója

| Parancs                     | Leírás                                |
| --------------------------- | ------------------------------------- |
| `git merge branch`          | Ág összeolvasztása                    |
| `git merge --no-ff branch`  | Kényszerített merge commit            |
| `git merge --squash branch` | Squash merge (egy commit lesz belőle) |
| `git merge --abort`         | Merge megszakítása                    |
| `git status`                | Megmutatja a merge állapotát          |
| `git add file`              | Konfliktus megoldása után stage       |
| `git commit`                | Merge lezárása                        |

---

# 🎉 Összefoglaló

A merge a Git egyik legfontosabb művelete:

* ágak munkáját hozza össze
* lehet fast-forward, klasszikus vagy squash
* konfliktus esetén te döntesz a végső tartalomról
* mindig biztonságos, mert visszavonható (`--abort`)

Ha megérted a merges folyamatot és a konfliktuskezelést, akkor a Git legnehezebb részét már sikeresen birtoklod.

```

---

Ha szeretnéd, készítek:

✅ egyetlen nagy **Git teljes tanulócsomagot (.md)**  
vagy  
✅ külön **Reset / Revert / Rebase / Cherry-pick** fejezeteket is ilyen stílusban.
```bash
<<<<<<< HEAD
=======
Merge conflict esetén elfogadhatjuk pl a master ágat, vagy  a branchunket vagy minde2-t


A fajlokban konfliktus jelölök <<<<<, ======,>>>>>>, melyek azt mutatjak hol vannak különbségek, a két verzió között
pl
<<<< HEAD (a mi modosításaink)
========
(A másik ág módosításai)
>>>>>>> branch-name

A Head alatt a mi változtatásaink vannak
A ==== után a másik ág változtatásai vannak

# Két fő lehetőség van a konfliktus feloldására
- törlés a <<<<<<<<,========,>>>>>> jelölöket manuálisan eltávolíthatjuk, és a kívánt kódot hagyhatjuk meg.

- Git parancsok használata a változtatáshoz
- a Változtatások elfogadása az aktuális branchből(HEAD)
```bash
git checkout --ours <conflicted-file> # ez a aparancs az aktuális branch verzióját fogja megtartani
git checkout --theirs <conflicted-file># a másik branch változatásának az elfogadása
```

Miután feloldottuk a konfliktust, commitolnunk kell
git add conflicted_file
git commit


vagy git mergetool
>>>>>>> f61f413 (Jegyzetek készítése md formátumban)
