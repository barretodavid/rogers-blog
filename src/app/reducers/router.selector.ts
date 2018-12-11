import { Injectable } from '@angular/core';
import { State } from './index';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterSelector {
  public id$: Observable<string>;

  constructor(private store: Store<State>) {
    this.id$ = store.pipe(
      map(state => state.router.state.params.id),
    );
  }
}
