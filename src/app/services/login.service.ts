import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../login/login-response.model';
import { Router } from '@angular/router';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  login(loginData: any) {
    this.http
      .post<LoginResponse>('http://localhost:3200/login', loginData)
      .subscribe((responseData) => {
        console.log(responseData);
        if (responseData.code == '1') {
          this.router.navigate(['dashboard']);
        } else {
          alert('Enter valid User ID/Password');
        }
      });
  }
}
