---
title: Angular Change Detection
description: Angular Change Detection működése
---

# Angular Interview Cheatsheet

---

## Change Detection: Default vs OnPush

**A lényeg egy mondatban:** Az Angular minden változásnál ellenőrzi az egész komponensfát – hacsak meg nem mondod neki, hogy ne tegye.

### Default
Bármilyen eseményre (kattintás, HTTP válasz, timer) végigfut az **összes komponensen** és megnézi, változott-e valami. Nagy appban ez lassú.

### OnPush
Egy komponenst csak akkor ellenőriz, ha:
- az `@Input()` **referenciája** megváltozott (nem az értéke – a referenciája!)
- egy **Signal** értéke változott
- egy **`async pipe`**-olt Observable emittált
- manuálisan triggereled (`ChangeDetectorRef.markForCheck()`)
- DOM event történt a komponensen belül

### Beállítás

```typescript
@Component({
  selector: 'app-valami',
  changeDetection: ChangeDetectionStrategy.OnPush, // ← ez az
  template: `...`
})
export class ValamiComponent { }
```

### Default vs OnPush összehasonlítás

| | Default | OnPush |
|---|---|---|
| Mikor ellenőriz? | Minden eseménynél | Csak ha változás van az ágban |
| Teljesítmény | Lassabb nagy appban | Sokkal gyorsabb |
| @Input() változás | Értékre figyel | Referenciára figyel |
| Signal támogatás | Igen | Igen (ideális kombináció) |
| async pipe | Működik | Működik + triggerel |
| Manuális trigger | `detectChanges()` | `markForCheck()` |
| Ajánlott használat | Egyszerű/kis komponens | Nagyobb, teljesítménykritikus komponens |

### Interjú megfogalmazás

> *"OnPush strategy-t használok, amikor a komponens inputjai ritkán változnak, vagy signal/observable alapú az adat. Ez sokkal kevesebb felesleges ellenőrzést jelent, főleg nagyobb fa esetén."*

---