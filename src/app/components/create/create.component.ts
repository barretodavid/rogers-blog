import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['My Title', Validators.required],
      content: ['My Content', Validators.required],
    });
  }

  get title(): AbstractControl {
    return this.form.get('title');
  }

  get content(): AbstractControl {
    return this.form.get('content');
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onClear(): void {
    this.form.reset();
  }

}
