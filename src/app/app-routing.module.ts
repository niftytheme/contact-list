import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AddnewcontactComponent } from './addnewcontact/addnewcontact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    pathMatch: 'full'
  },
  {
    path: 'add_new_contact',
    component: AddnewcontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
