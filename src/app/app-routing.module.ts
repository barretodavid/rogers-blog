import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list.component';
import { SaveComponent } from './components/save/save.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: SaveComponent },
  { path: 'edit/:id', component: SaveComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
