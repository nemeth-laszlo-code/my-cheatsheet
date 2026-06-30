---
title: ls - parancs
description: ls - parancs és kapcsolói
---
# `ls` parancs

## Alap használat

```bash id="ms40d5"
ls
```

Kilistázza az aktuális mappa fájljait és könyvtárait.

---

# Gyakori `ls` kapcsolók

| Kapcsoló | Jelentés                                           |
| -------- | -------------------------------------------------- |
| `-l`     | Hosszú listaformátum (részletes információk)       |
| `-a`     | Rejtett fájlok megjelenítése (`.`-tal kezdődők is) |
| `-h`     | Emberileg olvasható méret (`KB`, `MB`, `GB`)       |
| `-t`     | Módosítás ideje szerint rendez                     |
| `-r`     | Fordított sorrend                                  |
| `-R`     | Almappák rekurzív listázása                        |
| `-S`     | Méret szerint rendez                               |
| `-1`     | Egy elem soronként                                 |
| `-d`     | Csak a mappát listázza, nem a tartalmát            |
| `-F`     | Típusjelző hozzáadása (`/`, `*`, `@`)              |

---

# Gyakori kombinációk

## Részletes lista + rejtett fájlok + olvasható méret

```bash id="wlr7v8"
ls -lah
```

---

## Legutóbb módosított fájlok elöl

```bash id="0j1q7z"
ls -lt
```

---

## Legnagyobb fájlok elöl

```bash id="m8l1xu"
ls -lS
```

---

## Rekurzív lista

```bash id="2vxk9k"
ls -R
```

---

# `ls -l` felépítése

## Példa:

```bash id="ptl2wd"
-rw-r--r-- 1 laci developers 2048 May 11 14:22 app.component.ts
```

---

## Részei:

| Rész               | Jelentés               |
| ------------------ | ---------------------- |
| `-rw-r--r--`       | Jogosultságok          |
| `1`                | Linkek száma           |
| `laci`             | Tulajdonos             |
| `developers`       | Csoport                |
| `2048`             | Fájlméret (byte)       |
| `May 11 14:22`     | Utolsó módosítás ideje |
| `app.component.ts` | Fájlnév                |

---

# Jogosultságok gyorsan

```bash id="0wsb1t"
-rw-r--r--
```

## Bontás:

```txt id="u5v6fk"
-     → fájl típusa
rw-   → owner (read, write)
r--   → group (read)
r--   → others (read)
```

---

# Fájltípus jelölések

| Jel | Típus                  |
| --- | ---------------------- |
| `-` | Fájl                   |
| `d` | Könyvtár               |
| `l` | Symlink                |
| `*` | Futtatható fájl (`-F`) |

---

# Frontendes / Dev workflow tippek

## Projekt fájlok részletesen:

```bash id="uk1wom"
ls -lah
```

## Legfrissebb build fájlok:

```bash id="55ll3r"
ls -lt
```

## Node_modules méretvadászat:

```bash id="4q4m2i"
ls -lS
```

---

# Hasznos combo

```bash id="qebf7q"
ls -lahtr
```

## Mit csinál?

* `-l` → részletes
* `-a` → rejtett
* `-h` → olvasható méret
* `-t` → idő szerint
* `-r` → fordított

### Eredmény:

Legrégebbi → legújabb, teljes részletességgel.

---

# Aranyszabály

## Mindennapi:

```bash id="k7br9j"
ls -lah
```

## Debug:

```bash id="t38r31"
ls -lt
```

## Méret:

```bash id="4j1i5m"
ls -lS
```
