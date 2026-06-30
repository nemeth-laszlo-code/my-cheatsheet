---
title: Jogosultság kezelés
description: Jopgosultság kezelés
---

# Jogosultságkezelés


9 karakter
3 3-as
1 3-as az adott tulajdonosára



drwxrwxr-x
| d            | rwx    |  rwx  | r - x |
| ------------| -------| ------ | ----- |
| 'd' - directory, mappa | a tulajdonosra/felhasználóra vonatkozó jogosultságok   | akik a csoportban vannak, csoportra vonatkozó jogosultságok | mindenki más |
| '-'' - fájl|||||




- r = read olvasás 4
- w = írás 2
- x = execure futtatás 1
- \- = nincs jogosultság

Amikor semmihez nincs jogosultságunk akor -------- azaz 000

-rw-rw-r-- 664
0+2+4, 0+2+4, 4+0+0


# Tulajdonos

- minden fájlt és mapppát birtokol egy felhasználó
- őket csoportokba is tudjuk rendezni, ezek az etc/groups -ban találhatóak

```bash 
groups // kilistázza, hogy milyen csoportokban vagyunk
chown nemethrzr mappa_neve // change owner - így a saját felhasználóhoz rendelem a mappát
chown nemethrzr:csoport_neve mappa_neve // csoporthoz rendelés
chgrp csoport_neve fajlnev //csak csoport hozzárendelése
```
# Jogosultság módosítása

## Abszolút mód amikor megadjuk a teljes jogosultságot
    ```bash
    touch filenév // file-t létrehoz, ha van ilyen akkor módosítja, frissíti a dátumot
    chmod 664 filenév // -rw-rw-r-- 
    chmod 661 filenev // mindenki más csak futtatni tudja
    chmod 777 filenev // mindenkinek minden jogosultság, ezt kerüljük


    chmod 200 mappa_név // csak írható
    chmod 600 mapp_név // írható és olvasható, bashel nem tudunk belenavigálni, mert nem futtatható
    chmod 300 mapp_név // tudjuk írni és futtatni, így beletudunk navigálni bashel, viszont listázni nem tudjuk mert ahhoz kell az olvasási  jog
    chmod 500 mappanév így olvasni és futtatni is tudjuk, tehát tudjuk listáztatni
    ```

- összekell adogatni a számokat ,hogy melyik tulajdonosnak, csoportnak, mindekni másnak mit szeretnénk kiadni
    6 6 6
## Szimbolikus mód

```bash
 chmod u // user
 chmod g // csoport
 chmod o // mindenki más 
 chmod // nem írunk ki semmit, akkor mindenki-re vonatkozik 'all'
 chmod // - elveszunk egy jogosultságot + hozzáadunk 1 jogosultságot = új értéket állítunk be
 chmod u+x filenév // futtatás jogot adunk a felhasználónak
 chmod u-x filenév // futtatás jogot elvesszük a felhasználónak
 chmod o=r filenev // mindeki más csak olvasási jogot

 //könyvtárak

 


 
```
