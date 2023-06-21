import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactListComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ContactListModule { }
