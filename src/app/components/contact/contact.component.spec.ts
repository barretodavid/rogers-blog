import { ContactComponent } from './contact.component';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, NgControl, FormControl } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { InputComponent } from '../input.component';
import { TextareaComponent } from '../textarea.component';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const nameControl = new FormControl('David');
const messageControl = new FormControl('message');

describe('ContactComponent', () => {
  it('should render its template', () => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      declarations: [
        ContactComponent,
        InputComponent,
        TextareaComponent,
      ]
    })
    .overrideComponent(InputComponent, {
      set: {
        providers: [{
          provide: NgControl,
          useValue: nameControl,
        }]
      }
    })
    .overrideComponent(TextareaComponent, {
      set: {
        providers: [{
          provide: NgControl,
          useValue: messageControl,
        }]
      }
    })
    .compileComponents().then(() => {
      const fixture = TestBed.createComponent(ContactComponent);
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot();
    });
  });
});

