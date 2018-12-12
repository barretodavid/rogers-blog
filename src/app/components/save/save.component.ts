import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Post, State } from '../../reducers/models';
import { CreatePostStartAction, UpdatePostStartAction } from '../../reducers/post.actions';
import { Store } from '@ngrx/store';
import { v4 } from 'uuid';
import { RouterSelector } from 'src/app/reducers/router.selector';
import { Subscription } from 'rxjs';
import { PostSelector } from 'src/app/reducers/post.selector';
import { mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
})
export class SaveComponent implements OnInit, OnDestroy {
  form: FormGroup;
  postId: string;
  subs: Subscription;

  constructor(
    public fb: FormBuilder,
    private store: Store<State>,
    private routerSelector: RouterSelector,
    private postSelector: PostSelector,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['My Title', Validators.required],
      content: ['My Content', Validators.required],
    });

    this.subs = this.routerSelector.id$.pipe(
      filter(id => !!id),
      mergeMap(id => this.postSelector.getPost(id)),
    ).subscribe(post => {
      this.postId = post.id;
      this.form.patchValue({
        title: post.title,
        content: post.content,
      });
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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
    const action = this.postId ? new UpdatePostStartAction(post) : new CreatePostStartAction(post);
    this.postId = post.id;
    this.store.dispatch(action);
  }

  onClear(): void {
    this.form.reset();
  }

}
