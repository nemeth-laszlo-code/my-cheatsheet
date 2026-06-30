
- A linux szinte mindent fájlként kezel


# Mappák

- FHS fájlszerkezet

## bin 

- mappában tallhatók a létfontosságú programok binárisok, csak a létfontosságú fájlokat találjuk itt
## sbin
- mappa ahol rendszer adminisztrációs fájlokat találunk

## boot
- rendzerelindulásához szükséges fileok

## cdrom
- regen a cf romok tartalma volt

## dev
- stderr stdin stdout 
- a géphez csatlakoztatott eszközök tallhatók itt, 
- random, véletlenszámok
- null, amit ebbe beleíratunk az igazából eltűnik

## etc 
- rendszerszintű beállításokat itt találjuk
- az itt található fájlok azok egyszerű text fájlok




## home
- felhasznalo nevevel megegyzezik
## lib
- fuggveny konyvtarakat tartalmazza, amire más programok támaszkodnak

## lost&found
- azoka fajlok amikor rendszerösszeomlásvan, és a sérült fájlokat ide rakja

## media
- cserélhető lemez usb.. stb
- automatikusan jonnek létre

## mnt 
- a kulonbozo fajlrendszerekt amiket felcsatolunk azokat általában ide csatoljuk fel

## opt 
- olyan programok amik egy helyen tárolnak mindet,
- tehát a vonfig nem az etc-ben a binrárisok nem a lin-nen
## proc

- rendszer információk
- pl meminfo balójában nem fájl de fájlként tudjuk megnézni

## root 


## run
- processzek fájljai, socket-jei
- ideiglenes fájlok
- futo proess azonosito

## snap
-  nem standard... csomagkezelő..

## srv
- servicekhez tartozo adatok tárolására szolgál
- pl webszerver is idekerülhet
## tmp
- ideiglenes fájloknak van fenntartva
- minden ujrainditáskor törlödik
- ezek bármikor kitörölhetőek
- gyorsítótárazás, ideiglenes beállításokat
## usr
 - alkalmazások, fgv-ek ..stb amik a usernek is elérhetőek
 - ez csak olvasható mappa, normál uzembe ide nem írunk
 - usr/local/bin , szinte bárhonnan tudjuk futtatni
 
## var 
- backupok, metrikak, logok ide kerülhetnek
- ide már lehet írni, ide írnak a programok normál üzemben
- dpgk.log szoftver telepítésekkor ide ír
- ez folyamatosan nőni fog 