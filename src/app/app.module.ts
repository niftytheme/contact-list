import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FilterPipe } from './filter.pipe';
import { AddnewcontactComponent } from './addnewcontact/addnewcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    FilterPipe,
    AddnewcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
