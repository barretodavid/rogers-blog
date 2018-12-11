import { Component, Input, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-input',
  template: `
  <mat-form-field class="w-100">
    <mat-label>{{ label }}</mat-label>
    <input [type]="type" matInput [formControl]="controlDir.control">
    <mat-error *ngIf="controlDir.control.hasError('required')">
      This field is required
    </mat-error>
    <mat-error *ngIf="controlDir.control.hasError('email')">This field should be an email</mat-error>
    <mat-error *ngIf="controlDir.control.hasError('minlength')">This field needs to have at least 10 characters</mat-error>
  </mat-form-field>
  `,
})
export class InputComponent extends BaseComponent {
  @Input() type = 'text';

  constructor(@Self() public controlDir: NgControl) {
    super(controlDir);
  }
}
