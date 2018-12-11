import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

const createActionType = 'Create blog post';
const updateActionType = 'Update blog post';

export class CreateAction implements Action {
  type = createActionType;
  constructor(public payload: Post) {}
}

export class UpdateAction implements Action {
  type = updateActionType;
  constructor(public payload: Post) {}
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface State {
  posts: Post[];
}

// const myArray = [1, 2, 3];
// const double = myArray.map(value => value * 2);
// [2, 4, 6]

function postsReducer(posts: Post[] = [], action: CreateAction | UpdateAction): Post[] {
  switch (action.type) {
    case createActionType:
      return [...posts, action.payload];
    case updateActionType:
      return posts.map(post => post.id === action.payload.id ? action.payload : post);
    default:
      return posts;
  }
}

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
