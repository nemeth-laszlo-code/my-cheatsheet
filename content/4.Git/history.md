---
title: Git history
description: Git history
---




# Commit történet, változások és összehasonlítások megtekintése

A Git minden egyes módosítást rögzít, így könnyen visszanézheted, **mi változott, mikor és ki által**.  
A history parancsok segítenek hibakeresésben, visszaállításban és a projekt fejlődésének megértésében.

---

## Mi az a Git History? Miért használd?

A Git története (history) azért hasznos, mert:

- nyomon követheted, hogyan fejlődött a projekt,
- megtudhatod, mely commitok vezettek egy hibához,
- láthatod, ki és milyen változtatást végzett,
- könnyebb átlátni a projekt fejlődési útját.

Hasznos fejlesztés közben és utólagos elemzéshez is.

---

## Alap parancsok a történet megtekintéséhez

| Parancs | Leírás |
|--------|--------|
| `git log` | Teljes commit történet megtekintése. |
| `git log --oneline` | Rövidített lista: minden commit egy sor. |
| `git show <commit>` | Egy adott commit részletes megtekintése. |
| `git diff` | Unstaged változtatások megtekintése. |
| `git diff --staged` | Staged változtatások megtekintése. |

---

## Teljes commit történet: `git log`

```bash
git log
````

Mutatja:

* commit hash
* szerző
* dátum
* commit üzenet

### Tipp:

* Navigáció: **felfelé/lefelé** nyilakkal
* Keresés: `/kifejezés` majd `n` a következő találathoz
* Kilépés: `q`

---

## Egy commit részleteinek megtekintése

```bash
git show <commit-id>
```

Példa:

```bash
git show 09f4acd
```

Megmutatja:

* szerző
* dátum
* commit üzenet
* a konkrét fájlváltozásokat (diff)

---

## Módosítások összehasonlítása (`git diff`)

### 1. Unstaged változások megtekintése

```bash
git diff
```

Ez azt mutatja, amit még **nem** adtál hozzá staginghez.

### 2. Staged változások megtekintése

```bash
git diff --staged
```

A commitolásra kész változtatásokat mutatja.

---

## Két commit összehasonlítása

```bash
git diff <commit1> <commit2>
```

Példa:

```bash
git diff 1234567 89abcde
```

Kijelzi, mi változott a két commit között.

---

## Rövid commit lista: `git log --oneline`

Gyors áttekintéshez:

```bash
git log --oneline
```

Példa kimenet:

```
09f4acd Updated index.html with a new line
8e7b2c1 Add about page
1a2b3c4 Initial commit
```

---

## Commitok szűrése szerző szerint

```bash
git log --author="Alice"
```

Csak a megadott szerző commitjait listázza.

---

## Commitok idő szerint

```bash
git log --since="2 weeks ago"
```

Megmutatja az elmúlt 2 hét commitjait.

További példák:

* `git log --since="yesterday"`
* `git log --since="2023-01-01"`

---

## Fájlváltozások statisztikája: `git log --stat`

```bash
git log --stat
```

Mutatja:

* mely fájlok változtak
* hány sor lett hozzáadva / törölve

Példa:

```
index.html | 2 +-
1 file changed, 1 insertion(+), 1 deletion(-)
```

---

## Branch grafikus nézet: `git log --graph`

```bash
git log --graph --oneline
```

ASCII grafikont rajzol a branch-ekről és merge-ekről.

Példa:

```
* 09f4acd Updated index.html with a new line
* 8e7b2c1 Add about page
|\
| * aabbccd Merge branch 'feature-x'
|/
```

Nagyon hasznos merge-ek és branch-struktúra elemzéséhez.

---

# Legjobb gyakorlatok a history használatához

* Készíts **gyakori, jól leírt commitokat**.
* A `git diff` paranccsal mindig ellenőrizd, mit commitolsz.
* Használd a `git log --oneline` opciót gyors áttekintéshez.
* Írj részletes, érthető commit üzeneteket.

---

# Hibaelhárítás

### „Nem látom a változtatásaimat!”

- Győződj meg róla, hogy commitoltad őket — a history csak commitolt változásokat mutat.

### „A log túl hosszú!”

- Használd:

* `git log --oneline`
* `git log --since="1 week ago"`
* git log --pretty=oneline --max-count=2
* git log --pretty=oneline --since='5 minutes ago'
* git log --pretty=oneline --until='5 minutes ago'
* git log --pretty=oneline --author=<your name>
* git log --pretty=oneline --all
* git log --all --pretty=format:'%h %cd %s (%an)' --since='7 days ago'
git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
It looks like this:

Output:
$ git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
* e4e3645 2023-06-10 | Added a comment (HEAD -> main) [Jim Weirich]
* a6b268e 2023-06-10 | Added a default value [Jim Weirich]
* 174dfab 2023-06-10 | Using ARGV [Jim Weirich]
* f7c41d3 2023-06-10 | First Commit [Jim Weirich]
Let’s look at it in detail:

--pretty="..." defines the format of the output.
%h is the abbreviated hash of the commit
%d are any decorations on that commit (e.g. branch heads or tags)
%ad is the author date
%s is the comment
%an is the author name
--graph informs git to display the commit tree in an ASCII graph layout

### „Hogyan lépek ki a log nézetből?”

➡️ `q`

---

# 🎉 Összefoglalás

A Git history segítségével teljes körűen áttekintheted a projekted fejlődését:
commitok, változások, szerzők, idővonalak és diffek.

A jól használt history parancsok nélkülözhetetlenek minden fejlesztő számára.






