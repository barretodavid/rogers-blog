import { ContactComponent } from './contact.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, NgControl, FormControl } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Component, Input, Self } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BaseInput } from '../base-input.class';

@Component({
  selector: 'app-input',
  template: '<input [type]="type" [formControl]="controlDir.control">'
})
class MockInputComponent extends BaseInput {
  @Input() type: string;
  constructor(@Self() public controlDir: NgControl) {
    super(controlDir);
  }
}

@Component({
  selector: 'app-textarea',
  template: '<textarea [formControl]="controlDir.control"></textarea>'
})
class MockTextareaComponent extends BaseInput {
  constructor(@Self() public controlDir: NgControl) {
    super(controlDir);
  }
}

describe('ContactComponent', () => {

  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        MockInputComponent,
        MockTextareaComponent,
      ]
    })
    .overrideComponent(MockInputComponent, {
      set: {
        providers: [{
          provide: NgControl,
          useValue: new FormControl(''),
        }]
      }
    })
    .overrideComponent(MockTextareaComponent, {
      set: {
        providers: [{
          provide: NgControl,
          useValue: new FormControl(''),
        }]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
  });

  describe('when provided a name, a properly formatted email and a message of more than 10 characters', () => {
    it('should mark all fields as valid', () => {
      fixture.componentInstance.form.patchValue({
        name: 'David',
        email: 'barretollano@gmail.com',
        message: 'Hello more than 10 characters'
      });
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot();
    });
  });

  describe('when provided an empty name, an improperly formatted email and a message of less than 10 characters', () => {
    it('should mark all fields as invalid', () => {
      fixture.componentInstance.form.patchValue({
        name: '',
        email: 'barretollanogmail.com',
        message: 'Hello'
      });
      fixture.detectChanges();
      expect(fixture).toMatchSnapshot();
    });
  });

});

