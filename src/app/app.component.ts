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
			<li *ngFor="let contact of contacts"
	        [class.selected]="contact === selectedContact"
	        (click)="onSelect(contact)"
			>
				{{contact.name}}
			</li>
  			</ul>
  			</div>

  			    <div class="col-lg-6" *ngIf="selectedContact">
			      <div class="well">
			      <div class="row">

			      <h2>{{selectedContact.name}} details!</h2>
			      <div class="col-lg-6">
	  				<div class="form-group">
	  				<label class="label label-default" >Name:</label>
	  				<br>
	  				<br>
	  				<input [(ngModel)]="selectedContact.name" placeholder="name" class="form-control">
	  				</div>

	  				<div class="form-group">

	  				<label class="label label-default">Mobile:</label>
	  				<br>
	  				<br>
	  				<input [(ngModel)]="selectedContact.mobile" class="form-control" placeholder="name">
	  				</div>

	  				<div class="form-group ">
	  				<label class="label label-default">Email:</label>
	  				<br>
	  				<br>
	  				<input type="email" [(ngModel)]="selectedContact.email" class="form-control" placeholder="name">
	  				</div>
	  				</div>
	  				</div>

			    </div>
  			</div>
  	`,
 styles:[`
 	.contact-list{ list-style:none}
 	.contact-list li{ border:#ccc 1px solid; padding:5px; background:#eee; margin:5px;}
 	.contact-list li:hover{ border:#f00 1px solid; padding:5px; margin:5px;background:#999;}
 	.selected{ border:#f00 1px solid !important; padding:5px !important; margin:5px !important;background:#999 !important;}
 `] 	
})

export class AppComponent  { 
	title = 'Angular Test contact';

	contacts= CONTACTS;
	selectedContact: Contact;

	onSelect(contact: Contact): void {
	  this.selectedContact = contact;
	}
}
