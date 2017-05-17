import { Component } from '@angular/core';

export class Contact {
  id: number;
  name: string;
  mobile: string;
  email: string;

  
}
const CONTACTS: Contact[] = [
      { id: 11, name: 'Mr. Nice',mobile:'9708213024',email:"pratik007kumar@gmail.com" },
      { id: 12, name: 'Narco',mobile:'9708213024',email:"pratik007kumar@gmail.com" },
      { id: 13, name: 'Bombasto' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 14, name: 'Celeritas',mobile:'9708213024',email:"pratik007kumar@gmail.com" },
      { id: 15, name: 'Magneta' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 16, name: 'RubberMan' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 17, name: 'Dynama' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 18, name: 'Dr IQ' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 19, name: 'Magma' ,mobile:'9708213024',email:"pratik007kumar@gmail.com"},
      { id: 20, name: 'Tornado',mobile:'9708213024',email:"pratik007kumar@gmail.com" },
    ];

@Component({
  selector: 'my-app',
  template: `<div class="container">
  			<h1>{{title}}</h1>
  			<div class="col-lg-6">
  			<ul class="contact-list">
			<li *ngFor="let contact of contacts">
				{{contact.name}}
			</li>
  			</ul>
  			</div>
  			</div>
  	`,
 styles:[`
 	.contact-list{ list-style:none}
 	.contact-list li{ border:#ccc 1px solid; padding:5px; background:#eee; margin:5px;}
 	.contact-list li:hover{ border:#f00 1px solid; padding:5px; margin:5px; color:#fff; background:#999;}
 `] 	
})

export class AppComponent  { 
	title = 'Angular Test contact';

	contacts= CONTACTS;
}
