```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash
```

Ez letölti és telepíti az nvm-et a felhasználódhoz (~/.nvm) és beállítja a szükséges környezeti változókat.

```ts
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```

Ha nem történt meg, add hozzá kézzel a ~/.bashrc-hez vagy ~/.zshrc-hez a fenti sorokat, pl **nano**-val

# Terminál újrabetöltése
```bash
source ~/.bashrc
source ~/.zshrc
```
## A legfrisebb LTS verzió
```bash
nvm install --lts
```
## Konkért verzió
```ts
nvm install 20.5.0
```

```bash
nvm list //telepitett nodejs verziók listázása
nvm use 18 //aktív nodejs verzió váltása
nvm alias default 20 //alapértelmezett nodejs beállítása
```