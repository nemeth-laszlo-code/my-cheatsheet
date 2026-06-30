---
title: Git rebase
---

# Git Rebase

## Mi az a Git Rebase?
A Git Rebase egy olyan művelet, amely egy sor commitot áthelyez vagy kombinál egy új alap commitra.  
Gyakran használják a tiszta, lineáris projektelőzmények fenntartására.  
A rebase segítségével olvashatóbbá tehető a commit történet azáltal, hogy elkerüljük a felesleges merge commitokat.

---

## Mikor használjuk a Git Rebase-t?
A Git Rebase-t érdemes használni, ha:

- Tiszta, lineáris projektelőzményt szeretnénk
- El akarjuk kerülni a felesleges merge commitokat
- Több commitot szeretnénk egyesíteni
- Szeretnénk szerkeszteni vagy átrendezni commitokat

---

## Alap rebase
A saját águnkat egy másik ág tetejére helyezhetjük (pl. frissítjük a feature branch-et a legújabb main alapján):

**Példa: Rebase a main ágra**
```bash
git checkout feature-branch
git rebase main
````

Ez újraalkalmazza a feature branch változtatásait a main ág legújabb commitjainak tetején.

---

## Interaktív Rebase

Az interaktív rebase lehetővé teszi a commitok szerkesztését, átrendezését, összefűzését vagy javítását egy adott pont előtt:

**Indítás**

```bash
git rebase -i HEAD~3
```

Megnyit egy szerkesztőt, ahol a következőket tehetjük:

* `pick`: megtartja a commitot
* `squash`: összevonja a commitokat
* `edit`: megáll a commit módosításához
* `reword`: csak a commit üzenetet változtatja meg

**Lépések:**

1. Szerkeszd a commit üzenetet vagy válaszd ki az akciót (pick, squash, edit, reword)
2. Mentés és szerkesztő bezárása
3. Git alkalmazza a változtatásokat, és ellenőrizhetjük az eredményt

---

## Folytatás, megszakítás vagy kihagyás

Ha konfliktusba ütközöl, vagy be kell fejezni egy commit szerkesztését:

**Folytatás**

```bash
git add fixed_file.txt
git rebase --continue
```

**Megszakítás**

```bash
git rebase --abort
```

Ez visszaállítja az ágat az eredeti állapotába a rebase előtt.

**Kihagyás**

```bash
git rebase --skip
```

Ha egy commitot nem tudsz javítani, kihagyhatod, és a rebase a következő commitnál folytatódik.

---

## Változtatások ellenőrzése

A rebase befejezése után ellenőrizd a változtatásokat, hogy minden rendben legyen.

---

## Tippek és legjobb gyakorlatok

* A rebase átírja a commit történetet.
* Ne rebase-elj olyan commitokat, amelyeket már megosztottál egy közös repóban.
* Használd a `git rebase -i`-t a commitok szerkesztéséhez, átrendezéséhez vagy összevonásához.
* Konfliktus után a `git rebase --continue` folytatja a rebase-t.
* Ha el kell állni a rebase-től, használd a `git rebase --abort`-ot.

---

## Hibakeresés

* Konfliktus esetén oldd meg, majd `git rebase --continue`.
* Ha egy commitot nem tudsz javítani, használd a `git rebase --skip` parancsot.

```





