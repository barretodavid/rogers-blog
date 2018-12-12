import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { v4 } from 'uuid';
import { routerReducer } from '@ngrx/router-store';
import {
  CreatePostActionType,
  UpdatePostActionType,
  PostAction
} from './post.actions';
import { Post, State } from './models';

const initialPosts: Post[] = [
  { id: v4(), title: 'Post 1', content: 'Some content' },
  { id: v4(), title: 'Post 2', content: 'Some content' },
];

function postsReducer(posts: Post[] = initialPosts, action: PostAction): Post[] {
  switch (action.type) {
    case CreatePostActionType.Success:
      return [...posts, action.payload];
    case UpdatePostActionType.Success:
      return posts.map(post => post.id === action.payload.id ? action.payload : post);
    default:
      return posts;
  }
}

export const reducers: ActionReducerMap<State> = {
  posts: postsReducer,
  router: routerReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
