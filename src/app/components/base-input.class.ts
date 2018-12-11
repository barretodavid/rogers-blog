import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Input } from '@angular/core';

export abstract class BaseInput implements ControlValueAccessor {
  @Input() label: string;

  constructor(controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
