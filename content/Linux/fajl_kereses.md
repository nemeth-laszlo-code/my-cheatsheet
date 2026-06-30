# Fájl keresés

$PATH - környezeti változok, hogy a könyvtárakban lévő alkalmazásokat bárhonnat elérjük,
így a teljes elérési út(abszolút útvonal) nélkül tudjuk futtatni őket
- ez a saját profilunkból adódik
- .bash_profile, .bashrc -ban van
- .bashrc-ben a PAth változót igazából csak kibővítjük itt, itt tudnk változókat közzé tenni

```bash

echo //kiíratás alapesetben a konzol-ra
which parancs_neve // kiírja, hogy hol található, hova telepítettük
which echo // cd kivétel az bash-en belüli
/usr/bin/echo //abszólut elérési útvonallal is futtathatjuk a parancsokat

```

```bash

find // alapesetben azt a mappát célozza amiben vagyunk
find  mappa_neve -name ".gitignore"
find /etc -name ".gitinore" //abszoluz pathal is kereshetünk
find /etc -name ".git*" //lehet ilyen widlcard charachter is használni

find -name ".git*" -perm 777 //jogosultság alapján való keresés
find -type d -name ".git" // így csak mappákat keresünk
find -type f -name ".git" // így csak file-okat keresünk

find -maxdepth 2 -type f -name ".git" // így csak file-okat keresünk // maxdepth hogy milyen mélységik menjünk le a mappákban


find -type f -not -name ".git" // így csak file-okat keresünk, tagadással

find -type f -iname ".gIt" // így case insensitive alapján is kereshetünk
find -type f -iname ".git" -mtime -8 // módosítás dátumára keresés napra
find -type f -iname ".git" -atime -8 // módosítás dátumára keresés napra, acces time
find -type f -iname ".git" -ctime -8 // módosítás dátumára keresés napra, change time


stat file_neve //részletes statisztika a fájlról, jogosultságok, dátimok, méret..

find -mtime -1

rm file // remove, törlés


find -perm 200 // jpgosultság lapaján való keresés
find -perm 200 -exec chmod 400 '{}' \;  // find-al rákeresünk az írható fájlok-ra majd chmod-al módosítjuk azt csak olvashatóra

```

