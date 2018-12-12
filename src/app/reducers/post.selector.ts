import { Injectable } from '@angular/core';
import { State, Post } from './models';
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

  getPost(id: string): Observable<Post> {
    return this.store.pipe(
      map(state => state.posts),
      map(posts => posts.find(post => post.id === id))
    );
  }
}
