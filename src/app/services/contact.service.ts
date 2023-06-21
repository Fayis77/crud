import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  list:Array<any>=[];

  constructor() { 
    
  }
  addContact(data: any):void{
    this.list.push(data)
  }

  deleteContact(index:number):void{
    this.list.splice(index,1);
  }

  findIndex(data:any):number{
    const index:number=this.list.findIndex(element => element ===data);
    return index;
  }

  getContacts():Array<any>{
    return this.list
  }
  updateContact(index:number,data:any):void{
    this.list[index]=data;
  }
}
