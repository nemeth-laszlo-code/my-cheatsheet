---
title: Observable vs Signal
description: NGRX használata
---

# RxJS Cheat Sheet Angular Interjúra

## 1. Observable vs Signal

Ez szinte biztos kérdés.

| Signal                   | Observable                  |
| ------------------------ | --------------------------- |
| Szinkron state           | Aszinkron adatfolyam        |
| Egyszerű olvasás         | Stream alapú                |
| `signal()`, `computed()` | `Observable`, `Subject`     |
| Component state          | HTTP, websocket, user event |
| Nem kell subscribe       | Subscribe szükséges         |

Válasz:

> A Signalokat komponens state kezelésére használom. Az Observable továbbra is jobb HTTP hívásokhoz, websocketekhez és eseménysorozatokhoz.

---

# 2. Subject vs BehaviorSubject

## Subject

```ts
const subject = new Subject<number>();

subject.next(10);
```

* Nem tárol előző értéket.
* Az új feliratkozó nem kapja meg a korábbi adatokat.

---

## BehaviorSubject

```ts
const subject = new BehaviorSubject<number>(0);
```

* Kötelező kezdőérték.
* Az új subscriber azonnal megkapja az aktuális értéket.

Interjúválasz:

> State kezeléshez általában BehaviorSubjectet használok, mert mindig van aktuális értéke.

---

# 3. map()

Adat átalakítás.

```ts
users$.pipe(
  map(users => users.length)
)
```

---

# 4. filter()

Szűrés.

```ts
numbers$.pipe(
  filter(x => x > 10)
)
```

---

# 5. tap()

Mellékhatás.

```ts
users$.pipe(
  tap(users => console.log(users))
)
```

Nem módosít adatot.

Interjún gyakori kérdés:

> Mi a különbség a map és tap között?

Válasz:

> A map módosítja az adatot, a tap csak mellékhatást végez.

---

# 6. switchMap()

Nagyon fontos.

Példa keresőmező:

```ts
searchControl.valueChanges.pipe(
  switchMap(query =>
    this.http.get(`/api/search?q=${query}`)
  )
);
```

Mit csinál?

* Új kérés érkezik.
* A régi HTTP kérés eldobódik.
* Csak a legutolsó marad aktív.

Interjúválasz:

> HTTP kereséseknél gyakran használom, mert automatikusan megszakítja az előző kéréseket.

---

# 7. mergeMap()

```ts
source$.pipe(
  mergeMap(item =>
    this.http.get(...)
  )
)
```

* Minden kérés lefut.
* Nem töröl semmit.

---

# 8. concatMap()

```ts
source$.pipe(
  concatMap(item =>
    this.http.get(...)
  )
)
```

* Sorban futtat.
* Megvárja az előző végét.

---

# 9. debounceTime()

Keresőmezőknél.

```ts
searchControl.valueChanges.pipe(
  debounceTime(300)
)
```

Megvár 300 ms-et.

---

# 10. distinctUntilChanged()

```ts
searchControl.valueChanges.pipe(
  distinctUntilChanged()
)
```

Ha ugyanazt írja be újra:

```
hello
hello
```

akkor csak egyszer fut.

---

# 11. takeUntilDestroyed()

Angular 16+ kedvenc interjúkérdés.

```ts
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

this.userService.users$
  .pipe(
    takeUntilDestroyed()
  )
  .subscribe();
```

Nem kell:

```ts
ngOnDestroy()
```

és

```ts
destroy$ = new Subject<void>();
```

---

# 12. Async Pipe

```html
<div>{{ user$ | async }}</div>
```

Előny:

* Automatikus subscribe
* Automatikus unsubscribe

Interjúválasz:

> Template-ben ahol lehet, async pipe-ot használok manuális subscribe helyett.


# Ha csak 1 órád van interjú előtt

Gyakorold ezt a 10 témát:

1. Signals (`signal`, `computed`, `effect`)
2. `input`, `output`, `model`
3. Observable vs Signal
4. Subject vs BehaviorSubject
5. `map`
6. `tap`
7. `filter`
8. `switchMap`
9. Reactive Forms
10. Router + Guard

Ezekkel a témákkal a legtöbb junior Angular interjú technikai részének jelentős részét le tudod fedni. A leírt tudásod alapján különösen a Signals, Reactive Forms és Router témákban már elég jó alapjaid vannak.
