---
title: Etc mappa 
description: Etc mappa
---
# Linux `/etc` mappa – Jegyzet

## Mi az a `/etc`?

- A `/etc` a **rendszer konfigurációs fájljainak könyvtára** Linux alatt.  
- Itt találhatók a **globális beállítások**, amik az egész rendszert érintik, nem csak egy felhasználót.  
- A `/etc` **nem futásidejű fájlokat tartalmaz**, hanem konfigurációs állományokat és startup script-eket.  
- A legtöbb fájl **szöveges**, így szerkeszthető adminisztrátori jogokkal (`sudo`).

---

## Mire használják?

| Fájl / könyvtár | Leírás |
|-----------------|--------|
| `/etc/passwd` | Felhasználói fiókok |
| `/etc/group` | Csoportok |
| `/etc/fstab` | Automatikusan mountolandó fájlrendszerek |
| `/etc/hostname` | Rendszer hosztneve |
| `/etc/hosts` | Helyi DNS mapping |
| `/etc/resolv.conf` | DNS szerver beállítások |
| `/etc/network/` | Hálózati konfigurációk |
| `/etc/systemd/` | Systemd szolgáltatások beállításai |
| `/etc/sudoers` | Sudo jogosultságok |
| `/etc/nginx/`, `/etc/apache2/` | Webszerver konfigurációk |

---

## Fontos tudnivalók

- **Admin jog kell a szerkesztéshez**:  

```bash
sudo nano /etc/hosts
```
Ne törölj vagy mozdíts el fájlokat, mert a rendszer működése tönkremehet.

A legtöbb modern disztribúcióban a csomagkezelő kezeli a /etc fájlokat (pl. pacman, apt, dnf).
## Hasznos mappák a /etc-ben

/etc/systemd/ → systemd szolgáltatások konfigurációja

/etc/network/ → hálózati interfészek konfigurációja

/etc/ssh/ → SSH szerver és kliens beállítások

/etc/cron.* → időzített feladatok (cron jobok)

/etc/X11/ → grafikus beállítások (X szerver)

## Összefoglalás

/etc = globális konfigurációk könyvtára

Szöveges fájlok → szerkeszthetők sudo-val

Tartalmaz rendszerbeállításokat, hálózatot, felhasználókat, szolgáltatásokat

Ne tárolj ide saját projekteket – csak a rendszer használja