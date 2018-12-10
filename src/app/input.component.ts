import { Component, Input, Self } from '@angular/core';
import { NgControl, FormControl, ControlValueAccessor, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <mat-form-field>
    <mat-label>{{ label }}</mat-label>
    <input [type]="type" matInput [formControl]="controlDir.control">
    <mat-error *ngIf="controlDir.control.hasError('required')">
      This field is required
    </mat-error>
    <mat-error *ngIf="controlDir.control.hasError('email')">This field should be an email</mat-error>
  </mat-form-field>
  `,
  styles: [`
    :host() {
      display: block;
      width: 100%;
    }
  `],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
