import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-change-password-request',
  templateUrl: './change-password-request.component.html',
  styleUrls: ['./change-password-request.component.css']
})
export class ChangePasswordRequestComponent {
  resetForm: FormGroup;
  errors = null;
  successMsg = null;
  constructor(
    public fb: FormBuilder,
    public userService: UserService
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void { }
  onSubmit(){
    this.userService.sendResetPasswordLink(this.resetForm.value).subscribe(
      (result:any) => {
        this.successMsg = result;
      },(error:any) => {
        this.errors = error.message;
      })
  }
}
