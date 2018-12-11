import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Post, CreateAction, State, UpdateAction } from '../../reducers/index';
import { Store } from '@ngrx/store';
import { v4 } from 'uuid';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit {
  form: FormGroup;
  postId: string;

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
      id: this.postId || v4(),
      title: this.form.value.title,
      content: this.form.value.content,
    };
    const action = this.postId ? new UpdateAction(post) : new CreateAction(post);
    this.postId = post.id;
    this.store.dispatch(action);
  }

  onClear(): void {
    this.form.reset();
  }

}
