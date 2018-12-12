import { NavigationComponent } from './navigation.component';
import { TestBed } from '@angular/core/testing';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('NavigationComponent', () => {
  it('should render its template', () => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        RouterModule.forRoot([])
      ],
      declarations: [
        NavigationComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    }).compileComponents().then(() => {
      const fixture = TestBed.createComponent(NavigationComponent);
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot();
    });
  });
});

