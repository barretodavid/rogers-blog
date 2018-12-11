import { Input, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

export abstract class BaseComponent implements ControlValueAccessor {
  @Input() label: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
