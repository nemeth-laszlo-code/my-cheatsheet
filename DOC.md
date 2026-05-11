# CheatSheet App — Dokumentáció

## Áttekintés

Nuxt 4 alapú, kereshető fejlesztői referencia-lap alkalmazás. A tartalom Markdown fájlokból épül fel, amelyeket a Nuxt Content v3 modul indexel és szolgál ki.

## Tech stack

| Csomag | Verzió | Szerep |
|---|---|---|
| `nuxt` | ^4.4 | Framework |
| `@nuxt/content` | ^3.13 | MD tartalom kezelése és lekérdezése |
| `@nuxt/ui` | ^4.7 | UI komponensek (UAccordion, UModal, UButton, stb.) |
| `tailwindcss` | ^4.2 | Utility CSS |
| `@vueuse/nuxt` | ^14 | Vue composable-ok |
| `better-sqlite3` | ^12 | Content SQLite adatbázis (runtime) |

## Projekt struktúra

```
my-cheatsheet/
├── app/
│   ├── layouts/
│   │   └── default.vue        # Sidebar layout (accordion, keresés)
│   ├── pages/
│   │   ├── index.vue          # Főoldal (kategória kártyák)
│   │   └── [...slug].vue      # Cheatsheet lap megjelenítő
│   ├── assets/css/
│   │   └── main.css           # Globális stílusok + Tailwind import
│   └── app.config.ts          # UI szín konfiguráció (primary: green)
├── content/                   # Markdown tartalom (itt hozd létre a lapokat)
│   ├── 1.CSS/
│   │   ├── flexbox.md
│   │   └── grid.md
│   └── 2.JavaScript/
│       └── array_methods.md
└── nuxt.config.ts             # Nuxt konfiguráció
```

## Tartalom hozzáadása

Hozz létre egy mappát `content/` alatt (a szám-prefix a sorrendet határozza meg), majd adj hozzá `.md` fájlokat. Minden fájl tetején frontmatter szükséges:

```markdown
---
title: Flexbox alapok
description: A legfontosabb Flexbox tulajdonságok gyűjteménye.
---

# Flexbox CheatSheet
...
```

A mappa neve automatikusan megjelenik a sidebar accordion-ban. Az emoji ikonok a kategória neve alapján automatikusan rendelődnek (CSS → 🎨, JavaScript → ⚡, stb.).

### Mappa elnevezési konvenció

```
content/
├── 1.CSS/          → /css útvonal, "CSS" felirat a sidebarban
├── 2.JavaScript/   → /javascript útvonal
└── 3.TypeScript/   → /typescript útvonal
```

A vezető szám és pont (pl. `1.`) csak a sorrendet befolyásolja, az URL-ben nem jelenik meg.

## Főbb komponensek

### `layouts/default.vue`

Az alkalmazás kerete: sidebar + főtartalom.

**Sidebar funkciói:**
- **Logo + toggle gomb** — a sidebar összecsukható (collapsed mód: csak emoji ikonok látszanak)
- **UAccordion navigáció** — a kategóriák accordion panelekként jelennek meg. Az aktuális route-hoz tartozó kategória automatikusan kinyílik.
- **Keresés modal** — a "Keresés..." gombra kattintva `UModal` nyílik meg, ahol a lapok cím és kategória alapján szűrhetők. A keresési állapot `useState('search-open')` segítségével van megosztva a layout és a lapok között.

**UAccordion integráció:**
- `type="multiple"` — több kategória is nyitva lehet egyszerre
- `v-model:value="openCats"` — reaktív open state, `string[]` a `_path` értékekkel
- Minden kategóriának saját named slot (`#c_1_css`, `#c_2_javascript`, stb.) adja meg a nav item listát

### `pages/[...slug].vue`

A cheatsheet lapok megjelenítője. Minden `/css/flexbox` jellegű útvonalat ez a komponens kezel.

**Adatlekérés:**
```ts
const { data: page } = await useAsyncData(
  () => `page-${route.path}`,   // reaktív key → újratölt navigáláskor
  () => queryCollection('content').path(route.path).first()
)
```

A reaktív key (függvény formában) biztosítja, hogy ugyanazon lap-komponens reuse esetén is újratöltse az adatot az új URL-nek megfelelően.

**Topbar keresés gomb:**  
A `useState('search-open')` segítségével a layout keresés modalt nyitja meg.

**Prev/Next navigáció:**  
A testvér dokumentumok (azonos kategóriában lévő lapok) alapján automatikus lapozó.

### `pages/index.vue`

A főoldal. Az összes kategóriát és azok dokumentumait kártya nézetben mutatja. A hero szekcióban stat badge-ek láthatók (összesített lapszám, kategóriaszám).

## Keresés

A keresés client-side, cím és kategória alapú szűréssel működik. Nincs szükség szerver-oldali konfig módosításra — a navigációs adatból (`queryCollectionNavigation`) épül.

**A keresés megnyitható:**
1. A sidebar "Keresés..." gombjával
2. A cheatsheet lap topbarjában lévő nagyító ikonnal

**Keresési logika:**
```ts
allDocs.filter(doc =>
  doc.title.toLowerCase().includes(query) ||
  doc._catTitle.toLowerCase().includes(query)
)
```

## Szín konfiguráció

Az `app/app.config.ts`-ben:
```ts
ui: {
  colors: { primary: 'green', neutral: 'slate' }
}
```

A zöld skálát a `main.css` definiálja (`--color-green-*` változók a Nuxt zöld palettájával).

## Kategória emoji ikonok

Az `default.vue` és `[...slug].vue`-ban egyaránt definiált `catIcons` objektum határozza meg az emoji-kategória párosítást:

| Kulcs (lowercase) | Emoji |
|---|---|
| css | 🎨 |
| javascript | ⚡ |
| typescript | 🔷 |
| html | 🏗️ |
| vue | 💚 |
| react | ⚛️ |
| git | 🌿 |
| terminal | 🖥️ |
| bash | 💻 |
| python | 🐍 |

Ismeretlen kategória esetén: 📄

## Fejlesztői parancsok

```bash
pnpm dev        # fejlesztői szerver (http://localhost:3000)
pnpm build      # produkciós build
pnpm preview    # build előnézet
pnpm typecheck  # TypeScript ellenőrzés
pnpm lint       # ESLint
```
