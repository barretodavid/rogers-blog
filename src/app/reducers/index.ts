import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { State } from './models';
import { postsReducer } from './posts.reducer';

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
