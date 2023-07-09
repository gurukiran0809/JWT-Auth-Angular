import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user_details:any;

  constructor(private userService:UserService){
     userService.profile().subscribe((data)=>{
     console.log(data);
     this.user_details=data
     });
  }
  // ngOnInit(){
  //   this.userService.profile();
  // }
}
