# TypeScript Cheat Sheet

---

# type vs interface

## Interface

Objektum szerkezet leírása.

```ts
interface User {
  id: number;
  name: string;
}
```

Használat:

```ts
const user: User = {
  id: 1,
  name: 'Laci'
};
```

---

## Type

Rugalmasabb.

```ts
type User = {
  id: number;
  name: string;
};
```

---

## Mikor melyik?

Általában:

```ts
interface
```

* DTO
* API model
* Objektum

```ts
type
```

* Union
* Utility type
* Összetettebb típus

---

# Union Type

```ts
type Status =
  | 'loading'
  | 'success'
  | 'error';
```

---

# Intersection Type

```ts
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type Worker = Person & Employee;
```

---

# Optional Property

```ts
interface User {
  id: number;
  name?: string;
}
```

Lehet hiányozni.

---

# Readonly

```ts
interface User {
  readonly id: number;
}
```

Nem módosítható.

---

# Partial

Minden mező opcionális lesz.

```ts
interface User {
  id: number;
  name: string;
}
```

```ts
Partial<User>
```

Olyan lesz:

```ts
{
  id?: number;
  name?: string;
}
```

---

# Pick

Csak bizonyos mezők.

```ts
type UserPreview =
  Pick<User, 'id' | 'name'>;
```

---

# Omit

Mezők eltávolítása.

```ts
type UserWithoutId =
  Omit<User, 'id'>;
```

---

# Record

Kulcs-érték objektum.

```ts
type UserMap =
  Record<string, User>;
```

---

# keyof

```ts
type UserKeys = keyof User;
```

Eredmény:

```ts
'id' | 'name'
```

---

# Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

Használat:

```ts
identity<string>('hello');
identity<number>(10);
```

---

# Enum

Régen gyakori.

```ts
enum Role {
  Admin,
  User
}
```

Ma gyakran inkább:

```ts
type Role =
  'admin'
  | 'user';
```

---

### TypeScript

* interface
* type
* union
* generics
* Omit
* Pick
* Partial
* Record
