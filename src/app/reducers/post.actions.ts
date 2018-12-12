import { Action } from '@ngrx/store';
import { Post } from './models';

export enum CreatePostActionType {
  Start = 'Create blog post start',
  Success = 'Create blog post success',
  Error = 'Create blog post error',
}

export class CreatePostStartAction implements Action {
  readonly type = CreatePostActionType.Start;
  constructor(public payload: Post) {}
}

export class CreatePostSuccessAction implements Action {
  readonly type = CreatePostActionType.Success;
  constructor(public payload: Post) {}
}

export class CreatePostErrorAction implements Action {
  readonly type = CreatePostActionType.Error;
}

export type CreatePostAction = CreatePostStartAction | CreatePostSuccessAction | CreatePostErrorAction;

export enum UpdatePostActionType {
  Start = 'Update blog post start',
  Success = 'Update blog post success',
  Error = 'Update blog post error',
}

export class UpdatePostStartAction implements Action {
  readonly type = UpdatePostActionType.Start;
  constructor(public payload: Post) {}
}

export class UpdatePostSuccessAction implements Action {
  readonly type = UpdatePostActionType.Success;
  constructor(public payload: Post) {}
}

export class UpdatePostErrorAction implements Action {
  readonly type = UpdatePostActionType.Error;
}

export type UpdatePostAction = UpdatePostStartAction | UpdatePostSuccessAction | UpdatePostErrorAction;

export type PostAction = CreatePostAction | UpdatePostAction;
