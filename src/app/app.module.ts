import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; //

import { AppComponent }  from './app.component';

import { ContactDetailsComponent }  from './contact-details.component';

@NgModule({
  imports:      [ 
  	BrowserModule ,
  	FormsModule,
  ],
  declarations: [
  	AppComponent ,
  	ContactDetailsComponent,
   ],
  bootstrap:[
  	AppComponent 
   ]
})
export class AppModule { }
