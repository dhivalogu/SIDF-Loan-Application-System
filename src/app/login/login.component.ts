import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //assets
  logo:string='assets/images/sidf_logo_en.svg';
  vision_logo:string='assets/images/vision_2030_logo.svg';
  appStore:string='assets/images/app-store.svg';
  playStore:string='assets/images/google-play.svg';

  
  user_id:string='';
  password:string='';
  wrongPassword:Boolean=false;
  

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  //authenticate the credentials by posting data to the server
  login()
  {
      const credential={
        user_id:this.user_id,
        password:this.password
      };
      console.log(credential);
      this.http.post<LoginResponse>("http://localhost:3000/login",credential).subscribe
      (
        (responseData)=>{

          //route to dashboard page if the credentials are correct
          if(responseData.code == '1')
          {
            this.router.navigate(['dashboard']);
          }
          //show the error message if the credentials are wrong
          else
          {
            this.wrongPassword=!this.wrongPassword;
          }

        }
      );
       
  }

  check()
  {
    alert('Success');

  }
}
