
# JavaScript Cheat Sheet

---

# null vs undefined

## undefined

Nincs érték.

```js
let name;

console.log(name);
```

↓

```js
undefined
```

---

## null

Szándékosan üres.

```js
let user = null;
```

---

## Interjúválasz

> Az undefined azt jelenti, hogy nincs érték hozzárendelve, a null pedig egy szándékosan üres érték.

---

# NaN

```js
Number('abc');
```

↓

```js
NaN
```

Nem szám.

---

Ellenőrzés:

```js
Number.isNaN(value);
```

---

# == vs ===

## ==

Típuskonverzió.

```js
'5' == 5
```

↓

```js
true
```

---

## ===

Szigorú összehasonlítás.

```js
'5' === 5
```

↓

```js
false
```

Interjún:

> Mindig a `===` operátort használom.

---

# Ternary Operator

```js
const result =
  age >= 18
    ? 'adult'
    : 'minor';
```

---

# Nullish Coalescing ??

Csak null és undefined esetén.

```js
const username =
  value ?? 'Guest';
```

---

Példa:

```js
0 ?? 100
```

↓

```js
0
```

---

# OR ||

```js
0 || 100
```

↓

```js
100
```

---

Ezért Angularban gyakran jobb:

```js
??
```

---

# Optional Chaining

```js
user?.address?.city
```

Ha valami hiányzik:

```js
undefined
```

nem exception.

---

# &&

Rövidített feltétel.

```js
isLoggedIn && showMenu();
```

---

# Spread Operator

Objektum:

```js
const user = {
  ...oldUser,
  age: 30
};
```

---

Tömb:

```js
const arr = [
  ...arr1,
  ...arr2
];
```

---

# Destructuring

Objektum:

```js
const { name, age } = user;
```

---

Tömb:

```js
const [first, second] = arr;
```

---

# Array Methods

---

# map()

Átalakít.

```js
const names =
  users.map(u => u.name);
```

---

# filter()

Szűr.

```js
const adults =
  users.filter(
    u => u.age >= 18
  );
```

---

# find()

Első találat.

```js
const user =
  users.find(
    u => u.id === 1
  );
```

---

# some()

Van legalább egy?

```js
users.some(
  u => u.isAdmin
);
```

---

# every()

Mind megfelel?

```js
users.every(
  u => u.active
);
```

---

# sort()

## Számok

```js
numbers.sort(
  (a, b) => a - b
);
```

Növekvő.

---

```js
numbers.sort(
  (a, b) => b - a
);
```

Csökkenő.

---

## Objektum

```js
users.sort(
  (a, b) =>
    a.age - b.age
);
```

---

## String

```js
users.sort(
  (a, b) =>
    a.name.localeCompare(b.name)
);
```

---

# reduce()

Interjún nagyon szeretik.

---

## Összegzés

```js
const sum =
  numbers.reduce(
    (acc, curr) => acc + curr,
    0
  );
```

---

Lépések:

```js
[1,2,3,4]
```

```text
0+1=1
1+2=3
3+3=6
6+4=10
```

---

## Objektum összegzés

```js
const total =
  products.reduce(
    (sum, product) =>
      sum + product.price,
    0
  );
```

---

## Group By

Nagyon jó interjúpélda.

```js
const grouped =
users.reduce((acc,user) => {

  const key = user.role;

  if(!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(user);

  return acc;

}, {});
```

---

Eredmény:

```js
{
  admin: [...],
  user: [...]
}
```

---

# Reference vs Primitive

## Primitive

```js
number
string
boolean
null
undefined
symbol
bigint
```

Másolás:

```js
let a = 10;
let b = a;
```

Új érték keletkezik.

---

## Reference

```js
Object
Array
Function
```

```js
const a = {
  name: 'Laci'
};

const b = a;
```

Ugyanarra az objektumra mutat.

---

```js
b.name = 'Jani';
```

↓

```js
a.name
```

is megváltozik.

---



### JavaScript

* null vs undefined
* NaN
* === vs ==
* ??
* &&
* Optional Chaining
* map
* filter
* find
* sort
* reduce
* spread
* destructuring
* reference vs primitive