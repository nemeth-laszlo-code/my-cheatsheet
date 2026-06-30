---
title: Komponensek közötti kommunikáció
description: Komponensek közötti kommunikáció
---

# Angular Komponensek Közötti Kommunikáció 

## 1. Parent → Child (`@Input`)

A szülő adatot küld a gyermek komponensnek.

### Child komponens

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ type }}</p>`
})
export class ChildComponent {
  @Input() type: string = '';
}
```

### Parent template

```html
<app-child [type]="'admin'"></app-child>
```

### Használat:

* config
* title
* user data
* boolean flag

---

# 2. Child → Parent (`@Output` + `EventEmitter`)

A gyermek eseményt küld vissza.

### Child komponens

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Küldés</button>`
})
export class ChildComponent {
  @Output() changeEvt = new EventEmitter<boolean>();

  sendData() {
    this.changeEvt.emit(true);
  }
}
```

### Parent template

```html
<app-child (changeEvt)="handleChange($event)"></app-child>
```

### Parent TS

```ts
handleChange(value: boolean) {
  console.log(value);
}
```

### Használat:

* button click
* form submit
* modal close
* toggle state

---

# 3. Kétirányú adatkapcsolat

```ts
@Input() value: string = '';
@Output() valueChange = new EventEmitter<string>();
```

### Parent:

```html
<app-child [(value)]="username"></app-child>
```

---

# 4. Testvér komponensek (Sibling) – Service + RxJS

## Shared Service

```ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private messageSource = new BehaviorSubject<string>('Alapértelmezett');
  currentMessage$ = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
```

---

## Sender komponens

```ts
constructor(private dataService: DataService) {}

updateMessage() {
  this.dataService.changeMessage('Új adat');
}
```

---

## Receiver komponens

```ts
message = '';

constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.currentMessage$.subscribe(msg => {
    this.message = msg;
  });
}
```

---

# 5. Modern Angular (Signals + `input()` / `output()`)

## Child

```ts
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="change()">Click</button>`
})
export class ChildComponent {
  type = input<string>('');
  changeEvt = output<boolean>();

  change() {
    this.changeEvt.emit(true);
  }
}
```

---

## Parent

```html
<app-child [type]="'admin'" (changeEvt)="handleChange($event)" />
```

---

# 6. ViewChild (Parent közvetlenül eléri Child-ot)

```ts
@ViewChild(ChildComponent) child!: ChildComponent;

ngAfterViewInit() {
  console.log(this.child.type);
}
```

### Mikor?

* form reset
* child method hívás
* imperative control

---

# 7. Content Projection (`ng-content`)

```html
<app-card>
  <h2>Cím</h2>
</app-card>
```

```html
<div class="card">
  <ng-content></ng-content>
</div>
```

---

# Gyors döntési segédlet

| Helyzet             | Megoldás                       |
| ------------------- | ------------------------------ |
| Parent → Child      | `@Input` / `input()`           |
| Child → Parent      | `@Output` / `output()`         |
| Sibling             | Service + RxJS / Signals Store |
| Deep hierarchy      | State management               |
| Direct child access | `ViewChild`                    |
| Wrapper UI          | `ng-content`                   |

---

# RxJS Subject választó

| Típus             | Mikor?           |
| ----------------- | ---------------- |
| `Subject`         | Események        |
| `BehaviorSubject` | Aktuális state   |
| `ReplaySubject`   | Több előző érték |

---

# Best Practice

## Régebbi Angular:

```ts
@Input()
@Output()
```

## Modern Angular:

```ts
input()
output()
signal()
```

---

# Tipikus hibák

## Rossz:

```ts
@Input() type;
```

## Jó:

```ts
@Input() type: string = '';
```

---

## Rossz:

```ts
@Output() change = new EventEmitter();
```

## Jó:

```ts
@Output() change = new EventEmitter<boolean>();
```

---

# Aranyszabály

**Egyszerű parent-child:** `Input/Output`
**Komplex shared state:** `Service + RxJS`
**Modern Angular:** `Signals + input/output`
