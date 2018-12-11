import { Component } from '@angular/core';
import { PostSelector } from '../reducers/post.selector';

@Component({
  selector: 'app-list',
  template: `
    <mat-card class="mv2" *ngFor="let post of postSelector.all$ | async">
      <mat-card-title>
        <a [routerLink]="['/edit', post.id]">{{ post.title }}</a>
      </mat-card-title>
      <mat-card-content>{{ post.content }}</mat-card-content>
    </mat-card>
  `
})
export class ListComponent {
  constructor(public postSelector: PostSelector) {}
}
