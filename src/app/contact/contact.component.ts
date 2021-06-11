import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onContactFormSubmit() {
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    ;
    let topic = (<HTMLInputElement>document.getElementById("topic")).value;
    ;
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    ;

    console.log("From : ", email);
    console.log("Topic : ", topic);
    console.log(message);
  }
}
