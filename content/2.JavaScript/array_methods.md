---
title: Array Methods
description: JavaScript tömbmetódusok – map, filter, reduce és társai
---

# JavaScript Array Methods

## Iteráció

### map() – Átalakítás

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]

const users = [{ name: "Anna", age: 25 }];
const names = users.map((u) => u.name);
// ['Anna']
```

### filter() – Szűrés

```javascript
const evens = numbers.filter((n) => n % 2 === 0);
// [2, 4]

const adults = users.filter((u) => u.age >= 18);
```

### reduce() – Összegzés

```javascript
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// Objektummá alakítás
const byId = users.reduce((acc, u) => {
  acc[u.id] = u;
  return acc;
}, {});
```

## Keresés

```javascript
const arr = [1, 2, 3, 4, 5];

arr.find((n) => n > 3); // 4 (első találat)
arr.findIndex((n) => n > 3); // 3 (index)
arr.includes(3); // true
arr.indexOf(3); // 2
arr.some((n) => n > 4); // true (van ilyen?)
arr.every((n) => n > 0); // true (mind ilyen?)
```

## Módosítás

```javascript
// Másolat készítése módosítással (immutable!)
const newArr = [...arr, 6]; // hozzáfűzés
const withoutFirst = arr.slice(1); // az első elem nélkül
const filtered = arr.filter((_, i) => i !== 2); // index szerint törlés

// Eredeti tömb módosítása (mutable!)
arr.push(6); // végére told
arr.pop(); // végéről levesz
arr.unshift(0); // elejére told
arr.shift(); // elejéről levesz
arr.splice(1, 2); // 1. indextől 2 elemet töröl
```

## Rendezés és transzformáció

```javascript
[3, 1, 4, 1, 5].sort((a, b) => a - b); // növekvő
[3, 1, 4, 1, 5].sort((a, b) => b - a); // csökkenő

// Lapítás
[
  [1, 2],
  [3, 4],
].flat(); // [1,2,3,4]
arr.flatMap((n) => [n, n * 2]); // map + flat egyszerre

// Szétbontás
Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]
[...new Set([1, 1, 2, 2, 3])]; // [1,2,3] egyedi elemek
```
