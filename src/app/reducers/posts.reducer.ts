import { Post } from './models';
import { PostAction, CreatePostActionType, UpdatePostActionType } from './post.actions';

export function postsReducer(posts: Post[] = [], action: PostAction): Post[] {
  switch (action.type) {
    case CreatePostActionType.Success:
      return [...posts, action.payload];
    case UpdatePostActionType.Success:
      return posts.map(post => post.id === action.payload.id ? action.payload : post);
    default:
      return posts;
  }
}
