import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.logout();
  }
}
