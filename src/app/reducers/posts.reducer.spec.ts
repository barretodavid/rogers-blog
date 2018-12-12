import { postsReducer } from './posts.reducer';
import { CreatePostSuccessAction } from './post.actions';
import { Post } from './models';

describe('postsReducer', () => {
  describe('when creating a new post successfully', () => {
    it('should add the post at the end of the array', () => {
      const oldState = [];
      const post: Post = {
        id: 'a',
        title: 'b',
        content: 'c',
      };
      const action = new CreatePostSuccessAction(post);
      const newState = postsReducer(oldState, action);
      const expectedState: Post[] = [{
        id: 'a',
        title: 'b',
        content: 'c',
      }];
      expect(newState).toEqual(expectedState);
    });
  });

  describe('when updating an existing post successfully', () => {
    it('should put the updated post in the correct location', () => {

    });
  });
});
