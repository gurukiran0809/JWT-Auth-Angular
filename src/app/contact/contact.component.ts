import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private userService:UserService){

  }
  contactus(data:any){
   this.userService.contact_us(data)
  }
}
