import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contactList:Array<any>=[];
  constructor(private contact:ContactService,
    private router:Router){}
  

  ngOnInit():void{
    this.getAllContact();

  }
  getAllContact():void{
    this.contactList=this.contact.getContacts();
    console.log(this.contactList);
  }
  
  deleteContact(index:number):void{
    this.contact.deleteContact(index);
  }
  editContact(index:number):void{
    this.router.navigate(['/add'],{queryParams:{index:index}});
  }
   
  

  

}
