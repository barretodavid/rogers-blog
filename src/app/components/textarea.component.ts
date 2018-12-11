import { Component, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseInput } from './base-input.class';

@Component({
  selector: 'app-textarea',
  template: `
  <mat-form-field class="w-100">
    <mat-label>{{ label }}</mat-label>
    <textarea matInput [formControl]="controlDir.control"></textarea>
    <mat-error *ngIf="controlDir.control.hasError('required')">This field is required</mat-error>
    <mat-error *ngIf="controlDir.control.hasError('minlength')">This field needs to have at least 10 characters</mat-error>
  </mat-form-field>
  `,
})
export class TextareaComponent extends BaseInput {
  constructor(@Self() public controlDir: NgControl) {
    super(controlDir);
  }
}
