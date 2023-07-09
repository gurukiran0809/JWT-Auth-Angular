import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient,private router:Router) { }

  login(data:any){
    this.http.post("http://127.0.0.1:8000/api/login",data).subscribe((result:any)=>{
      localStorage.setItem("token",result['authorisation']['token']);
      this.router.navigate(['/profile']);
    })
  }

  logout(){
    let headers = new HttpHeaders()
    .set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    console.log(headers);
    this.http.post("http://127.0.0.1:8000/api/logout",{},{headers}).subscribe((result:any)=>{
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
    })
  }

  profile(){
    let headers = new HttpHeaders()
    .set("Authorization",`Bearer ${localStorage.getItem('token')}`)
    return this.http.post("http://127.0.0.1:8000/api/user_details",{},{headers}); 
  }
}
 