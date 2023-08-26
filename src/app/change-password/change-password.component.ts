import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  errors = null;
  constructor(
    public fb: FormBuilder,
    route: ActivatedRoute,
    public userService: UserService
  ) {
    this.changePasswordForm = this.fb.group({
      email: [''],
      password: ['admin123'],
      password_confirmation: ['admin123'],
      passwordToken: [''],
    });
    route.queryParams.subscribe((params) => {
      this.changePasswordForm.controls['passwordToken'].setValue(
        params['token']
      );
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.userService.resetPassword(this.changePasswordForm.value).subscribe(
      (result:any) => {
        alert('Password has been updated');
        this.changePasswordForm.reset();
        
      },
      (error:any) => {
        this.handleError(error);
      }
    );
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
