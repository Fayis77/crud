import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  contactList: Array<any> = [];
  name: string = '';
  phone: string = '';
  Dob: string = '';
  saveFlag:boolean=true;
  contactIndex:number | undefined;
  ngOnInit(): void {
    this.getAllContactList();
    this.checkParams();
  }
  checkParams():void{
    this.route.queryParams.subscribe((res:Params)=>{
      this.contactIndex=parseInt(res['index']);
      console.log(this.contactIndex);
      this.saveFlag=false;
    })
  }
  constructor(private contact: ContactService, private router: Router, private route: ActivatedRoute) {}
  getAllContactList(): void {
    this.contactList = this.contact.getContacts();
  }
  submit(): void {
    this.contact.addContact({
      name: this.name,
      phone: this.phone,
      Dob: this.Dob,
    });
    this.router.navigate(['/']);
    if(!this.saveFlag){
      
    }
  }
}
