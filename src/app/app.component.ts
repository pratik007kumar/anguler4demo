import { Component } from '@angular/core';

export class Contact {
  id: number;
  name: string;
  email: string;
  mobile: string;
  
}


@Component({
  selector: 'my-app',
  template: `<div class="container">
  			<h1>{{title}}</h1>
	  			<div class="row">
	  				<div class="col-lg-6">
	  				<div class="form-group">
	  				<label class="label label-default" >Name:</label>
	  				<input [(ngModel)]="contact.name" placeholder="name" class="form-control">
	  				</div>

	  				<div class="form-group">
	  				<label class="label">Mobile:</label>
	  				<input [(ngModel)]="contact.mobile" class="form-control" placeholder="name">
	  				</div>

	  				<div class="form-group">
	  				<label class="label">Email:</label>
	  				<input type="email" [(ngModel)]="contact.email" class="form-control" placeholder="name">
	  				</div>

 

	  				</div>
	  			</div>
  			</div>
  	`,
})
export class AppComponent  { 
	title = 'Angular Test contact';


contact: Contact ={
			id:1,name:'pratik',mobile:"9708213024",email:"pratik007kumar@gmail.com"
			};
	 }
