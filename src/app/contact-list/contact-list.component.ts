import { Component, OnInit } from '@angular/core';
import simpleData from '../../assets/json-data/recent-contact.json';
import allUsersData from '../../assets/json-data/contacts.json';
declare var $:any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:string = '';

  // Latest Users
  lastUsers = simpleData['data'];
  // All Users
  currentUser: string;  
  users  = allUsersData['data'];    
  // Alphabetical Scrollbar
  scrollbarChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  checkIfNew(firstName: string) {
    if(this.currentUser === firstName.charAt(0).toLowerCase()) {
      return false;
    } else {
      this.currentUser = firstName.charAt(0).toLowerCase();
      return true;
    }
  }         

  ngOnInit() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('.list-box').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
      }
    });
    
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
      if($("#myInput").val().length != 0) {
        $('.list-title, .latest-contacts').hide();
      } else {
        $('.list-title, .latest-contacts').show();
      }
    });
  }

}
