import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from './contactus';
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contactus:Contactus[]=[
    {
       img:'https://icons.iconarchive.com/icons/blackvariant/shadow135-system/1024/Contacts-icon.png',
      pid: 12298,
        pname: 'Daniel Klein',
        pemail: 'dklaien.1@gmail.com',
        pnum: 7845698761,
        pqueries:'Payment/Refund',
        
      },
      {
        img:'https://icons.iconarchive.com/icons/blackvariant/shadow135-system/1024/Contacts-icon.png',
       pid: 12299,
         pname: 'Rebecca',
         pemail: 'rebecca.23@gmail.com',
         pnum: 9845698706,
         pqueries:'Offers, Discounts, Coupons',
         
       },
       {
        img:'https://icons.iconarchive.com/icons/blackvariant/shadow135-system/1024/Contacts-icon.png',
       pid: 12300,
         pname: 'S.Deepu',
         pemail: 'sdeepu.23@gmail.com',
         pnum: 9845667706,
         pqueries:'Manage Your Account',
       },
       {
        img:'https://icons.iconarchive.com/icons/blackvariant/shadow135-system/1024/Contacts-icon.png',
       pid: 12301,
         pname: 'Vineetha',
         pemail: 'y.vineetha.23@gmail.com',
         pnum: 6465698706,
         pqueries:'Other',
       }
    ];
    public getcontactusDetails(): any {
      const contactusObservable = new Observable(observe => {
        setTimeout(() => {
          observe.next(this.contactus);
        }, 1000);
      });
      return contactusObservable;
    }
    
}
