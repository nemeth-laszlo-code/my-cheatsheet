---
title: RXJS
description: RXJS alapok
---
# RxJS Alapok & Gyakori Operátorok
## RxJS Operátorok kategóriák szerint

| Kategória                           | Operátor               | Leírás & Használati eset                                                      |
| ----------------------------------- | ---------------------- | ----------------------------------------------------------------------------- |
| **Transzformáció**                  | `map`                  | Módosítja a stream értékeit (pl. `user -> user.id`).                          |
|                                     | `pluck`                | Kiválaszt egy konkrét tulajdonságot az objektumból (rövidített map).          |
|                                     | `scan`                 | Olyan, mint az `Array.reduce`: felhalmozza az értékeket (pl. számláló).       |
| **Szűrés**                          | `filter`               | Csak a feltételnek megfelelő adatokat engedi tovább.                          |
|                                     | `take(n)`              | Csak az első `n` értéket veszi át, utána leiratkozik.                         |
|                                     | `distinctUntilChanged` | Csak akkor küld adatot, ha eltér az előzőtől (duplikáció szűrés).             |
|                                     | `debounceTime(ms)`     | Vár a megadott ideig, és csak az utolsó értéket küldi (pl. keresőmező).       |
| **Flattening (Nested Observables)** | `switchMap`            | **Megszakítja** az előző kérést, ha új érkezik. Ideális kereséshez.           |
|                                     | `mergeMap`             | Minden kérést **párhuzamosan** futtat.                                        |
|                                     | `concatMap`            | **Sorban** futtatja a kéréseket.                                              |
|                                     | `exhaustMap`           | **Figyelmen kívül hagyja** az újakat, amíg a jelenlegi fut. Loginhoz ideális. |
| **Kombinálás**                      | `combineLatest`        | Több stream legutolsó értékeit kombinálja.                                    |
|                                     | `withLatestFrom`       | A fő streamhez hozzácsap egy másik stream legfrissebb értékét.                |
|                                     | `forkJoin`             | Megvárja az összes stream befejezését (`Promise.all`-szerű).                  |
| **Utility / Hiba**                  | `tap`                  | Mellékhatásokhoz (logolás, loading spinner).                                  |
|                                     | `catchError`           | Elkapja a hibát és fallback Observable-t ad vissza.                           |
|                                     | `retry(n)`             | Hiba esetén újrapróbálkozik `n` alkalommal.                                   |



4. rxJs Subject Típusok(Local State)

| Típus             | Leírás                                                           | Mikor használd?                   |
| ----------------- | ---------------------------------------------------------------- | --------------------------------- |
| `Subject`         | Nincs kezdőértéke, csak a feliratkozás utáni adatokat kapod meg. | Események (pl. gombnyomás).       |
| `BehaviorSubject` | **Van kezdőértéke**, és a legutolsó értéket azonnal megkapod.    | Adat tárolás (pl. aktuális user). |
| `ReplaySubject`   | Puffereli az utolsó `N` értéket az új feliratkozóknak.           | Több korábbi adat visszajátszása. |



## Creation operátorok
- of(1,2,3) – gyorsan értékekből Observable-t csinál
- from(fetch(...)) – promise-ból Observable
- interval(1000) – időzített eseményeket ad
- fromEvent(button, 'click') – események figyelése

## Pipeable (láncolható) operátorok
Ezeket  pipe()-on belül használjuk az Observable módosítására

## Átalakító operátorok
| Operátor	| Mit csinál |	Példa |
| -------- | --------- | ------ |
| map      | értéket átalakít | map(x=>x*2) |
| mergeMap | belső Observable-t lapít és összefűz | API hívásokhoz ideális |
| switchMap |	csak az utolsó belső Observable marad aktív	keresőmező, | autocomplete |
| concatMap |	sorban futtatja a belső Observablékat	| ha a sorrend számít |
| exhaustMap |	amíg fut egy belső Observable, az újakat eldobja |	pl. duplakattintás elkerülése |


## Szűrő operátorok
| Operátor	| Mit csinál |	Példa |
| -------- | --------- | ------ |
| filter |	csak a feltételnek megfelelő értékek mennek tovább |	filter(user => user.active) |
| take(n) |	csak az első n értéket veszi |	take(1) = első érték és lezár |
| takeUntil(obs) |	addig figyel, amíg másik Observable értéket nem ad	|
| first() / last() |	csak az első / utolsó értéket adja	|
| debounceTime(ms)	| vár egy kis időt, mielőtt továbbítja az értéket |


## Hiba- és mellékhatás-kezelés
| Operátor	| Mit csinál |	Példa |
| -------- | --------- | ------ |
| tap |	mellékhatás (log, dispatch, service hívás) |	tap(x => console.log(x))
| catchError |	hibát kezel és új Observable-t ad |	catchError(err => of([]))
| retry(n) |	újra próbálja a hibás Observable-t |	retry(3)



## Kombinálók
| Operátor	| Mit csinál |	Példa |
| -------- | --------- | ------ |
| combineLatest |	több Observable legutóbbi értékét kombinálja |	combineLatest([a$, b$])
| forkJoin |	több Observable utolsó értékeit adja vissza, ha mind véget ért	API-k párhuzamos lekérése| 
| merge |	több Observable eseményét egyesíti	|
| concat |	egymás után futtat több Observable-t |

