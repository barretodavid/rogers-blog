import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PostService } from './post.service';
import { CreatePostActionType, CreatePostStartAction, CreatePostSuccessAction, CreatePostErrorAction } from './post.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

type CreatePostEffectAction = CreatePostSuccessAction | CreatePostErrorAction;

@Injectable({
  providedIn: 'root'
})
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
  ) {}

  @Effect()
  create$: Observable<CreatePostEffectAction> = this.actions$.pipe(
    ofType<CreatePostStartAction>(CreatePostActionType.Start),
    mergeMap(action =>
      this.postService.create(action.payload).pipe(
        map(post => new CreatePostSuccessAction(post)),
        catchError(() => of(new CreatePostErrorAction())),
      )
    ),
  );
}
