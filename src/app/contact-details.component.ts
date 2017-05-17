import { Component ,Input} from '@angular/core';
 
import { Contact } from './contact';
@Component({
  selector: 'contact-details',
  template: ` 
  			    <div class="col-lg-6" *ngIf="contact">
			      <div class="well">
			      <div class="row">

			      <h2>{{contact.name}} details!</h2>
			      <div class="col-lg-6">
	  				<div class="form-group">
	  				<label class="label label-default" >Name:</label>
	  				<br>
	  				<br>
	  				<input [(ngModel)]="contact.name" placeholder="name" class="form-control">
	  				</div>

	  				<div class="form-group">

	  				<label class="label label-default">Mobile:</label>
	  				<br>
	  				<br>
	  				<input [(ngModel)]="contact.mobile" class="form-control" placeholder="name">
	  				</div>

	  				<div class="form-group ">
	  				<label class="label label-default">Email:</label>
	  				<br>
	  				<br>
	  				<input type="email" [(ngModel)]="contact.email" class="form-control" placeholder="name">
	  				</div>
	  				</div>
	  				</div>

			    </div>
  	`,
 styles:[`
 `] 	
})

export class ContactDetailsComponent  { 
	
  @Input() contact: Contact;


}
