# Alapfogalmak
## Image

- Ez egy olvasási célra szolgáló sablon a konténer létrehozásához. Mint egy recept vagy egy osztály. Megmondja, hogy a konténernek milyen fájlokat, programokat, parancsokat kell tartalmaznia, és mi legyen az indítási utasítás.

## Container

- Ez az **Image** futó példánya.Amikor elindítunk egy **Image**-t, létrejön egy példány.
 
## Dockerfile 
- Ez a szöveges fájl, amiben leírjuk, hogy hogyan épüljön fel az Image-ünk. Ide kerülnek a lépések. 
- Induljon ... image-ből, másold be a kódomat, telepítsd a függőségeket...stb

# Telepítés pacman-al

```bash
sudo pacman -S docker docker-compose
```

# Szolgáltatás engedélyezése

```bash
sudo systemctl enable --now docker
```

# Jogosultság beállítása

```bash
sudo usermod -aG docker $USER
```
- Fontos itt kikell jelentkezni a rendszerből, hogy életbe lépjen a változtatás

# Dockerfile létrehozása

- ez a fájl írja le, hogyan épüljön fel az alkalmazás Image-e. A projekt gyökérkönyvtárában kell létrehozni.

```Dockerfile
# Használjuk a hivatalos Node.js 20-as verzióját, Alpine Linux alapon (kisebb méretű)
FROM node:20-alpine

# Beállítjuk a konténeren belüli munkakönyvtárat
WORKDIR /usr/src/app

# Átmásoljuk a package.json fájlokat (ezek alapján telepítjük a függőségeket)
COPY package*.json ./

# Telepítjük a függőségeket
RUN npm install

# Nyitjuk a 3000-es portot (a NestJS alapértelmezett portja)
EXPOSE 3000

# Ez a parancs indul el a konténer elindításakor.
# A "start:dev" automatikusan újraindul, ha fájl változást észlel!
CMD [ "npm", "run", "start:dev" ]

```
# Docker Compose a fejlesztéshez(Volume beállítása)

Fejlesztés alatt sokkal elegánsabb a Docker Compose használata, mert egyetlen fájlban (a docker-compose.yml-ben) definiálhatod a Volume-okat, a portokat és a buildelési utasításokat.

Hozd létre a projekt gyökérkönyvtárában a docker-compose.yml fájlt:

```yaml
version: '3.8'

services:
  app:
    # A forráskód a jelenlegi könyvtárban található (.). A Dockerfile-t is itt keresse.
    build:
      context: .
      dockerfile: Dockerfile
    
    container_name: nestjs-dev-app
    
    # Portok: Manjaro 3000-es portja a konténer 3000-es portjára mutat
    ports:
      - "3000:3000"
      
    # 💥💥💥 VOLUME beállítása (A MEGOLDÁS a hot-reloadingra) 💥💥💥
    volumes:
      # Összekapcsolja a Manjaro jelenlegi könyvtárát (az első pont) a 
      # konténer munkakönyvtárával (a második pont). 
      # Így a VS Code-ban végzett módosítások azonnal frissülnek a konténerben.
      - .:/usr/src/app
      
      # Kizárjuk a "node_modules" mappát a Volume-ból. 
      # Ezt azért tesszük, mert a "node_modules"-t a konténerben telepítettük, 
      # és így elkerülhetjük a Manjaro és a konténer közti kompatibilitási problémákat.
      - /usr/src/app/node_modules
```
# Futtatás és tesztelés
- a beállítások után
```bash
  docker-compose up
```
- ez először lefuttatja a Dockerfile utasításait (Image buildelése), majd elindítja a konténert.
