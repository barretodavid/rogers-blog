import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';
import { ListComponent } from './list.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { InputComponent } from './input.component';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListComponent,
    CreateComponent,
    ContactComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * ContactComponent
 * Name => required
 * Email => required, valid email format
 * Message => required, >= 10 characters
 * Button: Send | Clear
 */
