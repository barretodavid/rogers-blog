import { Injectable } from '@angular/core';
import { State, Post } from './index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostSelector {
  public all$: Observable<Post[]>;

  constructor(private store: Store<State>) {
    this.all$ = store.pipe(
      map(state => state.posts),
    );
  }
}
