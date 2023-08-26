import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private userService:UserService){

  }

  userregistration(data:any){
    console.log(data)
    this.userService.register(data)
  }
}
