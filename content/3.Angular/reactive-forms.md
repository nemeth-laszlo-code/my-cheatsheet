---
title: Reactive Forms
description: Reactive Forms használata
---


---

# Reactive Forms kérdések

Erre is számíts.

```ts
this.form = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.email]
});
```

Tudd:

* FormGroup
* FormControl
* Validators
* patchValue()
* setValue()
* valueChanges

---