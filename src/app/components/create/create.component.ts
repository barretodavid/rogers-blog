import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Post, CreateAction, State } from '../../reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private store: Store<State>,
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
    const post: Post = {
      title: this.form.value.title,
      content: this.form.value.content,
    };
    const action = new CreateAction(post);
    this.store.dispatch(action);
  }

  onClear(): void {
    this.form.reset();
  }

}
