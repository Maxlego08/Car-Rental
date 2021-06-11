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

  // tslint:disable-next-line:typedef
  onContactFormSubmit() {
    const email = (document.getElementById('email') as HTMLInputElement).value;

    const topic = (document.getElementById('topic') as HTMLInputElement).value;

    const message = (document.getElementById('message') as HTMLInputElement).value;


    console.log('From : ', email);
    console.log('Topic : ', topic);
    console.log(message);
  }
}
