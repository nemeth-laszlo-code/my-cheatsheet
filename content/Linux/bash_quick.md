---
 title: Bash gyorsbillentyűk és alap parancsok
 description: Bash gyorsbillentyűk és alap parancsok
---
## Bash áttekintés

 Itt van egy **Linux Bash gyorsbillentyű cheatsheet**, amit gyorsan használhatsz, hogy hatékonyabban dolgozz a terminálban:

### **Navigáció és szövegkezelés**

* **`Ctrl + A`**: Ugrás a sor elejére
* **`Ctrl + E`**: Ugrás a sor végére
* **`Ctrl + U`**: Kivágja a kurzor előtt lévő szöveget (cut)
* **`Ctrl + K`**: Kivágja a kurzor után lévő szöveget (cut)
* **`Ctrl + Y`**: Beillesztés (paste) a vágólapról (a kivágott szöveg visszaillesztése)
* **`Ctrl + W`**: Egy szót töröl a kurzor előtt
* **`Ctrl + D`**: Kilépés a terminálból, vagy bezárás, ha üres a parancssor (EOF)
* **`Ctrl + L`**: Törli a képernyőt (clear)
* **`Ctrl + C`**: Megszakítja a futó parancsot (kill a folyamatot)
* **`Ctrl + Z`**: Háttérbe helyezi a folyamatot (suspend), később `fg`-vel folytathatod

### **Parancsok és programok**

* **`Ctrl + R`**: Parancs keresése a történelemben (reverse search)
* **`Ctrl + G`**: Kilépés a keresésből (`Ctrl + R` után)
* **`!!`**: Ismétli az előző parancsot
* **`!$`**: Az előző parancs utolsó argumentuma
* **`!<num>`**: Ismétli a `<num>` számú korábbi parancsot (pl. `!3` ismétli a 3. parancsot)
* **`sudo !!`**: Az előző parancs `sudo`-val történő végrehajtása

### **Folyamatok és háttérben futó parancsok**

* **`&`**: Futtassa a parancsot háttérben (pl. `./program &`)
* **`jobs`**: A háttérben futó folyamatok listázása
* **`fg`**: Folyamat visszahozása a háttérből (foreground)
* **`bg`**: Folyamat elindítása háttérben
* **`kill <pid>`**: Folyamat leállítása PID alapján
* **`killall <process_name>`**: Minden folyamat leállítása egy adott névvel

### **Navigáció és fájlkezelés**

* **`Tab`**: Automatikus kiegészítés (szó kiegészítése fájlok és parancsok esetén)
* **`Ctrl + Left Arrow`**: Ugrás egy szóra balra
* **`Ctrl + Right Arrow`**: Ugrás egy szóra jobbra
* **`ls`**: Fájlok és könyvtárak listázása
* **`ls -la`**: Listázza az összes fájlt (beleértve a rejtetteket) hosszú formátumban
* **`cd <dir>`**: Könyvtárba navigálás
* **`cd ..`**: Lépj vissza egy könyvtárat
* **`pwd`**: Mutatja a jelenlegi könyvtárat
* **`cp <source> <destination>`**: Fájlok másolása
* **`mv <source> <destination>`**: Fájlok áthelyezése/átnevezése
* **`rm <file>`**: Fájl törlése
* **`rm -r <dir>`**: Könyvtár és annak tartalmának törlése
* **`touch <filename>`**: Üres fájl létrehozása
* **`mkdir <directory>`**: Új könyvtár létrehozása
* **`rmdir <directory>`**: Üres könyvtár törlése

### **Szöveg és fájlkezelés**

* **`cat <file>`**: Fájl megjelenítése
* **`less <file>`**: Fájl tartalmának oldalonkénti nézése (görgetés)
* **`more <file>`**: Fájl tartalmának oldalonkénti nézése
* **`head <file>`**: A fájl elejének megtekintése
* **`tail <file>`**: A fájl végének megtekintése
* **`tail -f <file>`**: Fájl figyelése (folyamatosan frissül)
* **`grep <pattern> <file>`**: Keresés egy mintára fájlban
* **`find <path> -name <filename>`**: Fájl keresése adott könyvtárban
* **`sed 's/old/new/g' <file>`**: Szöveg cseréje fájlban (`old` cserélése `new`-ra)
* **`awk '{print $1}' <file>`**: Egy adott oszlop kiírása fájlból
* **`cut -d' ' -f1 <file>`**: Kivágás meghatározott oszlopokból (pl. szóköz alapján)

### **Alapvető rendszer információk**

* **`top`**: Folyamatok listázása és rendszer erőforrások megtekintése
* **`htop`**: A `top` fejlettebb változata (ha telepítve van)
* **`free`**: Memóriahasználat megjelenítése
* **`df`**: Lemezhely használat megjelenítése
* **`du`**: Könyvtárak és fájlok méretének megjelenítése
* **`uptime`**: A rendszer működési idejének megjelenítése
* **`whoami`**: A felhasználói név megjelenítése
* **`hostname`**: A gép nevének megjelenítése
* **`uname -a`**: Rendszer információk megjelenítése
* **`ps aux`**: Az összes futó folyamat megjelenítése
* **`kill <pid>`**: Folyamat leállítása PID alapján

### **Alapvető architektúra és verziókezelés**

* **`git status`**: Verziókezelés státuszának megtekintése
* **`git log`**: Git commit napló megtekintése
* **`git commit -m "message"`**: Commit üzenettel történő commitálás
* **`git push`**: Módosítások feltöltése a távoli repóba
* **`git pull`**: Módosítások letöltése a távoli repóból
* **`git clone <repo-url>`**: Távoli repó klónozása
* **`git checkout <branch>`**: Ág váltása

### **Hasznos parancsok**

* **`alias <name>='<command>'`**: Alias parancs létrehozása (pl. `alias gs='git status'`)
* **`history`**: Parancstörténet megjelenítése
* **`clear`**: A képernyő törlése
* **`exit`**: Terminál bezárása
* **`shutdown`**: Rendszer leállítása
* **`reboot`**: Rendszer újraindítása

---

### **Speciális gyorsbillentyűk**

* **`Ctrl + C`**: Az aktuális parancs megszakítása
* **`Ctrl + D`**: Kilépés a shell-ből (EOF)
* **`Ctrl + L`**: Képernyő törlése
* **`Ctrl + R`**: Parancs keresése a történelemben
* **`Ctrl + U`**: Sor elejéig törlés
* **`Ctrl + K`**: Sor végéig törlés

### **Mappa váltás**
* **`cd -`**: Az előző mappát nyissa meg
* **`cd ~`**:A home mappát nyissa meg

### **Parancsok kombinálása**
* **`cd my_directory && ls`**: Belép a könyvtárba majd kilistázza a tartalmát
