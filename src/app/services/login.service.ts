import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../login/login-response.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router,private SnackBar:MatSnackBar) {}

  login(loginData: any) {
    this.http
      .post<LoginResponse>('http://localhost:3200/login', loginData)
      .subscribe((responseData) => {
        console.log(responseData);
        if (responseData.code == '1') {
          this.router.navigate(['dashboard']);
        } else {
          this.SnackBar.open("Enter Valid User ID/Password","Retry")
        }
      });
  }
}
