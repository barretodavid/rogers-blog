import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

const createActionType = 'Create blog post';

export class CreateAction implements Action {
  type = createActionType;
  constructor(public payload: Post) {}
}

export interface Post {
  title: string;
  content: string;
}

export interface State {
  posts: Post[];
}

function postsReducer(posts: Post[] = [], action: CreateAction): Post[] {
  switch (action.type) {
    case createActionType:
      return [...posts, action.payload];
    default:
      return posts;
  }
}

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
