---
title: ControlValueAccessor implementálása
description: ControlValueAccessor implementálása, ezzel Template Driven és Reactive Forms kompatibilissé tehetjük az akruális komponensünket
---

# ControlValueAccessor implementálása

## Komponens
```ts

import { NgClass } from '@angular/common';
import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
  imports: [NgClass],
  /* 
  //ez a fajta provider megadás akkor kell, ha nem szeretnénk magát a control-t elérni a template-ben
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInput),
      multi: true,
    },
  ], */
})

export class CustomInput implements ControlValueAccessor {
  @Input() name!: string;
  @Input() title!: string;
  value = '';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(val: string) {
    this.value = val;
    this.onChange(val);
  }
}
```

## Template 
  
```html
<div class="flex flex-col gap-1">
  <label [for]="name">{{ title }}</label>
  <input
    type="text"
    [name]="name"
    [value]="value"
    [id]="name"
    (input)="onInput($event.target.value)"
    (blur)="onTouched()"
    class="p-2 border-b w-100 bg-gray-100 active:outline-0 focus:outline-0"
    [ngClass]="{
      'border-red-500 bg-red-50':
        ngControl?.control?.invalid && ngControl?.control?.touched,
      'border-green-500':
        ngControl?.control?.valid && ngControl?.control?.touched
    }"
  />
</div>
```