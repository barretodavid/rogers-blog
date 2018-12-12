import { Action } from '@ngrx/store';
import { Post } from './models';

export enum CreatePostActionType {
  Start = 'Create blog post start',
  Success = 'Create blog post success',
  Error = 'Create blog post error',
}

export class CreatePostStartAction implements Action {
  type = CreatePostActionType.Start;
  constructor(public payload: Post) {}
}

export class CreatePostSuccessAction implements Action {
  type = CreatePostActionType.Success;
  constructor(public payload: Post) {}
}

export class CreatePostErrorAction implements Action {
  type = CreatePostActionType.Error;
  constructor(public payload = null) {}
}

export type CreatePostAction = CreatePostStartAction | CreatePostSuccessAction | CreatePostErrorAction;

export enum UpdatePostActionType {
  Start = 'Update blog post start',
  Success = 'Update blog post success',
  Error = 'Update blog post error',
}

export class UpdatePostStartAction implements Action {
  type = UpdatePostActionType.Start;
  constructor(public payload: Post) {}
}

export class UpdatePostSuccessAction implements Action {
  type = UpdatePostActionType.Success;
  constructor(public payload: Post) {}
}

export class UpdatePostErrorAction implements Action {
  type = UpdatePostActionType.Error;
  constructor(public payload = null) {}
}

export type UpdatePostAction = UpdatePostStartAction | UpdatePostSuccessAction | UpdatePostErrorAction;

export type PostAction = CreatePostAction | UpdatePostAction;
