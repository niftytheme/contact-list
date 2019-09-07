import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.component.html',
  styleUrls: ['./addnewcontact.component.css']
})
export class AddnewcontactComponent implements OnInit {

  // objects
  firstName: string = '';
  lastName: string = '';
  mobileNumber: number;
  email:string = '';
  contacts = [];

  constructor() {}

  ngOnInit() {  
    
  }

  addContact() {
    this.contacts.push(this.firstName);
  }

}
