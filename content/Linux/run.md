# 📌 Linux `/run` mappa 

## 1️⃣ Mi az a `/run`?

- **Ideiglenes rendszerkönyvtár**, ami a rendszer futása során jön létre.  
- Tárol **rendszer állapotinformációkat**, futó folyamatok adatait, lock fájlokat, socketeket, és egyéb runtime fájlokat.  
- **RAM-ban / tmpfs-ben van**, nem a merevlemezen.  
- **Újraindításkor kiürül**, ezért **nem való tartós adatoknak**.

---

## 2️⃣ Mire használják?

| Fájl / könyvtár | Leírás |
|-----------------|--------|
| `/run/*.pid` | Folyamat azonosítók (PID) |
| `/run/lock/` | Lock fájlok (pl. más folyamat blokkolása) |
| `/run/sock/` | Socket fájlok |
| `/run/udev/` | Udev (hardver) információk |
| `/run/media/<user>/…` | Automatikusan mountolt külső meghajtók (pendrive, SSD) |

---

## 3️⃣ `/run/media/<user>` – külső meghajtók

- Itt találhatók a **felcsatolt USB, SD kártyák, külső SSD-k**.  
- Példa:  
 - /run/media/nemethrzr/ADATA_SSD
 - /run/media/nemethrzr/SD_CARD
  
- A külső meghajtón végzett munkánál **Git repo vagy projektek létrehozása problémás lehet**, mert `/run` ideiglenes, és újraindításkor eltűnhet.

---

## 4️⃣ Hogyan használjuk helyesen?

- **Fájlok, projektek, git repositoryk** ne a `/run` alatt legyenek.  
- Használj **home mappát**: 
 - ~/projects/
 - ~/Documents/
 - ~/Downloads/
- Példa webshop projekt elhelyezése:
 - ~/projects/webshop/

- A `/run` legyen csak **rendszerfolyamatok és ideiglenes runtime fájlok** helye.

---

## 5️⃣ Összefoglalás

- `/run` = **runtime**, **ideiglenes**, **RAM alapú**.  
- `/run/media/<user>` = automatikusan mountolt külső meghajtók.  
- **NE használj `/run`-t hosszú távú munkára.**  
- Projektekhez **home mappa vagy más tartós hely**