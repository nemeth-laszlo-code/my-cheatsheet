---
title: CSS Grid
description: CSS Grid Layout referencia – sorok, oszlopok, pozicionálás
---

# CSS Grid Cheatsheet

## Alapok

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 egyenlő oszlop */
  grid-template-rows: auto;
  gap: 1rem; /* sor és oszlopköz */
  /* column-gap: 1rem; row-gap: 0.5rem; külön is megadható */
}
```

## repeat() és fr

```css
/* 12 oszlopos grid */
.grid {
  grid-template-columns: repeat(12, 1fr);
}

/* Auto-fill: annyi oszlop, amennyi elfér */
.grid {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* Auto-fit: nyújtja az elemeket, hogy kitöltse a sort */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

## Elem pozicionálás

```css
.item {
  grid-column: 1 / 3; /* 1. oszloptól 3. oszlopig */
  grid-row: 1 / 2; /* 1. sortól 2. sorig */

  /* shorthand */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */

  /* span: átfed X oszlopot */
  grid-column: span 2;
}
```

## Named template areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

## Középre igazítás

```css
/* Elem középre a cellában */
.grid {
  display: grid;
  place-items: center; /* align-items + justify-items shorthand */
}

/* Egy elem középre */
.item {
  place-self: center;
}
```
