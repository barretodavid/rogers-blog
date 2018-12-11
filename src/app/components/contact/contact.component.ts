import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get name(): AbstractControl {
    return this.form.get('name');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  get message(): AbstractControl {
    return this.form.get('message');
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onClear(): void {
    this.form.reset();
    // this.name.hasError('email')
  }

}
