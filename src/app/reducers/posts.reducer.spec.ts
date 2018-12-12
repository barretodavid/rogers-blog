import { postsReducer } from './posts.reducer';
import { CreatePostSuccessAction, UpdatePostSuccessAction, UpdatePostErrorAction } from './post.actions';
import { Post } from './models';

describe('postsReducer', () => {
  describe('when creating a new post successfully', () => {
    it('should add the post at the end of the array', () => {
      const oldState: Post[] = [];
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
      const oldState: Post[] = [
        { id: 'i1', title: 't1', content: 'c1' },
        { id: 'i2', title: 't2', content: 'c2' },
      ];
      const post: Post = { id: 'i2', title: 'x2', content: 'x2' };
      const action = new UpdatePostSuccessAction(post);
      const newState = postsReducer(oldState, action);
      const expectedState: Post[] = [
        { id: 'i1', title: 't1', content: 'c1' },
        { id: 'i2', title: 'x2', content: 'x2' },
      ];
      expect(newState).toEqual(expectedState);
    });
  });

  describe('when providing an unsupported action', () => {
    it('should not perform any changes on the store', () => {
      const oldState: Post[] = [];
      const action = new UpdatePostErrorAction();
      const newState = postsReducer(oldState, action);
      const expectedState: Post[] = [];
      expect(newState).toEqual(expectedState);
    });
  });
});
