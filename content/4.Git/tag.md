---
title: Git tag
description: Git tag

---


# 🏷️ Git Tag Cheat Sheet  
## Címkék létrehozása, kezelése és megosztása

A Git tagek (címkék) arra szolgálnak, hogy **megjegyezd a projekt történetének fontos pontjait** — például kiadásokat, mérföldköveket vagy stabil állapotokat.

---

# 📘 Mi az a Tag?

A **tag** egyfajta könyvjelző egy konkrét commit-hoz.  
Leggyakoribb felhasználási módjai:

- **Kiadások:** v1.0, v2.0 stb.  
- **Mérföldkövek:** nagy funkciók elkészülte  
- **Deployment:** eszközök gyakran tageket használnak deployoláshoz  
- **Hotfixek:** régi verziók gyors javítása

Két fő típus létezik:

| Típus | Leírás |
|------|--------|
| **Lightweight tag** | Egyszerű címke commit-ra mutatva (metaadatok nélkül). |
| **Annotated tag** | Tartalmaz szerzőt, dátumot és üzenetet. Ajánlott kiadásokhoz. |

---

# I. 🏷️ Tag létrehozása

## 1. Lightweight tag
Gyors, egyszerű címke:

```bash
git tag v1.0
```

## 2. Annotated tag (-a -m)

Tartalmaz metaadatokat (név, dátum, üzenet).
Ajánlott minden publikus vagy megosztott célhoz.

```bash
git tag -a v1.0 -m "Version 1.0 release"
```

---

# II. 🕓 Korábbi commit megcímkézése

Ha nem a legfrissebb commitot szeretnéd címkézni:

```bash
git tag v1.1 1a2b3c4d
```

*Cseréld ki a `1a2b3c4d` értéket a kívánt commit hash-re.*

---

# III. 📄 Tag-ek listázása

```bash
git tag
```

---

# IV. 🔍 Tag részleteinek megtekintése

```bash
git show v1.0
```

Megmutatja:

* a tag adatait
* a commit üzenetét
* a diffet

---

# V. 🚀 Tag-ek feltöltése a távoli repóba

A tagek **alapesetben nem töltődnek fel** a `git push` paranccsal!

## Egy konkrét tag feltöltése:

```bash
git push origin v1.0
```

## Minden helyi tag feltöltése:

```bash
git push --tags
```

---

# VI. ❌ Tag törlése

## Helyi törlés:

```bash
git tag -d v1.0
```

## Törlés a távoli repóból:

```bash
git push origin --delete tag v1.0
```

---

# VII. 🔁 Tag frissítése vagy újracímkézése

Ha egy tag-et más commit-ra szeretnél áthelyezni:

```bash
git tag -f v1.0 <új-commit-hash>
git push --force origin v1.0
```

⚠️ **Figyelem:** A `--force` felülírja a távoli tag-et — mindenki számára!

---

# VIII. ⭐ Tag használati javaslatok

* Használj tageket verziókhoz és mérföldkövekhez.
* **Annotated tag** ajánlott minden megosztott vagy publikált verzióhoz.
* Készíts tag-et, miután a kód stabil vagy kiadásra kész.
* Deployment előtt érdemes tageket használni a következetes verziókezeléshez.

---

# IX. 🛠️ Hibaelhárítás

* **„A tag már létezik”** → töröld:

  ```bash
  git tag -d <tagname>
  ```
* **Rossz tag lett feltöltve** → töröld lokálisan + remoton, majd hozd létre újra.
* **A tag nem látszik távolin** → ne feledd pusholni:

  ```bash
  git push origin <tagname>
  ```
* **Felül kell írni egy távoli tag-et** →

  ```bash
  git push --force origin <tagname>
  ```

---

# 🎉 Összefoglalás

A tagek egyszerű és hatékony módjai annak, hogy **verziókat**, **stabil pontokat** és **mérföldköveket** jelölj meg a projektedben.
Ajánlott annotált tageket használni, különösen ha másokkal is megosztod a kódot.




