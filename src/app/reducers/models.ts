import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface State {
  posts: Post[];
  router: RouterReducerState<RouterStateUrl>;
}
